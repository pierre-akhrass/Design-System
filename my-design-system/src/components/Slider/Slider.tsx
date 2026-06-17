import { useState, useRef, useCallback, useEffect } from 'react'
import './Slider.scss'

export type SliderState = 'default' | 'hover' | 'active' | 'disabled'

export interface SliderProps {
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Low value of the range */
  valueLow?: number
  /** High value of the range */
  valueHigh?: number
  /** Whether to show the label */
  hasLabel?: boolean
  /** Label text */
  label?: string
  /** Whether to show the description */
  hasDescription?: boolean
  /** Description text */
  description?: string
  /** Component state */
  state?: SliderState
  /** Callback when values change */
  onChange?: (low: number, high: number) => void
}

const PointerIcon = () => (
  <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.25335 0.345284C3.65212 -0.115178 4.36643 -0.115178 4.76521 0.345284L7.77246 3.81776C8.33333 4.4654 7.87328 5.47241 7.01653 5.47241H1.00203C0.145274 5.47241 -0.314779 4.4654 0.246097 3.81776L3.25335 0.345284Z"
      fill="white"
      fillOpacity="0.6"
    />
  </svg>
)

export const Slider = ({
  min = 0,
  max = 9999,
  valueLow = 9,
  valueHigh = 9999,
  hasLabel = true,
  label = 'Slider Label',
  hasDescription = true,
  description = 'Description',
  state = 'default',
  onChange,
}: SliderProps) => {
  const [low, setLow] = useState(valueLow)
  const [high, setHigh] = useState(valueHigh)
  const [dragging, setDragging] = useState<'low' | 'high' | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLow(valueLow)
    setHigh(valueHigh)
  }, [valueLow, valueHigh])

  const getPercent = (value: number) => ((value - min) / (max - min)) * 100

  const getValueFromPosition = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return min
      const rect = trackRef.current.getBoundingClientRect()
      const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
      return Math.round(min + percent * (max - min))
    },
    [min, max]
  )

  const handleMouseDown = (knob: 'low' | 'high') => (e: React.MouseEvent) => {
    if (state === 'disabled') return
    e.preventDefault()
    setDragging(knob)
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return
      const value = getValueFromPosition(e.clientX)
      if (dragging === 'low') {
        const newLow = Math.min(value, high)
        setLow(newLow)
        onChange?.(newLow, high)
      } else {
        const newHigh = Math.max(value, low)
        setHigh(newHigh)
        onChange?.(low, newHigh)
      }
    },
    [dragging, high, low, getValueFromPosition, onChange]
  )

  const handleMouseUp = useCallback(() => {
    setDragging(null)
  }, [])

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [dragging, handleMouseMove, handleMouseUp])

  const lowPercent = getPercent(low)
  const highPercent = getPercent(high)

  const isDisabled = state === 'disabled'

  return (
    <div className={`ds-slider ds-slider--${state}`}>
      {hasLabel && <div className="ds-slider__label">{label}</div>}
      {hasDescription && <div className="ds-slider__description">{description}</div>}

      <div className="ds-slider__track-wrapper">
        <div className="ds-slider__track" ref={trackRef}>
          <div
            className="ds-slider__track-fill"
            style={{ left: `${lowPercent}%`, width: `${highPercent - lowPercent}%` }}
          />
          {/* Low knob */}
          <div
            className={`ds-slider__knob ${dragging === 'low' ? 'ds-slider__knob--active' : ''}`}
            style={{ left: `${lowPercent}%` }}
            onMouseDown={handleMouseDown('low')}
            role="slider"
            aria-valuemin={min}
            aria-valuemax={high}
            aria-valuenow={low}
            aria-disabled={isDisabled}
            tabIndex={isDisabled ? -1 : 0}
          />
          {/* High knob */}
          <div
            className={`ds-slider__knob ${dragging === 'high' ? 'ds-slider__knob--active' : ''}`}
            style={{ left: `${highPercent}%` }}
            onMouseDown={handleMouseDown('high')}
            role="slider"
            aria-valuemin={low}
            aria-valuemax={max}
            aria-valuenow={high}
            aria-disabled={isDisabled}
            tabIndex={isDisabled ? -1 : 0}
          />
        </div>
      </div>

      <div className="ds-slider__values">
        <div className="ds-slider__value-badge" style={{ left: `${lowPercent}%` }}>
          <PointerIcon />
          <span className="ds-slider__value-text">{low}</span>
        </div>
        <div className="ds-slider__value-badge" style={{ left: `${highPercent}%` }}>
          <PointerIcon />
          <span className="ds-slider__value-text">{high}</span>
        </div>
      </div>
    </div>
  )
}
