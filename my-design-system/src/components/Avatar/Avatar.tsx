import type { HTMLAttributes, ReactNode } from 'react'
import './Avatar.scss'

export type AvatarSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
export type AvatarVariant = 'image' | 'initial' | 'shape'
export type AvatarTheme = 'light' | 'dark'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize
  variant?: AvatarVariant
  theme?: AvatarTheme
  initials?: string
  src?: string
  alt?: string
  icon?: ReactNode
}

const DefaultPersonGlyph = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      d="M12 4a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 10.5c3.95 0 7.5 2.08 7.5 4.65V20H4.5v-.85c0-2.57 3.55-4.65 7.5-4.65z"
      fill="currentColor"
    />
  </svg>
)

const DefaultShapeGlyph = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      d="M12 2.5l2.9 5.88 6.49.94-4.69 4.58 1.11 6.47L12 17.34l-5.81 3.03 1.11-6.47L2.61 9.32l6.49-.94L12 2.5z"
      fill="currentColor"
    />
  </svg>
)

export const Avatar = ({
  size = 'medium',
  variant = 'image',
  theme = 'light',
  initials = 'FS',
  src,
  alt,
  icon,
  className,
  ...props
}: AvatarProps) => {
  const classes = [
    'ds-avatar',
    `ds-avatar--${size}`,
    `ds-avatar--${variant}`,
    `ds-avatar--${theme}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {variant === 'image' && src ? (
        <img className="ds-avatar__image" src={src} alt={alt ?? 'Avatar image'} />
      ) : null}

      {variant === 'image' && !src ? (
        <span className="ds-avatar__glyph" aria-hidden="true">
          <DefaultPersonGlyph />
        </span>
      ) : null}

      {variant === 'initial' ? (
        <span className="ds-avatar__initials" aria-label={alt ?? initials}>
          {initials}
        </span>
      ) : null}

      {variant === 'shape' ? (
        <span className="ds-avatar__glyph" aria-hidden="true">
          {icon ?? <DefaultShapeGlyph />}
        </span>
      ) : null}
    </div>
  )
}
