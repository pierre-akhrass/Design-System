import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navbar, NavbarMenu } from './'
import type { NavbarMenuRow } from './NavbarMenu'
import { NavItem } from '../NavItem'
import type { DropdownColorMode } from '../Dropdown/Dropdown'
import type { NavbarColorMode } from './Navbar'

const Chevron = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14">
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

type PlaygroundArgs = {
  colorMode: NavbarColorMode
  links: LinkEntry[]
  /** Logo image URL. Leave empty to hide the brand mark. */
  logoSrc: string
  showActions: boolean
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
middle, action icons on the right. On mobile (≤ 768 px) the items + actions
collapse behind a **burger menu** and re-render as a stacked, full-width panel
below the bar.

### Anatomy
- **Logo** — left-aligned brand mark (\`logo\` slot).
- **Items** — center menubar of \`NavItem\` and/or \`NavbarMenu\` (dropdown) entries (\`children\`).
- **Actions** — right-aligned icons / account / search (\`actions\` slot).
- **Burger** — auto-rendered toggle button visible only on mobile.

### Responsive behavior

| Viewport         | Layout                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------- |
| ≥ 1025 px        | Inline: logo · items · actions, full container padding.                                 |
| 769 – 1024 px    | Inline with tighter padding and action spacing.                                         |
| ≤ 768 px         | Burger menu: items + actions hidden; toggle reveals them stacked below the bar.         |

When the burger is open on mobile, \`NavbarMenu\` dropdown panels render
**inline** (static positioning, full-width) instead of as floating panels, so
they never overflow the viewport.

### Usage

\`\`\`tsx
import { Navbar, NavbarMenu, NavItem } from '@company/design-system'

<Navbar
  colorMode="dark"
  logo={<Brand />}
  actions={<><Search /><Account /></>}
>
  <NavbarMenu
    label="Products"
    rows={[
      { kind: 'item',    label: 'Overview' },
      { kind: 'item',    label: 'Features' },
      { kind: 'divider' },
      { kind: 'button',  label: 'Get a demo', variant: 'filled' },
    ]}
  />
  <NavItem orientation="horizontal" label="Pricing" />
  <NavItem orientation="horizontal" label="Contact" />
</Navbar>
\`\`\`

### Variants

| Prop          | Values            | Purpose                                          |
| ------------- | ----------------- | ------------------------------------------------ |
| \`colorMode\`   | \`light\` · \`dark\` | Surface color mode.                              |
| \`logo\`        | \`ReactNode\`       | Brand mark (left).                               |
| \`children\`    | \`ReactNode\`       | Menu items (center).                             |
| \`actions\`     | \`ReactNode\`       | Action icons (right).                            |
| \`ariaLabel\`   | \`string\`          | Accessible label for the \`<nav>\` landmark.       |

### Theming
Colors inherit from the global "Selection colors" CSS variables defined in
\`src/styles/global.scss\`. Override them on \`:root\` (or a section) to retheme
the navbar — no component edits required.

\`\`\`css
--sds-color-text-default-default
--sds-color-background-default-default
--sds-color-background-default-tertiary
--sds-color-border-brand-secondary
\`\`\`

### Accessibility
- Renders inside a \`<nav>\` landmark with a localizable \`aria-label\` (default \`"Primary"\`).
- The items wrapper has \`role="menubar"\`.
- The burger button exposes \`aria-expanded\` and \`aria-controls\` pointing at the items panel.
- \`NavbarMenu\` triggers expose \`aria-haspopup="menu"\` + \`aria-expanded\`.
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
          'Interactive playground. Edit the **links** array to add NavItem or NavbarMenu entries. Resize the Storybook viewport (or use the toolbar) below ~768 px to see the burger menu.',
      },
    },
  },
  args: {
    colorMode: 'dark',
    logoSrc: '/favicon.svg',
    showActions: true,
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
  },
  argTypes: {
    colorMode: { control: 'inline-radio', options: ['light', 'dark'] },
    logoSrc: {
      control: 'text',
      description: 'Logo image URL (passed straight to the Navbar `logo` prop).',
    },
    showActions: { control: 'boolean' },
    links: {
      control: 'object',
      description:
        'Each entry is either { type: "navItem", label } (renders a NavItem — no chevron) ' +
        'or { type: "dropdown", label, dropdownColorMode?, rows } (renders a NavbarMenu trigger + ' +
        'Dropdown — chevron shown automatically). Rows mirror Dropdown variants: ' +
        '{ kind: "item" | "divider" | "button" | "custom", ... }.',
    },
  },
  render: ({ colorMode, links, logoSrc, showActions }) => (
    <Navbar
      colorMode={colorMode}
      logo={logoSrc || undefined}
      actions={
        showActions ? (
          <>
            <CircleIcon />
            <MapIcon />
            <SearchIcon />
          </>
        ) : undefined
      }
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
  ),
}
