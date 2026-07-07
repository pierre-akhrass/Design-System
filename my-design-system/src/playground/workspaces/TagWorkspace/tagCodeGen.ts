export interface TagConfig {
  label: string
  state: 'default' | 'hover'
  theme: 'auto' | 'light' | 'dark'
  showIconStart: boolean
  showIconEnd: boolean
  bgColor: string
  textColor: string
  // Spacing overrides — '' means "use the design token" (no inline override applied)
  borderRadius: string
  paddingX: string
  paddingY: string
  gap: string
  // Border overrides — '' on borderWidth means no border
  borderWidth: string
  borderStyle: string
  borderColor: string
}

export const defaultTagConfig: TagConfig = {
  label: 'Label',
  state: 'default',
  theme: 'auto',
  showIconStart: false,
  showIconEnd: false,
  bgColor: '',
  textColor: '',
  borderRadius: '',
  paddingX: '',
  paddingY: '',
  gap: '',
  borderWidth: '',
  borderStyle: '',
  borderColor: '',
}

// ── Star icon snippet (abbreviated path for readability) ───────────────────────

const STAR_ICON_SNIPPET = `const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16"
    fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111..." />
  </svg>
);`

// ── Code generator ────────────────────────────────────────────────────────────

export function tagCodeGen(cfg: TagConfig): string {
  const props: string[] = []

  // label is always required
  props.push(`label="${cfg.label}"`)

  // Only add non-default values
  if (cfg.state !== 'default') props.push(`state="${cfg.state}"`)
  if (cfg.theme !== 'auto') props.push(`theme="${cfg.theme}"`)
  if (cfg.showIconStart) props.push(`iconStart={<StarIcon />}`)
  if (cfg.showIconEnd) props.push(`iconEnd={<StarIcon />}`)
  if (cfg.bgColor) props.push(`bgColor="${cfg.bgColor}"`)
  if (cfg.textColor) props.push(`textColor="${cfg.textColor}"`)

  // Build inline style object from spacing + border overrides (only non-empty values)
  const styleEntries: string[] = []
  if (cfg.borderRadius) styleEntries.push(`borderRadius: "${cfg.borderRadius}"`)
  if (cfg.paddingX)     styleEntries.push(`paddingInline: "${cfg.paddingX}"`)
  if (cfg.paddingY)     styleEntries.push(`paddingBlock: "${cfg.paddingY}"`)
  if (cfg.gap)          styleEntries.push(`gap: "${cfg.gap}"`)
  if (cfg.borderWidth) {
    styleEntries.push(`borderWidth: "${cfg.borderWidth}"`)
    styleEntries.push(`borderStyle: "${cfg.borderStyle || 'solid'}"`)
    if (cfg.borderColor) styleEntries.push(`borderColor: "${cfg.borderColor}"`)
  }
  if (styleEntries.length > 0) {
    props.push(`style={{ ${styleEntries.join(', ')} }}`)
  }

  const needsIcon = cfg.showIconStart || cfg.showIconEnd
  const lines: string[] = []

  // Import line
  lines.push(`import { Tag } from '@company/design-system';`)

  // StarIcon definition if icon slots are used
  if (needsIcon) {
    lines.push(``)
    lines.push(STAR_ICON_SNIPPET)
  }

  lines.push(``)

  // JSX — inline if ≤2 props, multi-line if more
  if (props.length <= 2) {
    lines.push(`<Tag ${props.join(' ')} />`)
  } else {
    lines.push(`<Tag`)
    props.forEach((p) => lines.push(`  ${p}`))
    lines.push(`/>`)
  }

  return lines.join('\n')
}
