export interface TooltipConfig {
  title: string
  body: string
  placement: 'top' | 'bottom' | 'left' | 'right'
  theme: 'auto' | 'light' | 'dark'
  bgColor: string
  borderColor: string
  textColor: string
  // Spacing overrides — '' means "use the design token" (no inline override applied)
  borderRadius: string
  padding: string
  gap: string
  width: string
  // CSS targeting — optional class / id added to the component for selector-based styling
  // Typography + effects
  fontFamily: string
  fontSize: string
  fontWeight: string
  letterSpacing: string
  textTransform: string
  shadow: string
  customClass: string
  customId: string
  // Raw CSS injected as a live <style> block; use customClass / customId to write real selectors
  customCss: string
}

export const defaultTooltipConfig: TooltipConfig = {
  title: 'Tooltip title',
  body: 'Supporting body text',
  placement: 'top',
  theme: 'auto',
  bgColor: '',
  borderColor: '',
  textColor: '',
  borderRadius: '',
  padding: '',
  gap: '',
  width: '',
  fontFamily: '',
  fontSize: '',
  fontWeight: '',
  letterSpacing: '',
  textTransform: 'none',
  shadow: '',
  customClass: '',
  customId: '',
  customCss: '',
}

// ── Code generator ─────────────────────────────────────────────────────────────

export function tooltipCodeGen(cfg: TooltipConfig): string {
  const props: string[] = []

  // title is always required
  props.push(`title="${cfg.title}"`)

  if (cfg.body)                props.push(`body="${cfg.body}"`)
  if (cfg.placement !== 'top') props.push(`placement="${cfg.placement}"`)
  if (cfg.theme !== 'auto')    props.push(`theme="${cfg.theme}"`)
  if (cfg.bgColor)             props.push(`bgColor="${cfg.bgColor}"`)
  if (cfg.borderColor)         props.push(`borderColor="${cfg.borderColor}"`)
  if (cfg.textColor)           props.push(`textColor="${cfg.textColor}"`)
  if (cfg.customClass)         props.push(`className="${cfg.customClass}"`)
  if (cfg.customId)            props.push(`id="${cfg.customId}"`)

  // Build inline style from spacing overrides (only non-empty values)
  const styleEntries: string[] = []
  if (cfg.borderRadius) styleEntries.push(`borderRadius: "${cfg.borderRadius}"`)
  if (cfg.padding)      styleEntries.push(`padding: "${cfg.padding}"`)
  if (cfg.gap)          styleEntries.push(`gap: "${cfg.gap}"`)
  if (cfg.width)        styleEntries.push(`width: "${cfg.width}"`)

  if (styleEntries.length > 0) {
    props.push(`style={{ ${styleEntries.join(', ')} }}`)
  }

  const lines: string[] = []

  lines.push(`import { Tooltip } from '@company/design-system';`)

  // CSS comment block — guide the developer to inject it in a <style> tag or .css file
  if (cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cfg.customCss.trim().split('\n').forEach(l => lines.push(`// ${l}`))
  }

  lines.push(``)

  // JSX — inline if ≤2 props, multi-line if more
  if (props.length <= 2) {
    lines.push(`<Tooltip ${props.join(' ')} />`)
  } else {
    lines.push(`<Tooltip`)
    props.forEach((p) => lines.push(`  ${p}`))
    lines.push(`/>`)
  }

  return lines.join('\n')
}
