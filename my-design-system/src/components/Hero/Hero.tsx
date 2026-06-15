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
import { NavItem } from '../NavItem/NavItem'
import { Overlay } from '../Overlay/Overlay'
import './Hero.scss'

export type HeroVariant = 'section-hero' | 'split'
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
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.25C6.66498 1.25 5.35994 1.64588 4.2499 2.38758C3.13987 3.12928 2.27471 4.18349 1.76382 5.41689C1.25292 6.65029 1.11925 8.00749 1.3797 9.31686C1.64015 10.6262 2.28303 11.829 3.22703 12.773C4.17104 13.717 5.37377 14.3598 6.68314 14.6203C7.99252 14.8808 9.34971 14.7471 10.5831 14.2362C11.8165 13.7253 12.8707 12.8601 13.6124 11.7501C14.3541 10.6401 14.75 9.33502 14.75 8C14.748 6.2104 14.0362 4.49466 12.7708 3.22922C11.5053 1.96378 9.78961 1.25199 8 1.25ZM8 13.25C6.96165 13.25 5.94662 12.9421 5.08326 12.3652C4.2199 11.7883 3.547 10.9684 3.14964 10.0091C2.75228 9.04978 2.64831 7.99418 2.85088 6.97578C3.05345 5.95738 3.55347 5.02191 4.28769 4.28769C5.02192 3.55346 5.95738 3.05345 6.97578 2.85088C7.99418 2.6483 9.04978 2.75227 10.0091 3.14963C10.9684 3.54699 11.7883 4.2199 12.3652 5.08326C12.9421 5.94661 13.25 6.96165 13.25 8C13.2485 9.39193 12.6949 10.7264 11.7107 11.7107C10.7264 12.6949 9.39193 13.2485 8 13.25ZM12.25 8C12.25 8.19891 12.171 8.38968 12.0303 8.53033C11.8897 8.67098 11.6989 8.75 11.5 8.75H8C7.80109 8.75 7.61032 8.67098 7.46967 8.53033C7.32902 8.38968 7.25 8.19891 7.25 8V4.5C7.25 4.30109 7.32902 4.11032 7.46967 3.96967C7.61032 3.82902 7.80109 3.75 8 3.75C8.19892 3.75 8.38968 3.82902 8.53033 3.96967C8.67098 4.11032 8.75 4.30109 8.75 4.5V7.25H11.5C11.6989 7.25 11.8897 7.32902 12.0303 7.46967C12.171 7.61032 12.25 7.80109 12.25 8Z" fill="currentColor"/>
  </svg>
)
const StatusDot = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M13 6.5C13 7.78558 12.6188 9.04229 11.9046 10.1112C11.1903 11.1801 10.1752 12.0132 8.98744 12.5052C7.79973 12.9972 6.49279 13.1259 5.23192 12.8751C3.97104 12.6243 2.81285 12.0052 1.90381 11.0962C0.994767 10.1872 0.375703 9.02896 0.124899 7.76809C-0.125905 6.50721 0.00281635 5.20028 0.494786 4.01256C0.986756 2.82484 1.81988 1.80968 2.8888 1.09545C3.95772 0.381218 5.21442 0 6.5 0C8.22325 0.00215003 9.8753 0.68766 11.0938 1.90618C12.3123 3.1247 12.9979 4.77675 13 6.5Z" fill="currentColor"/>
  </svg>
)
const ArrowElbowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13.5306 5.53063L10.5306 8.53063C10.3897 8.67153 10.1986 8.75068 9.99938 8.75068C9.80012 8.75068 9.60902 8.67153 9.46813 8.53063C9.32723 8.38973 9.24807 8.19864 9.24807 7.99938C9.24807 7.80012 9.32723 7.60902 9.46813 7.46813L11.1875 5.75H4.75V14C4.75 14.1989 4.67098 14.3897 4.53033 14.5303C4.38968 14.671 4.19891 14.75 4 14.75C3.80109 14.75 3.61032 14.671 3.46967 14.5303C3.32902 14.3897 3.25 14.1989 3.25 14V5C3.25 4.80109 3.32902 4.61033 3.46967 4.46967C3.61032 4.32902 3.80109 4.25 4 4.25H11.1875L9.46937 2.53063C9.39961 2.46086 9.34427 2.37804 9.30651 2.28689C9.26876 2.19574 9.24932 2.09804 9.24932 1.99938C9.24932 1.90072 9.26876 1.80302 9.30651 1.71187C9.34427 1.62072 9.39961 1.53789 9.46937 1.46813C9.53914 1.39836 9.62196 1.34302 9.71311 1.30527C9.80427 1.26751 9.90196 1.24808 10.0006 1.24808C10.0993 1.24808 10.197 1.26751 10.2881 1.30527C10.3793 1.34302 10.4621 1.39836 10.5319 1.46813L13.5319 4.46813C13.6017 4.53789 13.6571 4.62075 13.6948 4.71196C13.7326 4.80316 13.752 4.90093 13.7518 4.99964C13.7517 5.09835 13.7321 5.19606 13.6942 5.28718C13.6562 5.3783 13.6006 5.46103 13.5306 5.53063Z" fill="currentColor"/>
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
        <span key={i} style={{ display: 'contents' }}>
          <button
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i}`}
            className={`ds-hero__page${i === current ? ' ds-hero__page--active' : ''}`}
            onClick={() => onChange(i)}
          >
            {String(i).padStart(2, '0')}
          </button>
          {i === current && (
            <div className="ds-hero__progress" aria-hidden="true">
              <div
                className="ds-hero__progress-fill"
                style={{ width: `${(current / total) * 100}%` }}
              />
            </div>
          )}
        </span>
      ))}
    </div>
  )
}

/* ---------------- variants ---------------- */
const BottomLeftVariant = ({
  slide,
  pagination,
  mode,
}: {
  slide: HeroSlide
  pagination: PaginationProps
  mode: HeroMode
}) => (
  <>
    <Overlay mode={mode} opacity={5} className="ds-hero__overlay" />
    <div className="ds-hero__bl">
      <h2 className="ds-hero__title">{slide.title}</h2>
      {slide.subtitle && <p className="ds-hero__subtitle">{slide.subtitle}</p>}
      <div className="ds-hero__actions">
        {renderAction(slide.primaryAction, 'filled')}
        {slide.secondaryAction && (
          <NavItem
            label={slide.secondaryAction.label}
            href={slide.secondaryAction.href ?? '#'}
            iconRight={<ArrowRightIcon />}
            colorMode={mode === 'dark' ? 'light' : 'dark'}
            className="ds-hero__nav-link"
          />
        )}
      </div>
    </div>
    <Pagination {...pagination} />
  </>
)

const SplitVariant = ({
  slide,
  pagination,
  status,
}: {
  slide: HeroSlide
  pagination: PaginationProps
  status?: HeroStatus
}) => {
  const activeStatus = status ?? slide.status
  return (
    <>
      <div
        className="ds-hero__split-image"
        style={slide.image ? { backgroundImage: `url(${slide.image})` } : undefined}
      >
        {activeStatus && (
          <div className="ds-hero__status">
            <span className="ds-hero__status-item">
              {activeStatus.icon ?? <ClockIcon />}
              <span>{activeStatus.text}</span>
              <StatusDot />
            </span>
            {activeStatus.linkLabel && (
              <a className="ds-hero__status-link" href={activeStatus.linkHref ?? '#'}>
                <ArrowElbowIcon />
                {activeStatus.linkLabel}
              </a>
            )}
          </div>
        )}
      </div>
      <div className="ds-hero__split-panel">
        <div className="ds-hero__split-content">
          <h2 className="ds-hero__title">{slide.title}</h2>
          {slide.subtitle && <p className="ds-hero__subtitle">{slide.subtitle}</p>}
        </div>
        <div className="ds-hero__split-footer">
          <div className="ds-hero__actions">
            {renderAction(slide.primaryAction, 'filled')}
            {slide.secondaryAction && (
              <NavItem
                label={slide.secondaryAction.label}
                href={slide.secondaryAction.href ?? '#'}
                iconRight={<ArrowRightIcon />}
                colorMode="light"
                className="ds-hero__nav-link"
              />
            )}
          </div>
          <div className="ds-hero__split-divider" />
          <Pagination {...pagination} />
        </div>
      </div>
    </>
  )
}

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
      <div className="ds-hero__slide-content" key={activeIdx}>
        {variant === 'section-hero' && (
          <BottomLeftVariant slide={slide} pagination={pagination} mode={mode} />
        )}
        {variant === 'split' && (
          <SplitVariant slide={slide} pagination={pagination} status={status} />
        )}
      </div>
    </div>
  )
}
