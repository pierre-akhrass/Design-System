export interface DropdownItemConfig {
  kind: 'item' | 'divider' | 'button'
  label: string
  variant?: string
}

export interface DropdownConfig {
  colorMode: 'light' | 'dark'
  items: DropdownItemConfig[]
  bgColor: string
  textColor: string
  fontFamily: string
  borderRadius: string
  paddingX: string
  paddingY: string
  gap: string
  borderWidth: string
  borderStyle: string
  borderColor: string
  customClass: string
  customId: string
  customCss: string
}

export const DEFAULT_ITEMS: DropdownItemConfig[] = [
  { kind: 'item', label: 'Tier 2 Label' },
  { kind: 'item', label: 'Tier 2 Label' },
  { kind: 'item', label: 'Tier 2 Label' },
  { kind: 'item', label: 'Tier 2 Label' },
  { kind: 'divider', label: '' },
  { kind: 'item', label: 'Tier 2 Label' },
  { kind: 'button', label: 'Button', variant: 'filled' },
]

export const defaultDropdownConfig: DropdownConfig = {
  colorMode: 'light',
  items: DEFAULT_ITEMS,
  bgColor: '',
  textColor: '',
  fontFamily: '',
  borderRadius: '',
  paddingX: '',
  paddingY: '',
  gap: '',
  borderWidth: '',
  borderStyle: '',
  borderColor: '',
  customClass: '',
  customId: '',
  customCss: '',
}

export function dropdownCodeGen(cfg: DropdownConfig): string {
  const props: string[] = []

  if (cfg.colorMode !== 'light') props.push(`colorMode="${cfg.colorMode}"`)
  if (cfg.customClass) props.push(`className="${cfg.customClass}"`)
  if (cfg.customId) props.push(`id="${cfg.customId}"`)

  const styleEntries: string[] = []
  if (cfg.bgColor) styleEntries.push(`background: "${cfg.bgColor}"`)
  if (cfg.textColor) styleEntries.push(`color: "${cfg.textColor}"`)
  if (cfg.fontFamily) styleEntries.push(`fontFamily: "${cfg.fontFamily}"`)
  if (cfg.borderRadius) styleEntries.push(`borderRadius: "${cfg.borderRadius}"`)
  if (cfg.paddingX) styleEntries.push(`paddingInline: "${cfg.paddingX}"`)
  if (cfg.paddingY) styleEntries.push(`paddingBlock: "${cfg.paddingY}"`)
  if (cfg.gap) styleEntries.push(`gap: "${cfg.gap}"`)
  if (cfg.borderWidth) {
    styleEntries.push(`borderWidth: "${cfg.borderWidth}"`)
    styleEntries.push(`borderStyle: "${cfg.borderStyle || 'solid'}"`)
    if (cfg.borderColor) styleEntries.push(`borderColor: "${cfg.borderColor}"`)
  }
  if (styleEntries.length > 0) {
    props.push(`style={{ ${styleEntries.join(', ')} }}`)
  }

  const lines: string[] = []
  lines.push(`import { Dropdown, DropdownDivider } from '@company/design-system';`)
  lines.push(`import { NavItem } from '@company/design-system';`)
  lines.push(`import { Button } from '@company/design-system';`)

  if (cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cfg.customCss.trim().split('\n').forEach(l => lines.push(`// ${l}`))
  }

  lines.push(``)

  const propStr = props.length > 0 ? ` ${props.join(' ')}` : ''
  lines.push(`<Dropdown${propStr}>`)

  for (const item of cfg.items) {
    if (item.kind === 'divider') {
      lines.push(`  <DropdownDivider />`)
    } else if (item.kind === 'button') {
      lines.push(`  <Button variant="${item.variant || 'filled'}">${item.label}</Button>`)
    } else {
      lines.push(`  <NavItem hierarchy="tier-2" label="${item.label}" />`)
    }
  }

  lines.push(`</Dropdown>`)

  return lines.join('\n')
}
