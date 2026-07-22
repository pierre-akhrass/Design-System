import type { TooltipConfig } from './tooltipCodeGen'
import { TOKENS } from '../../designTokens'
import './TooltipControls.scss'

interface TooltipControlsProps {
  config: TooltipConfig
  onChange: (cfg: TooltipConfig) => void
}

// ── Small primitive sub-components ───────────────────────────────────────────

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
        className={`ctrl-seg__btn${opt === value ? ' ctrl-seg__btn--active' : ''}`}
        onClick={() => onChange(opt)}
        type="button"
      >
        {opt}
      </button>
    ))}
  </div>
)

// ── Token helpers ─────────────────────────────────────────────────────────────

const n = (v: string) => v.replace('px', '')

interface TokenOption {
  value: string
  label: string
  sub?: string
}

// ── Token option arrays ───────────────────────────────────────────────────────

// $radius-small = 4px — Tooltip default
const RADIUS_OPTIONS: TokenOption[] = [
  { value: '',                  label: 'token', sub: '4px'                   },
  { value: TOKENS.radius.none,  label: 'none',  sub: n(TOKENS.radius.none)   },
  { value: TOKENS.radius.sm,    label: 'sm',    sub: n(TOKENS.radius.sm)     },
  { value: TOKENS.radius.md,    label: 'md',    sub: n(TOKENS.radius.md)     },
  { value: TOKENS.radius.lg,    label: 'lg',    sub: n(TOKENS.radius.lg)     },
  { value: TOKENS.radius.xl,    label: 'xl',    sub: n(TOKENS.radius.xl)     },
  { value: TOKENS.radius.full,  label: 'full',  sub: '∞'                     },
]

// $padding-action-xs = 8px — Tooltip default (all 4 sides)
const PADDING_OPTIONS: TokenOption[] = [
  { value: '',                       label: 'token', sub: '8px'                      },
  { value: TOKENS.paddingX['2xs'],   label: '2xs',   sub: n(TOKENS.paddingX['2xs']) },
  { value: TOKENS.paddingX.xs,       label: 'xs',    sub: n(TOKENS.paddingX.xs)     },
  { value: TOKENS.paddingX.s,        label: 's',     sub: n(TOKENS.paddingX.s)      },
  { value: TOKENS.paddingX.m,        label: 'm',     sub: n(TOKENS.paddingX.m)      },
]

