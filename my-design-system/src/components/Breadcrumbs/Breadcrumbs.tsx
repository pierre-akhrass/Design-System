import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import './Breadcrumbs.scss'

export type BreadcrumbItemVariant = 'ancestor' | 'collapsed' | 'current'

export interface BreadcrumbItemData {
  /** Visible label. For `collapsed`, defaults to "…". */
  label?: ReactNode
  /** Mark this crumb as the current page. */
  current?: boolean
  /** Render as a collapsed indicator (e.g. "…"). */
  collapsed?: boolean
  /** Optional href; when present, the item renders as an `<a>`. */
  href?: string
  /** Optional click handler (used when no href is provided). */
  onClick?: () => void
  /** Stable key for list rendering. */
  key?: string | number
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItemData[]
  /** Node rendered between items. Defaults to a chevron-right glyph. */
  separator?: ReactNode
  /** Accessible label for the nav landmark. */
  ariaLabel?: string
}

const DefaultSeparator = () => (
  <svg
    aria-hidden="true"
    className="ds-breadcrumbs__separator-icon"
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export interface BreadcrumbItemProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  variant?: BreadcrumbItemVariant
  children?: ReactNode
}

export const BreadcrumbItem = ({
  variant = 'ancestor',
  children,
  className,
  href,
  onClick,
  ...props
}: BreadcrumbItemProps) => {
  const classes = ['ds-breadcrumbs__item', `ds-breadcrumbs__item--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  const label = variant === 'collapsed' && !children ? '…' : children

  if (variant === 'current') {
    return (
      <span className={classes} aria-current="page" {...(props as HTMLAttributes<HTMLSpanElement>)}>
        {label}
      </span>
    )
  }

  if (href || onClick) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        aria-label={variant === 'collapsed' ? 'Show collapsed breadcrumbs' : undefined}
        {...props}
      >
        {label}
      </a>
    )
  }

  return (
    <span
      className={classes}
      aria-label={variant === 'collapsed' ? 'Collapsed breadcrumbs' : undefined}
      {...(props as HTMLAttributes<HTMLSpanElement>)}
    >
      {label}
    </span>
  )
}

export const Breadcrumbs = ({
  items,
  separator,
  ariaLabel = 'Breadcrumb',
  className,
  ...props
}: BreadcrumbsProps) => {
  const classes = ['ds-breadcrumbs', className].filter(Boolean).join(' ')
  const sep = separator ?? <DefaultSeparator />

  return (
    <nav className={classes} aria-label={ariaLabel} {...props}>
      <ol className="ds-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const variant: BreadcrumbItemVariant = item.current
            ? 'current'
            : item.collapsed
              ? 'collapsed'
              : 'ancestor'

          return (
            <li key={item.key ?? index} className="ds-breadcrumbs__list-item">
              <BreadcrumbItem variant={variant} href={item.href} onClick={item.onClick}>
                {item.label}
              </BreadcrumbItem>
              {!isLast && (
                <span className="ds-breadcrumbs__separator" aria-hidden="true">
                  {sep}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
