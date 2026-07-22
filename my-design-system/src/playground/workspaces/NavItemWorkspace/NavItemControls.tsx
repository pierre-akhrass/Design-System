import type { NavItemConfig } from './navItemCodeGen'
import { TOKENS } from '../../designTokens'
import './NavItemControls.scss'
import { TypographyControls } from '../../TypographyControls'

interface NavItemControlsProps {
  config: NavItemConfig
  onChange: (config: NavItemConfig) => void
}

// ── Small primitive sub-components (internal to this file) ────────────────────

interface ControlRowProps {
  label: string
  stack?: boolean
  disabled?: boolean
  children: React.ReactNode
}
const ControlRow = ({ label, stack, disabled, children }: ControlRowProps) => (
  <div className={`ctrl-row${stack ? ' ctrl-row--stack' : ''}${disabled ? ' ctrl-row--disabled' : ''}`}>
    <span className="ctrl-row__label">{label}</span>
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

// ── Token helpers ────────────────────────────────────────────────────────────
// Strips 'px' for compact subscript display: '8px' → '8'
const n = (v: string) => v.replace('px', '')

interface TokenOption {
  value: string   // '' = use design token (no override); otherwise the CSS value
  label: string   // token shorthand shown in button
  sub?: string    // resolved value shown as subscript
}

// ── Token option arrays — values sourced from designTokens.ts ────────────────

const PADDING_X_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: n(TOKENS.paddingContainer.m) },
  { value: TOKENS.paddingContainer.xs, label: 'xs', sub: n(TOKENS.paddingContainer.xs) },
  { value: TOKENS.paddingContainer.s, label: 's', sub: n(TOKENS.paddingContainer.s) },
  { value: TOKENS.paddingContainer.m, label: 'm', sub: n(TOKENS.paddingContainer.m) },
  { value: TOKENS.paddingContainer.l, label: 'l', sub: n(TOKENS.paddingContainer.l) },
  { value: TOKENS.paddingContainer.xl, label: 'xl', sub: n(TOKENS.paddingContainer.xl) },
]

const PADDING_Y_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '0' },
  { value: TOKENS.space['050'], label: '050', sub: n(TOKENS.space['050']) },
  { value: TOKENS.space['100'], label: '100', sub: n(TOKENS.space['100']) },
  { value: TOKENS.space['200'], label: '200', sub: n(TOKENS.space['200']) },
  { value: TOKENS.space['300'], label: '300', sub: n(TOKENS.space['300']) },
  { value: TOKENS.space['400'], label: '400', sub: n(TOKENS.space['400']) },
  { value: TOKENS.space['500'], label: '500', sub: n(TOKENS.space['500']) },
]

const MARGIN_X_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '0' },
  { value: TOKENS.space['0'], label: '0', sub: '0' },
  { value: TOKENS.space['050'], label: '050', sub: n(TOKENS.space['050']) },
  { value: TOKENS.space['100'], label: '100', sub: n(TOKENS.space['100']) },
  { value: TOKENS.space['200'], label: '200', sub: n(TOKENS.space['200']) },
  { value: TOKENS.space['300'], label: '300', sub: n(TOKENS.space['300']) },
  { value: TOKENS.space['400'], label: '400', sub: n(TOKENS.space['400']) },
]

const MARGIN_Y_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '0' },
  { value: TOKENS.space['0'], label: '0', sub: '0' },
  { value: TOKENS.space['050'], label: '050', sub: n(TOKENS.space['050']) },
  { value: TOKENS.space['100'], label: '100', sub: n(TOKENS.space['100']) },
  { value: TOKENS.space['200'], label: '200', sub: n(TOKENS.space['200']) },
  { value: TOKENS.space['300'], label: '300', sub: n(TOKENS.space['300']) },
]

