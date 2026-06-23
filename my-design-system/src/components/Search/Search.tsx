import { type InputHTMLAttributes, type ReactNode } from 'react'
import './Search.scss'

export type SearchSize = 'medium' | 'small'
export type SearchValueType = 'default' | 'placeholder'

export interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: SearchSize
  valueType?: SearchValueType
  value?: string
  iconRight?: boolean | ReactNode
  iconLeft?: boolean | ReactNode
  onClear?: () => void
}

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M14.3536 13.6464L11.2252 10.5181C12.0261 9.54714 12.5 8.32958 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5C8.32958 12.5 9.54714 12.0261 10.5181 11.2252L13.6464 14.3536C13.7441 14.4512 13.8721 14.5 14 14.5C14.1279 14.5 14.2559 14.4512 14.3536 14.3536C14.5488 14.1583 14.5488 13.8417 14.3536 13.6464ZM2.5 7C2.5 4.51472 4.51472 2.5 7 2.5C9.48528 2.5 11.5 4.51472 11.5 7C11.5 9.48528 9.48528 11.5 7 11.5C4.51472 11.5 2.5 9.48528 2.5 7Z" fill="currentColor"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M12.3536 3.64645C12.1583 3.45118 11.8417 3.45118 11.6464 3.64645L8 7.29289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L7.29289 8L3.64645 11.6464C3.45118 11.8417 3.45118 12.1583 3.64645 12.3536C3.84171 12.5488 4.15829 12.5488 4.35355 12.3536L8 8.70711L11.6464 12.3536C11.8417 12.5488 12.1583 12.5488 12.3536 12.3536C12.5488 12.1583 12.5488 11.8417 12.3536 11.6464L8.70711 8L12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645Z" fill="currentColor"/>
  </svg>
)

export const Search = ({
  size = 'medium',
  valueType = 'placeholder',
  value,
  iconRight = true,
  iconLeft = true,
  onClear,
  className,
  ...inputProps
}: SearchProps) => {
  const hasControlledValue = value !== undefined
  const hasOnChange = typeof inputProps.onChange === 'function'

  const classes = [
    'ds-search',
    `ds-search--${size}`,
    `ds-search--${valueType}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const renderLeftIcon = () => {
    if (!iconLeft) return null
    if (iconLeft === true) return <SearchIcon />
    return iconLeft
  }

  const renderRightIcon = () => {
    if (!iconRight) return null
    if (iconRight === true) {
      return valueType === 'default' ? <CloseIcon /> : <SearchIcon />
    }
    return iconRight
  }

  return (
    <div className={classes}>
      {iconLeft && (
        <span className="ds-search__icon ds-search__icon--left">
          {renderLeftIcon()}
        </span>
      )}
      <input
        type="text"
        className="ds-search__input"
        value={value}
        readOnly={hasControlledValue && !hasOnChange ? true : inputProps.readOnly}
        placeholder={valueType === 'placeholder' ? value || 'Value' : undefined}
        {...inputProps}
      />
      {iconRight && (
        <button
          type="button"
          className="ds-search__icon ds-search__icon--right"
          onClick={onClear}
          aria-label={valueType === 'default' ? 'Clear' : 'Search'}
        >
          {renderRightIcon()}
        </button>
      )}
    </div>
  )
}
