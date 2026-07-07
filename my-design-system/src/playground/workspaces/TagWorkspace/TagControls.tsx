import type { TagConfig } from './tagCodeGen'
import './TagControls.scss'

interface TagControlsProps {
  config: TagConfig
  onChange: (cfg: TagConfig) => void
}

// ── Small primitive sub-components (internal to this file) ────────────────────

interface ControlRowProps {
  label: string
  badge?: 'required' | 'optional'
  stack?: boolean
  disabled?: boolean
  children: React.ReactNode
}
const ControlRow = ({ label, badge, stack, disabled, children }: ControlRowProps) => (
  <div className={`ctrl-row${stack ? ' ctrl-row--stack' : ''}${disabled ? ' ctrl-row--disabled' : ''}`}>
    <span className="ctrl-row__label">
      {label}
      {badge === 'required' && <span className="ctrl-row__badge ctrl-row__badge--req">req</span>}
    </span>
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

// ── Token option arrays (tied directly to design tokens) ─────────────────────

interface TokenOption {
  value: string   // '' = use design token (no override); otherwise pixel value
  label: string   // token shorthand shown in button
  sub?: string    // resolved value shown as subscript
}

// $radius-* tokens — Tag default = $dimensions-tag-corner-radius = 9999px
const RADIUS_OPTIONS: TokenOption[] = [
  { value: '',       label: 'token', sub: '∞' },
  { value: '0px',    label: 'none',  sub: '0' },
  { value: '4px',    label: 'sm',    sub: '4' },
  { value: '8px',    label: 'md',    sub: '8' },
  { value: '16px',   label: 'lg',    sub: '16' },
  { value: '24px',   label: 'xl',    sub: '24' },
  { value: '9999px', label: 'full',  sub: '∞' },
]

// $padding-action-* tokens — Tag default = $padding-action-xs = 8px
const PADDING_OPTIONS: TokenOption[] = [
  { value: '',     label: 'token', sub: '8px' },
  { value: '4px',  label: '2xs',   sub: '4' },
  { value: '8px',  label: 'xs',    sub: '8' },
  { value: '16px', label: 's',     sub: '16' },
  { value: '24px', label: 'm',     sub: '24' },
  { value: '32px', label: 'l',     sub: '32' },
]

// $gap-* tokens — Tag default = $gap-3xs = 4px
const GAP_OPTIONS: TokenOption[] = [
  { value: '',     label: 'token', sub: '4px' },
  { value: '0px',  label: '0',     sub: '0' },
  { value: '4px',  label: '3xs',   sub: '4' },
  { value: '8px',  label: '2xs',   sub: '8' },
  { value: '12px', label: 'xs',    sub: '12' },
  { value: '16px', label: 's',     sub: '16' },
]

// $padding-action-* tokens for vertical padding (Tag default = 0px)
const PADDING_Y_OPTIONS: TokenOption[] = [
  { value: '',     label: 'token', sub: '0px' },
  { value: '2px',  label: '2px',   sub: '2' },
  { value: '4px',  label: '2xs',   sub: '4' },
  { value: '8px',  label: 'xs',    sub: '8' },
  { value: '12px', label: 'xs+',   sub: '12' },
  { value: '16px', label: 's',     sub: '16' },
]

// $size-stroke-border-width-* tokens
const BORDER_WIDTH_OPTIONS: TokenOption[] = [
  { value: '',    label: 'none', sub: '—' },
  { value: '1px', label: '1px',  sub: '1' },
  { value: '2px', label: '2px',  sub: '2' },
  { value: '4px', label: '4px',  sub: '4' },
]

// CSS border-style values
const BORDER_STYLE_OPTIONS: TokenOption[] = [
  { value: 'solid',  label: 'solid',  sub: '—' },
  { value: 'dashed', label: 'dashed', sub: '╌╌' },
  { value: 'dotted', label: 'dotted', sub: '···' },
]

const TokenSegmented = ({
  options,
  value,
  onChange,
}: {
  options: TokenOption[]
  value: string
  onChange: (v: string) => void
}) => (
  <div className="ctrl-token-seg">
    {options.map((opt) => (
      <button
        key={opt.label}
        className={`ctrl-token-seg__btn${opt.value === value ? ' ctrl-token-seg__btn--active' : ''}`}
        onClick={() => onChange(opt.value)}
        type="button"
        title={`${opt.label}${opt.sub ? ` = ${opt.sub}` : ''}`}
      >
        <span className="ctrl-token-seg__label">{opt.label}</span>
        {opt.sub && <span className="ctrl-token-seg__sub">{opt.sub}</span>}
      </button>
    ))}
  </div>
)

// ─────────────────────────────────────────────────────────────────────────────

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

interface ColorRowProps {
  value: string
  defaultSwatch?: string
  onChange: (v: string) => void
  onClear?: () => void
}
const ColorRow = ({ value, defaultSwatch = '#cccccc', onChange, onClear }: ColorRowProps) => (
  <div className="ctrl-color">
    <input
      className="ctrl-color__swatch"
      type="color"
      value={value || defaultSwatch}
      onChange={(e) => onChange(e.target.value)}
      title="Pick a color"
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
      <button className="ctrl-color__clear" onClick={onClear} type="button" aria-label="Clear color">
        ✕
      </button>
    )}
  </div>
)

