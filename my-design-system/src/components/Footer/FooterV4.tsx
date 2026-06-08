import './Footer.scss'
import { FooterLogo, NewsletterForm, SocialButton } from './Footer.helpers'
import type { FooterV4Props } from './Footer.types'

/**
 * FooterV4 — Logo centered + description + newsletter form + socials + copyright bar.
 * Desktop: 1440×653, content centered. Mobile: stacked full-width.
 */
export const FooterV4 = ({
  logo,
  heading,
  description,
  newsletter,
  socials = [],
  copyright,
  className,
  ...props
}: FooterV4Props) => {
  const classes = ['ds-footer', 'ds-footer--v4', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {/* Centered body */}
        <div className="ds-footer__body">
          <FooterLogo logo={logo} />
          {heading && <p className="ds-footer__newsletter-heading">{heading}</p>}
          {description && <p className="ds-footer__description">{description}</p>}
          {newsletter && <NewsletterForm {...newsletter} />}
          {socials.length > 0 && (
            <div className="ds-footer__socials">
              {socials.map((s, i) => (
                <SocialButton key={i} {...s} />
              ))}
            </div>
          )}
        </div>

        {/* Bottom: copyright */}
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
