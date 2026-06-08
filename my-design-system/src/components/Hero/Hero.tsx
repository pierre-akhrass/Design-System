import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { Button } from '../Button/Button'
import './Hero.scss'

export type HeroVariant = 'centered' | 'bottom-left' | 'split'
export type HeroMode = 'light' | 'dark'

export interface HeroAction {
  label: ReactNode
  onClick?: () => void
  href?: string
}

export interface HeroBrandCard {
  logo?: ReactNode
  text?: ReactNode
  primary?: HeroAction
  secondary?: HeroAction
}

export interface HeroStatus {
  icon?: ReactNode
  text?: ReactNode
  linkLabel?: ReactNode
  linkHref?: string
}

/** A single slide shown by the Hero component. */
export interface HeroSlide {
  image?: string
  title?: ReactNode
  subtitle?: ReactNode
  brand?: HeroBrandCard
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  status?: HeroStatus
}

export interface HeroProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: HeroVariant
  mode?: HeroMode
  /** Multiple slides — when provided the hero rotates through them. */
  slides?: HeroSlide[]
  /** Auto-advance interval in ms. 0 disables auto-play. */
  autoPlay?: number
  /** Controlled 1-based active slide index. */
  currentSlide?: number
  /** Force pagination total when no slides[] is provided. */
  totalSlides?: number
  /** Fired with the new 1-based index on every change. */
  onSlideChange?: (index: number) => void

  /* Single-slide convenience props (used when slides is omitted) */
  image?: string
  title?: ReactNode
  subtitle?: ReactNode
  brand?: HeroBrandCard
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  status?: HeroStatus
}

/* ---------------- icons ---------------- */
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m12 2 2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)
const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

/* ---------------- helpers ---------------- */
const renderAction = (
  action: HeroAction | undefined,
  variant: 'filled' | 'plain',
  icon?: ReactNode,
) => {
  if (!action) return null
  return (
    <Button
      variant={variant}
      onClick={() => {
        action.onClick?.()
        if (action.href) window.open(action.href, '_self')
      }}
    >
      {icon}
      {action.label}
    </Button>
  )
}

interface PaginationProps {
  current: number
  total: number
  onChange: (next: number) => void
}

const Pagination = ({ current, total, onChange }: PaginationProps) => {
  if (total <= 1) return null
  const items = Array.from({ length: total }, (_, i) => i + 1)
  return (
    <div className="ds-hero__pagination" role="tablist" aria-label="Hero slides">
      {items.map((i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === current}
          aria-label={`Go to slide ${i}`}
          className={`ds-hero__page${i === current ? ' ds-hero__page--active' : ''}`}
          onClick={() => onChange(i)}
        >
          {String(i).padStart(2, '0')}
        </button>
      ))}
      <div className="ds-hero__progress" aria-hidden="true">
        <div
          className="ds-hero__progress-fill"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  )
}

