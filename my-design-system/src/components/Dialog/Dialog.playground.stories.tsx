// filepath: /Users/mohammedoueidat/Documents/GitHub/Design-System/my-design-system/src/components/Dialog/Dialog.playground.stories.tsx
import { useState, type CSSProperties, type ReactNode } from 'react'
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

/** Fake page content rendered behind the dialog so the scrim/blur is visible */
const FakePageBackdrop = ({
  theme,
  variant = 'form',
}: {
  theme: 'light' | 'dark'
  variant?: 'form' | 'list'
}): ReactNode => {
  const block = (h: number, w = '100%'): CSSProperties => ({
    background: theme === 'dark' ? '#1e2c3e' : '#d2d9e0',
    borderRadius: 8,
    height: h,
    width: w,
  })
  return (
    <div
      aria-hidden="true"
      style={{
        background: theme === 'dark' ? '#141f2e' : '#e9ecf0',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 24,
      }}
    >
      {variant === 'form' && (
        <>
          <div style={block(48)} />
          <div style={block(48)} />
          <div style={block(48, '60%')} />
        </>
      )}
      {variant === 'list' && (
        <>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ alignItems: 'center', display: 'flex', gap: 12 }}>
              <div
                style={{
                  background: theme === 'dark' ? '#2a3c50' : '#bcc4cb',
                  borderRadius: 6,
                  flexShrink: 0,
                  height: 24,
                  width: 24,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 6 }}>
                <div style={block(12, '40%')} />
                <div style={block(10, '60%')} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

type DialogArgs = { theme: 'light' | 'dark' }

const meta: Meta<DialogArgs> = {
  title: 'Components/Dialog/Playground',
  parameters: { layout: 'fullscreen' },
  args: { theme: 'light' },
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
  },
}
export default meta

type Story = StoryObj<DialogArgs>

/* -------------------------------------------------------------- *
 * 1 · Light · centered cookies dialog (screenshot 1)             *
 * -------------------------------------------------------------- */
export const LightCenter: Story = {
  name: '1 · Light · centered (cookies)',
  render: ({ theme }) => {
    const [open, setOpen] = useState(true)
    return (
      <div style={getPageStyle(theme)}>
        <header style={headerStyle}>
          <div style={breadcrumbStyle}>Components / Dialog</div>
          <h1 style={titleStyle}>Dialog</h1>
          <p style={descriptionStyle}>{description}</p>
        </header>

        <Button onClick={() => setOpen(true)}>Open dialog</Button>

        <Dialog
          open={open}
          theme={theme}
          placement="center"
          size="medium"
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

/* -------------------------------------------------------------- *
 * 2 · Mobile bottom-sheet · stacked actions (screenshot 2)       *
 * -------------------------------------------------------------- */
export const BottomSheetUpgrade: Story = {
  name: '2 · Bottom sheet · upgrade (stacked actions)',
  render: ({ theme }) => {
    const [open, setOpen] = useState(true)
    return (
      <div
        style={{
          ...getPageStyle(theme),
          gap: 16,
          padding: 0,
        }}
      >
        {/* Phone-shaped frame so the bottom sheet feels native */}
        <div
          style={{
            background: theme === 'dark' ? '#0a111a' : '#f5f7fa',
            border: '1px solid rgba(127,127,127,0.25)',
            borderRadius: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            height: 720,
            margin: '40px auto',
            maxWidth: 380,
            overflow: 'hidden',
            padding: 24,
            position: 'relative',
            width: '100%',
          }}
        >
          <FakePageBackdrop theme={theme} variant="form" />
          <Dialog
            open={open}
            theme={theme}
            placement="bottom-sheet"
            onClose={() => setOpen(false)}
          >
            <Dialog.Header
              title="Would you like to upgrade?"
              onClose={() => setOpen(false)}
            />
            <Dialog.Body>
              <Dialog.Text>
                We just released version 3.0 of the Simple Design System,
                would you like to update?
              </Dialog.Text>
              <Dialog.Text>
                If you'd prefer to wait, automatic updates are scheduled for
                23:00 on the last Wednesday of every month.
              </Dialog.Text>
            </Dialog.Body>
            <Dialog.Actions align="stacked">
              <Button onClick={() => setOpen(false)}>Button</Button>
              <Button variant="plain" onClick={() => setOpen(false)}>
                Button
              </Button>
            </Dialog.Actions>
          </Dialog>
        </div>
      </div>
    )
  },
}

/* -------------------------------------------------------------- *
 * 3 · Mobile bottom-sheet · cookies (screenshot 3)               *
 * -------------------------------------------------------------- */
export const BottomSheetCookies: Story = {
  name: '3 · Bottom sheet · cookies (stacked)',
  render: ({ theme }) => {
    const [open, setOpen] = useState(true)
    return (
      <div style={{ ...getPageStyle(theme), gap: 16, padding: 0 }}>
        <div
          style={{
            background: theme === 'dark' ? '#0a111a' : '#f5f7fa',
            border: '1px solid rgba(127,127,127,0.25)',
            borderRadius: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            height: 720,
            margin: '40px auto',
            maxWidth: 380,
            overflow: 'hidden',
            padding: 24,
            position: 'relative',
            width: '100%',
          }}
        >
          <FakePageBackdrop theme="dark" variant="list" />
          <Dialog
            open={open}
            theme={theme}
            placement="bottom-sheet"
            onClose={() => setOpen(false)}
          >
            <Dialog.Header
              title="🍪 We use cookies!"
              onClose={() => setOpen(false)}
            />
            <Dialog.Body>
              <Dialog.Text>
                We have a friendly cookie policy on our website. This means
                that we use cookies to enhance your browsing experience and
                provide personalized content.
              </Dialog.Text>
              <Dialog.Text>
                Rest assured, your privacy is important to us, and we only
                use cookies for necessary purposes. Feel free to adjust your
                cookie settings to suit your preferences.
              </Dialog.Text>
            </Dialog.Body>
            <Dialog.Actions align="stacked">
              <Button onClick={() => setOpen(false)}>Button</Button>
              <Button variant="plain" onClick={() => setOpen(false)}>
                Button
              </Button>
            </Dialog.Actions>
          </Dialog>
        </div>
      </div>
    )
  },
}

/* -------------------------------------------------------------- *
 * 4 · Dark · centered upgrade (screenshot 4)                     *
 * -------------------------------------------------------------- */
export const DarkCenterUpgrade: Story = {
  name: '4 · Dark · centered (upgrade)',
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <div style={getPageStyle('dark')}>
        <header style={headerStyle}>
          <div style={breadcrumbStyle}>Components / Dialog</div>
          <h1 style={titleStyle}>Dialog: Dark</h1>
          <p style={descriptionStyle}>{description}</p>
        </header>

        <FakePageBackdrop theme="dark" variant="form" />

        <Button onClick={() => setOpen(true)}>Open dialog</Button>

        <Dialog
          open={open}
          theme="light"
          placement="center"
          size="medium"
          onClose={() => setOpen(false)}
        >
          <Dialog.Header
            title="Would you like to upgrade?"
            onClose={() => setOpen(false)}
          />
          <Dialog.Body>
            <Dialog.Text>
              We just released version 3.0 of the Simple Design System, would
              you like to update?
            </Dialog.Text>
            <Dialog.Text>
              If you'd prefer to wait, automatic updates are scheduled for
              23:00 on the last Wednesday of every month.
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

/* -------------------------------------------------------------- *
 * 5 · Dark · centered cookies (screenshot 5)                     *
 * -------------------------------------------------------------- */
export const DarkCenterCookies: Story = {
  name: '5 · Dark · centered (cookies)',
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <div style={getPageStyle('dark')}>
        <header style={headerStyle}>
          <div style={breadcrumbStyle}>Components / Dialog</div>
          <h1 style={titleStyle}>Dialog: Dark</h1>
          <p style={descriptionStyle}>{description}</p>
        </header>

        <FakePageBackdrop theme="dark" variant="list" />

        <Button onClick={() => setOpen(true)}>Open dialog</Button>

        <Dialog
          open={open}
          theme="light"
          placement="center"
          size="medium"
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

/* -------------------------------------------------------------- *
 * 6 · Showcase – every variant on a single page                  *
 * -------------------------------------------------------------- */
export const Showcase: Story = {
  name: '6 · Showcase (sizes)',
  render: ({ theme }) => {
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium')
    const [open, setOpen] = useState(true)
    return (
      <div style={getPageStyle(theme)}>
        <header style={headerStyle}>
          <div style={breadcrumbStyle}>Components / Dialog</div>
          <h1 style={titleStyle}>Sizes</h1>
          <p style={descriptionStyle}>
            The dialog supports three width presets — Small (400), Medium (560)
            and Large (720).
          </p>
        </header>
        <div style={{ display: 'flex', gap: 12 }}>
          {(['small', 'medium', 'large'] as const).map((s) => (
            <Button
              key={s}
              variant={s === size ? 'filled' : 'outlined'}
              onClick={() => {
                setSize(s)
                setOpen(true)
              }}
            >
              {s[0].toUpperCase() + s.slice(1)}
            </Button>
          ))}
        </div>

        <Dialog
          open={open}
          theme={theme}
          size={size}
          onClose={() => setOpen(false)}
        >
          <Dialog.Header
            title={`${size[0].toUpperCase() + size.slice(1)} dialog`}
            onClose={() => setOpen(false)}
          />
          <Dialog.Body>
            <Dialog.Text>
              The same content rendered at the {size} size preset. Resize the
              window to see the responsive bottom-sheet fallback below 600px.
            </Dialog.Text>
          </Dialog.Body>
          <Dialog.Actions>
            <Button variant="plain" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </div>
    )
  },
}
