import { Footer } from '../../Footer/Footer'
import type { FooterNavColumn, OpeningHourGroup, SocialLink, FooterLink } from '../../Footer/Footer'
import AlFuttaimLogo from '../../../assets/logo-al-futtaim.svg?react'
import './FooterShowcase.scss'

// ─── Icons ────────────────────────────────────────────────────────────────────

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
    <path d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.751.751 0 01-1.042-.018.751.751 0 01-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
    <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
  </svg>
)

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
  { platform: 'linkedin',  href: '#', ariaLabel: 'LinkedIn' },
  { platform: 'instagram', href: '#', ariaLabel: 'Instagram' },
  { platform: 'youtube',   href: '#', ariaLabel: 'YouTube' },
  { platform: 'x',         href: '#', ariaLabel: 'X (Twitter)' },
]

const LEGAL: FooterLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
]

// ─── Prop table ───────────────────────────────────────────────────────────────

interface PropEntry { name: string; type: string; description: string }

const PropsTable = ({ rows }: { rows: PropEntry[] }) => (
  <div className="ft-showcase__props-table">
    {rows.map((row) => (
      <div key={row.name} className="ft-showcase__prop-row">
        <code className="ft-showcase__prop-name">{row.name}</code>
        <span className="ft-showcase__prop-type">{row.type}</span>
        <span className="ft-showcase__prop-desc">{row.description}</span>
      </div>
    ))}
  </div>
)

const FOOTER_PROPS: PropEntry[] = [
  { name: 'showNewsletterBar', type: 'boolean',           description: 'Show/hide the "Top" newsletter subscription bar' },
  { name: 'showOpeningHours',  type: 'boolean',           description: 'Show/hide the "Opening Hours" panel' },
  { name: 'newsletter',        type: 'FooterNewsletterProps', description: 'title, subtitle, placeholder, label + onSubscribe(email) callback' },
  { name: 'openingHoursTitle', type: 'string',            description: 'Heading above the hours grid' },
  { name: 'openingHours',      type: 'OpeningHourGroup[]', description: 'Up to 4 groups, each with a title and 2 rows (days + hours)' },
  { name: 'navColumns',        type: 'FooterNavColumn[]', description: 'Up to 5 nav columns. Each: title + links[]. Links support href or onClick.' },
  { name: 'logo',              type: 'ReactNode',         description: 'Logo slot — pass any <img>, SVG, or component' },
  { name: 'copyright',         type: 'string',            description: 'Copyright line in the bottom bar' },
  { name: 'legalLinks',        type: 'FooterLink[]',      description: '"Privacy + Terms" link row. Each: label + href or onClick.' },
  { name: 'socialLinks',       type: 'SocialLink[]',      description: 'Social buttons. Platforms: linkedin | instagram | youtube | x' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export const FooterShowcase = () => (
  <section className="ft-showcase" aria-labelledby="footer-showcase-title">

    {/* Header */}
    <header className="ft-showcase__header">
      <span className="ft-showcase__badge">Component</span>
      <h2 className="ft-showcase__title" id="footer-showcase-title">Footer</h2>
      <p className="ft-showcase__description">
        A fully data-driven, four-section footer. Every text string, link, and callback is
        controlled by the parent — no content is hardcoded. All four sections can be toggled
        independently, and the bottom bar accepts a free logo slot, custom legal links, and
        any combination of social platforms.
      </p>
    </header>

    {/* Section overview */}
    <div className="ft-showcase__block">
      <div className="ft-showcase__block-header">
        <h3 className="ft-showcase__block-title">Section Map</h3>
        <p className="ft-showcase__block-subtitle">
          Four independently controlled sections from top to bottom, matching the Figma layer names.
        </p>
      </div>
      <div className="ft-showcase__section-map">
        {[
          { fig: '"Top"',           prop: 'showNewsletterBar', desc: 'Newsletter subscription bar with email input and button' },
          { fig: '"Opening Hours"', prop: 'showOpeningHours',  desc: 'Timing grid with up to 4 columns of day-range rows' },
          { fig: '"sections"',      prop: 'navColumns',        desc: 'Up to 5 nav columns, each with a category title and links' },
          { fig: '"Bottom"',        prop: 'logo / copyright / legalLinks / socialLinks', desc: 'Brand row + legal links + social icons' },
        ].map(({ fig, prop, desc }) => (
          <div key={prop} className="ft-showcase__section-row">
            <code className="ft-showcase__section-fig">{fig}</code>
            <code className="ft-showcase__section-prop">{prop}</code>
            <span className="ft-showcase__section-desc">{desc}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Full footer live demo */}
    <div className="ft-showcase__block">
      <div className="ft-showcase__block-header">
        <h3 className="ft-showcase__block-title">Full Footer</h3>
        <p className="ft-showcase__block-subtitle">
          All four sections enabled with real nav data, opening hours, and social links.
        </p>
      </div>
      <div className="ft-showcase__footer-canvas">
        <Footer
          navColumns={NAV_COLUMNS}
          openingHours={OPENING_HOURS}
          legalLinks={LEGAL}
          socialLinks={SOCIAL}
          copyright="©Ogilvy 2026. All Rights Reserved. Designed by OgilvyOne"
          logo={<AlFuttaimLogo className="ft-showcase__footer-logo" aria-label="Al-Futtaim" />}
        />
      </div>
    </div>

    {/* Props reference */}
    <div className="ft-showcase__block">
      <div className="ft-showcase__block-header">
        <h3 className="ft-showcase__block-title">Props Reference</h3>
      </div>
      <PropsTable rows={FOOTER_PROPS} />
    </div>

    {/* CTA */}
    <div className="ft-showcase__cta">
      <div className="ft-showcase__cta-text">
        <span className="ft-showcase__cta-heading">
          Explore in Storybook <ExternalLinkIcon />
        </span>
        <span className="ft-showcase__cta-body">
          Six stories cover every combination — full footer, no newsletter bar, no hours,
          custom newsletter content, logo slot, and custom social links.
        </span>
      </div>
      <a
        href="http://localhost:6006/?path=/story/components-footer--default"
        target="_blank"
        rel="noopener noreferrer"
        className="ft-showcase__cta-link"
      >
        Open Storybook <ArrowRightIcon />
      </a>
    </div>

  </section>
)
