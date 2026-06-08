import './Footer.scss'
import { FooterLogo, NavItemLink, SocialButton } from './Footer.helpers'
import type { FooterV10Props } from './Footer.types'

/**
 * FooterV10 — Logo (left) + nav items (center) + socials (right) + copyright bar.
 * Desktop: 1440×296. Mobile: stacked, centered.
 */
export const FooterV10 = ({
  logo,
  navItems = [],
  socials = [],
  copyright,
  className,
  ...props
}: FooterV10Props) => {
  const classes = ['ds-footer', 'ds-footer--v10', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {/* Body: logo | nav | socials */}
        <div className="ds-footer__body">
          <div className="ds-footer__col-logo">
            <FooterLogo logo={logo} />
          </div>

          {navItems.length > 0 && (
            <div className="ds-footer__col-nav">
              <div className="ds-footer__nav-items-row">
                {navItems.map((item, i) => (
                  <NavItemLink key={i} {...item} />
                ))}
              </div>
            </div>
          )}

          {socials.length > 0 && (
            <div className="ds-footer__col-socials">
              <div className="ds-footer__socials">
                {socials.map((s, i) => (
                  <SocialButton key={i} {...s} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom: copyright centered */}
        {copyright && (
          <div className="ds-footer__bottom">
            <div className="ds-footer__bottom-inner">
              <p className="ds-footer__copyright">{copyright}</p>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
