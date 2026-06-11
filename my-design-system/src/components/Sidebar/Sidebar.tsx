import {
  Children,
  isValidElement,
  useState,
  type HTMLAttributes,
  type MouseEvent as ReactMouseEvent,
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

/**
 * Declarative action-link config. Use this (or an array of these) on the
 * `footer` prop when the bottom action items are links whose data is
 * dynamic (e.g. authored in a CMS, derived from auth state, etc.).
 *
 * Each entry renders as a Tier-2 `NavItem` inside the sidebar footer.
 */
export interface SidebarActionLink {
  /** Visible label. Optional for icon-only links (pair with `ariaLabel`). */
  label?: ReactNode
  /** Link target. Defaults to `'#'`. */
  href?: string
  /** Leading icon. */
  iconLeft?: ReactNode
  /** Trailing icon. */
  iconRight?: ReactNode
  /** Marks the link as the active route (`aria-current="page"`). */
  selected?: boolean
  /** Click handler — receives the underlying anchor event. */
  onClick?: (e: ReactMouseEvent<HTMLAnchorElement>) => void
  /** When true, opens in a new tab with safe `rel`. */
  external?: boolean
  /** Optional stable React key (useful when reordering dynamically). */
  key?: string | number
  /** Accessible label, required for icon-only links. */
  ariaLabel?: string
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Brand mark / logo rendered at the top of the card. */
  logo?: ReactNode
  /** Body content — typically SidebarItem / SidebarCategory / SidebarDivider. */
  children?: ReactNode
  /**
   * Footer slot pinned to the bottom. Accepts either:
   *   - a `ReactNode` — full control (icons, account chip, etc.).
   *   - a `SidebarActionLink[]` — declarative, dynamic list of links rendered
   *     automatically as Tier-2 `NavItem`s.
   */
  footer?: ReactNode | SidebarActionLink[]
  /** Accessible label for the `<aside>` landmark. */
  ariaLabel?: string
  /** Light or dark surface. */
  colorMode?: SidebarColorMode
}

/**
 * True when `footer` is a config array (each entry is a plain object, not a
 * React element). Plain arrays of React elements are still treated as a
 * regular `ReactNode`.
 */
const isFooterLinkArray = (
  footer: SidebarProps['footer'],
): footer is SidebarActionLink[] =>
  Array.isArray(footer) &&
  footer.every(
    (a) => a !== null && typeof a === 'object' && !isValidElement(a),
  )

/** Render a list of `SidebarActionLink` configs as footer entries.
 *
 *  - **Icon-only** entries (no `label`) render as a bare `<a>` wrapping the
 *    icon, so the existing `.ds-sidebar__footer` styling (centered horizontal
 *    row of raw icons) is preserved exactly as before.
 *  - **Labeled** entries fall back to a Tier-2 `NavItem` (full chrome).
 */
const renderFooterLinks = (
  links: SidebarActionLink[],
  colorMode: SidebarColorMode,
): ReactNode =>
  links.map((link, i) => {
    const key =
      link.key ??
      (typeof link.label === 'string' ? `${link.label}-${i}` : `action-${i}`)
    const externalProps = link.external
      ? ({ target: '_blank', rel: 'noopener noreferrer' } as const)
      : null

    if (!link.label) {
      return (
        <a
          key={key}
          className="ds-sidebar__footer-link"
          href={link.href ?? '#'}
          aria-label={link.ariaLabel}
          aria-current={link.selected ? 'page' : undefined}
          onClick={link.onClick}
          {...externalProps}
        >
          {link.iconLeft ?? link.iconRight}
        </a>
      )
    }

    return (
      <NavItem
        key={key}
        orientation="vertical"
        hierarchy="tier-2"
        colorMode={colorMode}
        label={link.label}
        href={link.href ?? '#'}
        iconLeft={link.iconLeft}
        iconRight={link.iconRight}
        selected={link.selected}
        onClick={link.onClick}
        aria-label={link.ariaLabel}
        {...externalProps}
      />
    )
  })

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

  // Resolve the polymorphic `footer` prop. Config arrays become a stack of
  // Tier-2 NavItems; ReactNodes pass through untouched.
  const footerNode = isFooterLinkArray(footer)
    ? renderFooterLinks(footer, colorMode)
    : (footer as ReactNode)
  const hasFooter = isFooterLinkArray(footer)
    ? footer.length > 0
    : Boolean(footer)

  return (
    <aside className={classes} aria-label={ariaLabel} {...props}>
      {logo && <div className="ds-sidebar__logo">{logo}</div>}
      <nav className="ds-sidebar__nav">{children}</nav>
      {hasFooter && <div className="ds-sidebar__footer">{footerNode}</div>}
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
