import './Footer.scss'
import { SocialButton } from './Footer.helpers'
import type { FooterV11Props } from './Footer.types'

/**
 * FooterV11 — Copyright left + social icons right (minimal bar).
 * Desktop: 1440×176. Mobile: stacked, centered.
 */
export const FooterV11 = ({ copyright, socials = [], className, ...props }: FooterV11Props) => {
  const classes = ['ds-footer', 'ds-footer--v11', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        {copyright && <p className="ds-footer__copyright">{copyright}</p>}
        {socials.length > 0 && (
          <div className="ds-footer__socials">
            {socials.map((s, i) => (
              <SocialButton key={i} {...s} />
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
