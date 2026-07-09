export interface CardConfig {
  // Content
  title: string
  text: string
  // Behaviour
  theme: 'light' | 'dark'
  orientation: 'vertical' | 'horizontal'
  interactive: boolean
  // Composition toggles
  showMedia: boolean
  mediaShape: 'banner' | 'portrait' | 'circle' | 'square'
  showActions: boolean
  // Color overrides
  bgColor: string
  textColor: string
  // Spacing overrides — '' means "use the design token"
  borderRadius: string
  paddingX: string
  paddingY: string
  gap: string
  // Border overrides — '' on borderWidth means no border override
  borderWidth: string
  borderStyle: string
  borderColor: string
  // CSS targeting
  customClass: string
  customId: string
  customCss: string
}

export const defaultCardConfig: CardConfig = {
  title: 'Title of the card',
  text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  theme: 'light',
  orientation: 'vertical',
  interactive: false,
  showMedia: false,
  mediaShape: 'banner',
  showActions: true,
  bgColor: '',
  textColor: '',
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

export function cardCodeGen(cfg: CardConfig): string {
  const cardProps: string[] = []

  if (cfg.theme !== 'light') cardProps.push(`theme="${cfg.theme}"`)
  if (cfg.orientation !== 'vertical') cardProps.push(`orientation="${cfg.orientation}"`)
  if (cfg.interactive) cardProps.push(`interactive`)
  if (cfg.customClass) cardProps.push(`className="${cfg.customClass}"`)
  if (cfg.customId) cardProps.push(`id="${cfg.customId}"`)

  // Inline style object from spacing + border overrides
  const styleEntries: string[] = []
  if (cfg.bgColor) styleEntries.push(`background: "${cfg.bgColor}"`)
  if (cfg.borderRadius) styleEntries.push(`borderRadius: "${cfg.borderRadius}"`)
  if (cfg.borderWidth) {
    styleEntries.push(`borderWidth: "${cfg.borderWidth}"`)
    styleEntries.push(`borderStyle: "${cfg.borderStyle || 'solid'}"`)
    if (cfg.borderColor) styleEntries.push(`borderColor: "${cfg.borderColor}"`)
  }
  if (styleEntries.length > 0) {
    cardProps.push(`style={{ ${styleEntries.join(', ')} }}`)
  }

  // Body inline style (spacing tokens live on the body element)
  const bodyStyle: string[] = []
  if (cfg.paddingX) bodyStyle.push(`paddingInline: "${cfg.paddingX}"`)
  if (cfg.paddingY) bodyStyle.push(`paddingBlock: "${cfg.paddingY}"`)
  if (cfg.gap) bodyStyle.push(`gap: "${cfg.gap}"`)
  if (cfg.textColor) bodyStyle.push(`color: "${cfg.textColor}"`)
  const bodyStyleStr = bodyStyle.length ? ` style={{ ${bodyStyle.join(', ')} }}` : ''

  const lines: string[] = []
  lines.push(`import { Card } from '@company/design-system';`)

  if (cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cfg.customCss.trim().split('\n').forEach((l) => lines.push(`// ${l}`))
  }

  lines.push(``)

  const openTag = cardProps.length === 0 ? `<Card>` : `<Card ${cardProps.join(' ')}>`
  lines.push(openTag)
  if (cfg.showMedia) {
    lines.push(`  <Card.Media shape="${cfg.mediaShape}"${cfg.orientation === 'horizontal' ? ' inset' : ''} />`)
  }
  lines.push(`  <Card.Body${bodyStyleStr}>`)
  lines.push(`    <Card.Title>${cfg.title}</Card.Title>`)
  lines.push(`    <Card.Text>${cfg.text}</Card.Text>`)
  if (cfg.showActions) {
    lines.push(`    <Card.Actions>`)
    lines.push(`      <Button variant="plain">Cancel</Button>`)
    lines.push(`      <Button>Confirm</Button>`)
    lines.push(`    </Card.Actions>`)
  }
  lines.push(`  </Card.Body>`)
  lines.push(`</Card>`)

  return lines.join('\n')
}
