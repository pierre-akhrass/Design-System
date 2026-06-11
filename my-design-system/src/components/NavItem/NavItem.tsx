import type { AnchorHTMLAttributes, ReactNode } from 'react'
/**
 * NavItem Component
 * @developer pierre-akhrass
 */

import './NavItem.scss'

export type NavItemState = 'default' | 'hover' | 'active'
export type NavItemOrientation = 'vertical' | 'horizontal'
export type NavItemLevel = 'parent' | 'nested'
export type NavItemHierarchy = 'tier-1' | 'tier-2'
export type NavItemShape = 'pill' | 'line'
export type NavItemColorMode = 'light' | 'dark'

export interface NavItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  /** Visible label */
  label?: ReactNode
  children?: ReactNode
  /** Visual interaction state (forced — handy for design previews) */
  state?: NavItemState
  /** Stacking direction inside a Navigation container */
  orientation?: NavItemOrientation
  /** Top-level vs nested under a parent */
  level?: NavItemLevel
  /** Visual hierarchy / depth in nav tree */
  hierarchy?: NavItemHierarchy
  /** Selection treatment: filled "pill" or underlined "line" */
  shape?: NavItemShape
  /** Light or dark surface */
  colorMode?: NavItemColorMode
  /** Leading icon */
  iconLeft?: ReactNode
  /** Trailing icon */
  iconRight?: ReactNode
  /** Whether the item is currently the active route */
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
    <a
      className={classes}
      href={href}
      aria-current={selected ? 'page' : undefined}
      {...props}
    >
      {iconLeft && <span className="ds-nav-item__icon ds-nav-item__icon--left">{iconLeft}</span>}
      <span className="ds-nav-item__label">{label ?? children}</span>
      {iconRight && <span className="ds-nav-item__icon ds-nav-item__icon--right">{iconRight}</span>}
    </a>
  )
}
