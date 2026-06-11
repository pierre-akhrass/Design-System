import {
  Children,
  isValidElement,
  useId,
  type HTMLAttributes,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react'
import { NavItem } from '../NavItem'
import { Button, type ButtonVariant } from '../Button'
import megaMenuCardImage from '../../assets/mega-menu-card.png'
import { CaretRightIcon } from '../icons/CaretRightIcon'
/**
 * MegaMenu Component
 * @developer sereneogilvy
 */

import './MegaMenu.scss'

// -----------------------------------------------------------------------------
// MegaMenu
//
// A wide multi-column navigation panel used to surface large information
// architectures (product lines, departments, etc.) from a single trigger.
// Each column groups Tier-1 `NavItem`s under a small uppercase category heading,
// and an optional promotional card sits to the right with an image, copy and
// a `Button` call-to-action. Both the columns and the card are polymorphic so
// consumers can drive them entirely from dynamic data (CMS, feature flags,
// auth state) without writing JSX.
// -----------------------------------------------------------------------------

export type MegaMenuColorMode = 'light' | 'dark'

/**
 * A single Tier-1 link inside a `MegaMenu` column. Mirrors the subset of
 * `NavItem` props used by the mega menu so consumers can author each link
 * as plain data.
 */
export interface MegaMenuLink {
  /** Visible label. */
  label: ReactNode
  /** Link target. Defaults to `'#'`. */
  href?: string
  /** Leading icon. */
  iconLeft?: ReactNode
  /** Trailing icon. */
  iconRight?: ReactNode
  /** Marks the link as the active route (`aria-current="page"`). */
  selected?: boolean
  /** Click handler — receives the underlying anchor event. */
  onClick?: (e: ReactMouseEvent<HTMLAnchorElement>) => void
  /** When true, opens in a new tab with safe `rel`. */
  external?: boolean
  /** Optional stable React key (useful when reordering dynamically). */
  key?: string | number
  /** Accessible label, required for icon-only links. */
  ariaLabel?: string
}

/**
 * A column of Tier-1 links rendered under an uppercase category heading.
 */
export interface MegaMenuColumnConfig {
  /** Uppercase category heading rendered above the links. */
  title?: ReactNode
  /** Dynamic list of Tier-1 links. */
  links: MegaMenuLink[]
  /** Optional stable React key (useful when reordering dynamically). */
  key?: string | number
}

/**
 * The call-to-action button on the promotional card.
 */
export interface MegaMenuCardAction {
  /** Button label. */
  label?: ReactNode
  /** Click handler. */
  onClick?: () => void
  /** Optional href — opens via `window.open(href, '_self')` on click. */
  href?: string
  /** Button variant. Defaults to `'plain'` to match the Figma spec. */
  variant?: ButtonVariant
  /** Optional leading icon. */
  icon?: ReactNode
  /** Hide the default trailing chevron (`>`). */
  hideChevron?: boolean
}

/**
 * The promotional card pinned to the right of the columns. Every slot is
 * optional — the card gracefully collapses to whichever ones are provided.
 */
export interface MegaMenuCardConfig {
  /** Image URL — when omitted a neutral placeholder is rendered. */
  image?: string
  /** Image alt text. Defaults to `''` (treated as decorative). */
  imageAlt?: string
  /** Card heading. */
  title?: ReactNode
  /** Card subtitle (rendered larger / bolder than the body). */
  subtitle?: ReactNode
  /** Card body copy. */
  body?: ReactNode
  /** Call-to-action button. */
  button?: MegaMenuCardAction
  /** Optional href that wraps the whole card in an `<a>`. */
  href?: string
}

export interface MegaMenuProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Heading rendered at the top of the panel. */
  title?: ReactNode
  /**
   * Dynamic, user-editable list of columns. Each column has an uppercase
   * category title and a list of Tier-1 links that render as `NavItem`s.
   */
  columns?: MegaMenuColumnConfig[]
  /**
   * Promotional card pinned to the right of the columns. Accepts either:
   *   - a `MegaMenuCardConfig` — declarative, dynamic.
   *   - a `ReactNode` — full control (e.g. a custom `<MegaMenuCard>`).
   */
  card?: MegaMenuCardConfig | ReactNode
  /**
   * Escape hatch — manual composition with `<MegaMenuColumn>` (and an
   * explicit `card` prop for the promo card). Ignored when `columns` is
   * provided.
   */
  children?: ReactNode
  /** Light or dark surface. */
  colorMode?: MegaMenuColorMode
  /** Accessible label for the panel landmark. */
  ariaLabel?: string
}



/** Render the Tier-1 link list for a single column. */
const renderLinks = (
  links: MegaMenuLink[],
  colorMode: MegaMenuColorMode,
): ReactNode =>
  links.map((link, i) => {
    const key =
      link.key ??
      (typeof link.label === 'string' ? `${link.label}-${i}` : `link-${i}`)
    const externalProps = link.external
      ? ({ target: '_blank', rel: 'noopener noreferrer' } as const)
      : null
    return (
      <li key={key} className="ds-mega-menu__link-item">
        <NavItem
          orientation="vertical"
          hierarchy="tier-1"
          colorMode={colorMode}
          label={link.label}
          href={link.href ?? '#'}
          iconLeft={link.iconLeft}
          iconRight={link.iconRight}
          selected={link.selected}
          onClick={link.onClick}
          aria-label={link.ariaLabel}
          {...externalProps}
        />
      </li>
    )
  })

