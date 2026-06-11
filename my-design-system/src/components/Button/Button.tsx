import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.scss'

export type ButtonVariant = 'filled' | 'outlined' | 'plain'
export type ButtonState = 'default' | 'focus' | 'hover' | 'pressed' | 'disabled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: ButtonState
  iconOnly?: boolean
  /** Leading icon — rendered before the label. */
  icon?: ReactNode
  /** Trailing icon — rendered after the label (e.g. a caret/chevron CTA). */
  iconRight?: ReactNode
  variant?: ButtonVariant
  children?: ReactNode
}

export const Button = ({
  variant = 'filled',
  state = 'default',
  iconOnly = false,
  icon,
  iconRight,
  children,
  className,
  type = 'button',
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = state === 'disabled' || Boolean(disabled)

  const classes = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${state}`,
    iconOnly ? 'ds-button--icon-only' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} disabled={isDisabled} type={type} {...props}>
      {icon && (
        <span className="ds-button__icon ds-button__icon--left">{icon}</span>
      )}
      {!iconOnly && children && <span className="ds-button__label">{children}</span>}
      {!iconOnly && iconRight && (
        <span className="ds-button__icon ds-button__icon--right">{iconRight}</span>
      )}
    </button>
  )
}
