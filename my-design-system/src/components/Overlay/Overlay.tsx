// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Overlay/Overlay.tsx
import type { HTMLAttributes, ReactNode } from 'react'
import './Overlay.scss'

export type OverlayMode = 'light' | 'dark'
export type OverlayOpacity = 5 | 10 | 25 | 50 | 75 | 90 | 100

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  mode?: OverlayMode
  opacity?: OverlayOpacity
  children?: ReactNode
}

export const Overlay = ({
  mode = 'light',
  opacity = 5,
  children,
  className,
  ...props
}: OverlayProps) => {
  const classes = [
    'ds-overlay',
    `ds-overlay--mode-${mode}`,
    `ds-overlay--opacity-${opacity}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
