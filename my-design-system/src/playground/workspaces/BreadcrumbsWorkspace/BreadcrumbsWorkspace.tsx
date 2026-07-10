import { useState, useEffect } from 'react'
import { Breadcrumbs } from '../../../components/Breadcrumbs'
import type { BreadcrumbItemData } from '../../../components/Breadcrumbs'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { BreadcrumbsControls } from './BreadcrumbsControls'
import { breadcrumbsCodeGen, defaultBreadcrumbsConfig } from './breadcrumbsCodeGen'
import type { BreadcrumbsConfig } from './breadcrumbsCodeGen'
import './BreadcrumbsWorkspace.scss'

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

function encodeConfig(cfg: BreadcrumbsConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): BreadcrumbsConfig | null {
  try {
    const parsed = JSON.parse(decodeURIComponent(atob(hash)))
    const merged = { ...defaultBreadcrumbsConfig, ...parsed }
    if (!Array.isArray(merged.items)) merged.items = defaultBreadcrumbsConfig.items
    return merged as BreadcrumbsConfig
  } catch { return null }
}

function readHashConfig(): BreadcrumbsConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

function buildItems(config: BreadcrumbsConfig): BreadcrumbItemData[] {
  const items: BreadcrumbItemData[] = []
  if (config.showCollapsed && config.items.length > 0) {
    items.push({ label: config.items[0].label, href: config.items[0].href, key: 'a-0' })
    items.push({ collapsed: true, href: '#', key: 'collapsed' })
    config.items.slice(1).forEach((a, i) => {
      items.push({ label: a.label, href: a.href, key: `a-${i + 1}` })
    })
  } else {
    config.items.forEach((a, i) => {
      items.push({ label: a.label, href: a.href, key: `a-${i}` })
    })
  }
  items.push({ label: config.currentLabel, current: true, key: 'current' })
  return items
}

export const BreadcrumbsWorkspace = () => {
  const [config, setConfig] = useState<BreadcrumbsConfig>(() => readHashConfig() ?? defaultBreadcrumbsConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useEffect(() => { window.location.hash = encodeConfig(config) }, [config])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  useEffect(() => {
    if (!config.customCss.trim()) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-custom', '')
    el.textContent = config.customCss
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.customCss])

  const items = buildItems(config)

  return (
    <div className="breadcrumbs-ws">
      <div className="breadcrumbs-ws__main">
        <div className="breadcrumbs-ws__toolbar">
          <span className="breadcrumbs-ws__toolbar-label">Preview</span>
          <div className="breadcrumbs-ws__toolbar-actions">
            <button
              className={`breadcrumbs-ws__toolbar-btn${compare ? ' breadcrumbs-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show with and without collapsed crumbs"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`breadcrumbs-ws__toolbar-btn${linkCopied ? ' breadcrumbs-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="breadcrumbs-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="auto" componentLabel="expanded">
                <Breadcrumbs items={buildItems({ ...config, showCollapsed: false })} className={config.customClass || undefined} />
              </Canvas>
              <Canvas bg="auto" componentLabel="collapsed">
                <Breadcrumbs items={buildItems({ ...config, showCollapsed: true })} className={config.customClass || undefined} />
              </Canvas>
            </>
          ) : (
            <Canvas bg="auto" componentLabel="Breadcrumbs">
              <Breadcrumbs items={items} className={config.customClass || undefined} id={config.customId || undefined} />
            </Canvas>
          )}
        </div>

        <CodeBlock code={breadcrumbsCodeGen(config)} />
      </div>

      <ControlPanel>
        <BreadcrumbsControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
