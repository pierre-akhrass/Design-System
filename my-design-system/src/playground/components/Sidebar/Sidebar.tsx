import './Sidebar.scss'

export interface SidebarItem {
  id: string
  label: string
  group?: string
}

interface SidebarProps {
  items: SidebarItem[]
  activeId: string
  onSelect: (id: string) => void
}

export const Sidebar = ({ items, activeId, onSelect }: SidebarProps) => {
  // Group items by their `group` field (default group = 'Components')
  const grouped = items.reduce<Record<string, SidebarItem[]>>((acc, item) => {
    const key = item.group ?? 'Components'
    if (!acc[key]) acc[key] = []
    acc[key].push(item)
    return acc
  }, {})

  return (
    <aside className="pg-sidebar">
      {Object.entries(grouped).map(([group, groupItems]) => (
        <div key={group} className="pg-sidebar__group">
          <span className="pg-sidebar__group-label">{group}</span>
          <nav>
            {groupItems.map((item) => (
              <button
                key={item.id}
                className={[
                  'pg-sidebar__item',
                  item.id === activeId ? 'pg-sidebar__item--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => onSelect(item.id)}
              >
                <span className="pg-sidebar__item-dot" aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  )
}
