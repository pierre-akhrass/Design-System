import { useId, useState, type HTMLAttributes, type ReactNode } from 'react'
import './Navbar.scss'

export type NavbarColorMode = 'light' | 'dark'

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Left-aligned content (typically the brand / logo). */
  logo?: ReactNode
  /** Center-aligned navigation content (e.g. `NavItem`s, `NavbarMenu`s). */
  children?: ReactNode
  /** Right-aligned content (icons, account, search, etc.). */
  actions?: ReactNode
  /** Accessible label for the `<nav>` landmark. */
  ariaLabel?: string
  /** Light or dark surface. Defaults to `dark`. */
  colorMode?: NavbarColorMode
  /** Override the burger button's accessible label. */
  burgerAriaLabel?: string
  /**
   * Optional content rendered as a drawer below the bar on mobile when the
   * burger is open. Typically a `<Sidebar>`. When omitted, the navbar's
   * children + actions are re-rendered as a stacked vertical list (default).
   */
  mobileMenu?: ReactNode
}

const BurgerIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6l12 12M6 18L18 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const Navbar = ({
  logo,
  children,
  actions,
  ariaLabel = 'Primary',
  colorMode = 'dark',
  burgerAriaLabel = 'Toggle navigation menu',
  mobileMenu,
  className,
  ...props
}: NavbarProps) => {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const mobileMenuId = useId()

  const classes = [
    'ds-navbar',
    `ds-navbar--mode-${colorMode}`,
    open ? 'ds-navbar--mobile-open' : null,
    mobileMenu ? 'ds-navbar--has-mobile-menu' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const controlsId = mobileMenu ? mobileMenuId : menuId

  return (
    <nav className={classes} aria-label={ariaLabel} {...props}>
      <div className="ds-navbar__bar">
        {logo && <div className="ds-navbar__logo">{logo}</div>}

        <div className="ds-navbar__items" id={menuId} role="menubar">
          {children}
        </div>

        {actions && <div className="ds-navbar__actions">{actions}</div>}

        <button
          type="button"
          className="ds-navbar__burger"
          aria-label={burgerAriaLabel}
          aria-expanded={open}
          aria-controls={controlsId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>

      {mobileMenu && (
        <div
          id={mobileMenuId}
          className="ds-navbar__mobile-menu"
          aria-hidden={!open}
        >
          {mobileMenu}
        </div>
      )}
    </nav>
  )
}
