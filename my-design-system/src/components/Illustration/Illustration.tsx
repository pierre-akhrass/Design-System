import type { HTMLAttributes } from 'react'
import './Illustration.scss'
import { illustrationMap } from './illustrations-data'

export type IllustrationName =
  | 'mechanical-01'
  | 'mechanical-02'
  | 'mechanical-03'
  | 'mechanical-04'
  | 'mechanical-05'
  | 'mechanical-06'
  | 'mechanical-07'
  | 'mechanical-08'
  | 'mechanical-09'
  | 'mechanical-10'
  | 'mechanical-11'
  | 'mechanical-12'
  | 'mechanical-13'
  | 'mechanical-14'
  | 'mechanical-15'
  | 'mechanical-16'
  | 'mechanical-17'
  | 'mechanical-18'
  | 'mechanical-19'
  | 'mechanical-20'

export type IllustrationSize = 'sm' | 'md' | 'lg' | 'xl'

export interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
  /** Which illustration to display (e.g. "mechanical-01") */
  name: IllustrationName
  /**
   * Named size preset or any custom pixel value.
   * sm=48 | md=80 | lg=104 | xl=160 | number=custom px
   */
  size?: IllustrationSize | number
  /**
   * Any valid CSS color. Applied via `color` — SVG strokes/fills
   * must use `currentColor` for this to take effect.
   * @example "#003e7e"
   * @example "var(--color-brand-vibrant-teal-500)"
   */
  color?: string
}

const sizeMap: Record<IllustrationSize, number> = {
  sm: 48,
  md: 80,
  lg: 104,
  xl: 160,
}

export const Illustration = ({
  name,
  size = 'lg',
  color,
  className,
  style,
  ...props
}: IllustrationProps) => {
  const px = typeof size === 'number' ? size : sizeMap[size]
  const SvgIcon = illustrationMap[name]
  const classes = ['ds-illustration', className].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{ width: px, height: px, ...(color ? { color } : {}), ...style }}
      role="img"
      aria-label={name.replace(/-/g, ' ')}
      {...props}
    >
      <SvgIcon
        className="ds-illustration__svg"
        aria-hidden="true"
        focusable="false"
      />
    </div>
  )
}
