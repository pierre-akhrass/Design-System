import { useState, useEffect } from 'react'
import { Dialog } from '../../../components/Dialog'
import { Button } from '../../../components/Button'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { DialogControls } from './DialogControls'
import { dialogCodeGen, defaultDialogConfig } from './dialogCodeGen'
import type { DialogConfig } from './dialogCodeGen'
import './DialogWorkspace.scss'

// ── Toolbar icons ─────────────────────────────────────────────────────────────

const LaunchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="1.75" y="1.75" width="9.5" height="9.5" rx="1.25" />
    <path d="M4.5 6.5h4M6.5 4.5v4" strokeLinecap="round" />
  </svg>
)

const LinkIcon = ({ copied }: { copied: boolean }) =>
  copied ? (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polyline points="2,7 5,10 11,4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 7.5a2.5 2.5 0 0 0 3.54.04l2-2a2.5 2.5 0 0 0-3.54-3.54l-1.12 1.11" strokeLinecap="round" />
      <path d="M8 5.5a2.5 2.5 0 0 0-3.54-.04l-2 2a2.5 2.5 0 0 0 3.54 3.54l1.11-1.12" strokeLinecap="round" />
    </svg>
  )

// ── Config permalink ──────────────────────────────────────────────────────────

function encodeConfig(cfg: DialogConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) } catch { return '' }
}
function decodeConfig(hash: string): DialogConfig | null {
  try { return { ...defaultDialogConfig, ...JSON.parse(decodeURIComponent(atob(hash))) } as DialogConfig } catch { return null }
}
function readHashConfig(): DialogConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Static panel preview ──────────────────────────────────────────────────────
// A non-modal rendition of the dialog panel so token/color/spacing edits are
// always visible in the canvas. The real modal is launched via the toolbar.

const sizeWidth: Record<DialogConfig['size'], number> = {
  small: 400,
  medium: 480,
  large: 560,
}

const DialogPanelPreview = ({ config, theme }: { config: DialogConfig; theme: DialogConfig['theme'] }) => (
  <div className={`ds-dialog ds-dialog--${theme} ds-dialog--${config.placement} ds-dialog--${config.size} dialog-ws__static`} style={{ width: sizeWidth[config.size], maxWidth: '100%' }}>
    <div className="ds-dialog__panel" role="document">
      <div className="ds-dialog__header">
        <h2 className="ds-dialog__title">{config.title}</h2>
        {config.showClose && (
          <button type="button" className="ds-dialog__close" aria-label="Close">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        )}
      </div>
      <div className="ds-dialog__body">
        <p className="ds-dialog__text">{config.body}</p>
      </div>
      <div className={`ds-dialog__actions ds-dialog__actions--${config.actionsAlign}`}>
        <Button variant="plain">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </div>
  </div>
)

// ── DialogWorkspace ───────────────────────────────────────────────────────────

export const DialogWorkspace = () => {
  const [config, setConfig] = useState<DialogConfig>(() => readHashConfig() ?? defaultDialogConfig)
  const [open, setOpen] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useEffect(() => { window.location.hash = encodeConfig(config) }, [config])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  // Inject spacing/color overrides as a live <style> block targeting the
  // Dialog's internal panel (tokens live on __panel). Applies to both the
  // static preview and the launched modal.
  useEffect(() => {
    const rules: string[] = []
    if (config.bgColor) rules.push(`.ds-dialog__panel { background: ${config.bgColor} !important; }`)
    if (config.textColor) rules.push(`.ds-dialog__panel, .ds-dialog__title, .ds-dialog__text { color: ${config.textColor} !important; }`)
    if (config.borderRadius) rules.push(`.ds-dialog__panel { border-radius: ${config.borderRadius} !important; }`)
    if (config.padding) rules.push(`.ds-dialog__panel { padding: ${config.padding} !important; }`)
    if (config.gap) rules.push(`.ds-dialog__panel { gap: ${config.gap} !important; }`)
    if (config.borderWidth) {
      rules.push(`.ds-dialog__panel { border: ${config.borderWidth} ${config.borderStyle || 'solid'} ${config.borderColor || '#3fb0bc'} !important; }`)
    }
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-dialog-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor, config.borderRadius, config.padding, config.gap, config.borderWidth, config.borderStyle, config.borderColor])

  // Inject Custom CSS as a live <style> block so real selectors work
  useEffect(() => {
    if (!config.customCss.trim()) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-custom', '')
    el.textContent = config.customCss
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.customCss])

  return (
    <div className="dialog-ws">
      <div className="dialog-ws__main">
        <div className="dialog-ws__toolbar">
          <span className="dialog-ws__toolbar-label">Preview</span>
          <div className="dialog-ws__toolbar-actions">
            <button
              className="dialog-ws__toolbar-btn dialog-ws__toolbar-btn--active"
              onClick={() => setOpen(true)}
              type="button"
              title="Open the real native modal dialog"
            >
              <LaunchIcon />
              Launch real modal
            </button>
            <button
              className={`dialog-ws__toolbar-btn${linkCopied ? ' dialog-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        <div className="dialog-ws__canvas-area">
          <Canvas bg={config.theme === 'dark' ? 'dark' : 'light'} componentLabel="Dialog (panel preview)">
            <DialogPanelPreview config={config} theme={config.theme} />
          </Canvas>
        </div>

        <CodeBlock code={dialogCodeGen(config)} />
      </div>

      <ControlPanel>
        <DialogControls config={config} onChange={setConfig} />
      </ControlPanel>

      {/* The real native modal — launched from the toolbar */}
      <Dialog
        open={open}
        theme={config.theme}
        placement={config.placement}
        size={config.size}
        dismissOnScrimClick={config.dismissOnScrimClick}
        dismissOnEscape={config.dismissOnEscape}
        onClose={() => setOpen(false)}
        className={config.customClass || undefined}
        id={config.customId || undefined}
      >
        <Dialog.Header
          title={config.title}
          showClose={config.showClose}
          onClose={() => setOpen(false)}
        />
        <Dialog.Body>
          <Dialog.Text>{config.body}</Dialog.Text>
        </Dialog.Body>
        <Dialog.Actions align={config.actionsAlign}>
          <Button variant="plain" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </Dialog.Actions>
      </Dialog>
    </div>
  )
}
