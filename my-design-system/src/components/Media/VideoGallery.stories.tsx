import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { VideoGallery } from './VideoGallery'
import type { VideoItem } from './VideoGallery'

// ─────────────────────────────────────────────────────────────────────────────
// VideoGallery stories
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof VideoGallery> = {
  title: 'Components/Media/VideoGallery',
  component: VideoGallery,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Combines the **VideoPlayer** with a "Suggested Videos" sidebar and a bottom thumbnail row
("Video Players" layout in Figma).

### Layout
- **Main Video** — large VideoPlayer on the left (all VideoPlayer props pass through directly).
- **Suggested Videos sidebar** — items 0–2 of \`suggestedVideos\`, shown in a right column.
- **Bottom row** — items 3–5 of \`suggestedVideos\`, shown in a 3-column grid below.

### Selection
\`activeVideoIndex\` highlights a suggested thumbnail with a teal border.
Clicking a thumbnail fires \`onVideoSelect(index, item)\` — swap \`mainVideo\` and update
\`activeVideoIndex\` in your parent to complete the switch.

### All VideoPlayer props pass through
\`isPlaying\`, \`isMuted\`, \`showSubtitles\`, \`onPlayPause\`, \`onSeek\`, \`onRewind\`,
\`onForward\`, \`onMuteToggle\`, \`onSubtitlesToggle\`, \`onFullscreen\`, \`onMore\` — all
forwarded directly to the internal VideoPlayer.
        `,
      },
    },
  },
  argTypes: {
    mainVideo: {
      control: 'object',
      description: 'The featured video data for the main VideoPlayer.',
      table: { category: 'Videos' },
    },
    suggestedVideos: {
      control: 'object',
      description:
        'Up to 6 suggested videos. Items 0–2 → sidebar ("Suggested Videos"). Items 3–5 → bottom row.',
      table: { category: 'Videos' },
    },
    activeVideoIndex: {
      control: { type: 'number', min: -1, max: 5 },
      description:
        'Zero-based index into `suggestedVideos` that is highlighted. Leave `undefined` when the main video is active.',
      table: { category: 'Selection' },
    },
    onVideoSelect: {
      action: 'onVideoSelect',
      description: 'Called with `(index, item)` when a suggested thumbnail is clicked.',
      table: { category: 'Selection' },
    },
    isPlaying: {
      control: 'boolean',
      description: 'Passed through to the main VideoPlayer.',
      table: { category: 'VideoPlayer passthrough' },
    },
    isMuted: {
      control: 'boolean',
      description: 'Passed through to the main VideoPlayer.',
      table: { category: 'VideoPlayer passthrough' },
    },
    showSubtitles: {
      control: 'boolean',
      description: 'Passed through to the main VideoPlayer.',
      table: { category: 'VideoPlayer passthrough' },
    },
    showControls: {
      control: 'boolean',
      description: 'Passed through to the main VideoPlayer.',
      table: { category: 'VideoPlayer passthrough' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1200 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VideoGallery>

// ─── Sample data ──────────────────────────────────────────────────────────────

const SAMPLE_VIDEOS: VideoItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: `ep-${i + 1}`,
  title: `Episode ${i + 1} — ${['Introduction', 'The Journey', 'Discovery', 'Turning Point', 'The Reveal', 'Finale'][i]}`,
  duration: 1800 + i * 300,
  currentTime: 0,
}))

const MAIN_VIDEO: VideoItem = {
  title: 'Shop and Drop',
  currentTime: 2858,
  duration: 6752,
}

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  args: {
    mainVideo: MAIN_VIDEO,
    suggestedVideos: SAMPLE_VIDEOS,
  },
  render: (args) => {
    const [mainVideo, setMainVideo]         = useState<VideoItem>(args.mainVideo)
    const [activeIndex, setActiveIndex]     = useState<number | undefined>(undefined)
    const [isPlaying, setIsPlaying]         = useState(false)
    const [currentTime, setCurrentTime]     = useState(args.mainVideo.currentTime ?? 0)
    const [isMuted, setIsMuted]             = useState(false)
    const [showSubtitles, setShowSubtitles] = useState(false)

    const handleVideoSelect = (index: number, item: VideoItem) => {
      setMainVideo(item)
      setActiveIndex(index)
      setCurrentTime(item.currentTime ?? 0)
      setIsPlaying(false)
    }

    return (
      <VideoGallery
        mainVideo={{ ...mainVideo, currentTime }}
        suggestedVideos={args.suggestedVideos}
        activeVideoIndex={activeIndex}
        onVideoSelect={handleVideoSelect}
        isPlaying={isPlaying}
        isMuted={isMuted}
        showSubtitles={showSubtitles}
        showControls={args.showControls}
        onPlayPause={() => setIsPlaying((p) => !p)}
        onSeek={(f) => setCurrentTime(Math.round(f * (mainVideo.duration ?? 0)))}
        onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
        onForward={() => setCurrentTime((t) => Math.min(mainVideo.duration ?? 0, t + 15))}
        onMuteToggle={() => setIsMuted((m) => !m)}
        onSubtitlesToggle={() => setShowSubtitles((s) => !s)}
      />
    )
  },
}

