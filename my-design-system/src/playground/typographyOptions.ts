import { TOKENS } from './designTokens'

/**
 * Shared "advanced styling" options + helpers for the playground workspaces.
 * ------------------------------------------------------------------------
 * These power the new Typography / Effects controls (font family, size, weight,
 * letter-spacing, text-transform, shadow) that several components expose. Keeping
 * them here avoids duplicating the option lists across every *Controls.tsx and
 * keeps the generated CSS identical between the live preview, code block and the
 * published override.
 */

export interface TokenOption {
  value: string
  label: string
  sub?: string
}

// ── Option lists ──────────────────────────────────────────────────────────────

export const FONT_FAMILY_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: 'default' },
  { value: TOKENS.fontFamily.ui, label: 'sans', sub: 'Noto' },
  { value: TOKENS.fontFamily.heading, label: 'display', sub: 'Nunito' },
  { value: TOKENS.fontFamily.serif, label: 'serif', sub: 'Georgia' },
  { value: TOKENS.fontFamily.mono, label: 'mono', sub: 'JetBrains' },
  { value: TOKENS.fontFamily.system, label: 'system', sub: 'UI' },
]

const nn = (v: string) => v.replace('px', '')

export const FONT_SIZE_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.fontSize.xs, label: 'xs', sub: nn(TOKENS.fontSize.xs) },
  { value: TOKENS.fontSize.sm, label: 'sm', sub: nn(TOKENS.fontSize.sm) },
  { value: TOKENS.fontSize.md, label: 'md', sub: nn(TOKENS.fontSize.md) },
  { value: TOKENS.fontSize.lg, label: 'lg', sub: nn(TOKENS.fontSize.lg) },
  { value: TOKENS.fontSize.xl, label: 'xl', sub: nn(TOKENS.fontSize.xl) },
]

export const FONT_WEIGHT_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.fontWeight.regular, label: 'regular', sub: '400' },
  { value: TOKENS.fontWeight.medium, label: 'medium', sub: '500' },
  { value: TOKENS.fontWeight.semibold, label: 'semi', sub: '600' },
  { value: TOKENS.fontWeight.bold, label: 'bold', sub: '700' },
]

export const LETTER_SPACING_OPTIONS: TokenOption[] = [
  { value: '', label: 'token', sub: '—' },
  { value: TOKENS.letterSpacing.tight, label: 'tight', sub: '-.02' },
  { value: TOKENS.letterSpacing.normal, label: 'normal', sub: '0' },
  { value: TOKENS.letterSpacing.wide, label: 'wide', sub: '.04' },
  { value: TOKENS.letterSpacing.wider, label: 'wider', sub: '.08' },
]

export const TEXT_TRANSFORM_OPTIONS: TokenOption[] = [
  { value: 'none', label: 'none', sub: 'Aa' },
  { value: 'uppercase', label: 'upper', sub: 'AA' },
  { value: 'capitalize', label: 'title', sub: 'Aa' },
  { value: 'lowercase', label: 'lower', sub: 'aa' },
]

export const SHADOW_OPTIONS: TokenOption[] = [
  { value: '', label: 'none', sub: '—' },
  { value: TOKENS.shadow.sm, label: 'sm', sub: 'soft' },
  { value: TOKENS.shadow.md, label: 'md', sub: 'card' },
  { value: TOKENS.shadow.lg, label: 'lg', sub: 'float' },
  { value: TOKENS.shadow.xl, label: 'xl', sub: 'modal' },
]

// ── Config slice + defaults ───────────────────────────────────────────────────

export interface TypographyConfig {
  fontFamily: string
  fontSize: string
  fontWeight: string
  letterSpacing: string
  textTransform: string
  shadow: string
}

export const defaultTypographyConfig: TypographyConfig = {
  fontFamily: '',
  fontSize: '',
  fontWeight: '',
  letterSpacing: '',
  textTransform: 'none',
  shadow: '',
}

// ── CSS rule generator (shared by preview / codegen / publish) ─────────────────

interface TypographyRuleOptions {
  /** Selector the box-shadow applies to (defaults to the text selector). */
  shadowSel?: string
  /** Append !important (used by the live preview to beat component styles). */
  important?: boolean
}

/**
 * Build the CSS rule strings for the typography + shadow overrides.
 * `sel` is the selector the font/text declarations target.
 */
export function typographyRules(
  sel: string,
  cfg: Partial<TypographyConfig>,
  opts: TypographyRuleOptions = {},
): string[] {
  const bang = opts.important ? ' !important' : ''
  const decls: string[] = []
  if (cfg.fontFamily) decls.push(`font-family: ${cfg.fontFamily}${bang}`)
  if (cfg.fontSize) decls.push(`font-size: ${cfg.fontSize}${bang}`)
  if (cfg.fontWeight) decls.push(`font-weight: ${cfg.fontWeight}${bang}`)
  if (cfg.letterSpacing) decls.push(`letter-spacing: ${cfg.letterSpacing}${bang}`)
  if (cfg.textTransform && cfg.textTransform !== 'none') {
    decls.push(`text-transform: ${cfg.textTransform}${bang}`)
  }

  const rules: string[] = []
  if (decls.length) rules.push(`${sel} { ${decls.join('; ')}; }`)
  if (cfg.shadow) rules.push(`${opts.shadowSel ?? sel} { box-shadow: ${cfg.shadow}${bang}; }`)
  return rules
}
