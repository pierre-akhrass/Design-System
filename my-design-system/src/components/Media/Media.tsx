import type { HTMLAttributes } from 'react'
import './Media.scss'

// ─── Types ────────────────────────────────────────────────────────────────────

export type MediaRatio = 'square' | 'video' | 'story' | 'vertical' | 'horizontal'
export type MediaTheme = 'light' | 'dark'

export interface MediaProps extends HTMLAttributes<HTMLDivElement> {
  /** Image URL — when omitted a styled placeholder is rendered */
  src?: string
  /** Alt text for the image */
  alt?: string
  /** Aspect ratio variant */
  ratio?: MediaRatio
  /** Adds a subtle dark overlay on top of the media (5 % opacity) — matches Figma */
  overlay?: boolean
  /** Colour theme — 'light' (default) | 'dark'. Also responds to `prefers-color-scheme`. */
  theme?: MediaTheme
}

// ─── Placeholder icon ─────────────────────────────────────────────────────────

const PlaceholderIcon = () => (
  <svg
    className="ds-media__placeholder-icon"
    viewBox="0 0 80 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="22" cy="14" r="8" fill="currentColor" />
    <path
      d="M0 56L22 24L38 40L56 16L80 56H0Z"
      fill="currentColor"
    />
  </svg>
)

// ─── Component ────────────────────────────────────────────────────────────────

export const Media = ({
  src,
  alt = '',
  ratio = 'video',
  overlay = true,
  theme,
  className,
  ...props
}: MediaProps) => {
  return (
    <div
      className={['ds-media', `ds-media--${ratio}`, theme && `ds-media--${theme}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="ds-media__image" />
      ) : (
        <div className="ds-media__placeholder" aria-hidden="true">
          <PlaceholderIcon />
        </div>
      )}

      {overlay && <div className="ds-media__overlay" aria-hidden="true" />}
    </div>
  )
}
