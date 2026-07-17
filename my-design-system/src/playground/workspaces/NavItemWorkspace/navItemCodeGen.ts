export interface NavItemConfig {
  // Content
  label: string
  // State
  state: 'default' | 'hover' | 'active'
  // Layout
  orientation: 'vertical' | 'horizontal'
  level: 'parent' | 'nested'
  hierarchy: 'tier-1' | 'tier-2'
  shape: 'pill' | 'line'
  // Theme
  colorMode: 'light' | 'dark'
  // Icon toggles
  showIconLeft: boolean
  showIconRight: boolean
  // Selection state
  selected: boolean
  // Color overrides
  textColor: string
  bgColor: string
  // Spacing overrides — '' means "use the design token"
  paddingX: string
  paddingY: string
  gap: string
  marginX: string
  marginY: string
  borderRadius: string
  // Border overrides
  borderWidth: string
  borderStyle: string
  borderColor: string
  // CSS targeting
  customClass: string
  customId: string
  customCss: string
}

export const defaultNavItemConfig: NavItemConfig = {
  label: 'Home',
  state: 'default',
  orientation: 'vertical',
  level: 'parent',
  hierarchy: 'tier-1',
  shape: 'pill',
  colorMode: 'light',
  showIconLeft: false,
  showIconRight: false,
  selected: false,
  textColor: '',
  bgColor: '',
  paddingX: '',
  paddingY: '',
  gap: '',
  marginX: '',
  marginY: '',
  borderRadius: '',
  borderWidth: '',
  borderStyle: '',
  borderColor: '',
  customClass: '',
  customId: '',
  customCss: '',
}

export function navItemCodeGen(config: NavItemConfig): string {
  const iconLeftCode = config.showIconLeft
    ? `\n    iconLeft={<HomeIcon />}`
    : ''

  const iconRightCode = config.showIconRight
    ? `\n    iconRight={<CaretRightIcon />}`
    : ''

  const selectedCode = config.selected ? `\n    selected={true}` : ''

  const stateCode = config.state !== 'default' ? `\n    state="${config.state}"` : ''

  const customClassCode = config.customClass ? `\n    className="${config.customClass}"` : ''
  const customIdCode = config.customId ? `\n    id="${config.customId}"` : ''

  const styleProps = []
  if (config.textColor) styleProps.push(`color: '${config.textColor}'`)
  if (config.bgColor) styleProps.push(`background: '${config.bgColor}'`)
  if (config.paddingX) styleProps.push(`paddingInline: '${config.paddingX}'`)
  if (config.paddingY) styleProps.push(`paddingBlock: '${config.paddingY}'`)
  if (config.marginX) styleProps.push(`marginInline: '${config.marginX}'`)
  if (config.marginY) styleProps.push(`marginBlock: '${config.marginY}'`)
  if (config.gap) styleProps.push(`gap: '${config.gap}'`)
  if (config.borderRadius) styleProps.push(`borderRadius: '${config.borderRadius}'`)
  if (config.borderWidth) {
    styleProps.push(`borderWidth: '${config.borderWidth}'`)
    styleProps.push(`borderStyle: '${config.borderStyle || 'solid'}'`)
    if (config.borderColor) styleProps.push(`borderColor: '${config.borderColor}'`)
  }

  const styleCode = styleProps.length > 0 ? `\n    style={{\n      ${styleProps.join(',\n      ')},\n    }}` : ''

  const imports = config.showIconLeft || config.showIconRight
    ? `import { NavItem } from '@/components/NavItem'\n${config.showIconLeft ? `${HOME_ICON_SNIPPET}\n` : ''}${config.showIconRight ? `${CARET_RIGHT_ICON_SNIPPET}\n` : ''}`
    : `import { NavItem } from '@/components/NavItem'`

  return `${imports}

export const NavItemExample = () => (
  <NavItem
    label="${config.label}"
    href="/"
    orientation="${config.orientation}"
    level="${config.level}"
    hierarchy="${config.hierarchy}"
    shape="${config.shape}"
    colorMode="${config.colorMode}"${selectedCode}${stateCode}${customClassCode}${customIdCode}${iconLeftCode}${iconRightCode}${styleCode}
  />
)`
}
