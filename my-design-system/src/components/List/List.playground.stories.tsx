import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel } from '../Carousel'
import { List, ListItem } from './List'

const description =
  'A structured content component used to organize and display related items in a clear and scannable format. Lists help users browse, compare, and navigate information efficiently while supporting various content types such as text, media, actions, metadata, or grouped collections.'

const headerWrapperStyle: CSSProperties = {
  borderBottom: '1px solid currentColor',
  marginBottom: '32px',
  opacity: 0.95,
  paddingBottom: '24px',
}

const breadcrumbStyle: CSSProperties = {
  fontSize: '14px',
  marginBottom: '16px',
  opacity: 0.85,
}

const titleStyle: CSSProperties = {
  fontSize: '40px',
  fontWeight: 700,
  margin: '0 0 16px',
}

const descriptionStyle: CSSProperties = {
  fontSize: '14px',
  lineHeight: 1.5,
  margin: 0,
  maxWidth: '420px',
  opacity: 0.85,
}

const previewWrapperStyle: CSSProperties = {
  border: '1px dashed rgba(127,127,127,0.5)',
  borderRadius: '8px',
  marginTop: '24px',
  padding: '16px',
  width: '320px',
}

const previewTitleStyle: CSSProperties = {
  fontSize: '12px',
  marginBottom: '12px',
  opacity: 0.6,
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
    <List {...args}>
      <SampleListItems />
    </List>
  ),
}

export default meta

type Story = StoryObj<typeof List>

export const Light: Story = { args: { theme: 'light' } }
export const Dark: Story = { args: { theme: 'dark' } }
export const Bordered: Story = { args: { theme: 'light', bordered: true } }

export const DocumentItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem variant="document" label="Document name" meta="270 Kbs" />
      <ListItem variant="document" label="Annual report" meta="1.2 MB" />
      <ListItem variant="document" label="Brand guidelines" meta="540 Kbs" />
    </List>
  ),
}

export const UserItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem variant="user" label="Username" actionLabel="Add" />
      <ListItem variant="user" label="Jane Doe" actionLabel="Add" />
      <ListItem variant="user" label="John Smith" actionLabel="Add" />
    </List>
  ),
}

export const NumberedItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem variant="numbered" index={1} label="First item" />
      <ListItem variant="numbered" index={2} label="Second item" />
      <ListItem variant="numbered" index={3} label="Third item" />
    </List>
  ),
}

export const BulletedItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem variant="bulleted" label="First item" />
      <ListItem variant="bulleted" label="Second item" />
      <ListItem variant="bulleted" label="Third item" />
    </List>
  ),
}

export const CardItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem variant="card" label="List item" description="Description" />
      <ListItem variant="card" label="Another item" description="With supporting text" />
    </List>
  ),
}

const ShowcaseTemplate = ({ theme }: { theme: 'light' | 'dark' }) => (
  <Carousel theme={theme} showNavigation={false}>
    <div style={{ width: '100%' }}>
      <div style={headerWrapperStyle}>
        <div style={breadcrumbStyle}>Foundation / Lists</div>
        <h1 style={titleStyle}>Lists{theme === 'dark' ? ': Dark' : ''}</h1>
        <p style={descriptionStyle}>{description}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ width: '320px' }}>
          <List theme={theme} bordered={theme === 'light'}>
            <SampleListItems />
          </List>
        </div>

        <div style={previewWrapperStyle}>
          <div style={previewTitleStyle}>Preview</div>
          <List theme={theme}>
            <ListItem variant="document" label="Document name" meta="270 Kbs" />
          </List>
        </div>
      </div>
    </div>
  </Carousel>
)

export const ShowcaseLight: Story = {
  name: 'Showcase – Light',
  render: () => <ShowcaseTemplate theme="light" />,
}

export const ShowcaseDark: Story = {
  name: 'Showcase – Dark',
  render: () => <ShowcaseTemplate theme="dark" />,
}
