import type { AvatarConfig } from './avatarCodeGen'
import './AvatarControls.scss'

interface AvatarControlsProps {
  config: AvatarConfig
  onChange: (cfg: AvatarConfig) => void
}

// ── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="ctrl-section-label">{children}</span>
)

const Divider = () => <hr className="ctrl-divider" />

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
      {badge === 'required' && (
        <span className="ctrl-row__badge ctrl-row__badge--req">req</span>
      )}
    </span>
    <div className="ctrl-row__control">{children}</div>
  </div>
)

// Segmented control: options can be plain strings OR {value, label} for abbreviations
type SegOpt = string | { value: string; label: string }
const Segmented = ({
  options,
  value,
  onChange,
  wrap,
}: {
  options: SegOpt[]
  value: string
  onChange: (v: string) => void
  wrap?: boolean
}) => (
  <div className={`ctrl-seg${wrap ? ' ctrl-seg--wrap' : ''}`} role="group">
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

// Pill toggle
const Toggle = ({
  value,
  onChange,
}: {
  value: boolean
  onChange: (v: boolean) => void
}) => (
  <button
    className={`ctrl-toggle${value ? ' ctrl-toggle--on' : ''}`}
    onClick={() => onChange(!value)}
    type="button"
    role="switch"
    aria-checked={value}
    aria-label="Toggle"
  >
    <span className="ctrl-toggle__knob" />
  </button>
)

// ── Size options (abbreviated labels) ─────────────────────────────────────────

const SIZE_OPTIONS: SegOpt[] = [
  { value: 'xsmall', label: 'xs' },
  { value: 'small',  label: 'sm' },
  { value: 'medium', label: 'md' },
  { value: 'large',  label: 'lg' },
  { value: 'xlarge', label: 'xl' },
]

// ── ColorRow ──────────────────────────────────────────────────────────────────

const ColorRow = ({ value, defaultSwatch = '#cccccc', onChange, onClear }: { value: string; defaultSwatch?: string; onChange: (v: string) => void; onClear?: () => void }) => (
  <div className="ctrl-color">
    <input className="ctrl-color__swatch" type="color" value={value || defaultSwatch} onChange={(e) => onChange(e.target.value)} title="Pick a color" />
    <input className="ctrl-color__text ctrl-input" type="text" value={value} placeholder="—" onChange={(e) => onChange(e.target.value)} spellCheck={false} />
    {value && onClear && <button className="ctrl-color__clear" onClick={onClear} type="button" aria-label="Clear color">✕</button>}
  </div>
)

// ── AvatarControls ────────────────────────────────────────────────────────────

export const AvatarControls = ({ config, onChange }: AvatarControlsProps) => {
  const set = <K extends keyof AvatarConfig>(key: K, value: AvatarConfig[K]) =>
    onChange({ ...config, [key]: value })

  return (
    <div className="avatar-controls">

      {/* ── View mode ───────────────────────────────────────────────── */}
      <SectionLabel>Component</SectionLabel>

      <div className="ctrl-view-tabs">
        {(['avatar', 'group', 'block'] as const).map((v) => {
          const labels = { avatar: 'Avatar', group: 'Group', block: 'Block' }
          return (
            <button
              key={v}
              className={`ctrl-view-tab${config.view === v ? ' ctrl-view-tab--active' : ''}`}
              onClick={() => set('view', v)}
              type="button"
            >
              {labels[v]}
            </button>
          )
        })}
      </div>

      <Divider />

      {/* ── Theme (shared) ──────────────────────────────────────────── */}
      <SectionLabel>Theme</SectionLabel>

      <ControlRow label="theme">
        <Segmented
          options={['auto', 'light', 'dark']}
          value={config.theme}
          onChange={(v) => set('theme', v as AvatarConfig['theme'])}
        />
      </ControlRow>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* ── Avatar section ──────────────────────────────────────── */}
      {/* ──────────────────────────────────────────────────────────── */}
      {config.view === 'avatar' && (
        <>
          <Divider />
          <SectionLabel>Avatar</SectionLabel>

          {/* type */}
          <ControlRow label="type">
            <Segmented
              options={['initial', 'image', 'shape']}
              value={config.type}
              onChange={(v) => set('type', v as AvatarConfig['type'])}
            />
          </ControlRow>

          {/* size */}
          <ControlRow label="size">
            <Segmented
              options={SIZE_OPTIONS}
              value={config.size}
              onChange={(v) => set('size', v as AvatarConfig['size'])}
            />
          </ControlRow>

          {/* initials — only when type='initial' */}
          {config.type === 'initial' && (
            <ControlRow label="initials">
              <input
                className="ctrl-input ctrl-input--char"
                type="text"
                maxLength={2}
                value={config.initials}
                onChange={(e) => set('initials', e.target.value.slice(0, 2) || 'A')}
                spellCheck={false}
              />
            </ControlRow>
          )}

          {/* src + alt — only when type='image' */}
          {config.type === 'image' && (
            <>
              <ControlRow label="src">
                <input
                  className="ctrl-input ctrl-input--full"
                  type="text"
                  value={config.src}
                  onChange={(e) => set('src', e.target.value)}
                  placeholder="https://…"
                  spellCheck={false}
                />
              </ControlRow>
              <ControlRow label="alt">
                <input
                  className="ctrl-input ctrl-input--full"
                  type="text"
                  value={config.alt}
                  onChange={(e) => set('alt', e.target.value)}
                  placeholder="Accessible label"
                  spellCheck={false}
                />
              </ControlRow>
            </>
          )}
        </>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* ── Group section ───────────────────────────────────────── */}
      {/* ──────────────────────────────────────────────────────────── */}
      {config.view === 'group' && (
        <>
          <Divider />
          <SectionLabel>AvatarGroup</SectionLabel>

          {/* spacing */}
          <ControlRow label="spacing">
            <Segmented
              options={['overlap', 'spaced']}
              value={config.groupSpacing}
              onChange={(v) => set('groupSpacing', v as AvatarConfig['groupSpacing'])}
            />
          </ControlRow>

          {/* count — 2..6 */}
          <ControlRow label="count">
            <Segmented
              options={['2', '3', '4', '5', '6']}
              value={String(config.groupCount)}
              onChange={(v) => set('groupCount', parseInt(v, 10))}
            />
          </ControlRow>

          {/* avatar type inside group */}
          <ControlRow label="type">
            <Segmented
              options={['initial', 'image', 'shape']}
              value={config.groupType}
              onChange={(v) => set('groupType', v as AvatarConfig['groupType'])}
            />
          </ControlRow>

          {/* avatar size inside group */}
          <ControlRow label="size">
            <Segmented
              options={SIZE_OPTIONS}
              value={config.groupSize}
              onChange={(v) => set('groupSize', v as AvatarConfig['groupSize'])}
            />
          </ControlRow>

          <Divider />
          <SectionLabel>Overflow badge</SectionLabel>

          {/* showOverflow toggle */}
          <ControlRow label="showOverflow">
            <Toggle
              value={config.showOverflow}
              onChange={(v) => set('showOverflow', v)}
            />
          </ControlRow>

          {/* overflowCount — only when showOverflow */}
          {config.showOverflow && (
            <ControlRow label="overflowCount">
              <input
                className="ctrl-input ctrl-input--num"
                type="number"
                min={1}
                max={999}
                value={config.overflowCount}
                onChange={(e) =>
                  set('overflowCount', Math.max(1, parseInt(e.target.value || '1', 10)))
                }
              />
            </ControlRow>
          )}
        </>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* ── Block section ───────────────────────────────────────── */}
      {/* ──────────────────────────────────────────────────────────── */}
      {config.view === 'block' && (
        <>
          <Divider />
          <SectionLabel>AvatarBlock</SectionLabel>

          {/* title */}
          <ControlRow label="title" badge="required">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.blockTitle}
              onChange={(e) => set('blockTitle', e.target.value)}
              placeholder="e.g. Jane Doe"
              spellCheck={false}
            />
          </ControlRow>

          {/* description */}
          <ControlRow label="description">
            <input
              className="ctrl-input ctrl-input--full"
              type="text"
              value={config.blockDescription}
              onChange={(e) => set('blockDescription', e.target.value)}
              placeholder="Optional subtitle"
              spellCheck={false}
            />
          </ControlRow>

          <Divider />
          <SectionLabel>Avatar inside block</SectionLabel>

          {/* blockAvatarType */}
          <ControlRow label="type">
            <Segmented
              options={['initial', 'image', 'shape']}
              value={config.blockAvatarType}
              onChange={(v) => set('blockAvatarType', v as AvatarConfig['blockAvatarType'])}
            />
          </ControlRow>

          {/* blockAvatarSize */}
          <ControlRow label="size">
            <Segmented
              options={SIZE_OPTIONS}
              value={config.blockAvatarSize}
              onChange={(v) => set('blockAvatarSize', v as AvatarConfig['blockAvatarSize'])}
            />
          </ControlRow>

          {/* blockInitials — when type='initial' */}
          {config.blockAvatarType === 'initial' && (
            <ControlRow label="initials">
              <input
                className="ctrl-input ctrl-input--char"
                type="text"
                maxLength={2}
                value={config.blockInitials}
                onChange={(e) => set('blockInitials', e.target.value.slice(0, 2) || 'A')}
                spellCheck={false}
              />
            </ControlRow>
          )}

          {/* blockSrc + auto-used alt — when type='image' */}
          {config.blockAvatarType === 'image' && (
            <ControlRow label="src">
              <input
                className="ctrl-input ctrl-input--full"
                type="text"
                value={config.blockSrc}
                onChange={(e) => set('blockSrc', e.target.value)}
                placeholder="https://…"
                spellCheck={false}
              />
            </ControlRow>
          )}
        </>
      )}

      {/* ── Color overrides ──────────────────────────────────── */}
      <Divider />
      <SectionLabel>Color overrides</SectionLabel>

      <ControlRow label="bgColor">
        <ColorRow
          value={config.bgColor}
          defaultSwatch="#d0e8f0"
          onChange={(v) => set('bgColor', v)}
          onClear={() => set('bgColor', '')}
        />
      </ControlRow>

      <ControlRow label="textColor">
        <ColorRow
          value={config.textColor}
          defaultSwatch="#1e6a8a"
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

      {/* ── Custom CSS (always visible) ─────────────────────────── */}
      <Divider />
      <SectionLabel>Custom CSS</SectionLabel>

      <ControlRow label="className">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customClass}
          onChange={(e) => set('customClass', e.target.value)}
          placeholder="e.g. my-avatar"
          spellCheck={false}
        />
      </ControlRow>

      <ControlRow label="id">
        <input
          className="ctrl-input ctrl-input--full"
          type="text"
          value={config.customId}
          onChange={(e) => set('customId', e.target.value)}
          placeholder="e.g. hero-avatar"
          spellCheck={false}
        />
      </ControlRow>

      <div className="ctrl-css-wrap">
        <textarea
          className="ctrl-css-textarea"
          value={config.customCss}
          onChange={(e) => set('customCss', e.target.value)}
          placeholder={`.my-avatar { box-shadow: 0 0 0 3px #6366f1; }\n.my-avatar.ds-avatar--medium { width: 56px; height: 56px; }`}
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
