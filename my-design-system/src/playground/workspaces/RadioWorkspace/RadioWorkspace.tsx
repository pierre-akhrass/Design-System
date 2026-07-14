import { useState, useEffect } from 'react'
import { Radio } from '../../../components/Radio'
import type { RadioState } from '../../../components/Radio'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { RadioControls } from './RadioControls'
import { radioCodeGen, defaultRadioConfig } from './radioCodeGen'
import type { RadioConfig } from './radioCodeGen'
import './RadioWorkspace.scss'
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

function encodeConfig(cfg: RadioConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): RadioConfig | null {
  try { return { ...defaultRadioConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as RadioConfig } catch { return null }
}

function readHashConfig(): RadioConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

export const RadioWorkspace = () => {
  const [config, setConfig] = useState<RadioConfig>(() => readHashConfig() ?? defaultRadioConfig)
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
      rules.push(`.ds-radio__box svg path[fill="#141F2E"] { fill: ${config.bgColor} !important; }`)
      rules.push(`.ds-radio__box svg path[fill="#E9ECF0"] { fill: ${config.bgColor} !important; }`)
      rules.push(`.ds-radio__box svg path[fill="#6B6B6B"] { fill: ${config.bgColor} !important; }`)
      rules.push(`.ds-radio__box svg path[fill="#BCBCBC"] { fill: ${config.bgColor} !important; }`)
    }
    if (config.textColor) {
      rules.push(`.ds-radio__label, .ds-radio__description { color: ${config.textColor} !important; }`)
    }
    if (config.fontFamily) {
      rules.push(`.ds-radio { font-family: ${config.fontFamily} !important; }`)
    }
    if (config.borderRadius) {
      rules.push(`.ds-radio { border-radius: ${config.borderRadius} !important; }`)
    }
    if (config.paddingX) {
      rules.push(`.ds-radio { padding-inline: ${config.paddingX} !important; }`)
    }
    if (config.paddingY) {
      rules.push(`.ds-radio { padding-block: ${config.paddingY} !important; }`)
    }
    if (config.gap) {
      rules.push(`.ds-radio { gap: ${config.gap} !important; }`)
    }
    if (config.borderWidth) {
      rules.push(`.ds-radio { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-color-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor, config.fontFamily, config.borderRadius, config.paddingX, config.paddingY, config.gap, config.borderWidth, config.borderStyle, config.borderColor])

  return (
    <div className="radio-ws">
      <div className="radio-ws__main">
        <div className="radio-ws__toolbar">
          <span className="radio-ws__toolbar-label">Preview</span>
          <div className="radio-ws__toolbar-actions">
            <button
              className={`radio-ws__toolbar-btn${compare ? ' radio-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show unchecked and checked states side by side"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`radio-ws__toolbar-btn${linkCopied ? ' radio-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="radio-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="auto" componentLabel="unchecked">
                <div style={{
                  ...(config.textColor && { color: config.textColor }),
                  ...(config.fontFamily && { fontFamily: config.fontFamily }),
                }}>
                  <Radio
                    state="unchecked"
                    label={config.label || undefined}
                    description={config.description || undefined}
                    placement={config.placement}
                    disabled={config.disabled}
                    className={config.customClass || undefined}
                  />
                </div>
              </Canvas>
              <Canvas bg="auto" componentLabel="checked">
                <div style={{
                  ...(config.textColor && { color: config.textColor }),
                  ...(config.fontFamily && { fontFamily: config.fontFamily }),
                }}>
                  <Radio
                    state="checked"
                    label={config.label || undefined}
                    description={config.description || undefined}
                    placement={config.placement}
                    disabled={config.disabled}
                    className={config.customClass || undefined}
                  />
                </div>
              </Canvas>
            </>
          ) : (
            <Canvas bg="auto" componentLabel="Radio">
              <div style={{
                ...(config.textColor && { color: config.textColor }),
                ...(config.fontFamily && { fontFamily: config.fontFamily }),
                padding: (config.textColor || config.fontFamily) ? '12px 16px' : undefined,
              }}>
                <Radio
                  state={config.state as RadioState}
                  label={config.label || undefined}
                  description={config.description || undefined}
                  placement={config.placement}
                  disabled={config.disabled}
                  className={config.customClass || undefined}
                  id={config.customId || undefined}
                  onChange={(next) => setConfig(c => ({ ...c, state: next }))}
                />
              </div>
            </Canvas>
          )}
        </div>

        <CodeBlock code={radioCodeGen(config)} />

        <PublishBar
          componentId="radio"
          componentLabel="Radio"
          override={buildWorkspaceOverride('radio', config, '.ds-radio')}
        />
      </div>

      <ControlPanel>
        <RadioControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
