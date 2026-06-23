import { useState, type HTMLAttributes } from 'react'
import './Feedback.scss'

export type FeedbackVariant = 'alert' | 'toast'

export interface FeedbackProps extends HTMLAttributes<HTMLDivElement> {
  /** Display variant */
  variant?: FeedbackVariant
  /** Title text */
  title: string
  /** Description text */
  description: string
  /** Whether the close button is shown */
  dismissible?: boolean
  /** Callback when close button is clicked */
  onDismiss?: () => void
}

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
    <text x="10" y="14.5" textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor">i</text>
  </svg>
)

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Feedback = ({
  variant = 'alert',
  title,
  description,
  dismissible = true,
  onDismiss,
  className,
  ...rest
}: FeedbackProps) => {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  const classes = [
    'ds-feedback',
    `ds-feedback--${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} role="alert" {...rest}>
      <span className="ds-feedback__icon">
        <InfoIcon />
      </span>
      <div className="ds-feedback__content">
        <span className="ds-feedback__title">{title}</span>
        <span className="ds-feedback__description">{description}</span>
      </div>
      {dismissible && (
        <button
          type="button"
          className="ds-feedback__close"
          onClick={handleDismiss}
          aria-label="Dismiss"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}
