import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { Navbar, NavbarMenu } from './'
import type { NavbarMenuRow } from './NavbarMenu'
import type { NavbarActionLink, NavbarColorMode } from './Navbar'
import { NavItem } from '../NavItem'
import type { DropdownColorMode } from '../Dropdown/Dropdown'

const Chevron = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14">
    <path
      d="M6 9l6 6 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const MapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2z" />
    <path d="M9 3v16M15 5v16" />
  </svg>
)

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" strokeLinecap="round" />
  </svg>
)

// Same SVG primitives as the Sidebar story — so the mobile drawer footer
// (which is a real <Sidebar>) renders an identical icon row to the standalone
// Sidebar component's playground.
const FlagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 22V4M4 4h13l-2 4 2 4H4" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
)

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 21a2 2 0 0 0 4 0" strokeLinecap="round" />
  </svg>
)

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
  </svg>
)

/**
 * String-keyed icon registry so the `actions` array in the Storybook controls
 * panel can stay plain JSON (icons can't be serialised as React nodes inside
 * an args control). Add a new entry here to make a new icon selectable.
 *
 * Mirrors the Sidebar story's registry on purpose: the navbar's mobile drawer
 * renders a real `<Sidebar>` with these icons in its footer, so keeping both
 * sets aligned makes the navbar drawer visually identical to the standalone
 * Sidebar showcase.
 */
const ICONS = {
  flag: <FlagIcon />,
  bell: <BellIcon />,
  search: <SearchIcon />,
  star: <StarIcon />,
  circle: <CircleIcon />,
  map: <MapIcon />,
} as const
type IconName = keyof typeof ICONS

/**
 * A navbar entry is one of:
 *   - { type: 'navItem', label, selected? }
 *       -> renders a <NavItem> link (no chevron).
 *   - { type: 'dropdown', label, rows, dropdownColorMode? }
 *       -> renders a <NavbarMenu> trigger that opens a <Dropdown>
 *          (chevron shown automatically).
 */
type LinkEntry =
  | { type: 'navItem'; label: string; selected?: boolean }
  | {
      type: 'dropdown'
      label: string
      /** Override the dropdown panel's color mode (defaults to navbar's). */
      dropdownColorMode?: DropdownColorMode
      rows: NavbarMenuRow[]
    }

/**
 * Editable shape for each action link in the Storybook controls panel.
 * `icon` is a string key into the ICONS registry above — the render fn
 * swaps it for the matching `<svg>` ReactNode.
 */
type ActionEntry = {
  /** Visible label. Leave empty for icon-only (then set `ariaLabel`). */
  label?: string
  /** Link target. Defaults to `'#'`. */
  href?: string
  /** Icon key from the ICONS registry (`'circle' | 'map' | 'search'`). */
  icon?: IconName
  /** Marks the link as the active route. */
  selected?: boolean
  /** Open in a new tab. */
  external?: boolean
  /** Required for icon-only links. */
  ariaLabel?: string
}

