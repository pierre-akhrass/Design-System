import type { HTMLAttributes, ReactNode } from 'react'
import './List.scss'

export type ListTheme = 'light' | 'dark'

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  theme?: ListTheme
  bordered?: boolean
  children?: ReactNode
}

export type ListItemVariant =
  | 'document'
  | 'user'
  | 'numbered'
  | 'bulleted'
  | 'card'

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  variant?: ListItemVariant
  index?: number
  label?: ReactNode
  meta?: ReactNode
  description?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  actionLabel?: ReactNode
  actionIcon?: ReactNode
  onActionClick?: () => void
}

const DocumentIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
  </svg>
)

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3.5" />
    <path d="M5.5 19.5a7 7 0 0 1 13 0" />
  </svg>
)

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4v12" />
    <path d="M7 11l5 5 5-5" />
    <path d="M5 20h14" />
  </svg>
)

const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 4h6v6" />
    <path d="M20 4l-9 9" />
    <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
  </svg>
)

const ImagePlaceholderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="9" cy="9" r="1.5" />
    <path d="M21 16l-5-5-9 9" />
  </svg>
)

export const List = ({
  theme = 'light',
  bordered = false,
  className,
  children,
  ...props
}: ListProps) => {
  const classes = [
    'ds-list',
    `ds-list--${theme}`,
    bordered ? 'ds-list--bordered' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

const formatIndex = (n?: number) =>
  typeof n === 'number' ? String(n).padStart(2, '0') : '01'

export const ListItem = ({
  variant = 'document',
  index,
  label = 'List item',
  meta,
  description,
  leading,
  trailing,
  actionLabel,
  actionIcon,
  onActionClick,
  className,
  ...props
}: ListItemProps) => {
  const classes = [
    'ds-list__item',
    `ds-list__item--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const renderLeading = () => {
    if (leading) return <span className="ds-list__leading">{leading}</span>

    switch (variant) {
      case 'document':
        return (
          <span className="ds-list__leading">
            <DocumentIcon />
          </span>
        )
      case 'user':
        return (
          <span className="ds-list__leading ds-list__leading--avatar">
            <UserIcon />
          </span>
        )
      case 'numbered':
        return (
          <span className="ds-list__leading ds-list__leading--index">
            {formatIndex(index)}
          </span>
        )
      case 'bulleted':
        return (
          <span className="ds-list__leading ds-list__leading--bullet" aria-hidden="true">
            •
          </span>
        )
      case 'card':
        return (
          <span className="ds-list__leading ds-list__leading--avatar">
            <ImagePlaceholderIcon />
          </span>
        )
      default:
        return null
    }
  }

  const renderTrailing = () => {
    if (trailing) return <span className="ds-list__trailing">{trailing}</span>

    if (variant === 'document') {
      return (
        <span className="ds-list__trailing">
          {meta && <span className="ds-list__meta">{meta}</span>}
          <button
            type="button"
            className="ds-list__action-icon"
            onClick={onActionClick}
            aria-label="Download"
          >
            {actionIcon ?? <DownloadIcon />}
          </button>
        </span>
      )
    }

    if (variant === 'user') {
      return (
        <button
          type="button"
          className="ds-list__action"
          onClick={onActionClick}
        >
          <span className="ds-list__action-label">{actionLabel ?? 'Add'}</span>
          {actionIcon ?? <PlusIcon />}
        </button>
      )
    }

    if (variant === 'card') {
      return (
        <button
          type="button"
          className="ds-list__action-icon"
          onClick={onActionClick}
          aria-label="Open"
        >
          {actionIcon ?? <ExternalLinkIcon />}
        </button>
      )
    }

    return null
  }

  return (
    <li className={classes} {...props}>
      {renderLeading()}
      <span className="ds-list__body">
        <span className="ds-list__label">{label}</span>
        {description && (
          <span className="ds-list__description">{description}</span>
        )}
      </span>
      {renderTrailing()}
    </li>
  )
}
