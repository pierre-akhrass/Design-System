import type { Meta, StoryObj } from '@storybook/react-vite'
import { Footer } from './Footer'
import type { FooterNavColumn, OpeningHourGroup, SocialLink } from './Footer'

// ─── Sample data ──────────────────────────────────────────────────────────────

const NAV_COLUMNS: FooterNavColumn[] = [
  {
    title: 'Discover',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press & Media', href: '#' },
      { label: 'Sustainability', href: '#' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'Fashion & Lifestyle', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Home & Garden', href: '#' },
      { label: 'Sports & Outdoors', href: '#' },
    ],
  },
  {
    title: 'Dine',
    links: [
      { label: 'Restaurants', href: '#' },
      { label: 'Cafes & Bars', href: '#' },
      { label: 'Food Courts', href: '#' },
      { label: 'Fine Dining', href: '#' },
      { label: 'Events & Pop-ups', href: '#' },
      { label: 'Gift Vouchers', href: '#' },
    ],
  },
  {
    title: 'Entertain',
    links: [
      { label: 'Cinema', href: '#' },
      { label: 'Gaming Zone', href: '#' },
      { label: 'Kids Play Area', href: '#' },
      { label: 'Events Calendar', href: '#' },
      { label: 'Loyalty Programme', href: '#' },
      { label: 'Parking & Transport', href: '#' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: 'Getting Here', href: '#' },
      { label: 'Opening Hours', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  },
]

const OPENING_HOURS: OpeningHourGroup[] = [
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

const SOCIAL: SocialLink[] = [
  { platform: 'linkedin',  href: 'https://linkedin.com',  ariaLabel: 'LinkedIn' },
  { platform: 'instagram', href: 'https://instagram.com', ariaLabel: 'Instagram' },
  { platform: 'youtube',   href: 'https://youtube.com',   ariaLabel: 'YouTube' },
  { platform: 'x',         href: 'https://x.com',         ariaLabel: 'X (Twitter)' },
]

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A fully controlled, data-driven footer with four independently togglable sections.

### Sections (Figma names)
| Section | Figma name | Prop |
|---|---|---|
| Newsletter bar | "Top" | \`showNewsletterBar\` |
| Opening hours panel | "Opening Hours" | \`showOpeningHours\` |
| Navigation columns | "sections" | \`navColumns\` |
| Bottom bar | "Bottom" | \`legalLinks\`, \`logo\`, \`copyright\`, \`socialLinks\` |

### Key controlled props
| Prop | Type | Description |
|---|---|---|
| \`newsletter\` | \`FooterNewsletterProps\` | Title, subtitle, placeholder, label and \`onSubscribe\` callback |
| \`openingHours\` | \`OpeningHourGroup[]\` | Up to 4 timing columns, 2 rows each |
| \`navColumns\` | \`FooterNavColumn[]\` | Up to 5 columns of nav links |
| \`legalLinks\` | \`FooterLink[]\` | Privacy Policy, T&C links |
| \`socialLinks\` | \`SocialLink[]\` | platform + href + \`onClick\` |
| \`logo\` | \`ReactNode\` | Pass any image, SVG, or component |
| \`copyright\` | \`string\` | Copyright line |
        `,
      },
    },
  },
  argTypes: {
    showNewsletterBar: {
      control: 'boolean',
      description: 'Show/hide the newsletter subscription bar ("Top" in Figma).',
      table: { category: 'Visibility' },
    },
    showOpeningHours: {
      control: 'boolean',
      description: 'Show/hide the opening hours panel.',
      table: { category: 'Visibility' },
    },
    newsletter: {
      control: 'object',
      description: 'Newsletter bar content — title, subtitle, placeholder, button label, and `onSubscribe` callback.',
      table: { category: 'Newsletter bar' },
    },
    openingHoursTitle: {
      control: 'text',
      description: 'Heading above the opening hours grid.',
      table: { category: 'Opening hours' },
    },
    openingHours: {
      control: 'object',
      description: 'Array of timing groups. Each group has a `title` and exactly two `rows` (days + hours).',
      table: { category: 'Opening hours' },
    },
    navColumns: {
      control: 'object',
      description: 'Up to 5 navigation columns. Each has a `title` and `links[]` array.',
      table: { category: 'Navigation' },
    },
    logo: {
      control: false,
      description: 'Logo slot — pass any `ReactNode` (img, SVG, component).',
      table: { category: 'Bottom bar' },
    },
    copyright: {
      control: 'text',
      description: 'Copyright line in the bottom bar.',
      table: { category: 'Bottom bar' },
    },
    legalLinks: {
      control: 'object',
      description: 'Legal links row ("Privacy + Terms" in Figma). Each item: `{ label, href?, onClick? }`.',
      table: { category: 'Bottom bar' },
    },
    socialLinks: {
      control: 'object',
      description: 'Social icon buttons. Each item: `{ platform, href?, ariaLabel?, onClick? }`. Platforms: `linkedin | instagram | youtube | x`.',
      table: { category: 'Bottom bar' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Footer>

// ─── Default — all sections ───────────────────────────────────────────────────

export const Default: Story = {
  name: 'Default — all sections',
  args: {
    navColumns: NAV_COLUMNS,
    openingHours: OPENING_HOURS,
    copyright: '©Ogilvy 2026. All Rights Reserved. Designed by OgilvyOne',
    socialLinks: SOCIAL,
  },
}

// ─── Without newsletter bar ───────────────────────────────────────────────────

export const NoNewsletterBar: Story = {
  name: 'showNewsletterBar — false',
  args: {
    showNewsletterBar: false,
    navColumns: NAV_COLUMNS,
    openingHours: OPENING_HOURS,
    copyright: '©2026. All Rights Reserved.',
    socialLinks: SOCIAL,
  },
}

// ─── Without opening hours ────────────────────────────────────────────────────

export const NoOpeningHours: Story = {
  name: 'showOpeningHours — false',
  args: {
    showOpeningHours: false,
    navColumns: NAV_COLUMNS,
    copyright: '©2026. All Rights Reserved.',
    socialLinks: SOCIAL,
  },
}

// ─── Nav only (minimal) ───────────────────────────────────────────────────────

export const NavOnly: Story = {
  name: 'Nav only — minimal',
  args: {
    showNewsletterBar: false,
    showOpeningHours: false,
    navColumns: NAV_COLUMNS,
    copyright: '©2026. All Rights Reserved.',
    socialLinks: SOCIAL,
  },
  parameters: {
    docs: {
      description: {
        story: 'Both top sections hidden. Only the navigation columns and the bottom bar are rendered.',
      },
    },
  },
}

// ─── Custom newsletter ────────────────────────────────────────────────────────

export const CustomNewsletter: Story = {
  name: 'Custom newsletter content',
  args: {
    showOpeningHours: false,
    newsletter: {
      title: 'Never miss a deal.',
      subtitle: 'Subscribe and get weekly offers straight to your inbox.',
      emailPlaceholder: 'your@email.com',
      subscribeLabel: 'Join Now',
      onSubscribe: (email) => alert(`Subscribed: ${email}`),
    },
    navColumns: NAV_COLUMNS,
    copyright: '©2026. All Rights Reserved.',
    socialLinks: SOCIAL,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pass a custom `newsletter` object to override every text string and wire up the `onSubscribe` callback.',
      },
    },
  },
}

// ─── Custom logo ──────────────────────────────────────────────────────────────

export const WithLogo: Story = {
  name: 'With logo slot',
  args: {
    showOpeningHours: false,
    navColumns: NAV_COLUMNS,
    socialLinks: SOCIAL,
    copyright: '©2026. All Rights Reserved.',
    logo: (
      <svg viewBox="0 0 120 40" width="120" height="40" aria-label="Brand logo">
        <rect width="120" height="40" rx="4" fill="#141f2e" />
        <text x="12" y="26" fill="#ffffff" fontFamily="Noto Sans, sans-serif" fontSize="16" fontWeight="700">
          BRAND
        </text>
      </svg>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'The `logo` prop accepts any `ReactNode` — an `<img>`, an inline SVG, or a component.',
      },
    },
  },
}

// ─── Social-only bottom bar ───────────────────────────────────────────────────

export const CustomSocial: Story = {
  name: 'Custom social links',
  args: {
    showNewsletterBar: false,
    showOpeningHours: false,
    navColumns: NAV_COLUMNS,
    copyright: '©2026. All Rights Reserved.',
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
    socialLinks: [
      { platform: 'linkedin',  href: 'https://linkedin.com',  ariaLabel: 'Follow us on LinkedIn' },
      { platform: 'instagram', href: 'https://instagram.com', ariaLabel: 'Follow us on Instagram' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Pass any subset of the 4 platforms and any number of legal links.',
      },
    },
  },
}
