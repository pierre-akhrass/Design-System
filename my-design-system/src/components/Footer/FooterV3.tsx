import './Footer.scss'
import type { FooterV3Props } from './Footer.types'

/**
 * FooterV3 — Copyright text left + copyright text right (single bar).
 * Desktop: 1440×152. Mobile: stacked, centered.
 */
export const FooterV3 = ({ copyrightLeft, copyrightRight, className, ...props }: FooterV3Props) => {
  const classes = ['ds-footer', 'ds-footer--v3', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {copyrightLeft && <p className="ds-footer__copyright">{copyrightLeft}</p>}
        {copyrightRight && <p className="ds-footer__copyright">{copyrightRight}</p>}
      </div>
    </footer>
  )
}
