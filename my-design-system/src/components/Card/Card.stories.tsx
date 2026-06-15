// filepath: /Users/mohammedoueidat/Documents/GitHub/Design-System/my-design-system/src/components/Card/Card.stories.tsx
import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Card } from './Card'

const description =
  'A modular content container used to group related information and actions into a clear, digestible layout. Cards help organize complex content while maintaining flexibility across different use cases such as listings, summaries, previews, or dashboards.'

const getPageStyle = (theme: 'light' | 'dark' = 'light'): CSSProperties => ({
  backgroundColor: theme === 'dark' ? '#0a111a' : '#f5f7fa',
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

const breadcrumbStyle: CSSProperties = { fontSize: '14px', opacity: 0.85 }
const titleStyle: CSSProperties = { fontSize: '40px', fontWeight: 700, margin: 0 }
const descriptionStyle: CSSProperties = {
  fontSize: '14px',
  lineHeight: 1.5,
  margin: 0,
  maxWidth: '560px',
  opacity: 0.85,
}

const bodyText =
  "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'fullscreen' },
  args: {
    theme: 'light',
    orientation: 'vertical',
    interactive: false,
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
    },
    interactive: { control: 'boolean' },
  },
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>
          Card{args.theme === 'dark' ? ': Dark' : ''}
        </h1>
        <p style={descriptionStyle}>{description}</p>
      </header>
      <div style={{ maxWidth: 480 }}>
        <Card {...args}>
          <Card.Body>
            <Card.Icon />
            <Card.Title>Title</Card.Title>
            <Card.Text>{bodyText}</Card.Text>
            <Card.Actions>
              <Button variant="plain">Button</Button>
              <Button>Button</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: { theme: 'light' },
}
