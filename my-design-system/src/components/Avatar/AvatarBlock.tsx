import type { HTMLAttributes, ReactNode } from 'react'

export interface AvatarBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** An Avatar component instance */
  avatar: ReactNode
  title: string
  description?: string
}

export const AvatarBlock = ({
  avatar,
  title,
  description,
  className,
  ...props
}: AvatarBlockProps) => {
  const classes = ['ds-avatar-block', className].filter(Boolean).join(' ')

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
