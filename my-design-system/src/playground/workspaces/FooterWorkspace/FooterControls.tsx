import type { FooterConfig } from './footerCodeGen'
import './FooterControls.scss'

interface FooterControlsProps {
  config: FooterConfig
  onChange: (cfg: FooterConfig) => void
}

// ── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="ctrl-section-label">{children}</span>
)

const Divider = () => <hr className="ctrl-divider" />

interface ControlRowProps {
  label: string
  badge?: 'required'
  children: React.ReactNode
  disabled?: boolean
}
const ControlRow = ({ label, badge, children, disabled }: ControlRowProps) => (
  <div className={`ctrl-row${disabled ? ' ctrl-row--disabled' : ''}`}>
    <span className="ctrl-row__label">
      {label}
      {badge === 'required' && (
        <span className="ctrl-row__badge ctrl-row__badge--req">req</span>
      )}
    </span>
    <div className="ctrl-row__control">{children}</div>
  </div>
)

type SegOpt = string | { value: string; label: string }
const Segmented = ({
  options,
  value,
  onChange,
}: {
  options: SegOpt[]
  value: string
  onChange: (v: string) => void
}) => (
  <div className="ctrl-seg" role="group">
    {options.map((opt) => {
      const v = typeof opt === 'string' ? opt : opt.value
      const l = typeof opt === 'string' ? opt : opt.label
      return (
        <button
          key={v}
          className={`ctrl-seg__btn${v === value ? ' ctrl-seg__btn--active' : ''}`}
          onClick={() => onChange(v)}
          type="button"
        >
          {l}
        </button>
      )
    })}
  </div>
)

const Toggle = ({
  value,
  onChange,
  label,
}: {
  value: boolean
  onChange: (v: boolean) => void
  label?: string
}) => (
  <div className="ctrl-toggle-row">
    <button
      className={`ctrl-toggle${value ? ' ctrl-toggle--on' : ''}`}
      onClick={() => onChange(!value)}
      type="button"
      role="switch"
      aria-checked={value}
      aria-label={label}
    >
      <span className="ctrl-toggle__knob" />
    </button>
    {label && (
      <span className={`ctrl-toggle-row__label${value ? ' ctrl-toggle-row__label--on' : ''}`}>
        {label}
      </span>
    )}
  </div>
)

// Platform toggle row — inline icon + label
const PlatformToggle = ({
  platform,
  value,
  onChange,
}: {
  platform: string
  value: boolean
  onChange: (v: boolean) => void
}) => (
  <div className="ctrl-platform-row">
    <Toggle value={value} onChange={onChange} />
    <span className="ctrl-platform-row__name">{platform}</span>
  </div>
)
// ── ColorRow ──────────────────────────────────────────────────────────────────

const ColorRow = ({ value, defaultSwatch = '#cccccc', onChange, onClear }: { value: string; defaultSwatch?: string; onChange: (v: string) => void; onClear?: () => void }) => (
  <div className="ctrl-color">
    <input className="ctrl-color__swatch" type="color" value={value || defaultSwatch} onChange={(e) => onChange(e.target.value)} title="Pick a color" />
    <input className="ctrl-color__text ctrl-input" type="text" value={value} placeholder="—" onChange={(e) => onChange(e.target.value)} spellCheck={false} />
    {value && onClear && <button className="ctrl-color__clear" onClick={onClear} type="button" aria-label="Clear color">✕</button>}
  </div>
)
// ── FooterControls ────────────────────────────────────────────────────────────

