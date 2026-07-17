import { useEffect, useMemo, useState } from 'react'
import {
  loadPublishedTheme,
  clearComponentOverride,
  resetPublishedTheme,
  publishedThemeToCss,
  hasPublishedThemeEndpoint,
  publishThemeToServer,
  emptyPublishedTheme,
  type PublishedTheme,
  type ComponentOverride,
} from '../../../theme/publishedTheme'
import './PublishManager.scss'

// ── Icons ───────────────────────────────────────────────────────────────────

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

const TrashIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CopyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
)

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <polyline points="2,7 5,10 11,3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Turn a component id like 'social-media' into 'Social Media'. */
function prettyLabel(id: string): string {
  return id
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/** Human summary of what an override changes. */
function summarize(override: ComponentOverride): string {
  const parts: string[] = []
  const varCount = Object.keys(override.vars).length
  if (varCount) parts.push(`${varCount} variable${varCount === 1 ? '' : 's'}`)
  if (override.css && override.css.trim()) {
    const ruleCount = override.css.split('}').filter((s) => s.includes('{')).length
    if (ruleCount) parts.push(`${ruleCount} rule${ruleCount === 1 ? '' : 's'}`)
  }
  return parts.join(' · ') || 'no changes'
}

interface PublishManagerProps {
  open: boolean
  onClose: () => void
}

export const PublishManager = ({ open, onClose }: PublishManagerProps) => {
  const [theme, setTheme] = useState<PublishedTheme | null>(() => loadPublishedTheme())
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [copied, setCopied] = useState(false)
  const remote = hasPublishedThemeEndpoint()

  // Keep the panel in sync whenever something publishes/unpublishes.
  useEffect(() => {
    const sync = () => setTheme(loadPublishedTheme())
    window.addEventListener('ds-theme-published', sync as EventListener)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('ds-theme-published', sync as EventListener)
      window.removeEventListener('storage', sync)
    }
  }, [])

  // Refresh when the drawer opens (in case it changed while closed).
  useEffect(() => {
    if (open) setTheme(loadPublishedTheme())
  }, [open])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const entries = useMemo(
    () => (theme ? Object.entries(theme.components) : []),
    [theme],
  )
  const css = useMemo(() => (theme ? publishedThemeToCss(theme) : ''), [theme])

  const handleUnpublish = async (id: string) => {
    const next = clearComponentOverride(id)
    setTheme(next)
    if (remote) await publishThemeToServer(next ?? emptyPublishedTheme())
  }

  const handleResetAll = async () => {
    if (!window.confirm('Remove ALL published overrides? This affects every page using the design system.')) return
    resetPublishedTheme()
    setTheme(null)
    if (remote) await publishThemeToServer(emptyPublishedTheme())
  }

  const handleCopyCss = () => {
    navigator.clipboard.writeText(css).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <div
        className={`pg-pubman__scrim${open ? ' pg-pubman__scrim--open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`pg-pubman${open ? ' pg-pubman--open' : ''}`}
        role="dialog"
        aria-label="Published overrides"
        aria-hidden={!open}
      >
        <header className="pg-pubman__head">
          <div className="pg-pubman__head-text">
            <h2 className="pg-pubman__title">Published overrides</h2>
            <p className="pg-pubman__subtitle">
              {remote
                ? 'Live for all users via the backend'
                : 'Live on every page in this browser'}
            </p>
          </div>
          <button className="pg-pubman__close" onClick={onClose} type="button" aria-label="Close">
            <CloseIcon />
          </button>
        </header>

        <div className="pg-pubman__body">
          {entries.length === 0 ? (
            <div className="pg-pubman__empty">
              <div className="pg-pubman__empty-icon" aria-hidden="true">🎨</div>
              <p className="pg-pubman__empty-title">Nothing published yet</p>
              <p className="pg-pubman__empty-text">
                Tweak a colour or spacing in any workspace, then hit
                <strong> Save &amp; Publish</strong> to see it here.
              </p>
            </div>
          ) : (
            <>
              <div className="pg-pubman__meta">
                <span>
                  <strong>{entries.length}</strong> component{entries.length === 1 ? '' : 's'} published
                </span>
                {theme?.updatedAt && (
                  <span className="pg-pubman__meta-time">
                    updated {new Date(theme.updatedAt).toLocaleString()}
                  </span>
                )}
              </div>

              <ul className="pg-pubman__list">
                {entries.map(([id, override]) => {
                  const isOpen = expanded[id]
                  const componentCss = publishedThemeToCss({
                    version: 1,
                    updatedAt: '',
                    components: { [id]: override },
                  })
                  return (
                    <li key={id} className="pg-pubman__item">
                      <div className="pg-pubman__item-row">
                        <button
                          className="pg-pubman__item-main"
                          onClick={() => setExpanded((e) => ({ ...e, [id]: !e[id] }))}
                          type="button"
                          aria-expanded={isOpen}
                        >
                          <span className={`pg-pubman__chevron${isOpen ? ' pg-pubman__chevron--open' : ''}`} aria-hidden="true">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                              <polyline points="4,2 8,6 4,10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="pg-pubman__item-name">{prettyLabel(id)}</span>
                          <span className="pg-pubman__item-summary">{summarize(override)}</span>
                        </button>
                        <button
                          className="pg-pubman__item-remove"
                          onClick={() => handleUnpublish(id)}
                          type="button"
                          title={`Unpublish ${prettyLabel(id)}`}
                        >
                          <TrashIcon />
                        </button>
                      </div>
                      {isOpen && (
                        <pre className="pg-pubman__code">{componentCss}</pre>
                      )}
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </div>

        {entries.length > 0 && (
          <footer className="pg-pubman__foot">
            <button
              className={`pg-pubman__foot-btn${copied ? ' pg-pubman__foot-btn--done' : ''}`}
              onClick={handleCopyCss}
              type="button"
              title="Copy the full published CSS"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? 'Copied!' : 'Copy CSS'}
            </button>
            <button
              className="pg-pubman__foot-btn pg-pubman__foot-btn--danger"
              onClick={handleResetAll}
              type="button"
              title="Remove every published override"
            >
              <TrashIcon />
              Reset all
            </button>
          </footer>
        )}
      </aside>
    </>
  )
}
