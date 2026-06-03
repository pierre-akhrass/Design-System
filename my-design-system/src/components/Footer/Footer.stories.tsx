import type { Meta, StoryObj } from '@storybook/react-vite'
import { FooterV1 } from './FooterV1'
import { FooterV2 } from './FooterV2'
import { FooterV3 } from './FooterV3'
import { FooterV4 } from './FooterV4'
import { FooterV5 } from './FooterV5'
import { FooterV6 } from './FooterV6'
import { FooterV7 } from './FooterV7'
import { FooterV8 } from './FooterV8'
import { FooterV9 } from './FooterV9'
import { FooterV10 } from './FooterV10'
import { FooterV11 } from './FooterV11'
import { FooterV12 } from './FooterV12'
import { FooterV13 } from './FooterV13'
import { FooterV14 } from './FooterV14'
import { FooterV15 } from './FooterV15'
import type { FooterNavGroup, FooterNavItem, FooterSocialLink } from './Footer.types'

// ─── Shared Demo Data ─────────────────────────────────────────────────────────

const demoLogo = {
  src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="144" height="46" viewBox="0 0 144 46"><rect width="144" height="46" rx="4" fill="%23D1D9E0"/><text x="72" y="29" font-family="sans-serif" font-size="13" font-weight="700" fill="%23374151" text-anchor="middle">Your Logo</text></svg>',
  alt: 'Company Logo',
  href: '#',
}

const demoSocials: FooterSocialLink[] = [
  { platform: 'facebook', href: '#', ariaLabel: 'Facebook' },
  { platform: 'twitter', href: '#', ariaLabel: 'X (Twitter)' },
  { platform: 'instagram', href: '#', ariaLabel: 'Instagram' },
  { platform: 'linkedin', href: '#', ariaLabel: 'LinkedIn' },
  { platform: 'youtube', href: '#', ariaLabel: 'YouTube' },
]

const demoSocialsShort: FooterSocialLink[] = demoSocials.slice(0, 3)

const demoDescription =
  'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma tincidunt arcu.'

const demoCopyright =
  'Copyright © 2026 Company Name | All Rights Reserved | Terms and Conditions | Privacy Policy'

const demoNavGroups: FooterNavGroup[] = [
  {
    title: 'Product',
    items: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Case studies', href: '#' },
      { label: 'Reviews', href: '#' },
      { label: 'Updates', href: '#' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '#' },
      { label: 'Contact us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Culture', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Getting started', href: '#' },
      { label: 'Help center', href: '#' },
      { label: 'Server status', href: '#' },
      { label: 'Report a bug', href: '#' },
      { label: 'Chat support', href: '#' },
    ],
  },
  {
    title: 'Downloads',
    items: [
      { label: 'iOS', href: '#' },
      { label: 'Android', href: '#' },
      { label: 'Mac', href: '#' },
      { label: 'Windows', href: '#' },
      { label: 'Chrome', href: '#' },
    ],
  },
]

const demoNavGroupsFive: FooterNavGroup[] = [
  ...demoNavGroups,
  {
    title: 'Follow us',
    items: [
      { label: 'Facebook', href: '#', platform: 'facebook' },
      { label: 'Twitter', href: '#', platform: 'twitter' },
      { label: 'Instagram', href: '#', platform: 'instagram' },
      { label: 'LinkedIn', href: '#', platform: 'linkedin' },
      { label: 'YouTube', href: '#', platform: 'youtube' },
    ],
  },
]

