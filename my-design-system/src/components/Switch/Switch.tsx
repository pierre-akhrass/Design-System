// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Switch/Switch.tsx
import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import './Switch.scss'

export type SwitchState = 'checked' | 'unchecked'
export type SwitchPlacement = 'left' | 'right'

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'> {
  /** Visual + functional state */
  state?: SwitchState
  /** Label text rendered next to the switch */
  label?: ReactNode
  /** Description text rendered under the label */
  description?: ReactNode
  /** Switch on the left or right of the label */
  placement?: SwitchPlacement
  /** Fired with the next state when the user toggles */
  onChange?: (next: SwitchState, e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
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
    const inputId = id ?? `ds-switch-${reactId}`

    const classes = [
      'ds-switch',
      `ds-switch--${state}`,
      `ds-switch--placement-${placement}`,
      disabled ? 'ds-switch--disabled' : null,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked ? 'checked' : 'unchecked', e)
    }

    const track = (
      <span className="ds-switch__track" aria-hidden="true">
        <span className="ds-switch__knob" />
      </span>
    )

    const text = (label || description) && (
      <span className="ds-switch__text">
        {label && <span className="ds-switch__label">{label}</span>}
        {description && <span className="ds-switch__description">{description}</span>}
      </span>
    )

    return (
      <label htmlFor={inputId} className={classes}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          role="switch"
          className="ds-switch__input"
          checked={state === 'checked'}
          disabled={disabled}
          aria-checked={state === 'checked'}
          onChange={handleChange}
          {...inputProps}
        />
        {placement === 'left' ? (
          <>
            {track}
            {text}
          </>
        ) : (
          <>
            {text}
            {track}
          </>
        )}
      </label>
    )
  },
)

Switch.displayName = 'Switch'
