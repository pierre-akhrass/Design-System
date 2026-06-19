import { useState, type HTMLAttributes } from 'react'
import './Quote.scss'

export interface QuoteItem {
  /** Quote text */
  quote: string
  /** Author image URL */
  image?: string
  /** Author name */
  name: string
  /** Author role or title */
  role: string
}

export type QuoteVariant = 'default' | 'inline'

export interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of quote items */
  quotes: QuoteItem[]
  /** Show or hide navigation controls */
  showNavigation?: boolean
  /** Show or hide author name and role */
  showAuthor?: boolean
  /** Layout variant */
  variant?: QuoteVariant
}

const QuoteIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="52" height="38" viewBox="0 0 52 38" fill="none">
  <path d="M23 4V26C22.9967 29.1816 21.7313 32.2319 19.4816 34.4816C17.2319 36.7313 14.1816 37.9967 11 38C10.4696 38 9.96086 37.7893 9.58579 37.4142C9.21071 37.0391 9 36.5304 9 36C9 35.4696 9.21071 34.9609 9.58579 34.5858C9.96086 34.2107 10.4696 34 11 34C13.1217 34 15.1566 33.1571 16.6569 31.6569C18.1571 30.1566 19 28.1217 19 26V24H4C2.93913 24 1.92172 23.5786 1.17157 22.8284C0.421427 22.0783 0 21.0609 0 20V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H19C20.0609 0 21.0783 0.421427 21.8284 1.17157C22.5786 1.92172 23 2.93913 23 4ZM48 0H33C31.9391 0 30.9217 0.421427 30.1716 1.17157C29.4214 1.92172 29 2.93913 29 4V20C29 21.0609 29.4214 22.0783 30.1716 22.8284C30.9217 23.5786 31.9391 24 33 24H48V26C48 28.1217 47.1571 30.1566 45.6569 31.6569C44.1566 33.1571 42.1217 34 40 34C39.4696 34 38.9609 34.2107 38.5858 34.5858C38.2107 34.9609 38 35.4696 38 36C38 36.5304 38.2107 37.0391 38.5858 37.4142C38.9609 37.7893 39.4696 38 40 38C43.1816 37.9967 46.2319 36.7313 48.4816 34.4816C50.7313 32.2319 51.9967 29.1816 52 26V4C52 2.93913 51.5786 1.92172 50.8284 1.17157C50.0783 0.421427 49.0609 0 48 0Z" fill="#545454"/>
</svg>
)

const ImagePlaceholder = () => (
  <div className="ds-quote__avatar-placeholder" aria-hidden="true">
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path
        d="M42 38V10c0-2.2-1.8-4-4-4H10c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4ZM16 26l6 8 8-10 10 14H10l6-8Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  </div>
)

export const Quote = ({
  quotes,
  showNavigation = true,
  showAuthor = true,
  variant = 'default',
  className,
  ...rest
}: QuoteProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = quotes.length
  const current = quotes[activeIndex]
  if (!current) return null

  const goPrev = () => setActiveIndex(activeIndex <= 0 ? total - 1 : activeIndex - 1)
  const goNext = () => setActiveIndex(activeIndex >= total - 1 ? 0 : activeIndex + 1)

  const classes = [
    'ds-quote',
    `ds-quote--${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      {variant === 'inline' ? (
        /* Inline variant: card with left-aligned content */
        <>
          <div className="ds-quote__card">
            <QuoteIcon />
            <blockquote className="ds-quote__text">
              {current.quote}
            </blockquote>
            <div className="ds-quote__author-inline">
              <div className="ds-quote__avatar">
                {current.image ? (
                  <img src={current.image} alt={current.name} />
                ) : (
                  <ImagePlaceholder />
                )}
              </div>
              <div className="ds-quote__author">
                <span className="ds-quote__author-name">{current.name}</span>
                <span className="ds-quote__author-role">{current.role}</span>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          {total > 1 && (
            <div className="ds-quote__dots">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`ds-quote__dot${i === activeIndex ? ' ds-quote__dot--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to quote ${i + 1}`}
                >
                  {i === activeIndex ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <circle cx="6" cy="6" r="6" fill="#141F2E" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <circle opacity="0.3" cx="6" cy="6" r="6" fill="#292929" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        /* Default variant */
        <>
          <QuoteIcon />

          <blockquote className="ds-quote__text">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Navigation with avatar */}
          {showNavigation && total > 1 && (
            <div className="ds-quote__nav">
              <button
                type="button"
                className="ds-quote__nav-btn"
                onClick={goPrev}
                aria-label="Previous quote"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Prev</span>
              </button>

              <div className="ds-quote__avatar">
                {current.image ? (
                  <img src={current.image} alt={current.name} />
                ) : (
                  <ImagePlaceholder />
                )}
              </div>

              <button
                type="button"
                className="ds-quote__nav-btn"
                onClick={goNext}
                aria-label="Next quote"
              >
                <span>Next</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}

          {/* Author */}
          {showAuthor && (
            <div className="ds-quote__author">
              <span className="ds-quote__author-name">{current.name}</span>
              <span className="ds-quote__author-role">{current.role}</span>
            </div>
          )}

          {/* Dot indicators */}
          {total > 1 && (
            <div className="ds-quote__dots">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`ds-quote__dot${i === activeIndex ? ' ds-quote__dot--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to quote ${i + 1}`}
                >
                  {i === activeIndex ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <circle cx="6" cy="6" r="6" fill="#141F2E" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <circle opacity="0.3" cx="6" cy="6" r="6" fill="#292929" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
