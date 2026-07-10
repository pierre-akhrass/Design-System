export interface MegaMenuLinkEntry {
  label: string
  href?: string
  selected?: boolean
}

export interface MegaMenuColumnEntry {
  title?: string
  links: MegaMenuLinkEntry[]
}

export interface MegaMenuCardEntry {
  image?: string
  imageAlt?: string
  title?: string
  subtitle?: string
  body?: string
  buttonLabel?: string
  buttonHref?: string
}

export interface MegaMenuConfig {
  colorMode: 'light' | 'dark'
  title: string
  columns: MegaMenuColumnEntry[]
  card: MegaMenuCardEntry
  // Style overrides
  bgColor: string
  textColor: string
  fontFamily: string
  borderRadius: string
  paddingX: string
  paddingY: string
  gap: string
  borderWidth: string
  borderStyle: string
  borderColor: string
  // Custom
  customClass: string
  customId: string
  customCss: string
}

export const DEFAULT_COLUMNS: MegaMenuColumnEntry[] = [
  {
    title: 'POPULAR',
    links: [
      { label: 'Overview', href: '#overview' },
      { label: 'Features', href: '#features' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Changelog', href: '#changelog' },
    ],
  },
  {
    title: 'BY ROLE',
    links: [
      { label: 'For Designers', href: '#designers' },
      { label: 'For Developers', href: '#developers' },
      { label: 'For Teams', href: '#teams' },
      { label: 'For Enterprise', href: '#enterprise', selected: true },
    ],
  },
  {
    title: 'BY INDUSTRY',
    links: [
      { label: 'Retail', href: '#retail' },
      { label: 'Automotive', href: '#automotive' },
      { label: 'Real Estate', href: '#real-estate' },
      { label: 'Healthcare', href: '#healthcare' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Docs', href: '#docs' },
      { label: 'API Reference', href: '#api' },
      { label: 'Community', href: '#community' },
      { label: 'Support', href: '#support' },
    ],
  },
]

export const DEFAULT_CARD: MegaMenuCardEntry = {
  image: '',
  imageAlt: 'Promotional image',
  title: 'New release',
  subtitle: 'v2.0 is here',
  body: 'Faster, lighter, and ready for production with refreshed components, improved accessibility, and brand-new theming for every supported viewport.',
  buttonLabel: 'Read more',
  buttonHref: '#changelog',
}

export const defaultMegaMenuConfig: MegaMenuConfig = {
  colorMode: 'light',
  title: 'Our Products',
  columns: DEFAULT_COLUMNS,
  card: DEFAULT_CARD,
  bgColor: '',
  textColor: '',
  fontFamily: '',
  borderRadius: '',
  paddingX: '',
  paddingY: '',
  gap: '',
  borderWidth: '',
  borderStyle: 'solid',
  borderColor: '',
  customClass: '',
  customId: '',
  customCss: '',
}

export function megaMenuCodeGen(cfg: MegaMenuConfig): string {
  const lines: string[] = []
  lines.push(`import { MegaMenu } from '@company/design-system';`)

  if (cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Custom CSS:`)
    cfg.customCss.trim().split('\n').forEach(l => lines.push(`// ${l}`))
  }

  lines.push(``)

  const props: string[] = []
  if (cfg.colorMode !== 'light') props.push(`colorMode="${cfg.colorMode}"`)
  if (cfg.title) props.push(`title="${cfg.title}"`)
  if (cfg.customClass) props.push(`className="${cfg.customClass}"`)
  if (cfg.customId) props.push(`id="${cfg.customId}"`)

  // columns
  const colStr = cfg.columns.map(col => {
    const linksStr = col.links.map(l => {
      const parts = [`label: '${l.label}'`]
      if (l.href) parts.push(`href: '${l.href}'`)
      if (l.selected) parts.push(`selected: true`)
      return `{ ${parts.join(', ')} }`
    }).join(', ')
    return `{ title: '${col.title || ''}', links: [${linksStr}] }`
  }).join(',\n    ')
  props.push(`columns={[\n    ${colStr},\n  ]}`)

  // card
  const hasCard = cfg.card.title || cfg.card.subtitle || cfg.card.body || cfg.card.buttonLabel
  if (hasCard) {
    const cardParts: string[] = []
    if (cfg.card.image) cardParts.push(`image: '${cfg.card.image}'`)
    if (cfg.card.title) cardParts.push(`title: '${cfg.card.title}'`)
    if (cfg.card.subtitle) cardParts.push(`subtitle: '${cfg.card.subtitle}'`)
    if (cfg.card.body) cardParts.push(`body: '${cfg.card.body}'`)
    if (cfg.card.buttonLabel) {
      const btnParts = [`label: '${cfg.card.buttonLabel}'`]
      if (cfg.card.buttonHref) btnParts.push(`href: '${cfg.card.buttonHref}'`)
      cardParts.push(`button: { ${btnParts.join(', ')} }`)
    }
    props.push(`card={{ ${cardParts.join(', ')} }}`)
  }

  lines.push(`<MegaMenu`)
  props.forEach(p => lines.push(`  ${p}`))
  lines.push(`/>`)

  return lines.join('\n')
}
