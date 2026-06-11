import { useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Media } from './Media'
import { VideoGallery } from './VideoGallery'
import { VideoPlayer } from './VideoPlayer'
import type { MediaRatio, MediaTheme } from './Media'
import type { VideoItem } from './VideoGallery'

// ─── Constants ────────────────────────────────────────────────────────────────

const RATIOS: MediaRatio[] = ['square', 'video', 'story', 'vertical', 'horizontal']

const RATIO_LABELS: Record<MediaRatio, string> = {
  square:     'Square 1:1',
  video:      'Video 16:9',
  story:      'Story 9:16',
  vertical:   'Vertical 10:13',
  horizontal: 'Horizontal 13:10',
}

const SAMPLE_IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'

const SAMPLE_VIDEOS: VideoItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: `ep-${i + 1}`,
  title: `Episode ${i + 1} — ${['Introduction', 'The Journey', 'Discovery', 'Turning Point', 'The Reveal', 'Finale'][i]}`,
  duration: 1800 + i * 300,
  currentTime: 0,
}))

const MAIN_VIDEO: VideoItem = { title: 'Shop and Drop', currentTime: 2858, duration: 6752 }
const DEMO_DURATION = 6752
const FIGMA_MEDIA_BG_LIGHT = '#e9ecf0'
const FIGMA_MEDIA_BG_DARK = '#141f2e'
const FIGMA_MEDIA_CANVAS_DARK = '#0a111a'

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Media> = {
  title: 'Components/Media (Maher Al Rifai)',
  component: Media,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The **Media** component is a responsive image/video container with configurable aspect ratios and an optional dark overlay.
**VideoPlayer** is a fully controlled player — all state is managed by the parent.
**VideoGallery** wraps VideoPlayer with a suggested-videos sidebar and a bottom thumbnail row.

---

### Media — props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`ratio\` | string | \`'video'\` | Aspect ratio: \`square\` · \`video\` · \`story\` · \`vertical\` · \`horizontal\` |
| \`theme\` | string | \`'light'\` | \`'light'\` or \`'dark'\` — also responds to \`prefers-color-scheme\` |
| \`src\` | string | — | Image URL — omit to show placeholder |
| \`overlay\` | boolean | true | 5% dark overlay on top of media |

---

### VideoPlayer — controlled props

| Prop | Type | Default | Description |
|---|---|---|---|
| \`isPlaying\` | boolean | false | Play/pause state |
| \`currentTime\` | number | 0 | Playback position in seconds |
| \`duration\` | number | 0 | Total duration in seconds |
| \`isMuted\` | boolean | false | Muted — swaps icon + adds accent dot |
| \`showSubtitles\` | boolean | false | Subtitles on — accent dot under CC |
| \`showControls\` | boolean | true | Show / hide the controls overlay |
| \`title\` | string | — | Title shown in the controls bar |
| \`src\` | string | — | Video source URL |
| \`poster\` | string | — | Thumbnail before playback |

### VideoPlayer — callbacks

| Callback | Triggered by |
|---|---|
| \`onPlayPause\` | Play / pause / big centre button |
| \`onSeek(fraction)\` | Progress bar click (0–1) |
| \`onRewind\` | Rewind 15 s |
| \`onForward\` | Forward 15 s |
| \`onMuteToggle\` | Volume button |
| \`onSubtitlesToggle\` | CC button |
| \`onFullscreen\` | Fullscreen button |
| \`onMore\` | More (⋮) button |

---

### VideoGallery — additional props

| Prop | Type | Description |
|---|---|---|
| \`mainVideo\` | VideoItem | Featured video (title, src, poster, duration, currentTime) |
| \`suggestedVideos\` | VideoItem[] | Up to 6 — items 0–2 → sidebar, 3–5 → bottom row |
| \`activeVideoIndex\` | number | Highlighted thumbnail index |
| \`onVideoSelect\` | (index, item) => void | Thumbnail click handler |
        `,
      },
    },
  },
  args: { ratio: 'video', overlay: true, theme: 'light' },
  argTypes: {
    ratio: {
      control: { type: 'select' },
      options: RATIOS,
      description: 'Aspect ratio variant',
      table: { category: 'Media' },
    },
    theme: {
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
      description: 'Colour theme — also responds to `prefers-color-scheme`',
      table: { category: 'Media' },
    },
    src: {
      control: 'text',
      description: 'Image URL — leave empty to show placeholder',
      table: { category: 'Media' },
    },
    alt: {
      control: 'text',
      table: { category: 'Media' },
    },
    overlay: {
      control: 'boolean',
      description: 'Adds a 5% dark overlay on top of the media',
      table: { category: 'Media' },
    },
  },
  decorators: [
    (Story) => <Story />,
  ],
}

