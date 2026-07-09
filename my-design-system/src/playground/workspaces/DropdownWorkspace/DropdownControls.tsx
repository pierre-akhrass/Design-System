import type { DropdownConfig, DropdownItemConfig } from './dropdownCodeGen'
import { DEFAULT_ITEMS } from './dropdownCodeGen'
import { TOKENS } from '../../designTokens'
import './DropdownControls.scss'

interface DropdownControlsProps {
  config: DropdownConfig
  onChange: (cfg: DropdownConfig) => void
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

export const DropdownControls = ({ config, onChange }: DropdownControlsProps) => {
  const set = <K extends keyof DropdownConfig>(key: K, value: DropdownConfig[K]) =>
    onChange({ ...config, [key]: value })

  const hasBorder = !!config.borderWidth

  const updateItem = (idx: number, patch: Partial<DropdownItemConfig>) => {
    const items = [...config.items]
    items[idx] = { ...items[idx], ...patch }
    set('items', items)
  }

  const removeItem = (idx: number) => {
    set('items', config.items.filter((_, i) => i !== idx))
  }

  const addItem = (kind: DropdownItemConfig['kind']) => {
    const newItem: DropdownItemConfig = kind === 'divider'
      ? { kind: 'divider', label: '' }
      : kind === 'button'
        ? { kind: 'button', label: 'Action', variant: 'filled' }
        : { kind: 'item', label: `Item ${config.items.length + 1}` }
    set('items', [...config.items, newItem])
  }

  const resetItems = () => set('items', DEFAULT_ITEMS)

  return (
    <div className="dropdown-controls">
      <SectionLabel>Content</SectionLabel>

      <ControlRow label="colorMode">
        <Segmented options={['light', 'dark']} value={config.colorMode} onChange={(v) => set('colorMode', v as DropdownConfig['colorMode'])} />
      </ControlRow>

      <Divider />
      <SectionLabel>Items</SectionLabel>

      <div className="dropdown-controls__items">
        {config.items.map((item, idx) => (
          <div key={idx} className="dropdown-controls__item-card">
            <div className="dropdown-controls__item-header">
              <select
                className="ctrl-input dropdown-controls__item-kind"
                value={item.kind}
                onChange={(e) => updateItem(idx, { kind: e.target.value as DropdownItemConfig['kind'] })}
              >
                <option value="item">Item</option>
                <option value="divider">Divider</option>
                <option value="button">Button</option>
              </select>
              <button className="dropdown-controls__item-remove" onClick={() => removeItem(idx)} type="button" title="Remove">✕</button>
            </div>
            {item.kind !== 'divider' && (
              <input
                className="ctrl-input ctrl-input--full"
                type="text"
                value={item.label}
                onChange={(e) => updateItem(idx, { label: e.target.value })}
                placeholder="Label"
                spellCheck={false}
              />
            )}
            {item.kind === 'button' && (
              <Segmented options={['filled', 'outline', 'ghost']} value={item.variant || 'filled'} onChange={(v) => updateItem(idx, { variant: v })} />
            )}
          </div>
        ))}
      </div>

      <div className="dropdown-controls__item-actions">
        <button className="dropdown-controls__add-btn" onClick={() => addItem('item')} type="button">+ Item</button>
        <button className="dropdown-controls__add-btn" onClick={() => addItem('divider')} type="button">+ Divider</button>
        <button className="dropdown-controls__add-btn" onClick={() => addItem('button')} type="button">+ Button</button>
        <button className="dropdown-controls__reset-btn" onClick={resetItems} type="button">Reset</button>
      </div>

      <Divider />
      <SectionLabel>Color &amp; Font overrides</SectionLabel>

      <ControlRow label="bgColor">
        <ColorRow value={config.bgColor} defaultSwatch="#ffffff" onChange={(v) => set('bgColor', v)} onClear={() => set('bgColor', '')} />
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

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customClass} onChange={(e) => set('customClass', e.target.value)} placeholder="e.g. my-dropdown" spellCheck={false} />
      </ControlRow>

      <ControlRow label="id">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customId} onChange={(e) => set('customId', e.target.value)} placeholder="e.g. account-menu" spellCheck={false} />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea className="ctrl-css-textarea" value={config.customCss} onChange={(e) => set('customCss', e.target.value)} placeholder={`.my-dropdown { ... }`} spellCheck={false} rows={5} />
      </div>
    </div>
  )
}