/**
 * True when `card` is a config object (plain object, not a React element /
 * array). Plain ReactNodes pass through untouched.
 */
const isCardConfig = (
  card: MegaMenuProps['card'],
): card is MegaMenuCardConfig =>
  card != null &&
  typeof card === 'object' &&
  !isValidElement(card) &&
  !Array.isArray(card)

/** Render the promotional card from a config object. */
const renderCard = (card: MegaMenuCardConfig): ReactNode => {
  const { image, imageAlt = '', title, subtitle, body, button, href } = card

  const inner = (
    <>
      <div className="ds-mega-menu__card-image">
        <img src={image ?? megaMenuCardImage} alt={imageAlt} />
      </div>
      {(title || subtitle || body || button) && (
        <div className="ds-mega-menu__card-body">
          {title && <h4 className="ds-mega-menu__card-title">{title}</h4>}
          {subtitle && (
            <p className="ds-mega-menu__card-subtitle">{subtitle}</p>
          )}
          {body && <p className="ds-mega-menu__card-text">{body}</p>}
          {button && (
            <div className="ds-mega-menu__card-actions">
              <Button
                variant={button.variant ?? 'plain'}
                icon={button.icon}
                iconRight={
                  !button.hideChevron ? (
                    <CaretRightIcon className="ds-mega-menu__chevron" />
                  ) : undefined
                }
                onClick={() => {
                  button.onClick?.()
                  if (button.href) window.open(button.href, '_self')
                }}
              >
                {button.label}
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  )

  return href ? (
    <a className="ds-mega-menu__card ds-mega-menu__card--linked" href={href}>
      {inner}
    </a>
  ) : (
    <div className="ds-mega-menu__card">{inner}</div>
  )
}

export const MegaMenu = ({
  title,
  columns,
  card,
  children,
  colorMode = 'light',
  ariaLabel,
  className,
  ...props
}: MegaMenuProps) => {
  const titleId = useId()

  const classes = [
    'ds-mega-menu',
    `ds-mega-menu--mode-${colorMode}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Resolve the polymorphic card (config object vs ReactNode).
  const cardNode = isCardConfig(card)
    ? renderCard(card as MegaMenuCardConfig)
    : (card as ReactNode)
  const hasCard = Boolean(cardNode)

  // Declarative columns take precedence over composition children so the
  // dynamic API stays the recommended path.
  const columnsNode =
    columns && columns.length > 0
      ? columns.map((col, i) => {
          const key = col.key ?? i
          return (
            <div key={key} className="ds-mega-menu__column">
              {col.title && (
                <div className="ds-mega-menu__category">{col.title}</div>
              )}
              <ul className="ds-mega-menu__links" role="list">
                {renderLinks(col.links, colorMode)}
              </ul>
            </div>
          )
        })
      : children

  const bodyClasses = [
    'ds-mega-menu__body',
    hasCard ? 'ds-mega-menu__body--has-card' : null,
  ]
    .filter(Boolean)
    .join(' ')

  // Prefer an explicit `ariaLabel`; otherwise reference the title via
  // `aria-labelledby` so the section is a properly-named region landmark.
  const landmarkProps =
    ariaLabel != null
      ? { 'aria-label': ariaLabel }
      : title != null
        ? { 'aria-labelledby': titleId }
        : { 'aria-label': 'Mega menu' }

  return (
    <section className={classes} {...landmarkProps} {...props}>
      {title && (
        <h3 className="ds-mega-menu__title" id={titleId}>
          {title}
        </h3>
      )}
      <div className={bodyClasses}>
        <div className="ds-mega-menu__columns">{columnsNode}</div>
        {hasCard && (
          <div className="ds-mega-menu__card-slot">{cardNode}</div>
        )}
      </div>
    </section>
  )
}

// -----------------------------------------------------------------------------
// MegaMenuColumn — composition API
//
// Wrap arbitrary `NavItem` children (or any React node) in this to render a
// single column with a category heading and consistent row dividers.
// -----------------------------------------------------------------------------

export interface MegaMenuColumnProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Uppercase category heading rendered above the rows. */
  title?: ReactNode
  /** Tier-1 NavItem children (one per row). */
  children?: ReactNode
}

export const MegaMenuColumn = ({
  title,
  children,
  className,
  ...props
}: MegaMenuColumnProps) => {
  const classes = ['ds-mega-menu__column', className].filter(Boolean).join(' ')

  // Wrap each child in a <li> so divider styling stays consistent with the
  // declarative API. Non-element children (strings, numbers) are also wrapped.
  const items = Children.map(children, (child, i) => (
    <li key={i} className="ds-mega-menu__link-item">
      {child}
    </li>
  ))

  return (
    <div className={classes} {...props}>
      {title && <div className="ds-mega-menu__category">{title}</div>}
      <ul className="ds-mega-menu__links" role="list">
        {items}
      </ul>
    </div>
  )
}

// -----------------------------------------------------------------------------
// MegaMenuCard — composition API
//
// Same shape as the declarative `card` prop. Pass it via `card={<MegaMenuCard
// ... />}` (or render it manually elsewhere) when you need to compose the card
// from JSX instead of plain data.
// -----------------------------------------------------------------------------

export const MegaMenuCard = (props: MegaMenuCardConfig) => <>{renderCard(props)}</>
