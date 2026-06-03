import './Footer.scss'
import { FooterLogo, SocialButton } from './Footer.helpers'
import type { FooterV1Props } from './Footer.types'

/**
 * FooterV1 — Logo left, social icons right.
 * Single-bar layout (desktop ~160px tall).
 * Mobile: logo centered above socials row.
 */
export const FooterV1 = ({ logo, socials = [], className, ...props }: FooterV1Props) => {
  const classes = ['ds-footer', 'ds-footer--v1', className].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="ds-footer__container">
        <FooterLogo logo={logo} />
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
