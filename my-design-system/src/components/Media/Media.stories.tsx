import type { Meta, StoryObj } from '@storybook/react-vite'
import { Media } from './Media'
import type { MediaRatio } from './Media'

const RATIOS: MediaRatio[] = ['square', 'video', 'story', 'vertical', 'horizontal']

const meta: Meta<typeof Media> = {
  title: 'Components/Media',
  component: Media,
  parameters: {
    docs: {
      description: {
        component:
          'Responsive image/video container with configurable aspect ratios (`square`, `video`, `story`, `vertical`, `horizontal`) and an optional dark overlay.',
      },
    },
  },
  args: {
    ratio: 'video',
    overlay: true,
  },
  argTypes: {
    ratio: {
      control: { type: 'select' },
      options: RATIOS,
      description: 'Aspect ratio variant',
    },
    src: {
      control: 'text',
      description: 'Image URL — leave empty to show placeholder',
    },
    alt: {
      control: 'text',
    },
    overlay: {
      control: 'boolean',
      description: 'Adds a 5% dark overlay on top of the media',
    },
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Media>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Media } from '@your-org/design-system'

<Media ratio="video" src="https://example.com/image.jpg" overlay />`,
      },
    },
  },
}

export const AllRatios: Story = {
  name: 'All Ratios',
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {RATIOS.map((r) => (
        <div key={r} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p style={{ fontFamily: 'monospace', fontSize: 12, margin: 0, color: '#666' }}>
            ratio="{r}"
          </p>
          <div style={{ maxWidth: r === 'story' ? 240 : 480 }}>
            <Media ratio={r} src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" alt="Sample" />
          </div>
        </div>
      ))}
    </div>
  ),
}