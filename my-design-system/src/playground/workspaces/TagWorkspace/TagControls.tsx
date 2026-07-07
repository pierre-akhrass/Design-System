import type { TagConfig } from './tagCodeGen'
import { TOKENS } from '../../designTokens'
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

// ── Token helpers ────────────────────────────────────────────────────────────
// Strips 'px' for compact subscript display: '8px' → '8'
const n = (v: string) => v.replace('px', '')

interface TokenOption {
  value: string   // '' = use design token (no override); otherwise the CSS value
  label: string   // token shorthand shown in button
  sub?: string    // resolved value shown as subscript
}

// ── Token option arrays — values sourced from designTokens.ts ────────────────

// $radius-* — Tag default = $dimensions-tag-corner-radius = 9999px (pill)
const RADIUS_OPTIONS: TokenOption[] = [
  { value: '',                 label: 'token', sub: '∞'                       },
  { value: TOKENS.radius.none, label: 'none',  sub: n(TOKENS.radius.none)     },
  { value: TOKENS.radius.sm,   label: 'sm',    sub: n(TOKENS.radius.sm)       },
  { value: TOKENS.radius.md,   label: 'md',    sub: n(TOKENS.radius.md)       },
  { value: TOKENS.radius.lg,   label: 'lg',    sub: n(TOKENS.radius.lg)       },
  { value: TOKENS.radius.xl,   label: 'xl',    sub: n(TOKENS.radius.xl)       },
  { value: TOKENS.radius.full, label: 'full',  sub: '∞'                       },
]

// $padding-action-* — Tag default = $padding-action-xs = 8px (paddingInline)
const PADDING_OPTIONS: TokenOption[] = [
  { value: '',                       label: 'token', sub: n(TOKENS.paddingX.xs) + 'px' },
  { value: TOKENS.paddingX['2xs'],   label: '2xs',   sub: n(TOKENS.paddingX['2xs'])    },
  { value: TOKENS.paddingX.xs,       label: 'xs',    sub: n(TOKENS.paddingX.xs)        },
  { value: TOKENS.paddingX.s,        label: 's',     sub: n(TOKENS.paddingX.s)         },
  { value: TOKENS.paddingX.m,        label: 'm',     sub: n(TOKENS.paddingX.m)         },
  { value: TOKENS.paddingX.l,        label: 'l',     sub: n(TOKENS.paddingX.l)         },
]

// $gap-* — Tag default = $gap-3xs = 4px
const GAP_OPTIONS: TokenOption[] = [
  { value: '',                  label: 'token', sub: n(TOKENS.gap['3xs']) + 'px' },
  { value: TOKENS.gap['0'],     label: '0',     sub: '0'                         },
  { value: TOKENS.gap['3xs'],   label: '3xs',   sub: n(TOKENS.gap['3xs'])        },
  { value: TOKENS.gap['2xs'],   label: '2xs',   sub: n(TOKENS.gap['2xs'])        },
  { value: TOKENS.gap.xs,       label: 'xs',    sub: n(TOKENS.gap.xs)            },
  { value: TOKENS.gap.s,        label: 's',     sub: n(TOKENS.gap.s)             },
]

// Tag default paddingBlock = 0px (height is token-controlled; paddingBlock stretches it)
const PADDING_Y_OPTIONS: TokenOption[] = [
  { value: '',                        label: 'token', sub: '0px'                       },
  { value: TOKENS.paddingY['2px'],    label: '2px',   sub: n(TOKENS.paddingY['2px'])   },
  { value: TOKENS.paddingY['2xs'],    label: '2xs',   sub: n(TOKENS.paddingY['2xs'])   },
  { value: TOKENS.paddingY.xs,        label: 'xs',    sub: n(TOKENS.paddingY.xs)       },
  { value: TOKENS.paddingY['xs+'],    label: 'xs+',   sub: n(TOKENS.paddingY['xs+'])   },
  { value: TOKENS.paddingY.s,         label: 's',     sub: n(TOKENS.paddingY.s)        },
]

// $size-stroke-border-width-*
const BORDER_WIDTH_OPTIONS: TokenOption[] = [
  { value: '',                           label: 'none', sub: '—'                           },
  { value: TOKENS.borderWidth['1px'],    label: '1px',  sub: n(TOKENS.borderWidth['1px']) },
  { value: TOKENS.borderWidth['2px'],    label: '2px',  sub: n(TOKENS.borderWidth['2px']) },
  { value: TOKENS.borderWidth['4px'],    label: '4px',  sub: n(TOKENS.borderWidth['4px']) },
]

// CSS border-style values
const BORDER_STYLE_OPTIONS: TokenOption[] = [
  { value: 'solid',  label: 'solid',  sub: '—'   },
  { value: 'dashed', label: 'dashed', sub: '╌╌'  },
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

// ── TokenField: token preset buttons + free-form custom input ─────────────────
const TokenField = ({
  options,
  value,
  onChange,
}: {
  options: TokenOption[]
  value: string
  onChange: (v: string) => void
}) => {
  const isCustom = value !== '' && !options.some(o => o.value === value)
  return (
    <div className="ctrl-token-field">
      <TokenSegmented options={options} value={value} onChange={onChange} />
      <div className="ctrl-custom-row">
        <input
          className={`ctrl-input ctrl-custom-row__input${isCustom ? ' ctrl-custom-row__input--active' : ''}`}
          type="text"
          placeholder="custom…  e.g. 1rem · 20% · 0.5em"
          value={isCustom ? value : ''}
          onChange={(e) => onChange(e.target.value || '')}
          spellCheck={false}
        />
        {isCustom && (
          <button
            className="ctrl-custom-row__clear"
            type="button"
            onClick={() => onChange('')}
            aria-label="Clear custom value"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

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
        <TokenField
          options={RADIUS_OPTIONS}
          value={config.borderRadius}
          onChange={(v) => set('borderRadius', v)}
        />
      </ControlRow>

      {/* padding x */}
      <ControlRow label="padding x" stack>
        <TokenField
          options={PADDING_OPTIONS}
          value={config.paddingX}
          onChange={(v) => set('paddingX', v)}
        />
      </ControlRow>

      {/* padding y */}
      <ControlRow label="padding y" stack>
        <TokenField
          options={PADDING_Y_OPTIONS}
          value={config.paddingY}
          onChange={(v) => set('paddingY', v)}
        />
      </ControlRow>

      {/* gap */}
      <ControlRow label="gap" stack>
        <TokenField
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
        <TokenField
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

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      {/* className — assign a selector, then target it in the textarea below */}
      <ControlRow label="className">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customClass}
          onChange={(e) => set('customClass', e.target.value)}
          placeholder="e.g. my-tag"
          spellCheck={false}
        />
      </ControlRow>

      {/* id */}
      <ControlRow label="id">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customId}
          onChange={(e) => set('customId', e.target.value)}
          placeholder="e.g. hero-tag"
          spellCheck={false}
        />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea
          className="ctrl-css-textarea"
          value={config.customCss}
          onChange={(e) => set('customCss', e.target.value)}
          placeholder={`.my-tag { background: #6366f1; color: #fff; }\n.my-tag:hover { background: #4f46e5; }\n.my-tag.ds-tag--hover { background: #4f46e5; }`}
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
