import { useState, useEffect } from 'react'
import { List, ListItem } from '../../../components/List'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { ListControls } from './ListControls'
import { listCodeGen, defaultListConfig } from './listCodeGen'
import type { ListConfig } from './listCodeGen'
import './ListWorkspace.scss'
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

function encodeConfig(cfg: ListConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}
function decodeConfig(hash: string): ListConfig | null {
  try { return { ...defaultListConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as ListConfig } catch { return null }
}
function readHashConfig(): ListConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Rendered preview (shared between single + compare) ─────────────────────────

const ListPreview = ({ config, theme }: { config: ListConfig; theme: ListConfig['theme'] }) => (
  <div style={{ width: 360, maxWidth: '100%' }}>
    <List
      theme={theme}
      bordered={config.bordered}
      className={config.customClass || undefined}
      id={config.customId || undefined}
    >
      {Array.from({ length: config.itemCount }, (_, i) => (
        <ListItem
          key={i}
          variant={config.variant}
          index={i + 1}
          label={`List item ${i + 1}`}
          description={config.showDescription ? 'Supporting description text' : undefined}
        />
      ))}
    </List>
  </div>
)

// ── ListWorkspace ─────────────────────────────────────────────────────────────

export const ListWorkspace = () => {
  const [config, setConfig] = useState<ListConfig>(() => readHashConfig() ?? defaultListConfig)
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
  // List's internal elements (tokens live on __item etc.).
  useEffect(() => {
    const rules: string[] = []
    if (config.textColor) rules.push(`.ds-list { color: ${config.textColor} !important; }`)
    if (config.itemHoverBg) rules.push(`.ds-list__item:hover { background: ${config.itemHoverBg} !important; }`)
    if (config.gap) rules.push(`.ds-list { gap: ${config.gap} !important; }`)
    if (config.itemPadding) rules.push(`.ds-list__item { padding: ${config.itemPadding} !important; }`)
    if (config.itemRadius) rules.push(`.ds-list__item { border-radius: ${config.itemRadius} !important; }`)
    if (config.borderWidth) {
      rules.push(`.ds-list__item { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-list-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.textColor, config.itemHoverBg, config.gap, config.itemPadding, config.itemRadius, config.borderWidth, config.borderStyle, config.borderColor])

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
    <div className="list-ws">
      <div className="list-ws__main">
        <div className="list-ws__toolbar">
          <span className="list-ws__toolbar-label">Preview</span>
          <div className="list-ws__toolbar-actions">
            <button
              className={`list-ws__toolbar-btn${compare ? ' list-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare((c) => !c)}
              type="button"
              title="Show light and dark themes side by side"
            >
              <CompareIcon />
              Compare themes
            </button>
            <button
              className={`list-ws__toolbar-btn${linkCopied ? ' list-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="list-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                <ListPreview config={config} theme="light" />
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                <ListPreview config={config} theme="dark" />
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.theme === 'dark' ? 'dark' : 'light'} componentLabel="List">
              <ListPreview config={config} theme={config.theme} />
            </Canvas>
          )}
        </div>

        <CodeBlock code={listCodeGen(config)} />

        <PublishBar
          componentId="list"
          componentLabel="List"
          override={buildWorkspaceOverride('list', config, '.ds-list')}
        />
      </div>

      <ControlPanel>
        <ListControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
