import { useState, useEffect } from 'react'
import { Switch } from '../../../components/Switch'
import type { SwitchState } from '../../../components/Switch'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { SwitchControls } from './SwitchControls'
import { switchCodeGen, defaultSwitchConfig } from './switchCodeGen'
import type { SwitchConfig } from './switchCodeGen'
import './SwitchWorkspace.scss'
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

function encodeConfig(cfg: SwitchConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}

function decodeConfig(hash: string): SwitchConfig | null {
  try { return { ...defaultSwitchConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as SwitchConfig } catch { return null }
}

function readHashConfig(): SwitchConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

export const SwitchWorkspace = () => {
  const [config, setConfig] = useState<SwitchConfig>(() => readHashConfig() ?? loadDraft<SwitchConfig>("switch") ?? defaultSwitchConfig)
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
      rules.push(`.ds-switch__track { background: ${config.bgColor} !important; border-color: ${config.bgColor} !important; }`)
      rules.push(`.ds-switch--checked .ds-switch__track { background: ${config.bgColor} !important; border-color: ${config.bgColor} !important; }`)
    }
    if (config.textColor) {
      rules.push(`.ds-switch__label, .ds-switch__description { color: ${config.textColor} !important; }`)
    }
    if (config.fontFamily) {
      rules.push(`.ds-switch { font-family: ${config.fontFamily} !important; }`)
    }
    if (config.borderRadius) {
      rules.push(`.ds-switch { border-radius: ${config.borderRadius} !important; }`)
      rules.push(`.ds-switch__track { border-radius: ${config.borderRadius} !important; }`)
    }
    if (config.paddingX) {
      rules.push(`.ds-switch { padding-inline: ${config.paddingX} !important; }`)
    }
    if (config.paddingY) {
      rules.push(`.ds-switch { padding-block: ${config.paddingY} !important; }`)
    }
    if (config.gap) {
      rules.push(`.ds-switch { gap: ${config.gap} !important; }`)
    }
    if (config.borderWidth) {
      rules.push(`.ds-switch { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-color-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor, config.fontFamily, config.borderRadius, config.paddingX, config.paddingY, config.gap, config.borderWidth, config.borderStyle, config.borderColor])

  return (
    <div className="switch-ws">
      <div className="switch-ws__main">
        <div className="switch-ws__toolbar">
          <span className="switch-ws__toolbar-label">Preview</span>
          <div className="switch-ws__toolbar-actions">
            <button
              className={`switch-ws__toolbar-btn${compare ? ' switch-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Show unchecked and checked states side by side"
            >
              <CompareIcon />
              Compare states
            </button>
            <button
              className={`switch-ws__toolbar-btn${linkCopied ? ' switch-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="switch-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="auto" componentLabel="unchecked">
                <div style={{
                  ...(config.textColor && { color: config.textColor }),
                  ...(config.fontFamily && { fontFamily: config.fontFamily }),
                }}>
                  <Switch
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
                  <Switch
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
            <Canvas bg="auto" componentLabel="Switch">
              <div style={{
                ...(config.textColor && { color: config.textColor }),
                ...(config.fontFamily && { fontFamily: config.fontFamily }),
                padding: (config.textColor || config.fontFamily) ? '12px 16px' : undefined,
              }}>
                <Switch
                  state={config.state as SwitchState}
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

        <CodeBlock code={switchCodeGen(config)} />

        <PublishBar
          componentId="switch"
          draftConfig={config}
          componentLabel="Switch"
          override={buildWorkspaceOverride('switch', config, '.ds-switch')}
        />
      </div>

      <ControlPanel>
        <SwitchControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
