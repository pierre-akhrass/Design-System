import './Footer.scss'
import { FooterLogo, NewsletterForm, SocialButton } from './Footer.helpers'
import type { FooterV15Props } from './Footer.types'

/**
 * FooterV15 — 3 columns: logo+description | newsletter form | socials label+icons.
 * Desktop: 1440×330. Mobile: stacked, centered.
 */
export const FooterV15 = ({
  logo,
  description,
  newsletter,
  socialsLabel,
  socials = [],
  className,
  ...props
}: FooterV15Props) => {
  const classes = ['ds-footer', 'ds-footer--v15', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        <div className="ds-footer__body">
          {/* Col 1: logo + description */}
          <div className="ds-footer__col-brand">
            <FooterLogo logo={logo} />
            {description && <p className="ds-footer__description">{description}</p>}
          </div>

          {/* Col 2: newsletter */}
          {newsletter && (
            <div className="ds-footer__col-newsletter">
              <NewsletterForm {...newsletter} />
            </div>
          )}

          {/* Col 3: socials label + icons */}
          {(socialsLabel || socials.length > 0) && (
            <div className="ds-footer__col-socials">
              {socialsLabel && <p className="ds-footer__socials-label">{socialsLabel}</p>}
              {socials.length > 0 && (
                <div className="ds-footer__socials">
                  {socials.map((s, i) => (
                    <SocialButton key={i} {...s} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
