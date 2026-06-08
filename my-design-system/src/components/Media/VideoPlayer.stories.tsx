import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { VideoPlayer } from './VideoPlayer'

// ─────────────────────────────────────────────────────────────────────────────
// VideoPlayer stories
// Each story exercises a specific set of controllable props so teams can see
// exactly what happens when each piece of state changes.
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof VideoPlayer> = {
  title: 'Components/Media/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A fully **controlled** video player component ("Video Players" in Figma).
All state is managed by the parent — no internal state is held inside the component.

### Controlled props
| Prop | Type | Default | Description |
|---|---|---|---|
| \`isPlaying\` | boolean | false | Play/pause state — drives icon and big centre button |
| \`currentTime\` | number | 0 | Playback position in seconds — drives timestamp + progress bar |
| \`duration\` | number | 0 | Total duration in seconds |
| \`isMuted\` | boolean | false | Muted state — swaps volume icon, adds accent dot |
| \`showSubtitles\` | boolean | false | Subtitles active — adds accent dot under the CC button |
| \`showControls\` | boolean | true | Show or hide the entire "Player Controllers" overlay |

### Callbacks
| Callback | Triggered by |
|---|---|
| \`onPlayPause\` | Play button, pause button, big centre button |
| \`onSeek(fraction)\` | Click on the progress bar (fraction 0–1) |
| \`onRewind\` | Rewind 15 s button |
| \`onForward\` | Forward 15 s button |
| \`onMuteToggle\` | Volume button |
| \`onSubtitlesToggle\` | Subtitles (CC) button |
| \`onFullscreen\` | Fullscreen button |
| \`onMore\` | More (⋮) button |
        `,
      },
    },
  },
  args: {
    title: 'Shop and Drop',
    currentTime: 2858,
    duration: 6752,
    isPlaying: false,
    isMuted: false,
    showSubtitles: false,
    showControls: true,
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Video source URL. Renders a `<video>` element when provided.',
      table: { category: 'Media' },
    },
    poster: {
      control: 'text',
      description: 'Poster / thumbnail image URL shown before playback.',
      table: { category: 'Media' },
    },
    title: {
      control: 'text',
      description: 'Video title shown in "Titles & episodes" area of the controls bar.',
      table: { category: 'Info bar' },
    },
    currentTime: {
      control: { type: 'number', min: 0 },
      description: 'Current playback position in **seconds**. Drives timestamp display and progress bar fill.',
      table: { category: 'Info bar' },
    },
    duration: {
      control: { type: 'number', min: 0 },
      description: 'Total video duration in **seconds**.',
      table: { category: 'Info bar' },
    },
    isPlaying: {
      control: 'boolean',
      description: 'Playing state. Switches the play/pause icon and the big centred button.',
      table: { category: 'Playback' },
    },
    onPlayPause: {
      action: 'onPlayPause',
      description: 'Called when play, pause, or the big centre button is clicked.',
      table: { category: 'Playback' },
    },
    onRewind: {
      action: 'onRewind',
      description: 'Called when the Rewind 15 s button is clicked.',
      table: { category: 'Playback' },
    },
    onForward: {
      action: 'onForward',
      description: 'Called when the Forward 15 s button is clicked.',
      table: { category: 'Playback' },
    },
    onSeek: {
      action: 'onSeek',
      description: 'Called with a fraction (0–1) when the user clicks the progress bar.',
      table: { category: 'Progress bar' },
    },
    isMuted: {
      control: 'boolean',
      description: 'Muted state. Swaps the volume icon and adds an accent dot below it.',
      table: { category: 'Volume' },
    },
    onMuteToggle: {
      action: 'onMuteToggle',
      description: 'Called when the volume button is clicked.',
      table: { category: 'Volume' },
    },
    showSubtitles: {
      control: 'boolean',
      description: 'Subtitles active. Adds an accent dot below the CC button.',
      table: { category: 'Subtitles' },
    },
    onSubtitlesToggle: {
      action: 'onSubtitlesToggle',
      description: 'Called when the subtitles (CC) button is clicked.',
      table: { category: 'Subtitles' },
    },
    onFullscreen: {
      action: 'onFullscreen',
      description: 'Called when the fullscreen button is clicked.',
      table: { category: 'Other controls' },
    },
    onMore: {
      action: 'onMore',
      description: 'Called when the More (⋮) button is clicked.',
      table: { category: 'Other controls' },
    },
    showControls: {
      control: 'boolean',
      description: 'Show or hide the entire "Player Controllers" overlay bar.',
      table: { category: 'Visibility' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VideoPlayer>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const DURATION = args.duration ?? 6752
    const [isPlaying, setIsPlaying]     = useState(false)
    const [currentTime, setCurrentTime] = useState(args.currentTime ?? 2858)
    const [isMuted, setIsMuted]         = useState(false)
    const [showSubtitles, setSubtitles] = useState(false)

    return (
      <VideoPlayer
        title={args.title}
        src={args.src}
        poster={args.poster}
        showControls={args.showControls}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={DURATION}
        isMuted={isMuted}
        showSubtitles={showSubtitles}
        onPlayPause={() => setIsPlaying((p) => !p)}
        onSeek={(f) => setCurrentTime(Math.round(f * DURATION))}
        onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
        onForward={() => setCurrentTime((t) => Math.min(DURATION, t + 15))}
        onMuteToggle={() => setIsMuted((m) => !m)}
        onSubtitlesToggle={() => setSubtitles((s) => !s)}
        onFullscreen={() => { /* implement in app */ }}
        onMore={() => { /* implement in app */ }}
      />
    )
  },
}

// ─── With poster ──────────────────────────────────────────────────────────────

export const WithPoster: Story = {
  name: 'With poster image',
  args: {
    poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
    title: 'Mountain Timelapse',
    currentTime: 120,
    duration: 360,
  },
  render: (args) => {
    const DURATION = args.duration ?? 360
    const [isPlaying, setIsPlaying]     = useState(false)
    const [currentTime, setCurrentTime] = useState(args.currentTime ?? 120)
    const [isMuted, setIsMuted]         = useState(false)
    const [showSubtitles, setSubtitles] = useState(false)

    return (
      <VideoPlayer
        title={args.title}
        src={args.src}
        poster={args.poster}
        showControls={args.showControls}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={DURATION}
        isMuted={isMuted}
        showSubtitles={showSubtitles}
        onPlayPause={() => setIsPlaying((p) => !p)}
        onSeek={(f) => setCurrentTime(Math.round(f * DURATION))}
        onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
        onForward={() => setCurrentTime((t) => Math.min(DURATION, t + 15))}
        onMuteToggle={() => setIsMuted((m) => !m)}
        onSubtitlesToggle={() => setSubtitles((s) => !s)}
      />
    )
  },
}

