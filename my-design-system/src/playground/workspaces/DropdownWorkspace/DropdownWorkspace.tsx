import { useState, useEffect } from 'react'
import { Dropdown, DropdownDivider } from '../../../components/Dropdown'
import { NavItem } from '../../../components/NavItem'
import { Button } from '../../../components/Button'
import type { ButtonVariant } from '../../../components/Button'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { DropdownControls } from './DropdownControls'
import { dropdownCodeGen, defaultDropdownConfig } from './dropdownCodeGen'
import type { DropdownConfig } from './dropdownCodeGen'
import './DropdownWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'
import { loadDraft } from '../../draftStore'
import { useScssSync } from '../../useScssSync'

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

function encodeConfig(cfg: DropdownConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): DropdownConfig | null {
  try {
    const parsed = JSON.parse(decodeURIComponent(atob(hash)))
    const merged = { ...defaultDropdownConfig, ...parsed }
    if (!Array.isArray(merged.items)) merged.items = defaultDropdownConfig.items
    return merged as DropdownConfig
  } catch { return null }
}

function readHashConfig(): DropdownConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

export const DropdownWorkspace = () => {
  const [config, setConfig] = useState<DropdownConfig>(() => readHashConfig() ?? loadDraft<DropdownConfig>("dropdown") ?? defaultDropdownConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useScssSync<DropdownConfig>('dropdown', setConfig)

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
      rules.push(`.ds-dropdown { background: ${config.bgColor} !important; }`)
    }
    if (config.textColor) {
      rules.push(`.ds-dropdown, .ds-dropdown .ds-nav-item { color: ${config.textColor} !important; }`)
    }
    if (config.fontFamily) {
      rules.push(`.ds-dropdown { font-family: ${config.fontFamily} !important; }`)
    }
    if (config.fontSize) rules.push(`.ds-dropdown { font-size: ${config.fontSize} !important; }`)
    if (config.fontWeight) rules.push(`.ds-dropdown { font-weight: ${config.fontWeight} !important; }`)
    if (config.letterSpacing) rules.push(`.ds-dropdown { letter-spacing: ${config.letterSpacing} !important; }`)
    if (config.textTransform && config.textTransform !== 'none') rules.push(`.ds-dropdown { text-transform: ${config.textTransform} !important; }`)
    if (config.shadow) rules.push(`.ds-dropdown { box-shadow: ${config.shadow} !important; }`)
    if (config.borderRadius) {
      rules.push(`.ds-dropdown { border-radius: ${config.borderRadius} !important; }`)
    }
    if (config.paddingX) {
      rules.push(`.ds-dropdown { padding-inline: ${config.paddingX} !important; }`)
    }
    if (config.paddingY) {
      rules.push(`.ds-dropdown { padding-block: ${config.paddingY} !important; }`)
    }
    if (config.gap) {
      rules.push(`.ds-dropdown { gap: ${config.gap} !important; }`)
    }
    if (config.borderWidth) {
      rules.push(`.ds-dropdown { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-color-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor, config.fontFamily, config.fontSize, config.fontWeight, config.letterSpacing, config.textTransform, config.shadow, config.borderRadius, config.paddingX, config.paddingY, config.gap, config.borderWidth, config.borderStyle, config.borderColor])

  const renderDropdown = (colorMode: DropdownConfig['colorMode']) => (
    <Dropdown
      colorMode={colorMode}
      className={config.customClass || undefined}
      id={config.customId || undefined}
    >
      {config.items.map((item, i) => {
        if (item.kind === 'divider') return <DropdownDivider key={`d-${i}`} />
        if (item.kind === 'button') return <Button key={`b-${i}`} variant={(item.variant || 'filled') as ButtonVariant}>{item.label}</Button>
        return <NavItem key={`i-${i}`} hierarchy="tier-2" label={item.label} />
      })}
    </Dropdown>
  )

  return (
    <div className="dropdown-ws">
      <div className="dropdown-ws__main">
        <div className="dropdown-ws__toolbar">
          <span className="dropdown-ws__toolbar-label">Preview</span>
          <div className="dropdown-ws__toolbar-actions">
            <button
              className={`dropdown-ws__toolbar-btn${compare ? ' dropdown-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show light and dark modes side by side"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`dropdown-ws__toolbar-btn${linkCopied ? ' dropdown-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="dropdown-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                {renderDropdown('light')}
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                {renderDropdown('dark')}
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.colorMode === 'dark' ? 'dark' : 'light'} componentLabel="Dropdown">
              {renderDropdown(config.colorMode)}
            </Canvas>
          )}
        </div>

        <CodeBlock code={dropdownCodeGen(config)} />

        <PublishBar
          componentId="dropdown"
          draftConfig={config}
          componentLabel="Dropdown"
          override={buildWorkspaceOverride('dropdown', config, '.ds-dropdown')}
        />
      </div>

      <ControlPanel>
        <DropdownControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
