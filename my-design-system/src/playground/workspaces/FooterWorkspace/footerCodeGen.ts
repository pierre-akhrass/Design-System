// ── Types ─────────────────────────────────────────────────────────────────────

export interface FooterConfig {
  // ── Theme ───────────────────────────────────────────────────────────────
  theme: 'light' | 'dark'

  // ── Section visibility ──────────────────────────────────────────────────
  showNewsletterBar: boolean
  showOpeningHours: boolean

  // ── Newsletter bar ──────────────────────────────────────────────────────
  newsletterTitle: string
  newsletterSubtitle: string
  newsletterEmailPlaceholder: string
  newsletterBtnLabel: string

  // ── Opening hours ───────────────────────────────────────────────────────
  openingHoursTitle: string
  /** Number of timing groups displayed — 1 to 4 */
  openingHoursGroupCount: number

  // ── Navigation columns ──────────────────────────────────────────────────
  /** How many nav columns to render — 1 to 5 */
  navColumnCount: number
  /** How many links inside each column — 1 to 6 */
  navLinksPerColumn: number

  // ── Bottom bar ──────────────────────────────────────────────────────────
  /** 'text' = render a plain brand name node; 'none' = no logo */
  logoType: 'text' | 'none'
  logoText: string
  copyright: string

  // Legal links
  showLegalLinks: boolean
  legalLink1: string
  legalLink2: string

  // Social platforms
  showLinkedIn: boolean
  showInstagram: boolean
  showYoutube: boolean
  showX: boolean

  // ── Colour overrides ('' = use design token default) ──────────────────
  bgColor:   string     // --ds-footer-bg   (main footer background)
  textColor: string     // --ds-footer-text (primary text colour)

