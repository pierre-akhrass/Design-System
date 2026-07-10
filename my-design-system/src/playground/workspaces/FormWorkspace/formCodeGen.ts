import type { FormControlState } from '../../../components/Form'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface FormConfig {
  // ── Theme ───────────────────────────────────────────────────────────────
  theme: 'light' | 'dark'

  // ── Field composition ───────────────────────────────────────────────────
  /** How many input fields to render (1 or 2) */
  inputCount: 1 | 2
  showTextarea: boolean
  showSelect: boolean
  showCheckbox: boolean

  // ── Input fields ────────────────────────────────────────────────────────
  input1Label: string
  input1Placeholder: string
  input2Label: string
  input2Placeholder: string
  /** Shared state applied to all input fields */
  inputState: FormControlState

  // ── Textarea ────────────────────────────────────────────────────────────
  textareaLabel: string
  textareaPlaceholder: string
  textareaRows: number
  textareaState: FormControlState

  // ── Select ─────────────────────────────────────────────────────────────
  selectLabel: string
  selectState: FormControlState

  // ── Checkbox ───────────────────────────────────────────────────────────
  checkboxLabel: string
  checkboxChecked: boolean
  checkboxDescription: string
  checkboxState: FormControlState

  // ── Actions ─────────────────────────────────────────────────────────────
  actionsPrimaryLabel: string
  actionsSecondaryLabel: string
  actionsTone: 'neutral' | 'brand'
  actionsCompact: boolean

  // ── CSS variable overrides ──────────────────────────────────────────────
  // Empty string = use the theme default. Set to override live via inline style.
  varSurface: string           // --ds-form-surface       (form background)
  varBorder: string            // --ds-form-border        (form outer border)
  varFieldBg: string           // --ds-form-field-bg      (input background)
  varFieldBorder: string       // --ds-form-field-border  (input border)
  varFocusBorder: string       // --ds-form-field-border-focus (focus ring)
  varTextPrimary: string       // --ds-form-text-primary  (input value text)
  varTextTertiary: string      // --ds-form-text-tertiary (labels + placeholders)
  varAccent: string            // --ds-form-accent        (checkbox, links, focus tint)
  varDanger: string            // --ds-form-danger        (error color)

  // ── Layout / spacing overrides (px value as string, '' = default) ───────────
  varPadding: string         // --ds-form-padding        (form internal padding, default 24px)
  varGap: string             // --ds-form-gap            (gap between fields, default 24px)
  varRadius: string          // --ds-form-radius         (form border-radius, default 16px)
  varFieldMinHeight: string  // --ds-form-field-min-height (input height, default 56px)
  varFieldRadius: string     // --ds-form-field-radius   (input border-radius, default 8px)
  varMaxWidth: string        // --ds-form-max-width      (form max-width, default none)

  // ── Custom CSS ──────────────────────────────────────────────────────────
  customClass: string
  customId: string
  customCss: string
}

export const defaultFormConfig: FormConfig = {
  theme: 'light',

  inputCount: 2,
  showTextarea: true,
  showSelect: true,
  showCheckbox: true,

  input1Label: 'Full Name',
  input1Placeholder: 'Enter your full name',
  input2Label: 'Email Address',
  input2Placeholder: 'Enter your email',
  inputState: 'default',

  textareaLabel: 'Message',
  textareaPlaceholder: 'Write your message here…',
  textareaRows: 4,
  textareaState: 'default',

  selectLabel: 'Subject',
  selectState: 'default',

  checkboxLabel: 'I agree to the Terms & Conditions',
  checkboxChecked: false,
  checkboxDescription: '',
  checkboxState: 'default',

  actionsPrimaryLabel: 'Submit',
  actionsSecondaryLabel: 'Cancel',
  actionsTone: 'neutral',
  actionsCompact: false,

  varSurface: '',
  varBorder: '',
  varFieldBg: '',
  varFieldBorder: '',
  varFocusBorder: '',
  varTextPrimary: '',
  varTextTertiary: '',
  varAccent: '',
  varDanger: '',

  varPadding: '',
  varGap: '',
  varRadius: '',
  varFieldMinHeight: '',
  varFieldRadius: '',
  varMaxWidth: '',,

  customClass: '',
  customId: '',
  customCss: '',
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const DEMO_SELECT_OPTIONS = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'billing', label: 'Billing' },
  { value: 'other',   label: 'Other' },
]

/** Returns [varName, value] pairs for non-empty overrides only */
export function buildCssVarEntries(cfg: FormConfig): [string, string][] {
  const map: [string, string][] = [
    ['--ds-form-surface',            cfg.varSurface],
    ['--ds-form-border',             cfg.varBorder],
    ['--ds-form-field-bg',           cfg.varFieldBg],
    ['--ds-form-field-border',       cfg.varFieldBorder],
    ['--ds-form-field-border-focus', cfg.varFocusBorder],
    ['--ds-form-text-primary',       cfg.varTextPrimary],
    ['--ds-form-text-tertiary',      cfg.varTextTertiary],
    ['--ds-form-accent',             cfg.varAccent],
    ['--ds-form-danger',             cfg.varDanger],
    ['--ds-form-padding',            cfg.varPadding ? `${cfg.varPadding}px` : ''],
    ['--ds-form-gap',                cfg.varGap ? `${cfg.varGap}px` : ''],
    ['--ds-form-radius',             cfg.varRadius ? `${cfg.varRadius}px` : ''],
    ['--ds-form-field-min-height',   cfg.varFieldMinHeight ? `${cfg.varFieldMinHeight}px` : ''],
    ['--ds-form-field-radius',       cfg.varFieldRadius ? `${cfg.varFieldRadius}px` : ''],
    ['--ds-form-max-width',          cfg.varMaxWidth ? `${cfg.varMaxWidth}px` : ''],
  ]
  return map.filter(([, v]) => v !== '')
}

