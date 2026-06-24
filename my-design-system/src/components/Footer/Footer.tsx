/**
 * Footer Component
 * @developer Maher Al Rifai
 */

import { useRef } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
import './Footer.scss'

export type FooterTheme = 'light' | 'dark'

// ─── Social icon SVGs ─────────────────────────────────────────────────────────

const LinkedInIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
    <path d="M4.477 3C3.66 3 3 3.647 3 4.447c0 .8.66 1.462 1.477 1.462.816 0 1.476-.661 1.476-1.462C5.953 3.647 5.293 3 4.477 3zM3.13 7.1h2.693V17H3.13V7.1zM8.357 7.1v9.9h2.686v-4.9c0-1.13.214-2.222 1.613-2.222 1.38 0 1.398 1.291 1.398 2.294V17H16.7v-5.213c0-2.333-.503-4.128-3.227-4.128-1.31 0-2.188.718-2.548 1.398h-.037V7.1H8.357z" />
  </svg>
)

const InstagramIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
    <path d="M10 3c-1.9 0-2.138.008-2.886.042-.746.034-1.255.152-1.7.325a3.437 3.437 0 00-1.243.809 3.437 3.437 0 00-.809 1.243c-.173.445-.291.954-.325 1.7C3.008 7.862 3 8.1 3 10c0 1.9.008 2.138.042 2.886.034.746.152 1.255.325 1.7.179.462.417.853.809 1.243.39.392.781.63 1.243.809.445.173.954.291 1.7.325.748.034.986.042 2.886.042 1.9 0 2.138-.008 2.886-.042.746-.034 1.255-.152 1.7-.325a3.437 3.437 0 001.243-.809 3.437 3.437 0 00.809-1.243c.173-.445.291-.954.325-1.7.034-.748.042-.986.042-2.886 0-1.9-.008-2.138-.042-2.886-.034-.746-.152-1.255-.325-1.7a3.437 3.437 0 00-.809-1.243 3.437 3.437 0 00-1.243-.809c-.445-.173-.954-.291-1.7-.325C12.138 3.008 11.9 3 10 3zm0 1.261c1.868 0 2.089.007 2.828.04.682.031 1.053.145 1.3.241.326.127.559.278.803.522.245.245.396.477.522.803.096.247.21.618.241 1.3.033.739.04.96.04 2.828 0 1.868-.007 2.089-.04 2.828-.031.682-.145 1.053-.241 1.3a2.169 2.169 0 01-.522.803 2.169 2.169 0 01-.803.522c-.247.096-.618.21-1.3.241-.739.033-.96.04-2.828.04-1.868 0-2.089-.007-2.828-.04-.682-.031-1.053-.145-1.3-.241a2.169 2.169 0 01-.803-.522 2.169 2.169 0 01-.522-.803c-.096-.247-.21-.618-.241-1.3C4.273 12.089 4.266 11.868 4.266 10c0-1.868.007-2.089.04-2.828.031-.682.145-1.053.241-1.3.127-.326.278-.559.522-.803a2.169 2.169 0 01.803-.522c.247-.096.618-.21 1.3-.241.739-.033.96-.04 2.828-.04zm0 2.144a3.595 3.595 0 100 7.19 3.595 3.595 0 000-7.19zm0 5.929a2.334 2.334 0 110-4.668 2.334 2.334 0 010 4.668zm4.578-6.07a.84.84 0 100 1.68.84.84 0 000-1.68z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
    <path d="M17.522 6.046a2.021 2.021 0 00-1.422-1.43C14.754 4.25 10 4.25 10 4.25s-4.754 0-6.1.366A2.021 2.021 0 002.478 6.046C2.115 7.397 2.115 10.215 2.115 10.215s0 2.818.363 4.17a2.021 2.021 0 001.422 1.43c1.346.366 6.1.366 6.1.366s4.754 0 6.1-.366a2.021 2.021 0 001.422-1.43c.363-1.352.363-4.17.363-4.17s0-2.818-.363-4.169zM8.318 12.858V7.572l4.083 2.643-4.083 2.643z" />
  </svg>
)

const XIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
    <path d="M11.543 9.115L16.77 3h-1.24L10.98 8.308 7.17 3H3l5.48 7.978L3 17.5h1.24l4.79-5.568 3.828 5.568H17l-5.457-8.385zm-1.696 1.972l-.555-.795-4.415-6.315H6.57l3.563 5.097.555.794 4.632 6.628h-1.693l-3.78-5.41z" />
  </svg>
)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FooterNewsletterProps {
  /** Main headline — Figma: "Stay connected, stay informed!" */
  title?: string
  /** Body text below the headline */
  subtitle?: string
  /** Placeholder inside the email input */
  emailPlaceholder?: string
  /** Label on the subscribe button */
  subscribeLabel?: string
  /** Called with the current email value when the button is clicked */
  onSubscribe?: (email: string) => void
}

