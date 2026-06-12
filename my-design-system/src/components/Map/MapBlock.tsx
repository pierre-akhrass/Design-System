// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Map/MapBlock.tsx
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type WheelEvent as ReactWheelEvent,
} from 'react'
import './MapBlock.scss'
import { MagnifyingGlassPlusIcon } from '../icons/MagnifyingGlassPlusIcon'
import { MagnifyingGlassMinusIcon } from '../icons/MagnifyingGlassMinusIcon'
import { MagnifyingGlassIcon } from '../icons/MagnifyingGlassIcon'

// -----------------------------------------------------------------------------
// MapBlock
//
// A hero-style city / area map surface used to introduce a destination with:
//   - a small uppercase category label,
//   - a large display title,
//   - a background map image with positioned location labels (pill + optional
//     sub-line + connector line dropping to the marked point), and
//   - a floating right-side control rail (zoom in / search / zoom out).
//
// Interactions (Google-Maps-style):
//   - Wheel               : zoom in / out centered on the cursor
//   - Pinch / +/- buttons : zoom in / out centered on the surface
//   - Drag                : pan
//   - Double click        : zoom in centered on the click
//   - Search button       : opens a search bar that filters labels (case-insensitive)
//
// Labels use percentage coordinates and live *inside* the transformed surface,
// so they stay anchored to their map points at any zoom / pan offset.
// -----------------------------------------------------------------------------

export type MapBlockMode = 'light' | 'dark'

/**
 * A single location pill rendered on top of the map.
 */
export interface MapBlockLabel {
  id: string
  /** Horizontal position as a percentage (0–100) within the map container. */
  x: number
  /** Vertical position as a percentage (0–100) within the map container. */
  y: number
  label: ReactNode
  subLabel?: ReactNode
  hideConnector?: boolean
  connectorLength?: number
  onClick?: (label: MapBlockLabel) => void
  /**
   * Optional plain-text searchable string. When omitted, the search overlay
   * falls back to coercing `label`/`subLabel` to strings. Set this when your
   * `label` is a rich ReactNode and you still want it to be searchable.
   */
  searchText?: string
}

/**
 * One of the icons rendered inside the floating right-side control rail.
 * Defaults to the three controls shown in the screenshot (zoom-in / search /
 * zoom-out) when `controls` is omitted.
 */
export interface MapBlockControl {
  id: string
  ariaLabel: string
  icon: ReactNode
  onClick?: () => void
  dividerBelow?: boolean
}

export interface MapBlockProps extends HTMLAttributes<HTMLDivElement> {
  mode?: MapBlockMode
  mapImage?: string
  category?: ReactNode
  title?: ReactNode
  labels?: MapBlockLabel[]
  /**
   * Right-side floating controls. Omit to render the default rail
   * (zoom-in / search / zoom-out). Pass an empty array `[]` to hide it.
   */
  controls?: MapBlockControl[]
  /** Min zoom (default 1 — i.e. the natural "fit" view). */
  minZoom?: number
  /** Max zoom (default 4). */
  maxZoom?: number
  /** Multiplier applied per zoom button / double-click step (default 1.6). */
  zoomStep?: number
  /** Force-highlight a label by id. */
  activeLabelId?: string
  /** Called whenever zoom / pan changes (useful for analytics or controlled mode). */
  onViewChange?: (view: { zoom: number; tx: number; ty: number }) => void
}

// ----- Default control rail icons --------------------------------------------
// The default rail re-uses the shared icon components so the same glyphs
// (and design-spec stroke colors: zoom buttons #ECECEC, search #9D9D9D) can
// be consumed by other surfaces without duplicating SVG markup.
const ZoomInIcon = () => <MagnifyingGlassPlusIcon />
const SearchIcon = () => <MagnifyingGlassIcon />
const ZoomOutIcon = () => <MagnifyingGlassMinusIcon />
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// ----- Helpers ----------------------------------------------------------------
const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

