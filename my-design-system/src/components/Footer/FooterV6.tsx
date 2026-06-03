import './Footer.scss'
import { FooterLogo, NavGroupBlock } from './Footer.helpers'
import type { FooterV6Props } from './Footer.types'

/**
 * FooterV6 — Logo + description (col1) + 4 nav groups (no bottom bar).
 * Desktop: 1440×482. Mobile: stacked, nav in 2-col grid.
 */
export const FooterV6 = ({
  logo,
  description,
  navGroups = [],
  className,
  ...props
}: FooterV6Props) => {
  const classes = ['ds-footer', 'ds-footer--v6', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        <div className="ds-footer__body">
          {/* Col 1: brand */}
          <div className="ds-footer__col-brand">
            <FooterLogo logo={logo} />
            {description && <p className="ds-footer__description">{description}</p>}
          </div>

          {/* Nav columns */}
          <div className="ds-footer__nav-columns">
            {navGroups.map((g, i) => (
              <NavGroupBlock key={i} {...g} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
