import { useState, type FormEvent, type ReactElement } from 'react'
import type { FooterLogoProps, FooterNavGroup, FooterNavItem, FooterNewsletterProps, FooterSocialLink } from './Footer.types'
import facebookSrc from '../../assets/facebook.svg'
import twitterSrc from '../../assets/twitter.svg'
import instagramSrc from '../../assets/instagram.svg'
import linkedinSrc from '../../assets/linkedin.svg'
import youtubeSrc from '../../assets/youtube.svg'

// ─── Social Icon Images (from assets) ────────────────────────────────────────

const FacebookIcon = () => <img src={facebookSrc} alt="" width={24} height={24} aria-hidden="true" />
const TwitterXIcon = () => <img src={twitterSrc} alt="" width={24} height={24} aria-hidden="true" />
const InstagramIcon = () => <img src={instagramSrc} alt="" width={24} height={24} aria-hidden="true" />
const LinkedInIcon = () => <img src={linkedinSrc} alt="" width={24} height={24} aria-hidden="true" />
const YouTubeIcon = () => <img src={youtubeSrc} alt="" width={24} height={24} aria-hidden="true" />

const socialIconMap: Record<string, () => ReactElement> = {
  facebook: FacebookIcon,
  twitter: TwitterXIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
}

// ─── Sub-components ───────────────────────────────────────────────────────────

export const FooterLogo = ({ logo }: { logo: FooterLogoProps }) => {
  const inner = <img src={logo.src} alt={logo.alt ?? ''} />
  if (logo.href) {
    return (
      <a href={logo.href} className="ds-footer__logo">
        {inner}
      </a>
    )
  }
  return <div className="ds-footer__logo">{inner}</div>
}

export const SocialButton = ({ platform, href, onClick, ariaLabel, icon }: FooterSocialLink) => {
  const BuiltInIcon = socialIconMap[platform]
  const renderedIcon = icon ?? (BuiltInIcon ? <BuiltInIcon /> : null)
  const label = ariaLabel ?? `Follow us on ${platform}`
  if (href) {
    return (
      <a
        href={href}
        className="ds-footer__social-btn"
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {renderedIcon}
      </a>
    )
  }
  return (
    <button type="button" className="ds-footer__social-btn" aria-label={label} onClick={onClick}>
      {renderedIcon}
    </button>
  )
}

export const NavGroupBlock = ({ title, items }: FooterNavGroup) => (
  <div className="ds-footer__nav-group">
    <p className="ds-footer__nav-group-title">{title}</p>
    {items.map((item, i) => {
      const BuiltInIcon = item.platform ? socialIconMap[item.platform] : null
      const navIcon = item.icon ?? (BuiltInIcon ? <BuiltInIcon /> : null)
      const inner = (
        <>
          {navIcon && <span className="ds-footer__social-nav-icon" aria-hidden="true">{navIcon}</span>}
          {item.label}
        </>
      )
      return item.href ? (
        <a key={i} href={item.href} className={`ds-footer__nav-item${navIcon ? ' ds-footer__nav-item--with-icon' : ''}`}>
          {inner}
        </a>
      ) : (
        <button key={i} type="button" className={`ds-footer__nav-item${navIcon ? ' ds-footer__nav-item--with-icon' : ''}`} onClick={item.onClick}>
          {inner}
        </button>
      )
    })}
  </div>
)

export const NavItemLink = ({ label, href, onClick }: FooterNavItem) => {
  if (href) {
    return (
      <a href={href} className="ds-footer__nav-item">
        {label}
      </a>
    )
  }
  return (
    <button type="button" className="ds-footer__nav-item" onClick={onClick}>
      {label}
    </button>
  )
}

export const NewsletterForm = ({
  heading,
  label,
  placeholder = 'Enter your email',
  buttonLabel = 'Subscribe',
  onSubscribe,
}: FooterNewsletterProps) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubscribe?.(email)
  }

  return (
    <div className="ds-footer__newsletter">
      {heading && <p className="ds-footer__newsletter-heading">{heading}</p>}
      {label && <p className="ds-footer__newsletter-label">{label}</p>}
      <form className="ds-footer__newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="ds-footer__newsletter-input"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label={label ?? 'Email address'}
        />
        <button type="submit" className="ds-footer__newsletter-btn">
          {buttonLabel}
        </button>
      </form>
    </div>
  )
}
