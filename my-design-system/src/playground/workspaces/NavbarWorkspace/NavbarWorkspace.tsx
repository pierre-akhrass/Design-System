import { useState, useEffect, type ReactNode } from 'react'
import { Navbar, NavbarMenu } from '../../../components/Navbar'
import type { NavbarActionLink } from '../../../components/Navbar'
import { NavItem } from '../../../components/NavItem'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { NavbarControls } from './NavbarControls'
import { navbarCodeGen, defaultNavbarConfig } from './navbarCodeGen'
import type { NavbarConfig } from './navbarCodeGen'
import './NavbarWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'
import { loadDraft } from '../../draftStore'

// ── Icons (same as Navbar.stories) ────────────────────────────────────────────

const FlagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 22V4M4 4h13l-2 4 2 4H4" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
)

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 21a2 2 0 0 0 4 0" strokeLinecap="round" />
  </svg>
)

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" strokeLinecap="round" />
  </svg>
)

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
  </svg>
)

const CircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const MapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2z" />
    <path d="M9 3v16M15 5v16" />
  </svg>
)

const Chevron = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14">
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ICON_MAP: Record<string, ReactNode> = {
  flag: <FlagIcon />,
  bell: <BellIcon />,
  search: <SearchIcon />,
  star: <StarIcon />,
  circle: <CircleIcon />,
  map: <MapIcon />,
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

// ── URL hash sync ─────────────────────────────────────────────────────────────

function encodeConfig(cfg: NavbarConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): NavbarConfig | null {
  try {
    const parsed = JSON.parse(decodeURIComponent(atob(hash)))
    const merged = { ...defaultNavbarConfig, ...parsed }
    if (!Array.isArray(merged.links)) merged.links = defaultNavbarConfig.links
    if (!Array.isArray(merged.actions)) merged.actions = defaultNavbarConfig.actions
    return merged as NavbarConfig
  } catch { return null }
}

function readHashConfig(): NavbarConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Workspace ─────────────────────────────────────────────────────────────────

export const NavbarWorkspace = () => {
  const [config, setConfig] = useState<NavbarConfig>(() => readHashConfig() ?? loadDraft<NavbarConfig>("navbar") ?? defaultNavbarConfig)
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
    if (config.bgColor) rules.push(`.ds-navbar { background: ${config.bgColor} !important; }`)
    if (config.textColor) rules.push(`.ds-navbar, .ds-navbar .ds-nav-item { color: ${config.textColor} !important; }`)
    if (config.fontFamily) rules.push(`.ds-navbar { font-family: ${config.fontFamily} !important; }`)
    if (config.borderRadius) rules.push(`.ds-navbar { border-radius: ${config.borderRadius} !important; }`)
    if (config.paddingX) rules.push(`.ds-navbar { padding-inline: ${config.paddingX} !important; }`)
    if (config.paddingY) rules.push(`.ds-navbar { padding-block: ${config.paddingY} !important; }`)
    if (config.borderWidth) rules.push(`.ds-navbar { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-color-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor, config.fontFamily, config.borderRadius, config.paddingX, config.paddingY, config.borderWidth, config.borderStyle, config.borderColor])

  const resolveActions = (): NavbarActionLink[] =>
    config.actions.map((a, i) => ({
      key: i,
      label: a.label,
      href: a.href ?? '#',
      iconLeft: a.iconKey ? ICON_MAP[a.iconKey] : undefined,
      ariaLabel: a.ariaLabel ?? (a.label ? undefined : a.iconKey),
      selected: a.selected,
    }))

  const renderNavbar = (colorMode: NavbarConfig['colorMode']) => (
    <Navbar
      colorMode={colorMode}
      logo={config.logoSrc || undefined}
      actions={resolveActions()}
      className={config.customClass || undefined}
      id={config.customId || undefined}
    >
      {config.links.map((entry, i) => {
        if (entry.type === 'dropdown') {
          return (
            <NavbarMenu
              key={`${entry.label}-${i}`}
              label={entry.label}
              colorMode={colorMode}
              dropdownColorMode={colorMode}
              iconRight={<Chevron />}
              rows={entry.rows}
            />
          )
        }
        return (
          <NavItem
            key={`${entry.label}-${i}`}
            orientation="horizontal"
            colorMode={colorMode}
            label={entry.label}
            selected={entry.selected}
          />
        )
      })}
    </Navbar>
  )

  return (
    <div className="navbar-ws">
      <div className="navbar-ws__main">
        <div className="navbar-ws__toolbar">
          <span className="navbar-ws__toolbar-label">Preview</span>
          <div className="navbar-ws__toolbar-actions">
            <button
              className={`navbar-ws__toolbar-btn${compare ? ' navbar-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show light and dark modes side by side"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`navbar-ws__toolbar-btn${linkCopied ? ' navbar-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="navbar-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                {renderNavbar('light')}
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                {renderNavbar('dark')}
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.colorMode === 'dark' ? 'dark' : 'light'} componentLabel="Navbar">
              {renderNavbar(config.colorMode)}
            </Canvas>
          )}
        </div>

        <CodeBlock code={navbarCodeGen(config)} />

        <PublishBar
          componentId="navbar"
          draftConfig={config}
          componentLabel="Navbar"
          override={buildWorkspaceOverride('navbar', config, '.ds-navbar')}
        />
      </div>

      <ControlPanel>
        <NavbarControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
