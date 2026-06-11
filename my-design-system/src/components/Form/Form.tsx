/**
 * Form Component
 * @developer Maher Al Rifai
 */

import type {
  AnchorHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react'
import { useId, useState } from 'react'
import { Button } from '../Button'
import './Form.scss'

export type FormTheme = 'light' | 'dark'
export type FormControlState = 'default' | 'focus' | 'hover' | 'error' | 'disabled'

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  theme?: FormTheme
}

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  required?: boolean
}

export interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  state?: FormControlState
}

export interface FormTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  state?: FormControlState
  rows?: number
}

export interface FormSelectOption {
  value: string
  label: ReactNode
  description?: ReactNode
  selected?: boolean
}

export interface FormSelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  label?: ReactNode
  inlineLabel?: ReactNode
  value?: string
  defaultValue?: string
  placeholder?: ReactNode
  description?: ReactNode
  error?: ReactNode
  open?: boolean
  state?: FormControlState
  options?: FormSelectOption[]
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  name?: string
  required?: boolean
  disabled?: boolean
  onValueChange?: (value: string) => void
}

export interface FormCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label: ReactNode
  description?: ReactNode
  state?: FormControlState
  linkLabel?: ReactNode
  linkHref?: string
  linkPlacement?: 'inline' | 'below'
}

export interface FormTextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export interface FormActionsProps extends HTMLAttributes<HTMLDivElement> {
  primaryLabel: ReactNode
  secondaryLabel?: ReactNode
  primaryState?: FormControlState
  secondaryState?: FormControlState
  primaryTone?: 'neutral' | 'brand'
  compact?: boolean
}

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ')
}

function resolveControlFlags(state: FormControlState, disabled?: boolean) {
  const isDisabled = disabled || state === 'disabled'
  return {
    isDisabled,
    stateClass: `ds-form-control--${state}`,
    ariaInvalid: state === 'error' || undefined,
  }
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" className="ds-form__icon" viewBox="0 0 16 16" fill="none">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="ds-form__icon" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg aria-hidden="true" className="ds-form__icon" viewBox="0 0 16 16" fill="none">
      <path d="M8 2.25L14.03 12.75H1.97L8 2.25Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8 5.5V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="11.25" r="0.75" fill="currentColor" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg aria-hidden="true" className="ds-form__icon" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 7.25V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="5.25" r="0.75" fill="currentColor" />
    </svg>
  )
}

export const Form = ({ theme = 'light', className, children, ...props }: FormProps) => {
  const classes = classNames('ds-form', `ds-form--${theme}`, className)

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  )
}

