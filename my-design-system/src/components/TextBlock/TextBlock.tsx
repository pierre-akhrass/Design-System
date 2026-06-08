import type { HTMLAttributes } from 'react'
import './TextBlock.scss'

export type TextBlockTheme = 'light' | 'dark'

export interface TextBlockProps extends HTMLAttributes<HTMLElement> {
  theme?: TextBlockTheme
  showMeta?: boolean
  showTitle?: boolean
  showSubtitle?: boolean
  showParagraph?: boolean
  meta?: string
  title?: string
  subtitle?: string
  paragraph?: string
}

export const TextBlock = ({
  theme = 'light',
  showMeta = true,
  showTitle = true,
  showSubtitle = true,
  showParagraph = true,
  meta = 'This is a meta data text',
  title = 'Title of the card',
  subtitle = "The subtitle text for whatever you'd want the user to read first.",
  paragraph =
    "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  className,
  ...props
}: TextBlockProps) => {
  const classes = ['ds-text-block', `ds-text-block--${theme}`, className].filter(Boolean).join(' ')

  return (
    <article className={classes} {...props}>
      {showMeta && <p className="ds-text-block__meta">{meta}</p>}

      <div className="ds-text-block__header">
        {showTitle && <p className="ds-text-block__title">{title}</p>}
        {showSubtitle && <p className="ds-text-block__subtitle">{subtitle}</p>}
      </div>

      {showParagraph && <p className="ds-text-block__paragraph">{paragraph}</p>}
    </article>
  )
}
