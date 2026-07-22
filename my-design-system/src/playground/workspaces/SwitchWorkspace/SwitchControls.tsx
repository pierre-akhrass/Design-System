import type { SwitchConfig } from './switchCodeGen'
import { TOKENS } from '../../designTokens'
import './SwitchControls.scss'
import { TypographyControls } from '../../TypographyControls'

interface SwitchControlsProps {
  config: SwitchConfig
  onChange: (cfg: SwitchConfig) => void
}

const ControlRow = ({ label, badge, stack, disabled, children }: { label: string; badge?: 'required' | 'optional'; stack?: boolean; disabled?: boolean; children: React.ReactNode }) => (
  <div className={`ctrl-row${stack ? ' ctrl-row--stack' : ''}${disabled ? ' ctrl-row--disabled' : ''}`}>
    <span className="ctrl-row__label">{label}{badge === 'required' && <span className="ctrl-row__badge ctrl-row__badge--req">req</span>}</span>
    <div className="ctrl-row__control">{children}</div>
  </div>
)

interface SegmentedProps {
  options: string[]
  value: string
  onChange: (v: string) => void
}
const Segmented = ({ options, value, onChange }: SegmentedProps) => (
  <div className="ctrl-seg" role="group">
    {options.map((opt) => (
      <button
        key={opt}
        className={`ctrl-seg__btn ${opt === value ? 'ctrl-seg__btn--active' : ''}`}
        onClick={() => onChange(opt)}
        type="button"
      >
        {opt}
      </button>
    ))}
  </div>
)

interface ToggleProps {
  value: boolean
  onChange: (v: boolean) => void
  label?: string
}
const Toggle = ({ value, onChange, label }: ToggleProps) => (
  <button
    className={`ctrl-toggle ${value ? 'ctrl-toggle--on' : ''}`}
    onClick={() => onChange(!value)}
    type="button"
    role="switch"
    aria-checked={value}
    aria-label={label}
  >
    <span className="ctrl-toggle__knob" />
    <span className="ctrl-toggle__label">{value ? 'on' : 'off'}</span>
  </button>
)

const Divider = () => <hr className="ctrl-divider" />
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="ctrl-section-label">{children}</span>
)

const n = (v: string) => v.replace('px', '')

interface TokenOption { value: string; label: string; sub?: string }

const RADIUS_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.radius.none, label: 'none', sub: n(TOKENS.radius.none) },
  { value: TOKENS.radius.sm, label: 'sm', sub: n(TOKENS.radius.sm) },
  { value: TOKENS.radius.md, label: 'md', sub: n(TOKENS.radius.md) },
  { value: TOKENS.radius.lg, label: 'lg', sub: n(TOKENS.radius.lg) },
  { value: TOKENS.radius.xl, label: 'xl', sub: n(TOKENS.radius.xl) },
  { value: TOKENS.radius.full, label: 'full', sub: '∞' },
]

const PADDING_X_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.paddingX['2xs'], label: '2xs', sub: n(TOKENS.paddingX['2xs']) },
  { value: TOKENS.paddingX.xs, label: 'xs', sub: n(TOKENS.paddingX.xs) },
  { value: TOKENS.paddingX.s, label: 's', sub: n(TOKENS.paddingX.s) },
  { value: TOKENS.paddingX.m, label: 'm', sub: n(TOKENS.paddingX.m) },
  { value: TOKENS.paddingX.l, label: 'l', sub: n(TOKENS.paddingX.l) },
]

const PADDING_Y_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.paddingY['2px'], label: '2px', sub: n(TOKENS.paddingY['2px']) },
  { value: TOKENS.paddingY['2xs'], label: '2xs', sub: n(TOKENS.paddingY['2xs']) },
  { value: TOKENS.paddingY.xs, label: 'xs', sub: n(TOKENS.paddingY.xs) },
  { value: TOKENS.paddingY['xs+'], label: 'xs+', sub: n(TOKENS.paddingY['xs+']) },
  { value: TOKENS.paddingY.s, label: 's', sub: n(TOKENS.paddingY.s) },
]

