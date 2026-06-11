import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
/**
 * Tag Component
 * @developer Maher Al Rifai
 */

import './Tag.scss'

export type TagState = 'default' | 'hover'
export type TagTheme = 'light' | 'dark'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  state?: TagState
  theme?: TagTheme
  /** Override the background color */
  bgColor?: string
  /** Override the text (and icon) color */
  textColor?: string
}

export const Tag = ({
  label,
  iconStart,
  iconEnd,
  state = 'default',
  theme,
  bgColor,
  textColor,
  className,
  style,
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

  const inlineStyle: CSSProperties = {
    ...(bgColor    && { backgroundColor: bgColor }),
    ...(textColor  && { color: textColor }),
    ...style,
  }

  return (
    <span className={classes} style={inlineStyle} {...props}>
      {iconStart && <span className="ds-tag__icon ds-tag__icon--start">{iconStart}</span>}
      <span className="ds-tag__label">{label}</span>
      {iconEnd && <span className="ds-tag__icon ds-tag__icon--end">{iconEnd}</span>}
    </span>
  )
}
