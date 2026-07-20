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
  const [publishedIds, setPublishedIds] = useState<string[]>([])
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try { return localStorage.getItem('pg-theme') === 'dark' } catch { return false }
  })
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const activeEntry = registry.find((w) => w.id === activeId) ?? registry[0]
  const WorkspaceComponent = activeEntry.component

  // Persist dark mode preference
  useEffect(() => {
    try { localStorage.setItem('pg-theme', darkMode ? 'dark' : 'light') } catch {}
  }, [darkMode])

  // Update browser tab title when active component changes
  useEffect(() => {
    document.title = `${activeEntry.label} – DS Playground`
  }, [activeEntry.label])

  // Track which component ids currently have published overrides.
  useEffect(() => {
    const sync = () => {
      const theme = loadPublishedTheme()
      setPublishedIds(theme ? Object.keys(theme.components) : [])
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
    <div className={`pg${darkMode ? ' pg--dark' : ''}`}>
      {/* ── Top bar ──────────────────────────────────────────────────── */}
      <header className="pg__topbar">
        <span className="pg__topbar-logo" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </span>
        <h1 className="pg__topbar-title">
          Design System <span className="pg__topbar-accent">Playground</span>
        </h1>

        <span className="pg__topbar-sep" aria-hidden="true" />

        {/* Active component breadcrumb */}
        <span className="pg__topbar-component">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{opacity:0.4}}>
            <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {activeEntry.label}
        </span>

        <a
          className="pg__topbar-demo"
          href="/demo.html"
          target="_blank"
          rel="noreferrer"
          title="Open the demo frontend page in a new tab"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
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
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.9-.9.9-2.3 0-3.2a2.2 2.2 0 0 0-3 .2z" />
            <path d="M9 12a12 12 0 0 1 8-8c2 0 3 1 3 3a12 12 0 0 1-8 8l-3-3z" />
            <circle cx="15" cy="9" r="1.4" />
          </svg>
          Published
          {publishedIds.length > 0 && (
            <span className="pg__topbar-publish-count">
              {publishedIds.length} / {registry.length}
            </span>
          )}
        </button>
        <button
          className="pg__topbar-theme-toggle"
          onClick={() => setDarkMode((d) => !d)}
          type="button"
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            /* Sun icon */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
            </svg>
          ) : (
            /* Moon icon */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <span className="pg__topbar-badge">v0.1</span>
      </header>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="pg__body">
        <Sidebar
          items={registry.map((w) => ({ id: w.id, label: w.label, group: w.group }))}
          activeId={activeId}
          publishedIds={publishedIds}
          onSelect={setActiveId}
          collapsed={sidebarCollapsed}
          onCollapse={() => setSidebarCollapsed(c => !c)}
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
