import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search } from './Search'

const description =
  'An enhanced search interaction pattern that provides users with advanced discovery and filtering capabilities beyond a standard search field. Expanded Search can include autocomplete suggestions, recent searches, categorized results, filters, recommendations, and contextual guidance to help users quickly find relevant content, products, or destinations within the experience.'

const getPageStyle = (theme: 'light' | 'dark' = 'light'): CSSProperties => ({
  backgroundColor:
    theme === 'dark'
      ? '#0a111a'
      : 'var(--sds-color-white-800, rgba(255, 255, 255, 0.9))',
  boxSizing: 'border-box',
  color: theme === 'dark' ? '#ffffff' : '#1f1f1f',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  minHeight: '100vh',
  padding: '40px clamp(24px, 4vw, 56px)',
  width: '100%',
})

const headerStyle: CSSProperties = {
  borderBottom: '1px solid currentColor',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  opacity: 0.95,
  paddingBottom: '24px',
}

const titleStyle: CSSProperties = {
  fontSize: '40px',
  fontWeight: 700,
  margin: 0,
}

const descriptionStyle: CSSProperties = {
  fontSize: '14px',
  lineHeight: 1.5,
  margin: 0,
  maxWidth: '640px',
  opacity: 0.85,
}

const meta: Meta<typeof Search> = {
  title: 'Components/Search (Mohamad oueidat)',
  component: Search,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    theme: 'light',
    size: 'default',
    placeholder: 'Search for something',
    clearLabel: 'Clear Search',
    showClear: true,
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'compact'],
    },
    placeholder: { control: 'text' },
    clearLabel: { control: 'text' },
    showClear: { control: 'boolean' },
  },
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>
          Expanded Search{args.theme === 'dark' ? ': Dark' : ''}
        </h1>
        <p style={descriptionStyle}>{description}</p>
      </header>
      <Search {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: { theme: 'light', size: 'default' },
}
