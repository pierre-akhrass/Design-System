import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavItem } from './NavItem'

const HomeIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
    <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11z" fill="currentColor" />
  </svg>
)
const ChevronIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14">
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const meta: Meta<typeof NavItem> = {
  title: 'Components/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  args: {
    label: 'Tier 1 Label',
    state: 'default',
    orientation: 'vertical',
    level: 'parent',
    hierarchy: 'tier-1',
    shape: 'pill',
    colorMode: 'light',
    selected: false,
  },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'hover', 'active'] },
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
    level: { control: 'inline-radio', options: ['parent', 'nested'] },
    hierarchy: { control: 'inline-radio', options: ['tier-1', 'tier-2'] },
    shape: { control: 'inline-radio', options: ['pill', 'line'] },
    colorMode: { control: 'inline-radio', options: ['light', 'dark'] },
    selected: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Navigation item primitive used in menus and nav bars with hierarchy, orientation, and state styling.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof NavItem>

export const Playground: Story = {}

export const WithIcons: Story = {
  args: {
    iconLeft: <HomeIcon />,
    iconRight: <ChevronIcon />,
  },
}

const colWrap: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minWidth: 220,
}
const colTitle: CSSProperties = {
  fontFamily: "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#5b6675',
}

export const VerticalMatrix: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <div style={colWrap}>
        <div style={colTitle}>Parent · Pill</div>
        <NavItem label="Tier 1 Label" state="default" />
        <NavItem label="Tier 1 Label" state="hover" />
        <NavItem label="Tier 1 Label" state="active" />
      </div>
      <div style={colWrap}>
        <div style={colTitle}>Nested · Pill</div>
        <NavItem label="Tier 1 Nested" level="nested" state="default" />
        <NavItem label="Tier 1 Nested" level="nested" state="hover" />
        <NavItem label="Tier 1 Nested" level="nested" state="active" />
      </div>
      <div style={colWrap}>
        <div style={colTitle}>Tier 2</div>
        <NavItem label="Tier 2 Label" hierarchy="tier-2" state="default" />
        <NavItem label="Tier 2 Label" hierarchy="tier-2" state="hover" />
        <NavItem label="Tier 2 Label" hierarchy="tier-2" state="active" />
      </div>
    </div>
  ),
}

export const HorizontalShapes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <NavItem orientation="horizontal" shape="pill" label="Default" />
        <NavItem orientation="horizontal" shape="pill" label="Hover" state="hover" />
        <NavItem orientation="horizontal" shape="pill" label="Active" state="active" />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <NavItem orientation="horizontal" shape="line" label="Default" />
        <NavItem orientation="horizontal" shape="line" label="Hover" state="hover" />
        <NavItem orientation="horizontal" shape="line" label="Active" state="active" />
      </div>
    </div>
  ),
}

export const DarkMode: Story = {
  parameters: {
    controls: { disable: true },
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div style={{ background: '#141f2e', padding: 24, ...colWrap }}>
      <NavItem colorMode="dark" label="Default" />
      <NavItem colorMode="dark" label="Hover" state="hover" />
      <NavItem colorMode="dark" label="Active" state="active" />
      <NavItem colorMode="dark" label="Selected" selected />
    </div>
  ),
}
