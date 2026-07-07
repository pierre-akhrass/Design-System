import type { ReactNode } from 'react'
import './Canvas.scss'

export type CanvasBg = 'auto' | 'light' | 'dark'

interface CanvasProps {
  children: ReactNode
  /** Background context: 'light' = white, 'dark' = slate navy, 'auto' = dark grid (follows prefers-color-scheme) */
  bg?: CanvasBg
  /** Label shown in the top-left corner of the canvas */
  componentLabel?: string
}

export const Canvas = ({ children, bg = 'auto', componentLabel }: CanvasProps) => {
  return (
    <div className={`pg-canvas pg-canvas--${bg}`}>
      {componentLabel && (
        <span className="pg-canvas__label" aria-hidden="true">
          {componentLabel}
        </span>
      )}
      <div className="pg-canvas__stage">{children}</div>
    </div>
  )
}
