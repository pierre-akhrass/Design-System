import type { TestimonialsConfig, TestimonialsItemConfig } from './testimonialsCodeGen'
import { DEFAULT_TESTIMONIALS } from './testimonialsCodeGen'
import { TOKENS } from '../../designTokens'
import './TestimonialsControls.scss'

interface TestimonialsControlsProps {
  config: TestimonialsConfig
  onChange: (cfg: TestimonialsConfig) => void
}

const ControlRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="ctrl-row">
    <span className="ctrl-row__label">{label}</span>
    <div className="ctrl-row__control">{children}</div>
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

interface TokenOption {
  value: string
  label: string
  sub?: string
}

const BG_COLOR_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: 'default' },
  { value: '#f8fafb', label: 'slate-50', sub: '#f8fafb' },
  { value: '#d2d9e0', label: 'surface-3', sub: '#d2d9e0' },
  { value: '#b5c1cb', label: 'surface-4', sub: '#b5c1cb' },
  { value: '#1e2c3e', label: 'slate-700', sub: '#1e2c3e' },
]

const TEXT_COLOR_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: 'default' },
  { value: '#292929', label: 'text-1', sub: '#292929' },
  { value: '#545454', label: 'text-2', sub: '#545454' },
  { value: '#bcbcbc', label: 'gray-300', sub: '#bcbcbc' },
  { value: '#ececec', label: 'gray-100', sub: '#ececec' },
]

