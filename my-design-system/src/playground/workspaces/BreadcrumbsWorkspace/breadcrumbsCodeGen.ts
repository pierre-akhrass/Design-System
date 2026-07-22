export interface BreadcrumbItemEntry {
  label: string
  href: string
  current?: boolean
  collapsed?: boolean
}

export interface BreadcrumbsConfig {
  items: BreadcrumbItemEntry[]
  showCollapsed: boolean
  currentLabel: string
  // Typography + effects
  fontFamily: string
  fontSize: string
  fontWeight: string
  letterSpacing: string
  textTransform: string
  shadow: string
  customClass: string
  customId: string
  customCss: string
}

export const DEFAULT_ITEMS: BreadcrumbItemEntry[] = [
  { label: 'Home', href: '#home' },
  { label: 'Library', href: '#library' },
  { label: 'Data', href: '#data' },
]

export const defaultBreadcrumbsConfig: BreadcrumbsConfig = {
  items: DEFAULT_ITEMS,
  showCollapsed: false,
  currentLabel: 'Current',
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

export function breadcrumbsCodeGen(cfg: BreadcrumbsConfig): string {
  const lines: string[] = []
  lines.push(`import { Breadcrumbs } from '@company/design-system';`)

  if (cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Custom CSS:`)
    cfg.customCss.trim().split('\n').forEach(l => lines.push(`// ${l}`))
  }

  lines.push(``)

  const builtItems: string[] = []

  if (cfg.showCollapsed && cfg.items.length > 0) {
    builtItems.push(`  { label: '${cfg.items[0].label}', href: '${cfg.items[0].href}' },`)
    builtItems.push(`  { collapsed: true },`)
    cfg.items.slice(1).forEach(item => {
      builtItems.push(`  { label: '${item.label}', href: '${item.href}' },`)
    })
  } else {
    cfg.items.forEach(item => {
      builtItems.push(`  { label: '${item.label}', href: '${item.href}' },`)
    })
  }
  builtItems.push(`  { label: '${cfg.currentLabel}', current: true },`)

  const props: string[] = []
  props.push(`items={[\n${builtItems.join('\n')}\n]}`)
  if (cfg.customClass) props.push(`className="${cfg.customClass}"`)
  if (cfg.customId) props.push(`id="${cfg.customId}"`)

  lines.push(`<Breadcrumbs`)
  props.forEach(p => lines.push(`  ${p}`))
  lines.push(`/>`)

  return lines.join('\n')
}
