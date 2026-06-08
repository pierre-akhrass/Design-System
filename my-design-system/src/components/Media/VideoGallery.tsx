import type { HTMLAttributes } from 'react'
import { VideoPlayer } from './VideoPlayer'
import type { VideoPlayerProps } from './VideoPlayer'
import './VideoGallery.scss'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface VideoItem {
  /** Optional unique key — used as React key; falls back to array index. */
  id?: string
  /** Video source URL. */
  src?: string
  /** Poster / thumbnail image URL. */
  poster?: string
  /** Video title displayed in the player controls bar. */
  title?: string
  /** Total duration in seconds. */
  duration?: number
  /** Current playback position in seconds. */
  currentTime?: number
}

// VideoPlayer passthrough prop keys (all but className / HTMLAttributes)
type PlayerPassthroughKeys =
  | 'isPlaying' | 'isMuted' | 'showSubtitles' | 'showControls'
  | 'onPlayPause' | 'onSeek' | 'onRewind' | 'onForward'
  | 'onMuteToggle' | 'onSubtitlesToggle' | 'onFullscreen' | 'onMore'

export interface VideoGalleryProps
  extends HTMLAttributes<HTMLDivElement>,
    Pick<VideoPlayerProps, PlayerPassthroughKeys> {

  // ── Videos ──────────────────────────────────────────────────────────────
  /** The main featured video rendered in the large VideoPlayer. */
  mainVideo?: VideoItem
  /**
   * Up to 6 suggested videos ("Suggested Videos" in Figma).
   * Items 0-2 appear in the right sidebar.
   * Items 3-5 appear in the bottom row.
   */
  suggestedVideos?: VideoItem[]

  // ── Selection ───────────────────────────────────────────────────────────
  /**
   * Zero-based index into `suggestedVideos` that is visually highlighted.
   * `undefined` means the main video is the active selection (default).
   */
  activeVideoIndex?: number
  /**
   * Called when the user clicks a suggested video thumbnail.
   * @param index Zero-based index into `suggestedVideos`.
   * @param item  The full VideoItem for the clicked thumbnail.
   */
  onVideoSelect?: (index: number, item: VideoItem) => void
}

// ─── Thumbnail ────────────────────────────────────────────────────────────────

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 4.5L19.5 12L6 19.5V4.5Z" fill="currentColor" />
  </svg>
)

interface ThumbProps {
  item: VideoItem
  layout: 'sidebar' | 'bottom'
  isActive?: boolean
  onClick?: () => void
}

const VideoThumb = ({ item, layout, isActive = false, onClick }: ThumbProps) => (
  <button
    className={[
      'ds-video-gallery__thumb',
      `ds-video-gallery__thumb--${layout}`,
      isActive ? 'ds-video-gallery__thumb--active' : '',
    ].filter(Boolean).join(' ')}
    aria-label={`Play ${item.title ?? 'video'}`}
    aria-pressed={isActive}
    onClick={onClick}
  >
    {item.poster ? (
      <img src={item.poster} alt="" className="ds-video-gallery__thumb-img" />
    ) : (
      <div className="ds-video-gallery__thumb-placeholder" aria-hidden="true" />
    )}

    <div className="ds-video-gallery__thumb-overlay" aria-hidden="true">
      <div className="ds-video-gallery__thumb-play-circle">
        <PlayIcon />
      </div>
    </div>

    {item.title && (
      <span className="ds-video-gallery__thumb-title">{item.title}</span>
    )}
  </button>
)

// ─── Component ────────────────────────────────────────────────────────────────

export const VideoGallery = ({
  mainVideo = {},
  suggestedVideos = [],
  activeVideoIndex,
  onVideoSelect,
  isPlaying,
  isMuted,
  showSubtitles,
  showControls,
  onPlayPause,
  onSeek,
  onRewind,
  onForward,
  onMuteToggle,
  onSubtitlesToggle,
  onFullscreen,
  onMore,
  className,
  ...props
}: VideoGalleryProps) => {
  const sidebarItems = suggestedVideos.slice(0, 3)
  const bottomItems  = suggestedVideos.slice(3, 6)

  return (
    <div className={['ds-video-gallery', className].filter(Boolean).join(' ')} {...props}>

      {/* ── Layout: Main Video + Suggested Videos (sidebar) ───────────── */}
      <div className="ds-video-gallery__layout">
        <div className="ds-video-gallery__main">
          <VideoPlayer
            src={mainVideo.src}
            poster={mainVideo.poster}
            title={mainVideo.title}
            currentTime={mainVideo.currentTime}
            duration={mainVideo.duration}
            isPlaying={isPlaying}
            isMuted={isMuted}
            showSubtitles={showSubtitles}
            showControls={showControls}
            onPlayPause={onPlayPause}
            onSeek={onSeek}
            onRewind={onRewind}
            onForward={onForward}
            onMuteToggle={onMuteToggle}
            onSubtitlesToggle={onSubtitlesToggle}
            onFullscreen={onFullscreen}
            onMore={onMore}
          />
        </div>

        {sidebarItems.length > 0 && (
          <aside className="ds-video-gallery__sidebar" aria-label="Suggested Videos">
            {sidebarItems.map((item, i) => (
              <VideoThumb
                key={item.id ?? i}
                item={item}
                layout="sidebar"
                isActive={activeVideoIndex === i}
                onClick={() => onVideoSelect?.(i, item)}
              />
            ))}
          </aside>
        )}
      </div>

      {/* ── Bottom row (items 4–6) ─────────────────────────────────────── */}
      {bottomItems.length > 0 && (
        <div className="ds-video-gallery__bottom">
          {bottomItems.map((item, i) => (
            <VideoThumb
              key={item.id ?? (i + 3)}
              item={item}
              layout="bottom"
              isActive={activeVideoIndex === i + 3}
              onClick={() => onVideoSelect?.(i + 3, item)}
            />
          ))}
        </div>
      )}

    </div>
  )
}
