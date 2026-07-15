import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import { Tooltip } from '../../../components/Tooltip'
import type { TooltipTheme } from '../../../components/Tooltip'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { TooltipControls } from './TooltipControls'
import { tooltipCodeGen, defaultTooltipConfig } from './tooltipCodeGen'
import type { TooltipConfig } from './tooltipCodeGen'
import './TooltipWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'
import { loadDraft } from '../../draftStore'

// ── Helpers ────────────────────────────────────────────────────────────────────

function resolveCanvasBg(theme: TooltipConfig['theme']) {
  if (theme === 'light') return 'light' as const
  if (theme === 'dark')  return 'dark'  as const
  return 'auto' as const
}

function resolveTooltipTheme(theme: TooltipConfig['theme']): TooltipTheme | undefined {
  if (theme === 'auto') return undefined
  return theme
}

// ── URL hash sync (shareable config permalink) ────────────────────────────────

function encodeConfig(cfg: TooltipConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): TooltipConfig | null {
  try {
    const decoded = JSON.parse(decodeURIComponent(atob(hash)))
    return { ...defaultTooltipConfig, ...decoded } as TooltipConfig
  } catch { return null }
}

function readHashConfig(): TooltipConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Tooltip style builder ─────────────────────────────────────────────────────

function buildTooltipStyle(config: TooltipConfig): CSSProperties {
  return {
    ...(config.borderRadius && { borderRadius: config.borderRadius }),
    ...(config.padding      && { padding: config.padding }),
    ...(config.gap          && { gap: config.gap }),
    ...(config.width        && { width: config.width }),
  }
}

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

// ── TooltipWorkspace ──────────────────────────────────────────────────────────

export const TooltipWorkspace = () => {
  const [config, setConfig] = useState<TooltipConfig>(() => readHashConfig() ?? loadDraft<TooltipConfig>('tooltip') ?? defaultTooltipConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  // Keep URL hash in sync with config
  useEffect(() => {
    window.location.hash = encodeConfig(config)
  }, [config])

  // Inject customCss as a live <style> block so real CSS selectors work:
  // :hover, .ds-tooltip--top, #id, media queries, etc.
  useEffect(() => {
    if (!config.customCss.trim()) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-custom', '')
    el.textContent = config.customCss
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.customCss])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  const tooltipProps = {
    title:       config.title,
    body:        config.body || undefined,
    placement:   config.placement,
    theme:       resolveTooltipTheme(config.theme),
    bgColor:     config.bgColor     || undefined,
    borderColor: config.borderColor || undefined,
    textColor:   config.textColor   || undefined,
    className:   config.customClass || undefined,
    id:          config.customId    || undefined,
    style:       buildTooltipStyle(config),
  }

  return (
    <div className="tooltip-ws">
      {/* ── Center: canvas + code block ──────────────────────────────── */}
      <div className="tooltip-ws__main">

        {/* Canvas toolbar */}
        <div className="tooltip-ws__toolbar">
          <span className="tooltip-ws__toolbar-label">Preview</span>
          <div className="tooltip-ws__toolbar-actions">
            <button
              className={`tooltip-ws__toolbar-btn${compare ? ' tooltip-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Compare light and dark themes side by side"
            >
              <CompareIcon />
              Compare themes
            </button>
            <button
              className={`tooltip-ws__toolbar-btn${linkCopied ? ' tooltip-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        {/* Canvas area — single or compare (light page vs dark page) */}
        <div className="tooltip-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light theme">
                <Tooltip {...tooltipProps} theme="light" />
              </Canvas>
              <Canvas bg="dark" componentLabel="dark theme">
                <Tooltip {...tooltipProps} theme="dark" />
              </Canvas>
            </>
          ) : (
            <Canvas bg={resolveCanvasBg(config.theme)} componentLabel="Tooltip">
              <Tooltip {...tooltipProps} />
            </Canvas>
          )}
        </div>

        <CodeBlock code={tooltipCodeGen(config)} />

        <PublishBar
          componentId="tooltip"
          draftConfig={config}
          componentLabel="Tooltip"
          override={buildWorkspaceOverride('tooltip', config, '.ds-tooltip')}
        />
      </div>

      {/* ── Right: control panel ─────────────────────────────────────── */}
      <ControlPanel>
        <TooltipControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