export interface OpeningHourRow {
  /** Day range label, e.g. "Mon – Thu" */
  days: string
  /** Time range, e.g. "10:00 am to 12:00 am" */
  hours: string
}

export interface OpeningHourGroup {
  /** Column heading, e.g. "General Mall Timings" */
  title: string
  /** Exactly two rows (weekday + weekend) */
  rows: [OpeningHourRow, OpeningHourRow]
}

export interface FooterLink {
  label: string
  href?: string
  onClick?: () => void
}

export interface FooterNavColumn {
  /** Uppercase column heading — Figma: "CATEGORY TITLE" */
  title: string
  /** Tier 2 nav links */
  links: FooterLink[]
}

export type SocialPlatform = 'linkedin' | 'instagram' | 'youtube' | 'x'

export interface SocialLink {
  platform: SocialPlatform
  href?: string
  ariaLabel?: string
  onClick?: () => void
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  // ── Theme ───────────────────────────────────────────────────────────────────
  /**
   * Color theme for the footer.
   * light → slate surface backgrounds (Figma light design)
   * dark  → slate background palette (Figma dark design)
   */
  theme?: FooterTheme
  // ── Section visibility ──────────────────────────────────────────────────────
  /** Show the newsletter subscription bar ("Top" in Figma). Default: true */
  showNewsletterBar?: boolean
  /** Show the mall opening hours panel ("Opening Hours" in Figma). Default: true */
  showOpeningHours?: boolean

  // ── Newsletter bar ──────────────────────────────────────────────────────────
  /** Content for the newsletter bar */
  newsletter?: FooterNewsletterProps

  // ── Opening hours ───────────────────────────────────────────────────────────
  /** Heading above the hours table. Default: "Mall Opening Hours" */
  openingHoursTitle?: string
  /** Up to 4 timing columns */
  openingHours?: OpeningHourGroup[]

  // ── Navigation columns ──────────────────────────────────────────────────────
  /** Up to 5 nav columns ("sections" in Figma). Each has a title and links. */
  navColumns?: FooterNavColumn[]

  // ── Bottom bar ──────────────────────────────────────────────────────────────
  /** Logo slot — render any ReactNode (img, SVG, component). Figma: "Logo container" */
  logo?: ReactNode
  /** Copyright line. Default: "©2026. All Rights Reserved." */
  copyright?: string
  /** Legal links row ("Privacy + Terms" in Figma) */
  legalLinks?: FooterLink[]
  /** Social icon buttons ("Social" in Figma) */
  socialLinks?: SocialLink[]
}

// ─── Default data ─────────────────────────────────────────────────────────────

const DEFAULT_NEWSLETTER: FooterNewsletterProps = {
  title: 'Stay connected, stay informed!',
  subtitle: 'Be the first to learn about the latest updates.',
  emailPlaceholder: 'Email address',
  subscribeLabel: 'Subscribe',
}