const GAP_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '8' },
  { value: TOKENS.gap['0'], label: '0', sub: '0' },
  { value: TOKENS.gap['3xs'], label: '3xs', sub: n(TOKENS.gap['3xs']) },
  { value: TOKENS.gap['2xs'], label: '2xs', sub: n(TOKENS.gap['2xs']) },
  { value: TOKENS.gap.xs, label: 'xs', sub: n(TOKENS.gap.xs) },
  { value: TOKENS.gap.s, label: 's', sub: n(TOKENS.gap.s) },
  { value: TOKENS.gap.m, label: 'm', sub: n(TOKENS.gap.m) },
]

const RADIUS_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '∞' },
  { value: TOKENS.radius.none, label: 'none', sub: n(TOKENS.radius.none) },
  { value: TOKENS.radius.sm, label: 'sm', sub: n(TOKENS.radius.sm) },
  { value: TOKENS.radius.md, label: 'md', sub: n(TOKENS.radius.md) },
  { value: TOKENS.radius.lg, label: 'lg', sub: n(TOKENS.radius.lg) },
  { value: TOKENS.radius.xl, label: 'xl', sub: n(TOKENS.radius.xl) },
]

const BORDER_WIDTH_OPTIONS: TokenOption[] = [
  { value: '', label: 'none', sub: '—' },
  { value: TOKENS.borderWidth['1px'], label: '1px', sub: '1' },
  { value: TOKENS.borderWidth['2px'], label: '2px', sub: '2' },
  { value: TOKENS.borderWidth['4px'], label: '4px', sub: '4' },
]

