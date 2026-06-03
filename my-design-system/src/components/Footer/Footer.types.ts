import type { HTMLAttributes } from 'react'

export interface FooterNavItem {
  label: string
  href?: string
  onClick?: () => void
  /** When set, renders a social platform icon before the label (for 'Follow us' columns) */
  platform?: FooterSocialPlatform
}

export interface FooterNavGroup {
  title: string
  items: FooterNavItem[]
}

export type FooterSocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'

export interface FooterSocialLink {
  platform: FooterSocialPlatform
  href?: string
  onClick?: () => void
  ariaLabel?: string
}

export interface FooterLogoProps {
  src: string
  alt?: string
  href?: string
}

export interface FooterNewsletterProps {
  /** Large semibold heading displayed above the form */
  heading?: string
  label?: string
  placeholder?: string
  buttonLabel?: string
  onSubscribe?: (email: string) => void
}

export interface FooterInstagramGrid {
  images: Array<{ src: string; alt?: string }>
  title?: string
}

/** V1: Logo left + Social icons right (single bar) */
export interface FooterV1Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  socials?: FooterSocialLink[]
}

/** V2: Logo + Description + Socials (col1) + 4 nav columns + copyright bar */
export interface FooterV2Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  description?: string
  socials?: FooterSocialLink[]
  navGroups?: FooterNavGroup[]
  copyright?: string
}

/** V3: Copyright text left + copyright text right (single bar) */
export interface FooterV3Props extends HTMLAttributes<HTMLElement> {
  copyrightLeft?: string
  copyrightRight?: string
}

/** V4: Logo centered + description + newsletter + socials + copyright bar */
export interface FooterV4Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  /** Large semibold heading displayed after logo, before description */
  heading?: string
  description?: string
  newsletter?: FooterNewsletterProps
  socials?: FooterSocialLink[]
  copyright?: string
}

/** V5: Logo + description + newsletter (col1) + 2 nav cols + instagram grid + copyright + socials bar */
export interface FooterV5Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  description?: string
  newsletter?: FooterNewsletterProps
  navGroups?: FooterNavGroup[]
  instagramGrid?: FooterInstagramGrid
  copyright?: string
  socials?: FooterSocialLink[]
}

/** V6: Logo + description (col1) + 4 nav groups (no bottom bar) */
export interface FooterV6Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  description?: string
  navGroups?: FooterNavGroup[]
}

/** V7: Logo left + copyright right (single bar) */
export interface FooterV7Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  copyright?: string
}

/** V8: 5 nav groups + logo + copyright bottom bar */
export interface FooterV8Props extends HTMLAttributes<HTMLElement> {
  navGroups?: FooterNavGroup[]
  logo: FooterLogoProps
  copyright?: string
}

/** V9: Logo + description (col1) + newsletter form (col right) */
export interface FooterV9Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  description?: string
  newsletter?: FooterNewsletterProps
}

/** V10: Logo + nav items (center) + socials (right) + copyright bar */
export interface FooterV10Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  navItems?: FooterNavItem[]
  socials?: FooterSocialLink[]
  copyright?: string
}

/** V11: Copyright left + socials right (minimal bar) */
export interface FooterV11Props extends HTMLAttributes<HTMLElement> {
  copyright?: string
  socials?: FooterSocialLink[]
}

/** V12: Copyright left + nav items + socials right (bar) */
export interface FooterV12Props extends HTMLAttributes<HTMLElement> {
  copyright?: string
  navItems?: FooterNavItem[]
  socials?: FooterSocialLink[]
}

/** V13: 4 nav columns + socials centered + copyright texts */
export interface FooterV13Props extends HTMLAttributes<HTMLElement> {
  navGroups?: FooterNavGroup[]
  socials?: FooterSocialLink[]
  copyright?: string
  copyrightSub?: string
}

/** V14: Nav items left + logo center + nav items right (bar) */
export interface FooterV14Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  leftNavItems?: FooterNavItem[]
  rightNavItems?: FooterNavItem[]
}

/** V15: 3 columns: logo+description | newsletter | socials label+icons */
export interface FooterV15Props extends HTMLAttributes<HTMLElement> {
  logo: FooterLogoProps
  description?: string
  newsletter?: FooterNewsletterProps
  socialsLabel?: string
  socials?: FooterSocialLink[]
}
