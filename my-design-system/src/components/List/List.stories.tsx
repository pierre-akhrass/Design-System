import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { List, ListItem } from './List'

const description =
  'A structured content component used to organize and display related items in a clear and scannable format. Lists help users browse, compare, and navigate information efficiently while supporting various content types such as text, media, actions, metadata, or grouped collections.'

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
  maxWidth: '420px',
  opacity: 0.85,
}

const meta: Meta<typeof List> = {
  title: 'Components/List (Mohamad oueidat)',
  component: List,
  excludeStories: /^(Playground|Light|Dark|Bordered|DocumentItem|UserItem|NumberedItem|BulletedItem|CardItem|ShowcaseLight|ShowcaseDark)$/,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    theme: 'light',
    bordered: false,
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    bordered: { control: 'boolean' },
  },
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Lists{args.theme === 'dark' ? ': Dark' : ''}</h1>
        <p style={descriptionStyle}>{description}</p>
      </header>
      <div style={{ width: '320px' }}>
        <List {...args}>
          <ListItem variant="document" label="Document name" meta="270 Kbs" />
          <ListItem variant="user" label="Username" actionLabel="Add" />
          <ListItem variant="numbered" index={1} label="List item" />
          <ListItem variant="bulleted" label="List item" />
        </List>
      </div>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof List>

export const Default: Story = {
  args: { theme: 'light', bordered: false },
}
