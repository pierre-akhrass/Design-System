export interface TextAreaConfig {
  label: string
  value: string
  valueType: 'default' | 'placeholder'
  state: 'default' | 'placeholder' | 'focused' | 'disabled'
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

export const defaultTextAreaConfig: TextAreaConfig = {
  label: 'Label',
  value: 'Value',
  valueType: 'default',
  state: 'default',
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

export function textAreaCodeGen(cfg: TextAreaConfig): string {
  const props: string[] = []

  if (cfg.label) props.push(`label="${cfg.label}"`)
  if (cfg.value) props.push(`value="${cfg.value}"`)
  if (cfg.valueType !== 'default') props.push(`valueType="${cfg.valueType}"`)
  if (cfg.state !== 'default') props.push(`state="${cfg.state}"`)
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
  lines.push(`import { TextArea } from '@company/design-system';`)

  if (cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cfg.customCss.trim().split('\n').forEach(l => lines.push(`// ${l}`))
  }

  lines.push(``)

  if (props.length <= 2) {
    lines.push(`<TextArea ${props.join(' ')} />`)
  } else {
    lines.push(`<TextArea`)
    props.forEach((p) => lines.push(`  ${p}`))
    lines.push(`/>`)
  }

  return lines.join('\n')
}
