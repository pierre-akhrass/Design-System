import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
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
  const componentRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null)

  useLayoutEffect(() => {
    const el = componentRef.current
    if (!el) return
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setDims({ w: Math.round(width), h: Math.round(height) })
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className={`pg-canvas pg-canvas--${bg}`}>
      {componentLabel && (
        <span className="pg-canvas__label" aria-hidden="true">
          {componentLabel}
        </span>
      )}
      <div className="pg-canvas__stage">
        <div ref={componentRef} className="pg-canvas__component">
          {children}
        </div>
      </div>
      {dims && dims.w > 0 && (
        <span className="pg-canvas__dims" aria-hidden="true">
          {dims.w} × {dims.h}
        </span>
      )}
    </div>
  )
}
