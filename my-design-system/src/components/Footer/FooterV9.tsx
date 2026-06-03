import './Footer.scss'
import { FooterLogo, NewsletterForm } from './Footer.helpers'
import type { FooterV9Props } from './Footer.types'

/**
 * FooterV9 — Logo + description (col1) + newsletter form (col right).
 * Desktop: 1440×374. Mobile: stacked.
 */
export const FooterV9 = ({
  logo,
  description,
  newsletter,
  className,
  ...props
}: FooterV9Props) => {
  const classes = ['ds-footer', 'ds-footer--v9', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        <div className="ds-footer__body">
          {/* Col 1: brand */}
          <div className="ds-footer__col-brand">
            <FooterLogo logo={logo} />
            {description && <p className="ds-footer__description">{description}</p>}
          </div>

          {/* Col right: newsletter */}
          {newsletter && (
            <div className="ds-footer__col-newsletter">
              <NewsletterForm {...newsletter} />
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
