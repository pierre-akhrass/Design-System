import { useState } from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { registry } from './workspaces/registry'
import './Playground.scss'

export const Playground = () => {
  const [activeId, setActiveId] = useState(registry[0].id)
  const activeEntry = registry.find((w) => w.id === activeId) ?? registry[0]
  const WorkspaceComponent = activeEntry.component

  return (
    <div className="pg">
      {/* ── Top bar ──────────────────────────────────────────────────── */}
      <header className="pg__topbar">
        <span className="pg__topbar-logo" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </span>
        <h1 className="pg__topbar-title">
          Design System <span className="pg__topbar-accent">Playground</span>
        </h1>
        <span className="pg__topbar-badge">v0.1</span>
      </header>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="pg__body">
        <Sidebar
          items={registry.map((w) => ({ id: w.id, label: w.label, group: w.group }))}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <div className="pg__workspace">
          <WorkspaceComponent />
        </div>
      </div>
    </div>
  )
}
