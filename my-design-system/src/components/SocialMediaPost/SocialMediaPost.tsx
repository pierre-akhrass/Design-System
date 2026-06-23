import type { ComponentType, HTMLAttributes, ReactNode } from 'react'
import './SocialMediaPost.scss'

export type SocialMediaPostTheme = 'light' | 'dark'
export type SocialMediaPostPlatform =
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'x'
export type SocialMediaPostType = 'image' | 'video' | 'text'

export interface SocialMediaPostPagination {
  current: number
  total: number
  onPrev?: () => void
  onNext?: () => void
}

export interface SocialMediaPostProps extends HTMLAttributes<HTMLElement> {
  theme?: SocialMediaPostTheme
  platform: SocialMediaPostPlatform
  type?: SocialMediaPostType
  image?: string
  imageAlt?: string
  caption?: ReactNode
  text?: ReactNode
  hashtags?: ReactNode
  pagination?: SocialMediaPostPagination
}

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M13.5 22V14H16l.5-3H13.5V9.2c0-.9.3-1.5 1.6-1.5h1.5V5.1S15.3 4.9 14.2 4.9c-2.2 0-3.7 1.4-3.7 3.8V11H8v3h2.5v8" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3v12.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M14 3a5 5 0 0 0 5 5" />
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5.5" width="20" height="13" rx="3" />
    <path d="M10 9.5v5l4.5-2.5z" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 1200 1227" width="22" height="22" aria-hidden="true" fill="currentColor">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
)

const PlayIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path d="M8 5v14l11-7Z" fill="currentColor" />
  </svg>
)

const MountainIcon = () => (
  <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
    <circle cx="44" cy="20" r="5" fill="currentColor" />
    <path
      d="M6 50 22 30l10 12 8-9 18 17Z"
      fill="currentColor"
    />
  </svg>
)

const ChevronLeftSmall = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
    <path
      d="M15 6l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChevronRightSmall = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const platformIcons: Record<SocialMediaPostPlatform, ComponentType> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  x: XIcon,
}

const platformLabels: Record<SocialMediaPostPlatform, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  x: 'X',
}

export const SocialMediaPost = ({
  theme = 'light',
  platform,
  type = 'image',
  image,
  imageAlt = '',
  caption,
  text,
  hashtags,
  pagination,
  className,
  ...props
}: SocialMediaPostProps) => {
  const PlatformIcon = platformIcons[platform]

  const classes = [
    'ds-social-media-post',
    `ds-social-media-post--${theme}`,
    `ds-social-media-post--${platform}`,
    `ds-social-media-post--${type}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classes} {...props}>
      <div className="ds-social-media-post__badge" aria-label={platformLabels[platform]}>
        <PlatformIcon />
      </div>

      {type === 'image' && (
        <div className="ds-social-media-post__media ds-social-media-post__media--image">
          {image ? (
            <img src={image} alt={imageAlt} />
          ) : (
            <span className="ds-social-media-post__placeholder">
              <MountainIcon />
            </span>
          )}

          {pagination && (
            <div className="ds-social-media-post__pagination">
              <button
                type="button"
                className="ds-social-media-post__pagination-button"
                onClick={pagination.onPrev}
                aria-label="Previous"
              >
                <ChevronLeftSmall />
              </button>
              <span className="ds-social-media-post__pagination-count">
                {pagination.current}/{pagination.total}
              </span>
              <button
                type="button"
                className="ds-social-media-post__pagination-button"
                onClick={pagination.onNext}
                aria-label="Next"
              >
                <ChevronRightSmall />
              </button>
            </div>
          )}

          {caption && <div className="ds-social-media-post__caption">{caption}</div>}
        </div>
      )}

      {type === 'video' && (
        <div className="ds-social-media-post__media ds-social-media-post__media--video">
          <span className="ds-social-media-post__play" aria-hidden="true">
            <PlayIcon size={28} />
          </span>
          <span className="ds-social-media-post__type-tag" aria-hidden="true">
            <PlayIcon size={14} />
          </span>
        </div>
      )}

      {type === 'text' && (
        <div className="ds-social-media-post__media ds-social-media-post__media--text">
          {text && <p className="ds-social-media-post__text">{text}</p>}
          {hashtags && (
            <p className="ds-social-media-post__hashtags">{hashtags}</p>
          )}
        </div>
      )}
    </article>
  )
}