type PlaygroundArgs = {
  colorMode: NavbarColorMode
  links: LinkEntry[]
  /** Dynamic, user-editable list of action links (right side of the navbar). */
  actions: ActionEntry[]
  /** Logo image URL. Leave empty to hide the brand mark. */
  logoSrc: string
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Navigation/Navbar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Navbar

A responsive primary navigation surface — logo on the left, menu items in the
middle, action **links** on the right. On mobile (≤ 768 px) the items + actions
collapse behind a **burger menu** and re-render inside a real \`<Sidebar>\` slide-in
drawer (same component, same data — no duplication).

### Anatomy
- **Logo** (\`logo\`) — left-aligned brand mark. Polymorphic:
  - \`ReactNode\` (full control, e.g. inline SVG + text)
  - \`string\` (treated as a dynamic image \`src\`)
  - \`NavbarLogoConfig\` object — \`{ src, alt?, href?, height?, width? }\`
- **Items** (\`children\`) — center menubar of \`NavItem\` and/or \`NavbarMenu\` (dropdown) entries.
- **Actions** (\`actions\`) — right-aligned **links**. Polymorphic:
  - \`ReactNode\` — full control (icons, account chip, etc.).
  - \`NavbarActionLink[]\` — declarative, dynamic list rendered automatically.
    - **Icon-only** entries (no \`label\`) render as a bare \`<a>\` wrapping
      the icon — same centered-icon-row look as the standalone Sidebar's footer.
    - **Labeled** entries render as full \`NavItem\` chrome (icon + text).
- **Burger** — auto-rendered toggle button visible only on mobile.

### Dynamic actions

The \`actions\` prop accepts a config array so consumers can add / remove / reorder
links at runtime (e.g. from a CMS, auth state, or feature flags) without writing
any JSX:

\`\`\`tsx
<Navbar
  colorMode="dark"
  logo={{ src: '/brand.svg', alt: 'Acme', href: '/' }}
  actions={[
    // Icon-only (bare <a>) — matches the Sidebar footer look.
    { href: '/inbox',  iconLeft: <BellIcon />,   ariaLabel: 'Notifications' },
    { href: '/map',    iconLeft: <MapIcon />,    ariaLabel: 'Locations' },
    { href: '/search', iconLeft: <SearchIcon />, ariaLabel: 'Search' },
    // Add a \`label\` to render as a labeled NavItem instead.
    // { label: 'Sign in', href: '/login' },
  ]}
>
  {/* ...nav items... */}
</Navbar>
\`\`\`

Each entry supports: \`label\`, \`href\`, \`iconLeft\`, \`iconRight\`, \`selected\`,
\`onClick\`, \`external\`, \`ariaLabel\`, \`key\`.

> **Playground note.** In the Storybook controls panel, icons are referenced by
> a string key (\`'flag' | 'bell' | 'search' | 'star' | 'circle' | 'map'\`)
> instead of a React node so the args stay JSON-serialisable. The story render
> fn swaps each key for the matching SVG. In real code you'd pass the SVG
> (or icon component) directly as \`iconLeft\`.

### Mobile drawer
On viewports ≤ 768 px the burger toggle reveals a slide-in drawer that is a
real \`<Sidebar>\` component, auto-derived from the navbar's own \`children\`
and \`actions\` — so there's only one source of truth for the navigation data.
The same \`NavbarActionLink[]\` is forwarded straight through to
\`Sidebar.footer\` (the two interfaces are structurally identical), which
means icon-only actions get the Sidebar's bare-anchor icon row in the drawer
too. Pass a custom \`mobileMenu\` node to override.
### Theming
All colors come from the slate token set defined in
\`src/styles/tokens/_variables.scss\` (e.g.
\`$mapping-system-slate-background-secondary\`,
\`$mapping-system-slate-text-on-primary\`,
\`$mapping-system-focus-border-secondary\`). No hardcoded color values — swap
the token layer to retheme the component (and the Navbar's mobile drawer).
### Responsive behavior
| Viewport         | Layout                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------- |
| ≥ 1025 px        | Inline: logo · items · actions, full container padding.                                 |
| 769 – 1024 px    | Inline with tighter padding and action spacing.                                         |
| ≤ 768 px         | Burger menu: items + actions hidden; toggle reveals them stacked below the bar.         |

### Accessibility
- Renders inside a \`<nav>\` landmark with a localizable \`aria-label\` (default \`"Primary"\`).
- The items wrapper has \`role="menubar"\`.
- The burger button exposes \`aria-expanded\` and \`aria-controls\`.
- \`NavbarMenu\` triggers expose \`aria-haspopup="menu"\` + \`aria-expanded\`.
- The mobile drawer is a \`role="dialog"\` with \`aria-modal="true"\`.
- Action links with no visible label must set \`ariaLabel\`.
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<PlaygroundArgs>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground. Edit the **links** array to change the center menubar, and the **actions** array to change the right-side links. Each action defaults to **icon-only** with a dummy `href` you can edit in the Controls panel to wire it to a real route. Add a `label` to any entry to render text next to the icon. Resize the Storybook viewport below ~768 px to see the burger menu.',
      },
    },
  },
  args: {
    colorMode: 'dark',
    logoSrc: '/favicon.svg',
    links: [
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
          { kind: 'button', label: 'Talk to sales', variant: 'plain' },
        ],
      },
      { type: 'navItem', label: 'Community', selected: true },
      { type: 'navItem', label: 'Resources' },
      { type: 'navItem', label: 'Pricing' },
      { type: 'navItem', label: 'Contact' },
    ],
    // ⬇️  Icon-only action links with dummy `href`s. Edit `href` on any entry
    //     in the Storybook Controls panel to wire it to a real route. Add a
    //     `label` if you want a text label next to the icon.
    //     The icons + dummy links here are intentionally identical to the
    //     Sidebar story so the navbar bar, the mobile drawer footer (which
    //     is a real <Sidebar>), and the standalone Sidebar component all
    //     render the exact same icon row.
    actions: [
      { href: '#reports',       icon: 'flag',   ariaLabel: 'Reports' },
      { href: '#notifications', icon: 'bell',   ariaLabel: 'Notifications' },
      { href: '#search',        icon: 'search', ariaLabel: 'Search' },
    ],
  },
  argTypes: {
    colorMode: { control: 'inline-radio', options: ['light', 'dark'] },
    logoSrc: {
      control: 'text',
      description: 'Logo image URL (passed straight to the Navbar `logo` prop).',
    },
    links: {
      control: 'object',
      description:
        'Each entry is either { type: "navItem", label } (renders a NavItem — no chevron) ' +
        'or { type: "dropdown", label, dropdownColorMode?, rows } (renders a NavbarMenu trigger + ' +
        'Dropdown — chevron shown automatically). Rows mirror Dropdown variants: ' +
        '{ kind: "item" | "divider" | "button" | "custom", ... }.',
    },
    actions: {
      control: 'object',
      description:
        'Dynamic, user-editable list of action links rendered on the right of the navbar. ' +
        'Each entry: { label?, href?, icon?: "flag" | "bell" | "search" | "star" | "circle" | "map", selected?, external?, ariaLabel? }. ' +
        'Add / remove entries to add or remove links. Set `label` to "" + provide `ariaLabel` for icon-only. ' +
        'Set the whole array to `[]` to hide the actions slot.',
    },
  },
  render: ({ colorMode, links, actions, logoSrc }) => {
    // Resolve each editable action entry into a real NavbarActionLink by
    // swapping the string `icon` key for the matching SVG ReactNode from the
    // ICONS registry. Icons WITHOUT a matching key are silently dropped so a
    // typo doesn't crash the preview.
    const resolvedActions: NavbarActionLink[] = actions.map((a, i) => {
      const iconNode: ReactNode | undefined = a.icon ? ICONS[a.icon] : undefined
      return {
        key: i,
        label: a.label,
        href: a.href ?? '#',
        iconLeft: iconNode,
        selected: a.selected,
        external: a.external,
        ariaLabel: a.ariaLabel ?? (a.label ? undefined : a.icon),
      }
    })

    return (
      <Navbar
        colorMode={colorMode}
        logo={logoSrc || undefined}
        actions={resolvedActions}
      >
        {links.map((entry, i) => {
          if (entry.type === 'dropdown') {
            return (
              <NavbarMenu
                key={`${entry.label}-${i}`}
                label={entry.label}
                colorMode={colorMode}
                dropdownColorMode={entry.dropdownColorMode ?? colorMode}
                iconRight={<Chevron />}
                rows={entry.rows}
              />
            )
          }
          return (
            <NavItem
              key={`${entry.label}-${i}`}
              orientation="horizontal"
              colorMode={colorMode}
              label={entry.label}
              selected={entry.selected}
            />
          )
        })}
      </Navbar>
    )
  },
}
