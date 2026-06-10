import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { List, ListItem } from './List'

const description =
  'A structured content component used to organize and display related items in a clear and scannable format. Lists help users browse, compare, and navigate information efficiently while supporting various content types such as text, media, actions, metadata, or grouped collections.'

const getPageStyle = (theme: 'light' | 'dark' = 'light'): CSSProperties => ({
  backgroundColor: theme === 'dark' ? '#0a111a' : '#f5f5f5',
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

const PURPLE = '#9747FF'

const Diamond = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill={PURPLE} aria-hidden="true">
    <path d="M12 2 L16 6 L12 10 L8 6 Z M22 12 L18 16 L14 12 L18 8 Z M12 22 L8 18 L12 14 L16 18 Z M2 12 L6 8 L10 12 L6 16 Z" />
  </svg>
)

const groupsRowStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '32px',
}

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
  padding: '6px 14px',
  width: '320px',
}

const previewSectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '60px',
  opacity: 0.55,
}

const previewLabelStyle: CSSProperties = {
  fontSize: '24px',
  fontWeight: 600,
}

const previewBoxStyle: CSSProperties = {
  border: '1px dashed currentColor',
  borderRadius: '6px',
  padding: '20px 16px',
  width: '320px',
}

const SampleListItems = () => (
  <>
    <ListItem variant="document" label="Document name" meta="270 Kbs" />
    <ListItem variant="user" label="Username" actionLabel="Add" />
    <ListItem variant="numbered" index={1} label="List item" />
    <ListItem variant="bulleted" label="List item" />
    <ListItem variant="card" label="List item" description="Description" />
  </>
)

const meta: Meta<typeof List> = {
  title: 'Components/List/Playground',
  component: List,
  parameters: { layout: 'fullscreen' },
  args: { theme: 'light', bordered: false },
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
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
          <SampleListItems />
        </List>
      </div>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof List>

export const Light: Story = { args: { theme: 'light' } }
export const Dark: Story = { args: { theme: 'dark' } }
export const Bordered: Story = { args: { theme: 'light', bordered: true } }

export const DocumentItem: Story = {
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <div style={{ width: '320px' }}>
        <List {...args}>
          <ListItem variant="document" label="Document name" meta="270 Kbs" />
          <ListItem variant="document" label="Annual report" meta="1.2 MB" />
          <ListItem variant="document" label="Brand guidelines" meta="540 Kbs" />
        </List>
      </div>
    </div>
  ),
}

export const UserItem: Story = {
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <div style={{ width: '320px' }}>
        <List {...args}>
          <ListItem variant="user" label="Username" actionLabel="Add" />
          <ListItem variant="user" label="Jane Doe" actionLabel="Add" />
          <ListItem variant="user" label="John Smith" actionLabel="Add" />
        </List>
      </div>
    </div>
  ),
}

export const NumberedItem: Story = {
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <div style={{ width: '320px' }}>
        <List {...args}>
          <ListItem variant="numbered" index={1} label="First item" />
          <ListItem variant="numbered" index={2} label="Second item" />
          <ListItem variant="numbered" index={3} label="Third item" />
        </List>
      </div>
    </div>
  ),
}

export const BulletedItem: Story = {
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <div style={{ width: '320px' }}>
        <List {...args}>
          <ListItem variant="bulleted" label="First item" />
          <ListItem variant="bulleted" label="Second item" />
          <ListItem variant="bulleted" label="Third item" />
        </List>
      </div>
    </div>
  ),
}

export const CardItem: Story = {
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <div style={{ width: '320px' }}>
        <List {...args}>
          <ListItem variant="card" label="List item" description="Description" />
          <ListItem variant="card" label="Another item" description="With supporting text" />
        </List>
      </div>
    </div>
  ),
}

const ShowcaseLightTemplate = () => (
  <div style={getPageStyle('light')}>
    <header style={headerStyle}>
      <h1 style={titleStyle}>Lists</h1>
      <p style={descriptionStyle}>{description}</p>
    </header>

    <div style={groupsRowStyle}>
      <div style={groupStyle}>
        <div style={groupLabelStyle}>
          <Diamond /> List Item
        </div>
        <div style={dashedBoxStyle}>
          <List theme="light">
            <SampleListItems />
          </List>
        </div>
      </div>

      <div style={groupStyle}>
        <div style={groupLabelStyle}>
          <Diamond /> List Item Animation
        </div>
        <div style={dashedBoxStyle}>
          <List theme="light">
            <ListItem variant="document" label="Document name" meta="270 Kbs" />
            <ListItem
              variant="document"
              label="Document name"
              meta="270 Kbs"
              data-highlighted="true"
            />
            <ListItem variant="document" label="Document name" meta="270 Kbs" />
          </List>
        </div>
      </div>
    </div>

    <div style={previewSectionStyle}>
      <div style={previewLabelStyle}>Preview</div>
      <div style={previewBoxStyle}>
        <List theme="light">
          <ListItem variant="document" label="Document name" meta="270 Kbs" />
        </List>
      </div>
    </div>
  </div>
)

const ShowcaseDarkTemplate = () => (
  <div style={getPageStyle('dark')}>
    <header style={headerStyle}>
      <h1 style={titleStyle}>Lists: Dark</h1>
      <p style={descriptionStyle}>{description}</p>
    </header>

    <div style={{ width: '320px' }}>
      <List theme="dark">
        <ListItem variant="document" label="Document name" meta="270 Kbs" />
        <ListItem variant="user" label="Username" actionLabel="Add" />
        <ListItem variant="numbered" index={1} label="List item" />
        <ListItem variant="bulleted" label="List item" />
      </List>
    </div>

    <div style={previewSectionStyle}>
      <div style={previewLabelStyle}>Preview</div>
      <div style={previewBoxStyle}>
        <List theme="dark">
          <ListItem variant="document" label="Document name" meta="270 Kbs" />
        </List>
      </div>
    </div>
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