const GAP_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.gap['0'], label: '0', sub: '0' },
  { value: TOKENS.gap['3xs'], label: '3xs', sub: n(TOKENS.gap['3xs']) },
  { value: TOKENS.gap['2xs'], label: '2xs', sub: n(TOKENS.gap['2xs']) },
  { value: TOKENS.gap.xs, label: 'xs', sub: n(TOKENS.gap.xs) },
  { value: TOKENS.gap.s, label: 's', sub: n(TOKENS.gap.s) },
]

const BORDER_WIDTH_OPTIONS: TokenOption[] = [
  { value: '', label: 'none', sub: '—' },
  { value: TOKENS.borderWidth['1px'], label: '1px', sub: n(TOKENS.borderWidth['1px']) },
  { value: TOKENS.borderWidth['2px'], label: '2px', sub: n(TOKENS.borderWidth['2px']) },
  { value: TOKENS.borderWidth['4px'], label: '4px', sub: n(TOKENS.borderWidth['4px']) },
]

const BORDER_STYLE_OPTIONS: TokenOption[] = [
  { value: 'solid', label: 'solid', sub: '—' },
  { value: 'dashed', label: 'dashed', sub: '╌╌' },
  { value: 'dotted', label: 'dotted', sub: '···' },
]

const TokenSegmented = ({ options, value, onChange, disabled }: { options: TokenOption[]; value: string; onChange: (v: string) => void; disabled?: boolean }) => (
  <div className={`ctrl-token-seg${disabled ? ' ctrl-token-seg--disabled' : ''}`}>
    {options.map((opt) => (
      <button
        key={opt.label}
        className={`ctrl-token-seg__btn${opt.value === value ? ' ctrl-token-seg__btn--active' : ''}`}
        onClick={() => !disabled && onChange(opt.value)}
        type="button"
        disabled={disabled}
        title={`${opt.label}${opt.sub ? ` = ${opt.sub}` : ''}`}
      >
        <span className="ctrl-token-seg__label">{opt.label}</span>
        {opt.sub && <span className="ctrl-token-seg__sub">{opt.sub}</span>}
      </button>
    ))}
  </div>
)

const TokenField = ({ options, value, onChange }: { options: TokenOption[]; value: string; onChange: (v: string) => void }) => {
  const isCustom = value !== '' && !options.some(o => o.value === value)
  return (
    <div className="ctrl-token-field">
      <TokenSegmented options={options} value={value} onChange={onChange} />
      <input
        className={`ctrl-input ctrl-custom-row__input${isCustom ? ' ctrl-custom-row__input--active' : ''}`}
        type="text"
        placeholder="custom… e.g. 1rem · 20%"
        value={isCustom ? value : ''}
        onChange={(e) => onChange(e.target.value || '')}
        spellCheck={false}
      />
    </div>
  )
}

interface ColorRowProps { value: string; defaultSwatch?: string; onChange: (v: string) => void; onClear?: () => void; disabled?: boolean }
const ColorRow = ({ value, defaultSwatch = '#cccccc', onChange, onClear, disabled }: ColorRowProps) => (
  <div className={`ctrl-color${disabled ? ' ctrl-color--disabled' : ''}`}>
    <input className="ctrl-color__swatch" type="color" value={value || defaultSwatch} onChange={(e) => onChange(e.target.value)} title="Pick a color" disabled={disabled} />
    <input className="ctrl-color__text ctrl-input" type="text" value={value} placeholder="—" onChange={(e) => onChange(e.target.value)} spellCheck={false} disabled={disabled} />
    {value && onClear && <button className="ctrl-color__clear" onClick={onClear} type="button" aria-label="Clear color" disabled={disabled}>✕</button>}
  </div>
)

