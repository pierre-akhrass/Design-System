/**
 * Avatar Component
 * @developer Maher Al Rifai
 */

import type { HTMLAttributes, ReactNode } from 'react'
import './Avatar.scss'

export type AvatarType = 'initial' | 'image' | 'shape'
export type AvatarSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
export type AvatarTheme = 'light' | 'dark'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  type?: AvatarType
  size?: AvatarSize
  /** Single character only (e.g. "A"). Multiple characters will overflow. */
  initials?: string
  /** Image URL — used when type="image" */
  src?: string
  /** Alt text for the image — used when type="image" */
  alt?: string
  /** SVG or icon node — used when type="shape". Should use fill="currentColor". */
  icon?: ReactNode
  /** Color theme — light uses surface palette, dark uses background palette */
  theme?: AvatarTheme
}

export const Avatar = ({
  type = 'initial',
  size = 'medium',
  initials = 'A',
  src,
  alt = '',
  icon,
  theme,
  className,
  ...props
}: AvatarProps) => {
  const classes = ['ds-avatar', `ds-avatar--${size}`, `ds-avatar--${type}`, theme && `ds-avatar--${theme}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {type === 'initial' && (
        <span className="ds-avatar__initials">{initials}</span>
      )}
      {type === 'image' && (
        <img className="ds-avatar__image" src={src} alt={alt} />
      )}
      {type === 'shape' && (
        <span className="ds-avatar__shape">{icon}</span>
      )}
    </div>
  )
}
