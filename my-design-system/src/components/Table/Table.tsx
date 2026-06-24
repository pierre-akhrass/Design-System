import {
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
  useId,
} from 'react'
import './Table.scss'

// ─── Types ────────────────────────────────────────────────────────────────────

export type TableTheme = 'light' | 'dark'
export type TableSortDirection = 'asc' | 'desc' | null
export type TableCellType = 'text' | 'number' | 'component' | 'select'
export type TableResponsiveMode = 'stack' | 'scroll'

export interface TableColumn<T extends Record<string, unknown> = Record<string, unknown>> {
  key: string
  label: ReactNode
  sortable?: boolean
  width?: string | number
  align?: 'left' | 'center' | 'right'
  type?: TableCellType
  prefix?: string
  render?: (value: unknown, row: T, rowIndex: number) => ReactNode
}

export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  theme?: TableTheme
  columns?: TableColumn<T>[]
  data?: T[]
  rowKey?: keyof T | ((row: T, index: number) => string)
  title?: ReactNode
  showSearch?: boolean
  showToolbar?: boolean
  showPagination?: boolean
  striped?: boolean
  selectable?: boolean
  selectedRowKeys?: Set<string>
  onRowSelect?: (key: string, selected: boolean) => void
  onSelectAll?: (selected: boolean) => void
  searchValue?: string
  searchPlaceholder?: string
  onSearch?: (value: string) => void
  sortKey?: string
  sortDirection?: TableSortDirection
  onSort?: (key: string, direction: TableSortDirection) => void
  currentPage?: number
  pageSize?: number
  totalItems?: number
  onPageChange?: (page: number) => void
  emptyMessage?: ReactNode
  loading?: boolean
  tableClassName?: string
  responsiveMode?: TableResponsiveMode
}

// ─── Sub-component props ──────────────────────────────────────────────────────

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  type?: TableCellType
  align?: 'left' | 'center' | 'right'
  prefix?: string
  dataLabel?: string
  children?: ReactNode
}

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean
  sortDirection?: TableSortDirection
  onSort?: () => void
  align?: 'left' | 'center' | 'right'
  children?: ReactNode
}

export interface TableRowProps extends Omit<HTMLAttributes<HTMLTableRowElement>, 'onSelect'> {
  state?: 'default' | 'alternate' | 'hover' | 'selected'
  selectable?: boolean
  selected?: boolean
  onSelect?: (checked: boolean) => void
  children?: ReactNode
}

export interface TablePaginationProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number
  pageSize: number
  totalItems: number
  onPageChange: (page: number) => void
  theme?: TableTheme
}

export interface TableToolbarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  showSearch?: boolean
  searchValue?: string
  searchPlaceholder?: string
  onSearch?: (value: string) => void
  actions?: ReactNode
  theme?: TableTheme
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function getRowKey<T extends Record<string, unknown>>(
  row: T,
  index: number,
  rowKey?: keyof T | ((row: T, index: number) => string),
): string {
  if (!rowKey) return String(index)
  if (typeof rowKey === 'function') return rowKey(row, index)
  return String(row[rowKey] ?? index)
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg className="ds-table__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function SortIcon({ direction }: { direction: TableSortDirection }) {
  return (
    <svg className="ds-table__sort-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {direction === 'asc' ? (
        <path d="M6 6L8 4L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : direction === 'desc' ? (
        <path d="M6 10L8 12L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <>
          <path d="M6 6L8 4L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
          <path d="M6 10L8 12L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
        </>
      )}
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg className="ds-table__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg className="ds-table__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="ds-table__check-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8L6.5 11L12.5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── TableCheckbox (row selection) ────────────────────────────────────────────

interface TableCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  indeterminate?: boolean
}

function TableCheckbox({ checked, indeterminate, onChange, disabled, className, ...props }: TableCheckboxProps) {
  return (
    <label className={cx('ds-table-checkbox', checked && 'ds-table-checkbox--checked', disabled && 'ds-table-checkbox--disabled', className)}>
      <input
        type="checkbox"
        className="ds-table-checkbox__native"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="ds-table-checkbox__box" aria-hidden="true">
        {indeterminate ? <span className="ds-table-checkbox__dash" /> : checked ? <CheckIcon /> : null}
      </span>
    </label>
  )
}

// ─── TableToolbar ─────────────────────────────────────────────────────────────