  // ── Custom CSS ──────────────────────────────────────────────────────────
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

export const defaultFooterConfig: FooterConfig = {
  theme: 'light',

  showNewsletterBar: true,
  showOpeningHours: true,

  newsletterTitle: 'Stay connected, stay informed!',
  newsletterSubtitle: 'Be the first to learn about the latest updates.',
  newsletterEmailPlaceholder: 'Email address',
  newsletterBtnLabel: 'Subscribe',

  openingHoursTitle: 'Mall Opening Hours',
  openingHoursGroupCount: 4,

  navColumnCount: 5,
  navLinksPerColumn: 4,

  logoType: 'text',
  logoText: 'Your Brand',
  copyright: '©2026. All Rights Reserved.',

  showLegalLinks: true,
  legalLink1: 'Privacy Policy',
  legalLink2: 'Terms & Conditions',

  showLinkedIn: true,
  showInstagram: true,
  showYoutube: true,
  showX: true,

  fontFamily: '',
  fontSize: '',
  fontWeight: '',
  letterSpacing: '',
  textTransform: 'none',
  shadow: '',
  customClass: '',
  customId: '',
  customCss: '',

  bgColor: '',
  textColor: '',
}

// ── Sample data (mirrors Footer.tsx defaults) ─────────────────────────────────

type HourRow   = { days: string; hours: string }
type HourPair  = [HourRow, HourRow]
type HourGroup = { title: string; rows: HourPair }

const SAMPLE_HOURS: HourGroup[] = [
  {
    title: 'General Mall Timings',
    rows: [
      { days: 'Mon – Thu', hours: '10:00 am to 12:00 am' },
      { days: 'Fri – Sun', hours: '10:00 am to 01:00 am' },
    ],
  },
  {
    title: 'F&B, Foodcourt & Waterfront',
    rows: [
      { days: 'Mon – Thu', hours: '10:00 am to 12:00 am' },
      { days: 'Fri – Sun', hours: '10:00 am to 01:00 am' },
    ],
  },
  {
    title: 'IMAGINE Show Timings',
    rows: [
      { days: 'Mon – Wed', hours: '07:00 pm to 11:00 pm' },
      { days: 'Thur – Sun', hours: '07:00 pm to 11:00 pm' },
    ],
  },
  {
    title: 'Hypermarket (Carrefour and LuLu)',
    rows: [
      { days: 'Mon – Thu', hours: '08:00 am to 12:00 am' },
      { days: 'Fri – Sun', hours: '08:00 am to 12:00 am' },
    ],
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function indent(s: string, n = 2) {
  return ' '.repeat(n) + s
}

function buildSocialLines(cfg: FooterConfig): string[] {
  const items: [boolean, string, string][] = [
    [cfg.showLinkedIn,  'linkedin',  'LinkedIn'],
    [cfg.showInstagram, 'instagram', 'Instagram'],
    [cfg.showYoutube,   'youtube',   'YouTube'],
    [cfg.showX,         'x',         'X (Twitter)'],
  ]
  return items
    .filter(([on]) => on)
    .map(([, platform, label]) => `    { platform: '${platform}', ariaLabel: '${label}' },`)
}

// ── Code generator ────────────────────────────────────────────────────────────

export function footerCodeGen(cfg: FooterConfig): string {
  const lines: string[] = []

  // Import
  lines.push(`import { Footer } from '@company/design-system';`)

  // ── Nav columns const ───────────────────────────────────────────────────────
  if (cfg.navColumnCount > 0) {
    lines.push('', `const NAV_COLUMNS = [`)
    for (let ci = 0; ci < cfg.navColumnCount; ci++) {
      lines.push(indent(`{`))
      lines.push(indent(`title: 'Category ${ci + 1}',`, 4))
      lines.push(indent(`links: [`, 4))
      for (let li = 0; li < cfg.navLinksPerColumn; li++) {
        lines.push(indent(`{ label: 'Link ${li + 1}' },`, 6))
      }
      lines.push(indent(`],`, 4))
      lines.push(indent(`},`))
    }
    lines.push(`];`)
  }

  // ── Opening hours const ─────────────────────────────────────────────────────
  if (cfg.showOpeningHours) {
    const hours = SAMPLE_HOURS.slice(0, cfg.openingHoursGroupCount)
    lines.push('', `const OPENING_HOURS = [`)
    for (const group of hours) {
      lines.push(indent(`{`))
      lines.push(indent(`title: '${group.title}',`, 4))
      lines.push(indent(`rows: [`, 4))
      for (const row of group.rows) {
        lines.push(indent(`{ days: '${row.days}', hours: '${row.hours}' },`, 6))
      }
      lines.push(indent(`],`, 4))
      lines.push(indent(`},`))
    }
    lines.push(`];`)
  }

  // ── JSX ─────────────────────────────────────────────────────────────────────
  lines.push('')

  const attrs: string[] = []

  // theme (only when dark — light is default)
  if (cfg.theme === 'dark') attrs.push(`  theme="dark"`)

  // section toggles (only when false — true is default)
  if (!cfg.showNewsletterBar) attrs.push(`  showNewsletterBar={false}`)
  if (!cfg.showOpeningHours)  attrs.push(`  showOpeningHours={false}`)

  // newsletter object
  if (cfg.showNewsletterBar) {
    attrs.push(`  newsletter={{`)
    attrs.push(`    title: '${cfg.newsletterTitle}',`)
    attrs.push(`    subtitle: '${cfg.newsletterSubtitle}',`)
    attrs.push(`    emailPlaceholder: '${cfg.newsletterEmailPlaceholder}',`)
    attrs.push(`    subscribeLabel: '${cfg.newsletterBtnLabel}',`)
    attrs.push(`  }}`)
  }

  // opening hours
  if (cfg.showOpeningHours) {
    if (cfg.openingHoursTitle !== 'Mall Opening Hours')
      attrs.push(`  openingHoursTitle="${cfg.openingHoursTitle}"`)
    attrs.push(`  openingHours={OPENING_HOURS}`)
  }

  // nav columns
  if (cfg.navColumnCount > 0) attrs.push(`  navColumns={NAV_COLUMNS}`)

  // logo
  if (cfg.logoType === 'text') {
    attrs.push(`  logo={<YourLogo />} {/* replace with your logo component */}`)
  }

  // copyright
  if (cfg.copyright !== '©2026. All Rights Reserved.')
    attrs.push(`  copyright="${cfg.copyright}"`)

  // legal links
  if (cfg.showLegalLinks) {
    attrs.push(`  legalLinks={[`)
    attrs.push(`    { label: '${cfg.legalLink1}' },`)
    attrs.push(`    { label: '${cfg.legalLink2}' },`)
    attrs.push(`  ]}`)
  } else {
    attrs.push(`  legalLinks={[]}`)
  }

  // social links
  const socialLines = buildSocialLines(cfg)
  if (socialLines.length > 0) {
    attrs.push(`  socialLinks={[`)
    attrs.push(...socialLines)
    attrs.push(`  ]}`)
  } else {
    attrs.push(`  socialLinks={[]}`)
  }

  if (cfg.customClass) attrs.push(`  className="${cfg.customClass}"`)
  if (cfg.customId)    attrs.push(`  id="${cfg.customId}"`)

  lines.push(`<Footer`)
  lines.push(...attrs)
  lines.push(`/>`)

  // Custom CSS block
  if (cfg.customCss) {
    lines.push('', '/* Custom CSS */', cfg.customCss)
  }

  return lines.join('\n')
}
