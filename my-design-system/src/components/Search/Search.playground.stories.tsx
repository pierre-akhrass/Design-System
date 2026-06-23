import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search } from './Search'

const pageStyle: CSSProperties = {
  minHeight: '100vh',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
  background: '#f5f7fa',
}

const darkPageStyle: CSSProperties = {
  ...pageStyle,
  background: '#141f2e',
}

const meta: Meta<typeof Search> = {
  title: 'Components/Search/Playground',
  component: Search,
  parameters: { layout: 'fullscreen' },
  args: {
    size: 'medium',
    valueType: 'placeholder',
    value: 'Search',
    iconLeft: true,
    iconRight: true,
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['medium', 'small'] },
    valueType: { control: 'inline-radio', options: ['default', 'placeholder'] },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
    value: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Search>

export const Playground: Story = {
  render: (args) => (
    <div style={pageStyle}>
      <h1 style={{ margin: 0 }}>Search Playground</h1>
      <Search {...args} />
    </div>
  ),
}

export const Medium: Story = {
  args: { size: 'medium', valueType: 'placeholder', value: 'Search' },
}

export const Small: Story = {
  args: { size: 'small', valueType: 'placeholder', value: 'Search' },
}

export const DefaultValueType: Story = {
  args: { valueType: 'default', value: 'Current value' },
}

export const DarkShowcase: Story = {
  args: { size: 'medium', valueType: 'placeholder', value: 'Search' },
  render: (args) => (
    <div style={darkPageStyle}>
      <h1 style={{ margin: 0, color: '#ffffff' }}>Search: Dark</h1>
      <Search {...args} />
    </div>
  ),
}
