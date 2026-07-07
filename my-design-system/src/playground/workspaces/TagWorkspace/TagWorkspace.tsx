import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import { Tag } from '../../../components/Tag'
import type { TagState, TagTheme } from '../../../components/Tag'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { TagControls } from './TagControls'
import { tagCodeGen, defaultTagConfig } from './tagCodeGen'
import type { TagConfig } from './tagCodeGen'
import './TagWorkspace.scss'

// ── Star icon (matches Tag.stories.tsx) ───────────────────────────────────────

const StarIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
)

// ── Helpers ────────────────────────────────────────────────────────────────────

function resolveCanvasBg(theme: TagConfig['theme']): 'auto' | 'light' | 'dark' {
  if (theme === 'light') return 'light'
  if (theme === 'dark') return 'dark'
  return 'auto'
}

function resolveTagTheme(theme: TagConfig['theme']): TagTheme | undefined {
  if (theme === 'auto') return undefined
  return theme
}

// ── URL hash sync (shareable config permalink) ────────────────────────────────

function encodeConfig(cfg: TagConfig): string {
  try {
    return btoa(encodeURIComponent(JSON.stringify(cfg)))
  } catch {
    return ''
  }
}

function decodeConfig(hash: string): TagConfig | null {
  try {
    const decoded = JSON.parse(decodeURIComponent(atob(hash)))
    return { ...defaultTagConfig, ...decoded } as TagConfig
  } catch {
    return null
  }
}

function readHashConfig(): TagConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Tag style builder (shared between single and compare views) ───────────────

function buildTagStyle(config: TagConfig): CSSProperties {
  return {
    ...(config.borderRadius && { borderRadius: config.borderRadius }),
    ...(config.paddingX && { paddingInline: config.paddingX }),
    ...(config.paddingY && { paddingBlock: config.paddingY }),
    ...(config.gap && { gap: config.gap }),
    ...(config.borderWidth && {
      borderWidth: config.borderWidth,
      borderStyle: (config.borderStyle || 'solid') as CSSProperties['borderStyle'],
      ...(config.borderColor && { borderColor: config.borderColor }),
    }),
  }
}

// ── Compare icon ──────────────────────────────────────────────────────────────

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

// ── TagWorkspace ──────────────────────────────────────────────────────────────

export const TagWorkspace = () => {
  const [config, setConfig] = useState<TagConfig>(() => readHashConfig() ?? defaultTagConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  // Keep URL hash in sync with config
  useEffect(() => {
    window.location.hash = encodeConfig(config)
  }, [config])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  // Inject customCss as a live <style> block so real CSS selectors work:
  // :hover, .ds-tag--hover, #id, media queries, etc.
  useEffect(() => {
    if (!config.customCss.trim()) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-custom', '')
    el.textContent = config.customCss
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.customCss])

  const tagProps = {
    label: config.label,
    theme: resolveTagTheme(config.theme),
    iconStart: config.showIconStart ? <StarIcon /> : undefined,
    iconEnd: config.showIconEnd ? <StarIcon /> : undefined,
    bgColor: config.bgColor || undefined,
    textColor: config.textColor || undefined,
    className: config.customClass || undefined,
    id: config.customId || undefined,
    style: buildTagStyle(config),
  }

  return (
    <div className="tag-ws">
      {/* ── Center: canvas + code block ──────────────────────────────── */}
      <div className="tag-ws__main">
        {/* Canvas toolbar */}
        <div className="tag-ws__toolbar">
          <span className="tag-ws__toolbar-label">Preview</span>
          <div className="tag-ws__toolbar-actions">
            <button
              className={`tag-ws__toolbar-btn${compare ? ' tag-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show default and hover states side by side"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`tag-ws__toolbar-btn${linkCopied ? ' tag-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        {/* Canvas area — single or split */}
        <div className="tag-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg={resolveCanvasBg(config.theme)} componentLabel="default">
                <Tag {...tagProps} state="default" />
              </Canvas>
              <Canvas bg={resolveCanvasBg(config.theme)} componentLabel="hover">
                <Tag {...tagProps} state="hover" />
              </Canvas>
            </>
          ) : (
            <Canvas bg={resolveCanvasBg(config.theme)} componentLabel="Tag">
              <Tag {...tagProps} state={config.state as TagState} />
            </Canvas>
          )}
        </div>

        <CodeBlock code={tagCodeGen(config)} />
      </div>

      {/* ── Right: control panel ─────────────────────────────────────── */}
      <ControlPanel>
        <TagControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