/**
 * Compute the translate values needed so that, after applying `nextZoom`,
 * the world-space point currently under (`originX`, `originY`) (relative to
 * the viewport) stays under that same screen point. Same logic Google Maps
 * uses for "zoom toward cursor".
 *
 *   prevWorldX = (originX - tx) / prevZoom
 *   newWorldX  = (originX - newTx) / nextZoom   (we want newWorldX === prevWorldX)
 *   => newTx   = originX - prevWorldX * nextZoom
 */
const zoomTowardPoint = (
  prevZoom: number,
  nextZoom: number,
  tx: number,
  ty: number,
  originX: number,
  originY: number,
): { tx: number; ty: number } => {
  const worldX = (originX - tx) / prevZoom
  const worldY = (originY - ty) / prevZoom
  return {
    tx: originX - worldX * nextZoom,
    ty: originY - worldY * nextZoom,
  }
}

const toSearchText = (label: MapBlockLabel): string => {
  if (label.searchText) return label.searchText
  const parts: string[] = []
  if (typeof label.label === 'string') parts.push(label.label)
  if (typeof label.subLabel === 'string') parts.push(label.subLabel)
  return parts.join(' ').toLowerCase()
}

export const MapBlock = ({
  mode = 'dark',
  mapImage,
  category = 'EXPLORE THE CITY',
  title = 'Dubai Festival City',
  labels = [],
  controls,
  minZoom = 1,
  maxZoom = 4,
  zoomStep = 1.6,
  activeLabelId,
  onViewChange,
  className,
  style,
  ...props
}: MapBlockProps) => {
  // ----- Active label (uncontrolled fallback) -------------------------------
  const [internalActive, setInternalActive] = useState<string | undefined>()
  const active = activeLabelId ?? internalActive

  // ----- View transform (zoom + pan) ----------------------------------------
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [view, setView] = useState({ zoom: 1, tx: 0, ty: 0 })
  const viewRef = useRef(view)
  viewRef.current = view

  // Fire `onViewChange` whenever the view actually changes (post-commit).
  useEffect(() => {
    onViewChange?.(view)
  }, [view, onViewChange])

  /** Apply a zoom delta centered on a viewport-relative (originX, originY) point. */
  const applyZoomAtPoint = useCallback(
    (factor: number, originX: number, originY: number) => {
      setView((prev) => {
        const nextZoom = clamp(prev.zoom * factor, minZoom, maxZoom)
        if (nextZoom === prev.zoom) return prev
        const { tx, ty } = zoomTowardPoint(
          prev.zoom,
          nextZoom,
          prev.tx,
          prev.ty,
          originX,
          originY,
        )
        return { zoom: nextZoom, tx, ty }
      })
    },
    [minZoom, maxZoom],
  )

  /** Apply a zoom delta centered on the viewport's center. */
  const applyZoomAtCenter = useCallback(
    (factor: number) => {
      const el = viewportRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      applyZoomAtPoint(factor, rect.width / 2, rect.height / 2)
    },
    [applyZoomAtPoint],
  )

  const zoomIn = useCallback(() => applyZoomAtCenter(zoomStep), [applyZoomAtCenter, zoomStep])
  const zoomOut = useCallback(() => applyZoomAtCenter(1 / zoomStep), [applyZoomAtCenter, zoomStep])

  // ----- Wheel zoom ---------------------------------------------------------
  const onWheel = useCallback(
    (e: ReactWheelEvent<HTMLDivElement>) => {
      const el = viewportRef.current
      if (!el) return
      e.preventDefault()
      const rect = el.getBoundingClientRect()
      const originX = e.clientX - rect.left
      const originY = e.clientY - rect.top
      // Wheel deltaY > 0 → user scrolled down → zoom out.
      const factor = e.deltaY < 0 ? zoomStep : 1 / zoomStep
      applyZoomAtPoint(factor, originX, originY)
    },
    [applyZoomAtPoint, zoomStep],
  )

  // ----- Pointer drag (pan) -------------------------------------------------
  const dragRef = useRef<{
    pointerId: number
    startX: number
    startY: number
    startTx: number
    startTy: number
    moved: boolean
  } | null>(null)
  const [dragging, setDragging] = useState(false)

  const onPointerDown = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    // Only primary button / touch / pen.
    if (e.button !== 0) return
    // Don't start panning when the press lands on a label / control — they
    // handle their own click.
    const target = e.target as HTMLElement
    if (
      target.closest('.ds-map-block__label') ||
      target.closest('.ds-map-block__controls') ||
      target.closest('.ds-map-block__search') ||
      target.closest('.ds-map-block__header')
    ) {
      return
    }
    const el = viewportRef.current
    if (!el) return
    el.setPointerCapture(e.pointerId)
    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      startTx: viewRef.current.tx,
      startTy: viewRef.current.ty,
      moved: false,
    }
    setDragging(true)
  }, [])

  const onPointerMove = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    const d = dragRef.current
    if (!d || d.pointerId !== e.pointerId) return
    const dx = e.clientX - d.startX
    const dy = e.clientY - d.startY
    if (!d.moved && Math.hypot(dx, dy) > 3) d.moved = true
    setView((prev) => ({ ...prev, tx: d.startTx + dx, ty: d.startTy + dy }))
  }, [])

  const endPointer = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    const d = dragRef.current
    if (!d || d.pointerId !== e.pointerId) return
    const el = viewportRef.current
    if (el && el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId)
    }
    dragRef.current = null
    setDragging(false)
  }, [])

  // ----- Double-click zoom-in ----------------------------------------------
  const onDoubleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = viewportRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      applyZoomAtPoint(zoomStep, e.clientX - rect.left, e.clientY - rect.top)
    },
    [applyZoomAtPoint, zoomStep],
  )

  // ----- Search overlay -----------------------------------------------------
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const toggleSearch = useCallback(() => setSearchOpen((v) => !v), [])

  // Memoised lowercased search index so typing stays cheap on large lists.
  const searchIndex = useMemo(
    () => labels.map((l) => ({ id: l.id, text: toSearchText(l) })),
    [labels],
  )

  // Which label ids match the current query (or *all* when query is empty).
  const matchingIds = useMemo<Set<string> | null>(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null
    return new Set(searchIndex.filter((s) => s.text.includes(q)).map((s) => s.id))
  }, [searchIndex, query])

  // ----- Resolve right-side controls ----------------------------------------
  // Default rail uses our internal zoom/search handlers. Pass `controls`
  // explicitly to override.
  const resolvedControls: MapBlockControl[] =
    controls ?? [
      { id: 'zoom-in',  ariaLabel: 'Zoom in',  icon: <ZoomInIcon />,  onClick: zoomIn,        dividerBelow: true },
      { id: 'search',   ariaLabel: 'Search',   icon: <SearchIcon />,  onClick: toggleSearch,  dividerBelow: true },
      { id: 'zoom-out', ariaLabel: 'Zoom out', icon: <ZoomOutIcon />, onClick: zoomOut },
    ]

  // ----- Render -------------------------------------------------------------
  const classes = [
    'ds-map-block',
    `ds-map-block--mode-${mode}`,
    dragging ? 'ds-map-block--dragging' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const surfaceStyle: CSSProperties = {
    ...(mapImage
      ? {
          backgroundImage: `url(${mapImage})`,
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }
      : null),
    transform: `translate3d(${view.tx}px, ${view.ty}px, 0) scale(${view.zoom})`,
    transformOrigin: '0 0',
    // Disable transitions while actively dragging or wheel-zooming so the
    // view tracks 1:1; allow a tiny ease for button-driven zoom.
    transition: dragging ? 'none' : 'transform 120ms ease-out',
  }

  return (
    <div
      ref={viewportRef}
      className={classes}
      style={style}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endPointer}
      onPointerCancel={endPointer}
      onDoubleClick={onDoubleClick}
      {...props}
    >
      {/* Transformed surface: holds both the map image background and the
         labels, so labels stay anchored to map points at any zoom / pan. */}
      <div className="ds-map-block__surface" style={surfaceStyle}>
        {labels.map((label) => {
          const isActive = active === label.id
          const isHidden = matchingIds != null && !matchingIds.has(label.id)
          const labelClasses = [
            'ds-map-block__label',
            isActive ? 'ds-map-block__label--active' : null,
            isHidden ? 'ds-map-block__label--hidden' : null,
          ]
            .filter(Boolean)
            .join(' ')
          return (
            <button
              key={label.id}
              type="button"
              className={labelClasses}
              style={{
                left: `${label.x}%`,
                top: `${label.y}%`,
                // Counter-scale so the pill text stays the same screen size
                // regardless of how far the user has zoomed in.
                ['--ds-map-zoom' as string]: view.zoom,
              }}
              aria-pressed={isActive}
              aria-hidden={isHidden ? true : undefined}
              tabIndex={isHidden ? -1 : 0}
              onClick={(e) => {
                // Suppress click that bubbled up from a drag-then-release.
                if (dragRef.current?.moved) {
                  e.preventDefault()
                  return
                }
                setInternalActive(label.id)
                label.onClick?.(label)
              }}
            >
              {/* Render order: sub (hint) → pill (main label) → connector (drops to marker).
                  With flex-column this stacks visually as:
                    11 min drive   ← sub-label hint above
                    [ Zabeel Park] ← main pill
                          │        ← connector dropping to anchor (x, y) */}
              {label.subLabel && (
                <span className="ds-map-block__label-sub">{label.subLabel}</span>
              )}
              <span className="ds-map-block__label-pill">{label.label}</span>
              {!label.hideConnector && (
                <span
                  aria-hidden="true"
                  className="ds-map-block__label-connector"
                  style={
                    label.connectorLength
                      ? { height: `${label.connectorLength}px` }
                      : undefined
                  }
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Header (top-left): category eyebrow + large title. Outside the
         transformed surface so it stays pinned to the viewport. */}
      {(category || title) && (
        <div className="ds-map-block__header">
          {category && <div className="ds-map-block__category">{category}</div>}
          {title && <h2 className="ds-map-block__title">{title}</h2>}
        </div>
      )}

      {/* Search overlay (pinned to the viewport). Filters labels live. */}
      {searchOpen && (
        <div
          className="ds-map-block__search"
          role="search"
          // Stop drag from starting when the user grabs the input.
          onPointerDown={(e) => e.stopPropagation()}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Search places…"
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setQuery('')
                setSearchOpen(false)
              }
            }}
          />
          <button
            type="button"
            className="ds-map-block__search-close"
            aria-label="Close search"
            onClick={() => {
              setQuery('')
              setSearchOpen(false)
            }}
          >
            <CloseIcon />
          </button>
        </div>
      )}

      {/* Right-side floating control rail. Outside the transformed surface
         so the icons stay the same size and position regardless of zoom. */}
      {resolvedControls.length > 0 && (
        <div
          className="ds-map-block__controls"
          role="group"
          aria-label="Map controls"
          onPointerDown={(e) => e.stopPropagation()}
        >
          {resolvedControls.map((c) => (
            <div key={c.id} className="ds-map-block__control-group">
              <button
                type="button"
                className="ds-map-block__control"
                aria-label={c.ariaLabel}
                aria-pressed={c.id === 'search' ? searchOpen : undefined}
                disabled={
                  (c.id === 'zoom-in' && view.zoom >= maxZoom) ||
                  (c.id === 'zoom-out' && view.zoom <= minZoom)
                }
                onClick={c.onClick}
              >
                {c.icon}
              </button>
              {c.dividerBelow && (
                <div className="ds-map-block__control-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
