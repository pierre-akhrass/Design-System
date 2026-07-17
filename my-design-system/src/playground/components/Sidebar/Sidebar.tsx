import { useState } from 'react'
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
}

const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
  </svg>
)

export const Sidebar = ({ items, activeId, publishedIds = [], onSelect }: SidebarProps) => {
  const [query, setQuery] = useState('')

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

  return (
    <aside className="pg-sidebar">
      {/* ── Search ───────────────────────────────────────────────────── */}
      <div className="pg-sidebar__search">
        <span className="pg-sidebar__search-icon" aria-hidden="true"><SearchIcon /></span>
        <input
          className="pg-sidebar__search-input"
          type="search"
          placeholder="Filter components…"
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
                  {item.label}
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

