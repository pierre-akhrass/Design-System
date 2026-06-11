import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
/**
 * Carousel Component
 * @developer Mohamad oueidat
 */

import './Carousel.scss'

export type CarouselTheme = 'light' | 'dark'

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  theme?: CarouselTheme
  showNavigation?: boolean
  showFade?: boolean
  prevLabel?: string
  nextLabel?: string
  scrollAmount?: number
  children?: ReactNode
}

const ChevronLeftIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14">
    <path
      d="M15 6l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Carousel = ({
  theme = 'light',
  showNavigation = true,
  showFade = true,
  prevLabel = 'Prev',
  nextLabel = 'Next',
  scrollAmount,
  className,
  children,
  ...props
}: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateScrollState = useCallback(() => {
    const node = trackRef.current
    if (!node) return
    const { scrollLeft, scrollWidth, clientWidth } = node
    setCanScrollPrev(scrollLeft > 1)
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1)
  }, [])

  useEffect(() => {
    updateScrollState()
    const node = trackRef.current
    if (!node) return

    node.addEventListener('scroll', updateScrollState, { passive: true })
    const observer = new ResizeObserver(updateScrollState)
    observer.observe(node)
    Array.from(node.children).forEach((child) => observer.observe(child))

    return () => {
      node.removeEventListener('scroll', updateScrollState)
      observer.disconnect()
    }
  }, [updateScrollState, children])

  const scroll = (direction: 'prev' | 'next') => {
    const node = trackRef.current
    if (!node) return
    const amount = scrollAmount ?? Math.max(node.clientWidth * 0.8, 200)
    node.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  const classes = [
    'ds-carousel',
    `ds-carousel--${theme}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      <div className="ds-carousel__viewport">
        <div className="ds-carousel__track" ref={trackRef}>
          {children}
        </div>

        {showFade && (
          <>
            <div
              className="ds-carousel__fade ds-carousel__fade--start"
              aria-hidden="true"
              data-visible={canScrollPrev}
            />
            <div
              className="ds-carousel__fade ds-carousel__fade--end"
              aria-hidden="true"
              data-visible={canScrollNext}
            />
          </>
        )}

        {showNavigation && (
          <>
            <button
              type="button"
              className="ds-carousel__button ds-carousel__button--prev"
              onClick={() => scroll('prev')}
              disabled={!canScrollPrev}
              aria-label={prevLabel}
            >
              <ChevronLeftIcon />
              <span className="ds-carousel__button-label">{prevLabel}</span>
            </button>
            <button
              type="button"
              className="ds-carousel__button ds-carousel__button--next"
              onClick={() => scroll('next')}
              disabled={!canScrollNext}
              aria-label={nextLabel}
            >
              <span className="ds-carousel__button-label">{nextLabel}</span>
              <ChevronRightIcon />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export const CarouselSlide = ({
  className,
  children,
  ...props
}: CarouselSlideProps) => {
  const classes = ['ds-carousel__slide', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
