import { useState, useEffect } from 'react'
import { Carousel, CarouselSlide } from '../../../components/Carousel'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { CarouselControls } from './CarouselControls'
import { carouselCodeGen, defaultCarouselConfig } from './carouselCodeGen'
import type { CarouselConfig } from './carouselCodeGen'
import './CarouselWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'

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

function encodeConfig(cfg: CarouselConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}
function decodeConfig(hash: string): CarouselConfig | null {
  try { return { ...defaultCarouselConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as CarouselConfig } catch { return null }
}
function readHashConfig(): CarouselConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Rendered preview (shared between single + compare) ─────────────────────────

const CarouselPreview = ({ config, theme }: { config: CarouselConfig; theme: CarouselConfig['theme'] }) => (
  <div style={{ width: 520, maxWidth: '100%' }}>
    <Carousel
      theme={theme}
      showNavigation={config.showNavigation}
      showFade={config.showFade}
      prevLabel={config.prevLabel}
      nextLabel={config.nextLabel}
      className={config.customClass || undefined}
      id={config.customId || undefined}
    >
      {Array.from({ length: config.slideCount }, (_, i) => (
        <CarouselSlide key={i}>Slide {i + 1}</CarouselSlide>
      ))}
    </Carousel>
  </div>
)

// ── CarouselWorkspace ─────────────────────────────────────────────────────────

export const CarouselWorkspace = () => {
  const [config, setConfig] = useState<CarouselConfig>(() => readHashConfig() ?? defaultCarouselConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useEffect(() => { window.location.hash = encodeConfig(config) }, [config])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  // Inject spacing/color overrides as a live <style> block targeting the
  // Carousel's internal elements (tokens live on __track / __slide / __button).
  useEffect(() => {
    const rules: string[] = []
    if (config.gap) rules.push(`.ds-carousel__track { gap: ${config.gap} !important; }`)
    if (config.slideBg) rules.push(`.ds-carousel__slide { background: ${config.slideBg} !important; }`)
    if (config.textColor) rules.push(`.ds-carousel { color: ${config.textColor} !important; }`)
    if (config.slideRadius) rules.push(`.ds-carousel__slide { border-radius: ${config.slideRadius} !important; }`)
    if (config.buttonRadius) rules.push(`.ds-carousel__button { border-radius: ${config.buttonRadius} !important; }`)
    if (config.borderWidth) {
      rules.push(`.ds-carousel__slide { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-carousel-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.gap, config.slideBg, config.textColor, config.slideRadius, config.buttonRadius, config.borderWidth, config.borderStyle, config.borderColor])

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
    <div className="carousel-ws">
      <div className="carousel-ws__main">
        <div className="carousel-ws__toolbar">
          <span className="carousel-ws__toolbar-label">Preview</span>
          <div className="carousel-ws__toolbar-actions">
            <button
              className={`carousel-ws__toolbar-btn${compare ? ' carousel-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare((c) => !c)}
              type="button"
              title="Show light and dark themes side by side"
            >
              <CompareIcon />
              Compare themes
            </button>
            <button
              className={`carousel-ws__toolbar-btn${linkCopied ? ' carousel-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="carousel-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light">
                <CarouselPreview config={config} theme="light" />
              </Canvas>
              <Canvas bg="dark" componentLabel="dark">
                <CarouselPreview config={config} theme="dark" />
              </Canvas>
            </>
          ) : (
            <Canvas bg={config.theme === 'dark' ? 'dark' : 'light'} componentLabel="Carousel">
              <CarouselPreview config={config} theme={config.theme} />
            </Canvas>
          )}
        </div>

        <CodeBlock code={carouselCodeGen(config)} />

        <PublishBar
          componentId="carousel"
          componentLabel="Carousel"
          override={buildWorkspaceOverride('carousel', config, '.ds-carousel')}
        />
      </div>

      <ControlPanel>
        <CarouselControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
