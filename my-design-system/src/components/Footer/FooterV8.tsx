import './Footer.scss'
import { FooterLogo, NavGroupBlock } from './Footer.helpers'
import type { FooterV8Props } from './Footer.types'

/**
 * FooterV8 — 5 nav groups (body) + logo + copyright bottom bar.
 * Desktop: 1440×578. Mobile: nav groups in 2-col grid, logo+copyright stacked.
 */
export const FooterV8 = ({
  navGroups = [],
  logo,
  copyright,
  className,
  ...props
}: FooterV8Props) => {
  const classes = ['ds-footer', 'ds-footer--v8', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {/* Body: 5 nav groups */}
        <div className="ds-footer__body">
          {navGroups.map((g, i) => (
            <NavGroupBlock key={i} {...g} />
          ))}
        </div>

        {/* Bottom: logo + copyright */}
        <div className="ds-footer__bottom">
          <div className="ds-footer__bottom-inner">
            <FooterLogo logo={logo} />
            {copyright && <p className="ds-footer__copyright">{copyright}</p>}
          </div>
        </div>
      </div>
    </footer>
  )
}
