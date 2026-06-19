import { useState, type HTMLAttributes } from 'react'
import './Tabs.scss'

export type TabStyle = 'line' | 'pill'

export interface TabItem {
  /** Tab label text */
  label: string
  /** Show indicator dot next to label */
  showIndicator?: boolean
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of tab items */
  tabs: TabItem[]
  /** Visual style variant */
  tabStyle?: TabStyle
  /** Active tab index (controlled) */
  activeIndex?: number
  /** Callback when tab changes */
  onTabChange?: (index: number) => void
}

export const Tabs = ({
  tabs,
  tabStyle = 'line',
  activeIndex: controlledIndex,
  onTabChange,
  className,
  ...rest
}: TabsProps) => {
  const [internalIndex, setInternalIndex] = useState(0)
  const activeIndex = controlledIndex ?? internalIndex

  const handleTabClick = (index: number) => {
    setInternalIndex(index)
    onTabChange?.(index)
  }

  const classes = [
    'ds-tabs',
    `ds-tabs--${tabStyle}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} role="tablist" {...rest}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          className={`ds-tabs__tab${index === activeIndex ? ' ds-tabs__tab--active' : ''}`}
          aria-selected={index === activeIndex}
          onClick={() => handleTabClick(index)}
        >
          <span className="ds-tabs__label">{tab.label}</span>
          {tab.showIndicator && (
            <span className="ds-tabs__indicator" aria-hidden="true" />
          )}
        </button>
      ))}
    </div>
  )
}