export default meta
type Story = StoryObj<typeof Media>

// ─── Playground — Media image container ──────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Media } from '@your-org/design-system'

<Media ratio="video" theme="light" src="https://example.com/image.jpg" overlay />`,
      },
    },
  },
}

// ─── Video Gallery — interactive VideoGallery + VideoPlayer ───────────────────

export const VideoGalleryPlayground: Story = {
  name: 'Video Gallery',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
Full interactive **VideoGallery** — every prop is exposed in the Controls panel below.

- **Theme** — switches between light and dark placeholders; also responds to \`prefers-color-scheme\`
- **Show Controls** — toggles the player overlay bar on/off
- **Is Playing** — seeds the initial play/pause state (player buttons also toggle it live)
- **Is Muted** — seeds the initial mute state
- **Show Subtitles** — seeds the initial subtitle state
- **Main Video** / **Suggested Videos** — edit JSON to swap video data

Figma node **25705:15222** implementation details:
- Desktop: main media height **517 px**, sidebar width **233 px**, sidebar thumbs **3 × 156 px**, bottom thumbs **3 × 176 px**
- Spacing: **24 px** between regions and thumbnails
- Token colors: placeholder **$mapping-system-slate-surface-secondary** (
  #e9ecf0), controls text/icons **$mapping-system-slate-surface-primary** (
  #f5f7fa), thumb play-circle **$mapping-system-slate-border-tertiary** (
  #d7d7d7)
- Responsive: tablet stacks main + horizontal suggested row, mobile uses 2-col sidebar grid and 1-col bottom stack
        `,
      },
      source: {
        language: 'tsx',
        code: `import { useState } from 'react'
import { VideoGallery } from '@your-org/design-system'
import type { VideoItem } from '@your-org/design-system'

const MAIN: VideoItem = { title: 'Shop and Drop', duration: 6752, currentTime: 2858 }
const SUGGESTED: VideoItem[] = [
  { id: '1', title: 'Episode 1', duration: 1800, currentTime: 0 },
  { id: '2', title: 'Episode 2', duration: 2100, currentTime: 0 },
  // …up to 6
]

export function MyVideoPage() {
  const [mainVideo, setMainVideo]     = useState<VideoItem>(MAIN)
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  const [isPlaying, setIsPlaying]     = useState(false)
  const [currentTime, setCurrentTime] = useState(MAIN.currentTime ?? 0)
  const [isMuted, setIsMuted]         = useState(false)
  const [showSubtitles, setSubtitles] = useState(false)

  const handleSelect = (index: number, item: VideoItem) => {
    setMainVideo(item); setActiveIndex(index)
    setCurrentTime(item.currentTime ?? 0); setIsPlaying(false)
  }

  return (
    <VideoGallery
      theme="light"
      mainVideo={{ ...mainVideo, currentTime }}
      suggestedVideos={SUGGESTED}
      activeVideoIndex={activeIndex}
      onVideoSelect={handleSelect}
      isPlaying={isPlaying}
      isMuted={isMuted}
      showSubtitles={showSubtitles}
      showControls
      onPlayPause={() => setIsPlaying(p => !p)}
      onSeek={f => setCurrentTime(Math.round(f * (mainVideo.duration ?? 0)))}
      onRewind={() => setCurrentTime(t => Math.max(0, t - 15))}
      onForward={() => setCurrentTime(t => Math.min(mainVideo.duration ?? 0, t + 15))}
      onMuteToggle={() => setIsMuted(m => !m)}
      onSubtitlesToggle={() => setSubtitles(s => !s)}
    />
  )
}`,
      },
    },
  },
  // Story-level args — these appear in the Controls panel
  args: {
    ...({
      vg_theme:        'light',
      vg_showControls: true,
      vg_isPlaying:    false,
      vg_isMuted:      false,
      vg_showSubtitles: false,
      vg_mainVideo:    MAIN_VIDEO,
      vg_suggestedVideos: SAMPLE_VIDEOS,
    } as any),

    vg_suggestedVideos: [{
      "id": "ep-1",
      "title": "Episode 1 — Introduction",
      "duration": 1800,
      "currentTime": 0
    }, {
      "id": "ep-2",
      "title": "Episode 2 — The Journey",
      "duration": 2100,
      "currentTime": 0
    }, {
      "id": "ep-3",
      "title": "Episode 3 — Discovery",
      "duration": 2400,
      "currentTime": 0
    }, {
      "id": "ep-4",
      "title": "Episode 4 — Turning Point",
      "duration": 2700,
      "currentTime": 0
    }, {
      "id": "ep-5",
      "title": "Episode 5 — The Reveal",
      "duration": 3000,
      "currentTime": 0
    }, {
      "id": "maher",
      "title": "Episode 6 — Finale",
      "duration": 3300,
      "currentTime": 0
    }]
  },
  // Story-level argTypes — hide Media controls, add VideoGallery controls
  argTypes: {
    // ── Hide all Media controls for this story ──────────────────────────
    ratio:   { table: { disable: true } },
    src:     { table: { disable: true } },
    alt:     { table: { disable: true } },
    overlay: { table: { disable: true } },
    theme:   { table: { disable: true } },
    // ── VideoGallery controls ───────────────────────────────────────────
    ...({
      vg_theme: {
        name: 'theme',
        control: { type: 'inline-radio' },
        options: ['light', 'dark'],
        description: 'Colour theme — also responds to `prefers-color-scheme`',
        table: { category: 'Theme' },
      },
      vg_showControls: {
        name: 'showControls',
        control: 'boolean',
        description: 'Show or hide the player controls overlay bar',
        table: { category: 'Visibility' },
      },
      vg_isPlaying: {
        name: 'isPlaying',
        control: 'boolean',
        description: 'Seeds the initial play/pause state. Player buttons also toggle it live.',
        table: { category: 'Playback' },
      },
      vg_isMuted: {
        name: 'isMuted',
        control: 'boolean',
        description: 'Seeds the initial mute state. Volume button also toggles it live.',
        table: { category: 'Volume' },
      },
      vg_showSubtitles: {
        name: 'showSubtitles',
        control: 'boolean',
        description: 'Seeds the initial subtitle state. CC button also toggles it live.',
        table: { category: 'Subtitles' },
      },
      vg_mainVideo: {
        name: 'mainVideo',
        control: 'object',
        description: 'Featured video data — `title`, `src`, `poster`, `duration`, `currentTime`',
        table: { category: 'Videos' },
      },
      vg_suggestedVideos: {
        name: 'suggestedVideos',
        control: 'object',
        description: 'Up to 6 suggested videos. Items 0–2 → 233 px sidebar. Items 3–5 → bottom row.',
        table: { category: 'Videos' },
      },
    } as any),
  } as any,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440 }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const a = args as any
    const theme        = (a.vg_theme        ?? 'light') as 'light' | 'dark'
    const showControls = (a.vg_showControls ?? true)    as boolean
    const seedPlaying  = (a.vg_isPlaying    ?? false)   as boolean
    const seedMuted    = (a.vg_isMuted      ?? false)   as boolean
    const seedSubs     = (a.vg_showSubtitles ?? false)  as boolean
    const mainVideoArg = (a.vg_mainVideo    ?? MAIN_VIDEO) as VideoItem
    const suggestedArg = (a.vg_suggestedVideos ?? SAMPLE_VIDEOS) as VideoItem[]

    const isDark = theme === 'dark'

    const [mainVideo, setMainVideo]         = useState<VideoItem>(mainVideoArg)
    const [activeIndex, setActiveIndex]     = useState<number | undefined>(undefined)
    const [isPlaying, setIsPlaying]         = useState(seedPlaying)
    const [currentTime, setCurrentTime]     = useState(mainVideoArg.currentTime ?? 0)
    const [isMuted, setIsMuted]             = useState(seedMuted)
    const [showSubtitles, setShowSubtitles] = useState(seedSubs)

    // Sync Controls panel changes into local state
    useEffect(() => setIsPlaying(seedPlaying),    [seedPlaying])
    useEffect(() => setIsMuted(seedMuted),         [seedMuted])
    useEffect(() => setShowSubtitles(seedSubs),    [seedSubs])
    useEffect(() => {
      setMainVideo(mainVideoArg)
      setCurrentTime(mainVideoArg.currentTime ?? 0)
      setActiveIndex(undefined)
    }, [JSON.stringify(mainVideoArg)])

    const handleVideoSelect = (index: number, item: VideoItem) => {
      setMainVideo(item)
      setActiveIndex(index)
      setCurrentTime(item.currentTime ?? 0)
      setIsPlaying(false)
    }

    return (
      <div
        style={{
          backgroundColor: isDark ? '#141f2e' : '#f5f7fa',
          padding: 24,
          transition: 'background-color 0.2s ease',
        }}
      >
        <VideoGallery
          theme={theme}
          showControls={showControls}
          mainVideo={{ ...mainVideo, currentTime }}
          suggestedVideos={suggestedArg}
          activeVideoIndex={activeIndex}
          onVideoSelect={handleVideoSelect}
          isPlaying={isPlaying}
          isMuted={isMuted}
          showSubtitles={showSubtitles}
          onPlayPause={() => setIsPlaying((p) => !p)}
          onSeek={(f) => setCurrentTime(Math.round(f * (mainVideo.duration ?? 0)))}
          onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
          onForward={() => setCurrentTime((t) => Math.min(mainVideo.duration ?? 0, t + 15))}
          onMuteToggle={() => setIsMuted((m) => !m)}
          onSubtitlesToggle={() => setShowSubtitles((s) => !s)}
        />
      </div>
    )
  },
}

