import type { HTMLAttributes, ReactNode } from 'react'
import './Tag.scss'

export type TagState = 'default' | 'hover'
export type TagTheme = 'light' | 'dark'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  state?: TagState
  theme?: TagTheme
}

export const Tag = ({
  label,
  iconStart,
  iconEnd,
  state = 'default',
  theme,
  className,
  ...props
}: TagProps) => {
  const classes = [
    'ds-tag',
    `ds-tag--${state}`,
    theme && `ds-tag--${theme}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {iconStart && <span className="ds-tag__icon ds-tag__icon--start">{iconStart}</span>}
      <span className="ds-tag__label">{label}</span>
      {iconEnd && <span className="ds-tag__icon ds-tag__icon--end">{iconEnd}</span>}
    </span>
  )
}
