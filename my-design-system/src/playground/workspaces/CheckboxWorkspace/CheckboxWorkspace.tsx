import { useState, useEffect } from 'react'
import { Checkbox } from '../../../components/Checkbox'
import type { CheckboxState } from '../../../components/Checkbox'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { CheckboxControls } from './CheckboxControls'
import { checkboxCodeGen, defaultCheckboxConfig } from './checkboxCodeGen'
import type { CheckboxConfig } from './checkboxCodeGen'
import './CheckboxWorkspace.scss'
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

function encodeConfig(cfg: CheckboxConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): CheckboxConfig | null {
  try { return { ...defaultCheckboxConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as CheckboxConfig } catch { return null }
}

function readHashConfig(): CheckboxConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

export const CheckboxWorkspace = () => {
  const [config, setConfig] = useState<CheckboxConfig>(() => readHashConfig() ?? loadDraft<CheckboxConfig>("checkbox") ?? defaultCheckboxConfig)
  const [compare, setCompare] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useScssSync<CheckboxConfig>('checkbox', setConfig)

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

  // Color/font/spacing override injection
  useEffect(() => {
    const rules: string[] = []
    if (config.bgColor) {
      rules.push(`.ds-checkbox__box { background: ${config.bgColor} !important; border-color: ${config.bgColor} !important; }`)
      rules.push(`.ds-checkbox--checked .ds-checkbox__box, .ds-checkbox--indeterminate .ds-checkbox__box { background: ${config.bgColor} !important; border-color: ${config.bgColor} !important; }`)
    }
    if (config.textColor) {
      rules.push(`.ds-checkbox__label, .ds-checkbox__description { color: ${config.textColor} !important; }`)
    }
    if (config.fontFamily) {
      rules.push(`.ds-checkbox { font-family: ${config.fontFamily} !important; }`)
    }
    if (config.fontSize) rules.push(`.ds-checkbox { font-size: ${config.fontSize} !important; }`)
    if (config.fontWeight) rules.push(`.ds-checkbox { font-weight: ${config.fontWeight} !important; }`)
    if (config.letterSpacing) rules.push(`.ds-checkbox { letter-spacing: ${config.letterSpacing} !important; }`)
    if (config.textTransform && config.textTransform !== 'none') rules.push(`.ds-checkbox { text-transform: ${config.textTransform} !important; }`)
    if (config.shadow) rules.push(`.ds-checkbox { box-shadow: ${config.shadow} !important; }`)
    if (config.borderRadius) {
      rules.push(`.ds-checkbox { border-radius: ${config.borderRadius} !important; }`)
      rules.push(`.ds-checkbox__box { border-radius: ${config.borderRadius} !important; }`)
    }
    if (config.paddingX) {
      rules.push(`.ds-checkbox { padding-inline: ${config.paddingX} !important; }`)
    }
    if (config.paddingY) {
      rules.push(`.ds-checkbox { padding-block: ${config.paddingY} !important; }`)
    }
    if (config.gap) {
      rules.push(`.ds-checkbox { gap: ${config.gap} !important; }`)
    }
    if (config.borderWidth) {
      rules.push(`.ds-checkbox { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-color-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor, config.fontFamily, config.fontSize, config.fontWeight, config.letterSpacing, config.textTransform, config.shadow, config.borderRadius, config.paddingX, config.paddingY, config.gap, config.borderWidth, config.borderStyle, config.borderColor])

  return (
    <div className="checkbox-ws">
      <div className="checkbox-ws__main">
        <div className="checkbox-ws__toolbar">
          <span className="checkbox-ws__toolbar-label">Preview</span>
          <div className="checkbox-ws__toolbar-actions">
            <button
              className={`checkbox-ws__toolbar-btn${compare ? ' checkbox-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show unchecked and checked states side by side"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`checkbox-ws__toolbar-btn${linkCopied ? ' checkbox-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="checkbox-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="auto" componentLabel="unchecked">
                <div style={{
                  ...(config.textColor && { color: config.textColor }),
                  ...(config.fontFamily && { fontFamily: config.fontFamily }),
                }}>
                  <Checkbox
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
                  <Checkbox
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
            <Canvas bg="auto" componentLabel="Checkbox">
              <div style={{
                ...(config.textColor && { color: config.textColor }),
                ...(config.fontFamily && { fontFamily: config.fontFamily }),
                padding: (config.textColor || config.fontFamily) ? '12px 16px' : undefined,
              }}>
                <Checkbox
                  state={config.state as CheckboxState}
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

        <CodeBlock code={checkboxCodeGen(config)} />

        <PublishBar
          componentId="checkbox"
          draftConfig={config}
          componentLabel="Checkbox"
          override={buildWorkspaceOverride('checkbox', config, '.ds-checkbox')}
        />
      </div>

      <ControlPanel>
        <CheckboxControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
