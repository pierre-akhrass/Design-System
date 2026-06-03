import './Footer.scss'
import { FooterLogo, NavGroupBlock, SocialButton } from './Footer.helpers'
import type { FooterV2Props } from './Footer.types'

/**
 * FooterV2 — Logo + description + socials (col 1) + 4 nav columns + copyright bar.
 * Desktop: 1440×586. Mobile: stacked, nav groups in 2-col grid.
 */
export const FooterV2 = ({
  logo,
  description,
  socials = [],
  navGroups = [],
  copyright,
  className,
  ...props
}: FooterV2Props) => {
  const classes = ['ds-footer', 'ds-footer--v2', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {/* Body: brand col + nav columns */}
        <div className="ds-footer__body">
          <div className="ds-footer__col-brand">
            <FooterLogo logo={logo} />
            {description && <p className="ds-footer__description">{description}</p>}
            {socials.length > 0 && (
              <div className="ds-footer__socials">
                {socials.map((s, i) => (
                  <SocialButton key={i} {...s} />
                ))}
              </div>
            )}
          </div>

          <div className="ds-footer__nav-columns">
            {navGroups.map((g, i) => (
              <NavGroupBlock key={i} {...g} />
            ))}
          </div>
        </div>

        {/* Bottom: copyright bar */}
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
