import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  type HTMLAttributes,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react'
/**
 * Navbar Component
 * @developer pierre-akhrass (original), sereneogilvy (updates)
 */

import './Navbar.scss'
import { NavItem, type NavItemProps } from '../NavItem'
import {
  Sidebar,
  SidebarItem,
  SidebarNestedItem,
  SidebarTier2Item,
  type SidebarActionLink,
} from '../Sidebar'
import { NavbarMenu, type NavbarMenuProps } from './NavbarMenu'

export type NavbarColorMode = 'light' | 'dark'

/**
 * Declarative logo config. Use this (or a plain `src` string) when the logo
 * image URL is dynamic (e.g. fetched from a CMS, tenant config, etc.).
 */
export interface NavbarLogoConfig {
  /** Image source URL (required). */
  src: string
  /** Accessible alt text. Defaults to `'Logo'`. */
  alt?: string
  /** Optional link target — wraps the image in an `<a>`. */
  href?: string
  /** Rendered image height in px. Defaults to `32`. */
  height?: number | string
  /** Rendered image width in px. Auto by default. */
  width?: number | string
}

/**
 * Declarative action-link config. Use this (or an array of these) on the
 * `actions` prop when the right-aligned items are links whose data is
 * dynamic (e.g. authored in a CMS, derived from auth state, etc.).
 *
 * Each entry renders as a horizontal `NavItem` inside the bar, and as a
 * stacked Tier-2 `NavItem` inside the mobile drawer footer.
 */
export interface NavbarActionLink {
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

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Brand mark. Accepts:
   *   - a `ReactNode`  (full control, e.g. inline SVG + text)
   *   - a `string`     (treated as a dynamic image src)
   *   - a `NavbarLogoConfig` object (`{ src, alt?, href?, height?, width? }`)
   */
  logo?: ReactNode | NavbarLogoConfig | string
  /** Center-aligned navigation content (e.g. `NavItem`s, `NavbarMenu`s). */
  children?: ReactNode
  /**
   * Right-aligned content. Accepts either:
   *   - a `ReactNode` — full control (icons, account, search, etc.).
   *   - a `NavbarActionLink[]` — declarative, dynamic list of links rendered
   *     automatically as `NavItem`s in the bar and the mobile drawer.
   */
  actions?: ReactNode | NavbarActionLink[]
  /** Accessible label for the `<nav>` landmark. */
  ariaLabel?: string
  /** Light or dark surface. Defaults to `dark`. */
  colorMode?: NavbarColorMode
  /** Override the burger button's accessible label. */
  burgerAriaLabel?: string
  /**
   * Optional custom drawer content for mobile. When omitted, an internal
   * Sidebar is auto-derived from `children` + `actions` so the mobile drawer
   * mirrors the desktop bar with no data duplication.
   */
  mobileMenu?: ReactNode
  /** Side the mobile drawer slides in from. Defaults to `'right'`. */
  mobileDrawerSide?: 'left' | 'right'
}

const BurgerIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/**
 * Normalize the polymorphic `logo` prop into a `ReactNode`.
 * Strings and `{src, ...}` configs become an `<img>` (optionally wrapped in `<a>`).
 */
const renderLogo = (logo: NavbarProps['logo']): ReactNode => {
  if (logo == null || logo === false) return null

  // Plain string -> treat as image src.
  if (typeof logo === 'string') {
    return <img src={logo} alt="Logo" className="ds-navbar__logo-img" />
  }

  // Config object -> <img> (optionally wrapped in <a>).
  if (
    typeof logo === 'object' &&
    logo !== null &&
    !isValidElement(logo) &&
    'src' in (logo as unknown as Record<string, unknown>) &&
    typeof (logo as NavbarLogoConfig).src === 'string'
  ) {
    const { src, alt = 'Logo', href, height = 32, width } = logo as NavbarLogoConfig
    const img = (
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        className="ds-navbar__logo-img"
      />
    )
    return href ? (
      <a href={href} className="ds-navbar__logo-link" aria-label={alt}>
        {img}
      </a>
    ) : (
      img
    )
  }

  // Already a ReactNode.
  return logo as ReactNode
}

/**
 * True when `actions` is a config array (each entry is a plain object, not
 * a React element). Plain arrays of React elements are still treated as a
 * regular `ReactNode`.
 */
const isActionLinkArray = (
  actions: NavbarProps['actions'],
): actions is NavbarActionLink[] =>
  Array.isArray(actions) &&
  actions.every(
    (a) => a !== null && typeof a === 'object' && !isValidElement(a),
  )

/**
 * Render a list of `NavbarActionLink` configs as link anchors. Used for both
 * the inline bar (horizontal) and the mobile drawer footer (vertical).
 *
 *  - **Icon-only** entries (no `label`) render as a bare `<a>` wrapping the
 *    icon — mirrors the standalone `<Sidebar>` footer treatment so the
 *    desktop bar, mobile drawer footer, and standalone Sidebar all show the
 *    same centered icon row.
 *  - **Labeled** entries render as full `NavItem` chrome (icon + text).
 */