// ─── All Media — fullscreen light + dark grid ─────────────────────────────────

export const AllMedia: Story = {
  name: 'All Media',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Exact Figma media frame (node 25127:8670) rendered in both light and dark themes with identical layout.',
      },
    },
  },
  args: {
    theme: 'light',
    overlay: true,
  },
  argTypes: {
    theme: {
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
      description: 'Theme switch for the full All Media layout',
      table: { category: 'Theme' },
    },
    ratio: { table: { disable: true } },
    src: { table: { disable: true } },
    alt: { table: { disable: true } },
    overlay: { table: { disable: true } },
  },
  render: (args) => {
    const theme = (args.theme ?? 'light') as MediaTheme
    const isDark = theme === 'dark'

    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: isDark ? FIGMA_MEDIA_CANVAS_DARK : '#ffffff',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: 752,
            maxWidth: '100%',
            backgroundColor: isDark ? FIGMA_MEDIA_BG_DARK : FIGMA_MEDIA_BG_LIGHT,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 26,
            boxSizing: 'border-box',
          }}
        >
          <div style={{ width: 400, maxWidth: '100%' }}>
            <Media ratio="square" theme={theme} overlay />
          </div>
          <div style={{ width: 720, maxWidth: '100%' }}>
            <Media ratio="video" theme={theme} overlay />
          </div>
          <div style={{ width: 405, maxWidth: '100%' }}>
            <Media ratio="story" theme={theme} overlay />
          </div>
          <div style={{ width: 520, maxWidth: '100%' }}>
            <Media ratio="horizontal" theme={theme} overlay />
          </div>
          <div style={{ width: 400, maxWidth: '100%' }}>
            <Media ratio="vertical" theme={theme} overlay />
          </div>
        </div>
      </div>
    )
  },
}

