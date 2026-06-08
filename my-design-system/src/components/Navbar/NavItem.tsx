import type { AnchorHTMLAttributes, ReactNode } from 'react'
import './NavItem.scss'

export type NavItemState = 'default' | 'hover' | 'active'
export type NavItemOrientation = 'vertical' | 'horizontal'
export type NavItemLevel = 'parent' | 'nested'
export type NavItemHierarchy = 'tier-1' | 'tier-2'
export type NavItemShape = 'pill' | 'line'
export type NavItemColorMode = 'light' | 'dark'

export interface NavItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  label?: ReactNode
  children?: ReactNode
  state?: NavItemState
  orientation?: NavItemOrientation
  level?: NavItemLevel
  hierarchy?: NavItemHierarchy
  shape?: NavItemShape
  colorMode?: NavItemColorMode
  iconLeft?: ReactNode
  iconRight?: ReactNode
  selected?: boolean
}

export const NavItem = ({
  label,
  children,
  state = 'default',
  orientation = 'vertical',
  level = 'parent',
  hierarchy = 'tier-1',
  shape = 'pill',
  colorMode = 'light',
  iconLeft,
  iconRight,
  selected = false,
  className,
  href,
  ...props
}: NavItemProps) => {
  const classes = [
    'ds-nav-item',
    `ds-nav-item--${state}`,
    `ds-nav-item--${orientation}`,
    `ds-nav-item--${level}`,
    `ds-nav-item--${hierarchy}`,
    `ds-nav-item--shape-${shape}`,
    `ds-nav-item--mode-${colorMode}`,
    selected ? 'ds-nav-item--selected' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classes} href={href} aria-current={selected ? 'page' : undefined} {...props}>
      {iconLeft && <span className="ds-nav-item__icon ds-nav-item__icon--left">{iconLeft}</span>}
      <span className="ds-nav-item__label">{label ?? children}</span>
      {iconRight && <span className="ds-nav-item__icon ds-nav-item__icon--right">{iconRight}</span>}
    </a>
  )
}
