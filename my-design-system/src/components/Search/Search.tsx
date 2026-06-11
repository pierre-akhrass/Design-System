import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react'
/**
 * Search Component
 * @developer Mohamad oueidat
 */

import './Search.scss'

export type SearchTheme = 'light' | 'dark'
export type SearchSize = 'default' | 'compact'

export interface SearchProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  theme?: SearchTheme
  size?: SearchSize
  placeholder?: string
  value?: string
  defaultValue?: string
  showClear?: boolean
  clearLabel?: string
  onValueChange?: (value: string) => void
  onClear?: () => void
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  children?: ReactNode
}

const SearchIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
)

const FilterIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 7h12" />
    <circle cx="18" cy="7" r="2" />
    <path d="M8 17h12" />
    <circle cx="6" cy="17" r="2" />
  </svg>
)

export const Search = ({
  theme = 'light',
  size = 'default',
  placeholder = 'Search for something',
  value,
  defaultValue,
  showClear = true,
  clearLabel = 'Clear Search',
  onValueChange,
  onClear,
  inputProps,
  className,
  children,
  ...rest
}: SearchProps) => {
  const classes = [
    'ds-search',
    `ds-search--${theme}`,
    `ds-search--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClear = () => {
    onClear?.()
    onValueChange?.('')
  }

  return (
    <div className={classes} {...rest}>
      <div className="ds-search__bar">
        <span className="ds-search__icon" aria-hidden="true">
          <SearchIcon size={size === 'compact' ? 16 : 18} />
        </span>
        <input
          type="search"
          className="ds-search__input"
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={(event) => onValueChange?.(event.target.value)}
          {...inputProps}
        />
        {showClear && (
          <button
            type="button"
            className="ds-search__clear"
            onClick={handleClear}
          >
            {clearLabel}
          </button>
        )}
      </div>
      {children}
    </div>
  )
}

export interface SearchTabsProps extends HTMLAttributes<HTMLDivElement> {
  activeIndex?: number
  onTabChange?: (index: number) => void
  filterIcon?: ReactNode
  onFilterClick?: () => void
  showFilter?: boolean
  children?: ReactNode
}

export const SearchTabs = ({
  activeIndex = 0,
  onTabChange,
  filterIcon,
  onFilterClick,
  showFilter = true,
  className,
  children,
  ...rest
}: SearchTabsProps) => {
  const classes = ['ds-search__tabs', className].filter(Boolean).join(' ')

  const tabs = Children.toArray(children).filter(isValidElement) as ReactElement<SearchTabProps>[]

  return (
    <div className={classes} {...rest}>
      <div className="ds-search__tabs-list" role="tablist">
        {tabs.map((child, index) =>
          cloneElement(child, {
            key: child.key ?? index,
            active: index === activeIndex,
            onClick: () => onTabChange?.(index),
          })
        )}
      </div>
      {showFilter && (
        <button
          type="button"
          className="ds-search__filter"
          onClick={onFilterClick}
          aria-label="Filter"
        >
          {filterIcon ?? <FilterIcon />}
        </button>
      )}
    </div>
  )
}

export interface SearchTabProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  label: ReactNode
  count?: number | string
  active?: boolean
  onClick?: () => void
}

export const SearchTab = ({
  label,
  count,
  active = false,
  onClick,
  className,
  ...rest
}: SearchTabProps) => {
  const classes = [
    'ds-search__tab',
    active ? 'ds-search__tab--active' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={classes}
      onClick={onClick}
      {...rest}
    >
      <span className="ds-search__tab-label">{label}</span>
      {count !== undefined && (
        <span className="ds-search__tab-count">{count}</span>
      )}
    </button>
  )
}

export interface SearchResultsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export const SearchResults = ({
  className,
  children,
  ...rest
}: SearchResultsProps) => {
  const classes = ['ds-search__results', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