export const FormField = ({ label, description, error, required, className, children, ...props }: FormFieldProps) => {
  const classes = classNames('ds-form-field', className)

  return (
    <div className={classes} {...props}>
      {label && (
        <div className="ds-form-field__header">
          <span className="ds-form-field__label">{label}</span>
          {required && <span className="ds-form-field__required">*</span>}
        </div>
      )}
      {children}
      {description && !error && (
        <div className="ds-form-field__message ds-form-field__message--description">
          <InfoIcon />
          <span>{description}</span>
        </div>
      )}
      {error && (
        <div className="ds-form-field__message ds-form-field__message--error">
          <AlertIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export const FormInput = ({
  label,
  description,
  error,
  leadingIcon,
  trailingIcon,
  state = 'default',
  className,
  id,
  value,
  defaultValue,
  placeholder,
  disabled,
  readOnly,
  onChange,
  ...props
}: FormInputProps) => {
  const autoId = useId()
  const inputId = id ?? autoId
  const isReadOnly = readOnly ?? (value !== undefined && onChange === undefined)
  const { isDisabled, stateClass, ariaInvalid } = resolveControlFlags(state, disabled)
  const classes = classNames('ds-form-control', 'ds-form-control--input', stateClass, isDisabled ? 'ds-form-control--disabled' : null, className)
  const helperError = error ?? (state === 'error' ? 'Error message' : undefined)
  const helperDescription = description ?? (state === 'hover' ? 'Hover state' : undefined)

  return (
    <FormField label={label} description={helperDescription} error={helperError} className="ds-form-field--input">
      <div className={classes}>
        {leadingIcon && <span className="ds-form-control__adornment ds-form-control__adornment--leading">{leadingIcon}</span>}
        <input
          id={inputId}
          className="ds-form-control__input"
          aria-invalid={ariaInvalid}
          disabled={isDisabled}
          placeholder={placeholder}
          readOnly={isReadOnly}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          {...props}
        />
        {trailingIcon && <span className="ds-form-control__adornment ds-form-control__adornment--trailing">{trailingIcon}</span>}
      </div>
    </FormField>
  )
}

export const FormTextarea = ({
  label,
  description,
  error,
  state = 'default',
  className,
  id,
  value,
  defaultValue,
  placeholder,
  disabled,
  readOnly,
  onChange,
  rows = 4,
  ...props
}: FormTextareaProps) => {
  const autoId = useId()
  const textareaId = id ?? autoId
  const isReadOnly = readOnly ?? (value !== undefined && onChange === undefined)
  const { isDisabled, stateClass, ariaInvalid } = resolveControlFlags(state, disabled)
  const classes = classNames('ds-form-control', 'ds-form-control--textarea', stateClass, isDisabled ? 'ds-form-control--disabled' : null, className)
  const helperError = error ?? (state === 'error' ? 'Error message' : undefined)
  const helperDescription = description ?? (state === 'hover' ? 'Hover state' : undefined)

  return (
    <FormField label={label} description={helperDescription} error={helperError} className="ds-form-field--textarea">
      <div className={classes}>
        <textarea
          id={textareaId}
          className="ds-form-control__input ds-form-control__textarea"
          aria-invalid={ariaInvalid}
          disabled={isDisabled}
          placeholder={placeholder}
          readOnly={isReadOnly}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          rows={rows}
          {...props}
        />
      </div>
    </FormField>
  )
}

export const FormSelect = ({
  label,
  inlineLabel,
  value,
  defaultValue,
  placeholder,
  description,
  error,
  open = false,
  state = 'default',
  options = [],
  leadingIcon,
  trailingIcon,
  name,
  required,
  disabled,
  onValueChange,
  className,
  ...props
}: FormSelectProps) => {
  const initialValue = defaultValue ?? options.find((option) => option.selected)?.value ?? options[0]?.value ?? ''
  const [internalValue, setInternalValue] = useState(initialValue)
  const currentValue = value ?? internalValue
  const selectedOption = options.find((option) => option.value === currentValue) ?? options.find((option) => option.selected) ?? options[0]
  const displayValue = selectedOption?.label ?? placeholder
  const selectedLabel = selectedOption?.label ?? placeholder
  const { isDisabled, stateClass, ariaInvalid } = resolveControlFlags(state, disabled)

  const handleValueChange = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue)
    }
    onValueChange?.(nextValue)
  }

  const classes = classNames(
    'ds-form-select',
    stateClass.replace('ds-form-control', 'ds-form-select'),
    open ? 'ds-form-select--open' : null,
    isDisabled ? 'ds-form-select--disabled' : null,
    className,
  )

  return (
    <FormField label={label} description={description} error={error} className="ds-form-field--select" {...props}>
      <div className={classes}>
        <button
          type="button"
          className={classNames('ds-form-control', 'ds-form-control--select', stateClass, isDisabled ? 'ds-form-control--disabled' : null)}
          aria-expanded={open}
          aria-invalid={ariaInvalid}
          disabled={isDisabled}
        >
          {leadingIcon && <span className="ds-form-control__adornment ds-form-control__adornment--leading">{leadingIcon}</span>}
          <span
            className={classNames(
              'ds-form-select__value',
              inlineLabel ? 'ds-form-select__value--stacked' : null,
              selectedOption ? 'ds-form-select__value--filled' : 'ds-form-select__value--placeholder',
            )}
          >
            {inlineLabel && <span className="ds-form-select__inline-label">{inlineLabel}</span>}
            <span className="ds-form-select__inline-value">{displayValue}</span>
          </span>
          {trailingIcon ?? <ChevronDownIcon />}
        </button>
        <select
          className="ds-form-select__native"
          disabled={isDisabled}
          name={name}
          onChange={(event) => handleValueChange(event.target.value)}
          required={required}
          tabIndex={-1}
          value={currentValue}
          aria-hidden="true"
        >
          {options.map((option, index) => (
            <option key={`${option.value}-${index}`} value={option.value}>
              {typeof option.label === 'string' ? option.label : option.value}
            </option>
          ))}
        </select>
        {open && options.length > 0 && (
          <div className="ds-form-select__menu" role="listbox" aria-label={typeof selectedLabel === 'string' ? selectedLabel : undefined}>
            {options.map((option, index) => (
              <button
                type="button"
                className="ds-form-select__option"
                key={`${index}-${option.value}`}
                role="option"
                aria-selected={option.value === currentValue}
                onClick={() => handleValueChange(option.value)}
              >
                <span className="ds-form-select__option-label">{option.label}</span>
                {option.description && <span className="ds-form-select__option-description">{option.description}</span>}
                {option.value === currentValue && <CheckIcon />}
              </button>
            ))}
          </div>
        )}
      </div>
    </FormField>
  )
}

export const FormCheckbox = ({
  id,
  name,
  value,
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled,
  required,
  readOnly,
  state = 'default',
  linkLabel,
  linkHref = '#',
  linkPlacement = 'inline',
  className,
  ...inputProps
}: FormCheckboxProps) => {
  const autoId = useId()
  const inputId = id ?? autoId
  const { isDisabled } = resolveControlFlags(state, disabled)
  const isReadOnly = readOnly ?? (checked !== undefined && onChange === undefined)
  const isChecked = checked ?? defaultChecked ?? false
  const classes = classNames(
    'ds-form-checkbox',
    `ds-form-checkbox--${state}`,
    isChecked ? 'ds-form-checkbox--checked' : null,
    isDisabled ? 'ds-form-checkbox--disabled' : null,
    className,
  )

  return (
    <label className={classes} htmlFor={inputId}>
      <input
        id={inputId}
        className="ds-form-checkbox__native"
        type="checkbox"
        name={name}
        value={typeof value === 'string' ? value : undefined}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={isDisabled}
        required={required}
        readOnly={isReadOnly}
        {...inputProps}
      />
      <span className="ds-form-checkbox__box" aria-hidden="true">
        {isChecked && <CheckIcon />}
      </span>
      <div className="ds-form-checkbox__content">
        <div className="ds-form-checkbox__label-row">
          <span className="ds-form-checkbox__label">{label}</span>
          {linkLabel && linkPlacement === 'inline' && (
            <FormTextLink href={linkHref} className="ds-form-checkbox__link">
              {linkLabel}
            </FormTextLink>
          )}
        </div>
        {description && <div className="ds-form-checkbox__description">{description}</div>}
        {linkLabel && linkPlacement === 'below' && (
          <FormTextLink href={linkHref} className="ds-form-checkbox__link ds-form-checkbox__link--below">
            {linkLabel}
          </FormTextLink>
        )}
      </div>
    </label>
  )
}

export const FormTextLink = ({ children, className, ...props }: FormTextLinkProps) => {
  return (
    <a className={classNames('ds-form-link', className)} {...props}>
      {children}
    </a>
  )
}

export const FormActions = ({
  primaryLabel,
  secondaryLabel,
  primaryState = 'default',
  secondaryState = 'default',
  primaryTone = 'neutral',
  compact = false,
  className,
  ...props
}: FormActionsProps) => {
  const classes = classNames('ds-form-actions', `ds-form-actions--${primaryTone}`, compact ? 'ds-form-actions--compact' : null, className)

  return (
    <div className={classes} {...props}>
      {secondaryLabel && (
        <Button className="ds-form-actions__button ds-form-actions__button--secondary" state={secondaryState} variant="plain">
          {secondaryLabel}
        </Button>
      )}
      <Button className="ds-form-actions__button ds-form-actions__button--primary" state={primaryState} variant="filled">
        {primaryLabel}
      </Button>
    </div>
  )
}