const Divider = () => <hr className="ctrl-divider" />

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="ctrl-section-label">{children}</span>
)

// ── TagControls ───────────────────────────────────────────────────────────────

export const TagControls = ({ config, onChange }: TagControlsProps) => {
  const set = <K extends keyof TagConfig>(key: K, value: TagConfig[K]) =>
    onChange({ ...config, [key]: value })

  const clearColors = () => onChange({ ...config, bgColor: '', textColor: '' })

  return (
    <div className="tag-controls">
      <SectionLabel>Content</SectionLabel>

      {/* label */}
      <ControlRow label="label" badge="required">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.label}
          onChange={(e) => set('label', e.target.value)}
          placeholder="Label text"
          spellCheck={false}
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Behaviour</SectionLabel>

      {/* state */}
      <ControlRow label="state">
        <Segmented
          options={['default', 'hover']}
          value={config.state}
          onChange={(v) => set('state', v as TagConfig['state'])}
        />
      </ControlRow>

      {/* theme */}
      <ControlRow label="theme">
        <Segmented
          options={['auto', 'light', 'dark']}
          value={config.theme}
          onChange={(v) => set('theme', v as TagConfig['theme'])}
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Icons</SectionLabel>

      {/* iconStart */}
      <ControlRow label="iconStart">
        <Toggle
          value={config.showIconStart}
          onChange={(v) => set('showIconStart', v)}
          label="Toggle icon start"
        />
      </ControlRow>

      {/* iconEnd */}
      <ControlRow label="iconEnd">
        <Toggle
          value={config.showIconEnd}
          onChange={(v) => set('showIconEnd', v)}
          label="Toggle icon end"
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Color overrides</SectionLabel>

      {/* bgColor */}
      <ControlRow label="bgColor">
        <ColorRow
          value={config.bgColor}
          defaultSwatch="#d2d9e0"
          onChange={(v) => set('bgColor', v)}
          onClear={() => set('bgColor', '')}
        />
      </ControlRow>

      {/* textColor */}
      <ControlRow label="textColor">
        <ColorRow
          value={config.textColor}
          defaultSwatch="#292929"
          onChange={(v) => set('textColor', v)}
          onClear={() => set('textColor', '')}
        />
      </ControlRow>

      {/* Reset colors button */}
      {(config.bgColor || config.textColor) && (
        <button className="ctrl-reset-btn" onClick={clearColors} type="button">
          Reset color overrides
        </button>
      )}

      <Divider />
      <SectionLabel>Spacing overrides</SectionLabel>

      {/* border-radius */}
      <ControlRow label="border-radius" stack>
        <TokenSegmented
          options={RADIUS_OPTIONS}
          value={config.borderRadius}
          onChange={(v) => set('borderRadius', v)}
        />
      </ControlRow>

      {/* padding x */}
      <ControlRow label="padding x" stack>
        <TokenSegmented
          options={PADDING_OPTIONS}
          value={config.paddingX}
          onChange={(v) => set('paddingX', v)}
        />
      </ControlRow>

      {/* padding y */}
      <ControlRow label="padding y" stack>
        <TokenSegmented
          options={PADDING_Y_OPTIONS}
          value={config.paddingY}
          onChange={(v) => set('paddingY', v)}
        />
      </ControlRow>

      {/* gap */}
      <ControlRow label="gap" stack>
        <TokenSegmented
          options={GAP_OPTIONS}
          value={config.gap}
          onChange={(v) => set('gap', v)}
        />
      </ControlRow>

      {/* Reset spacing button */}
      {(config.borderRadius || config.paddingX || config.paddingY || config.gap) && (
        <button
          className="ctrl-reset-btn"
          onClick={() => onChange({ ...config, borderRadius: '', paddingX: '', paddingY: '', gap: '' })}
          type="button"
        >
          Reset spacing overrides
        </button>
      )}

      <Divider />
      <SectionLabel>Border</SectionLabel>

      {/* border width */}
      <ControlRow label="border-width" stack>
        <TokenSegmented
          options={BORDER_WIDTH_OPTIONS}
          value={config.borderWidth}
          onChange={(v) => set('borderWidth', v)}
        />
      </ControlRow>

      {/* border style — grayed out until a width is chosen */}
      <ControlRow label="border-style" stack disabled={!config.borderWidth}>
        <TokenSegmented
          options={BORDER_STYLE_OPTIONS}
          value={config.borderStyle || 'solid'}
          onChange={(v) => set('borderStyle', v)}
        />
      </ControlRow>

      {/* border color — grayed out until a width is chosen */}
      <ControlRow label="border-color" disabled={!config.borderWidth}>
        <ColorRow
          value={config.borderColor}
          defaultSwatch="#3fb0bc"
          onChange={(v) => set('borderColor', v)}
          onClear={() => set('borderColor', '')}
        />
      </ControlRow>

      {/* Reset border button */}
      {config.borderWidth && (
        <button
          className="ctrl-reset-btn"
          onClick={() => onChange({ ...config, borderWidth: '', borderStyle: '', borderColor: '' })}
          type="button"
        >
          Reset border
        </button>
      )}
    </div>
  )
}