export const TableToolbar = ({
  title,
  showSearch = true,
  searchValue = '',
  searchPlaceholder = 'Search',
  onSearch,
  actions,
  className,
  ...props
}: TableToolbarProps) => {
  const searchId = useId()
  return (
    <div className={cx('ds-table__toolbar', className)} {...props}>
      {title && <h2 className="ds-table__title">{title}</h2>}
      <div className="ds-table__toolbar-actions">
        {showSearch && (
          <label htmlFor={searchId} className="ds-table__search">
            <input
              id={searchId}
              type="search"
              className="ds-table__search-input"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearch?.(e.target.value)}
              aria-label={searchPlaceholder}
            />
            <span className="ds-table__search-icon">
              <SearchIcon />
            </span>
          </label>
        )}
        {actions && <div className="ds-table__toolbar-extra">{actions}</div>}
      </div>
    </div>
  )
}

// ─── TableHeaderCell ──────────────────────────────────────────────────────────

export const TableHeaderCell = ({
  children,
  sortable = false,
  sortDirection,
  onSort,
  align = 'left',
  className,
  ...props
}: TableHeaderCellProps) => {
  return (
    <th
      className={cx(
        'ds-table__cell',
        'ds-table__cell--header',
        `ds-table__cell--align-${align}`,
        sortable && 'ds-table__cell--sortable',
        className,
      )}
      aria-sort={sortDirection === 'asc' ? 'ascending' : sortDirection === 'desc' ? 'descending' : undefined}
      {...props}
    >
      <button
        type="button"
        className="ds-table__header-btn"
        onClick={sortable ? onSort : undefined}
        disabled={!sortable}
        aria-label={sortable ? `Sort by ${typeof children === 'string' ? children : 'column'}` : undefined}
      >
        <span className="ds-table__cell-text">{children}</span>
        {sortable && <SortIcon direction={sortDirection ?? null} />}
      </button>
    </th>
  )
}

// ─── TableCell ────────────────────────────────────────────────────────────────

export const TableCell = ({ children, type = 'text', align = 'left', prefix, dataLabel, className, ...props }: TableCellProps) => {
  return (
    <td
      className={cx(
        'ds-table__cell',
        `ds-table__cell--${type}`,
        `ds-table__cell--align-${align}`,
        className,
      )}
      data-label={dataLabel}
      {...props}
    >
      {dataLabel && <span className="ds-table__cell-mobile-label">{dataLabel}</span>}
      {type === 'number' ? (
        <span className="ds-table__cell-number">
          {prefix && <span className="ds-table__cell-prefix">{prefix}</span>}
          <span className="ds-table__cell-value">{children}</span>
        </span>
      ) : (
        <span className="ds-table__cell-text">{children}</span>
      )}
    </td>
  )
}

// ─── TableRow ────────────────────────────────────────────────────────────────

export const TableRow = ({
  state = 'default',
  selectable = false,
  selected = false,
  onSelect,
  className,
  children,
  ...props
}: TableRowProps) => {
  return (
    <tr
      className={cx(
        'ds-table__row',
        `ds-table__row--${state}`,
        selected && 'ds-table__row--selected',
        className,
      )}
      aria-selected={selected || undefined}
      {...props}
    >
      {selectable && (
        <td className="ds-table__cell ds-table__cell--select" data-label="Select">
          <span className="ds-table__cell-mobile-label">Select</span>
          <TableCheckbox
            checked={selected}
            onChange={(e) => onSelect?.(e.target.checked)}
          />
        </td>
      )}
      {children}
    </tr>
  )
}

// ─── TablePagination ─────────────────────────────────────────────────────────

export const TablePagination = ({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
  className,
  ...props
}: TablePaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const firstItem = Math.min((currentPage - 1) * pageSize + 1, totalItems)
  const lastItem = Math.min(currentPage * pageSize, totalItems)

  const buildPages = (): Array<number | '...'> => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages: Array<number | '...'> = [1]
    if (currentPage > 3) pages.push('...')
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }
    if (currentPage < totalPages - 2) pages.push('...')
    pages.push(totalPages)
    return pages
  }

  return (
    <div className={cx('ds-table__pagination', className)} role="navigation" aria-label="Table pagination" {...props}>
      <span className="ds-table__pagination-info">
        Showing {firstItem}–{lastItem} of {totalItems} results
      </span>
      <div className="ds-table__pagination-controls">
        <button
          type="button"
          className="ds-table__pagination-btn ds-table__pagination-btn--prev"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeftIcon />
        </button>
        {buildPages().map((page, i) =>
          page === '...' ? (
            <span key={`ellipsis-${i}`} className="ds-table__pagination-ellipsis" aria-hidden="true">
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={cx('ds-table__pagination-btn', page === currentPage && 'ds-table__pagination-btn--active')}
              onClick={() => onPageChange(page as number)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          ),
        )}
        <button
          type="button"
          className="ds-table__pagination-btn ds-table__pagination-btn--next"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  )
}

