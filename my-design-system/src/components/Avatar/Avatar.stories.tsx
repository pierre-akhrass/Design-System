import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'
import './Avatar.stories.scss'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: 'medium',
    variant: 'image',
    theme: 'light',
    initials: 'FS',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['x-small', 'small', 'medium', 'large', 'x-large'],
    },
    variant: {
      control: 'inline-radio',
      options: ['image', 'initial', 'shape'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'User/profile visual with image, initials, or icon fallback, with size and theme variations.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Avatar>

const sizes = [
  { label: 'XSmall', value: 'x-small' },
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
  { label: 'XLarge', value: 'x-large' },
] as const

const AvatarMatrix = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div className={`ds-avatar-showcase ds-avatar-showcase--${theme}`}>
      <div className="ds-avatar-showcase__intro">
        <h1 className="ds-avatar-showcase__title">{theme === 'dark' ? 'Avatar: Dark' : 'Avatar'}</h1>
        <p className="ds-avatar-showcase__description">
          A visual representation of a user, entity, or brand displayed through images, initials, or icons.
          Avatars help personalize the experience, provide identity context, and support recognition across
          collaborative or account-based interfaces.
        </p>
      </div>

      <hr className="ds-avatar-showcase__divider" />

      <div className="ds-avatar-showcase__content">
        <div className="ds-avatar-showcase__matrix-wrap">
          <div className="ds-avatar-showcase__matrix">
            <div />
            <span className="ds-avatar-showcase__chip">Image</span>
            <span className="ds-avatar-showcase__chip">Initial</span>
            <span className="ds-avatar-showcase__chip">Shape</span>

            {sizes.map(({ label, value }) => (
              <div key={`${theme}-${label}`} className="ds-avatar-showcase__matrix-row">
                <span className="ds-avatar-showcase__chip">{label}</span>
                <Avatar size={value} variant="image" theme={theme} />
                <Avatar size={value} variant="initial" theme={theme} initials="FS" />
                <Avatar size={value} variant="shape" theme={theme} />
              </div>
            ))}
          </div>
        </div>

        <div className="ds-avatar-showcase__aside">
          <div className="ds-avatar-showcase__row">
            <span className="ds-avatar-showcase__chip">Spaced</span>
            <div className="ds-avatar-showcase__spaced-group">
              <Avatar size="x-small" variant="image" theme={theme} />
              <Avatar size="x-small" variant="image" theme={theme} />
              <Avatar size="x-small" variant="image" theme={theme} />
              <span className="ds-avatar-showcase__counter">+99</span>
            </div>
          </div>

          <div className="ds-avatar-showcase__row">
            <span className="ds-avatar-showcase__chip">Overlap</span>
            <div className="ds-avatar-showcase__overlap-wrap">
              <div className="ds-avatar-showcase__overlap-group">
                {['a', 'b', 'c'].map((key) => (
                  <Avatar key={`${theme}-${key}`} size="x-small" variant="image" theme={theme} />
                ))}
              </div>
              <span className="ds-avatar-showcase__counter">+99</span>
            </div>
          </div>

          <div className="ds-avatar-showcase__identity">
            <Avatar size="small" variant="image" theme={theme} />
            <div className="ds-avatar-showcase__identity-text">
              <span className="ds-avatar-showcase__name">Name</span>
              <span className="ds-avatar-showcase__supporting">Supporting text</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Playground: Story = {}

export const DocumentationLight: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <section className="ds-avatar-figma ds-avatar-figma--light">
      <header className="ds-avatar-figma__header">
        <span>Component / Avatar</span>
        <span>Al-Futtaim Design System</span>
      </header>

      <div className="ds-avatar-figma__content">
        <AvatarMatrix theme="light" />
      </div>
    </section>
  ),
}

export const DocumentationDark: Story = {
  parameters: {
    controls: { disable: true },
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <section className="ds-avatar-figma ds-avatar-figma--dark">
      <header className="ds-avatar-figma__header">
        <span>Component / Avatar</span>
        <span>Al-Futtaim Design System</span>
      </header>

      <div className="ds-avatar-figma__content">
        <AvatarMatrix theme="dark" />
      </div>
    </section>
  ),
}
