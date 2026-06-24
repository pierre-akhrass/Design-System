import './Footer.scss'
import { FooterLogo, NavGroupBlock, NewsletterForm, SocialButton } from './Footer.helpers'
import type { FooterV5Props } from './Footer.types'

/**
 * FooterV5 — Logo+desc+newsletter (col1) + 2 nav cols + instagram 2×2 grid + copyright+socials bar.
 * Desktop: 1440×620. Mobile: stacked.
 */
export const FooterV5 = ({
  logo,
  description,
  newsletter,
  navGroups = [],
  instagramGrid,
  copyright,
  socials = [],
  className,
  ...props
}: FooterV5Props) => {
  const classes = ['ds-footer', 'ds-footer--v5', className].filter(Boolean).join(' ')
  const images = instagramGrid?.images ?? []

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {/* Body row */}
        <div className="ds-footer__body">
          {/* Col 1: brand */}
          <div className="ds-footer__col-brand">
            <FooterLogo logo={logo} />
            {description && <p className="ds-footer__description">{description}</p>}
            {newsletter && <NewsletterForm {...newsletter} />}
          </div>

          {/* Col 2–3: nav groups */}
          <div className="ds-footer__nav-columns">
            {navGroups.map((g, i) => (
              <NavGroupBlock key={i} {...g} />
            ))}
          </div>

          {/* Col 4: instagram grid */}
          {images.length > 0 && (
            <div className="ds-footer__col-instagram">
              {instagramGrid?.title && (
                <p className="ds-footer__instagram-title">{instagramGrid.title}</p>
              )}
              <div className="ds-footer__instagram-grid">
                {images.slice(0, 4).map((img, i) => (
                  <div key={i} className="ds-footer__instagram-img">
                    <img src={img.src} alt={img.alt ?? ''} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom: copyright + socials */}
        {(copyright || socials.length > 0) && (
          <div className="ds-footer__bottom">
            <div className="ds-footer__bottom-inner">
              {copyright && <p className="ds-footer__copyright">{copyright}</p>}
              {socials.length > 0 && (
                <div className="ds-footer__socials">
                  {socials.map((s, i) => (
                    <SocialButton key={i} {...s} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
