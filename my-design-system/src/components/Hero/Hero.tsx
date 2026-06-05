// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Hero/Hero.tsx
import { type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'
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

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  variant?: HeroVariant
  mode?: HeroMode
  image?: string
  title?: ReactNode
  subtitle?: ReactNode
  /** Brand context card (rendered on the right of the `centered` variant) */
  brand?: HeroBrandCard
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  /** Status bar shown on the image side of the `split` variant */
  status?: HeroStatus
  /** Pagination */
  currentSlide?: number
  totalSlides?: number
  onSlideChange?: (index: number) => void
}

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m12 2 2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
    <path
      d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

/* ------------- helpers ------------- */
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

const Pagination = ({
  current = 1,
  total = 5,
  onChange,
}: {
  current?: number
  total?: number
  onChange?: (index: number) => void
}) => {
  const items = Array.from({ length: total }, (_, i) => i + 1)
  return (
    <div className="ds-hero__pagination" role="tablist">
      {items.map((i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === current}
          className={`ds-hero__page${i === current ? ' ds-hero__page--active' : ''}`}
          onClick={() => onChange?.(i)}
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

/* ------------- variants ------------- */
const CenteredVariant = (p: HeroProps) => (
  <>
    <div className="ds-hero__overlay" />
    <div className="ds-hero__centered">
      <div className="ds-hero__centered-text">
        <h2 className="ds-hero__title">{p.title}</h2>
        {p.subtitle && <p className="ds-hero__subtitle">{p.subtitle}</p>}
      </div>
      {p.brand && (
        <div className="ds-hero__brand">
          {p.brand.logo && <div className="ds-hero__brand-logo">{p.brand.logo}</div>}
          <div className="ds-hero__brand-body">
            {p.brand.text && <div className="ds-hero__brand-text">{p.brand.text}</div>}
            <div className="ds-hero__brand-actions">
              {renderAction(p.brand.primary, 'filled')}
              {renderAction(p.brand.secondary, 'plain', <StarIcon />)}
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="ds-hero__footer">
      <div className="ds-hero__actions">
        {renderAction(p.primaryAction, 'filled')}
        {renderAction(p.secondaryAction, 'plain', <StarIcon />)}
      </div>
      <Pagination
        current={p.currentSlide}
        total={p.totalSlides}
        onChange={p.onSlideChange}
      />
    </div>
  </>
)

const BottomLeftVariant = (p: HeroProps) => (
  <>
    <div className="ds-hero__overlay" />
    <div className="ds-hero__bl">
      <h2 className="ds-hero__title">{p.title}</h2>
      {p.subtitle && <p className="ds-hero__subtitle">{p.subtitle}</p>}
      <div className="ds-hero__actions">
        {renderAction(p.primaryAction, 'filled')}
        {p.secondaryAction && (
          <Button
            variant="plain"
            onClick={() => {
              p.secondaryAction?.onClick?.()
              if (p.secondaryAction?.href) window.open(p.secondaryAction.href, '_self')
            }}
          >
            {p.secondaryAction.label}
            <ArrowRightIcon />
          </Button>
        )}
      </div>
    </div>
    <Pagination
      current={p.currentSlide}
      total={p.totalSlides}
      onChange={p.onSlideChange}
    />
  </>
)

const SplitVariant = (p: HeroProps) => (
  <>
    <div className="ds-hero__split-image">
      {p.status && (
        <div className="ds-hero__status">
          <span className="ds-hero__status-item">
            {p.status.icon ?? <ClockIcon />}
            <span>{p.status.text}</span>
          </span>
          {p.status.linkLabel && (
            <a
              className="ds-hero__status-link"
              href={p.status.linkHref ?? '#'}
            >
              <PinIcon />
              {p.status.linkLabel}
            </a>
          )}
        </div>
      )}
    </div>
    <div className="ds-hero__split-panel">
      <div className="ds-hero__split-content">
        <h2 className="ds-hero__title">{p.title}</h2>
        {p.subtitle && <p className="ds-hero__subtitle">{p.subtitle}</p>}
        <div className="ds-hero__actions">
          {renderAction(p.primaryAction, 'filled')}
          {p.secondaryAction && (
            <Button
              variant="plain"
              onClick={() => {
                p.secondaryAction?.onClick?.()
                if (p.secondaryAction?.href) window.open(p.secondaryAction.href, '_self')
              }}
            >
              {p.secondaryAction.label}
              <ArrowRightIcon />
            </Button>
          )}
        </div>
      </div>
      <Pagination
        current={p.currentSlide}
        total={p.totalSlides}
        onChange={p.onSlideChange}
      />
    </div>
  </>
)

/* ------------- root ------------- */
export const Hero = ({
  variant = 'centered',
  mode = 'dark',
  image,
  className,
  style,
  ...rest
}: HeroProps) => {
  const classes = [
    'ds-hero',
    `ds-hero--${variant}`,
    `ds-hero--mode-${mode}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const containerStyle: CSSProperties = {
    ...(image && variant !== 'split'
      ? {
          backgroundImage: `url(${image})`,
        }
      : null),
    ...style,
  }

  const splitImageStyle: CSSProperties | undefined =
    variant === 'split' && image ? { backgroundImage: `url(${image})` } : undefined

  return (
    <div className={classes} style={containerStyle}>
      {variant === 'centered' && <CenteredVariant {...rest} image={image} variant={variant} mode={mode} />}
      {variant === 'bottom-left' && <BottomLeftVariant {...rest} image={image} variant={variant} mode={mode} />}
      {variant === 'split' && (
        <>
          {/* inject background only for the image half */}
          <style>{`.ds-hero--split .ds-hero__split-image { ${splitImageStyle ? `background-image: url(${image});` : ''} }`}</style>
          <SplitVariant {...rest} image={image} variant={variant} mode={mode} />
        </>
      )}
    </div>
  )
}
