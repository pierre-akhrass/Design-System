import './Footer.scss'
import { NavGroupBlock, SocialButton } from './Footer.helpers'
import type { FooterV13Props } from './Footer.types'

/**
 * FooterV13 — 4 nav columns + socials centered + copyright texts.
 * Desktop: 1440×738. Mobile: nav in 2-col grid.
 */
export const FooterV13 = ({
  navGroups = [],
  socials = [],
  copyright,
  copyrightSub,
  className,
  ...props
}: FooterV13Props) => {
  const classes = ['ds-footer', 'ds-footer--v13', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {/* Body: 4 nav columns */}
        <div className="ds-footer__body">
          {navGroups.map((g, i) => (
            <NavGroupBlock key={i} {...g} />
          ))}
        </div>

        {/* Bottom: socials + copyright */}
        {(socials.length > 0 || copyright) && (
          <div className="ds-footer__bottom">
            <div className="ds-footer__bottom-inner">
              {socials.length > 0 && (
                <div className="ds-footer__socials">
                  {socials.map((s, i) => (
                    <SocialButton key={i} {...s} />
                  ))}
                </div>
              )}
              {copyright && <p className="ds-footer__copyright">{copyright}</p>}
              {copyrightSub && <p className="ds-footer__copyright">{copyrightSub}</p>}
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
