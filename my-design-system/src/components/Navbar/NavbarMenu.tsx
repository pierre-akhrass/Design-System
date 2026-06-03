import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { NavItem, type NavItemProps } from '../NavItem'
import { Dropdown, DropdownDivider, type DropdownColorMode } from '../Dropdown/Dropdown'
import { Button, type ButtonVariant } from '../Button'

/**
 * A row inside a Navbar dropdown. Mirrors the Dropdown component's
 * full set of variants so a Navbar link-dropdown can contain anything
 * a regular Dropdown can:
 *  - { kind: 'item', ... }     -> NavItem (link / tier-2 by default)
 *  - { kind: 'divider' }       -> DropdownDivider
 *  - { kind: 'button', ... }   -> Button (filled | outlined | plain)
 *  - { kind: 'custom', node }  -> any ReactNode escape hatch
 */
export type NavbarMenuRow =
  | {
      kind: 'item'
      label: ReactNode
      href?: string
      iconLeft?: ReactNode
      iconRight?: ReactNode
      selected?: boolean
      hierarchy?: NavItemProps['hierarchy']
      onClick?: NavItemProps['onClick']
    }
  | { kind: 'divider' }
  | {
      kind: 'button'
      label: ReactNode
      variant?: ButtonVariant
      icon?: ReactNode
      iconOnly?: boolean
      onClick?: () => void
    }
  | { kind: 'custom'; node: ReactNode }

export interface NavbarMenuProps {
  label: ReactNode
  iconLeft?: ReactNode
  iconRight?: ReactNode
  selected?: boolean
  colorMode?: NavItemProps['colorMode']
  dropdownColorMode?: DropdownColorMode
  /** Declarative rows — supports every Dropdown variant. */
  rows?: NavbarMenuRow[]
  /** Escape hatch: raw children rendered inside the Dropdown. */
  children?: ReactNode
  openOnHover?: boolean
  triggerProps?: Partial<NavItemProps>
}

const renderRow = (
  row: NavbarMenuRow,
  index: number,
  colorMode: DropdownColorMode,
) => {
  if (row.kind === 'divider') return <DropdownDivider key={`divider-${index}`} />
  if (row.kind === 'custom') return <span key={`custom-${index}`}>{row.node}</span>
  if (row.kind === 'button') {
    return (
      <Button
        key={`button-${index}`}
        variant={row.variant ?? 'filled'}
        icon={row.icon}
        iconOnly={row.iconOnly}
        onClick={row.onClick}
      >
        {row.label}
      </Button>
    )
  }
  return (
    <NavItem
      key={`item-${index}`}
      orientation="vertical"
      hierarchy={row.hierarchy ?? 'tier-2'}
      colorMode={colorMode}
      label={row.label}
      href={row.href ?? '#'}
      iconLeft={row.iconLeft}
      iconRight={row.iconRight}
      selected={row.selected}
      onClick={row.onClick}
    />
  )
}

/**
 * A Navbar entry that opens a Dropdown panel. Use as a drop-in replacement
 * for a `NavItem` inside `<Navbar>` when the link needs sub-links.
 *
 * Pass `rows` for a declarative API that exposes every Dropdown variant
 * (items, dividers, buttons, custom nodes). Or pass `children` for full
 * manual control.
 */
export const NavbarMenu = ({
  label,
  iconLeft,
  iconRight,
  selected,
  colorMode = 'dark',
  dropdownColorMode,
  rows,
  children,
  openOnHover = true,
  triggerProps,
}: NavbarMenuProps) => {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const menuId = useId()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  const handleMouseEnter = () => openOnHover && setOpen(true)
  const handleMouseLeave = () => openOnHover && setOpen(false)

  const panelColorMode: DropdownColorMode =
    dropdownColorMode ?? (colorMode as DropdownColorMode)

  return (
    <div
      ref={rootRef}
      className="ds-navbar__menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavItem
        {...triggerProps}
        orientation="horizontal"
        colorMode={colorMode}
        label={label}
        iconLeft={iconLeft}
        iconRight={iconRight}
        selected={selected}
        href={triggerProps?.href ?? '#'}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={(e) => {
          e.preventDefault()
          setOpen((v) => !v)
          triggerProps?.onClick?.(e)
        }}
      />
      {open && (
        <div className="ds-navbar__menu-panel" id={menuId}>
          <Dropdown colorMode={panelColorMode}>
            {rows ? rows.map((row, i) => renderRow(row, i, panelColorMode)) : children}
          </Dropdown>
        </div>
      )}
    </div>
  )
}
