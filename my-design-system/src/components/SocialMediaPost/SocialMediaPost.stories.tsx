import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SocialMediaPost } from './SocialMediaPost'

const description =
  'A reusable content template designed to create consistent social media assets across multiple platforms and formats. Social Media Post templates support platform-specific layouts and content structures for channels such as Facebook, Instagram, TikTok, YouTube, and X while maintaining brand consistency and visual cohesion.'

const getPageStyle = (theme: 'light' | 'dark' = 'light'): CSSProperties => ({
  backgroundColor:
    theme === 'dark'
      ? '#141f2e'
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

const breadcrumbStyle: CSSProperties = {
  fontSize: '14px',
  opacity: 0.85,
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

const cardsColumnStyle: CSSProperties = {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}

const captionText =
  'A fashion trend signifies a specific look or expression that is spread across a population at a specific time and place...'

const meta: Meta<typeof SocialMediaPost> = {
  title: 'Components/SocialMediaPost',
  component: SocialMediaPost,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    theme: 'light',
    platform: 'facebook',
    type: 'image',
    caption: captionText,
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    platform: {
      control: 'inline-radio',
      options: ['facebook', 'instagram', 'tiktok', 'youtube', 'x'],
    },
    type: {
      control: 'inline-radio',
      options: ['image', 'video', 'text'],
    },
  },
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Component / Social Media Post</div>
        <h1 style={titleStyle}>
          Social Media Post{args.theme === 'dark' ? ': Dark' : ''}
        </h1>
        <p style={descriptionStyle}>{description}</p>
      </header>
      <div style={cardsColumnStyle}>
        <SocialMediaPost {...args} />
      </div>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof SocialMediaPost>

export const Default: Story = {
  args: {
    theme: 'light',
    platform: 'facebook',
    type: 'image',
    caption: captionText,
  },
}
