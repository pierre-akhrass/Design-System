import { useState, useRef, type TextareaHTMLAttributes } from 'react'
import './TextArea.scss'

export type TextAreaState = 'default' | 'placeholder' | 'focused' | 'disabled'

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  /** Label text */
  label?: string
  /** Value type */
  valueType?: 'default' | 'placeholder'
  /** Component state */
  state?: TextAreaState
  /** Value text */
  value?: string
  /** Callback when value changes */
  onChange?: (value: string) => void
}

export const TextArea = ({
  label = 'Label',
  valueType = 'default',
  state = 'default',
  value = 'Value',
  onChange,
  ...rest
}: TextAreaProps) => {
  const [internalValue, setInternalValue] = useState(valueType === 'default' ? value : '')
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInternalValue(e.target.value)
    onChange?.(e.target.value)
  }

  const handleFocus = () => {
    setIsFocused(true)
    if (valueType === 'default' && internalValue === value) {
      setInternalValue('')
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (valueType === 'default' && internalValue === '') {
      setInternalValue(value)
    }
  }

  const isPlaceholder = valueType === 'placeholder'
  const isDisabled = state === 'disabled'

  const classNames = [
    'ds-textarea',
    isPlaceholder && !internalValue && 'ds-textarea--placeholder',
    isFocused && 'ds-textarea--focused',
    isDisabled && 'ds-textarea--disabled',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames}>
      {!isPlaceholder && <label className="ds-textarea__label">{label}</label>}
      <textarea
        ref={textareaRef}
        className="ds-textarea__input"
        value={internalValue}
        placeholder={isPlaceholder ? label : undefined}
        disabled={isDisabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </div>
  )
}
