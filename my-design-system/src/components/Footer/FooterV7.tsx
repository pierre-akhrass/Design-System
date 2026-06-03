import './Footer.scss'
import { FooterLogo } from './Footer.helpers'
import type { FooterV7Props } from './Footer.types'

/**
 * FooterV7 — Logo left + copyright right (single bar).
 * Desktop: 1440×160. Mobile: stacked, centered.
 */
export const FooterV7 = ({ logo, copyright, className, ...props }: FooterV7Props) => {
  const classes = ['ds-footer', 'ds-footer--v7', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        <FooterLogo logo={logo} />
        {copyright && <p className="ds-footer__copyright">{copyright}</p>}
      </div>
    </footer>
  )
}
