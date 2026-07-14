import { useState, useEffect } from 'react'
import { Search } from '../../../components/Search'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { SearchControls } from './SearchControls'
import { searchCodeGen, defaultSearchConfig } from './searchCodeGen'
import type { SearchConfig } from './searchCodeGen'
import './SearchWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'

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

function encodeConfig(cfg: SearchConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): SearchConfig | null {
  try { return { ...defaultSearchConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as SearchConfig } catch { return null }
}

function readHashConfig(): SearchConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

export const SearchWorkspace = () => {
  const [config, setConfig] = useState<SearchConfig>(() => readHashConfig() ?? defaultSearchConfig)
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
      rules.push(`.ds-search { background: ${config.bgColor} !important; }`)
      rules.push(`.ds-search__input { background: ${config.bgColor} !important; }`)
    }
    if (config.textColor) {
      rules.push(`.ds-search__input, .ds-search { color: ${config.textColor} !important; }`)
      rules.push(`.ds-search__input::placeholder { color: ${config.textColor} !important; opacity: 0.6; }`)
    }
    if (config.fontFamily) {
      rules.push(`.ds-search, .ds-search__input { font-family: ${config.fontFamily} !important; }`)
    }
    if (config.borderRadius) {
      rules.push(`.ds-search { border-radius: ${config.borderRadius} !important; }`)
    }
    if (config.paddingX) {
      rules.push(`.ds-search { padding-inline: ${config.paddingX} !important; }`)
    }
    if (config.paddingY) {
      rules.push(`.ds-search { padding-block: ${config.paddingY} !important; }`)
    }
    if (config.gap) {
      rules.push(`.ds-search { gap: ${config.gap} !important; }`)
    }
    if (config.borderWidth) {
      rules.push(`.ds-search { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-color-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor, config.fontFamily, config.borderRadius, config.paddingX, config.paddingY, config.gap, config.borderWidth, config.borderStyle, config.borderColor])

  return (
    <div className="search-ws">
      <div className="search-ws__main">
        <div className="search-ws__toolbar">
          <span className="search-ws__toolbar-label">Preview</span>
          <div className="search-ws__toolbar-actions">
            <button
              className={`search-ws__toolbar-btn${compare ? ' search-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show light and dark themes side by side"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`search-ws__toolbar-btn${linkCopied ? ' search-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="search-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                <Search
                  placeholder={config.placeholder}
                  theme="light"
                  size={config.size}
                  showClear={config.showClear}
                  className={config.customClass || undefined}
                />
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                <Search
                  placeholder={config.placeholder}
                  theme="dark"
                  size={config.size}
                  showClear={config.showClear}
                  className={config.customClass || undefined}
                />
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.theme === 'dark' ? 'dark' : 'light'} componentLabel="Search">
              <div style={{
                ...(config.bgColor && { background: config.bgColor }),
                ...(config.textColor && { color: config.textColor }),
                ...(config.fontFamily && { fontFamily: config.fontFamily }),
                padding: (config.bgColor || config.textColor || config.fontFamily) ? '12px 16px' : undefined,
                borderRadius: (config.bgColor) ? '6px' : undefined,
              }}>
                <Search
                  placeholder={config.placeholder}
                  theme={config.theme}
                  size={config.size}
                  showClear={config.showClear}
                  className={config.customClass || undefined}
                  id={config.customId || undefined}
                />
              </div>
            </Canvas>
          )}
        </div>

        <CodeBlock code={searchCodeGen(config)} />

        <PublishBar
          componentId="search"
          componentLabel="Search"
          override={buildWorkspaceOverride('search', config, '.ds-search')}
        />
      </div>

      <ControlPanel>
        <SearchControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
