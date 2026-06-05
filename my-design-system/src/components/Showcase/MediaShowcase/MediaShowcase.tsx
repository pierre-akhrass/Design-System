import { useState } from 'react'
import { Media } from '../../Media/Media'
import type { MediaRatio } from '../../Media/Media'
import { VideoPlayer } from '../../Media/VideoPlayer'
import { VideoGallery } from '../../Media/VideoGallery'
import type { VideoItem } from '../../Media/VideoGallery'
import './MediaShowcase.scss'

// ─── Icons ────────────────────────────────────────────────────────────────────

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
    <path d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.751.751 0 01-1.042-.018.751.751 0 01-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
    <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
  </svg>
)

// ─── Small props table ────────────────────────────────────────────────────────

interface PropEntry { name: string; type: string; description: string }

const PropsTable = ({ rows }: { rows: PropEntry[] }) => (
  <div className="ms-showcase__props-table">
    {rows.map((row) => (
      <div key={row.name} className="ms-showcase__prop-row">
        <code className="ms-showcase__prop-name">{row.name}</code>
        <span className="ms-showcase__prop-type">{row.type}</span>
        <span className="ms-showcase__prop-desc">{row.description}</span>
      </div>
    ))}
  </div>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const RATIOS: { key: MediaRatio; label: string; aspectLabel: string; usage: string }[] = [
  { key: 'square',     label: 'Square',     aspectLabel: '1 : 1',    usage: 'Profile, thumbnails'  },
  { key: 'video',      label: 'Video',      aspectLabel: '16 : 9',   usage: 'Video, banners'       },
  { key: 'story',      label: 'Story',      aspectLabel: '9 : 16',   usage: 'Stories, reels'       },
  { key: 'vertical',   label: 'Vertical',   aspectLabel: '10 : 13',  usage: 'Cards, editorial'     },
  { key: 'horizontal', label: 'Horizontal', aspectLabel: '13 : 10',  usage: 'Cards, features'      },
]

const PLAYER_PROPS: PropEntry[] = [
  { name: 'isPlaying',         type: 'boolean',         description: 'Play / pause state — drives icon and big centre button' },
  { name: 'currentTime',       type: 'number',          description: 'Playback position in seconds — drives timestamp + progress bar' },
  { name: 'duration',          type: 'number',          description: 'Total duration in seconds' },
  { name: 'isMuted',           type: 'boolean',         description: 'Muted state — swaps volume icon, adds accent dot' },
  { name: 'showSubtitles',     type: 'boolean',         description: 'Subtitles active — adds accent dot below CC button' },
  { name: 'showControls',      type: 'boolean',         description: 'Show or hide the entire Player Controllers overlay' },
  { name: 'onPlayPause',       type: '() => void',      description: 'Play, pause, or big centre button clicked' },
  { name: 'onSeek',            type: '(fraction) => void', description: 'Progress bar clicked — fraction is 0–1' },
  { name: 'onRewind / onForward', type: '() => void',   description: 'Rewind or forward 15 s buttons clicked' },
  { name: 'onMuteToggle',      type: '() => void',      description: 'Volume button clicked' },
  { name: 'onSubtitlesToggle', type: '() => void',      description: 'Subtitles (CC) button clicked' },
]

const GALLERY_PROPS: PropEntry[] = [
  { name: 'mainVideo',          type: 'VideoItem',       description: 'Featured video rendered in the large player' },
  { name: 'suggestedVideos',    type: 'VideoItem[]',     description: 'Items 0–2 → sidebar. Items 3–5 → bottom row' },
  { name: 'activeVideoIndex',   type: 'number',          description: 'Zero-based index in suggestedVideos that is highlighted' },
  { name: 'onVideoSelect',      type: '(index, item) => void', description: 'Called when a thumbnail is clicked' },
  { name: '...VideoPlayer props', type: '—',             description: 'All VideoPlayer props pass through to the main player' },
]

const SAMPLE_VIDEOS: VideoItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: `ep-${i + 1}`,
  title: `Episode ${i + 1}`,
  duration: 1800 + i * 300,
  currentTime: 0,
}))

const MAIN_VIDEO: VideoItem = { title: 'Shop and Drop', currentTime: 2858, duration: 6752 }

// ─── Component ────────────────────────────────────────────────────────────────

