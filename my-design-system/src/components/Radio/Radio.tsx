// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Radio/Radio.tsx
import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
/**
 * Radio Component
 * @developer sereneogilvy
 */

import './Radio.scss'

export type RadioState = 'checked' | 'unchecked'
export type RadioPlacement = 'left' | 'right'

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'> {
  /** Visual + functional state */
  state?: RadioState
  /** Label text (rendered next to the radio) */
  label?: ReactNode
  /** Description text (rendered under the label) */
  description?: ReactNode
  /** Radio on the left or right of the label */
  placement?: RadioPlacement
  /** Fired when the user selects this radio */
  onChange?: (next: RadioState, e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <mask id="ds-radio-checked-mask" fill="white">
      <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" />
    </mask>
    <path
      d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
      fill="#141F2E"
    />
    <path
      d="M0 10M20 10M20 10M0 10M10 0M20 10M10 20M0 10M10 20V19C5.02944 19 1 14.9706 1 10H0H-1C-1 16.0751 3.92487 21 10 21V20ZM20 10H19C19 14.9706 14.9706 19 10 19V20V21C16.0751 21 21 16.0751 21 10H20ZM10 0V1C14.9706 1 19 5.02944 19 10H20H21C21 3.92487 16.0751 -1 10 -1V0ZM10 0V-1C3.92487 -1 -1 3.92487 -1 10H0H1C1 5.02944 5.02944 1 10 1V0Z"
      fill="#6B6B6B"
      mask="url(#ds-radio-checked-mask)"
    />
    <circle cx="10" cy="10" r="4" fill="white" />
  </svg>
)

const UncheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <mask id="ds-radio-unchecked-mask" fill="white">
      <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" />
    </mask>
    <path
      d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
      fill="#E9ECF0"
    />
    <path
      d="M0 10M20 10M20 10M0 10M10 0M20 10M10 20M0 10M10 20V19C5.02944 19 1 14.9706 1 10H0H-1C-1 16.0751 3.92487 21 10 21V20ZM20 10H19C19 14.9706 14.9706 19 10 19V20V21C16.0751 21 21 16.0751 21 10H20ZM10 0V1C14.9706 1 19 5.02944 19 10H20H21C21 3.92487 16.0751 -1 10 -1V0ZM10 0V-1C3.92487 -1 -1 3.92487 -1 10H0H1C1 5.02944 5.02944 1 10 1V0Z"
      fill="#BCBCBC"
      mask="url(#ds-radio-unchecked-mask)"
    />
  </svg>
)

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
      name,
      value,
      ...inputProps
    },
    ref,
  ) => {
    const reactId = useId()
    const inputId = id ?? `ds-radio-${reactId}`

    const classes = [
      'ds-radio',
      `ds-radio--${state}`,
      `ds-radio--placement-${placement}`,
      disabled ? 'ds-radio--disabled' : null,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked ? 'checked' : 'unchecked', e)
    }

    const dot = (
      <span className="ds-radio__box" aria-hidden="true">
        {state === 'checked' ? <CheckedIcon /> : <UncheckedIcon />}
      </span>
    )

    const text = (label || description) && (
      <span className="ds-radio__text">
        {label && <span className="ds-radio__label">{label}</span>}
        {description && <span className="ds-radio__description">{description}</span>}
      </span>
    )

    return (
      <label htmlFor={inputId} className={classes}>
        <input
          ref={ref}
          id={inputId}
          name={name}
          value={value}
          type="radio"
          className="ds-radio__input"
          checked={state === 'checked'}
          disabled={disabled}
          onChange={handleChange}
          {...inputProps}
        />
        {placement === 'left' ? (
          <>
            {dot}
            {text}
          </>
        ) : (
          <>
            {text}
            {dot}
          </>
        )}
      </label>
    )
  },
)

Radio.displayName = 'Radio'
