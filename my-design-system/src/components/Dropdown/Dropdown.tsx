import type { HTMLAttributes, ReactNode } from 'react'
import './Dropdown.scss'

export type DropdownColorMode = 'light' | 'dark'

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  /** Dropdown items / content (fully dynamic). */
  children?: ReactNode
  /** Light or dark surface. */
  colorMode?: DropdownColorMode
}

/**
 * Dropdown surface — a vertically stacked container intended to hold
 * `NavItem`s, a `DropdownDivider`, and optionally a trailing action
 * such as a `Button`.
 */
export const Dropdown = ({
  children,
  colorMode = 'light',
  className,
  ...props
}: DropdownProps) => {
  const classes = ['ds-dropdown', `ds-dropdown--mode-${colorMode}`, className]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={classes} role="menu" {...props}>
      {children}
    </div>
  )
}

export type DropdownDividerProps = HTMLAttributes<HTMLDivElement>

/** Horizontal rule used to group items inside a `Dropdown`. */
export const DropdownDivider = ({ className, ...props }: DropdownDividerProps) => {
  const classes = ['ds-dropdown__divider', className].filter(Boolean).join(' ')
  return <div className={classes} role="separator" {...props} />
}
