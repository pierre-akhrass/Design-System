import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ListItem } from '../List'
import {
  Search,
  SearchResults,
  SearchTab,
  SearchTabs,
} from './Search'

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

const PURPLE = '#9747FF'

const Diamond = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill={PURPLE} aria-hidden="true">
    <path d="M12 2 L16 6 L12 10 L8 6 Z M22 12 L18 16 L14 12 L18 8 Z M12 22 L8 18 L12 14 L16 18 Z M2 12 L6 8 L10 12 L6 16 Z" />
  </svg>
)

const groupStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}

const groupLabelStyle: CSSProperties = {
  alignItems: 'center',
  color: PURPLE,
  display: 'flex',
  fontSize: '20px',
  fontWeight: 700,
  gap: '8px',
}

const dashedBoxStyle: CSSProperties = {
  border: `1px dashed ${PURPLE}`,
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '24px 24px 48px',
}

const stackStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  width: '100%',
}

const SampleResults = () => (
  <SearchResults>
    {Array.from({ length: 5 }).map((_, i) => (
      <ListItem
        key={i}
        variant="card"
        label="List item"
        description="Description"
      />
    ))}
  </SearchResults>
)

interface SearchSetProps {
  theme: 'light' | 'dark'
}

const FullSearchSet = ({ theme }: SearchSetProps) => (
  <div style={stackStyle}>
    {/* 1. Default search alone */}
    <Search theme={theme} size="default" />

    {/* 2. Default search with tabs + results */}
    <Search theme={theme} size="default">
      <SearchTabs activeIndex={0}>
        <SearchTab label="Label" count={42} />
        <SearchTab label="Label" count={42} />
        <SearchTab label="Label" count={42} />
        <SearchTab label="Label" count={42} />
      </SearchTabs>
      <SampleResults />
    </Search>

    {/* 3. Compact search alone */}
    <div style={{ width: '60%' }}>
      <Search theme={theme} size="compact" />
    </div>

    {/* 4. Compact search with tabs + results */}
    <div style={{ width: '45%' }}>
      <Search theme={theme} size="compact">
        <SearchTabs activeIndex={0}>
          <SearchTab label="Label" count={42} />
          <SearchTab label="Label" count={42} />
          <SearchTab label="Label" count={42} />
        </SearchTabs>
        <SampleResults />
      </Search>
    </div>
  </div>
)

const meta: Meta<typeof Search> = {
  title: 'Components/Search/Playground',
  component: Search,
  parameters: { layout: 'fullscreen' },
  args: { theme: 'light', size: 'default' },
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    size: { control: 'inline-radio', options: ['default', 'compact'] },
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

export const Default: Story = { args: { theme: 'light', size: 'default' } }
export const Compact: Story = { args: { theme: 'light', size: 'compact' } }
export const Dark: Story = { args: { theme: 'dark', size: 'default' } }

export const WithTabs: Story = {
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <Search {...args}>
        <SearchTabs activeIndex={0}>
          <SearchTab label="Label" count={42} />
          <SearchTab label="Label" count={42} />
          <SearchTab label="Label" count={42} />
          <SearchTab label="Label" count={42} />
        </SearchTabs>
        <SampleResults />
      </Search>
    </div>
  ),
}

const ShowcaseLightTemplate = () => (
  <div style={getPageStyle('light')}>
    <header style={headerStyle}>
      <h1 style={titleStyle}>Expanded Search</h1>
      <p style={descriptionStyle}>{description}</p>
    </header>

    <div style={groupStyle}>
      <div style={groupLabelStyle}>
        <Diamond /> Expanded Search
      </div>
      <div style={dashedBoxStyle}>
        <FullSearchSet theme="light" />
      </div>
    </div>
  </div>
)

const ShowcaseDarkTemplate = () => (
  <div style={getPageStyle('dark')}>
    <header style={headerStyle}>
      <h1 style={titleStyle}>Expanded Search: Dark</h1>
      <p style={descriptionStyle}>{description}</p>
    </header>

    <FullSearchSet theme="dark" />
  </div>
)

export const ShowcaseLight: Story = {
  name: 'Showcase – Light',
  render: () => <ShowcaseLightTemplate />,
}

export const ShowcaseDark: Story = {
  name: 'Showcase – Dark',
  render: () => <ShowcaseDarkTemplate />,
}
