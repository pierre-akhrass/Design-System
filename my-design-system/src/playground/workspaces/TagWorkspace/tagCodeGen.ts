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
  // CSS targeting — optional class / id added to the component for selector-based styling
  customClass: string
  customId: string
  // Raw CSS injected as a live <style> block; use customClass / customId to write real selectors
  customCss: string
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
  customClass: '',
  customId: '',
  customCss: '',
}

// ── Star icon snippet (abbreviated path for readability) ───────────────────────

const STAR_ICON_SNIPPET = `const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16"
    fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111..." />
  </svg>
);`

// ── CSS string parser ─────────────────────────────────────────────────────────────

/**
 * Utility for workspace authors: parses a flat CSS declaration block
 * (property:value pairs, no selectors) into a camelCase key/value map
 * for React’s style prop.
 *
 * NOTE: the Custom CSS panel uses live <style> injection (not this parser),
 * so real selectors like :hover work. Use parseCssString only when you want
 * to apply controlled per-property inline-style overrides in your workspace.
 *
 * @example
 * parseCssString('border-radius: 8px; color: red;')
 * // → { borderRadius: '8px', color: 'red' }
 */
export function parseCssString(css: string): Record<string, string> {
  const result: Record<string, string> = {}
  css.split(/[;\n]/).forEach(line => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('/*')) return
    const colonIdx = trimmed.indexOf(':')
    if (colonIdx === -1) return
    const property = trimmed.slice(0, colonIdx).trim()
    const value = trimmed.slice(colonIdx + 1).trim()
    if (!property || !value) return
    // kebab-case → camelCase for React’s style object
    const camelKey = property.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
    result[camelKey] = value
  })
  return result
}

// ── Code generator ─────────────────────────────────────────────────────────────

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
  if (cfg.customClass) props.push(`className="${cfg.customClass}"`)
  if (cfg.customId) props.push(`id="${cfg.customId}"`)

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

  // CSS comment block — guide the developer to inject it in a <style> tag or .css file
  if (cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cfg.customCss.trim().split('\n').forEach(l => lines.push(`// ${l}`))
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
