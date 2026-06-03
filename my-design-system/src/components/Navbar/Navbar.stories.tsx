import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navbar } from './Navbar'
import { NavItem } from '../NavItem'

const Logo = () => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 800,
      fontSize: 20,
      color: '#fff',
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

type PlaygroundArgs = {
  links: string[]
  selectedIndex: number
  showChevron: boolean
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
    links: ['Products', 'Solutions', 'Community', 'Resources', 'Pricing', 'Contact'],
    selectedIndex: 0,
    showChevron: true,
    showLogo: true,
    showActions: true,
  },
  argTypes: {
    links: {
      control: 'object',
      description: 'Edit this array in the Controls panel to add / remove / rename links dynamically.',
    },
    selectedIndex: { control: { type: 'number', min: -1, step: 1 } },
    showChevron: { control: 'boolean' },
    showLogo: { control: 'boolean' },
    showActions: { control: 'boolean' },
  },
  render: ({ links, selectedIndex, showChevron, showLogo, showActions }) => (
    <Navbar
      logo={showLogo ? <Logo /> : undefined}
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
      {links.map((label, i) => (
        <NavItem
          key={`${label}-${i}`}
          orientation="horizontal"
          colorMode="dark"
          label={label}
          iconRight={showChevron ? <Chevron /> : undefined}
          selected={i === selectedIndex}
        />
      ))}
    </Navbar>
  ),
}

export const Default: Story = {
  render: () => (
    <Navbar
      logo={<Logo />}
      actions={
        <>
          <CircleIcon />
          <MapIcon />
          <SearchIcon />
        </>
      }
    >
      {['Products', 'Solutions', 'Community', 'Resources', 'Pricing', 'Contact'].map((label, i) => (
        <NavItem
          key={label}
          orientation="horizontal"
          colorMode="dark"
          label={label}
          iconRight={<Chevron />}
          selected={i === 0}
        />
      ))}
    </Navbar>
  ),
}