const DEFAULT_HOURS: OpeningHourGroup[] = [
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

const DEFAULT_NAV: FooterNavColumn[] = Array.from({ length: 5 }, (_, i) => ({
  title: `Category ${i + 1}`,
  links: Array.from({ length: 4 }, (_, j) => ({ label: `Nav Link ${j + 1}` })),
}))

const DEFAULT_LEGAL: FooterLink[] = [
  { label: 'Privacy Policy' },
  { label: 'Terms & Conditions' },
]

const DEFAULT_SOCIAL: SocialLink[] = [
  { platform: 'linkedin',  ariaLabel: 'LinkedIn' },
  { platform: 'instagram', ariaLabel: 'Instagram' },
  { platform: 'youtube',   ariaLabel: 'YouTube' },
  { platform: 'x',         ariaLabel: 'X (Twitter)' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

const SOCIAL_ICONS: Record<SocialPlatform, React.FC> = {
  linkedin:  LinkedInIcon,
  instagram: InstagramIcon,
  youtube:   YouTubeIcon,
  x:         XIcon,
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Footer = ({
  theme = 'light',
  showNewsletterBar = true,
  showOpeningHours = true,
  newsletter = DEFAULT_NEWSLETTER,
  openingHoursTitle = 'Mall Opening Hours',
  openingHours = DEFAULT_HOURS,
  navColumns = DEFAULT_NAV,
  logo,
  copyright = '©2026. All Rights Reserved.',
  legalLinks = DEFAULT_LEGAL,
  socialLinks = DEFAULT_SOCIAL,
  className,
  ...rest
}: FooterProps) => {

  const nl = { ...DEFAULT_NEWSLETTER, ...newsletter }
  const emailRef = useRef<HTMLInputElement>(null)

  const classes = ['ds-footer', `ds-footer--${theme}`, className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...rest}>

      {/* ── Newsletter bar ("Top") ─────────────────────────────────────── */}
      {showNewsletterBar && (
        <div className="ds-footer__top">
          <div className="ds-footer__top-text">
            <p className="ds-footer__top-title">{nl.title}</p>
            <p className="ds-footer__top-subtitle">{nl.subtitle}</p>
          </div>
          <div className="ds-footer__top-form">
            <input
              ref={emailRef}
              type="email"
              className="ds-footer__email-input"
              placeholder={nl.emailPlaceholder}
              aria-label={nl.emailPlaceholder}
            />
            <button
              type="button"
              className="ds-footer__subscribe-btn"
              onClick={() => nl.onSubscribe?.(emailRef.current?.value ?? '')}
            >
              {nl.subscribeLabel}
            </button>
          </div>
        </div>
      )}

      {/* ── Opening Hours ─────────────────────────────────────────────── */}
      {showOpeningHours && openingHours.length > 0 && (
        <div className="ds-footer__hours">
          <p className="ds-footer__hours-title">{openingHoursTitle}</p>
          <div className="ds-footer__hours-grid">
            {openingHours.map((group, gi) => (
              <div key={gi} className="ds-footer__hours-group">
                <p className="ds-footer__hours-group-title">{group.title}</p>
                <div className="ds-footer__hours-rows">
                  {group.rows.map((row, ri) => (
                    <div key={ri} className="ds-footer__hours-row-wrap">
                      <p className="ds-footer__hours-row">
                        <span className="ds-footer__hours-days">{row.days}</span>
                        {' '}
                        <span className="ds-footer__hours-time">{row.hours}</span>
                      </p>
                      {ri < group.rows.length - 1 && (
                        <hr className="ds-footer__hours-divider" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Navigation + Bottom ───────────────────────────────────────── */}
      <div className="ds-footer__nav">

        {/* Navigation columns ("sections") */}
        {navColumns.length > 0 && (
          <div className="ds-footer__sections">
            {navColumns.map((col, ci) => (
              <div key={ci} className="ds-footer__column">
                <p className="ds-footer__column-title">{col.title}</p>
                {col.links.map((link, li) => (
                  link.href ? (
                    <a
                      key={li}
                      href={link.href}
                      className="ds-footer__column-link"
                      onClick={link.onClick}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      key={li}
                      type="button"
                      className="ds-footer__column-link"
                      onClick={link.onClick}
                    >
                      {link.label}
                    </button>
                  )
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Bottom bar ("Bottom") */}
        <div className="ds-footer__bottom">

          {/* Legal links ("Privacy + Terms") */}
          {legalLinks.length > 0 && (
            <div className="ds-footer__legal">
              {legalLinks.map((link, li) => (
                link.href ? (
                  <a key={li} href={link.href} className="ds-footer__legal-link" onClick={link.onClick}>
                    {link.label}
                  </a>
                ) : (
                  <button key={li} type="button" className="ds-footer__legal-link" onClick={link.onClick}>
                    {link.label}
                  </button>
                )
              ))}
            </div>
          )}

          {/* Brand row: logo | copyright | social */}
          <div className="ds-footer__brand">
            <div className="ds-footer__logo">
              {logo}
            </div>
            <p className="ds-footer__copyright">{copyright}</p>
            <div className="ds-footer__social">
              {socialLinks.map((s, si) => {
                const Icon = SOCIAL_ICONS[s.platform]
                const content = (
                  <>
                    <span className="ds-footer__social-icon"><Icon /></span>
                    <span className="sr-only">{s.ariaLabel ?? s.platform}</span>
                  </>
                )
                return s.href ? (
                  <a
                    key={si}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-footer__social-btn"
                    aria-label={s.ariaLabel ?? s.platform}
                    onClick={s.onClick}
                  >
                    {content}
                  </a>
                ) : (
                  <button
                    key={si}
                    type="button"
                    className="ds-footer__social-btn"
                    aria-label={s.ariaLabel ?? s.platform}
                    onClick={s.onClick}
                  >
                    {content}
                  </button>
                )
              })}
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}
