import { useState, useEffect } from 'react'
import { SocialMediaPost } from '../../../components/SocialMediaPost'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { SocialMediaControls } from './SocialMediaControls'
import { socialMediaCodeGen, defaultSocialMediaConfig } from './socialMediaCodeGen'
import type { SocialMediaConfig } from './socialMediaCodeGen'
import './SocialMediaWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'

// ── Toolbar icons ─────────────────────────────────────────────────────────────

const CompareIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="0.75" y="1.75" width="4.5" height="9.5" rx="0.75" />
    <rect x="7.75" y="1.75" width="4.5" height="9.5" rx="0.75" />
  </svg>
)

const LinkIcon = ({ copied }: { copied: boolean }) =>
  copied ? (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polyline points="2,7 5,10 11,4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 7.5a2.5 2.5 0 0 0 3.54.04l2-2a2.5 2.5 0 0 0-3.54-3.54l-1.12 1.11" strokeLinecap="round" />
      <path d="M8 5.5a2.5 2.5 0 0 0-3.54-.04l-2 2a2.5 2.5 0 0 0 3.54 3.54l1.11-1.12" strokeLinecap="round" />
    </svg>
  )

// ── Config permalink ──────────────────────────────────────────────────────────

function encodeConfig(cfg: SocialMediaConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}
function decodeConfig(hash: string): SocialMediaConfig | null {
  try { return { ...defaultSocialMediaConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as SocialMediaConfig } catch { return null }
}
function readHashConfig(): SocialMediaConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Rendered preview (shared between single + compare) ─────────────────────────

const SocialMediaPreview = ({ config, theme }: { config: SocialMediaConfig; theme: SocialMediaConfig['theme'] }) => (
  <div style={{ width: 280, maxWidth: '100%' }}>
    <SocialMediaPost
      platform={config.platform}
      type={config.type}
      theme={theme}
      caption={config.type === 'image' ? config.caption : undefined}
      text={config.type === 'text' ? config.text : undefined}
      hashtags={config.type === 'text' ? config.hashtags : undefined}
      pagination={config.type === 'image' && config.showPagination ? { current: 1, total: 5 } : undefined}
      className={config.customClass || undefined}
      id={config.customId || undefined}
    />
  </div>
)

// ── SocialMediaWorkspace ─────────────────────────────────────────────────────

export const SocialMediaWorkspace = () => {
  const [config, setConfig] = useState<SocialMediaConfig>(() => readHashConfig() ?? defaultSocialMediaConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useEffect(() => { window.location.hash = encodeConfig(config) }, [config])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  // Inject spacing/color overrides as a live <style> block targeting the
  // post's internal elements (tokens live on __media etc.).
  useEffect(() => {
    const rules: string[] = []
    if (config.cardBg) rules.push(`.ds-social-media-post__media { background: ${config.cardBg} !important; }`)
    if (config.textColor) rules.push(`.ds-social-media-post { color: ${config.textColor} !important; }`)
    if (config.radius) rules.push(`.ds-social-media-post__media { border-radius: ${config.radius} !important; }`)
    if (config.textPadding) rules.push(`.ds-social-media-post__media--text { padding: ${config.textPadding} !important; }`)
    if (config.borderWidth) {
      rules.push(`.ds-social-media-post__media { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-smp-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.cardBg, config.textColor, config.radius, config.textPadding, config.borderWidth, config.borderStyle, config.borderColor])

  // Inject Custom CSS as a live <style> block so real selectors work
  useEffect(() => {
    if (!config.customCss.trim()) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-custom', '')
    el.textContent = config.customCss
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.customCss])

  return (
    <div className="social-media-ws">
      <div className="social-media-ws__main">
        <div className="social-media-ws__toolbar">
          <span className="social-media-ws__toolbar-label">Preview</span>
          <div className="social-media-ws__toolbar-actions">
            <button
              className={`social-media-ws__toolbar-btn${compare ? ' social-media-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare((c) => !c)}
              type="button"
              title="Show light and dark themes side by side"
            >
              <CompareIcon />
              Compare themes
            </button>
            <button
              className={`social-media-ws__toolbar-btn${linkCopied ? ' social-media-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="social-media-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                <SocialMediaPreview config={config} theme="light" />
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                <SocialMediaPreview config={config} theme="dark" />
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.theme === 'dark' ? 'dark' : 'light'} componentLabel="SocialMediaPost">
              <SocialMediaPreview config={config} theme={config.theme} />
            </Canvas>
          )}
        </div>

        <CodeBlock code={socialMediaCodeGen(config)} />

        <PublishBar
          componentId="social-media"
          componentLabel="Social Media"
          override={buildWorkspaceOverride('social-media', config, '.ds-social-media-post')}
        />
      </div>

      <ControlPanel>
        <SocialMediaControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
