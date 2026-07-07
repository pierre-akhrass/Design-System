import type { ReactNode } from 'react'
import './ControlPanel.scss'

interface ControlPanelProps {
  children: ReactNode
}

export const ControlPanel = ({ children }: ControlPanelProps) => {
  return (
    <aside className="pg-ctrl-panel">
      <div className="pg-ctrl-panel__header">
        <svg
          className="pg-ctrl-panel__header-icon"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="14" y2="12" />
          <line x1="4" y1="18" x2="18" y2="18" />
        </svg>
        Props
      </div>
      <div className="pg-ctrl-panel__body">{children}</div>
    </aside>
  )
}
