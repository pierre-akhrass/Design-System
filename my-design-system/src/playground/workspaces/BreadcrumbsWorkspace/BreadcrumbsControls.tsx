import type { BreadcrumbsConfig, BreadcrumbItemEntry } from './breadcrumbsCodeGen'
import { DEFAULT_ITEMS } from './breadcrumbsCodeGen'
import './BreadcrumbsControls.scss'
import { TypographyControls } from '../../TypographyControls'

interface BreadcrumbsControlsProps {
  config: BreadcrumbsConfig
  onChange: (cfg: BreadcrumbsConfig) => void
}

const ControlRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="ctrl-row">
    <span className="ctrl-row__label">{label}</span>
    <div className="ctrl-row__control">{children}</div>
  </div>
)

interface ToggleProps { value: boolean; onChange: (v: boolean) => void; label?: string }
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

export const BreadcrumbsControls = ({ config, onChange }: BreadcrumbsControlsProps) => {
  const set = <K extends keyof BreadcrumbsConfig>(key: K, value: BreadcrumbsConfig[K]) =>
    onChange({ ...config, [key]: value })

  const updateItem = (idx: number, patch: Partial<BreadcrumbItemEntry>) => {
    const items = [...config.items]
    items[idx] = { ...items[idx], ...patch }
    set('items', items)
  }
  const removeItem = (idx: number) => set('items', config.items.filter((_, i) => i !== idx))
  const addItem = () => set('items', [...config.items, { label: `Page ${config.items.length + 1}`, href: '#' }])
  const resetItems = () => set('items', DEFAULT_ITEMS)

  return (
    <div className="breadcrumbs-controls">
      <SectionLabel>Content</SectionLabel>

      <ControlRow label="currentLabel">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.currentLabel} onChange={(e) => set('currentLabel', e.target.value)} placeholder="Current page" spellCheck={false} />
      </ControlRow>

      <ControlRow label="showCollapsed">
        <Toggle value={config.showCollapsed} onChange={(v) => set('showCollapsed', v)} label="Show collapsed indicator" />
      </ControlRow>

      <Divider />
      <SectionLabel>Ancestor items</SectionLabel>

      <div className="breadcrumbs-controls__items">
        {config.items.map((item, idx) => (
          <div key={idx} className="breadcrumbs-controls__item-card">
            <div className="breadcrumbs-controls__item-header">
              <input
                className="ctrl-input breadcrumbs-controls__item-label"
                type="text"
                value={item.label}
                onChange={(e) => updateItem(idx, { label: e.target.value })}
                placeholder="Label"
                spellCheck={false}
              />
              <button className="breadcrumbs-controls__item-remove" onClick={() => removeItem(idx)} type="button" title="Remove">✕</button>
            </div>
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={item.href}
              onChange={(e) => updateItem(idx, { href: e.target.value })}
              placeholder="href"
              spellCheck={false}
            />
          </div>
        ))}
      </div>
      <div className="breadcrumbs-controls__item-actions">
        <button className="breadcrumbs-controls__add-btn" onClick={addItem} type="button">+ Ancestor</button>
        <button className="breadcrumbs-controls__reset-btn" onClick={resetItems} type="button">Reset</button>
      </div>

      <TypographyControls config={config} onChange={(patch) => onChange({ ...config, ...patch })} />

      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customClass} onChange={(e) => set('customClass', e.target.value)} placeholder="e.g. my-breadcrumbs" spellCheck={false} />
      </ControlRow>

      <ControlRow label="id">
        <input className="ctrl-input ctrl-input--full" type="text" value={config.customId} onChange={(e) => set('customId', e.target.value)} placeholder="e.g. main-breadcrumbs" spellCheck={false} />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea className="ctrl-css-textarea" value={config.customCss} onChange={(e) => set('customCss', e.target.value)} placeholder={`.ds-breadcrumbs { ... }`} spellCheck={false} rows={5} />
      </div>
    </div>
  )
}
