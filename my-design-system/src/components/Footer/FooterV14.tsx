import './Footer.scss'
import { FooterLogo, NavItemLink } from './Footer.helpers'
import type { FooterV14Props } from './Footer.types'

/**
 * FooterV14 — Nav items left + logo center + nav items right (single bar).
 * Desktop: 1440×160. Mobile: logo centered above wrapped nav items.
 */
export const FooterV14 = ({
  logo,
  leftNavItems = [],
  rightNavItems = [],
  className,
  ...props
}: FooterV14Props) => {
  const classes = ['ds-footer', 'ds-footer--v14', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {/* Left nav */}
        {leftNavItems.length > 0 && (
          <div className="ds-footer__nav-items-row">
            {leftNavItems.map((item, i) => (
              <NavItemLink key={i} {...item} />
            ))}
          </div>
        )}

        {/* Center logo */}
        <FooterLogo logo={logo} />

        {/* Right nav */}
        {rightNavItems.length > 0 && (
          <div className="ds-footer__nav-items-row">
            {rightNavItems.map((item, i) => (
              <NavItemLink key={i} {...item} />
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
