import type { TypographyConfig } from './typographyOptions'
import {
  FONT_FAMILY_OPTIONS,
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  LETTER_SPACING_OPTIONS,
  TEXT_TRANSFORM_OPTIONS,
  SHADOW_OPTIONS,
  type TokenOption,
} from './typographyOptions'

/**
 * Shared Typography + Effects control block.
 * -----------------------------------------
 * Renders the font family / size / weight / letter-spacing / text-transform /
 * shadow rows used across the Card, Carousel, List, SocialMedia and Dialog
 * workspaces. It relies on the global `.ctrl-*` primitive classes already
 * styled in each *Controls.scss.
 *
 * Usage:
 *   <TypographyControls
 *     config={config}
 *     onChange={(patch) => onChange({ ...config, ...patch })}
 *   />
 */

const ControlRow = ({ label, stack, disabled, children }: { label: string; stack?: boolean; disabled?: boolean; children: React.ReactNode }) => (
  <div className={`ctrl-row${stack ? ' ctrl-row--stack' : ''}${disabled ? ' ctrl-row--disabled' : ''}`}>
    <span className="ctrl-row__label">{label}</span>
    <div className="ctrl-row__control">{children}</div>
  </div>
)

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="ctrl-section-label">{children}</span>
)
const Divider = () => <hr className="ctrl-divider" />

const TokenSegmented = ({ options, value, onChange }: { options: TokenOption[]; value: string; onChange: (v: string) => void }) => (
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

interface TypographyControlsProps {
  config: TypographyConfig
  onChange: (patch: Partial<TypographyConfig>) => void
}

export const TypographyControls = ({ config, onChange }: TypographyControlsProps) => (
  <>
    <Divider />
    <SectionLabel>Typography</SectionLabel>

    <ControlRow label="font family" stack>
      <TokenSegmented options={FONT_FAMILY_OPTIONS} value={config.fontFamily} onChange={(v) => onChange({ fontFamily: v })} />
    </ControlRow>

    <ControlRow label="font size" stack>
      <TokenSegmented options={FONT_SIZE_OPTIONS} value={config.fontSize} onChange={(v) => onChange({ fontSize: v })} />
    </ControlRow>

    <ControlRow label="font weight" stack>
      <TokenSegmented options={FONT_WEIGHT_OPTIONS} value={config.fontWeight} onChange={(v) => onChange({ fontWeight: v })} />
    </ControlRow>

    <ControlRow label="letter spacing" stack>
      <TokenSegmented options={LETTER_SPACING_OPTIONS} value={config.letterSpacing} onChange={(v) => onChange({ letterSpacing: v })} />
    </ControlRow>

    <ControlRow label="text transform" stack>
      <TokenSegmented options={TEXT_TRANSFORM_OPTIONS} value={config.textTransform || 'none'} onChange={(v) => onChange({ textTransform: v })} />
    </ControlRow>

    <Divider />
    <SectionLabel>Effects</SectionLabel>

    <ControlRow label="shadow" stack>
      <TokenSegmented options={SHADOW_OPTIONS} value={config.shadow} onChange={(v) => onChange({ shadow: v })} />
    </ControlRow>
  </>
)
