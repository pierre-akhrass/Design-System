import { useMemo, useState } from 'react'
import type { HTMLAttributes } from 'react'
/**
 * Pagination Component
 * @developer pierre-akhrass
 */

import './Pagination.scss'

export type PaginationTheme = 'light' | 'dark'
export type PaginationControlMode = 'icon-only' | 'label'
export type PaginationValue = string | number

export interface PaginationEntry {
  id: string
  label: PaginationValue
  kind?: 'page' | 'truncation'
}

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  theme?: PaginationTheme
  entries?: PaginationEntry[]
  activeValue?: PaginationValue
  controlMode?: PaginationControlMode
  previousLabel?: string
  nextLabel?: string
  showControls?: boolean
  canGoPrevious?: boolean
  canGoNext?: boolean
  onPrevious?: () => void
  onNext?: () => void
  onPageChange?: (value: PaginationValue) => void
}

const defaultEntries: PaginationEntry[] = [
  { id: '1', label: 1 },
  { id: '2', label: 2 },
  { id: '3', label: 3 },
  { id: '4', label: 4 },
  { id: '5', label: 5 },
  { id: 'ellipsis', label: '...', kind: 'truncation' },
  { id: '10', label: 10 },
]

const PrevIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
    <path d="M12.5 4.5L7 10l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const NextIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
    <path d="M7.5 4.5L13 10l-5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export const Pagination = ({
  theme = 'light',
  entries = defaultEntries,
  activeValue,
  controlMode = 'icon-only',
  previousLabel = 'Previous',
  nextLabel = 'Next',
  showControls = true,
  canGoPrevious = true,
  canGoNext = true,
  onPrevious,
  onNext,
  onPageChange,
  className,
  ...props
}: PaginationProps) => {
  const firstPageValue = useMemo(() => entries.find((entry) => entry.kind !== 'truncation')?.label, [entries])
  const [internalActive, setInternalActive] = useState<PaginationValue | undefined>(firstPageValue)

  const selectedValue = activeValue ?? internalActive

  const classes = ['ds-pagination', `ds-pagination--${theme}`, className].filter(Boolean).join(' ')

  const handlePageSelection = (entry: PaginationEntry) => {
    if (entry.kind === 'truncation') {
      return
    }

    if (activeValue === undefined) {
      setInternalActive(entry.label)
    }

    onPageChange?.(entry.label)
  }

  const iconOnlyControls = controlMode === 'icon-only'

  return (
    <nav className={classes} aria-label="Pagination" {...props}>
      {showControls && (
        <button
          type="button"
          className={[
            'ds-pagination__control',
            'ds-pagination__control--previous',
            iconOnlyControls ? 'is-icon-only' : 'is-label',
          ].join(' ')}
          onClick={onPrevious}
          disabled={!canGoPrevious}
          aria-label={previousLabel}
        >
          <span className="ds-pagination__icon">
            <PrevIcon />
          </span>
          {!iconOnlyControls && <span className="ds-pagination__control-label">{previousLabel}</span>}
        </button>
      )}

      <ul className="ds-pagination__list">
        {entries.map((entry) => {
          const isTruncation = entry.kind === 'truncation'
          const isActive = !isTruncation && entry.label === selectedValue

          return (
            <li className="ds-pagination__item" key={entry.id}>
              <button
                type="button"
                className={[
                  'ds-pagination__page',
                  isTruncation ? 'is-truncation' : null,
                  isActive ? 'is-active' : null,
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handlePageSelection(entry)}
                disabled={isTruncation}
                aria-current={isActive ? 'page' : undefined}
              >
                {entry.label}
              </button>
            </li>
          )
        })}
      </ul>

      {showControls && (
        <button
          type="button"
          className={[
            'ds-pagination__control',
            'ds-pagination__control--next',
            iconOnlyControls ? 'is-icon-only' : 'is-label',
          ].join(' ')}
          onClick={onNext}
          disabled={!canGoNext}
          aria-label={nextLabel}
        >
          {!iconOnlyControls && <span className="ds-pagination__control-label">{nextLabel}</span>}
          <span className="ds-pagination__icon">
            <NextIcon />
          </span>
        </button>
      )}
    </nav>
  )
}