// ─── Interactive ──────────────────────────────────────────────────────────────

export const Interactive: Story = {
  tags: ['!autodocs'],
  args: {
    mainVideo: {},
    suggestedVideos: {},
    isPlaying: false
  },

  name: 'Interactive — click to switch video',

  parameters: {
    docs: {
      description: {
        story:
          'Full interaction demo. Click any suggested thumbnail to update `mainVideo` and `activeVideoIndex`. All VideoPlayer controls also work.',
      },
      source: {
        language: 'tsx',
        code: `import { useState } from 'react'
import { VideoGallery } from '@your-org/design-system'
import type { VideoItem } from '@your-org/design-system'

const VIDEOS: VideoItem[] = [
  { id: 'main', title: 'Shop and Drop', duration: 6752, currentTime: 2858 },
  { id: 'ep1',  title: 'Episode 1',     duration: 1800, currentTime: 0 },
  { id: 'ep2',  title: 'Episode 2',     duration: 2100, currentTime: 0 },
  { id: 'ep3',  title: 'Episode 3',     duration: 2400, currentTime: 0 },
  { id: 'ep4',  title: 'Episode 4',     duration: 1800, currentTime: 0 },
  { id: 'ep5',  title: 'Episode 5',     duration: 2100, currentTime: 0 },
  { id: 'ep6',  title: 'Episode 6',     duration: 2700, currentTime: 0 },
]

export function MyVideoGallery() {
  const [mainVideo, setMainVideo]     = useState<VideoItem>(VIDEOS[0])
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  const [isPlaying, setIsPlaying]     = useState(false)
  const [currentTime, setCurrentTime] = useState(VIDEOS[0].currentTime ?? 0)
  const [isMuted, setIsMuted]         = useState(false)

  const handleVideoSelect = (index: number, item: VideoItem) => {
    setMainVideo(item)
    setActiveIndex(index)
    setCurrentTime(item.currentTime ?? 0)
    setIsPlaying(false)
  }

  return (
    <VideoGallery
      mainVideo={{ ...mainVideo, currentTime }}
      suggestedVideos={VIDEOS.slice(1)}
      activeVideoIndex={activeIndex}
      onVideoSelect={handleVideoSelect}
      isPlaying={isPlaying}
      isMuted={isMuted}
      onPlayPause={() => setIsPlaying((p) => !p)}
      onSeek={(f) => setCurrentTime(Math.round(f * (mainVideo.duration ?? 0)))}
      onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
      onForward={() => setCurrentTime((t) => Math.min(mainVideo.duration ?? 0, t + 15))}
      onMuteToggle={() => setIsMuted((m) => !m)}
    />
  )
}`,
      },
    },
  },

  render: () => {
    const [mainVideo, setMainVideo]         = useState<VideoItem>(MAIN_VIDEO)
    const [activeIndex, setActiveIndex]     = useState<number | undefined>(undefined)
    const [isPlaying, setIsPlaying]         = useState(false)
    const [currentTime, setCurrentTime]     = useState(MAIN_VIDEO.currentTime ?? 0)
    const [isMuted, setIsMuted]             = useState(false)
    const [showSubtitles, setShowSubtitles] = useState(false)

    const handleVideoSelect = (index: number, item: VideoItem) => {
      setMainVideo(item)
      setActiveIndex(index)
      setCurrentTime(item.currentTime ?? 0)
      setIsPlaying(false)
    }

    return (
      <VideoGallery
        mainVideo={{ ...mainVideo, currentTime }}
        suggestedVideos={SAMPLE_VIDEOS}
        activeVideoIndex={activeIndex}
        onVideoSelect={handleVideoSelect}
        isPlaying={isPlaying}
        isMuted={isMuted}
        showSubtitles={showSubtitles}
        onPlayPause={() => setIsPlaying((p) => !p)}
        onSeek={(fraction) =>
          setCurrentTime(Math.round(fraction * (mainVideo.duration ?? 0)))
        }
        onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
        onForward={() =>
          setCurrentTime((t) => Math.min(mainVideo.duration ?? 0, t + 15))
        }
        onMuteToggle={() => setIsMuted((m) => !m)}
        onSubtitlesToggle={() => setShowSubtitles((s) => !s)}
        onFullscreen={() => alert('Fullscreen: implement in your app')}
        onMore={() => alert('More options: implement in your app')}
      />
    )
  }
}
