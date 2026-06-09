import type { HTMLAttributes, ReactNode } from 'react'
import type { AvatarTheme } from './Avatar'

export interface AvatarBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** An Avatar component instance */
  avatar: ReactNode
  title: string
  description?: string
  /** Color theme */
  theme?: AvatarTheme
}

export const AvatarBlock = ({
  avatar,
  title,
  description,
  theme,
  className,
  ...props
}: AvatarBlockProps) => {
  const classes = ['ds-avatar-block', theme && `ds-avatar-block--${theme}`, className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {avatar}
      <div className="ds-avatar-block__info">
        <span className="ds-avatar-block__title">{title}</span>
        {description && (
          <span className="ds-avatar-block__description">{description}</span>
        )}
      </div>
    </div>
  )
}
