import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { PublishManager } from './components/PublishManager/PublishManager'
import { registry } from './workspaces/registry'
import { loadPublishedTheme } from '../theme/publishedTheme'
import '../styles/global.scss'
import './Playground.scss'

export const Playground = () => {
  const [activeId, setActiveId] = useState(registry[0].id)
  const [managerOpen, setManagerOpen] = useState(false)
  const [publishedCount, setPublishedCount] = useState(0)
  const activeEntry = registry.find((w) => w.id === activeId) ?? registry[0]
  const WorkspaceComponent = activeEntry.component

  // Track how many components currently have published overrides.
  useEffect(() => {
    const sync = () => {
      const theme = loadPublishedTheme()
      setPublishedCount(theme ? Object.keys(theme.components).length : 0)
    }
    sync()
    window.addEventListener('ds-theme-published', sync as EventListener)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('ds-theme-published', sync as EventListener)
      window.removeEventListener('storage', sync)
    }
  }, [])

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
        <a
          className="pg__topbar-demo"
          href="/demo.html"
          target="_blank"
          rel="noreferrer"
          title="Open the demo frontend page in a new tab"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M14 4h6v6M20 4l-9 9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Demo page
        </a>
        <button
          className="pg__topbar-publish"
          onClick={() => setManagerOpen(true)}
          type="button"
          title="View and manage published overrides"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.9-.9.9-2.3 0-3.2a2.2 2.2 0 0 0-3 .2z" />
            <path d="M9 12a12 12 0 0 1 8-8c2 0 3 1 3 3a12 12 0 0 1-8 8l-3-3z" />
            <circle cx="15" cy="9" r="1.4" />
          </svg>
          Published
          {publishedCount > 0 && (
            <span className="pg__topbar-publish-count">{publishedCount}</span>
          )}
        </button>
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

      {/* ── Published overrides manager ──────────────────────────────── */}
      <PublishManager open={managerOpen} onClose={() => setManagerOpen(false)} />
    </div>
  )
}
