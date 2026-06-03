import './Footer.scss'
import { NavItemLink, SocialButton } from './Footer.helpers'
import type { FooterV12Props } from './Footer.types'

/**
 * FooterV12 — Copyright left + nav items + social icons right (bar).
 * Desktop: 1440×176. Mobile: stacked, centered.
 */
export const FooterV12 = ({
  copyright,
  navItems = [],
  socials = [],
  className,
  ...props
}: FooterV12Props) => {
  const classes = ['ds-footer', 'ds-footer--v12', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {copyright && <p className="ds-footer__copyright">{copyright}</p>}

        <div className="ds-footer__right-group">
          {navItems.length > 0 && (
            <div className="ds-footer__nav-items-row">
              {navItems.map((item, i) => (
                <NavItemLink key={i} {...item} />
              ))}
            </div>
          )}

          {socials.length > 0 && (
            <div className="ds-footer__socials">
              {socials.map((s, i) => (
                <SocialButton key={i} {...s} />
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