// ─── Doc stories (Docs tab only) ──────────────────────────────────────────────

const DocLabel = ({ children }: { children: string }) => (
  <p style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, margin: '0 0 6px', color: '#1e2c3e' }}>{children}</p>
)
const DocSub = ({ children }: { children: string }) => (
  <p style={{ fontFamily: 'sans-serif', fontSize: 11, margin: '0 0 8px', color: '#888' }}>{children}</p>
)
const DocSection = ({ children }: { children: string }) => (
  <h3 style={{ fontFamily: 'sans-serif', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#545454', margin: '0 0 16px', borderBottom: '1px solid #e9ecf0', paddingBottom: 8 }}>{children}</h3>
)

export const Overview: Story = {
  name: 'Overview',
  tags: ['!dev'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        story:
          'All **Media** ratios and themes, all **VideoPlayer** states, and the full **VideoGallery** layout — in one scrollable reference view.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1200 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 56, fontFamily: 'sans-serif' }}>

      {/* ── Media Ratios ── */}
      <section>
        <DocSection>Media — Aspect Ratios</DocSection>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {RATIOS.map((r) => (
            <div key={r} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <DocLabel>ratio="{r}" — {RATIO_LABELS[r]}</DocLabel>
              <div style={{ maxWidth: r === 'story' ? 240 : r === 'vertical' ? 280 : 560 }}>
                <Media ratio={r} overlay />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Media Themes ── */}
      <section>
        <DocSection>Media — Themes</DocSection>
        <div style={{ display: 'flex', gap: 24 }}>
          {(['light', 'dark'] as MediaTheme[]).map((t) => (
            <div key={t} style={{ flex: 1, backgroundColor: t === 'dark' ? '#141f2e' : '#f5f7fa', borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p style={{ fontFamily: 'sans-serif', fontSize: 12, fontWeight: 600, textTransform: 'capitalize', margin: 0, color: t === 'dark' ? '#91a2b1' : '#545454' }}>
                theme="{t}"
              </p>
              <Media ratio="video" theme={t} overlay />
            </div>
          ))}
        </div>
      </section>

      {/* ── Media with Image ── */}
      <section>
        <DocSection>Media — With Image</DocSection>
        <DocSub>Pass src to display a real image instead of the placeholder.</DocSub>
        <div style={{ maxWidth: 560 }}>
          <Media ratio="video" src={SAMPLE_IMG} alt="Mountain landscape" overlay />
        </div>
      </section>

      {/* ── VideoPlayer States ── */}
      <section>
        <DocSection>VideoPlayer — States</DocSection>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <DocLabel>isPlaying={'{false}'} — default</DocLabel>
            <DocSub>Big centre play button visible</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} isPlaying={false} showControls />
          </div>
          <div>
            <DocLabel>isPlaying={'{true}'}</DocLabel>
            <DocSub>Big button hidden, pause icon in bar</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} isPlaying showControls />
          </div>
          <div>
            <DocLabel>isMuted={'{true}'}</DocLabel>
            <DocSub>Struck speaker + accent dot indicator</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} isMuted showControls />
          </div>
          <div>
            <DocLabel>showSubtitles={'{true}'}</DocLabel>
            <DocSub>Accent dot under CC button</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} showSubtitles showControls />
          </div>
          <div>
            <DocLabel>showControls={'{false}'}</DocLabel>
            <DocSub>Controls hidden — clean media frame</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} showControls={false} />
          </div>
          <div>
            <DocLabel>poster + currentTime={'{0}'}</DocLabel>
            <DocSub>Thumbnail shown, progress bar at start</DocSub>
            <VideoPlayer
              title="Mountain Timelapse"
              poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800"
              currentTime={0} duration={360} showControls
            />
          </div>
          <div>
            <DocLabel>Progress 0%</DocLabel>
            <DocSub>currentTime=0 — bar completely empty</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={0} duration={DEMO_DURATION} showControls />
          </div>
          <div>
            <DocLabel>Progress 100%</DocLabel>
            <DocSub>currentTime=duration — bar fully filled</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={DEMO_DURATION} duration={DEMO_DURATION} showControls />
          </div>
        </div>
      </section>

      {/* ── VideoGallery Layout ── */}
      <section>
        <DocSection>VideoGallery — Full Layout</DocSection>
        <DocSub>mainVideo + 6 suggestedVideos. Desktop: main 517 px, sidebar 233 px with 3 × 156 px, bottom row 3 × 176 px. Uses Figma token colors (#e9ecf0, #f5f7fa, #d7d7d7) and responsive tablet/mobile stacking.</DocSub>

        {/* Light */}
        <div style={{ marginBottom: 24 }}>
          <DocLabel>theme="light"</DocLabel>
          <VideoGallery
            theme="light"
            mainVideo={MAIN_VIDEO}
            suggestedVideos={SAMPLE_VIDEOS}
            isPlaying={false}
            isMuted={false}
            showSubtitles={false}
            showControls
          />
        </div>

        {/* Dark */}
        <div style={{ backgroundColor: '#141f2e', borderRadius: 12, padding: 20 }}>
          <DocLabel>theme="dark"</DocLabel>
          <VideoGallery
            theme="dark"
            mainVideo={MAIN_VIDEO}
            suggestedVideos={SAMPLE_VIDEOS}
            isPlaying={false}
            isMuted={false}
            showSubtitles={false}
            showControls
          />
        </div>
      </section>

    </div>
  ),
}