export const FooterControls = ({ config, onChange }: FooterControlsProps) => {
  const set = <K extends keyof FooterConfig>(key: K, value: FooterConfig[K]) =>
    onChange({ ...config, [key]: value })

  return (
    <div className="footer-controls">

      {/* ── Theme ────────────────────────────────────────────────────── */}
      <SectionLabel>Theme</SectionLabel>

      <ControlRow label="theme">
        <Segmented
          options={['light', 'dark']}
          value={config.theme}
          onChange={(v) => set('theme', v as FooterConfig['theme'])}
        />
      </ControlRow>

      {/* ── Section visibility ────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Sections</SectionLabel>

      <ControlRow label="newsletter bar">
        <Toggle
          value={config.showNewsletterBar}
          onChange={(v) => set('showNewsletterBar', v)}
        />
      </ControlRow>

      <ControlRow label="opening hours">
        <Toggle
          value={config.showOpeningHours}
          onChange={(v) => set('showOpeningHours', v)}
        />
      </ControlRow>

      {/* ── Newsletter content ────────────────────────────────────── */}
      {config.showNewsletterBar && (
        <>
          <Divider />
          <SectionLabel>Newsletter bar</SectionLabel>

          <ControlRow label="title">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.newsletterTitle}
              onChange={(e) => set('newsletterTitle', e.target.value)}
              placeholder="e.g. Stay connected…"
              spellCheck={false}
            />
          </ControlRow>

          <ControlRow label="subtitle">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.newsletterSubtitle}
              onChange={(e) => set('newsletterSubtitle', e.target.value)}
              placeholder="Supporting copy"
              spellCheck={false}
            />
          </ControlRow>

          <ControlRow label="placeholder">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.newsletterEmailPlaceholder}
              onChange={(e) => set('newsletterEmailPlaceholder', e.target.value)}
              placeholder="Email address"
              spellCheck={false}
            />
          </ControlRow>

          <ControlRow label="btn label">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.newsletterBtnLabel}
              onChange={(e) => set('newsletterBtnLabel', e.target.value)}
              placeholder="Subscribe"
              spellCheck={false}
            />
          </ControlRow>
        </>
      )}

      {/* ── Opening hours ─────────────────────────────────────────── */}
      {config.showOpeningHours && (
        <>
          <Divider />
          <SectionLabel>Opening hours</SectionLabel>

          <ControlRow label="heading">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.openingHoursTitle}
              onChange={(e) => set('openingHoursTitle', e.target.value)}
              placeholder="Mall Opening Hours"
              spellCheck={false}
            />
          </ControlRow>

          <ControlRow label="groups">
            <Segmented
              options={['1', '2', '3', '4']}
              value={String(config.openingHoursGroupCount)}
              onChange={(v) => set('openingHoursGroupCount', parseInt(v, 10))}
            />
          </ControlRow>
        </>
      )}

      {/* ── Navigation ───────────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Navigation</SectionLabel>

      <ControlRow label="columns">
        <Segmented
          options={['1', '2', '3', '4', '5']}
          value={String(config.navColumnCount)}
          onChange={(v) => set('navColumnCount', parseInt(v, 10))}
        />
      </ControlRow>

      <ControlRow label="links / col">
        <Segmented
          options={['1', '2', '3', '4', '5', '6']}
          value={String(config.navLinksPerColumn)}
          onChange={(v) => set('navLinksPerColumn', parseInt(v, 10))}
        />
      </ControlRow>

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Bottom bar</SectionLabel>

      {/* Logo */}
      <ControlRow label="logo">
        <Segmented
          options={['text', 'none']}
          value={config.logoType}
          onChange={(v) => set('logoType', v as FooterConfig['logoType'])}
        />
      </ControlRow>

      {config.logoType === 'text' && (
        <ControlRow label="logo text">
          <input
            className="ctrl-input ctrl-input--full"
            type="text"
            value={config.logoText}
            onChange={(e) => set('logoText', e.target.value)}
            placeholder="Your Brand"
            spellCheck={false}
          />
        </ControlRow>
      )}

      {/* Copyright */}
      <ControlRow label="copyright">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.copyright}
          onChange={(e) => set('copyright', e.target.value)}
          placeholder="©2026. All Rights Reserved."
          spellCheck={false}
        />
      </ControlRow>

      {/* ── Legal links ──────────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Legal links</SectionLabel>

      <ControlRow label="show links">
        <Toggle
          value={config.showLegalLinks}
          onChange={(v) => set('showLegalLinks', v)}
        />
      </ControlRow>

      {config.showLegalLinks && (
        <>
          <ControlRow label="link 1">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.legalLink1}
              onChange={(e) => set('legalLink1', e.target.value)}
              placeholder="Privacy Policy"
              spellCheck={false}
            />
          </ControlRow>

          <ControlRow label="link 2">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.legalLink2}
              onChange={(e) => set('legalLink2', e.target.value)}
              placeholder="Terms & Conditions"
              spellCheck={false}
            />
          </ControlRow>
        </>
      )}

      {/* ── Social links ─────────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Social links</SectionLabel>

      <div className="ctrl-platforms">
        <PlatformToggle platform="LinkedIn"  value={config.showLinkedIn}  onChange={(v) => set('showLinkedIn', v)} />
        <PlatformToggle platform="Instagram" value={config.showInstagram} onChange={(v) => set('showInstagram', v)} />
        <PlatformToggle platform="YouTube"   value={config.showYoutube}   onChange={(v) => set('showYoutube', v)} />
        <PlatformToggle platform="X"         value={config.showX}         onChange={(v) => set('showX', v)} />
      </div>

      {/* ── Color overrides ──────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Color overrides</SectionLabel>

      <ControlRow label="bgColor">
        <ColorRow
          value={config.bgColor}
          defaultSwatch="#f5f5f5"
          onChange={(v) => set('bgColor', v)}
          onClear={() => set('bgColor', '')}
        />
      </ControlRow>

      <ControlRow label="textColor">
        <ColorRow
          value={config.textColor}
          defaultSwatch="#292929"
          onChange={(v) => set('textColor', v)}
          onClear={() => set('textColor', '')}
        />
      </ControlRow>

      {(config.bgColor || config.textColor) && (
        <button
          className="ctrl-reset-btn"
          onClick={() => onChange({ ...config, bgColor: '', textColor: '' })}
          type="button"
        >
          Reset color overrides
        </button>
      )}

      {/* ── Custom CSS ───────────────────────────────────────────── */}
      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customClass}
          onChange={(e) => set('customClass', e.target.value)}
          placeholder="e.g. site-footer"
          spellCheck={false}
        />
      </ControlRow>

      <ControlRow label="id">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customId}
          onChange={(e) => set('customId', e.target.value)}
          placeholder="e.g. main-footer"
          spellCheck={false}
        />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea
          className="ctrl-css-textarea"
          value={config.customCss}
          onChange={(e) => set('customCss', e.target.value)}
          placeholder={`.site-footer .ds-footer__top { padding-block: 48px; }\n.site-footer .ds-footer__subscribe-btn { background: #6366f1; }`}
          spellCheck={false}
          rows={4}
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
