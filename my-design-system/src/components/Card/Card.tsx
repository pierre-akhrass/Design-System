// filepath: /Users/mohammedoueidat/Documents/GitHub/Design-System/my-design-system/src/components/Card/Card.tsx
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import './Card.scss'

export type CardTheme = 'light' | 'dark'
export type CardOrientation = 'vertical' | 'horizontal'
export type CardMediaShape = 'banner' | 'portrait' | 'circle' | 'square'

/* =====================================================================
 * Inline icons
 * ===================================================================== */

const StarOutline = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3.5l2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.9l6-.9z" />
  </svg>
)

const StarFilled = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path d="M12 3.5l2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.9l6-.9z" fill="currentColor" />
  </svg>
)

const StarHalf = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <defs>
      <linearGradient id="ds-card-half">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M12 3.5l2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.9l6-.9z" fill="url(#ds-card-half)" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const MountainPlaceholder = ({ size = 96 }: { size?: number }) => (
  <svg viewBox="0 0 120 96" width={size} height={size} aria-hidden="true" focusable="false">
    <circle cx="40" cy="36" r="9" fill="currentColor" />
    <path d="M8 80 L46 38 L70 64 L86 46 L112 80 Z" fill="currentColor" />
  </svg>
)

const AvatarPlaceholder = ({ size = 40 }: { size?: number }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="currentColor" opacity="0.15" />
    <circle cx="20" cy="16" r="6.5" fill="currentColor" opacity="0.55" />
    <path d="M6 36 C8 27 32 27 34 36 Z" fill="currentColor" opacity="0.55" />
  </svg>
)

/* =====================================================================
 * Root <Card />
 * ===================================================================== */

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  theme?: CardTheme
  orientation?: CardOrientation
  interactive?: boolean
}

export const Card = ({
  theme = 'light',
  orientation = 'vertical',
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) => {
  const classes = [
    'ds-card',
    `ds-card--${theme}`,
    `ds-card--${orientation}`,
    interactive ? 'ds-card--interactive' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classes} {...rest}>
      {children}
    </article>
  )
}

/* =====================================================================
 * <Card.Body />
 * ===================================================================== */

export const CardBody = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['ds-card__body', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </div>
)

/* =====================================================================
 * <Card.Header />
 * ===================================================================== */

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  meta?: ReactNode
  onClose?: () => void
  closeLabel?: string
}

