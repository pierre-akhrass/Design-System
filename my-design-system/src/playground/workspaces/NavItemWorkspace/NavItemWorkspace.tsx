import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import { NavItem } from '../../../components/NavItem'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { NavItemControls } from './NavItemControls'
import { navItemCodeGen, defaultNavItemConfig } from './navItemCodeGen'
import type { NavItemConfig } from './navItemCodeGen'
import './NavItemWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'
import { loadDraft } from '../../draftStore'
import { useScssSync } from '../../useScssSync'

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

function encodeConfig(cfg: NavItemConfig): string {
  try {
    return btoa(encodeURIComponent(JSON.stringify(cfg)))
  } catch {
    return ''
  }
}

function decodeConfig(hash: string): NavItemConfig | null {
  try {
    return { ...defaultNavItemConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as NavItemConfig
  } catch {
    return null
  }
}

function readHashConfig(): NavItemConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Style builder ─────────────────────────────────────────────────────────────

function buildNavItemStyle(config: NavItemConfig): CSSProperties {
  const style: CSSProperties = {}

  if (config.textColor) style.color = config.textColor
  if (config.bgColor) style.backgroundColor = config.bgColor
  if (config.paddingX) style.paddingInline = config.paddingX
  if (config.paddingY) style.paddingBlock = config.paddingY
  if (config.gap) style.gap = config.gap
  if (config.borderRadius) style.borderRadius = config.borderRadius

  if (config.borderWidth) {
    style.borderWidth = config.borderWidth
    style.borderStyle = (config.borderStyle || 'solid') as CSSProperties['borderStyle']
    if (config.borderColor) style.borderColor = config.borderColor
  }

  return style
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CaretRightIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ── NavItem preview (shared between single + compare) ───────────────────────────

const NavItemPreview = ({ config, colorMode }: { config: NavItemConfig; colorMode: 'light' | 'dark' }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100 }}>
    <NavItem
      label={config.label}
      href="/"
      orientation={config.orientation}
      level={config.level}
      hierarchy={config.hierarchy}
      shape={config.shape}
      colorMode={colorMode}
      selected={config.selected}
      state={config.state as any}
      className={config.customClass || undefined}
      id={config.customId || undefined}
      style={buildNavItemStyle(config)}
      iconLeft={config.showIconLeft ? <HomeIcon /> : undefined}
      iconRight={config.showIconRight ? <CaretRightIcon /> : undefined}
    />
  </div>
)

// ── NavItemWorkspace ──────────────────────────────────────────────────────────

export const NavItemWorkspace = () => {
  const [config, setConfig] = useState<NavItemConfig>(() => readHashConfig() ?? loadDraft<NavItemConfig>('nav-item') ?? defaultNavItemConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useScssSync<NavItemConfig>('nav-item', setConfig)

  useEffect(() => {
    window.location.hash = encodeConfig(config)
  }, [config])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  // Inject Custom CSS
  // Inject typography overrides as a live <style> block
  useEffect(() => {
    const rules: string[] = []
    if (config.fontFamily) rules.push(`.ds-nav-item { font-family: ${config.fontFamily} !important; }`)
    if (config.fontSize) rules.push(`.ds-nav-item { font-size: ${config.fontSize} !important; }`)
    if (config.fontWeight) rules.push(`.ds-nav-item { font-weight: ${config.fontWeight} !important; }`)
    if (config.letterSpacing) rules.push(`.ds-nav-item { letter-spacing: ${config.letterSpacing} !important; }`)
    if (config.textTransform && config.textTransform !== 'none') rules.push(`.ds-nav-item { text-transform: ${config.textTransform} !important; }`)
    if (config.shadow) rules.push(`.ds-nav-item { box-shadow: ${config.shadow} !important; }`)
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-typo-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.fontFamily, config.fontSize, config.fontWeight, config.letterSpacing, config.textTransform, config.shadow])
  useEffect(() => {
    if (!config.customCss.trim()) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-custom', '')
    el.textContent = config.customCss
    document.head.appendChild(el)
    return () => {
      el.remove()
    }
  }, [config.customCss])

  return (
    <div className="navitem-ws">
      <div className="navitem-ws__main">
        <div className="navitem-ws__toolbar">
          <span className="navitem-ws__toolbar-label">Preview</span>
          <div className="navitem-ws__toolbar-actions">
            <button
              className={`navitem-ws__toolbar-btn${compare ? ' navitem-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare((c) => !c)}
              type="button"
              title="Show light and dark themes side by side"
            >
              <CompareIcon />
              Compare themes
            </button>
            <button
              className={`navitem-ws__toolbar-btn${linkCopied ? ' navitem-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="navitem-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                <NavItemPreview config={config} colorMode="light" />
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                <NavItemPreview config={config} colorMode="dark" />
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.colorMode === 'dark' ? 'dark' : 'light'} componentLabel="NavItem">
              <NavItemPreview config={config} colorMode={config.colorMode} />
            </Canvas>
          )}
        </div>

        <CodeBlock code={navItemCodeGen(config)} />

        <PublishBar
          componentId="nav-item"
          draftConfig={config}
          componentLabel="NavItem"
          override={buildWorkspaceOverride('nav-item', config, '.ds-nav-item')}
        />
      </div>

      <ControlPanel>
        <NavItemControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