export const MediaShowcase = () => {
  // Interactive VideoGallery state
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
    <section className="ms-showcase" aria-labelledby="media-showcase-title">

      {/* ── Section header ──────────────────────────────────────────────── */}
      <header className="ms-showcase__header">
        <span className="ms-showcase__badge">Component</span>
        <h2 className="ms-showcase__title" id="media-showcase-title">
          Media
        </h2>
        <p className="ms-showcase__description">
          Three components that cover every media need — a flexible image container with five
          aspect-ratio presets, a fully controlled video player with custom controls, and a
          video gallery layout with suggested video navigation.
        </p>
      </header>

      {/* ── Image Container ───────────────────────────────────────────── */}
      <div className="ms-showcase__block">
        <div className="ms-showcase__block-header">
          <h3 className="ms-showcase__block-title">Image Container</h3>
          <p className="ms-showcase__block-subtitle">
            Five aspect-ratio presets via the <strong>ratio</strong> prop. Pass an image URL
            via <strong>src</strong> or leave it empty for the built-in placeholder. An optional
            5 % dark <strong>overlay</strong> keeps text on top of images legible.
          </p>
        </div>

        <div className="ms-showcase__ratio-grid">
          {RATIOS.map(({ key, label, aspectLabel, usage }) => (
            <div key={key} className="ms-showcase__ratio-card">
              <div className="ms-showcase__ratio-preview">
                <div className={`ms-showcase__ratio-frame ms-showcase__ratio-frame--${key}`}>
                  <Media ratio={key} overlay={false} />
                </div>
              </div>
              <div className="ms-showcase__ratio-body">
                <span className="ms-showcase__ratio-name">{label}</span>
                <code className="ms-showcase__ratio-aspect">{aspectLabel}</code>
                <span className="ms-showcase__ratio-usage">{usage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Video Player ──────────────────────────────────────────────── */}
      <div className="ms-showcase__block">
        <div className="ms-showcase__block-header">
          <h3 className="ms-showcase__block-title">Video Player</h3>
          <p className="ms-showcase__block-subtitle">
            Fully controlled — no internal state. Every button fires a callback; every visual
            state is driven by a prop. The interactive demo below wires all controls together
            with <strong>useState</strong> so you can see the full API in action.
          </p>
        </div>

        {/* Live interactive player */}
        <div className="ms-showcase__player-canvas">
          <VideoPlayer
            title="Shop and Drop — Interactive Demo"
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={6752}
            isMuted={isMuted}
            showSubtitles={showSubtitles}
            onPlayPause={() => setIsPlaying((p) => !p)}
            onSeek={(f) => setCurrentTime(Math.round(f * 6752))}
            onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
            onForward={() => setCurrentTime((t) => Math.min(6752, t + 15))}
            onMuteToggle={() => setIsMuted((m) => !m)}
            onSubtitlesToggle={() => setShowSubtitles((s) => !s)}
          />
        </div>

        {/* Props table */}
        <PropsTable rows={PLAYER_PROPS} />
      </div>

      {/* ── Video Gallery ────────────────────────────────────────────── */}
      <div className="ms-showcase__block">
        <div className="ms-showcase__block-header">
          <h3 className="ms-showcase__block-title">Video Gallery</h3>
          <p className="ms-showcase__block-subtitle">
            Combines the Video Player with a "Suggested Videos" sidebar (items 0–2) and a
            bottom row (items 3–5) from a single <strong>suggestedVideos</strong> array. Click
            any thumbnail below — the main player updates and the thumbnail gets a teal active
            border.
          </p>
        </div>

        {/* Live interactive gallery */}
        <div className="ms-showcase__gallery-canvas">
          <VideoGallery
            mainVideo={{ ...mainVideo, currentTime }}
            suggestedVideos={SAMPLE_VIDEOS}
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

        {/* Props table */}
        <PropsTable rows={GALLERY_PROPS} />
      </div>

      {/* ── Storybook CTA ───────────────────────────────────────────────── */}
      <div className="ms-showcase__cta">
        <div className="ms-showcase__cta-text">
          <span className="ms-showcase__cta-heading">
            Explore in Storybook
            <ExternalLinkIcon />
          </span>
          <span className="ms-showcase__cta-body">
            Three dedicated Storybook sections — Media, VideoPlayer, VideoGallery — each with
            argType documentation, live controls, and interactive demos.
          </span>
        </div>
        <a
          href="http://localhost:6006/?path=/story/components-media--default"
          target="_blank"
          rel="noopener noreferrer"
          className="ms-showcase__cta-link"
        >
          Open Storybook
          <ArrowRightIcon />
        </a>
      </div>

    </section>
  )
}

