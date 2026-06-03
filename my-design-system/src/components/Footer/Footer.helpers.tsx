import { useState, type FormEvent } from 'react'
import type { FooterLogoProps, FooterNavGroup, FooterNavItem, FooterNewsletterProps, FooterSocialLink } from './Footer.types'

// ─── Social Icon SVGs ────────────────────────────────────────────────────────

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13.5 8.5H15V6.5H13.5C12.1193 6.5 11 7.61929 11 9V10.5H9V12.5H11V17.5H13V12.5H14.5L15 10.5H13V9C13 8.72386 13.2239 8.5 13.5 8.5Z" fill="currentColor" />
  </svg>
)

const TwitterXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.629 5.905-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 10.5V16.5M8 7v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 16.5V13c0-1.5 1-2.5 2.5-2.5S17 11.5 17 13v3.5M12 10.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9.5 9.5L15 12L9.5 14.5V9.5Z" fill="currentColor" />
  </svg>
)

const socialIconMap: Record<string, () => JSX.Element> = {
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

export const SocialButton = ({ platform, href, onClick, ariaLabel }: FooterSocialLink) => {
  const Icon = socialIconMap[platform]
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
        {Icon && <Icon />}
      </a>
    )
  }
  return (
    <button type="button" className="ds-footer__social-btn" aria-label={label} onClick={onClick}>
      {Icon && <Icon />}
    </button>
  )
}

export const NavGroupBlock = ({ title, items }: FooterNavGroup) => (
  <div className="ds-footer__nav-group">
    <p className="ds-footer__nav-group-title">{title}</p>
    {items.map((item, i) => {
      const Icon = item.platform ? socialIconMap[item.platform] : null
      const inner = (
        <>
          {Icon && <span className="ds-footer__social-nav-icon" aria-hidden="true"><Icon /></span>}
          {item.label}
        </>
      )
      return item.href ? (
        <a key={i} href={item.href} className={`ds-footer__nav-item${Icon ? ' ds-footer__nav-item--with-icon' : ''}`}>
          {inner}
        </a>
      ) : (
        <button key={i} type="button" className={`ds-footer__nav-item${Icon ? ' ds-footer__nav-item--with-icon' : ''}`} onClick={item.onClick}>
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
