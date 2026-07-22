import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import { Card } from '../../../components/Card'
import { Button } from '../../../components/Button'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { CardControls } from './CardControls'
import { cardCodeGen, defaultCardConfig } from './cardCodeGen'
import type { CardConfig } from './cardCodeGen'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'
import { loadDraft } from '../../draftStore'
import { useScssSync } from '../../useScssSync'
import './CardWorkspace.scss'

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

function encodeConfig(cfg: CardConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}
function decodeConfig(hash: string): CardConfig | null {
  try { return { ...defaultCardConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as CardConfig } catch { return null }
}
function readHashConfig(): CardConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Card style + body style builders ──────────────────────────────────────────

function buildCardStyle(config: CardConfig): CSSProperties {
  return {
    ...(config.bgColor && { background: config.bgColor }),
    ...(config.borderRadius && { borderRadius: config.borderRadius }),
    ...(config.borderWidth && {
      borderWidth: config.borderWidth,
      borderStyle: (config.borderStyle || 'solid') as CSSProperties['borderStyle'],
      ...(config.borderColor && { borderColor: config.borderColor }),
    }),
    ...(config.shadow && { boxShadow: config.shadow }),
  }
}

function buildBodyStyle(config: CardConfig): CSSProperties {
  return {
    ...(config.paddingX && { paddingInline: config.paddingX }),
    ...(config.paddingY && { paddingBlock: config.paddingY }),
    ...(config.gap && { gap: config.gap }),
    ...(config.textColor && { color: config.textColor }),
    ...(config.fontFamily && { fontFamily: config.fontFamily }),
    ...(config.fontSize && { fontSize: config.fontSize }),
    ...(config.fontWeight && { fontWeight: config.fontWeight as CSSProperties['fontWeight'] }),
    ...(config.letterSpacing && { letterSpacing: config.letterSpacing }),
    ...(config.textTransform && config.textTransform !== 'none' && { textTransform: config.textTransform as CSSProperties['textTransform'] }),
  }
}

// ── Rendered card preview (shared between single + compare) ────────────────────

const CardPreview = ({ config, theme }: { config: CardConfig; theme: CardConfig['theme'] }) => (
  <div style={{ width: 360, maxWidth: '100%' }}>
    <Card
      theme={theme}
      orientation={config.orientation}
      interactive={config.interactive}
      className={config.customClass || undefined}
      id={config.customId || undefined}
      style={buildCardStyle(config)}
    >
      {config.showMedia && (
        <Card.Media shape={config.mediaShape} inset={config.orientation === 'horizontal'} />
      )}
      <Card.Body style={buildBodyStyle(config)}>
        <Card.Title>{config.title}</Card.Title>
        <Card.Text>{config.text}</Card.Text>
        {config.showActions && (
          <Card.Actions>
            <Button variant="plain">Cancel</Button>
            <Button>Confirm</Button>
          </Card.Actions>
        )}
      </Card.Body>
    </Card>
  </div>
)

// ── CardWorkspace ─────────────────────────────────────────────────────────────

export const CardWorkspace = () => {
  const [config, setConfig] = useState<CardConfig>(() => readHashConfig() ?? loadDraft<CardConfig>("card") ?? defaultCardConfig)

  // Pull colour values from the component's .scss into the UI (reverse sync).
  useScssSync<CardConfig>('card', setConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useEffect(() => { window.location.hash = encodeConfig(config) }, [config])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

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
    <div className="card-ws">
      <div className="card-ws__main">
        <div className="card-ws__toolbar">
          <span className="card-ws__toolbar-label">Preview</span>
          <div className="card-ws__toolbar-actions">
            <button
              className={`card-ws__toolbar-btn${compare ? ' card-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare((c) => !c)}
              type="button"
              title="Show light and dark themes side by side"
            >
              <CompareIcon />
              Compare themes
            </button>
            <button
              className={`card-ws__toolbar-btn${linkCopied ? ' card-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="card-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                <CardPreview config={config} theme="light" />
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                <CardPreview config={config} theme="dark" />
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.theme === 'dark' ? 'dark' : 'light'} componentLabel="Card">
              <CardPreview config={config} theme={config.theme} />
            </Canvas>
          )}
        </div>

        <CodeBlock code={cardCodeGen(config)} />

        <PublishBar
          componentId="card"
          draftConfig={config}
          componentLabel="Card"
          override={buildWorkspaceOverride('card', config, '.ds-card')}
        />
      </div>

      <ControlPanel>
        <CardControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
