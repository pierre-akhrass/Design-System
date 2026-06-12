// filepath: /Users/mohammedoueidat/Documents/GitHub/Design-System/my-design-system/src/components/Dialog/Dialog.tsx
import {
  useCallback,
  useEffect,
  useRef,
  type DialogHTMLAttributes,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'
import './Dialog.scss'

export type DialogTheme = 'light' | 'dark'
export type DialogPlacement = 'center' | 'bottom-sheet'
export type DialogSize = 'small' | 'medium' | 'large'

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

/* =========================================================================
 *  Root <Dialog />
 * ========================================================================= */

export interface DialogProps
  extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'title' | 'onClose'> {
  /** Control whether the dialog is open */
  open: boolean
  /** Visual theme */
  theme?: DialogTheme
  /** Where the dialog appears on screen */
  placement?: DialogPlacement
  /** Width preset */
  size?: DialogSize
  /** Called when the user dismisses the dialog (close button, ESC or scrim click) */
  onClose?: () => void
  /** Allow clicking the scrim to close. Default `true` */
  dismissOnScrimClick?: boolean
  /** Allow ESC to close. Default `true` */
  dismissOnEscape?: boolean
  children?: ReactNode
}

export const Dialog = ({
  open,
  theme = 'light',
  placement = 'center',
  size = 'medium',
  onClose,
  dismissOnScrimClick = true,
  dismissOnEscape = true,
  className,
  children,
  ...rest
}: DialogProps) => {
  const ref = useRef<HTMLDialogElement | null>(null)

  // Sync open prop with the native <dialog> element
  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (open && !node.open) {
      // showModal gives us focus trap, scrim and ESC for free
      try {
        node.showModal()
      } catch {
        // already open – ignore
      }
    } else if (!open && node.open) {
      node.close()
    }
  }, [open])

  // Native ESC / cancel
  const handleCancel = useCallback(
    (event: React.SyntheticEvent<HTMLDialogElement>) => {
      event.preventDefault()
      if (dismissOnEscape) onClose?.()
    },
    [dismissOnEscape, onClose],
  )

  // Click on the scrim (the dialog element itself, not its content) closes it
  const handleClick = useCallback(
    (event: MouseEvent<HTMLDialogElement>) => {
      if (!dismissOnScrimClick) return
      if (event.target === ref.current) onClose?.()
    },
    [dismissOnScrimClick, onClose],
  )

  const classes = [
    'ds-dialog',
    `ds-dialog--${theme}`,
    `ds-dialog--${placement}`,
    `ds-dialog--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <dialog
      ref={ref}
      className={classes}
      onCancel={handleCancel}
      onClick={handleClick}
      {...rest}
    >
      <div className="ds-dialog__panel" role="document">
        {children}
      </div>
    </dialog>
  )
}

/* =========================================================================
 *  <Dialog.Header /> – title row with optional close button
 * ========================================================================= */

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: ReactNode
  onClose?: () => void
  closeLabel?: string
  showClose?: boolean
}

export const DialogHeader = ({
  title,
  onClose,
  closeLabel = 'Close',
  showClose = true,
  className,
  children,
  ...rest
}: DialogHeaderProps) => (
  <div
    className={['ds-dialog__header', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {title && <h2 className="ds-dialog__title">{title}</h2>}
    {children}
    {showClose && onClose && (
      <button
        type="button"
        className="ds-dialog__close"
        onClick={onClose}
        aria-label={closeLabel}
      >
        <CloseIcon />
      </button>
    )}
  </div>
)

/* =========================================================================
 *  <Dialog.Title />
 * ========================================================================= */

export const DialogTitle = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={['ds-dialog__title', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </h2>
)

/* =========================================================================
 *  <Dialog.Body /> – scrollable content area
 * ========================================================================= */

export const DialogBody = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['ds-dialog__body', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </div>
)

/* =========================================================================
 *  <Dialog.Text /> – paragraph helper
 * ========================================================================= */

export const DialogText = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={['ds-dialog__text', className].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </p>
)

/* =========================================================================
 *  <Dialog.Actions /> – footer button row
 * ========================================================================= */

export interface DialogActionsProps extends HTMLAttributes<HTMLDivElement> {
  /** 'end' (default), 'start', 'between', 'stacked' */
  align?: 'start' | 'end' | 'between' | 'stacked'
}

export const DialogActions = ({
  align = 'end',
  className,
  children,
  ...rest
}: DialogActionsProps) => (
  <div
    className={[
      'ds-dialog__actions',
      `ds-dialog__actions--${align}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...rest}
  >
    {children}
  </div>
)

/* =========================================================================
 *  Compound API
 * ========================================================================= */

Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
Dialog.Body = DialogBody
Dialog.Text = DialogText
Dialog.Actions = DialogActions

export { CloseIcon as DialogCloseIcon }
