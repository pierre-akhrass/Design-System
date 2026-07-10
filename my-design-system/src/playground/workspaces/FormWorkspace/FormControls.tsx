import type { FormConfig } from './formCodeGen'
import type { FormControlState } from '../../../components/Form'
import './FormControls.scss'

interface FormControlsProps {
  config: FormConfig
  onChange: (cfg: FormConfig) => void
}

// ── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="ctrl-section-label">{children}</span>
)

const Divider = () => <hr className="ctrl-divider" />

interface ControlRowProps {
  label: string
  badge?: 'required'
  stack?: boolean
  disabled?: boolean
  children: React.ReactNode
}
const ControlRow = ({ label, badge, stack, disabled, children }: ControlRowProps) => (
  <div className={`ctrl-row${stack ? ' ctrl-row--stack' : ''}${disabled ? ' ctrl-row--disabled' : ''}`}>
    <span className="ctrl-row__label">
      {label}
      {badge === 'required' && (
        <span className="ctrl-row__badge ctrl-row__badge--req">req</span>
      )}
    </span>
    <div className="ctrl-row__control">{children}</div>
  </div>
)

type SegOpt = string | { value: string; label: string }
const Segmented = ({
  options, value, onChange, wrap,
}: {
  options: SegOpt[]
  value: string
  onChange: (v: string) => void
  wrap?: boolean
}) => (
  <div className={`ctrl-seg${wrap ? ' ctrl-seg--wrap' : ''}`} role="group">
    {options.map((opt) => {
      const v = typeof opt === 'string' ? opt : opt.value
      const l = typeof opt === 'string' ? opt : opt.label
      return (
        <button
          key={v}
          className={`ctrl-seg__btn${v === value ? ' ctrl-seg__btn--active' : ''}`}
          onClick={() => onChange(v)}
          type="button"
        >
          {l}
        </button>
      )
    })}
  </div>
)

