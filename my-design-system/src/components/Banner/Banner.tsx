import type { HTMLAttributes } from 'react'
import './Banner.scss'

export type BannerTheme = 'light' | 'dark'
export type BannerLayout = 'media-right' | 'media-left' | 'stacked'
export type BannerSize = 'large' | 'medium' | 'small'

export interface BannerProps extends HTMLAttributes<HTMLElement> {
  theme?: BannerTheme
  layout?: BannerLayout
  size?: BannerSize
  logoLabel?: string
  title?: string
  description?: string
  mediaAlt?: string
  mediaSrc?: string
  showStoreBadges?: boolean
}

export const Banner = ({
  theme = 'light',
  layout = 'media-right',
  size = 'large',
  logoLabel = 'LOGO',
  title = 'Discover Your Ideal Home with Al-Futtaim Living App',
  description =
    'Explore available properties, compare units, and connect with your future home through one smart app.',
  mediaAlt = 'Banner media',
  mediaSrc,
  showStoreBadges = true,
  className,
  ...props
}: BannerProps) => {
  const classes = [
    'ds-banner',
    `ds-banner--${theme}`,
    `ds-banner--${layout}`,
    `ds-banner--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classes} {...props}>
      <div className="ds-banner__content">
        <span className="ds-banner__logo" aria-label="Logo">
          {logoLabel}
        </span>

        <p className="ds-banner__title">{title}</p>
        <p className="ds-banner__description">{description}</p>

        {showStoreBadges && (
          <div className="ds-banner__badges" aria-label="Store links">
            <span className="ds-banner__badge">iOS</span>
            <span className="ds-banner__badge">Play</span>
          </div>
        )}
      </div>

      <div className="ds-banner__media" role="img" aria-label={mediaAlt}>
        {mediaSrc ? <img src={mediaSrc} alt={mediaAlt} className="ds-banner__media-image" /> : null}
      </div>
    </article>
  )
}
