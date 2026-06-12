import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import './VirtualBlock.scss'
import { MagnifyingGlassIcon } from '../icons/MagnifyingGlassIcon'
import { MagnifyingGlassPlusIcon } from '../icons/MagnifyingGlassPlusIcon'
import { MagnifyingGlassMinusIcon } from '../icons/MagnifyingGlassMinusIcon'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'

// -----------------------------------------------------------------------------
// VirtualBlock
//
// Indoor / virtual map surface (e.g. Al-Futtaim mall map). Renders:
//   1. Top toolbar : brand logo · level selector · search · filters
//   2. Label strip : horizontal scrolling chips ("★ Label")
//   3. Map surface : virtual map background image
//   4. Store card  : bottom-left popup shown when a store is selected
//   5. Search list : results dropdown opened from the search input
//   6. Zoom rail   : bottom-right floating column (matches MapBlock spec)
//
// All paddings / radii / gaps are pulled from `tokens/variables.scss` via
// VirtualBlock.scss so consumers can retheme without editing component code.
// -----------------------------------------------------------------------------

export interface VirtualBlockLevel {
  /** Stable value (e.g. 'G', '1', '2') stored in state. */
  value: string
  /** Visible label (e.g. 'Level [G]'). */
  label: string
  /** Optional per-floor map image. When the user picks this level, this
   *  image overrides the top-level `mapImage` so each floor can have its
   *  own background. Admins typically import an asset from `src/assets`
   *  via Vite (e.g. `import groundMap from '../../assets/level-g.png'`)
   *  and pass the resolved URL here. */
  mapImage?: string
}

export interface VirtualBlockLabel {
  id: string
  label: ReactNode
  /** Custom icon. Defaults to a filled star (only shown when no icon is
   *  passed AND `iconPosition` resolves to 'left'). */
  icon?: ReactNode
  /** Which side of the label the icon sits on. Defaults to 'left'. */
  iconPosition?: 'left' | 'right'
  /** Show a stronger background to indicate the chip is active. */
  active?: boolean
  onClick?: (label: VirtualBlockLabel) => void
}

export interface VirtualBlockSearchResult {
  id: string
  /** Bold title row (e.g. 'Store name'). */
  storeName: ReactNode
  /** Smaller helper text under the title (e.g. 'Level information'). */
  levelInfo?: ReactNode
  selected?: boolean
  onClick?: (result: VirtualBlockSearchResult) => void
}

export interface VirtualBlockFilterOption {
  id: string
  /** Visible label rendered next to the checkbox. */
  label: ReactNode
  /** Whether the option is currently checked. */
  selected?: boolean
  /** Fired when the user clicks the option's row / checkbox. */
  onToggle?: () => void
}

export interface VirtualBlockStore {
  id: string
  /** Visible store name (e.g. 'ZARA Store'). */
  name: ReactNode
  /** Smaller helper line under the name (e.g. 'Ground Level'). */
  level?: ReactNode
  /** Square brand block on the left of the store card. Strings render as
   *  centered text on the dark background; pass a ReactNode (img / svg) to
   *  drop in a real logo. */
  logo?: ReactNode
  /** Horizontal position as a % within the map surface. When provided
   *  alongside `y`, the store renders as a pin and the store card (when
   *  active) auto-positions next to that pin. */
  x?: number
  /** Vertical position as a % within the map surface. */
  y?: number
  /** Tag ids this store belongs to. Matched against active label chips
   *  (any overlap means the store passes the tag filter). */
  tags?: string[]
  /** Stable level value this store sits on (e.g. 'G', '1', '2'). Must match
   *  one of `levels[].value`. When set, the store is only rendered on the
   *  map while that level is the active floor in the level dropdown. */
  levelValue?: string
  onLocation?: () => void
  onDirections?: () => void
}

