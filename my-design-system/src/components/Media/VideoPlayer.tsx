import type { HTMLAttributes, MouseEvent } from 'react'
import './VideoPlayer.scss'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface VideoPlayerProps extends HTMLAttributes<HTMLDivElement> {
  // ── Media ──────────────────────────────────────────────────────────────────
  /** Video source URL. When provided, an actual <video> element is rendered. */
  src?: string
  /** Poster / thumbnail image shown before playback starts. */
  poster?: string

  // ── Info bar ("Titles & episodes" in Figma) ────────────────────────────────
  /** Video title displayed in the controls bar. */
  title?: string
  /** Current playback position in seconds — drives the timestamp display. */
  currentTime?: number
  /** Total video duration in seconds — drives the timestamp display. */
  duration?: number

  // ── Playback (fully controlled — no internal state) ───────────────────────
  /**
   * Whether the video is currently playing.
   * Controls the play/pause icon and the big centred play button visibility.
   * @default false
   */
  isPlaying?: boolean
  /** Called when the user clicks play, pause, or the big centred play button. */
  onPlayPause?: () => void
  /** Called when the user clicks the Rewind 15 s button. */
  onRewind?: () => void
  /** Called when the user clicks the Forward 15 s button. */
  onForward?: () => void

  // ── Progress bar ("Progress bar" in Figma) ─────────────────────────────────
  /**
   * Called when the user clicks the progress bar.
   * Receives a fraction 0–1 representing the click position.
   * Compute target time as `fraction × duration`.
   */
  onSeek?: (fraction: number) => void

  // ── Volume ─────────────────────────────────────────────────────────────────
  /**
   * Muted state — reflected in the volume icon (speaker vs. muted speaker).
   * @default false
   */
  isMuted?: boolean
  /** Called when the user clicks the volume button. Toggle `isMuted` in response. */
  onMuteToggle?: () => void

  // ── Subtitles ──────────────────────────────────────────────────────────────
  /**
   * Whether subtitles are active — button renders with an accent underline when true.
   * @default false
   */
  showSubtitles?: boolean
  /** Called when the user clicks the subtitles button. Toggle `showSubtitles` in response. */
  onSubtitlesToggle?: () => void

  // ── Other controls ─────────────────────────────────────────────────────────
  /** Called when the user clicks the Fullscreen button. */
  onFullscreen?: () => void
  /** Called when the user clicks the More (⋮) button. */
  onMore?: () => void

  // ── Visibility ─────────────────────────────────────────────────────────────
  /**
   * Show or hide the "Player Controllers" overlay bar at the bottom.
   * Set to `false` to render a bare media frame with no UI.
   * @default true
   */
  showControls?: boolean
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  if (h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }
  return `${m}:${String(s).padStart(2, '0')}`
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const PlayIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 4.5L19.5 12L6 19.5V4.5Z" fill="currentColor" />
  </svg>
)

const PauseIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="4" width="4" height="16" rx="1" fill="currentColor" />
    <rect x="15" y="4" width="4" height="16" rx="1" fill="currentColor" />
  </svg>
)

const Rewind15Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="currentColor" />
    <text x="8" y="15.5" fontSize="6" fontWeight="700" fontFamily="sans-serif" fill="currentColor">15</text>
  </svg>
)

const Forward15Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z" fill="currentColor" />
    <text x="8" y="15.5" fontSize="6" fontWeight="700" fontFamily="sans-serif" fill="currentColor">15</text>
  </svg>
)

const VolumeOnIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="currentColor" />
  </svg>
)

const VolumeMutedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="currentColor" />
  </svg>
)

const SubtitlesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H5v-2h7v2zm7 0h-5v-2h5v2zm0-4H5V9h14v2z" fill="currentColor" />
  </svg>
)

const FullscreenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor" />
  </svg>
)

const MoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="5" r="2" fill="currentColor" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <circle cx="12" cy="19" r="2" fill="currentColor" />
  </svg>
)

// ─── Component ────────────────────────────────────────────────────────────────

