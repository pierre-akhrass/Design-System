import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import {
  Form, FormInput, FormTextarea, FormSelect, FormCheckbox, FormActions,
} from '../../../components/Form'
import type { FormControlState } from '../../../components/Form'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { FormControls } from './FormControls'
import { formCodeGen, defaultFormConfig, buildCssVarEntries } from './formCodeGen'
import type { FormConfig } from './formCodeGen'
import './FormWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'
import { loadDraft } from '../../draftStore'
import { useScssSync } from '../../useScssSync'

// ── Demo select options ───────────────────────────────────────────────────────

const DEMO_SELECT_OPTIONS = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'billing', label: 'Billing' },
  { value: 'other',   label: 'Other' },
]

// ── CSS variable style builder ────────────────────────────────────────────────

function buildCssVarStyle(cfg: FormConfig): CSSProperties {
  const entries = buildCssVarEntries(cfg)
  if (!entries.length) return {}
  return Object.fromEntries(entries) as CSSProperties
}

// ── URL hash codec ────────────────────────────────────────────────────────────

function encodeConfig(cfg: FormConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) }
  catch { return '' }
}

function decodeConfig(hash: string): FormConfig | null {
  try {
    const decoded = JSON.parse(decodeURIComponent(atob(hash)))
    return { ...defaultFormConfig, ...decoded } as FormConfig
  } catch { return null }
}

function readHashConfig(): FormConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Form renderer (shared between single + compare views) ─────────────────────

function renderForm(cfg: FormConfig, themeOverride?: 'light' | 'dark') {
  const theme  = themeOverride ?? cfg.theme
  const cssVar = buildCssVarStyle(cfg)

  return (
    <Form
      theme={theme}
      style={cssVar}
      className={cfg.customClass || undefined}
      id={cfg.customId || undefined}
    >
      <FormInput
        label={cfg.input1Label}
        placeholder={cfg.input1Placeholder}
        state={cfg.inputState as FormControlState}
      />
      {cfg.inputCount === 2 && (
        <FormInput
          label={cfg.input2Label}
          placeholder={cfg.input2Placeholder}
          state={cfg.inputState as FormControlState}
        />
      )}
      {cfg.showTextarea && (
        <FormTextarea
          label={cfg.textareaLabel}
          placeholder={cfg.textareaPlaceholder}
          rows={cfg.textareaRows}
          state={cfg.textareaState as FormControlState}
        />
      )}
      {cfg.showSelect && (
        <FormSelect
          label={cfg.selectLabel}
          options={DEMO_SELECT_OPTIONS}
          state={cfg.selectState as FormControlState}
        />
      )}
      {cfg.showCheckbox && (
        <FormCheckbox
          label={cfg.checkboxLabel}
          description={cfg.checkboxDescription || undefined}
          defaultChecked={cfg.checkboxChecked}
          state={cfg.checkboxState as FormControlState}
        />
      )}
      <FormActions
        primaryLabel={cfg.actionsPrimaryLabel}
        secondaryLabel={cfg.actionsSecondaryLabel || undefined}
        primaryTone={cfg.actionsTone}
        compact={cfg.actionsCompact}
      />
    </Form>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────

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

// ── FormWorkspace ─────────────────────────────────────────────────────────────

export const FormWorkspace = () => {
  const [config, setConfig]         = useState<FormConfig>(() => readHashConfig() ?? loadDraft<FormConfig>('form') ?? defaultFormConfig)
  const [compare, setCompare]       = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  // Pull colour values from the component's .scss into the UI (reverse sync).
  useScssSync<FormConfig>('form', setConfig)

  useEffect(() => {
    window.location.hash = encodeConfig(config)
  }, [config])

  useEffect(() => {
    if (!config.customCss.trim()) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-custom', '')
    el.textContent = config.customCss
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.customCss])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  const canvasBg = config.theme === 'dark' ? 'dark' : 'light'

  return (
    <div className="form-ws">
      {/* ── Center: canvas + code ──────────────────────────────────── */}
      <div className="form-ws__main">

        {/* Toolbar */}
        <div className="form-ws__toolbar">
          <span className="form-ws__toolbar-label">Preview</span>
          <div className="form-ws__toolbar-actions">
            <button
              className={`form-ws__toolbar-btn${compare ? ' form-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Compare light and dark themes side by side"
            >
              <CompareIcon />
              Compare themes
            </button>
            <button
              className={`form-ws__toolbar-btn${linkCopied ? ' form-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="form-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light theme">
                {renderForm(config, 'light')}
              </Canvas>
              <Canvas bg="dark" componentLabel="dark theme">
                {renderForm(config, 'dark')}
              </Canvas>
            </>
          ) : (
            <Canvas bg={canvasBg} componentLabel="Form">
              {renderForm(config)}
            </Canvas>
          )}
        </div>

        <CodeBlock code={formCodeGen(config)} />

        <PublishBar
          componentId="form"
          draftConfig={config}
          componentLabel="Form"
          override={buildWorkspaceOverride('form', config, '.ds-form')}
        />
      </div>

      {/* ── Right: control panel ─────────────────────────────────────── */}
      <ControlPanel title="Props">
        <FormControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
