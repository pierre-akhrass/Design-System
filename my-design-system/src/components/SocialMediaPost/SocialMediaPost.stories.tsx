import { useState, type CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel } from '../Carousel'
import { SocialMediaPost } from './SocialMediaPost'
import type { SocialMediaPostPlatform } from './SocialMediaPost'

const description =
  'A reusable content template designed to create consistent social media assets across multiple platforms and formats. Social Media Post templates support platform-specific layouts and content structures for channels such as Facebook, Instagram, TikTok, YouTube, and X while maintaining brand consistency and visual cohesion.'

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

const captionText =
  'A fashion trend signifies a specific look or expression that is spread across a population at a specific time and place...'

const xText =
  "Style isn't just what you wear—it's how you wear it. Confidence is the best accessory."

const PaginatedInstagram = ({
  theme,
}: {
  theme: 'light' | 'dark'
}) => {
  const [page, setPage] = useState(2)
  const total = 6
  return (
    <SocialMediaPost
      theme={theme}
      platform="instagram"
      type="image"
      pagination={{
        current: page,
        total,
        onPrev: () => setPage((p) => Math.max(1, p - 1)),
        onNext: () => setPage((p) => Math.min(total, p + 1)),
      }}
    />
  )
}

const meta: Meta<typeof SocialMediaPost> = {
  title: 'Components/SocialMediaPost',
  component: SocialMediaPost,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Social post presentation card with media, metadata, engagement, and theme options.',
      },
    },
    layout: 'fullscreen',
  },
  args: {
    theme: 'light',
    platform: 'facebook',
    type: 'image',
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
}

export default meta

type Story = StoryObj<typeof SocialMediaPost>

export const Facebook: Story = {
  args: {
    platform: 'facebook',
    type: 'image',
    caption: captionText,
  },
}

export const Instagram: Story = {
  render: (args) => <PaginatedInstagram theme={args.theme ?? 'light'} />,
}

export const TikTok: Story = {
  args: {
    platform: 'tiktok',
    type: 'video',
  },
}

export const YouTube: Story = {
  args: {
    platform: 'youtube',
    type: 'video',
  },
}

export const X: Story = {
  args: {
    platform: 'x',
    type: 'text',
    text: xText,
    hashtags: '#FashionForward #StyleMatters',
  },
}

const platforms: {
  platform: SocialMediaPostPlatform
  type: 'image' | 'video' | 'text'
  pagination?: { current: number; total: number }
  caption?: string
  text?: string
  hashtags?: string
}[] = [
  { platform: 'facebook', type: 'image', caption: captionText },
  {
    platform: 'instagram',
    type: 'image',
    pagination: { current: 2, total: 6 },
  },
  { platform: 'tiktok', type: 'video' },
  { platform: 'youtube', type: 'video' },
  {
    platform: 'x',
    type: 'text',
    text: xText,
    hashtags: '#FashionForward #StyleMatters',
  },
]

const ShowcaseTemplate = ({ theme }: { theme: 'light' | 'dark' }) => (
  <Carousel theme={theme} showNavigation={false}>
    <div style={{ width: '100%' }}>
      <div style={headerWrapperStyle}>
        <div style={breadcrumbStyle}>Component / Social Media Post</div>
        <h1 style={titleStyle}>
          Social Media Post{theme === 'dark' ? ': Dark' : ''}
        </h1>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>

    {platforms.map((item) => (
      <SocialMediaPost
        key={item.platform}
        theme={theme}
        platform={item.platform}
        type={item.type}
        caption={item.caption}
        text={item.text}
        hashtags={item.hashtags}
        pagination={item.pagination}
      />
    ))}
  </Carousel>
)

export const ShowcaseLight: Story = {
  name: 'Showcase / Light',
  render: () => <ShowcaseTemplate theme="light" />,
}

export const ShowcaseDark: Story = {
  name: 'Showcase / Dark',
  render: () => <ShowcaseTemplate theme="dark" />,
}