export const VideoPlayer = ({
  src,
  poster,
  title = 'Untitled',
  currentTime = 0,
  duration = 0,
  isPlaying = false,
  isMuted = false,
  showSubtitles = false,
  showControls = true,
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
}: VideoPlayerProps) => {
  const progress = duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0

  const handleProgressClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!onSeek) return
    const rect = e.currentTarget.getBoundingClientRect()
    const fraction = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    onSeek(fraction)
  }

  return (
    <div className={['ds-video-player', className].filter(Boolean).join(' ')} {...props}>

      {/* ── Media area ────────────────────────────────────────────────── */}
      <div className="ds-video-player__media">
        {src ? (
          <video
            className="ds-video-player__video"
            src={src}
            poster={poster}
          />
        ) : poster ? (
          <img src={poster} alt="" className="ds-video-player__poster" />
        ) : (
          <div className="ds-video-player__placeholder" aria-hidden="true" />
        )}

        {/* Big centred button — play when paused, visible on hover when playing */}
        <button
          className={[
            'ds-video-player__big-play',
            isPlaying ? 'ds-video-player__big-play--playing' : '',
          ].filter(Boolean).join(' ')}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          onClick={onPlayPause}
        >
          <div className="ds-video-player__big-play-circle">
            {isPlaying ? <PauseIcon size={40} /> : <PlayIcon size={40} />}
          </div>
        </button>
      </div>

      {/* ── Player Controllers ─────────────────────────────────────────── */}
      {showControls && (
        <div className="ds-video-player__controls">

          {/* Info — Titles & episodes + timestamp */}
          <div className="ds-video-player__info">
            <div className="ds-video-player__titles">
              <span className="ds-video-player__title">{title}</span>
            </div>
            <span className="ds-video-player__time" aria-label="Video timestamp">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="ds-video-player__progress"
            role="slider"
            aria-label="Video progress"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onClick={handleProgressClick}
            onKeyDown={(e) => {
              if (!onSeek || !duration) return
              if (e.key === 'ArrowRight') onSeek(Math.min(1, currentTime / duration + 0.05))
              if (e.key === 'ArrowLeft')  onSeek(Math.max(0, currentTime / duration - 0.05))
            }}
          >
            <div className="ds-video-player__progress-track" />
            <div className="ds-video-player__progress-fill" style={{ width: `${progress}%` }} />
          </div>

          {/* Controllers — Left side + Right side */}
          <div className="ds-video-player__controllers">

            {/* Left side */}
            <div className="ds-video-player__controllers-left">
              <button
                className="ds-video-player__btn"
                aria-label={isPlaying ? 'Pause' : 'Play'}
                onClick={onPlayPause}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                className="ds-video-player__btn"
                aria-label="Rewind 15 seconds"
                onClick={onRewind}
              >
                <Rewind15Icon />
              </button>
              <button
                className="ds-video-player__btn"
                aria-label="Forward 15 seconds"
                onClick={onForward}
              >
                <Forward15Icon />
              </button>
            </div>

            {/* Right side */}
            <div className="ds-video-player__controllers-right">
              <button
                className={['ds-video-player__btn', isMuted ? 'ds-video-player__btn--active' : ''].filter(Boolean).join(' ')}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                aria-pressed={isMuted}
                onClick={onMuteToggle}
              >
                {isMuted ? <VolumeMutedIcon /> : <VolumeOnIcon />}
              </button>
              <button
                className={['ds-video-player__btn', showSubtitles ? 'ds-video-player__btn--active' : ''].filter(Boolean).join(' ')}
                aria-label="Subtitles"
                aria-pressed={showSubtitles}
                onClick={onSubtitlesToggle}
              >
                <SubtitlesIcon />
              </button>
              <button
                className="ds-video-player__btn"
                aria-label="Fullscreen"
                onClick={onFullscreen}
              >
                <FullscreenIcon />
              </button>
              <button
                className="ds-video-player__btn ds-video-player__btn--more"
                aria-label="More options"
                onClick={onMore}
              >
                <MoreIcon />
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
