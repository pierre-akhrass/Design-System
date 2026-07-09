import type { DialogConfig } from './dialogCodeGen'
import { TOKENS } from '../../designTokens'
import './DialogControls.scss'

interface DialogControlsProps {
  config: DialogConfig
  onChange: (cfg: DialogConfig) => void
}

// ── Shared primitives (use the global .ctrl-* classes) ────────────────────────

const ControlRow = ({ label, badge, stack, disabled, children }: { label: string; badge?: 'required' | 'optional'; stack?: boolean; disabled?: boolean; children: React.ReactNode }) => (
  <div className={`ctrl-row${stack ? ' ctrl-row--stack' : ''}${disabled ? ' ctrl-row--disabled' : ''}`}>
    <span className="ctrl-row__label">{label}{badge === 'required' && <span className="ctrl-row__badge ctrl-row__badge--req">req</span>}</span>
    <div className="ctrl-row__control">{children}</div>
  </div>
)

const Segmented = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => (
  <div className="ctrl-seg" role="group">
    {options.map((opt) => (
      <button key={opt} className={`ctrl-seg__btn ${opt === value ? 'ctrl-seg__btn--active' : ''}`} onClick={() => onChange(opt)} type="button">
        {opt}
      </button>
    ))}
  </div>
)

const Toggle = ({ value, onChange, label }: { value: boolean; onChange: (v: boolean) => void; label?: string }) => (
  <button className={`ctrl-toggle ${value ? 'ctrl-toggle--on' : ''}`} onClick={() => onChange(!value)} type="button" role="switch" aria-checked={value} aria-label={label}>
    <span className="ctrl-toggle__knob" />
    <span className="ctrl-toggle__label">{value ? 'on' : 'off'}</span>
  </button>
)

const Divider = () => <hr className="ctrl-divider" />
const SectionLabel = ({ children }: { children: React.ReactNode }) => <span className="ctrl-section-label">{children}</span>

const n = (v: string) => v.replace('px', '')

interface TokenOption { value: string; label: string; sub?: string }

// $radius-* — panel default = $radius-large = 16px
const RADIUS_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: n(TOKENS.radius.lg) + 'px' },
  { value: TOKENS.radius.none, label: 'none', sub: n(TOKENS.radius.none) },
  { value: TOKENS.radius.sm, label: 'sm', sub: n(TOKENS.radius.sm) },
  { value: TOKENS.radius.md, label: 'md', sub: n(TOKENS.radius.md) },
  { value: TOKENS.radius.lg, label: 'lg', sub: n(TOKENS.radius.lg) },
  { value: TOKENS.radius.xl, label: 'xl', sub: n(TOKENS.radius.xl) },
]

// $space-* — panel padding default = $space-400 = 32px
const PADDING_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '32px' },
  { value: TOKENS.paddingX.s, label: 's', sub: n(TOKENS.paddingX.s) },
  { value: TOKENS.paddingX.m, label: 'm', sub: n(TOKENS.paddingX.m) },
  { value: TOKENS.paddingX.l, label: 'l', sub: n(TOKENS.paddingX.l) },
  { value: '40px', label: '40', sub: '40' },
]

// $space-* — panel gap default = $space-200 = 16px
const GAP_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '16px' },
  { value: TOKENS.gap['2xs'], label: '2xs', sub: n(TOKENS.gap['2xs']) },
  { value: TOKENS.gap.xs, label: 'xs', sub: n(TOKENS.gap.xs) },
  { value: TOKENS.gap.s, label: 's', sub: n(TOKENS.gap.s) },
]

// $size-stroke-border-width-*
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

const TokenSegmented = ({ options, value, onChange }: { options: TokenOption[]; value: string; onChange: (v: string) => void }) => (
  <div className="ctrl-token-seg">
    {options.map((opt) => (
      <button key={opt.label} className={`ctrl-token-seg__btn${opt.value === value ? ' ctrl-token-seg__btn--active' : ''}`} onClick={() => onChange(opt.value)} type="button" title={`${opt.label}${opt.sub ? ` = ${opt.sub}` : ''}`}>
        <span className="ctrl-token-seg__label">{opt.label}</span>
        {opt.sub && <span className="ctrl-token-seg__sub">{opt.sub}</span>}
      </button>
    ))}
  </div>
)

const TokenField = ({ options, value, onChange }: { options: TokenOption[]; value: string; onChange: (v: string) => void }) => {
  const isCustom = value !== '' && !options.some((o) => o.value === value)
  return (
    <div className="ctrl-token-field">
      <TokenSegmented options={options} value={value} onChange={onChange} />
      <div className="ctrl-custom-row">
        <input className={`ctrl-input ctrl-custom-row__input${isCustom ? ' ctrl-custom-row__input--active' : ''}`} type="text" placeholder="custom…  e.g. 1rem · 20%" value={isCustom ? value : ''} onChange={(e) => onChange(e.target.value || '')} spellCheck={false} />
        {isCustom && <button className="ctrl-custom-row__clear" type="button" onClick={() => onChange('')} aria-label="Clear custom value">✕</button>}
      </div>
    </div>
  )
}