/* ---------------- variants ---------------- */
const CenteredVariant = ({
  slide,
  pagination,
}: {
  slide: HeroSlide
  pagination: PaginationProps
}) => (
  <>
    <div className="ds-hero__overlay" />
    <div className="ds-hero__centered">
      <div className="ds-hero__centered-text">
        <h2 className="ds-hero__title">{slide.title}</h2>
        {slide.subtitle && <p className="ds-hero__subtitle">{slide.subtitle}</p>}
      </div>
      {slide.brand && (
        <div className="ds-hero__brand">
          {slide.brand.logo && <div className="ds-hero__brand-logo">{slide.brand.logo}</div>}
          <div className="ds-hero__brand-body">
            {slide.brand.text && <div className="ds-hero__brand-text">{slide.brand.text}</div>}
            <div className="ds-hero__brand-actions">
              {renderAction(slide.brand.primary, 'filled')}
              {renderAction(slide.brand.secondary, 'plain', <StarIcon />)}
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="ds-hero__footer">
      <div className="ds-hero__actions">
        {renderAction(slide.primaryAction, 'filled')}
        {renderAction(slide.secondaryAction, 'plain', <StarIcon />)}
      </div>
      <Pagination {...pagination} />
    </div>
  </>
)

const BottomLeftVariant = ({
  slide,
  pagination,
}: {
  slide: HeroSlide
  pagination: PaginationProps
}) => (
  <>
    <div className="ds-hero__overlay" />
    <div className="ds-hero__bl">
      <h2 className="ds-hero__title">{slide.title}</h2>
      {slide.subtitle && <p className="ds-hero__subtitle">{slide.subtitle}</p>}
      <div className="ds-hero__actions">
        {renderAction(slide.primaryAction, 'filled')}
        {slide.secondaryAction && (
          <Button
            variant="plain"
            onClick={() => {
              slide.secondaryAction?.onClick?.()
              if (slide.secondaryAction?.href) window.open(slide.secondaryAction.href, '_self')
            }}
          >
            {slide.secondaryAction.label}
            <ArrowRightIcon />
          </Button>
        )}
      </div>
    </div>
    <Pagination {...pagination} />
  </>
)

const SplitVariant = ({
  slide,
  pagination,
}: {
  slide: HeroSlide
  pagination: PaginationProps
}) => (
  <>
    <div
      className="ds-hero__split-image"
      style={slide.image ? { backgroundImage: `url(${slide.image})` } : undefined}
    >
      {slide.status && (
        <div className="ds-hero__status">
          <span className="ds-hero__status-item">
            {slide.status.icon ?? <ClockIcon />}
            <span>{slide.status.text}</span>
          </span>
          {slide.status.linkLabel && (
            <a className="ds-hero__status-link" href={slide.status.linkHref ?? '#'}>
              <PinIcon />
              {slide.status.linkLabel}
            </a>
          )}
        </div>
      )}
    </div>
    <div className="ds-hero__split-panel">
      <div className="ds-hero__split-content">
        <h2 className="ds-hero__title">{slide.title}</h2>
        {slide.subtitle && <p className="ds-hero__subtitle">{slide.subtitle}</p>}
        <div className="ds-hero__actions">
          {renderAction(slide.primaryAction, 'filled')}
          {slide.secondaryAction && (
            <Button
              variant="plain"
              onClick={() => {
                slide.secondaryAction?.onClick?.()
                if (slide.secondaryAction?.href) window.open(slide.secondaryAction.href, '_self')
              }}
            >
              {slide.secondaryAction.label}
              <ArrowRightIcon />
            </Button>
          )}
        </div>
      </div>
      <Pagination {...pagination} />
    </div>
  </>
)

/* ---------------- root ---------------- */
export const Hero = ({
  variant = 'centered',
  mode = 'dark',
  slides,
  autoPlay = 0,
  currentSlide,
  totalSlides,
  onSlideChange,
  image,
  title,
  subtitle,
  brand,
  primaryAction,
  secondaryAction,
  status,
  className,
  style,
  ...divProps
}: HeroProps) => {
  const singleSlide: HeroSlide = {
    image,
    title,
    subtitle,
    brand,
    primaryAction,
    secondaryAction,
    status,
  }
  const baseList: HeroSlide[] = slides && slides.length > 0 ? slides : [singleSlide]
  const padded =
    totalSlides && totalSlides > baseList.length
      ? [
          ...baseList,
          ...Array.from(
            { length: totalSlides - baseList.length },
            () => singleSlide,
          ),
        ]
      : baseList
  const total = padded.length

  const [internalIdx, setInternalIdx] = useState(0)
  const isControlled = typeof currentSlide === 'number'
  const activeIdx = isControlled
    ? Math.min(Math.max(0, (currentSlide as number) - 1), total - 1)
    : internalIdx

  const goTo = useCallback(
    (oneBased: number) => {
      const zero = (((oneBased - 1) % total) + total) % total
      if (!isControlled) setInternalIdx(zero)
      onSlideChange?.(zero + 1)
    },
    [isControlled, onSlideChange, total],
  )

  const goToRef = useRef(goTo)
  goToRef.current = goTo
  useEffect(() => {
    if (!autoPlay || total <= 1) return
    const id = window.setInterval(() => {
      goToRef.current(activeIdx + 2)
    }, autoPlay)
    return () => window.clearInterval(id)
  }, [autoPlay, total, activeIdx])

  const slide = padded[activeIdx] ?? padded[0]

  const classes = [
    'ds-hero',
    `ds-hero--${variant}`,
    `ds-hero--mode-${mode}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const containerStyle: CSSProperties = {
    ...(slide.image && variant !== 'split'
      ? { backgroundImage: `url(${slide.image})` }
      : null),
    ...style,
  }

  const pagination: PaginationProps = {
    current: activeIdx + 1,
    total,
    onChange: goTo,
  }

  return (
    <div className={classes} style={containerStyle} {...divProps}>
      {variant === 'centered' && (
        <CenteredVariant slide={slide} pagination={pagination} />
      )}
      {variant === 'bottom-left' && (
        <BottomLeftVariant slide={slide} pagination={pagination} />
      )}
      {variant === 'split' && (
        <SplitVariant slide={slide} pagination={pagination} />
      )}
    </div>
  )
}
