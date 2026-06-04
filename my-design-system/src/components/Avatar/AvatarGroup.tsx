import type { HTMLAttributes, ReactNode } from 'react'

export type AvatarGroupSpacing = 'overlap' | 'spaced'

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: AvatarGroupSpacing
  /** Number shown in the overflow badge */
  overflowCount?: number
  /** Whether to render the overflow badge */
  showOverflow?: boolean
  children: ReactNode
}

export const AvatarGroup = ({
  spacing = 'overlap',
  overflowCount,
  showOverflow = false,
  children,
  className,
  ...props
}: AvatarGroupProps) => {
  const classes = ['ds-avatar-group', `ds-avatar-group--${spacing}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      <div className="ds-avatar-group__avatars">{children}</div>
      {showOverflow && overflowCount !== undefined && (
        <div className="ds-avatar-group__overflow" aria-hidden="true">
          +{overflowCount}
        </div>
      )}
    </div>
  )
}
