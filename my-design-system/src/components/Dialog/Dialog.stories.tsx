// filepath: /Users/mohammedoueidat/Documents/GitHub/Design-System/my-design-system/src/components/Dialog/Dialog.stories.tsx
import { useState, type CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Dialog } from './Dialog'

const description =
  'A focused interaction window that appears above the interface to present important information, request user input, or confirm actions. Dialogs are designed to interrupt the current flow only when immediate attention or decision-making is required.'

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

type DialogArgs = {
  theme: 'light' | 'dark'
  placement: 'center' | 'bottom-sheet'
  size: 'small' | 'medium' | 'large'
}

const meta: Meta<DialogArgs> = {
  title: 'Components/Dialog',
  parameters: { layout: 'fullscreen' },
  args: {
    theme: 'light',
    placement: 'center',
    size: 'medium',
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    placement: {
      control: 'inline-radio',
      options: ['center', 'bottom-sheet'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
  },
}
export default meta

type Story = StoryObj<DialogArgs>

/* -------------------------------------------------------------- *
 * Default · Cookies dialog (matches screenshot 1 / 5)            *
 * -------------------------------------------------------------- */
export const Default: Story = {
  render: ({ theme, placement, size }) => {
    const [open, setOpen] = useState(true)
    return (
      <div style={getPageStyle(theme)}>
        <header style={headerStyle}>
          <div style={breadcrumbStyle}>Components / Dialog</div>
          <h1 style={titleStyle}>Dialog{theme === 'dark' ? ': Dark' : ''}</h1>
          <p style={descriptionStyle}>{description}</p>
        </header>

        <Button onClick={() => setOpen(true)}>Open dialog</Button>

        <Dialog
          open={open}
          theme={theme}
          placement={placement}
          size={size}
          onClose={() => setOpen(false)}
        >
          <Dialog.Header
            title="🍪 We use cookies!"
            onClose={() => setOpen(false)}
          />
          <Dialog.Body>
            <Dialog.Text>
              We have a friendly cookie policy on our website. This means that
              we use cookies to enhance your browsing experience and provide
              personalized content.
            </Dialog.Text>
            <Dialog.Text>
              Rest assured, your privacy is important to us, and we only use
              cookies for necessary purposes. Feel free to adjust your cookie
              settings to suit your preferences.
            </Dialog.Text>
          </Dialog.Body>
          <Dialog.Actions>
            <Button variant="plain" onClick={() => setOpen(false)}>
              Button
            </Button>
            <Button onClick={() => setOpen(false)}>Button</Button>
          </Dialog.Actions>
        </Dialog>
      </div>
    )
  },
}
