import type { NavbarConfig, NavbarLinkEntry, NavbarActionEntry } from './navbarCodeGen'
import type { NavbarMenuRow } from '../../../components/Navbar'
import { DEFAULT_LINKS, DEFAULT_ACTIONS } from './navbarCodeGen'
import { TOKENS } from '../../designTokens'
import './NavbarControls.scss'
import { TypographyControls } from '../../TypographyControls'

interface NavbarControlsProps {
  config: NavbarConfig
  onChange: (cfg: NavbarConfig) => void
}

const ControlRow = ({ label, stack, disabled, children }: { label: string; stack?: boolean; disabled?: boolean; children: React.ReactNode }) => (
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
        placeholder="custom…"
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

const ICON_KEYS = ['flag', 'bell', 'search', 'star', 'circle', 'map']

export const NavbarControls = ({ config, onChange }: NavbarControlsProps) => {
  const set = <K extends keyof NavbarConfig>(key: K, value: NavbarConfig[K]) =>
    onChange({ ...config, [key]: value })

  const hasBorder = !!config.borderWidth

  // ── Link helpers ──────────────────────────────────────────────────
  const updateLink = (idx: number, patch: Partial<NavbarLinkEntry>) => {
    const links = [...config.links]
    links[idx] = { ...links[idx], ...patch }
    set('links', links)
  }
  const removeLink = (idx: number) => set('links', config.links.filter((_, i) => i !== idx))
  const addLink = (type: 'navItem' | 'dropdown') => {
    const entry: NavbarLinkEntry = type === 'dropdown'
      ? { type: 'dropdown', label: 'Menu', rows: [{ kind: 'item', label: 'Item 1' }] }
      : { type: 'navItem', label: 'Link' }
    set('links', [...config.links, entry])
  }

  // ── Dropdown row helpers ──────────────────────────────────────────
  const updateRow = (linkIdx: number, rowIdx: number, patch: Partial<NavbarMenuRow>) => {
    const links = [...config.links]
    const rows = [...(links[linkIdx].rows || [])]
    rows[rowIdx] = { ...rows[rowIdx], ...patch } as NavbarMenuRow
    links[linkIdx] = { ...links[linkIdx], rows }
    set('links', links)
  }
  const removeRow = (linkIdx: number, rowIdx: number) => {
    const links = [...config.links]
    links[linkIdx] = { ...links[linkIdx], rows: (links[linkIdx].rows || []).filter((_, i) => i !== rowIdx) }
    set('links', links)
  }
  const addRow = (linkIdx: number, kind: 'item' | 'divider' | 'button') => {
    const links = [...config.links]
    const rows = [...(links[linkIdx].rows || [])]
    if (kind === 'divider') rows.push({ kind: 'divider' })
    else if (kind === 'button') rows.push({ kind: 'button', label: 'Action', variant: 'filled' })
    else rows.push({ kind: 'item', label: `Item ${rows.length + 1}` })
    links[linkIdx] = { ...links[linkIdx], rows }
    set('links', links)
  }

  // ── Action helpers ────────────────────────────────────────────────
  const updateAction = (idx: number, patch: Partial<NavbarActionEntry>) => {
    const actions = [...config.actions]
    actions[idx] = { ...actions[idx], ...patch }
    set('actions', actions)
  }
  const removeAction = (idx: number) => set('actions', config.actions.filter((_, i) => i !== idx))
  const addAction = () => set('actions', [...config.actions, { iconKey: 'circle', ariaLabel: 'Action', href: '#' }])

  return (
    <div className="navbar-controls">
      <SectionLabel>General</SectionLabel>

      <ControlRow label="colorMode">
        <Segmented options={['light', 'dark']} value={config.colorMode} onChange={(v) => set('colorMode', v as NavbarConfig['colorMode'])} />
      </ControlRow>

      <ControlRow label="logoSrc">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.logoSrc} onChange={(e) => set('logoSrc', e.target.value)} placeholder="/logo.svg" spellCheck={false} />
      </ControlRow>

      <Divider />
      <SectionLabel>Links (center)</SectionLabel>

      <div className="navbar-controls__items">
        {config.links.map((link, idx) => (
          <div key={idx} className="navbar-controls__item-card">
            <div className="navbar-controls__item-header">
              <select
                className="ctrl-input navbar-controls__item-kind"
                value={link.type}
                onChange={(e) => updateLink(idx, { type: e.target.value as NavbarLinkEntry['type'] })}
              >
                <option value="navItem">NavItem</option>
                <option value="dropdown">Dropdown</option>
              </select>
              <button className="navbar-controls__item-remove" onClick={() => removeLink(idx)} type="button" title="Remove">✕</button>
            </div>
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={link.label}
              onChange={(e) => updateLink(idx, { label: e.target.value })}
              placeholder="Label"
              spellCheck={false}
            />
            {link.type === 'dropdown' && (
              <div className="navbar-controls__rows">
                {(link.rows || []).map((row, rIdx) => (
                  <div key={rIdx} className="navbar-controls__row">
                    <select
                      className="ctrl-input navbar-controls__row-kind"
                      value={row.kind}
                      onChange={(e) => updateRow(idx, rIdx, { kind: e.target.value as 'item' | 'divider' | 'button' })}
                    >
                      <option value="item">Item</option>
                      <option value="divider">Divider</option>
                      <option value="button">Button</option>
                    </select>
                    {row.kind !== 'divider' && (
                      <input
                        className="ctrl-input navbar-controls__row-label"
                        type="text"
                        value={(row as { label?: string }).label || ''}
                        onChange={(e) => updateRow(idx, rIdx, { label: e.target.value })}
                        placeholder="Label"
                        spellCheck={false}
                      />
                    )}
                    <button className="navbar-controls__item-remove" onClick={() => removeRow(idx, rIdx)} type="button" title="Remove row">✕</button>
                  </div>
                ))}
                <div className="navbar-controls__row-actions">
                  <button className="navbar-controls__add-btn" onClick={() => addRow(idx, 'item')} type="button">+ Item</button>
                  <button className="navbar-controls__add-btn" onClick={() => addRow(idx, 'divider')} type="button">+ Divider</button>
                  <button className="navbar-controls__add-btn" onClick={() => addRow(idx, 'button')} type="button">+ Button</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="navbar-controls__item-actions">
        <button className="navbar-controls__add-btn" onClick={() => addLink('navItem')} type="button">+ NavItem</button>
        <button className="navbar-controls__add-btn" onClick={() => addLink('dropdown')} type="button">+ Dropdown</button>
        <button className="navbar-controls__reset-btn" onClick={() => set('links', DEFAULT_LINKS)} type="button">Reset</button>
      </div>

      <Divider />
      <SectionLabel>Actions (right)</SectionLabel>

      <div className="navbar-controls__items">
        {config.actions.map((action, idx) => (
          <div key={idx} className="navbar-controls__item-card">
            <div className="navbar-controls__item-header">
              <select
                className="ctrl-input navbar-controls__item-kind"
                value={action.iconKey || ''}
                onChange={(e) => updateAction(idx, { iconKey: e.target.value })}
              >
                <option value="">No icon</option>
                {ICON_KEYS.map(k => <option key={k} value={k}>{k}</option>)}
              </select>
              <button className="navbar-controls__item-remove" onClick={() => removeAction(idx)} type="button" title="Remove">✕</button>
            </div>
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={action.ariaLabel || ''}
              onChange={(e) => updateAction(idx, { ariaLabel: e.target.value })}
              placeholder="ariaLabel"
              spellCheck={false}
            />
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={action.href || ''}
              onChange={(e) => updateAction(idx, { href: e.target.value })}
              placeholder="href"
              spellCheck={false}
            />
          </div>
        ))}
      </div>
      <div className="navbar-controls__item-actions">
        <button className="navbar-controls__add-btn" onClick={() => addAction()} type="button">+ Action</button>
        <button className="navbar-controls__reset-btn" onClick={() => set('actions', DEFAULT_ACTIONS)} type="button">Reset</button>
      </div>

      <Divider />
      <SectionLabel>Color &amp; Font overrides</SectionLabel>

      <ControlRow label="bgColor">
        <ColorRow value={config.bgColor} defaultSwatch="#1a1a2e" onChange={(v) => set('bgColor', v)} onClear={() => set('bgColor', '')} />
      </ControlRow>

      <ControlRow label="textColor">
        <ColorRow value={config.textColor} defaultSwatch="#ffffff" onChange={(v) => set('textColor', v)} onClear={() => set('textColor', '')} />
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
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customClass} onChange={(e) => set('customClass', e.target.value)} placeholder="e.g. my-navbar" spellCheck={false} />
      </ControlRow>

      <ControlRow label="id">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customId} onChange={(e) => set('customId', e.target.value)} placeholder="e.g. main-nav" spellCheck={false} />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea className="ctrl-css-textarea" value={config.customCss} onChange={(e) => set('customCss', e.target.value)} placeholder={`.ds-navbar { ... }`} spellCheck={false} rows={5} />
      </div>
    </div>
  )
}
