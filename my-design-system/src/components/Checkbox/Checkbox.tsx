// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Checkbox/Checkbox.tsx
import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import './Checkbox.scss'

export type CheckboxState = 'checked' | 'unchecked' | 'indeterminate'
export type CheckboxPlacement = 'left' | 'right'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'> {
  /** Visual + functional state */
  state?: CheckboxState
  /** Label text (rendered next to the box) */
  label?: ReactNode
  /** Description text (rendered under the label) */
  description?: ReactNode
  /** Box on the left or right of the label */
  placement?: CheckboxPlacement
  /** Fired when user toggles. Receives the next state. */
  onChange?: (next: CheckboxState, e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2.5 9L6 12.5L14 4.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MinusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3.33337 8H12.6667"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      state = 'unchecked',
      label,
      description,
      placement = 'left',
      onChange,
      disabled,
      className,
      id,
      ...inputProps
    },
    ref,
  ) => {
    const reactId = useId()
    const inputId = id ?? `ds-checkbox-${reactId}`

    const classes = [
      'ds-checkbox',
      `ds-checkbox--${state}`,
      `ds-checkbox--placement-${placement}`,
      disabled ? 'ds-checkbox--disabled' : null,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next: CheckboxState =
        state === 'indeterminate' ? 'checked' : e.target.checked ? 'checked' : 'unchecked'
      onChange?.(next, e)
    }

    const box = (
      <span className="ds-checkbox__box" aria-hidden="true">
        {state === 'checked' && <CheckIcon />}
        {state === 'indeterminate' && <MinusIcon />}
      </span>
    )

    const text = (label || description) && (
      <span className="ds-checkbox__text">
        {label && <span className="ds-checkbox__label">{label}</span>}
        {description && <span className="ds-checkbox__description">{description}</span>}
      </span>
    )

    return (
      <label htmlFor={inputId} className={classes}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className="ds-checkbox__input"
          checked={state === 'checked'}
          disabled={disabled}
          aria-checked={state === 'indeterminate' ? 'mixed' : state === 'checked'}
          onChange={handleChange}
          {...inputProps}
        />
        {placement === 'left' ? (
          <>
            {box}
            {text}
          </>
        ) : (
          <>
            {text}
            {box}
          </>
        )}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
