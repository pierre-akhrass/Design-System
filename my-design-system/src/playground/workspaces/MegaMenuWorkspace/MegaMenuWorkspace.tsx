import { useState, useEffect } from 'react'
import { MegaMenu } from '../../../components/MegaMenu/MegaMenu'
import type { MegaMenuColumnConfig, MegaMenuCardConfig } from '../../../components/MegaMenu/MegaMenu'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { MegaMenuControls } from './MegaMenuControls'
import { megaMenuCodeGen, defaultMegaMenuConfig } from './megaMenuCodeGen'
import type { MegaMenuConfig } from './megaMenuCodeGen'
import './MegaMenuWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'
import { loadDraft } from '../../draftStore'

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

function encodeConfig(cfg: MegaMenuConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): MegaMenuConfig | null {
  try {
    const parsed = JSON.parse(decodeURIComponent(atob(hash)))
    const merged = { ...defaultMegaMenuConfig, ...parsed }
    if (!Array.isArray(merged.columns)) merged.columns = defaultMegaMenuConfig.columns
    if (!merged.card || typeof merged.card !== 'object') merged.card = defaultMegaMenuConfig.card
    return merged as MegaMenuConfig
  } catch { return null }
}

function readHashConfig(): MegaMenuConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

export const MegaMenuWorkspace = () => {
  const [config, setConfig] = useState<MegaMenuConfig>(() => readHashConfig() ?? loadDraft<MegaMenuConfig>("mega-menu") ?? defaultMegaMenuConfig)
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

  useEffect(() => {
    const rules: string[] = []
    if (config.bgColor) {
      rules.push(`.ds-mega-menu { background: ${config.bgColor} !important; }`)
    }
    if (config.textColor) {
      rules.push(`.ds-mega-menu, .ds-mega-menu .ds-nav-item { color: ${config.textColor} !important; }`)
    }
    if (config.fontFamily) {
      rules.push(`.ds-mega-menu { font-family: ${config.fontFamily} !important; }`)
    }
    if (config.borderRadius) {
      rules.push(`.ds-mega-menu { border-radius: ${config.borderRadius} !important; }`)
    }
    if (config.paddingX) {
      rules.push(`.ds-mega-menu { padding-inline: ${config.paddingX} !important; }`)
    }
    if (config.paddingY) {
      rules.push(`.ds-mega-menu { padding-block: ${config.paddingY} !important; }`)
    }
    if (config.gap) {
      rules.push(`.ds-mega-menu__body { gap: ${config.gap} !important; }`)
    }
    if (config.borderWidth) {
      rules.push(`.ds-mega-menu { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-color-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor, config.fontFamily, config.borderRadius, config.paddingX, config.paddingY, config.gap, config.borderWidth, config.borderStyle, config.borderColor])

  const resolveColumns = (): MegaMenuColumnConfig[] =>
    config.columns.map((col, i) => ({
      key: i,
      title: col.title,
      links: col.links.map((l, j) => ({
        key: j,
        label: l.label,
        href: l.href ?? '#',
        selected: l.selected,
      })),
    }))

  const resolveCard = (): MegaMenuCardConfig | undefined => {
    const c = config.card
    const hasContent = c.title || c.subtitle || c.body || c.buttonLabel || c.image
    if (!hasContent) return undefined
    return {
      image: c.image || undefined,
      imageAlt: c.imageAlt,
      title: c.title || undefined,
      subtitle: c.subtitle || undefined,
      body: c.body || undefined,
      button: c.buttonLabel
        ? { label: c.buttonLabel, href: c.buttonHref || undefined }
        : undefined,
    }
  }

  const renderMegaMenu = (colorMode: MegaMenuConfig['colorMode']) => (
    <MegaMenu
      colorMode={colorMode}
      title={config.title || undefined}
      columns={resolveColumns()}
      card={resolveCard()}
      className={config.customClass || undefined}
      id={config.customId || undefined}
    />
  )

  return (
    <div className="megamenu-ws">
      <div className="megamenu-ws__main">
        <div className="megamenu-ws__toolbar">
          <span className="megamenu-ws__toolbar-label">Preview</span>
          <div className="megamenu-ws__toolbar-actions">
            <button
              className={`megamenu-ws__toolbar-btn${compare ? ' megamenu-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show light and dark modes side by side"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`megamenu-ws__toolbar-btn${linkCopied ? ' megamenu-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="megamenu-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                {renderMegaMenu('light')}
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                {renderMegaMenu('dark')}
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.colorMode === 'dark' ? 'dark' : 'light'} componentLabel="MegaMenu">
              {renderMegaMenu(config.colorMode)}
            </Canvas>
          )}
        </div>

        <CodeBlock code={megaMenuCodeGen(config)} />

        <PublishBar
          componentId="mega-menu"
          draftConfig={config}
          componentLabel="MegaMenu"
          override={buildWorkspaceOverride('mega-menu', config, '.ds-mega-menu')}
        />
      </div>

      <ControlPanel>
        <MegaMenuControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