export interface VirtualBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** Brand mark in the top-left of the toolbar. */
  brand?: ReactNode
  /** Available levels for the level selector. */
  levels?: VirtualBlockLevel[]
  /** Currently selected level value (controlled). */
  currentLevel?: string
  onLevelChange?: (value: string) => void
  searchPlaceholder?: string
  /** Controlled search input value. */
  searchValue?: string
  onSearchChange?: (value: string) => void
  /** Results to render in the dropdown. Pass `undefined` to hide it entirely;
   *  pass `[]` to show the dropdown's header with an empty body. */
  searchResults?: VirtualBlockSearchResult[]
  /** Optional header above the results list (e.g. 'Store name'). */
  searchResultsHeader?: ReactNode
  /** Force the search dropdown open regardless of focus state. */
  searchOpen?: boolean
  onFiltersClick?: () => void
  filtersLabel?: ReactNode
  /** When provided, the Filters button opens a checkbox panel built from this
   *  list instead of just firing `onFiltersClick`. Use `selected` + `onToggle`
   *  on each option to track multi-select state from the consumer. */
  filterOptions?: VirtualBlockFilterOption[]
  /** Force the filter panel open (controlled). */
  filterPanelOpen?: boolean
  /** Fired whenever the panel opens or closes. */
  onFilterPanelToggle?: (open: boolean) => void
  /** Optional header rendered above the checkbox list (e.g. 'Stores'). */
  filterPanelHeader?: ReactNode
  /** Chips rendered in the strip just below the toolbar. */
  labels?: VirtualBlockLabel[]
  /** Background map image. */
  mapImage?: string
  /** Full list of stores. Stores with `x`/`y` render as pins on the map;
   *  click a pin to select that store (fires `onStoreClick`). */
  stores?: VirtualBlockStore[]
  /** Fired when a pin is clicked. */
  onStoreClick?: (store: VirtualBlockStore) => void
  /** Currently selected store. Renders as a card anchored to the store's
   *  `x`/`y` (with viewport-aware flip) — or pinned to the bottom-left when
   *  the store has no coordinates. */
  activeStore?: VirtualBlockStore
  onCloseStore?: () => void
  onZoomIn?: () => void
  onZoomOut?: () => void
  /** Optional click handler for the middle search icon in the zoom rail. */
  onZoomSearch?: () => void
}

// -- Inline glyphs ------------------------------------------------------------
// Kept inline (not in /icons) since they're only used here.


const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6 .75 7.545 4.13l3.705.34-2.79 2.46.82 3.62L6 8.69 2.72 10.55l.82-3.62L.75 4.47l3.705-.34L6 .75Z" />
  </svg>
)

const LocationPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M8 14.5s5-4.2 5-8.2a5 5 0 1 0-10 0c0 4 5 8.2 5 8.2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="6.3" r="1.8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const DirectionsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3.5 12.5 12.5 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6 3.5h6.5V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const FiltersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 4.5h7M11.5 4.5h2M2.5 11.5h2M6.5 11.5h7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10.5" cy="4.5" r="1.4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5.5" cy="11.5" r="1.4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 2.5 9.5 9.5M9.5 2.5 2.5 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

