// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Navbar/Navbar.tsx
import type { HTMLAttributes, ReactNode } from 'react'
import './Navbar.scss'

export type NavbarColorMode = 'light' | 'dark'

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Left-aligned content (typically the brand / logo). */
  logo?: ReactNode
  /** Center-aligned navigation content (e.g. `NavItem`s). */
  children?: ReactNode
  /** Right-aligned content (icons, account, search, etc.). */
  actions?: ReactNode
  /** Accessible label for the `<nav>` landmark. */
  ariaLabel?: string
  /** Light or dark surface. Defaults to `dark`. */
  colorMode?: NavbarColorMode
}

export const Navbar = ({
  logo,
  children,
  actions,
  ariaLabel = 'Primary',
  colorMode = 'dark',
  className,
  ...props
}: NavbarProps) => {
  const classes = ['ds-navbar', `ds-navbar--mode-${colorMode}`, className]
    .filter(Boolean)
    .join(' ')
  return (
    <nav className={classes} aria-label={ariaLabel} {...props}>
      {logo && <div className="ds-navbar__logo">{logo}</div>}
      <div className="ds-navbar__items" role="menubar">
        {children}
      </div>
      {actions && <div className="ds-navbar__actions">{actions}</div>}
    </nav>
  )
}