// $gap-3xs = 4px — Tooltip default (title ↔ body gap)
const GAP_OPTIONS: TokenOption[] = [
  { value: '',                  label: 'token', sub: '4px'                    },
  { value: TOKENS.gap['0'],     label: '0',     sub: '0'                      },
  { value: TOKENS.gap['3xs'],   label: '3xs',   sub: n(TOKENS.gap['3xs'])     },
  { value: TOKENS.gap['2xs'],   label: '2xs',   sub: n(TOKENS.gap['2xs'])     },
  { value: TOKENS.gap.xs,       label: 'xs',    sub: n(TOKENS.gap.xs)         },
  { value: TOKENS.gap.s,        label: 's',     sub: n(TOKENS.gap.s)          },
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

// ── TooltipControls ───────────────────────────────────────────────────────────

export const TooltipControls = ({ config, onChange }: TooltipControlsProps) => {
  const set = <K extends keyof TooltipConfig>(key: K, value: TooltipConfig[K]) =>
    onChange({ ...config, [key]: value })

  const clearColors = () => onChange({ ...config, bgColor: '', borderColor: '', textColor: '' })

  return (
    <div className="tooltip-controls">
      <SectionLabel>Content</SectionLabel>

      {/* title */}
      <ControlRow label="title" badge="required">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.title}
          onChange={(e) => set('title', e.target.value)}
          placeholder="Tooltip title"
          spellCheck={false}
        />
      </ControlRow>

      {/* body — empty string = no body rendered */}
      <ControlRow label="body">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.body}
          onChange={(e) => set('body', e.target.value)}
          placeholder="Optional supporting text"
          spellCheck={false}
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Behaviour</SectionLabel>

      {/* placement */}
      <ControlRow label="placement">
        <Segmented
          options={['top', 'bottom', 'left', 'right']}
          value={config.placement}
          onChange={(v) => set('placement', v as TooltipConfig['placement'])}
        />
      </ControlRow>

      {/* theme */}
      <ControlRow label="theme">
        <Segmented
          options={['auto', 'light', 'dark']}
          value={config.theme}
          onChange={(v) => set('theme', v as TooltipConfig['theme'])}
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Color overrides</SectionLabel>

      {/* bgColor — light theme default: #141f2e */}
      <ControlRow label="bgColor">
        <ColorRow
          value={config.bgColor}
          defaultSwatch="#141f2e"
          onChange={(v) => set('bgColor', v)}
          onClear={() => set('bgColor', '')}
        />
      </ControlRow>

      {/* borderColor — light theme default: #bcbcbc */}
      <ControlRow label="borderColor">
        <ColorRow
          value={config.borderColor}
          defaultSwatch="#bcbcbc"
          onChange={(v) => set('borderColor', v)}
          onClear={() => set('borderColor', '')}
        />
      </ControlRow>

      {/* textColor — light theme default: #ffffff */}
      <ControlRow label="textColor">
        <ColorRow
          value={config.textColor}
          defaultSwatch="#ffffff"
          onChange={(v) => set('textColor', v)}
          onClear={() => set('textColor', '')}
        />
      </ControlRow>

      {(config.bgColor || config.borderColor || config.textColor) && (
        <button className="ctrl-reset-btn" onClick={clearColors} type="button">
          Reset color overrides
        </button>
      )}

      <Divider />
      <SectionLabel>Spacing overrides</SectionLabel>

      {/* border-radius — token default: $radius-small = 4px */}
      <ControlRow label="border-radius" stack>
        <TokenField
          options={RADIUS_OPTIONS}
          value={config.borderRadius}
          onChange={(v) => set('borderRadius', v)}
        />
      </ControlRow>

      {/* padding — token default: $padding-action-xs = 8px */}
      <ControlRow label="padding" stack>
        <TokenField
          options={PADDING_OPTIONS}
          value={config.padding}
          onChange={(v) => set('padding', v)}
        />
      </ControlRow>

      {/* gap — token default: $gap-3xs = 4px (title ↔ body) */}
      <ControlRow label="gap" stack>
        <TokenField
          options={GAP_OPTIONS}
          value={config.gap}
          onChange={(v) => set('gap', v)}
        />
      </ControlRow>

      {/* width — token default: 128px (free-form, no token presets) */}
      <ControlRow label="width">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.width}
          onChange={(e) => set('width', e.target.value)}
          placeholder="e.g. 128px · 200px · 100%"
          spellCheck={false}
        />
      </ControlRow>

      {(config.borderRadius || config.padding || config.gap || config.width) && (
        <button
          className="ctrl-reset-btn"
          onClick={() => onChange({ ...config, borderRadius: '', padding: '', gap: '', width: '' })}
          type="button"
        >
          Reset spacing overrides
        </button>
      )}

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      {/* className — use in the textarea below as a selector */}
      <ControlRow label="className">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customClass}
          onChange={(e) => set('customClass', e.target.value)}
          placeholder="e.g. my-tooltip"
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
          placeholder="e.g. hero-tooltip"
          spellCheck={false}
        />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea
          className="ctrl-css-textarea"
          value={config.customCss}
          onChange={(e) => set('customCss', e.target.value)}
          placeholder={`.my-tooltip { box-shadow: 0 8px 24px rgba(0,0,0,0.25); }\n.my-tooltip.ds-tooltip--top { transform: translateY(-4px); }\n.my-tooltip.ds-tooltip--dark { background: #1e293b; }`}
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
