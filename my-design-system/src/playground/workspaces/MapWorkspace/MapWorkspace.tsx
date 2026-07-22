import { useState, useEffect } from 'react'
import { Map } from '../../../components/Map'
import type { MapPin, MapMode, MapFilterOption } from '../../../components/Map'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { MapControls } from './MapControls'
import { mapCodeGen, defaultMapConfig } from './mapCodeGen'
import type { MapConfig } from './mapCodeGen'
import mapImg from '../../../assets/map.png'
import './MapWorkspace.scss'
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

// ── Filter options (derived from pins) ───────────────────────────────────────

const COUNTRIES: MapFilterOption[] = [
  { label: 'UAE', value: 'ae' },
  { label: 'Saudi Arabia', value: 'sa' },
  { label: 'Qatar', value: 'qa' },
  { label: 'Oman', value: 'om' },
  { label: 'Pakistan', value: 'pk' },
]

const PROJECTS: MapFilterOption[] = [
  { label: 'Festival', value: 'festival' },
  { label: 'Al Badia', value: 'badia' },
  { label: 'Hub', value: 'hub' },
]

// ── URL hash sync ────────────────────────────────────────────────────────────

function encodeConfig(cfg: MapConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): MapConfig | null {
  try {
    const parsed = JSON.parse(decodeURIComponent(atob(hash)))
    const merged = { ...defaultMapConfig, ...parsed }
    // Ensure pins is always a valid array (handles old configs with pinCount)
    if (!Array.isArray(merged.pins)) merged.pins = defaultMapConfig.pins
    return merged as MapConfig
  } catch { return null }
}

function readHashConfig(): MapConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Workspace ────────────────────────────────────────────────────────────────

export const MapWorkspace = () => {
  const [config, setConfig] = useState<MapConfig>(() => readHashConfig() ?? loadDraft<MapConfig>("map") ?? defaultMapConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useScssSync<MapConfig>('map', setConfig)

  useEffect(() => { window.location.hash = encodeConfig(config) }, [config])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  const resolvedMapImage = config.mapImage || mapImg
  const pins: MapPin[] = config.pins.map(p => ({
    ...p,
    thumbnail: undefined,
  }))

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
      rules.push(`.ds-map { background-color: ${config.bgColor} !important; }`)
    }
    if (config.textColor) {
      rules.push(`.ds-map, .ds-map__header-title, .ds-map__header-desc { color: ${config.textColor} !important; }`)
    }
    if (config.fontFamily) {
      rules.push(`.ds-map, .ds-map__header-title, .ds-map__header-desc { font-family: ${config.fontFamily} !important; }`)
    }
    if (config.fontSize) rules.push(`.ds-map, .ds-map__header-title, .ds-map__header-desc { font-size: ${config.fontSize} !important; }`)
    if (config.fontWeight) rules.push(`.ds-map, .ds-map__header-title, .ds-map__header-desc { font-weight: ${config.fontWeight} !important; }`)
    if (config.letterSpacing) rules.push(`.ds-map, .ds-map__header-title, .ds-map__header-desc { letter-spacing: ${config.letterSpacing} !important; }`)
    if (config.textTransform && config.textTransform !== 'none') rules.push(`.ds-map, .ds-map__header-title, .ds-map__header-desc { text-transform: ${config.textTransform} !important; }`)
    if (config.shadow) rules.push(`.ds-map, .ds-map__header-title, .ds-map__header-desc { box-shadow: ${config.shadow} !important; }`)
    if (config.borderRadius) {
      rules.push(`.ds-map { border-radius: ${config.borderRadius} !important; }`)
    }
    if (config.paddingX) {
      rules.push(`.ds-map { padding-inline: ${config.paddingX} !important; }`)
    }
    if (config.paddingY) {
      rules.push(`.ds-map { padding-block: ${config.paddingY} !important; }`)
    }
    if (config.gap) {
      rules.push(`.ds-map { gap: ${config.gap} !important; }`)
    }
    if (config.borderWidth) {
      rules.push(`.ds-map { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-color-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor, config.fontFamily, config.fontSize, config.fontWeight, config.letterSpacing, config.textTransform, config.shadow, config.borderRadius, config.paddingX, config.paddingY, config.gap, config.borderWidth, config.borderStyle, config.borderColor])

  return (
    <div className="map-ws">
      <div className="map-ws__main">
        <div className="map-ws__toolbar">
          <span className="map-ws__toolbar-label">Preview</span>
          <div className="map-ws__toolbar-actions">
            <button
              className={`map-ws__toolbar-btn${compare ? ' map-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show light and dark modes side by side"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`map-ws__toolbar-btn${linkCopied ? ' map-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="map-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                <Map
                  mode="light"
                  title={config.title}
                  description={config.description || undefined}
                  pins={pins}
                  countries={COUNTRIES}
                  projects={PROJECTS}
                  showFilters={config.showFilters}
                  mapImage={resolvedMapImage}
                  className={config.customClass || undefined}
                  style={{ minHeight: 420 }}
                />
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                <Map
                  mode="dark"
                  title={config.title}
                  description={config.description || undefined}
                  pins={pins}
                  countries={COUNTRIES}
                  projects={PROJECTS}
                  showFilters={config.showFilters}
                  mapImage={resolvedMapImage}
                  className={config.customClass || undefined}
                  style={{ minHeight: 420 }}
                />
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.mode === 'dark' ? 'dark' : 'light'} componentLabel="Map">
              <Map
                mode={config.mode as MapMode}
                title={config.title}
                description={config.description || undefined}
                pins={pins}
                countries={COUNTRIES}
                projects={PROJECTS}
                showFilters={config.showFilters}
                mapImage={resolvedMapImage}
                className={config.customClass || undefined}
                id={config.customId || undefined}
                style={{ minHeight: 480 }}
              />
            </Canvas>
          )}
        </div>

        <CodeBlock code={mapCodeGen(config)} />

        <PublishBar
          componentId="map"
          draftConfig={config}
          componentLabel="Map"
          override={buildWorkspaceOverride('map', config, '.ds-map')}
        />
      </div>

      <ControlPanel>
        <MapControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