const demoNavItems: FooterNavItem[] = [
  { label: 'About', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

const demoNewsletter = {
  placeholder: 'Enter your email',
  buttonLabel: 'Suscribe',
}

const demoNewsletterWithHeading = {
  heading: 'Subscribe to our newsletter',
  placeholder: 'Enter your email',
  buttonLabel: 'Suscribe',
}

const demoInstagramGrid = {
  title: 'Follow on Instagram',
  images: [
    { src: 'https://picsum.photos/seed/ig1/140/140', alt: 'Instagram post 1' },
    { src: 'https://picsum.photos/seed/ig2/140/140', alt: 'Instagram post 2' },
    { src: 'https://picsum.photos/seed/ig3/140/140', alt: 'Instagram post 3' },
    { src: 'https://picsum.photos/seed/ig4/140/140', alt: 'Instagram post 4' },
  ],
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Components/Footer',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj

// ─── V1: Logo left + Socials right ───────────────────────────────────────────

export const V1LogoAndSocials: Story = {
  name: 'V1 — Logo + Socials',
  render: () => <FooterV1 logo={demoLogo} socials={demoSocials} />,
}

// ─── V2: Logo + Desc + Socials | 4 Nav cols | Copyright bar ──────────────────

export const V2NavColumnsWithBrand: Story = {
  name: 'V2 — Nav Columns with Brand',
  render: () => (
    <FooterV2
      logo={demoLogo}
      description={demoDescription}
      socials={demoSocials}
      navGroups={demoNavGroups}
      copyright={demoCopyright}
    />
  ),
}

// ─── V3: Copyright left + Copyright right ────────────────────────────────────

export const V3CopyrightBar: Story = {
  name: 'V3 — Copyright Bar',
  render: () => (
    <FooterV3
      copyrightLeft="© 2026 Company Name"
      copyrightRight="All Rights Reserved | Terms and Conditions | Privacy Policy"
    />
  ),
}

// ─── V4: Logo centered + Newsletter + Socials ─────────────────────────────────

export const V4CenteredWithNewsletter: Story = {
  name: 'V4 — Centered + Newsletter',
  render: () => (
    <FooterV4
      logo={demoLogo}
      heading="Subscribe to our newsletter"
      description={demoDescription}
      newsletter={demoNewsletter}
      socials={demoSocials}
      copyright={demoCopyright}
    />
  ),
}

// ─── V5: Brand col + 2 Nav cols + Instagram Grid + Bottom bar ─────────────────

export const V5InstagramGrid: Story = {
  name: 'V5 — Newsletter + Nav + Instagram Grid',
  render: () => (
    <FooterV5
      logo={demoLogo}
      description={demoDescription}
      newsletter={demoNewsletter}
      navGroups={demoNavGroups.slice(0, 2)}
      instagramGrid={demoInstagramGrid}
      copyright={demoCopyright}
      socials={demoSocials}
    />
  ),
}

// ─── V6: Logo+Desc | 4 Nav Groups (no bottom bar) ─────────────────────────────

export const V6NavGroupsNoCopyright: Story = {
  name: 'V6 — Nav Groups (no bottom bar)',
  render: () => (
    <FooterV6 logo={demoLogo} description={demoDescription} navGroups={demoNavGroups} />
  ),
}

// ─── V7: Logo left + Copyright right ──────────────────────────────────────────

export const V7LogoAndCopyright: Story = {
  name: 'V7 — Logo + Copyright',
  render: () => <FooterV7 logo={demoLogo} copyright={demoCopyright} />,
}

// ─── V8: 5 Nav groups + Logo + Copyright bottom bar ───────────────────────────

export const V8FiveNavGroups: Story = {
  name: 'V8 — Five Nav Groups + Logo Bar',
  render: () => (
    <FooterV8 navGroups={demoNavGroupsFive} logo={demoLogo} copyright={demoCopyright} />
  ),
}

// ─── V9: Logo+Desc (col1) + Newsletter (col right) ────────────────────────────

export const V9NewsletterSplit: Story = {
  name: 'V9 — Newsletter Split',
  render: () => (
    <FooterV9
      logo={demoLogo}
      description={demoDescription}
      newsletter={demoNewsletterWithHeading}
    />
  ),
}

// ─── V10: Logo | Nav items center | Socials right | Copyright bar ──────────────

export const V10LogoNavSocials: Story = {
  name: 'V10 — Logo + Nav + Socials',
  render: () => (
    <FooterV10
      logo={demoLogo}
      navItems={demoNavItems}
      socials={demoSocials}
      copyright={demoCopyright}
    />
  ),
}

// ─── V11: Copyright left + Socials right ──────────────────────────────────────

export const V11CopyrightAndSocials: Story = {
  name: 'V11 — Copyright + Socials',
  render: () => <FooterV11 copyright={demoCopyright} socials={demoSocials} />,
}

// ─── V12: Copyright left + Nav items + Socials right ──────────────────────────

export const V12CopyrightNavSocials: Story = {
  name: 'V12 — Copyright + Nav + Socials',
  render: () => (
    <FooterV12
      copyright="© 2026 Company Name"
      navItems={demoNavItems.slice(0, 4)}
      socials={demoSocialsShort}
    />
  ),
}

// ─── V13: 4 Nav columns + Socials centered + Copyright ────────────────────────

export const V13NavColumnsWithSocials: Story = {
  name: 'V13 — Nav Columns + Socials Bottom',
  render: () => (
    <FooterV13
      navGroups={demoNavGroups}
      socials={demoSocials}
      copyright={demoCopyright}
      copyrightSub="Terms of Service · Privacy Policy · Cookie Settings"
    />
  ),
}

// ─── V14: Nav left + Logo center + Nav right ──────────────────────────────────

export const V14LogoCenterBar: Story = {
  name: 'V14 — Logo Center Bar',
  render: () => (
    <FooterV14
      logo={demoLogo}
      leftNavItems={[
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
      ]}
      rightNavItems={[
        { label: 'Support', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
      ]}
    />
  ),
}

// ─── V15: 3 cols: Logo+Desc | Newsletter | Socials label+icons ────────────────

export const V15ThreeColumns: Story = {
  name: 'V15 — Three Columns',
  render: () => (
    <FooterV15
      logo={demoLogo}
      description={demoDescription}
      newsletter={demoNewsletterWithHeading}
      socialsLabel="Subscribe to our newsletter"
      socials={demoSocials}
    />
  ),
}
