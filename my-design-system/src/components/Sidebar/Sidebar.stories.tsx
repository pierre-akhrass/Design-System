import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Sidebar,
  SidebarItem,
  SidebarNestedItem,
  SidebarTier2Item,
  SidebarCategory,
  SidebarDivider,
} from './Sidebar'
import type { SidebarColorMode } from './Sidebar'

const Logo = ({ colorMode }: { colorMode: SidebarColorMode }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 900,
      fontSize: 24,
      color: colorMode === 'dark' ? '#fff' : '#111',
    }}
  >
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 2l8 8-8 8-8-8 8-8z" fill="currentColor" />
      <path d="M16 14l8 8-8 8-8-8 8-8z" fill="currentColor" opacity="0.7" />
    </svg>
    Al-Futtaim
  </span>
)

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
  </svg>
)

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

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" strokeLinecap="round" />
  </svg>
)

type PlaygroundArgs = {
  colorMode: SidebarColorMode
  showLogo: boolean
  showFooter: boolean
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Navigation/Sidebar',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Sidebar

A card-style vertical primary-navigation surface for app shells, dashboards, and admin
layouts. Composes the existing \`NavItem\` with **expandable Tier 1 groups**, **category
headings**, **dividers**, **standalone Tier 2 items**, and a pinned **footer** slot.

### Anatomy
- **Logo** — brand mark at the top of the card.
- **SidebarItem** — Tier 1 entry; renders a chevron and toggles its nested children when any are provided.
- **SidebarNestedItem** — child of a \`SidebarItem\` (Tier 1 + Nested NavItem).
- **SidebarCategory** — small uppercase heading (e.g. *"CATEGORY TITLE"*).
- **SidebarDivider** — thin horizontal separator.
- **SidebarTier2Item** — standalone Tier 2 row (used near the footer).
- **Footer** — pinned bottom slot for action icons (search, notifications, etc.).

### Usage

\`\`\`tsx
import {
  Sidebar,
  SidebarItem,
  SidebarNestedItem,
  SidebarTier2Item,
  SidebarCategory,
  SidebarDivider,
} from '@company/design-system'

<Sidebar logo={<Brand />} footer={<><Flag /><Bell /><Search /></>}>
  <SidebarItem iconLeft={<Star />} label="Tier 1 Label" />
  <SidebarItem iconLeft={<Star />} label="Tier 1 Label" />
  <SidebarItem iconLeft={<Star />} label="Tier 1 Label" defaultOpen>
    <SidebarNestedItem label="Tier 1 Nested" />
    <SidebarNestedItem label="Tier 1 Nested" />
  </SidebarItem>

  <SidebarDivider />

  <SidebarCategory>Category Title</SidebarCategory>
  <SidebarItem iconLeft={<Star />} label="Tier 1 Label" />
  <SidebarItem iconLeft={<Star />} label="Tier 1 Label" />
  <SidebarItem iconLeft={<Star />} label="Tier 1 Label">
    <SidebarNestedItem label="Tier 1 Nested" />
    <SidebarNestedItem label="Tier 1 Nested" />
  </SidebarItem>

  <SidebarDivider />

  <SidebarTier2Item label="Tier 2 Label" />
  <SidebarTier2Item label="Tier 2 Label" />
  <SidebarTier2Item label="Tier 2 Label" />
</Sidebar>
\`\`\`

### Theming
Colors come from the global "Selection colors" CSS custom properties defined in
\`src/styles/global.scss\`. Override them on \`:root\` or a section to retheme every
component that consumes them (Sidebar, NavItem, Dropdown, Navbar, …).
\`\`\`css
--sds-color-text-default-default
--sds-color-background-default-default
--sds-color-background-default-tertiary
--sds-color-border-brand-secondary
\`\`\`
### Accessibility
- Rendered inside an \`<aside>\` landmark with a localizable \`aria-label\` (default \`"Sidebar"\`).
- The body is wrapped in a \`<nav>\`.
- Expandable Tier 1 triggers expose \`aria-expanded\`.
- Dividers carry \`role="separator"\`.
- Child rows are real \`<a>\` elements (via \`NavItem\`), so keyboard and screen-reader
  navigation work out of the box.
        `.trim(),
      },
    },
  },
  argTypes: {
    colorMode: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Light or dark surface.',
    },
    showLogo: { control: 'boolean', description: 'Show the brand mark at the top.' },
    showFooter: { control: 'boolean', description: 'Show the bottom action icons.' },
  },
}
export default meta

type Story = StoryObj<PlaygroundArgs>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground matching the Figma "Sidebar" specimen. Toggle the logo and footer, switch color mode, and expand the chevron groups to reveal nested items.',
      },
    },
  },
  args: {
    colorMode: 'light',
    showLogo: true,
    showFooter: true,
  },
  render: ({ colorMode, showLogo, showFooter }) => (
    <Sidebar
      colorMode={colorMode}
      logo={showLogo ? <Logo colorMode={colorMode} /> : undefined}
      footer={
        showFooter ? (
          <>
            <FlagIcon />
            <BellIcon />
            <SearchIcon />
          </>
        ) : undefined
      }
    >
      <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" />
      <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" />
      <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" defaultOpen>
        <SidebarNestedItem label="Tier 1 Nested" />
        <SidebarNestedItem label="Tier 1 Nested" />
      </SidebarItem>

      <SidebarDivider />

      <SidebarCategory>Category Title</SidebarCategory>
      <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" />
      <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" />
      <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" defaultOpen>
        <SidebarNestedItem label="Tier 1 Nested" />
        <SidebarNestedItem label="Tier 1 Nested" />
      </SidebarItem>

      <SidebarDivider />

      <SidebarTier2Item label="Tier 2 Label" />
      <SidebarTier2Item label="Tier 2 Label" />
      <SidebarTier2Item label="Tier 2 Label" />
    </Sidebar>
  ),
}