// ─── Table (main) ─────────────────────────────────────────────────────────────

export const Table = <T extends Record<string, unknown> = Record<string, unknown>>({
  theme = 'light',
  columns = [],
  data = [],
  rowKey,
  title,
  showSearch = true,
  showToolbar = true,
  showPagination = true,
  striped = false,
  selectable = false,
  selectedRowKeys,
  onRowSelect,
  onSelectAll,
  searchValue = '',
  searchPlaceholder = 'Search',
  onSearch,
  sortKey,
  sortDirection,
  onSort,
  currentPage = 1,
  pageSize = 10,
  totalItems,
  onPageChange,
  emptyMessage,
  loading = false,
  responsiveMode = 'stack',
  className,
  tableClassName,
  ...props
}: TableProps<T>) => {
  const resolvedTotal = totalItems ?? data.length
  const allSelected = data.length > 0 && data.every((_, i) => selectedRowKeys?.has(getRowKey(_, i, rowKey)))
  const someSelected = !allSelected && data.some((_, i) => selectedRowKeys?.has(getRowKey(_, i, rowKey)))

  const handleSort = (key: string) => {
    if (!onSort) return
    if (sortKey !== key) {
      onSort(key, 'asc')
    } else if (sortDirection === 'asc') {
      onSort(key, 'desc')
    } else {
      onSort(key, null)
    }
  }

  return (
    <div
      className={cx(
        'ds-table',
        `ds-table--${theme}`,
        `ds-table--responsive-${responsiveMode}`,
        loading && 'ds-table--loading',
        className,
      )}
      {...props}
    >
      {showToolbar && (
        <TableToolbar
          title={title}
          showSearch={showSearch}
          searchValue={searchValue}
          searchPlaceholder={searchPlaceholder}
          onSearch={onSearch}
          theme={theme}
        />
      )}

      <div className="ds-table__scroll-container" role="region" aria-label={typeof title === 'string' ? title : 'Data table'}>
        <table className={cx('ds-table__table', tableClassName)}>
          <thead className="ds-table__head">
            <tr className="ds-table__row ds-table__row--header">
              {selectable && (
                <th className="ds-table__cell ds-table__cell--header ds-table__cell--select" aria-label="Select all">
                  <TableCheckbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onChange={(e) => onSelectAll?.(e.target.checked)}
                    aria-label="Select all rows"
                  />
                </th>
              )}
              {columns.map((col) => (
                <TableHeaderCell
                  key={col.key}
                  sortable={col.sortable}
                  sortDirection={sortKey === col.key ? sortDirection : null}
                  onSort={() => handleSort(col.key)}
                  align={col.align}
                  style={col.width ? { width: col.width } : undefined}
                >
                  {col.label}
                </TableHeaderCell>
              ))}
            </tr>
          </thead>
          <tbody className="ds-table__body">
            {data.length === 0 ? (
              <tr className="ds-table__row ds-table__row--empty">
                <td
                  className="ds-table__cell ds-table__cell--empty"
                  colSpan={columns.length + (selectable ? 1 : 0)}
                >
                  {emptyMessage ?? 'No data available'}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => {
                const key = getRowKey(row, rowIndex, rowKey)
                const isSelected = selectedRowKeys?.has(key) ?? false
                const rowState = isSelected ? 'selected' : striped && rowIndex % 2 !== 0 ? 'alternate' : 'default'

                return (
                  <TableRow
                    key={key}
                    state={rowState}
                    selectable={selectable}
                    selected={isSelected}
                    onSelect={(checked) => onRowSelect?.(key, checked)}
                  >
                    {columns.map((col) => {
                      const value = row[col.key]
                      const dataLabel = typeof col.label === 'string' ? col.label : col.key
                      return (
                        <TableCell
                          key={col.key}
                          type={col.type ?? 'text'}
                          align={col.align}
                          prefix={col.prefix}
                          dataLabel={dataLabel}
                        >
                          {col.render ? col.render(value, row, rowIndex) : (value as ReactNode)}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {showPagination && resolvedTotal > 0 && onPageChange && (
        <TablePagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={resolvedTotal}
          onPageChange={onPageChange}
          theme={theme}
        />
      )}
    </div>
  )
}
