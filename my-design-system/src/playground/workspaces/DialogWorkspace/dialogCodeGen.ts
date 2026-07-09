export type DialogPlacement = 'center' | 'bottom-sheet'
export type DialogSize = 'small' | 'medium' | 'large'
export type DialogActionsAlign = 'start' | 'end' | 'between' | 'stacked'

export interface DialogConfig {
  // Content
  title: string
  body: string
  // Behaviour
  theme: 'light' | 'dark'
  placement: DialogPlacement
  size: DialogSize
  showClose: boolean
  dismissOnScrimClick: boolean
  dismissOnEscape: boolean
  actionsAlign: DialogActionsAlign
  // Color overrides
  bgColor: string
  textColor: string
  // Spacing overrides — '' means "use the design token"
  borderRadius: string // .ds-dialog__panel radius (default $radius-large = 16px)
  padding: string      // .ds-dialog__panel padding (default $space-400 = 32px)
  gap: string          // .ds-dialog__panel gap (default $space-200 = 16px)
  // Border overrides on the panel
  borderWidth: string
  borderStyle: string
  borderColor: string
  // CSS targeting
  customClass: string
  customId: string
  customCss: string
}

export const defaultDialogConfig: DialogConfig = {
  title: '🍪 We use cookies!',
  body: 'We have a friendly cookie policy on our website. This means that we use cookies to enhance your browsing experience and provide personalized content.',
  theme: 'light',
  placement: 'center',
  size: 'medium',
  showClose: true,
  dismissOnScrimClick: true,
  dismissOnEscape: true,
  actionsAlign: 'end',
  bgColor: '',
  textColor: '',
  borderRadius: '',
  padding: '',
  gap: '',
  borderWidth: '',
  borderStyle: '',
  borderColor: '',
  customClass: '',
  customId: '',
  customCss: '',
}

export function dialogCodeGen(cfg: DialogConfig): string {
  const props: string[] = []

  props.push(`open={open}`)
  if (cfg.theme !== 'light') props.push(`theme="${cfg.theme}"`)
  if (cfg.placement !== 'center') props.push(`placement="${cfg.placement}"`)
  if (cfg.size !== 'medium') props.push(`size="${cfg.size}"`)
  if (!cfg.dismissOnScrimClick) props.push(`dismissOnScrimClick={false}`)
  if (!cfg.dismissOnEscape) props.push(`dismissOnEscape={false}`)
  props.push(`onClose={() => setOpen(false)}`)
  if (cfg.customClass) props.push(`className="${cfg.customClass}"`)
  if (cfg.customId) props.push(`id="${cfg.customId}"`)

  // Overrides that live on the internal panel become a CSS snippet
  const cssRules: string[] = []
  if (cfg.bgColor) cssRules.push(`.ds-dialog__panel { background: ${cfg.bgColor}; }`)
  if (cfg.textColor) cssRules.push(`.ds-dialog__panel, .ds-dialog__title, .ds-dialog__text { color: ${cfg.textColor}; }`)
  if (cfg.borderRadius) cssRules.push(`.ds-dialog__panel { border-radius: ${cfg.borderRadius}; }`)
  if (cfg.padding) cssRules.push(`.ds-dialog__panel { padding: ${cfg.padding}; }`)
  if (cfg.gap) cssRules.push(`.ds-dialog__panel { gap: ${cfg.gap}; }`)
  if (cfg.borderWidth) {
    cssRules.push(`.ds-dialog__panel { border: ${cfg.borderWidth} ${cfg.borderStyle || 'solid'} ${cfg.borderColor || '#3fb0bc'}; }`)
  }

  const headerProps = [`title="${cfg.title}"`]
  if (cfg.showClose) headerProps.push(`onClose={() => setOpen(false)}`)
  else headerProps.push(`showClose={false}`)

  const lines: string[] = []
  lines.push(`import { Dialog, Button } from '@company/design-system';`)

  if (cssRules.length || cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cssRules.forEach((r) => lines.push(`// ${r}`))
    if (cfg.customCss.trim()) cfg.customCss.trim().split('\n').forEach((l) => lines.push(`// ${l}`))
  }

  lines.push(``)
  lines.push(`const [open, setOpen] = useState(true);`)
  lines.push(``)
  lines.push(`<Dialog`)
  props.forEach((p) => lines.push(`  ${p}`))
  lines.push(`>`)
  lines.push(`  <Dialog.Header ${headerProps.join(' ')} />`)
  lines.push(`  <Dialog.Body>`)
  lines.push(`    <Dialog.Text>${cfg.body}</Dialog.Text>`)
  lines.push(`  </Dialog.Body>`)
  lines.push(`  <Dialog.Actions${cfg.actionsAlign !== 'end' ? ` align="${cfg.actionsAlign}"` : ''}>`)
  lines.push(`    <Button variant="plain" onClick={() => setOpen(false)}>Cancel</Button>`)
  lines.push(`    <Button onClick={() => setOpen(false)}>Confirm</Button>`)
  lines.push(`  </Dialog.Actions>`)
  lines.push(`</Dialog>`)

  return lines.join('\n')
}