const Toggle = ({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) => (
  <button
    className={`ctrl-toggle${value ? ' ctrl-toggle--on' : ''}`}
    onClick={() => onChange(!value)}
    type="button"
    role="switch"
    aria-checked={value}
  >
    <span className="ctrl-toggle__knob" />
  </button>
)

// State segmented — all 5 FormControlState values
const STATE_OPTIONS: SegOpt[] = [
  { value: 'default',  label: 'def' },
  { value: 'focus',    label: 'fcs' },
  { value: 'hover',    label: 'hvr' },
  { value: 'error',    label: 'err' },
  { value: 'disabled', label: 'dis' },
]

// ColorRow — swatch + hex text + optional clear
interface ColorRowProps {
  value: string
  swatch: string       // default color for the native color picker
  label: string        // CSS var description shown in a tooltip/title
  onChange: (v: string) => void
  onClear?: () => void
}
const ColorRow = ({ value, swatch, label, onChange, onClear }: ColorRowProps) => (
  <div className="ctrl-color" title={label}>
    <input
      className="ctrl-color__swatch"
      type="color"
      value={value || swatch}
      onChange={(e) => onChange(e.target.value)}
    />
    <input
      className="ctrl-color__text ctrl-input"
      type="text"
      value={value}
      placeholder="—"
      onChange={(e) => onChange(e.target.value)}
      spellCheck={false}
    />
    {value && onClear && (
      <button className="ctrl-color__clear" onClick={onClear} type="button" aria-label="Clear">
        ✕
      </button>
    )}
  </div>
)

// ── CSS variable rows ─────────────────────────────────────────────────────────

// Light-theme reference colors used as picker defaults
const CSS_VAR_SWATCHES: Record<string, string> = {
  varSurface:      '#f5f7fa',
  varBorder:       '#b5c5d8',
  varFieldBg:      '#ffffff',
  varFieldBorder:  '#b5c5d8',
  varFocusBorder:  '#1a9cb7',
  varTextPrimary:  '#292929',
  varTextTertiary: '#6b6b6b',
  varAccent:       '#1a9cb7',
  varDanger:       '#e5252a',
}

const CSS_VAR_LABELS: Record<string, string> = {
  varSurface:      '--ds-form-surface — form background',
  varBorder:       '--ds-form-border — outer form border',
  varFieldBg:      '--ds-form-field-bg — input background',
  varFieldBorder:  '--ds-form-field-border — input border',
  varFocusBorder:  '--ds-form-field-border-focus — focus ring',
  varTextPrimary:  '--ds-form-text-primary — value text',
  varTextTertiary: '--ds-form-text-tertiary — labels & placeholders',
  varAccent:       '--ds-form-accent — checkbox, links, focus tint',
  varDanger:       '--ds-form-danger — error messages & borders',
}

type CssVarKey = 'varSurface' | 'varBorder' | 'varFieldBg' | 'varFieldBorder' | 'varFocusBorder' | 'varTextPrimary' | 'varTextTertiary' | 'varAccent' | 'varDanger'

const CSS_VAR_DISPLAY: { key: CssVarKey; label: string }[] = [
  { key: 'varSurface',      label: 'surface'       },
  { key: 'varBorder',       label: 'outer border'  },
  { key: 'varFieldBg',      label: 'field bg'      },
  { key: 'varFieldBorder',  label: 'field border'  },
  { key: 'varFocusBorder',  label: 'focus ring'    },
  { key: 'varTextPrimary',  label: 'text'          },
  { key: 'varTextTertiary', label: 'label / ph'    },
  { key: 'varAccent',       label: 'accent'        },
  { key: 'varDanger',       label: 'danger'        },
]

// ── FormControls ──────────────────────────────────────────────────────────────

export const FormControls = ({ config, onChange }: FormControlsProps) => {
  const set = <K extends keyof FormConfig>(key: K, value: FormConfig[K]) =>
    onChange({ ...config, [key]: value })

  const hasAnyCssVar = CSS_VAR_DISPLAY.some(({ key }) => config[key] !== '')

  const resetCssVars = () => onChange({
    ...config,
    varSurface: '', varBorder: '', varFieldBg: '', varFieldBorder: '',
    varFocusBorder: '', varTextPrimary: '', varTextTertiary: '', varAccent: '', varDanger: '',
  })

  return (
    <div className="form-controls">

      {/* ── Theme ─────────────────────────────────────────────────── */}
      <SectionLabel>Theme</SectionLabel>
      <ControlRow label="theme">
        <Segmented
          options={['light', 'dark']}
          value={config.theme}
          onChange={(v) => set('theme', v as FormConfig['theme'])}
        />
      </ControlRow>

      {/* ── Field composition ─────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Composition</SectionLabel>

      <ControlRow label="inputs">
        <Segmented
          options={[{ value: '1', label: '1' }, { value: '2', label: '2' }]}
          value={String(config.inputCount)}
          onChange={(v) => set('inputCount', parseInt(v, 10) as 1 | 2)}
        />
      </ControlRow>

      <ControlRow label="textarea">
        <Toggle value={config.showTextarea} onChange={(v) => set('showTextarea', v)} />
      </ControlRow>

      <ControlRow label="select">
        <Toggle value={config.showSelect} onChange={(v) => set('showSelect', v)} />
      </ControlRow>

      <ControlRow label="checkbox">
        <Toggle value={config.showCheckbox} onChange={(v) => set('showCheckbox', v)} />
      </ControlRow>

      {/* ── Input fields ──────────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Input fields</SectionLabel>

      <ControlRow label="state" stack>
        <Segmented
          options={STATE_OPTIONS}
          value={config.inputState}
          onChange={(v) => set('inputState', v as FormControlState)}
          wrap
        />
      </ControlRow>

      <ControlRow label="label 1">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.input1Label}
          onChange={(e) => set('input1Label', e.target.value)}
          spellCheck={false}
        />
      </ControlRow>

      <ControlRow label="placeholder 1">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.input1Placeholder}
          onChange={(e) => set('input1Placeholder', e.target.value)}
          spellCheck={false}
        />
      </ControlRow>

      {config.inputCount === 2 && (
        <>
          <ControlRow label="label 2">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.input2Label}
              onChange={(e) => set('input2Label', e.target.value)}
              spellCheck={false}
            />
          </ControlRow>
          <ControlRow label="placeholder 2">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.input2Placeholder}
              onChange={(e) => set('input2Placeholder', e.target.value)}
              spellCheck={false}
            />
          </ControlRow>
        </>
      )}

      {/* ── Textarea ──────────────────────────────────────────────── */}
      {config.showTextarea && (
        <>
          <Divider />
          <SectionLabel>Textarea</SectionLabel>

          <ControlRow label="state" stack>
            <Segmented
              options={STATE_OPTIONS}
              value={config.textareaState}
              onChange={(v) => set('textareaState', v as FormControlState)}
              wrap
            />
          </ControlRow>

          <ControlRow label="label">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.textareaLabel}
              onChange={(e) => set('textareaLabel', e.target.value)}
              spellCheck={false}
            />
          </ControlRow>

          <ControlRow label="placeholder">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.textareaPlaceholder}
              onChange={(e) => set('textareaPlaceholder', e.target.value)}
              spellCheck={false}
            />
          </ControlRow>

          <ControlRow label="rows">
            <Segmented
              options={['2', '3', '4', '5', '6']}
              value={String(config.textareaRows)}
              onChange={(v) => set('textareaRows', parseInt(v, 10))}
            />
          </ControlRow>
        </>
      )}

      {/* ── Select ────────────────────────────────────────────────── */}
      {config.showSelect && (
        <>
          <Divider />
          <SectionLabel>Select</SectionLabel>

          <ControlRow label="state" stack>
            <Segmented
              options={STATE_OPTIONS}
              value={config.selectState}
              onChange={(v) => set('selectState', v as FormControlState)}
              wrap
            />
          </ControlRow>

          <ControlRow label="label">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.selectLabel}
              onChange={(e) => set('selectLabel', e.target.value)}
              spellCheck={false}
            />
          </ControlRow>
        </>
      )}

      {/* ── Checkbox ──────────────────────────────────────────────── */}
      {config.showCheckbox && (
        <>
          <Divider />
          <SectionLabel>Checkbox</SectionLabel>

          <ControlRow label="state" stack>
            <Segmented
              options={[
                { value: 'default',  label: 'def' },
                { value: 'hover',    label: 'hvr' },
                { value: 'error',    label: 'err' },
                { value: 'disabled', label: 'dis' },
              ]}
              value={config.checkboxState}
              onChange={(v) => set('checkboxState', v as FormControlState)}
              wrap
            />
          </ControlRow>

          <ControlRow label="checked">
            <Toggle
              value={config.checkboxChecked}
              onChange={(v) => set('checkboxChecked', v)}
            />
          </ControlRow>

          <ControlRow label="label">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.checkboxLabel}
              onChange={(e) => set('checkboxLabel', e.target.value)}
              spellCheck={false}
            />
          </ControlRow>

          <ControlRow label="description">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.checkboxDescription}
              onChange={(e) => set('checkboxDescription', e.target.value)}
              placeholder="Optional"
              spellCheck={false}
            />
          </ControlRow>
        </>
      )}

      {/* ── Actions ───────────────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Actions</SectionLabel>

      <ControlRow label="tone">
        <Segmented
          options={['neutral', 'brand']}
          value={config.actionsTone}
          onChange={(v) => set('actionsTone', v as FormConfig['actionsTone'])}
        />
      </ControlRow>

      <ControlRow label="compact">
        <Toggle
          value={config.actionsCompact}
          onChange={(v) => set('actionsCompact', v)}
        />
      </ControlRow>

      <ControlRow label="primary">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.actionsPrimaryLabel}
          onChange={(e) => set('actionsPrimaryLabel', e.target.value)}
          spellCheck={false}
        />
      </ControlRow>

      <ControlRow label="secondary">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.actionsSecondaryLabel}
          onChange={(e) => set('actionsSecondaryLabel', e.target.value)}
          placeholder="Optional"
          spellCheck={false}
        />
      </ControlRow>

      {/* ── Layout & Spacing ──────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Layout &amp; Spacing</SectionLabel>

      <ControlRow label="max width">
        <div className="ctrl-px-input">
          <input
            className="ctrl-input ctrl-input--num"
            type="number"
            min={160} max={900} step={4}
            value={config.varMaxWidth}
            placeholder="none"
            onChange={(e) => set('varMaxWidth', e.target.value)}
          />
          <span className="ctrl-px-unit">px</span>
        </div>
      </ControlRow>

      <ControlRow label="padding">
        <div className="ctrl-px-input">
          <input
            className="ctrl-input ctrl-input--num"
            type="number"
            min={0} max={64} step={2}
            value={config.varPadding}
            placeholder="24"
            onChange={(e) => set('varPadding', e.target.value)}
          />
          <span className="ctrl-px-unit">px</span>
        </div>
      </ControlRow>

      <ControlRow label="field gap">
        <div className="ctrl-px-input">
          <input
            className="ctrl-input ctrl-input--num"
            type="number"
            min={0} max={48} step={2}
            value={config.varGap}
            placeholder="24"
            onChange={(e) => set('varGap', e.target.value)}
          />
          <span className="ctrl-px-unit">px</span>
        </div>
      </ControlRow>

      <ControlRow label="form radius">
        <div className="ctrl-px-input">
          <input
            className="ctrl-input ctrl-input--num"
            type="number"
            min={0} max={32} step={1}
            value={config.varRadius}
            placeholder="16"
            onChange={(e) => set('varRadius', e.target.value)}
          />
          <span className="ctrl-px-unit">px</span>
        </div>
      </ControlRow>

      <ControlRow label="field height">
        <div className="ctrl-px-input">
          <input
            className="ctrl-input ctrl-input--num"
            type="number"
            min={32} max={80} step={2}
            value={config.varFieldMinHeight}
            placeholder="56"
            onChange={(e) => set('varFieldMinHeight', e.target.value)}
          />
          <span className="ctrl-px-unit">px</span>
        </div>
      </ControlRow>

      <ControlRow label="field radius">
        <div className="ctrl-px-input">
          <input
            className="ctrl-input ctrl-input--num"
            type="number"
            min={0} max={28} step={1}
            value={config.varFieldRadius}
            placeholder="8"
            onChange={(e) => set('varFieldRadius', e.target.value)}
          />
          <span className="ctrl-px-unit">px</span>
        </div>
      </ControlRow>

      {(config.varMaxWidth || config.varPadding || config.varGap || config.varRadius || config.varFieldMinHeight || config.varFieldRadius) && (
        <button
          className="ctrl-reset-btn"
          onClick={() => onChange({ ...config, varMaxWidth: '', varPadding: '', varGap: '', varRadius: '', varFieldMinHeight: '', varFieldRadius: '' })}
          type="button"
        >
          Reset layout
        </button>
      )}

      {/* ── CSS variable overrides ─────────────────────────────────── */}
      <Divider />
      <SectionLabel>CSS variables</SectionLabel>

      <div className="ctrl-css-vars-hint">
        Override <code>--ds-form-*</code> tokens live. Applied as{' '}
        <code>style</code> on the Form element.
      </div>

      <div className="ctrl-css-vars-grid">
        {CSS_VAR_DISPLAY.map(({ key, label }) => (
          <div key={key} className="ctrl-css-var-row">
            <span
              className="ctrl-css-var-row__label"
              title={CSS_VAR_LABELS[key]}
            >
              {label}
            </span>
            <ColorRow
              value={config[key]}
              swatch={CSS_VAR_SWATCHES[key]}
              label={CSS_VAR_LABELS[key]}
              onChange={(v) => set(key, v)}
              onClear={() => set(key, '')}
            />
          </div>
        ))}
      </div>

      {hasAnyCssVar && (
        <button className="ctrl-reset-btn" onClick={resetCssVars} type="button">
          Reset all CSS variables
        </button>
      )}

      {/* ── Custom CSS ────────────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customClass}
          onChange={(e) => set('customClass', e.target.value)}
          placeholder="e.g. contact-form"
          spellCheck={false}
        />
      </ControlRow>

      <ControlRow label="id">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customId}
          onChange={(e) => set('customId', e.target.value)}
          placeholder="e.g. signup-form"
          spellCheck={false}
        />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea
          className="ctrl-css-textarea"
          value={config.customCss}
          onChange={(e) => set('customCss', e.target.value)}
          placeholder={`.contact-form .ds-form-control { border-radius: 12px; }\n.contact-form .ds-form-control__input::placeholder { font-style: italic; }\n.contact-form .ds-form-checkbox__box { border-radius: 50%; }\n.contact-form .ds-form-actions__button--primary { width: 100%; }`}
          spellCheck={false}
          rows={5}
        />
        {config.customCss && (
          <div className="ctrl-css-meta">
            <button
              className="ctrl-css-meta__clear"
              onClick={() => set('customCss', '')}
              type="button"
            >
              clear
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
