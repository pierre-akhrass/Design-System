import type { ListConfig } from './listCodeGen'
import { TOKENS } from '../../designTokens'
import { TypographyControls } from '../../TypographyControls'
import './ListControls.scss'

interface ListControlsProps {
  config: ListConfig
  onChange: (cfg: ListConfig) => void
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

const Stepper = ({ value, min, max, onChange }: { value: number; min: number; max: number; onChange: (v: number) => void }) => (
  <div className="ctrl-seg" role="group">
    <button className="ctrl-seg__btn" type="button" onClick={() => onChange(Math.max(min, value - 1))} aria-label="Decrease">−</button>
    <span className="ctrl-seg__btn ctrl-seg__btn--active" style={{ minWidth: 28, textAlign: 'center' }}>{value}</span>
    <button className="ctrl-seg__btn" type="button" onClick={() => onChange(Math.min(max, value + 1))} aria-label="Increase">+</button>
  </div>
)

const Divider = () => <hr className="ctrl-divider" />
const SectionLabel = ({ children }: { children: React.ReactNode }) => <span className="ctrl-section-label">{children}</span>

const n = (v: string) => v.replace('px', '')

interface TokenOption { value: string; label: string; sub?: string }

// $radius-* — bordered item default = $radius-medium = 8px
const RADIUS_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.radius.none, label: 'none', sub: n(TOKENS.radius.none) },
  { value: TOKENS.radius.sm, label: 'sm', sub: n(TOKENS.radius.sm) },
  { value: TOKENS.radius.md, label: 'md', sub: n(TOKENS.radius.md) },
  { value: TOKENS.radius.lg, label: 'lg', sub: n(TOKENS.radius.lg) },
  { value: TOKENS.radius.xl, label: 'xl', sub: n(TOKENS.radius.xl) },
]

// $padding-action-* — item padding
const PADDING_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.paddingX['2xs'], label: '2xs', sub: n(TOKENS.paddingX['2xs']) },
  { value: TOKENS.paddingX.xs, label: 'xs', sub: n(TOKENS.paddingX.xs) },
  { value: TOKENS.paddingX.s, label: 's', sub: n(TOKENS.paddingX.s) },
  { value: TOKENS.paddingX.m, label: 'm', sub: n(TOKENS.paddingX.m) },
]

// $gap-* — bordered list gap = $gap-2xs = 8px
const GAP_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.gap['0'], label: '0', sub: '0' },
  { value: TOKENS.gap['3xs'], label: '3xs', sub: n(TOKENS.gap['3xs']) },
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

// ── ListControls ──────────────────────────────────────────────────────────────

export const ListControls = ({ config, onChange }: ListControlsProps) => {
  const set = <K extends keyof ListConfig>(key: K, value: ListConfig[K]) => onChange({ ...config, [key]: value })

  return (
    <div className="list-controls">
      <SectionLabel>Content</SectionLabel>

      <ControlRow label="variant" stack>
        <Segmented options={['document', 'user', 'numbered', 'bulleted', 'card']} value={config.variant} onChange={(v) => set('variant', v as ListConfig['variant'])} />
      </ControlRow>

      <ControlRow label="items">
        <Stepper value={config.itemCount} min={1} max={10} onChange={(v) => set('itemCount', v)} />
      </ControlRow>

      <ControlRow label="description">
        <Toggle value={config.showDescription} onChange={(v) => set('showDescription', v)} label="Toggle description" />
      </ControlRow>

      <Divider />
      <SectionLabel>Behaviour</SectionLabel>

      <ControlRow label="theme">
        <Segmented options={['light', 'dark']} value={config.theme} onChange={(v) => set('theme', v as ListConfig['theme'])} />
      </ControlRow>

      <ControlRow label="bordered">
        <Toggle value={config.bordered} onChange={(v) => set('bordered', v)} label="Toggle bordered" />
      </ControlRow>

      <Divider />
      <SectionLabel>Color overrides</SectionLabel>

      <ControlRow label="textColor">
        <ColorRow value={config.textColor} defaultSwatch="#141f2e" onChange={(v) => set('textColor', v)} onClear={() => set('textColor', '')} />
      </ControlRow>

      <ControlRow label="hoverBg">
        <ColorRow value={config.itemHoverBg} defaultSwatch="#eef1f4" onChange={(v) => set('itemHoverBg', v)} onClear={() => set('itemHoverBg', '')} />
      </ControlRow>

      <Divider />
      <SectionLabel>Spacing overrides</SectionLabel>

      <ControlRow label="gap" stack>
        <TokenField options={GAP_OPTIONS} value={config.gap} onChange={(v) => set('gap', v)} />
      </ControlRow>

      <ControlRow label="item padding" stack>
        <TokenField options={PADDING_OPTIONS} value={config.itemPadding} onChange={(v) => set('itemPadding', v)} />
      </ControlRow>

      <ControlRow label="item radius" stack>
        <TokenField options={RADIUS_OPTIONS} value={config.itemRadius} onChange={(v) => set('itemRadius', v)} />
      </ControlRow>

      <Divider />
      <SectionLabel>Item border</SectionLabel>

      <ControlRow label="border-width" stack>
        <TokenField options={BORDER_WIDTH_OPTIONS} value={config.borderWidth} onChange={(v) => set('borderWidth', v)} />
      </ControlRow>

      <ControlRow label="border-style" stack disabled={!config.borderWidth}>
        <TokenSegmented options={BORDER_STYLE_OPTIONS} value={config.borderStyle || 'solid'} onChange={(v) => set('borderStyle', v)} />
      </ControlRow>

      <ControlRow label="border-color" disabled={!config.borderWidth}>
        <ColorRow value={config.borderColor} defaultSwatch="#3fb0bc" onChange={(v) => set('borderColor', v)} onClear={() => set('borderColor', '')} />
      </ControlRow>

      <TypographyControls config={config} onChange={(patch) => onChange({ ...config, ...patch })} />

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customClass} onChange={(e) => set('customClass', e.target.value)} placeholder="e.g. my-list" spellCheck={false} />
      </ControlRow>

      <ControlRow label="id">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customId} onChange={(e) => set('customId', e.target.value)} placeholder="e.g. side-list" spellCheck={false} />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea className="ctrl-css-textarea" value={config.customCss} onChange={(e) => set('customCss', e.target.value)} placeholder={`.ds-list__item:hover { background: #eef; }`} spellCheck={false} rows={5} />
        {config.customCss && (
          <div className="ctrl-css-meta">
            <button className="ctrl-css-meta__clear" onClick={() => set('customCss', '')} type="button">clear</button>
          </div>
        )}
      </div>
    </div>
  )
}