const renderActionLinks = (
  links: NavbarActionLink[],
  colorMode: NavbarColorMode,
  orientation: 'horizontal' | 'vertical',
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
          className="ds-navbar__action-link"
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
        orientation={orientation}
        hierarchy={orientation === 'vertical' ? 'tier-2' : 'tier-1'}
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

/**
 * Convert a single navbar child (NavItem / NavbarMenu / arbitrary node) into a
 * Sidebar-friendly node so the mobile drawer renders the same data.
 */
const childToSidebarNode = (child: ReactNode, key: number): ReactNode => {
  if (!isValidElement(child)) return child

  if (child.type === NavbarMenu) {
    const p = child.props as NavbarMenuProps
    const nested = p.rows
      ? p.rows
          .map((row, i) => {
            if (row.kind === 'item') {
              return (
                <SidebarNestedItem
                  key={`row-${i}`}
                  label={row.label as ReactNode}
                  href={row.href ?? '#'}
                  iconLeft={row.iconLeft}
                  iconRight={row.iconRight}
                  selected={row.selected}
                  onClick={row.onClick}
                />
              )
            }
            if (row.kind === 'button') {
              return (
                <SidebarNestedItem
                  key={`row-${i}`}
                  label={row.label as ReactNode}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    row.onClick?.()
                  }}
                />
              )
            }
            if (row.kind === 'custom') {
              return <span key={`row-${i}`}>{row.node}</span>
            }
            return null
          })
          .filter(Boolean)
      : p.children

    return (
      <SidebarItem
        key={key}
        label={p.label as ReactNode}
        iconLeft={p.iconLeft}
        selected={p.selected}
      >
        {nested}
      </SidebarItem>
    )
  }

  if (child.type === NavItem) {
    const p = child.props as NavItemProps
    return (
      <SidebarTier2Item
        key={key}
        label={p.label}
        iconLeft={p.iconLeft}
        iconRight={p.iconRight}
        selected={p.selected}
        href={p.href}
        onClick={p.onClick}
      />
    )
  }

  return child
}

export const Navbar = ({
  logo,
  children,
  actions,
  ariaLabel = 'Primary',
  colorMode = 'dark',
  burgerAriaLabel = 'Toggle navigation menu',
  mobileMenu,
  mobileDrawerSide = 'right',
  className,
  ...props
}: NavbarProps) => {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const mobileMenuId = useId()
  const close = useCallback(() => setOpen(false), [])

  // Normalize the polymorphic logo once; reuse in both the bar + drawer.
  const logoNode = useMemo(() => renderLogo(logo), [logo])

  // Resolve the polymorphic `actions` prop. We compute:
  //   - `actionsBarNode`      -> ReactNode rendered inside the bar (horizontal NavItems).
  //   - `actionsDrawerFooter` -> value forwarded straight to `Sidebar.footer`
  //                              (config array OR ReactNode), so the mobile drawer
  //                              uses the Sidebar component's *own* footer logic
  //                              (icon-only entries become the bare-anchor icon row;
  //                              labeled entries become Tier-2 NavItems).
  //   - `hasActions`          -> truthy when there's anything to show.
  // NavbarActionLink and SidebarActionLink are structurally identical, so the
  // raw config array forwards cleanly to `Sidebar.footer`.
  const { actionsBarNode, actionsDrawerFooter, hasActions } = useMemo(() => {
    if (isActionLinkArray(actions)) {
      return {
        actionsBarNode: renderActionLinks(actions, colorMode, 'horizontal'),
        actionsDrawerFooter: actions as SidebarActionLink[],
        hasActions: actions.length > 0,
      }
    }
    return {
      actionsBarNode: actions as ReactNode,
      actionsDrawerFooter: actions as ReactNode,
      hasActions: Boolean(actions),
    }
  }, [actions, colorMode])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  // Auto-derive a Sidebar drawer from the navbar's own data.
  const autoDrawer = useMemo(() => {
    const items = Children.map(children, (child, i) =>
      childToSidebarNode(child, i),
    )
    return (
      <Sidebar
        colorMode={colorMode}
        logo={logoNode}
        footer={hasActions ? actionsDrawerFooter : undefined}
        ariaLabel="Mobile navigation"
      >
        {items}
      </Sidebar>
    )
  }, [children, actionsDrawerFooter, hasActions, logoNode, colorMode])

  const drawerContent = mobileMenu ?? autoDrawer

  // Close the drawer when a leaf nav link is tapped (but not when an
  // expandable SidebarItem trigger toggles — those call preventDefault()).
  const handleDrawerClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (e.defaultPrevented) return
    const target = e.target as HTMLElement
    if (target.closest('a.ds-nav-item')) close()
  }

  const classes = [
    'ds-navbar',
    `ds-navbar--mode-${colorMode}`,
    open ? 'ds-navbar--mobile-open' : null,
    `ds-navbar--drawer-${mobileDrawerSide}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav className={classes} aria-label={ariaLabel} {...props}>
      <div className="ds-navbar__bar">
        {logoNode && <div className="ds-navbar__logo">{logoNode}</div>}
        <div className="ds-navbar__items" id={menuId} role="menubar">
          {children}
        </div>
        {hasActions && (
          <div className="ds-navbar__actions">{actionsBarNode}</div>
        )}
        <button
          type="button"
          className="ds-navbar__burger"
          aria-label={burgerAriaLabel}
          aria-expanded={open}
          aria-controls={mobileMenuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>

      {/* Backdrop — only visible on mobile when the drawer is open. */}
      <div className="ds-navbar__backdrop" aria-hidden="true" onClick={close} />

      {/* Slide-in drawer — Sidebar-styled, mirrors navbar data by default. */}
      <div
        id={mobileMenuId}
        className="ds-navbar__mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        onClick={handleDrawerClick}
      >
        {drawerContent}
      </div>
    </nav>
  )
}
