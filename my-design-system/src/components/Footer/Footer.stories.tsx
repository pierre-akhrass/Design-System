import type { Meta, StoryObj } from '@storybook/react-vite'
import { Footer } from './Footer'
import type { FooterNavColumn, OpeningHourGroup, SocialLink, FooterTheme } from './Footer'
import LogoAlFuttaim from '../../assets/logo-al-futtaim.svg?react'

// ─── Design token BG colours (mirrors _variables.scss) ────────────────────────
// light → $mapping-system-slate-surface-primary    #f5f7fa
// dark  → $mapping-system-slate-background-primary #141f2e
const TOKEN_BG_LIGHT = '#f5f7fa'
const TOKEN_BG_DARK  = '#141f2e'

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
  title: 'Components/Footer (Maher Al Rifai)',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-page footer with optional newsletter bar, opening hours grid, navigation columns, and a bottom bar (logo + legal links + copyright + social icons). Supports `light` and `dark` themes.',
      },
    },
  },
  args: {
    theme: 'light',
    showNewsletterBar: true,
    showOpeningHours: true,
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Color theme — light uses slate surface palette, dark uses slate background palette.',
    },
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
      description: 'Newsletter bar content.',
      table: { category: 'Newsletter bar' },
    },
    openingHoursTitle: {
      control: 'text',
      description: 'Heading above the opening hours grid.',
      table: { category: 'Opening hours' },
    },
    openingHours: {
      control: 'object',
      description: 'Array of timing groups.',
      table: { category: 'Opening hours' },
    },
    navColumns: {
      control: 'object',
      description: 'Up to 5 navigation columns.',
      table: { category: 'Navigation' },
    },
    logo: {
      control: false,
      description: 'Logo slot — pass any ReactNode.',
      table: { category: 'Bottom bar' },
    },
    copyright: {
      control: 'text',
      description: 'Copyright line in the bottom bar.',
      table: { category: 'Bottom bar' },
    },
    legalLinks: {
      control: 'object',
      description: 'Legal links row.',
      table: { category: 'Bottom bar' },
    },
    socialLinks: {
      control: 'object',
      description: 'Social icon buttons.',
      table: { category: 'Bottom bar' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Footer>

// ─── Playground ───────────────────────────────────────────────────────────────
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const bg = args.theme === 'dark' ? TOKEN_BG_DARK : TOKEN_BG_LIGHT
    return (
      <div style={{ background: bg, minHeight: '100vh', transition: 'background 0.2s ease' }}>
        <Footer
          {...args}
          navColumns={NAV_COLUMNS}
          openingHours={OPENING_HOURS}
          copyright="©Ogilvy 2026. All Rights Reserved. Designed by OgilvyOne"
          legalLinks={[
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms & Conditions', href: '#' },
          ]}
          socialLinks={SOCIAL}
          logo={<LogoAlFuttaim aria-label="Al-Futtaim" />}
        />
      </div>
    )
  },
}
