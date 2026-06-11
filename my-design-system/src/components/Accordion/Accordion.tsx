import { useMemo, useState } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
/**
 * Accordion Component
 * @developer pierre-akhrass
 */

import './Accordion.scss'

export type AccordionTheme = 'light' | 'dark'

export interface AccordionItemData {
  id: string
  title: string
  content?: string
  isOpen?: boolean
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  theme?: AccordionTheme
  items?: AccordionItemData[]
  icon?: ReactNode
  allowMultiple?: boolean
  defaultOpenIds?: string[]
}

const DefaultChevron = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
    <path d="M5.5 7.5L10 12l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export const Accordion = ({
  theme = 'light',
  allowMultiple = false,
  defaultOpenIds,
  items = [
    { id: 'closed', title: 'Title for accordion row', isOpen: false },
    {
      id: 'open',
      title: 'Title for accordion row',
      isOpen: true,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tellus eget sapien ultricies, ac dapibus arcu fermentum. Morbi massa metus, iaculis vitae mi eu, bibendum posuere ante. Aliquam sed imperdiet dui, nec convallis nunc. Quisque tortor turpis, consectetur ac elit rutrum, bibendum scelerisque massa.',
    },
  ],
  icon,
  className,
  ...props
}: AccordionProps) => {
  const initialOpenIds = useMemo(() => {
    if (defaultOpenIds?.length) {
      return defaultOpenIds
    }

    return items.filter((item) => item.isOpen).map((item) => item.id)
  }, [defaultOpenIds, items])

  const [openIds, setOpenIds] = useState<string[]>(initialOpenIds)

  const classes = ['ds-accordion', `ds-accordion--${theme}`, className].filter(Boolean).join(' ')

  const toggleItem = (id: string) => {
    setOpenIds((current) => {
      const isAlreadyOpen = current.includes(id)

      if (isAlreadyOpen) {
        return current.filter((openId) => openId !== id)
      }

      if (allowMultiple) {
        return [...current, id]
      }

      return [id]
    })
  }

  return (
    <div className={classes} {...props}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        const itemClasses = ['ds-accordion__item', isOpen ? 'is-open' : 'is-closed'].join(' ')

        return (
          <article className={itemClasses} key={item.id}>
            <button className="ds-accordion__header" type="button" onClick={() => toggleItem(item.id)}>
              <span className="ds-accordion__title">{item.title}</span>
              <span className="ds-accordion__icon">{icon ?? <DefaultChevron />}</span>
            </button>

            {isOpen && item.content ? <p className="ds-accordion__content">{item.content}</p> : null}
          </article>
        )
      })}
    </div>
  )
}