export const CardHeader = ({
  meta,
  onClose,
  closeLabel = 'Close',
  className,
  children,
  ...rest
}: CardHeaderProps) => (
  <div
    className={['ds-card__header', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {meta && <span className="ds-card__meta">{meta}</span>}
    {children}
    {onClose && (
      <button
        type="button"
        className="ds-card__close"
        onClick={onClose}
        aria-label={closeLabel}
      >
        <CloseIcon />
      </button>
    )}
  </div>
)

/* =====================================================================
 * <Card.Icon />
 * ===================================================================== */

export const CardIcon = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={['ds-card__icon', className].filter(Boolean).join(' ')}
    aria-hidden="true"
    {...rest}
  >
    {children ?? <StarOutline />}
  </span>
)

/* =====================================================================
 * Title / Subtitle / Text
 * ===================================================================== */

export const CardTitle = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={['ds-card__title', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </h3>
)

export const CardSubtitle = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={['ds-card__subtitle', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </h4>
)

export const CardText = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={['ds-card__text', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </p>
)

/* =====================================================================
 * <Card.Media />
 * ===================================================================== */

export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {
  shape?: CardMediaShape
  inset?: boolean
  src?: string
  alt?: string
  logo?: boolean | string
  overlay?: ReactNode
}

export const CardMedia = ({
  shape = 'banner',
  inset = false,
  src,
  alt = '',
  logo,
  overlay,
  className,
  children,
  ...rest
}: CardMediaProps) => {
  const logoText = typeof logo === 'string' ? logo : 'LOGO'
  const showLogo = Boolean(logo)

  const classes = [
    'ds-card__media',
    `ds-card__media--${shape}`,
    inset ? 'ds-card__media--inset' : null,
    overlay ? 'ds-card__media--has-overlay' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...rest}>
      <div className="ds-card__media-frame">
        {src ? (
          <img className="ds-card__media-image" src={src} alt={alt} />
        ) : (
          <span className="ds-card__placeholder" aria-hidden="true">
            <MountainPlaceholder />
          </span>
        )}

        {showLogo && (
          <span className="ds-card__logo" aria-label={logoText}>
            <span className="ds-card__logo-text">{logoText}</span>
          </span>
        )}

        {overlay && <div className="ds-card__overlay">{overlay}</div>}

        {children}
      </div>
    </div>
  )
}

/* =====================================================================
 * <Card.Logo /> standalone
 * ===================================================================== */

export interface CardLogoProps extends HTMLAttributes<HTMLSpanElement> {
  text?: string
}

export const CardLogo = ({
  text = 'LOGO',
  className,
  ...rest
}: CardLogoProps) => (
  <span
    className={['ds-card__logo', className].filter(Boolean).join(' ')}
    aria-label={text}
    {...rest}
  >
    <span className="ds-card__logo-text">{text}</span>
  </span>
)

/* =====================================================================
 * <Card.Stat />
 * ===================================================================== */

export interface CardStatProps extends Omit<HTMLAttributes<HTMLDivElement>, 'prefix'> {
  prefix?: ReactNode
  value: ReactNode
  suffix?: ReactNode
}

export const CardStat = ({
  prefix,
  value,
  suffix,
  className,
  ...rest
}: CardStatProps) => (
  <div
    className={['ds-card__stat', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {prefix && <span className="ds-card__stat-prefix">{prefix}</span>}
    <span className="ds-card__stat-value">{value}</span>
    {suffix && <span className="ds-card__stat-suffix">{suffix}</span>}
  </div>
)

/* =====================================================================
 * <Card.Rating />
 * ===================================================================== */

export interface CardRatingProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: number
}

export const CardRating = ({
  value,
  max = 5,
  size = 22,
  className,
  ...rest
}: CardRatingProps) => {
  const stars = Array.from({ length: max }, (_, i) => {
    const diff = value - i
    if (diff >= 1) return <StarFilled key={i} size={size} />
    if (diff >= 0.5) return <StarHalf key={i} size={size} />
    return <StarOutline key={i} size={size} />
  })
  return (
    <div
      className={['ds-card__rating', className].filter(Boolean).join(' ')}
      role="img"
      aria-label={`Rating ${value} out of ${max}`}
      {...rest}
    >
      {stars}
    </div>
  )
}

/* =====================================================================
 * <Card.Person />
 * ===================================================================== */

export interface CardPersonProps extends HTMLAttributes<HTMLDivElement> {
  name: ReactNode
  supporting?: ReactNode
  avatar?: string
  avatarAlt?: string
}

export const CardPerson = ({
  name,
  supporting,
  avatar,
  avatarAlt = '',
  className,
  ...rest
}: CardPersonProps) => (
  <div
    className={['ds-card__person', className].filter(Boolean).join(' ')}
    {...rest}
  >
    <span className="ds-card__avatar" aria-hidden={!avatar}>
      {avatar ? <img src={avatar} alt={avatarAlt} /> : <AvatarPlaceholder />}
    </span>
    <span className="ds-card__person-text">
      <span className="ds-card__person-name">{name}</span>
      {supporting && (
        <span className="ds-card__person-support">{supporting}</span>
      )}
    </span>
  </div>
)

/* =====================================================================
 * <Card.Alert />
 * ===================================================================== */

export interface CardAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: ReactNode
  title?: ReactNode
}

export const CardAlert = ({
  icon,
  title,
  className,
  children,
  ...rest
}: CardAlertProps) => (
  <div
    className={['ds-card__alert', className].filter(Boolean).join(' ')}
    role="status"
    {...rest}
  >
    <span className="ds-card__alert-icon" aria-hidden="true">
      {icon ?? <InfoIcon />}
    </span>
    <div className="ds-card__alert-text">
      {title && <span className="ds-card__alert-title">{title}</span>}
      {children && <span className="ds-card__alert-body">{children}</span>}
    </div>
  </div>
)

/* =====================================================================
 * <Card.Labels /> + <Card.Label />
 * ===================================================================== */

export const CardLabels = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['ds-card__labels', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </div>
)

export const CardLabel = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={['ds-card__label', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </span>
)

/* =====================================================================
 * <Card.Actions />
 * ===================================================================== */

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'between' | 'spread'
}

export const CardActions = ({
  align = 'end',
  className,
  children,
  ...rest
}: CardActionsProps) => (
  <div
    className={[
      'ds-card__actions',
      `ds-card__actions--${align}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...rest}
  >
    {children}
  </div>
)

/* =====================================================================
 * <Card.Link />
 * ===================================================================== */

export interface CardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hideArrow?: boolean
}

export const CardLink = ({
  hideArrow = false,
  className,
  children,
  ...rest
}: CardLinkProps) => (
  <a
    className={['ds-card__link', className].filter(Boolean).join(' ')}
    {...rest}
  >
    <span>{children}</span>
    {!hideArrow && <ArrowRight />}
  </a>
)

/* =====================================================================
 * Compound API
 * ===================================================================== */

Card.Body = CardBody
Card.Header = CardHeader
Card.Icon = CardIcon
Card.Title = CardTitle
Card.Subtitle = CardSubtitle
Card.Text = CardText
Card.Media = CardMedia
Card.Logo = CardLogo
Card.Stat = CardStat
Card.Rating = CardRating
Card.Person = CardPerson
Card.Alert = CardAlert
Card.Labels = CardLabels
Card.Label = CardLabel
Card.Actions = CardActions
Card.Link = CardLink

export {
  StarOutline as CardStarIcon,
  StarFilled as CardStarFilledIcon,
  CloseIcon as CardCloseIcon,
  InfoIcon as CardInfoIcon,
  ArrowRight as CardArrowRightIcon,
  MountainPlaceholder as CardMountainIcon,
}

export type CardButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