const ColorRow = ({ value, defaultSwatch = '#cccccc', onChange, onClear }: { value: string; defaultSwatch?: string; onChange: (v: string) => void; onClear?: () => void }) => (
  <div className="ctrl-color">
    <input className="ctrl-color__swatch" type="color" value={value || defaultSwatch} onChange={(e) => onChange(e.target.value)} title="Pick a color" />
    <input className="ctrl-color__text ctrl-input" type="text" value={value} placeholder="—" onChange={(e) => onChange(e.target.value)} spellCheck={false} />
    {value && onClear && <button className="ctrl-color__clear" onClick={onClear} type="button" aria-label="Clear color">✕</button>}
  </div>
)

// ── DialogControls ────────────────────────────────────────────────────────────

export const DialogControls = ({ config, onChange }: DialogControlsProps) => {
  const set = <K extends keyof DialogConfig>(key: K, value: DialogConfig[K]) => onChange({ ...config, [key]: value })

  return (
    <div className="dialog-controls">
      <SectionLabel>Content</SectionLabel>

      <ControlRow label="title" badge="required">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.title} onChange={(e) => set('title', e.target.value)} placeholder="Dialog title" spellCheck={false} />
      </ControlRow>

      <ControlRow label="body" stack>
        <textarea className="ctrl-css-textarea" style={{ minHeight: 60 }} value={config.body} onChange={(e) => set('body', e.target.value)} placeholder="Body text" spellCheck={false} rows={3} />
      </ControlRow>

      <Divider />
      <SectionLabel>Behaviour</SectionLabel>

      <ControlRow label="theme">
        <Segmented options={['light', 'dark']} value={config.theme} onChange={(v) => set('theme', v as DialogConfig['theme'])} />
      </ControlRow>

      <ControlRow label="placement">
        <Segmented options={['center', 'bottom-sheet']} value={config.placement} onChange={(v) => set('placement', v as DialogConfig['placement'])} />
      </ControlRow>

      <ControlRow label="size">
        <Segmented options={['small', 'medium', 'large']} value={config.size} onChange={(v) => set('size', v as DialogConfig['size'])} />
      </ControlRow>

      <ControlRow label="actions align" stack>
        <Segmented options={['start', 'end', 'between', 'stacked']} value={config.actionsAlign} onChange={(v) => set('actionsAlign', v as DialogConfig['actionsAlign'])} />
      </ControlRow>

      <ControlRow label="close button">
        <Toggle value={config.showClose} onChange={(v) => set('showClose', v)} label="Toggle close button" />
      </ControlRow>

      <ControlRow label="scrim close">
        <Toggle value={config.dismissOnScrimClick} onChange={(v) => set('dismissOnScrimClick', v)} label="Toggle dismiss on scrim click" />
      </ControlRow>

      <ControlRow label="ESC close">
        <Toggle value={config.dismissOnEscape} onChange={(v) => set('dismissOnEscape', v)} label="Toggle dismiss on escape" />
      </ControlRow>

      <Divider />
      <SectionLabel>Color overrides</SectionLabel>

      <ControlRow label="bgColor">
        <ColorRow value={config.bgColor} defaultSwatch="#ffffff" onChange={(v) => set('bgColor', v)} onClear={() => set('bgColor', '')} />
      </ControlRow>

      <ControlRow label="textColor">
        <ColorRow value={config.textColor} defaultSwatch="#141f2e" onChange={(v) => set('textColor', v)} onClear={() => set('textColor', '')} />
      </ControlRow>

      <Divider />
      <SectionLabel>Spacing overrides</SectionLabel>

      <ControlRow label="border-radius" stack>
        <TokenField options={RADIUS_OPTIONS} value={config.borderRadius} onChange={(v) => set('borderRadius', v)} />
      </ControlRow>

      <ControlRow label="padding" stack>
        <TokenField options={PADDING_OPTIONS} value={config.padding} onChange={(v) => set('padding', v)} />
      </ControlRow>

      <ControlRow label="gap" stack>
        <TokenField options={GAP_OPTIONS} value={config.gap} onChange={(v) => set('gap', v)} />
      </ControlRow>

      <Divider />
      <SectionLabel>Panel border</SectionLabel>

      <ControlRow label="border-width" stack>
        <TokenField options={BORDER_WIDTH_OPTIONS} value={config.borderWidth} onChange={(v) => set('borderWidth', v)} />
      </ControlRow>

      <ControlRow label="border-style" stack disabled={!config.borderWidth}>
        <TokenSegmented options={BORDER_STYLE_OPTIONS} value={config.borderStyle || 'solid'} onChange={(v) => set('borderStyle', v)} />
      </ControlRow>

      <ControlRow label="border-color" disabled={!config.borderWidth}>
        <ColorRow value={config.borderColor} defaultSwatch="#3fb0bc" onChange={(v) => set('borderColor', v)} onClear={() => set('borderColor', '')} />
      </ControlRow>

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customClass} onChange={(e) => set('customClass', e.target.value)} placeholder="e.g. my-dialog" spellCheck={false} />
      </ControlRow>

      <ControlRow label="id">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customId} onChange={(e) => set('customId', e.target.value)} placeholder="e.g. confirm-dialog" spellCheck={false} />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea className="ctrl-css-textarea" value={config.customCss} onChange={(e) => set('customCss', e.target.value)} placeholder={`.ds-dialog__panel { box-shadow: 0 20px 48px rgba(0,0,0,.3); }`} spellCheck={false} rows={5} />
        {config.customCss && (
          <div className="ctrl-css-meta">
            <button className="ctrl-css-meta__clear" onClick={() => set('customCss', '')} type="button">clear</button>
          </div>
        )}
      </div>
    </div>
  )
}