export const SwitchControls = ({ config, onChange }: SwitchControlsProps) => {
  const set = <K extends keyof SwitchConfig>(key: K, value: SwitchConfig[K]) =>
    onChange({ ...config, [key]: value })

  const hasBorder = !!config.borderWidth

  return (
    <div className="switch-controls">
      <SectionLabel>Content</SectionLabel>

      <ControlRow label="label">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.label} onChange={(e) => set('label', e.target.value)} placeholder="Label text" spellCheck={false} />
      </ControlRow>

      <ControlRow label="description">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.description} onChange={(e) => set('description', e.target.value)} placeholder="Optional description" spellCheck={false} />
      </ControlRow>

      <Divider />
      <SectionLabel>Behaviour</SectionLabel>

      <ControlRow label="state">
        <Segmented options={['unchecked', 'checked']} value={config.state} onChange={(v) => set('state', v as SwitchConfig['state'])} />
      </ControlRow>

      <ControlRow label="placement">
        <Segmented options={['left', 'right']} value={config.placement} onChange={(v) => set('placement', v as SwitchConfig['placement'])} />
      </ControlRow>

      <ControlRow label="disabled">
        <Toggle value={config.disabled} onChange={(v) => set('disabled', v)} label="Toggle disabled" />
      </ControlRow>

      <Divider />
      <SectionLabel>Color &amp; Font overrides</SectionLabel>

      <ControlRow label="bgColor">
        <ColorRow value={config.bgColor} defaultSwatch="#f0f0f0" onChange={(v) => set('bgColor', v)} onClear={() => set('bgColor', '')} />
      </ControlRow>

      <ControlRow label="textColor">
        <ColorRow value={config.textColor} defaultSwatch="#292929" onChange={(v) => set('textColor', v)} onClear={() => set('textColor', '')} />
      </ControlRow>

      <ControlRow label="fontFamily">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.fontFamily} onChange={(e) => set('fontFamily', e.target.value)} placeholder="e.g. Georgia, serif" spellCheck={false} />
      </ControlRow>

      <Divider />
      <SectionLabel>Spacing overrides</SectionLabel>

      <ControlRow label="border-radius" stack>
        <TokenField options={RADIUS_OPTIONS} value={config.borderRadius} onChange={(v) => set('borderRadius', v)} />
      </ControlRow>

      <ControlRow label="padding x" stack>
        <TokenField options={PADDING_X_OPTIONS} value={config.paddingX} onChange={(v) => set('paddingX', v)} />
      </ControlRow>

      <ControlRow label="padding y" stack>
        <TokenField options={PADDING_Y_OPTIONS} value={config.paddingY} onChange={(v) => set('paddingY', v)} />
      </ControlRow>

      <ControlRow label="gap" stack>
        <TokenField options={GAP_OPTIONS} value={config.gap} onChange={(v) => set('gap', v)} />
      </ControlRow>

      <Divider />
      <SectionLabel>Border</SectionLabel>

      <ControlRow label="border-width" stack>
        <TokenField options={BORDER_WIDTH_OPTIONS} value={config.borderWidth} onChange={(v) => set('borderWidth', v)} />
      </ControlRow>

      <ControlRow label="border-style" disabled={!hasBorder}>
        <TokenSegmented options={BORDER_STYLE_OPTIONS} value={config.borderStyle} onChange={(v) => set('borderStyle', v)} disabled={!hasBorder} />
      </ControlRow>

      <ControlRow label="border-color" disabled={!hasBorder}>
        <ColorRow value={config.borderColor} defaultSwatch="#3fb0bc" onChange={(v) => set('borderColor', v)} onClear={() => set('borderColor', '')} disabled={!hasBorder} />
      </ControlRow>

      <TypographyControls config={config} onChange={(patch) => onChange({ ...config, ...patch })} />

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customClass} onChange={(e) => set('customClass', e.target.value)} placeholder="e.g. my-switch" spellCheck={false} />
      </ControlRow>

      <ControlRow label="id">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customId} onChange={(e) => set('customId', e.target.value)} placeholder="e.g. notif-switch" spellCheck={false} />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea className="ctrl-css-textarea" value={config.customCss} onChange={(e) => set('customCss', e.target.value)} placeholder={`.my-switch { ... }`} spellCheck={false} rows={5} />
      </div>
    </div>
  )
}
