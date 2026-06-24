import type { HTMLAttributes, ReactNode } from 'react'
import './Dropdown.scss'

export type DropdownColorMode = 'light' | 'dark'

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  colorMode?: DropdownColorMode
}

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
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export type DropdownDividerProps = HTMLAttributes<HTMLDivElement>

export const DropdownDivider = ({ className, ...props }: DropdownDividerProps) => {
  const classes = ['ds-dropdown__divider', className].filter(Boolean).join(' ')
  return <div className={classes} role="separator" {...props} />
}