const SPACING_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: 'default' },
  { value: TOKENS.paddingX['2xs'], label: '2xs', sub: n(TOKENS.paddingX['2xs']) },
  { value: TOKENS.paddingX.xs, label: 'xs', sub: n(TOKENS.paddingX.xs) },
  { value: TOKENS.paddingX.s, label: 's', sub: n(TOKENS.paddingX.s) },
  { value: TOKENS.paddingX.m, label: 'm', sub: n(TOKENS.paddingX.m) },
  { value: TOKENS.paddingX.l, label: 'l', sub: n(TOKENS.paddingX.l) },
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
  const isCustom = value !== '' && !options.some((o) => o.value === value)
  return (
    <div className="ctrl-token-field">
      <TokenSegmented options={options} value={value} onChange={onChange} />
      <div className="ctrl-custom-row">
        <input
          className={`ctrl-input ctrl-custom-row__input${isCustom ? ' ctrl-custom-row__input--active' : ''}`}
          type="text"
          placeholder="custom... e.g. 20px"
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

const ColorField = ({
  options,
  value,
  onChange,
}: {
  options: TokenOption[]
  value: string
  onChange: (v: string) => void
}) => {
  const isCustom = value !== '' && !options.some((o) => o.value === value)
  return (
    <div className="ctrl-token-field">
      <TokenSegmented options={options} value={value} onChange={onChange} />
      <div className="testimonials-controls__color-row">
        <input
          className="testimonials-controls__color-swatch"
          type="color"
          value={value || '#cccccc'}
          onChange={(e) => onChange(e.target.value)}
          title="Pick color"
        />
        <input
          className={`ctrl-input testimonials-controls__color-input${isCustom ? ' testimonials-controls__color-input--active' : ''}`}
          type="text"
          value={isCustom ? value : ''}
          placeholder="custom hex"
          onChange={(e) => onChange(e.target.value || '')}
          spellCheck={false}
        />
      </div>
    </div>
  )
}

export const TestimonialsControls = ({ config, onChange }: TestimonialsControlsProps) => {
  const set = <K extends keyof TestimonialsConfig>(key: K, value: TestimonialsConfig[K]) =>
    onChange({ ...config, [key]: value })

  const updateItem = (index: number, patch: Partial<TestimonialsItemConfig>) => {
    const next = [...config.testimonials]
    next[index] = { ...next[index], ...patch }
    set('testimonials', next)
  }

  const addItem = () => {
    set('testimonials', [
      ...config.testimonials,
      {
        image: '/src/assets/hero.png',
        imageAlt: '',
        quote: 'New testimonial quote',
        name: `Person ${config.testimonials.length + 1}`,
        role: 'Role',
      },
    ])
  }

  const removeItem = (index: number) => {
    set('testimonials', config.testimonials.filter((_, i) => i !== index))
  }

  const resetItems = () => {
    set('testimonials', DEFAULT_TESTIMONIALS)
  }

  return (
    <div className="testimonials-controls">
      <SectionLabel>Content</SectionLabel>

      <ControlRow label="label">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.label}
          onChange={(e) => set('label', e.target.value)}
          placeholder="Testimonials"
          spellCheck={false}
        />
      </ControlRow>

      <ControlRow label="heading">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.heading}
          onChange={(e) => set('heading', e.target.value)}
          placeholder="A word from our community"
          spellCheck={false}
        />
      </ControlRow>

      <ControlRow label="showSlider">
        <Toggle value={config.showSlider} onChange={(v) => set('showSlider', v)} label="showSlider" />
      </ControlRow>

      <Divider />
      <SectionLabel>Style tokens</SectionLabel>

      <ControlRow label="bgColor">
        <ColorField options={BG_COLOR_OPTIONS} value={config.bgColor} onChange={(v) => set('bgColor', v)} />
      </ControlRow>

      <ControlRow label="textColor">
        <ColorField options={TEXT_COLOR_OPTIONS} value={config.textColor} onChange={(v) => set('textColor', v)} />
      </ControlRow>

      <ControlRow label="paddingX">
        <TokenField options={SPACING_OPTIONS} value={config.paddingX} onChange={(v) => set('paddingX', v)} />
      </ControlRow>

      <ControlRow label="paddingY">
        <TokenField options={SPACING_OPTIONS} value={config.paddingY} onChange={(v) => set('paddingY', v)} />
      </ControlRow>

      <ControlRow label="marginX">
        <TokenField options={SPACING_OPTIONS} value={config.marginX} onChange={(v) => set('marginX', v)} />
      </ControlRow>

      <ControlRow label="marginY">
        <TokenField options={SPACING_OPTIONS} value={config.marginY} onChange={(v) => set('marginY', v)} />
      </ControlRow>

      <Divider />
      <SectionLabel>Testimonials</SectionLabel>

      <div className="testimonials-controls__items">
        {config.testimonials.map((item, index) => (
          <div className="testimonials-controls__card" key={index}>
            <div className="testimonials-controls__card-header">
              <input
                className="ctrl-input testimonials-controls__name"
                type="text"
                value={item.name}
                onChange={(e) => updateItem(index, { name: e.target.value })}
                placeholder="Name"
                spellCheck={false}
              />
              <button
                className="testimonials-controls__remove"
                type="button"
                onClick={() => removeItem(index)}
                title="Remove"
              >
                ✕
              </button>
            </div>

            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={item.role}
              onChange={(e) => updateItem(index, { role: e.target.value })}
              placeholder="Role"
              spellCheck={false}
            />

            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={item.image}
              onChange={(e) => updateItem(index, { image: e.target.value })}
              placeholder="Image URL"
              spellCheck={false}
            />

            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={item.imageAlt}
              onChange={(e) => updateItem(index, { imageAlt: e.target.value })}
              placeholder="Image alt"
              spellCheck={false}
            />

            <textarea
              className="ctrl-css-textarea testimonials-controls__quote"
              value={item.quote}
              onChange={(e) => updateItem(index, { quote: e.target.value })}
              placeholder="Quote"
              rows={4}
              spellCheck={false}
            />
          </div>
        ))}
      </div>

      <div className="testimonials-controls__actions">
        <button className="testimonials-controls__action-btn" type="button" onClick={addItem}>+ Testimonial</button>
        <button className="testimonials-controls__action-btn testimonials-controls__action-btn--reset" type="button" onClick={resetItems}>Reset</button>
      </div>

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customClass}
          onChange={(e) => set('customClass', e.target.value)}
          placeholder="e.g. my-testimonials"
          spellCheck={false}
        />
      </ControlRow>

      <ControlRow label="id">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customId}
          onChange={(e) => set('customId', e.target.value)}
          placeholder="e.g. testimonials-main"
          spellCheck={false}
        />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea
          className="ctrl-css-textarea"
          value={config.customCss}
          onChange={(e) => set('customCss', e.target.value)}
          placeholder={`.ds-testimonials { ... }`}
          rows={5}
          spellCheck={false}
        />
      </div>
    </div>
  )
}