// Arrow used in the scattered store card's top-right "open" button.
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Render the logo block: if the admin supplied an image URL/path (string
// that looks like a path or has an image extension) render an <img>; else
// render the ReactNode / text as-is on the dark background.
const renderScatterLogo = (logo: ReactNode) => {
  if (typeof logo === 'string') {
    const looksLikeImage =
      logo.startsWith('http') ||
      logo.startsWith('/') ||
      logo.startsWith('data:') ||
      /\.(png|jpe?g|svg|webp|gif|avif)(\?.*)?$/i.test(logo)
    if (looksLikeImage) {
      return <img src={logo} alt="" className="ds-virtual-block__scatter-logo-img" />
    }
  }
  return logo ?? 'LOGO'
}

// -----------------------------------------------------------------------------

export const VirtualBlock = ({
  brand,
  levels = [],
  currentLevel,
  onLevelChange,
  searchPlaceholder = 'Search',
  searchValue,
  onSearchChange,
  searchResults,
  searchResultsHeader = 'Store name',
  searchOpen,
  onFiltersClick,
  filtersLabel = 'Filters',
  filterOptions,
  filterPanelOpen,
  onFilterPanelToggle,
  filterPanelHeader,
  labels = [],
  mapImage,
  stores = [],
  onStoreClick,
  activeStore,
  onCloseStore,
  onZoomIn,
  onZoomOut,
  onZoomSearch,
  className,
  style,
  ...props
}: VirtualBlockProps) => {
  // ----- Uncontrolled fallbacks --------------------------------------------
  const [internalLevel, setInternalLevel] = useState<string>(
    currentLevel ?? levels[0]?.value ?? '',
  )
  const [internalSearch, setInternalSearch] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  // Filter panel — controlled if `filterPanelOpen` is passed, otherwise
  // toggled internally by the Filters button.
  const [internalFilterOpen, setInternalFilterOpen] = useState(false)
  const filterOpen = filterPanelOpen ?? internalFilterOpen
  const filtersWrapRef = useRef<HTMLDivElement | null>(null)

  // Close the panel when the user clicks outside it.
  useEffect(() => {
    if (!filterOpen) return
    const onDocMouseDown = (e: MouseEvent) => {
      if (
        filtersWrapRef.current &&
        !filtersWrapRef.current.contains(e.target as Node)
      ) {
        setInternalFilterOpen(false)
        onFilterPanelToggle?.(false)
      }
    }
    document.addEventListener('mousedown', onDocMouseDown)
    return () => document.removeEventListener('mousedown', onDocMouseDown)
  }, [filterOpen, onFilterPanelToggle])

  const toggleFilterPanel = () => {
    const next = !filterOpen
    setInternalFilterOpen(next)
    onFilterPanelToggle?.(next)
    onFiltersClick?.()
  }

  const level = currentLevel ?? internalLevel
  const search = searchValue ?? internalSearch

  // Open the dropdown as soon as the search input is focused (or when the
  // caller forces it with `searchOpen`) so users see the full store list on
  // click. The parent narrows the `searchResults` array live as the user
  // types, so typing e.g. "zara" leaves only that store in the dropdown.
  const dropdownOpen =
    (searchOpen ?? searchFocused) && searchResults != null

  // ----- Filtering ----------------------------------------------------------
  // Cards only appear when at least one filter is active:
  //   1. one or more label chips ("tags") are active, AND/OR
  //   2. one or more rows in the search dropdown are checked
  //      (each result's `selected` flag is consumer-owned).
  // When BOTH filter types are active, a store must satisfy ALL of them
  // (intersection) — e.g. tag=Fashion + checked=Zara,H&M shows only the
  // checked stores that also carry the Fashion tag.
  const activeTagIds = labels.filter((l) => l.active).map((l) => l.id)
  const checkedResultIds = (searchResults ?? [])
    .filter((r) => r.selected)
    .map((r) => r.id)
  const hasActiveTag = activeTagIds.length > 0
  const hasCheckedResult = checkedResultIds.length > 0
  const isFiltering = hasActiveTag || hasCheckedResult
  const visibleStores = stores.filter((s) => {
    if (s.x === undefined || s.y === undefined) return false
    if (!isFiltering) return false
    // Level guard: a store pinned to a specific floor only renders while
    // that floor is selected (e.g. Apple Store on Level 2 stays hidden
    // when the dropdown is on Level G).
    if (s.levelValue !== undefined && s.levelValue !== level) return false
    // Each active filter type must pass — intersection, not union.
    if (
      hasActiveTag &&
      !(s.tags ?? []).some((t) => activeTagIds.includes(t))
    ) {
      return false
    }
    if (hasCheckedResult && !checkedResultIds.includes(s.id)) {
      return false
    }
    return true
  })

  // ----- Handlers -----------------------------------------------------------
  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInternalLevel(e.target.value)
    onLevelChange?.(e.target.value)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalSearch(e.target.value)
    onSearchChange?.(e.target.value)
  }

  // ----- Render -------------------------------------------------------------
  const classes = ['ds-virtual-block', className].filter(Boolean).join(' ')

  // Each floor can carry its own `mapImage` (set on the level itself).
  // When present, it wins over the top-level `mapImage` so the background
  // swaps as the user picks a different level.
  const activeLevelMap = levels.find((l) => l.value === level)?.mapImage
  const effectiveMapImage = activeLevelMap ?? mapImage
  const mapStyle: CSSProperties = effectiveMapImage
    ? {
        backgroundImage: `url(${effectiveMapImage})`,
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    : undefined

  return (
    <div className={classes} style={style} {...props}>
      {/* ---------- Toolbar ---------- */}
      <div className="ds-virtual-block__toolbar">
        {brand && <div className="ds-virtual-block__brand">{brand}</div>}

        {levels.length > 0 && (
          <label className="ds-virtual-block__level">
            <select value={level} onChange={handleLevelChange} aria-label="Level">
              {levels.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon />
          </label>
        )}

        <div className="ds-virtual-block__search-wrap">
          <label className="ds-virtual-block__search">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={search}
              onChange={handleSearchChange}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => {
                // Delay so a click on a result still registers.
                window.setTimeout(() => setSearchFocused(false), 120)
              }}
            />
            <MagnifyingGlassIcon width={16} height={16} />
          </label>

          {dropdownOpen && (
            <div className="ds-virtual-block__search-results" role="listbox">
              {searchResultsHeader && (
                <div className="ds-virtual-block__search-results-header">
                  {searchResultsHeader}
                </div>
              )}
              {searchResults!.length === 0 ? (
                <div className="ds-virtual-block__search-empty">No results</div>
              ) : (
                searchResults!.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    role="option"
                    aria-selected={r.selected}
                    className="ds-virtual-block__search-result"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => r.onClick?.(r)}
                  >
                    <span
                      className={[
                        'ds-virtual-block__search-checkbox',
                        r.selected ? 'is-checked' : null,
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      aria-hidden="true"
                    />
                    <span className="ds-virtual-block__search-result-text">
                      <span className="ds-virtual-block__search-result-title">
                        {r.storeName}
                      </span>
                      {r.levelInfo && (
                        <span className="ds-virtual-block__search-result-sub">
                          {r.levelInfo}
                        </span>
                      )}
                    </span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        {(onFiltersClick || filterOptions) && (
          <div className="ds-virtual-block__filters-wrap" ref={filtersWrapRef}>
            <button
              type="button"
              className="ds-virtual-block__filters-btn"
              aria-expanded={filterOptions ? filterOpen : undefined}
              onClick={toggleFilterPanel}
            >
              <span>{filtersLabel}</span>
              <FiltersIcon />
            </button>

            {filterOptions && filterOpen && (
              <div className="ds-virtual-block__filters-panel" role="menu">
                {filterPanelHeader && (
                  <div className="ds-virtual-block__filters-panel-header">
                    {filterPanelHeader}
                  </div>
                )}
                {filterOptions.length === 0 ? (
                  <div className="ds-virtual-block__search-empty">No filters</div>
                ) : (
                  filterOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      role="menuitemcheckbox"
                      aria-checked={opt.selected ?? false}
                      className="ds-virtual-block__filter-option"
                      onClick={() => opt.onToggle?.()}
                    >
                      <span
                        className={[
                          'ds-virtual-block__search-checkbox',
                          opt.selected ? 'is-checked' : null,
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        aria-hidden="true"
                      />
                      <span className="ds-virtual-block__filter-option-label">
                        {opt.label}
                      </span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ---------- Label chips strip (acts as the tag filter) ----------
          Each chip's `active` flag is consumer-owned; clicking it fires
          `onClick(label)` so the parent can toggle it. The store list on
          the map below then filters by tag intersection. */}
      {labels.length > 0 && (
        <div
          className="ds-virtual-block__labels-strip"
          role="group"
          aria-label="Filter stores by tag"
        >
          {labels.map((l) => {
            const pos = l.iconPosition ?? 'left'
            // Default star only renders on the left; if the consumer asks
            // for a right-side icon, they must supply one themselves.
            const iconNode = l.icon ?? (pos === 'left' ? <StarIcon /> : null)
            return (
              <button
                key={l.id}
                type="button"
                className={[
                  'ds-virtual-block__label-chip',
                  l.active ? 'is-active' : null,
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-pressed={l.active ?? false}
                onClick={() => l.onClick?.(l)}
              >
                {pos === 'left' && iconNode}
                <span>{l.label}</span>
                {pos === 'right' && iconNode}
              </button>
            )
          })}
        </div>
      )}

      {/* ---------- Map surface + overlays ---------- */}
      <div className="ds-virtual-block__map" style={mapStyle}>
        {/* Scattered store cards — only rendered while the user is
            actively filtering (typing in the search box or with at least
            one tag chip enabled). Otherwise the map shows an empty-state
            hint nudging the user to pick a chip or type a query. */}
        {!isFiltering && (
          <div className="ds-virtual-block__map-hint" aria-live="polite">
            Pick a tag above or check a store in the search to see it on the map.
          </div>
        )}
        {visibleStores.length === 0 && isFiltering && (
          <div className="ds-virtual-block__map-hint" aria-live="polite">
            No stores match the current filters.
          </div>
        )}
        {visibleStores.map((s) => {
            const isActive = s.id === activeStore?.id
            const ariaLabel =
              typeof s.name === 'string' ? s.name : `store-${s.id}`
            const select = () => onStoreClick?.(s)
            return (
              <div
                key={s.id}
                role="button"
                tabIndex={0}
                className={[
                  'ds-virtual-block__scatter-card',
                  isActive ? 'is-active' : null,
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
                aria-label={ariaLabel}
                aria-pressed={isActive}
                onClick={select}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    select()
                  }
                }}
              >
                <div className="ds-virtual-block__scatter-logo">
                  {renderScatterLogo(s.logo)}
                </div>
                <div className="ds-virtual-block__scatter-body">
                  <div className="ds-virtual-block__scatter-head">
                    <div className="ds-virtual-block__scatter-text">
                      <div className="ds-virtual-block__scatter-title">
                        {s.name}
                      </div>
                      {s.level && (
                        <div className="ds-virtual-block__scatter-sub">
                          {s.level}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      className="ds-virtual-block__scatter-arrow"
                      aria-label={`Open ${
                        typeof s.name === 'string' ? s.name : 'store'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        select()
                      }}
                    >
                      <ArrowRightIcon />
                    </button>
                  </div>
                  <div className="ds-virtual-block__scatter-actions">
                    <button
                      type="button"
                      className="ds-virtual-block__scatter-action"
                      onClick={(e) => {
                        e.stopPropagation()
                        s.onLocation?.()
                      }}
                    >
                      <LocationPinIcon />
                      <span>Location</span>
                    </button>
                    <button
                      type="button"
                      className="ds-virtual-block__scatter-action"
                      onClick={(e) => {
                        e.stopPropagation()
                        s.onDirections?.()
                      }}
                    >
                      <DirectionsIcon />
                      <span>Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}

        {/* Full active store card. When the active store has x/y, it's
            already highlighted in place as a scattered card, so the
            floating bottom-left card is only shown for coord-less stores
            (e.g. selected from search). */}
        {activeStore && activeStore.x === undefined && activeStore.y === undefined && (() => {
          return (
            <div className="ds-virtual-block__store-card" role="dialog">
            <div className="ds-virtual-block__store-logo">
              {activeStore.logo ?? 'LOGO'}
            </div>
            <div className="ds-virtual-block__store-body">
              {onCloseStore && (
                <button
                  type="button"
                  className="ds-virtual-block__store-close"
                  aria-label="Close store details"
                  onClick={onCloseStore}
                >
                  <CloseIcon />
                </button>
              )}
              <div className="ds-virtual-block__store-title">{activeStore.name}</div>
              {activeStore.level && (
                <div className="ds-virtual-block__store-sub">{activeStore.level}</div>
              )}
              <div className="ds-virtual-block__store-actions">
                <button
                  type="button"
                  className="ds-virtual-block__store-action"
                  onClick={activeStore.onLocation}
                >
                  <LocationPinIcon />
                  <span>Location</span>
                </button>
                <button
                  type="button"
                  className="ds-virtual-block__store-action"
                  onClick={activeStore.onDirections}
                >
                  <DirectionsIcon />
                  <span>Directions</span>
                </button>
              </div>
            </div>
          </div>
          )
        })()}

        {/* Zoom rail (bottom-right) — same #0A111A spec as MapBlock. */}
        <div
          className="ds-virtual-block__zoom"
          role="group"
          aria-label="Map zoom controls"
        >
          <button
            type="button"
            className="ds-virtual-block__zoom-btn"
            aria-label="Zoom in"
            onClick={onZoomIn}
          >
            <MagnifyingGlassPlusIcon />
          </button>
          <div className="ds-virtual-block__zoom-divider" aria-hidden="true" />
          <button
            type="button"
            className="ds-virtual-block__zoom-btn"
            aria-label="Search"
            onClick={onZoomSearch}
          >
            <MagnifyingGlassIcon />
          </button>
          <div className="ds-virtual-block__zoom-divider" aria-hidden="true" />
          <button
            type="button"
            className="ds-virtual-block__zoom-btn"
            aria-label="Zoom out"
            onClick={onZoomOut}
          >
            <MagnifyingGlassMinusIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
