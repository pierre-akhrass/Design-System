import {
  Children,
  isValidElement,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { NavItem, type NavItemProps } from '../NavItem'
import './Sidebar.scss'

// -----------------------------------------------------------------------------
// Sidebar
//
// A vertical primary-navigation surface for app shells, dashboards, and admin
// layouts. Composes existing NavItems with category headers, dividers, and
// expandable Tier 1 groups that reveal nested children.
// -----------------------------------------------------------------------------

export type SidebarColorMode = 'light' | 'dark'

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Brand mark / logo rendered at the top of the card. */
  logo?: ReactNode
  /** Body content — typically SidebarItem / SidebarCategory / SidebarDivider. */
  children?: ReactNode
  /** Footer slot (e.g. action icons). Rendered pinned to the bottom. */
  footer?: ReactNode
  /** Accessible label for the `<aside>` landmark. */
  ariaLabel?: string
  /** Light or dark surface. */
  colorMode?: SidebarColorMode
}

export const Sidebar = ({
  logo,
  children,
  footer,
  ariaLabel = 'Sidebar',
  colorMode = 'light',
  className,
  ...props
}: SidebarProps) => {
  const classes = ['ds-sidebar', `ds-sidebar--mode-${colorMode}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <aside className={classes} aria-label={ariaLabel} {...props}>
      {logo && <div className="ds-sidebar__logo">{logo}</div>}
      <nav className="ds-sidebar__nav">{children}</nav>
      {footer && <div className="ds-sidebar__footer">{footer}</div>}
    </aside>
  )
}

/** Small uppercase category heading (e.g. "CATEGORY TITLE"). */
export const SidebarCategory = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const classes = ['ds-sidebar__category', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

/** Thin horizontal separator. */
export const SidebarDivider = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const classes = ['ds-sidebar__divider', className].filter(Boolean).join(' ')
  return <div className={classes} role="separator" {...props} />
}

// -----------------------------------------------------------------------------
// SidebarItem
//
// A wrapper around NavItem that:
//  - Adds optional nested children that render as Tier 1 + Nested items.
//  - Auto-shows a chevron when nested children are provided.
//  - Toggles expansion on click for groups; behaves as a link otherwise.
// -----------------------------------------------------------------------------

export interface SidebarItemProps
  extends Omit<NavItemProps, 'orientation' | 'hierarchy' | 'level'> {
  /** Optional nested children (each becomes a Tier 1 + Nested NavItem). */
  children?: ReactNode
  /** Initial expanded state when nested children are provided. */
  defaultOpen?: boolean
}

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    style={{
      transition: 'transform 0.15s ease',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    }}
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const SidebarItem = ({
  children,
  defaultOpen = false,
  iconRight,
  onClick,
  ...navItemProps
}: SidebarItemProps) => {
  const hasChildren = Children.count(children) > 0
  const [open, setOpen] = useState(defaultOpen)

  // Validate nested rendering: only render valid React elements; map each one
  // to inherit Tier 1 + Nested presets.
  const nestedChildren = hasChildren
    ? Children.map(children, (child) => {
        if (!isValidElement(child)) return child
        return child
      })
    : null

  return (
    <div className="ds-sidebar__group">
      <NavItem
        {...navItemProps}
        orientation="vertical"
        hierarchy="tier-1"
        iconRight={hasChildren ? <Chevron open={open} /> : iconRight}
        aria-expanded={hasChildren ? open : undefined}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault()
            setOpen((v) => !v)
          }
          onClick?.(e)
        }}
      />
      {hasChildren && open && (
        <div className="ds-sidebar__nested">{nestedChildren}</div>
      )}
    </div>
  )
}

/** A nested child of `SidebarItem`. Pre-applies Tier 1 + Nested presets. */
export const SidebarNestedItem = (
  props: Omit<NavItemProps, 'orientation' | 'hierarchy' | 'level'>,
) => (
  <NavItem
    {...props}
    orientation="vertical"
    hierarchy="tier-1"
    level="nested"
  />
)

/** A standalone Tier 2 item (used near the footer in the screenshot). */
export const SidebarTier2Item = (
  props: Omit<NavItemProps, 'orientation' | 'hierarchy' | 'level'>,
) => (
  <NavItem
    {...props}
    orientation="vertical"
    hierarchy="tier-2"
  />
)
