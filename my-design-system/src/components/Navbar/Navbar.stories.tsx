// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Navbar/Navbar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navbar, NavbarMenu } from './'
import type { NavbarMenuRow } from './NavbarMenu'
import { NavItem } from '../NavItem'
import type { DropdownColorMode } from '../Dropdown/Dropdown'
import type { NavbarColorMode } from './Navbar'

const Logo = ({ colorMode }: { colorMode: NavbarColorMode }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 800,
      fontSize: 20,
      color: colorMode === 'dark' ? '#fff' : '#111',
    }}
  >
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 2l8 8-8 8-8-8 8-8z" fill="#3ec1ff" />
      <path d="M16 14l8 8-8 8-8-8 8-8z" fill="#3ec1ff" opacity="0.85" />
    </svg>
    Al-Futtaim
  </span>
)
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
 * A navbar entry is explicitly one of the two existing components:
 *
 *  - { type: 'navItem', label, selected? }
 *      -> renders a <NavItem> link (no chevron)
 *
 *  - { type: 'dropdown', label, dropdownColorMode?, rows }
 *      -> renders a <NavItem> trigger that opens a <Dropdown>
 *         (chevron is shown automatically).
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
  showLogo: boolean
  showActions: boolean
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Components/Navbar',
  parameters: { layout: 'fullscreen' },
}
export default meta

type Story = StoryObj<PlaygroundArgs>

export const Playground: Story = {
  args: {
    colorMode: 'dark',
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
    showLogo: true,
    showActions: true,
  },
  argTypes: {
    colorMode: { control: 'inline-radio', options: ['light', 'dark'] },
    links: {
      control: 'object',
      description:
        'Each entry is either { type: "navItem", label } (renders a NavItem — no chevron) ' +
        'or { type: "dropdown", label, dropdownColorMode?, rows } (renders a NavItem trigger + ' +
        'Dropdown — chevron shown automatically). Rows mirror Dropdown variants: ' +
        '{ kind: "item" | "divider" | "button" | "custom", ... }.',
    },
    showLogo: { control: 'boolean' },
    showActions: { control: 'boolean' },
  },
  render: ({ colorMode, links, showLogo, showActions }) => (
    <Navbar
      colorMode={colorMode}
      logo={showLogo ? <Logo colorMode={colorMode} /> : undefined}
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

export const Default: Story = {
  render: () => (
    <Navbar
      colorMode="dark"
      logo={<Logo colorMode="dark" />}
      actions={
        <>
          <CircleIcon />
          <MapIcon />
          <SearchIcon />
        </>
      }
    >
      <NavbarMenu
        label="Products"
        colorMode="dark"
        iconRight={<Chevron />}
        rows={[
          { kind: 'item', label: 'Overview' },
          { kind: 'item', label: 'Features' },
          { kind: 'item', label: 'Integrations' },
          { kind: 'divider' },
          { kind: 'item', label: 'Changelog' },
          { kind: 'button', label: 'Get a demo', variant: 'filled' },
        ]}
      />
      <NavbarMenu
        label="Solutions"
        colorMode="dark"
        iconRight={<Chevron />}
        rows={[
          { kind: 'item', label: 'For Teams' },
          { kind: 'item', label: 'For Enterprise' },
          { kind: 'item', label: 'For Startups' },
          { kind: 'divider' },
          { kind: 'button', label: 'Compare plans', variant: 'outlined' },
          { kind: 'button', label: 'Talk to sales', variant: 'plain' },
        ]}
      />
      {['Community', 'Resources', 'Pricing', 'Contact'].map((label, i) => (
        <NavItem
          key={label}
          orientation="horizontal"
          colorMode="dark"
          label={label}
          selected={i === 0}
        />
      ))}
    </Navbar>
  ),
}

export const Light: Story = {
  render: () => (
    <Navbar
      colorMode="light"
      logo={<Logo colorMode="light" />}
      actions={
        <>
          <CircleIcon />
          <MapIcon />
          <SearchIcon />
        </>
      }
    >
      <NavbarMenu
        label="Products"
        colorMode="light"
        iconRight={<Chevron />}
        rows={[
          { kind: 'item', label: 'Overview' },
          { kind: 'item', label: 'Features' },
          { kind: 'item', label: 'Integrations' },
          { kind: 'divider' },
          { kind: 'item', label: 'Changelog' },
          { kind: 'button', label: 'Get a demo', variant: 'filled' },
        ]}
      />
      <NavbarMenu
        label="Solutions"
        colorMode="light"
        iconRight={<Chevron />}
        rows={[
          { kind: 'item', label: 'For Teams' },
          { kind: 'item', label: 'For Enterprise' },
          { kind: 'item', label: 'For Startups' },
        ]}
      />
      {['Community', 'Resources', 'Pricing', 'Contact'].map((label, i) => (
        <NavItem
          key={label}
          orientation="horizontal"
          colorMode="light"
          label={label}
          selected={i === 0}
        />
      ))}
    </Navbar>
  ),
}