function inputAttrs(label: string, placeholder: string, state: FormControlState): string {
  const parts = [`label="${label}"`, `placeholder="${placeholder}"`]
  if (state !== 'default') parts.push(`state="${state}"`)
  return '\n    ' + parts.join('\n    ') + '\n  '
}

// ── Code generator ────────────────────────────────────────────────────────────

export function formCodeGen(cfg: FormConfig): string {
  const lines: string[] = []

  // ── Import ──────────────────────────────────────────────────────────────────
  const imports = ['Form', 'FormInput']
  if (cfg.showTextarea) imports.push('FormTextarea')
  if (cfg.showSelect)   imports.push('FormSelect')
  if (cfg.showCheckbox) imports.push('FormCheckbox')
  imports.push('FormActions')
  lines.push(`import { ${imports.join(', ')} } from '@company/design-system';`)

  // ── CSS vars const ──────────────────────────────────────────────────────────
  const cssVarEntries = buildCssVarEntries(cfg)
  if (cssVarEntries.length > 0) {
    lines.push('', `const formStyle = {`)
    for (const [k, v] of cssVarEntries) {
      lines.push(`  '${k}': '${v}',`)
    }
    lines.push(`} as React.CSSProperties;`)
  }

  // ── Select options const ────────────────────────────────────────────────────
  if (cfg.showSelect) {
    lines.push('', `const SELECT_OPTIONS = [`)
    for (const opt of DEMO_SELECT_OPTIONS) {
      lines.push(`  { value: '${opt.value}', label: '${opt.label}' },`)
    }
    lines.push(`];`)
  }

  // ── JSX ─────────────────────────────────────────────────────────────────────
  lines.push('')

  const formAttrs: string[] = []
  if (cfg.theme === 'dark') formAttrs.push(`  theme="dark"`)
  if (cssVarEntries.length > 0) formAttrs.push(`  style={formStyle}`)
  if (cfg.customClass) formAttrs.push(`  className="${cfg.customClass}"`)
  if (cfg.customId)    formAttrs.push(`  id="${cfg.customId}"`)

  lines.push(formAttrs.length
    ? `<Form\n${formAttrs.join('\n')}\n>`
    : `<Form>`)

  // Input 1
  lines.push(`  <FormInput${inputAttrs(cfg.input1Label, cfg.input1Placeholder, cfg.inputState)}/>`)

  // Input 2
  if (cfg.inputCount === 2) {
    lines.push(`  <FormInput${inputAttrs(cfg.input2Label, cfg.input2Placeholder, cfg.inputState)}/>`)
  }

  // Textarea
  if (cfg.showTextarea) {
    const ta: string[] = [`label="${cfg.textareaLabel}"`, `placeholder="${cfg.textareaPlaceholder}"`]
    if (cfg.textareaRows !== 4) ta.push(`rows={${cfg.textareaRows}}`)
    if (cfg.textareaState !== 'default') ta.push(`state="${cfg.textareaState}"`)
    lines.push(`  <FormTextarea\n    ${ta.join('\n    ')}\n  />`)
  }

  // Select
  if (cfg.showSelect) {
    const sel: string[] = [`label="${cfg.selectLabel}"`, `options={SELECT_OPTIONS}`]
    if (cfg.selectState !== 'default') sel.push(`state="${cfg.selectState}"`)
    lines.push(`  <FormSelect\n    ${sel.join('\n    ')}\n  />`)
  }

  // Checkbox
  if (cfg.showCheckbox) {
    const cb: string[] = [`label="${cfg.checkboxLabel}"`]
    if (cfg.checkboxDescription) cb.push(`description="${cfg.checkboxDescription}"`)
    if (cfg.checkboxChecked)     cb.push(`defaultChecked`)
    if (cfg.checkboxState !== 'default') cb.push(`state="${cfg.checkboxState}"`)
    lines.push(`  <FormCheckbox\n    ${cb.join('\n    ')}\n  />`)
  }

  // Actions
  const act: string[] = [`primaryLabel="${cfg.actionsPrimaryLabel}"`]
  if (cfg.actionsSecondaryLabel) act.push(`secondaryLabel="${cfg.actionsSecondaryLabel}"`)
  if (cfg.actionsTone !== 'neutral') act.push(`primaryTone="${cfg.actionsTone}"`)
  if (cfg.actionsCompact) act.push(`compact`)
  lines.push(`  <FormActions\n    ${act.join('\n    ')}\n  />`)

  lines.push(`</Form>`)

  // Custom CSS block
  if (cfg.customCss) {
    lines.push('', '/* Custom CSS */', cfg.customCss)
  }

  return lines.join('\n')
}