// ── TokenSegmented component ─────────────────────────────────────────────────

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
  const isCustom = !options.some((opt) => opt.value === value)

  return (
    <div className="ctrl-token-field">
      <TokenSegmented options={options} value={value} onChange={onChange} />
      <div className="ctrl-custom-row">
        <input
          type="text"
          placeholder="e.g. 12px, 1rem"
          value={isCustom ? value : ''}
          onChange={(e) => onChange(e.target.value)}
          className="ctrl-custom-row__input ctrl-input"
        />
        {value && (
          <button
            type="button"
            className="ctrl-custom-row__clear"
            onClick={() => onChange('')}
            title="Clear"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export const NavItemControls = ({ config, onChange }: NavItemControlsProps) => {
  const set = <K extends keyof NavItemConfig>(key: K, value: NavItemConfig[K]) =>
    onChange({ ...config, [key]: value })

  const hasSpacingOverrides =
    config.paddingX || config.paddingY || config.marginX || config.marginY || config.borderRadius

  return (
    <div className="navitem-controls">
      <SectionLabel>Content</SectionLabel>

      {/* label */}
      <ControlRow label="label">
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
          options={['default', 'hover', 'active']}
          value={config.state}
          onChange={(v) => set('state', v as NavItemConfig['state'])}
        />
      </ControlRow>

      {/* selected */}
      <ControlRow label="selected">
        <input
          type="checkbox"
          checked={config.selected}
          onChange={(e) => set('selected', e.target.checked)}
          style={{ width: 'auto' }}
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Layout</SectionLabel>

      {/* orientation */}
      <ControlRow label="orientation">
        <Segmented
          options={['vertical', 'horizontal']}
          value={config.orientation}
          onChange={(v) => set('orientation', v as NavItemConfig['orientation'])}
        />
      </ControlRow>

      {/* level */}
      <ControlRow label="level">
        <Segmented
          options={['parent', 'nested']}
          value={config.level}
          onChange={(v) => set('level', v as NavItemConfig['level'])}
        />
      </ControlRow>

      {/* hierarchy */}
      <ControlRow label="hierarchy">
        <Segmented
          options={['tier-1', 'tier-2']}
          value={config.hierarchy}
          onChange={(v) => set('hierarchy', v as NavItemConfig['hierarchy'])}
        />
      </ControlRow>

      {/* shape */}
      <ControlRow label="shape">
        <Segmented
          options={['pill', 'line']}
          value={config.shape}
          onChange={(v) => set('shape', v as NavItemConfig['shape'])}
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Theme</SectionLabel>

      {/* colorMode */}
      <ControlRow label="colorMode">
        <Segmented
          options={['light', 'dark', 'auto']}
          value={config.colorMode}
          onChange={(v) => set('colorMode', v as NavItemConfig['colorMode'])}
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Icons</SectionLabel>

      {/* showIconLeft */}
      <ControlRow label="showIconLeft">
        <input
          type="checkbox"
          checked={config.showIconLeft}
          onChange={(e) => set('showIconLeft', e.target.checked)}
          style={{ width: 'auto' }}
        />
      </ControlRow>

      {/* showIconRight */}
      <ControlRow label="showIconRight">
        <input
          type="checkbox"
          checked={config.showIconRight}
          onChange={(e) => set('showIconRight', e.target.checked)}
          style={{ width: 'auto' }}
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Color overrides</SectionLabel>

      {/* textColor */}
      <ControlRow label="textColor">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.textColor}
          onChange={(e) => set('textColor', e.target.value)}
          placeholder="e.g. #000000"
          spellCheck={false}
        />
      </ControlRow>

      {/* bgColor */}
      <ControlRow label="bgColor">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.bgColor}
          onChange={(e) => set('bgColor', e.target.value)}
          placeholder="e.g. #ffffff"
          spellCheck={false}
        />
      </ControlRow>

      <Divider />
      <SectionLabel>Spacing overrides</SectionLabel>

      {/* padding x */}
      <ControlRow label="padding x" stack>
        <TokenField
          options={PADDING_X_OPTIONS}
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

      {/* margin x */}
      <ControlRow label="margin x" stack>
        <TokenField
          options={MARGIN_X_OPTIONS}
          value={config.marginX}
          onChange={(v) => set('marginX', v)}
        />
      </ControlRow>

      {/* margin y */}
      <ControlRow label="margin y" stack>
        <TokenField
          options={MARGIN_Y_OPTIONS}
          value={config.marginY}
          onChange={(v) => set('marginY', v)}
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

      {/* border-radius */}
      <ControlRow label="border-radius" stack>
        <TokenField
          options={RADIUS_OPTIONS}
          value={config.borderRadius}
          onChange={(v) => set('borderRadius', v)}
        />
      </ControlRow>

      {/* Reset spacing button */}
      {hasSpacingOverrides && (
        <button
          className="ctrl-reset-btn"
          onClick={() =>
            onChange({ ...config, paddingX: '', paddingY: '', marginX: '', marginY: '', gap: '', borderRadius: '' })
          }
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

      {/* border style */}
      <ControlRow label="border-style" disabled={!config.borderWidth}>
        <Segmented
          options={['solid', 'dashed', 'dotted']}
          value={config.borderStyle || 'solid'}
          onChange={(v) => set('borderStyle', v)}
        />
      </ControlRow>

      {/* border color */}
      <ControlRow label="border-color" disabled={!config.borderWidth}>
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.borderColor}
          onChange={(e) => set('borderColor', e.target.value)}
          placeholder="e.g. #000000"
          disabled={!config.borderWidth}
          spellCheck={false}
        />
      </ControlRow>

      <TypographyControls config={config} onChange={(patch) => onChange({ ...config, ...patch })} />

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      {/* customClass */}
      <ControlRow label="customClass">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customClass}
          onChange={(e) => set('customClass', e.target.value)}
          placeholder="e.g. my-nav-item"
          spellCheck={false}
        />
      </ControlRow>

      {/* customId */}
      <ControlRow label="customId">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customId}
          onChange={(e) => set('customId', e.target.value)}
          placeholder="e.g. primary-nav"
          spellCheck={false}
        />
      </ControlRow>

      {/* customCss */}
      <ControlRow label="customCss" stack>
        <textarea
          className="ctrl-input"
          value={config.customCss}
          onChange={(e) => set('customCss', e.target.value)}
          placeholder=".my-class { /* ... */ }"
          spellCheck={false}
          style={{ minHeight: '80px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px' }}
        />
      </ControlRow>
    </div>
  )
}
