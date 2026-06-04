// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Map/Map.tsx
import {
  useMemo,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import './Map.scss'

export type MapMode = 'light' | 'dark'

export interface MapPin {
  id: string
  /** Horizontal position as a percentage (0–100) within the map container */
  x: number
  /** Vertical position as a percentage (0–100) within the map container */
  y: number
  label?: string
  description?: string
  country?: string
  project?: string
  thumbnail?: string
}

export interface MapFilterOption {
  label: string
  value: string
}

export interface MapProps extends HTMLAttributes<HTMLDivElement> {
  mode?: MapMode
  /** Background map image url */
  mapImage?: string
  /** Title shown in the floating header card */
  title?: ReactNode
  /** Description shown under the title */
  description?: ReactNode
  pins?: MapPin[]
  countries?: MapFilterOption[]
  projects?: MapFilterOption[]
  /** Show the bottom-left filter bar */
  showFilters?: boolean
  /** Show the bottom-right re-center button */
  showRecenter?: boolean
  onRecenter?: () => void
  onPinClick?: (pin: MapPin) => void
  onFilterChange?: (filters: {
    search: string
    country: string
    project: string
  }) => void
  /** Force-show a popup for a given pin id (controlled). If omitted, popup opens on pin click. */
  activePinId?: string
}

const PinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 128 128"
    fill="none"
    aria-hidden="true"
  >
    <g opacity="0.2" filter="url(#ds-map-pin-shadow)">
      <circle cx="64" cy="53.3334" r="28.4444" fill="currentColor" />
    </g>
    <circle cx="64" cy="53.3333" r="14.2222" fill="currentColor" />
    <defs>
      <filter
        id="ds-map-pin-shadow"
        x="27.5557"
        y="16.8889"
        width="76.8887"
        height="76.8889"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="2"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ReturnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M9 14 4 9l5-5M4 9h11a5 5 0 0 1 5 5v6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const Map = ({
  mode = 'light',
  mapImage,
  title = 'Our Global Reach',
  description,
  pins = [],
  countries = [],
  projects = [],
  showFilters = true,
  showRecenter = true,
  onRecenter,
  onPinClick,
  onFilterChange,
  activePinId,
  className,
  style,
  ...props
}: MapProps) => {
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('')
  const [project, setProject] = useState('')
  const [internalActive, setInternalActive] = useState<string | undefined>()

  const active = activePinId ?? internalActive
  const activePin = pins.find((p) => p.id === active)

  const visiblePins = useMemo(() => {
    const q = search.trim().toLowerCase()
    return pins.filter((p) => {
      if (country && p.country !== country) return false
      if (project && p.project !== project) return false
      if (q && !(p.label ?? '').toLowerCase().includes(q)) return false
      return true
    })
  }, [pins, search, country, project])

  const emit = (next: Partial<{ search: string; country: string; project: string }>) => {
    onFilterChange?.({
      search: next.search ?? search,
      country: next.country ?? country,
      project: next.project ?? project,
    })
  }

  const classes = ['ds-map', `ds-map--mode-${mode}`, className].filter(Boolean).join(' ')

  const containerStyle: CSSProperties = {
    ...(mapImage ? { backgroundImage: `url(${mapImage})` } : null),
    ...style,
  }

  return (
    <div className={classes} style={containerStyle} {...props}>
      {/* Header card block (top-left) */}
      {(title || description) && (
        <div className="ds-map__header">
          <div className="ds-map__header-title">{title}</div>
          {description && <div className="ds-map__header-desc">{description}</div>}
        </div>
      )}

      {/* Pins */}
      {visiblePins.map((pin) => (
        <button
          key={pin.id}
          type="button"
          className={`ds-map__pin${active === pin.id ? ' ds-map__pin--active' : ''}`}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          aria-label={pin.label ?? `pin-${pin.id}`}
          onClick={() => {
            setInternalActive(pin.id)
            onPinClick?.(pin)
          }}
        >
          <PinIcon />
        </button>
      ))}

      {/* Popup card next to active pin */}
      {activePin && (
        <div
          className="ds-map__popup"
          style={{ left: `${activePin.x}%`, top: `${activePin.y}%` }}
          role="dialog"
        >
          <button
            type="button"
            className="ds-map__popup-close"
            aria-label="Close"
            onClick={() => setInternalActive(undefined)}
          >
            <CloseIcon />
          </button>
          <div className="ds-map__popup-thumb">
            {activePin.thumbnail ? (
              <img src={activePin.thumbnail} alt="" />
            ) : (
              <span aria-hidden="true" />
            )}
          </div>
          <div className="ds-map__popup-body">
            <div className="ds-map__popup-title">{activePin.label ?? 'Title'}</div>
            <div className="ds-map__popup-desc">
              {activePin.description ?? 'Story text for whatever goes here.'}
            </div>
            <button type="button" className="ds-map__popup-cta">
              More Details
            </button>
          </div>
        </div>
      )}

      {/* Filter bar (bottom-left) */}
      {showFilters && (
        <div className="ds-map__filters" role="group" aria-label="Map filters">
          <label className="ds-map__search">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                emit({ search: e.target.value })
              }}
            />
          </label>

          <div className="ds-map__filters-row">
            <label className="ds-map__select">
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value)
                  emit({ country: e.target.value })
                }}
              >
                <option value="">Country</option>
                {countries.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon />
            </label>

            <label className="ds-map__select">
              <select
                value={project}
                onChange={(e) => {
                  setProject(e.target.value)
                  emit({ project: e.target.value })
                }}
              >
                <option value="">Project</option>
                {projects.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon />
            </label>
          </div>
        </div>
      )}

      {/* Re-center pill (bottom-right) */}
      {showRecenter && (
        <button type="button" className="ds-map__recenter" onClick={onRecenter}>
          <ReturnIcon />
          <span>Re-center</span>
          <kbd className="ds-map__recenter-kbd">⇧2</kbd>
        </button>
      )}
    </div>
  )
}
