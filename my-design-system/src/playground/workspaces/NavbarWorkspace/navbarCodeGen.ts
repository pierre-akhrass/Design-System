import type { NavbarMenuRow } from '../../../components/Navbar'

export interface NavbarLinkEntry {
  type: 'navItem' | 'dropdown'
  label: string
  selected?: boolean
  rows?: NavbarMenuRow[]
}

export interface NavbarActionEntry {
  label?: string
  href?: string
  iconKey?: string
  ariaLabel?: string
  selected?: boolean
}

export interface NavbarConfig {
  colorMode: 'light' | 'dark'
  logoSrc: string
  links: NavbarLinkEntry[]
  actions: NavbarActionEntry[]
  bgColor: string
  textColor: string
  fontFamily: string
  borderRadius: string
  paddingX: string
  paddingY: string
  borderWidth: string
  borderStyle: string
  borderColor: string
  customClass: string
  customId: string
  customCss: string
}

export const DEFAULT_LINKS: NavbarLinkEntry[] = [
  {
    type: 'dropdown',
    label: 'Products',
    rows: [
      { kind: 'item', label: 'Overview' },
      { kind: 'item', label: 'Features' },
      { kind: 'item', label: 'Integrations' },
      { kind: 'divider' },
      { kind: 'item', label: 'Changelog' },
      { kind: 'button', label: 'Get a demo', variant: 'filled' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Solutions',
    rows: [
      { kind: 'item', label: 'For Teams' },
      { kind: 'item', label: 'For Enterprise' },
      { kind: 'item', label: 'For Startups' },
      { kind: 'divider' },
      { kind: 'button', label: 'Compare plans', variant: 'outlined' },
    ],
  },
  { type: 'navItem', label: 'Community', selected: true },
  { type: 'navItem', label: 'Resources' },
  { type: 'navItem', label: 'Pricing' },
  { type: 'navItem', label: 'Contact' },
]

export const DEFAULT_ACTIONS: NavbarActionEntry[] = [
  { href: '#reports', iconKey: 'flag', ariaLabel: 'Reports' },
  { href: '#notifications', iconKey: 'bell', ariaLabel: 'Notifications' },
  { href: '#search', iconKey: 'search', ariaLabel: 'Search' },
]

export const defaultNavbarConfig: NavbarConfig = {
  colorMode: 'dark',
  logoSrc: '/favicon.svg',
  links: DEFAULT_LINKS,
  actions: DEFAULT_ACTIONS,
  bgColor: '',
  textColor: '',
  fontFamily: '',
  borderRadius: '',
  paddingX: '',
  paddingY: '',
  borderWidth: '',
  borderStyle: '',
  borderColor: '',
  customClass: '',
  customId: '',
  customCss: '',
}

export function navbarCodeGen(cfg: NavbarConfig): string {
  const lines: string[] = []
  lines.push(`import { Navbar, NavbarMenu } from '@company/design-system';`)
  lines.push(`import { NavItem } from '@company/design-system';`)

  if (cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Custom CSS:`)
    cfg.customCss.trim().split('\n').forEach(l => lines.push(`// ${l}`))
  }

  lines.push(``)

  const navProps: string[] = []
  if (cfg.colorMode !== 'dark') navProps.push(`colorMode="${cfg.colorMode}"`)
  if (cfg.logoSrc) navProps.push(`logo="${cfg.logoSrc}"`)
  if (cfg.customClass) navProps.push(`className="${cfg.customClass}"`)
  if (cfg.customId) navProps.push(`id="${cfg.customId}"`)

  const styleEntries: string[] = []
  if (cfg.bgColor) styleEntries.push(`background: "${cfg.bgColor}"`)
  if (cfg.textColor) styleEntries.push(`color: "${cfg.textColor}"`)
  if (cfg.fontFamily) styleEntries.push(`fontFamily: "${cfg.fontFamily}"`)
  if (cfg.borderRadius) styleEntries.push(`borderRadius: "${cfg.borderRadius}"`)
  if (cfg.paddingX) styleEntries.push(`paddingInline: "${cfg.paddingX}"`)
  if (cfg.paddingY) styleEntries.push(`paddingBlock: "${cfg.paddingY}"`)
  if (cfg.borderWidth) {
    styleEntries.push(`borderWidth: "${cfg.borderWidth}"`)
    styleEntries.push(`borderStyle: "${cfg.borderStyle || 'solid'}"`)
    if (cfg.borderColor) styleEntries.push(`borderColor: "${cfg.borderColor}"`)
  }
  if (styleEntries.length > 0) {
    navProps.push(`style={{ ${styleEntries.join(', ')} }}`)
  }

  // Actions
  if (cfg.actions.length > 0) {
    const actionsStr = cfg.actions.map(a => {
      const parts: string[] = []
      if (a.href) parts.push(`href: "${a.href}"`)
      if (a.iconKey) parts.push(`iconLeft: <${a.iconKey.charAt(0).toUpperCase() + a.iconKey.slice(1)}Icon />`)
      if (a.ariaLabel) parts.push(`ariaLabel: "${a.ariaLabel}"`)
      if (a.label) parts.push(`label: "${a.label}"`)
      return `{ ${parts.join(', ')} }`
    }).join(',\n    ')
    navProps.push(`actions={[\n    ${actionsStr},\n  ]}`)
  }

  const propStr = navProps.length > 0 ? `\n  ${navProps.join('\n  ')}\n` : ''
  lines.push(`<Navbar${propStr}>`)

  for (const link of cfg.links) {
    if (link.type === 'dropdown') {
      lines.push(`  <NavbarMenu label="${link.label}" rows={[...]} />`)
    } else {
      const sel = link.selected ? ' selected' : ''
      lines.push(`  <NavItem orientation="horizontal" label="${link.label}"${sel} />`)
    }
  }

  lines.push(`</Navbar>`)
  return lines.join('\n')
}
