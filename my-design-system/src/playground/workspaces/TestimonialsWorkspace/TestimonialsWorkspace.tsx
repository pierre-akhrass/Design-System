import { useEffect, useState } from 'react'
import { Testimonials } from '../../../components/Testimonials'
import type { TestimonialItem } from '../../../components/Testimonials'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { TestimonialsControls } from './TestimonialsControls'
import { defaultTestimonialsConfig, testimonialsCodeGen } from './testimonialsCodeGen'
import type { TestimonialsConfig } from './testimonialsCodeGen'
import './TestimonialsWorkspace.scss'
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

function encodeConfig(cfg: TestimonialsConfig): string {
  try {
    return btoa(encodeURIComponent(JSON.stringify(cfg)))
  } catch {
    return ''
  }
}

function decodeConfig(hash: string): TestimonialsConfig | null {
  try {
    const parsed = JSON.parse(decodeURIComponent(atob(hash)))
    const merged = { ...defaultTestimonialsConfig, ...parsed }
    if (!Array.isArray(merged.testimonials)) merged.testimonials = defaultTestimonialsConfig.testimonials
    return merged as TestimonialsConfig
  } catch {
    return null
  }
}

function readHashConfig(): TestimonialsConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

function mapItems(cfg: TestimonialsConfig): TestimonialItem[] {
  return cfg.testimonials.map((item) => ({
    image: item.image || undefined,
    imageAlt: item.imageAlt || undefined,
    quote: item.quote,
    name: item.name,
    role: item.role,
  }))
}

export const TestimonialsWorkspace = () => {
  const [config, setConfig] = useState<TestimonialsConfig>(() => readHashConfig() ?? defaultTestimonialsConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useEffect(() => {
    window.location.hash = encodeConfig(config)
  }, [config])

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
    return () => {
      el.remove()
    }
  }, [config.customCss])

  const testimonials = mapItems(config)
  const workspaceClassName = config.customClass || undefined

  return (
    <div className="testimonials-ws">
      <div className="testimonials-ws__main">
        <div className="testimonials-ws__toolbar">
          <span className="testimonials-ws__toolbar-label">Preview</span>
          <div className="testimonials-ws__toolbar-actions">
            <button
              className={`testimonials-ws__toolbar-btn${compare ? ' testimonials-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare((c) => !c)}
              type="button"
              title="Show slider on and off"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`testimonials-ws__toolbar-btn${linkCopied ? ' testimonials-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="testimonials-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="auto" componentLabel="slider: on">
                <Testimonials
                  label={config.label}
                  heading={config.heading}
                  testimonials={testimonials}
                  showSlider={true}
                  className={workspaceClassName}
                  id={config.customId || undefined}
                  bgColor={config.bgColor || undefined}
                  textColor={config.textColor || undefined}
                  paddingX={config.paddingX || undefined}
                  paddingY={config.paddingY || undefined}
                  marginX={config.marginX || undefined}
                  marginY={config.marginY || undefined}
                />
              </Canvas>
              <Canvas bg="auto" componentLabel="slider: off">
                <Testimonials
                  label={config.label}
                  heading={config.heading}
                  testimonials={testimonials}
                  showSlider={false}
                  className={workspaceClassName}
                  bgColor={config.bgColor || undefined}
                  textColor={config.textColor || undefined}
                  paddingX={config.paddingX || undefined}
                  paddingY={config.paddingY || undefined}
                  marginX={config.marginX || undefined}
                  marginY={config.marginY || undefined}
                />
              </Canvas>
            </>
          ) : (
            <Canvas bg="auto" componentLabel="Testimonials">
              <Testimonials
                label={config.label}
                heading={config.heading}
                testimonials={testimonials}
                showSlider={config.showSlider}
                className={workspaceClassName}
                id={config.customId || undefined}
                bgColor={config.bgColor || undefined}
                textColor={config.textColor || undefined}
                paddingX={config.paddingX || undefined}
                paddingY={config.paddingY || undefined}
                marginX={config.marginX || undefined}
                marginY={config.marginY || undefined}
              />
            </Canvas>
          )}
        </div>

        <CodeBlock code={testimonialsCodeGen(config)} />

        <PublishBar
          componentId="testimonials"
          componentLabel="Testimonials"
          override={buildWorkspaceOverride('testimonials', config, '.ds-testimonials')}
        />
      </div>

      <ControlPanel>
        <TestimonialsControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
