export type ListItemVariant = 'document' | 'user' | 'numbered' | 'bulleted' | 'card'

export interface ListConfig {
  // Behaviour
  theme: 'light' | 'dark'
  bordered: boolean
  variant: ListItemVariant
  itemCount: number
  showDescription: boolean
  // Color overrides
  textColor: string
  itemHoverBg: string
  // Spacing overrides — '' means "use the design token"
  gap: string          // .ds-list--bordered gap between items
  itemPadding: string  // .ds-list__item padding
  itemRadius: string   // .ds-list--bordered .ds-list__item radius
  // Border overrides (bordered items)
  borderWidth: string
  borderStyle: string
  borderColor: string
  // Typography + effects — '' means "use the design token"
  fontFamily: string
  fontSize: string
  fontWeight: string
  letterSpacing: string
  textTransform: string
  shadow: string
  // CSS targeting
  customClass: string
  customId: string
  customCss: string
}

export const defaultListConfig: ListConfig = {
  theme: 'light',
  bordered: false,
  variant: 'document',
  itemCount: 4,
  showDescription: true,
  textColor: '',
  itemHoverBg: '',
  gap: '',
  itemPadding: '',
  itemRadius: '',
  borderWidth: '',
  borderStyle: '',
  borderColor: '',
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

function typoDecls(cfg: ListConfig): string {
  const p: string[] = []
  if (cfg.fontFamily) p.push(`font-family: ${cfg.fontFamily}`)
  if (cfg.fontSize) p.push(`font-size: ${cfg.fontSize}`)
  if (cfg.fontWeight) p.push(`font-weight: ${cfg.fontWeight}`)
  if (cfg.letterSpacing) p.push(`letter-spacing: ${cfg.letterSpacing}`)
  if (cfg.textTransform && cfg.textTransform !== 'none') p.push(`text-transform: ${cfg.textTransform}`)
  return p.join('; ')
}

export function listCodeGen(cfg: ListConfig): string {
  const listProps: string[] = []

  if (cfg.theme !== 'light') listProps.push(`theme="${cfg.theme}"`)
  if (cfg.bordered) listProps.push(`bordered`)
  if (cfg.customClass) listProps.push(`className="${cfg.customClass}"`)
  if (cfg.customId) listProps.push(`id="${cfg.customId}"`)

  // Overrides that live on internal elements become a CSS snippet
  const cssRules: string[] = []
  if (cfg.textColor) cssRules.push(`.ds-list { color: ${cfg.textColor}; }`)
  if (cfg.itemHoverBg) cssRules.push(`.ds-list__item:hover { background: ${cfg.itemHoverBg}; }`)
  if (cfg.gap) cssRules.push(`.ds-list { gap: ${cfg.gap}; }`)
  if (cfg.itemPadding) cssRules.push(`.ds-list__item { padding: ${cfg.itemPadding}; }`)
  if (cfg.itemRadius) cssRules.push(`.ds-list__item { border-radius: ${cfg.itemRadius}; }`)
  if (cfg.borderWidth) {
    cssRules.push(`.ds-list__item { border: ${cfg.borderWidth} ${cfg.borderStyle || 'solid'} ${cfg.borderColor || '#3fb0bc'}; }`)
  }
  { const t = typoDecls(cfg); if (t) cssRules.push(`.ds-list, .ds-list__label, .ds-list__description { ${t}; }`) }
  if (cfg.shadow) cssRules.push(`.ds-list__item { box-shadow: ${cfg.shadow}; }`)

  const lines: string[] = []
  lines.push(`import { List, ListItem } from '@company/design-system';`)

  if (cssRules.length || cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cssRules.forEach((r) => lines.push(`// ${r}`))
    if (cfg.customCss.trim()) cfg.customCss.trim().split('\n').forEach((l) => lines.push(`// ${l}`))
  }

  lines.push(``)

  const itemProps = (i: number) => {
    const parts = [`variant="${cfg.variant}"`, `label="List item ${i + 1}"`]
    if (cfg.variant === 'numbered') parts.push(`index={${i + 1}}`)
    if (cfg.showDescription) parts.push(`description="Supporting description text"`)
    return parts.join(' ')
  }

  const openTag = listProps.length === 0 ? `<List>` : `<List ${listProps.join(' ')}>`
  lines.push(openTag)
  for (let i = 0; i < cfg.itemCount; i++) {
    lines.push(`  <ListItem ${itemProps(i)} />`)
  }
  lines.push(`</List>`)

  return lines.join('\n')
}
