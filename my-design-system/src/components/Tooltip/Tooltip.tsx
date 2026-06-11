import type { CSSProperties, HTMLAttributes } from 'react'
import './Tooltip.scss'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'
export type TooltipTheme = 'light' | 'dark'

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** Primary label shown in bold */
  title: string
  /** Optional supporting text below the title */
  body?: string
  /** Which side the arrow points toward (where the target is) */
  placement?: TooltipPlacement
  /** Color theme — defaults to system `prefers-color-scheme` when omitted */
  theme?: TooltipTheme
  /** Override the tooltip background color */
  bgColor?: string
  /** Override the tooltip border color */
  borderColor?: string
  /** Override the text color (applies to both title and body) */
  textColor?: string
}

export const Tooltip = ({
  title,
  body,
  placement = 'top',
  theme,
  bgColor,
  borderColor,
  textColor,
  className,
  style,
  ...props
}: TooltipProps) => {
  const classes = [
    'ds-tooltip',
    `ds-tooltip--${placement}`,
    theme && `ds-tooltip--${theme}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inlineStyle: CSSProperties = {
    ...(bgColor     && { backgroundColor: bgColor, '--ds-tooltip-bg': bgColor } as CSSProperties),
    ...(borderColor && { borderColor, '--ds-tooltip-border': borderColor } as CSSProperties),
    ...(textColor   && { color: textColor }),
    ...style,
  }

  return (
    <div className={classes} role="tooltip" style={inlineStyle} {...props}>
      <span className="ds-tooltip__title">{title}</span>
      {body && <span className="ds-tooltip__body">{body}</span>}
    </div>
  )
}
