import type { MegaMenuConfig, MegaMenuColumnEntry, MegaMenuLinkEntry, MegaMenuCardEntry } from './megaMenuCodeGen'
import { DEFAULT_COLUMNS, DEFAULT_CARD } from './megaMenuCodeGen'
import { TOKENS } from '../../designTokens'
import './MegaMenuControls.scss'

interface MegaMenuControlsProps {
  config: MegaMenuConfig
  onChange: (cfg: MegaMenuConfig) => void
}

const ControlRow = ({ label, stack, disabled, children }: { label: string; stack?: boolean; disabled?: boolean; children: React.ReactNode }) => (
  <div className={`ctrl-row${stack ? ' ctrl-row--stack' : ''}${disabled ? ' ctrl-row--disabled' : ''}`}>
    <span className="ctrl-row__label">{label}</span>
    <div className="ctrl-row__control">{children}</div>
  </div>
)

interface SegmentedProps { options: string[]; value: string; onChange: (v: string) => void }
const Segmented = ({ options, value, onChange }: SegmentedProps) => (
  <div className="ctrl-seg" role="group">
    {options.map((opt) => (
      <button key={opt} className={`ctrl-seg__btn ${opt === value ? 'ctrl-seg__btn--active' : ''}`} onClick={() => onChange(opt)} type="button">{opt}</button>
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

export const MegaMenuControls = ({ config, onChange }: MegaMenuControlsProps) => {
  const set = <K extends keyof MegaMenuConfig>(key: K, value: MegaMenuConfig[K]) =>
    onChange({ ...config, [key]: value })

  // ── Column helpers ────────────────────────────────────────────────
  const updateColumn = (idx: number, patch: Partial<MegaMenuColumnEntry>) => {
    const columns = [...config.columns]
    columns[idx] = { ...columns[idx], ...patch }
    set('columns', columns)
  }
  const removeColumn = (idx: number) => set('columns', config.columns.filter((_, i) => i !== idx))
  const addColumn = () => set('columns', [...config.columns, { title: 'NEW', links: [{ label: 'Link 1', href: '#' }] }])

  // ── Link helpers ──────────────────────────────────────────────────
  const updateLink = (colIdx: number, linkIdx: number, patch: Partial<MegaMenuLinkEntry>) => {
    const columns = [...config.columns]
    const links = [...columns[colIdx].links]
    links[linkIdx] = { ...links[linkIdx], ...patch }
    columns[colIdx] = { ...columns[colIdx], links }
    set('columns', columns)
  }
  const removeLink = (colIdx: number, linkIdx: number) => {
    const columns = [...config.columns]
    columns[colIdx] = { ...columns[colIdx], links: columns[colIdx].links.filter((_, i) => i !== linkIdx) }
    set('columns', columns)
  }
  const addLink = (colIdx: number) => {
    const columns = [...config.columns]
    const links = [...columns[colIdx].links, { label: `Link ${columns[colIdx].links.length + 1}`, href: '#' }]
    columns[colIdx] = { ...columns[colIdx], links }
    set('columns', columns)
  }

  // ── Card helpers ──────────────────────────────────────────────────
  const setCard = <K extends keyof MegaMenuCardEntry>(key: K, value: MegaMenuCardEntry[K]) =>
    set('card', { ...config.card, [key]: value })

  return (
    <div className="megamenu-controls">
      <SectionLabel>General</SectionLabel>

      <ControlRow label="colorMode">
        <Segmented options={['light', 'dark']} value={config.colorMode} onChange={(v) => set('colorMode', v as MegaMenuConfig['colorMode'])} />
      </ControlRow>

      <ControlRow label="title">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.title} onChange={(e) => set('title', e.target.value)} placeholder="Panel title" spellCheck={false} />
      </ControlRow>

      <Divider />
      <SectionLabel>Columns</SectionLabel>

      <div className="megamenu-controls__columns">
        {config.columns.map((col, cIdx) => (
          <div key={cIdx} className="megamenu-controls__column-card">
            <div className="megamenu-controls__col-header">
              <input
                className="ctrl-input megamenu-controls__col-title"
                type="text"
                value={col.title || ''}
                onChange={(e) => updateColumn(cIdx, { title: e.target.value })}
                placeholder="Category"
                spellCheck={false}
              />
              <button className="megamenu-controls__remove-btn" onClick={() => removeColumn(cIdx)} type="button" title="Remove column">✕</button>
            </div>

            <div className="megamenu-controls__links">
              {col.links.map((link, lIdx) => (
                <div key={lIdx} className="megamenu-controls__link-row">
                  <input
                    className="ctrl-input megamenu-controls__link-label"
                    type="text"
                    value={link.label}
                    onChange={(e) => updateLink(cIdx, lIdx, { label: e.target.value })}
                    placeholder="Label"
                    spellCheck={false}
                  />
                  <input
                    className="ctrl-input megamenu-controls__link-href"
                    type="text"
                    value={link.href || ''}
                    onChange={(e) => updateLink(cIdx, lIdx, { href: e.target.value })}
                    placeholder="href"
                    spellCheck={false}
                  />
                  <button className="megamenu-controls__remove-btn" onClick={() => removeLink(cIdx, lIdx)} type="button" title="Remove link">✕</button>
                </div>
              ))}
              <button className="megamenu-controls__add-btn" onClick={() => addLink(cIdx)} type="button">+ Link</button>
            </div>
          </div>
        ))}
      </div>

      <div className="megamenu-controls__col-actions">
        <button className="megamenu-controls__add-btn" onClick={addColumn} type="button">+ Column</button>
        <button className="megamenu-controls__reset-btn" onClick={() => set('columns', DEFAULT_COLUMNS)} type="button">Reset</button>
      </div>

      <Divider />
      <SectionLabel>Promotional card</SectionLabel>

      <ControlRow label="image">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.card.image || ''} onChange={(e) => setCard('image', e.target.value)} placeholder="/promo.jpg" spellCheck={false} />
      </ControlRow>

      <ControlRow label="title">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.card.title || ''} onChange={(e) => setCard('title', e.target.value)} placeholder="Card title" spellCheck={false} />
      </ControlRow>

      <ControlRow label="subtitle">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.card.subtitle || ''} onChange={(e) => setCard('subtitle', e.target.value)} placeholder="Subtitle" spellCheck={false} />
      </ControlRow>

      <ControlRow label="body">
        <textarea className="ctrl-input ctrl-input--full" value={config.card.body || ''} onChange={(e) => setCard('body', e.target.value)} placeholder="Body text" spellCheck={false} rows={3} style={{ resize: 'vertical', fontFamily: 'inherit', fontSize: 'inherit' }} />
      </ControlRow>

      <ControlRow label="buttonLabel">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.card.buttonLabel || ''} onChange={(e) => setCard('buttonLabel', e.target.value)} placeholder="CTA label" spellCheck={false} />
      </ControlRow>

      <ControlRow label="buttonHref">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.card.buttonHref || ''} onChange={(e) => setCard('buttonHref', e.target.value)} placeholder="CTA href" spellCheck={false} />
      </ControlRow>

      <div className="megamenu-controls__col-actions">
        <button className="megamenu-controls__reset-btn" onClick={() => set('card', DEFAULT_CARD)} type="button">Reset card</button>
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

      <ControlRow label="border-style" disabled={!config.borderWidth}>
        <TokenSegmented options={BORDER_STYLE_OPTIONS} value={config.borderStyle} onChange={(v) => set('borderStyle', v)} disabled={!config.borderWidth} />
      </ControlRow>

      <ControlRow label="border-color" disabled={!config.borderWidth}>
        <ColorRow value={config.borderColor} defaultSwatch="#3fb0bc" onChange={(v) => set('borderColor', v)} onClear={() => set('borderColor', '')} disabled={!config.borderWidth} />
      </ControlRow>

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customClass} onChange={(e) => set('customClass', e.target.value)} placeholder="e.g. my-megamenu" spellCheck={false} />
      </ControlRow>

      <ControlRow label="id">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customId} onChange={(e) => set('customId', e.target.value)} placeholder="e.g. products-menu" spellCheck={false} />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea className="ctrl-css-textarea" value={config.customCss} onChange={(e) => set('customCss', e.target.value)} placeholder={`.ds-mega-menu { ... }`} spellCheck={false} rows={5} />
      </div>
    </div>
  )
}
