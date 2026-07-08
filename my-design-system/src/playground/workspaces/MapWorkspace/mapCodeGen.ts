export interface MapPinConfig {
  id: string
  x: number
  y: number
  label: string
  description: string
  country: string
  project: string
}

export interface MapConfig {
  mode: 'light' | 'dark'
  title: string
  description: string
  showFilters: boolean
  pins: MapPinConfig[]
  mapImage: string
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

export const DEFAULT_PINS: MapPinConfig[] = [
  { id: '1', x: 22, y: 42, label: 'Dubai Festival City', description: 'A vibrant waterfront destination featuring retail, dining, hotels and entertainment along Dubai Creek.', country: 'ae', project: 'festival' },
  { id: '2', x: 28, y: 55, label: 'Festival Plaza', description: 'Community-focused retail destination in Jebel Ali, Dubai.', country: 'ae', project: 'festival' },
  { id: '3', x: 35, y: 38, label: 'Al Badia', description: 'Mixed-use residential and lifestyle community in Dubai Festival City.', country: 'ae', project: 'badia' },
  { id: '4', x: 48, y: 50, label: 'Riyadh Hub', description: 'Flagship commercial hub anchoring our Saudi Arabia operations.', country: 'sa', project: 'hub' },
  { id: '5', x: 62, y: 45, label: 'Doha Site', description: 'Strategic logistics and retail site in the heart of Doha.', country: 'qa', project: 'hub' },
  { id: '6', x: 70, y: 60, label: 'Muscat Project', description: 'Residential development blending heritage architecture with modern living.', country: 'om', project: 'badia' },
  { id: '7', x: 55, y: 70, label: 'Salalah', description: 'Coastal festival and leisure destination on the Arabian Sea.', country: 'om', project: 'festival' },
  { id: '8', x: 80, y: 40, label: 'Karachi', description: 'Regional hub serving South Asian markets and partners.', country: 'pk', project: 'hub' },
]

export const defaultMapConfig: MapConfig = {
  mode: 'light',
  title: 'Our Global Reach',
  description: 'Al-Futtaim Group landmark projects include Dubai Festival City, Festival Plaza, and Al Badia, shaping vibrant communities with world-class infrastructure.',
  showFilters: true,
  pins: DEFAULT_PINS,
  mapImage: '',
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

export function mapCodeGen(cfg: MapConfig): string {
  const props: string[] = []

  if (cfg.mode !== 'light') props.push(`mode="${cfg.mode}"`)
  if (cfg.title !== 'Our Global Reach') props.push(`title="${cfg.title}"`)
  if (cfg.description) props.push(`description="${cfg.description}"`)
  if (!cfg.showFilters) props.push(`showFilters={false}`)
  if (cfg.mapImage) props.push(`mapImage="${cfg.mapImage}"`)
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
  lines.push(`import { Map } from '@company/design-system';`)
  lines.push(`import type { MapPin } from '@company/design-system';`)

  if (cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cfg.customCss.trim().split('\n').forEach(l => lines.push(`// ${l}`))
  }

  lines.push(``)
  lines.push(`const pins: MapPin[] = [`)
  const pins = cfg.pins || []
  pins.forEach((pin) => {
    const parts = [`id: '${pin.id}'`, `x: ${pin.x}`, `y: ${pin.y}`, `label: '${pin.label}'`]
    if (pin.description) parts.push(`description: '${pin.description}'`)
    if (pin.country) parts.push(`country: '${pin.country}'`)
    if (pin.project) parts.push(`project: '${pin.project}'`)
    lines.push(`  { ${parts.join(', ')} },`)
  })
  lines.push(`];`)
  lines.push(``)

  if (props.length <= 2) {
    lines.push(`<Map pins={pins} ${props.join(' ')} />`)
  } else {
    lines.push(`<Map`)
    lines.push(`  pins={pins}`)
    props.forEach((p) => lines.push(`  ${p}`))
    lines.push(`/>`)
  }

  return lines.join('\n')
}
