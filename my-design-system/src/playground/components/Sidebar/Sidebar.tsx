import { useState, useRef, useEffect, type ReactNode } from 'react'
import './Sidebar.scss'

export interface SidebarItem {
  id: string
  label: string
  group?: string
}

interface SidebarProps {
  items: SidebarItem[]
  activeId: string
  publishedIds?: string[]
  onSelect: (id: string) => void
  collapsed?: boolean
  onCollapse?: () => void
}

const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
  </svg>
)

/** Wraps the matching substring in a highlight span */
function HighlightMatch({ label, query }: { label: string; query: string }): ReactNode {
  if (!query.trim()) return label
  const lower = label.toLowerCase()
  const idx = lower.indexOf(query.toLowerCase().trim())
  if (idx === -1) return label
  return (
    <>
      {label.slice(0, idx)}
      <mark className="pg-sidebar__match">{label.slice(idx, idx + query.trim().length)}</mark>
      {label.slice(idx + query.trim().length)}
    </>
  )
}

export const Sidebar = ({
  items,
  activeId,
  publishedIds = [],
  onSelect,
  collapsed = false,
  onCollapse,
}: SidebarProps) => {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // ⌘K / Ctrl+K → focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (collapsed) onCollapse?.()       // auto-expand if closed
        // Small delay so the expand animation runs before we focus
        requestAnimationFrame(() => {
          inputRef.current?.focus()
          inputRef.current?.select()
        })
      }
      // Escape in search → clear and blur
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        setQuery('')
        inputRef.current?.blur()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [collapsed, onCollapse])

  const filtered = query.trim()
    ? items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
    : items

  // Group filtered items by their `group` field (default = 'Components')
  const grouped = filtered.reduce<Record<string, SidebarItem[]>>((acc, item) => {
    const key = item.group ?? 'Components'
    if (!acc[key]) acc[key] = []
    acc[key].push(item)
    return acc
  }, {})

  // Collapsed: render a thin strip with an expand button only
  if (collapsed) {
    return (
      <aside className="pg-sidebar pg-sidebar--collapsed" aria-label="Component list (collapsed)">
        <button
          className="pg-sidebar__expand-btn"
          onClick={onCollapse}
          title="Expand sidebar (⌘K)"
          aria-label="Expand sidebar"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </aside>
    )
  }

  return (
    <aside className="pg-sidebar">
      {/* ── Search ───────────────────────────────────────────────────── */}
      <div className="pg-sidebar__search">
        {/* Collapse button */}
        <button
          className="pg-sidebar__collapse-btn"
          onClick={onCollapse}
          title="Collapse sidebar"
          aria-label="Collapse sidebar"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="pg-sidebar__search-icon" aria-hidden="true"><SearchIcon /></span>
        <input
          ref={inputRef}
          className="pg-sidebar__search-input"
          type="search"
          placeholder="Filter…  ⌘K"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter components"
        />
        {query && (
          <button
            className="pg-sidebar__search-clear"
            onClick={() => setQuery('')}
            aria-label="Clear filter"
          >×</button>
        )}
      </div>

      {/* ── Groups ───────────────────────────────────────────────────── */}
      {Object.entries(grouped).map(([group, groupItems]) => (
        <div key={group} className="pg-sidebar__group">
          <span className="pg-sidebar__group-label">
            {group}
            <span className="pg-sidebar__group-count">{groupItems.length}</span>
          </span>
          <nav>
            {groupItems.map((item) => {
              const isPublished = publishedIds.includes(item.id)
              return (
                <button
                  key={item.id}
                  className={[
                    'pg-sidebar__item',
                    item.id === activeId ? 'pg-sidebar__item--active' : '',
                    isPublished ? 'pg-sidebar__item--published' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => onSelect(item.id)}
                >
                  <HighlightMatch label={item.label} query={query} />
                  {isPublished && (
                    <span className="pg-sidebar__item-live" title="Has published overrides" aria-label="published" />
                  )}
                </button>
              )
            })}
          </nav>
        </div>
      ))}

      {/* ── Empty state ──────────────────────────────────────────────── */}
      {filtered.length === 0 && (
        <div className="pg-sidebar__empty">
          No components match <strong>"{query}"</strong>
        </div>
      )}
    </aside>
  )
}

