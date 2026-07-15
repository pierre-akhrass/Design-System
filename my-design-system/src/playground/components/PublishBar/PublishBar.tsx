import { useEffect, useState } from 'react'
import {
  publishComponentOverride,
  clearComponentOverride,
  loadPublishedTheme,
  publishThemeToServer,
  hasPublishedThemeEndpoint,
  emptyPublishedTheme,
  type ComponentOverride,
} from '../../../theme/publishedTheme'
import { saveDraft, hasDraft, clearDraft } from '../../draftStore'
import { writeScssToSource, canWriteScss } from '../../writeScssToSource'
import './PublishBar.scss'

interface PublishBarProps {
  /** Stable component id, e.g. 'card' */
  componentId: string
  /** Human label, e.g. 'Card' */
  componentLabel: string
  /**
   * The CSS-variable overrides this workspace wants to publish.
   * Empty object → nothing to publish (Publish disabled).
   */
  override: ComponentOverride
  /**
   * The raw workspace config to persist when saving a draft. Drafts are stored
   * separately from the published theme, so saving never affects live pages.
   */
  draftConfig?: unknown
}

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <polyline points="2,7 5,10 11,3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const RocketIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.9-.9.9-2.3 0-3.2a2.2 2.2 0 0 0-3 .2z" />
    <path d="M9 12a12 12 0 0 1 8-8c2 0 3 1 3 3a12 12 0 0 1-8 8l-3-3z" />
    <circle cx="15" cy="9" r="1.4" />
  </svg>
)

const SaveIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" strokeLinejoin="round" />
    <path d="M8 4v5h6V4M8 21v-6h8v6" strokeLinejoin="round" />
  </svg>
)

const TrashIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const varCount = (o: ComponentOverride) =>
  Object.keys(o.vars).length +
  (o.css && o.css.trim() ? 1 : 0) +
  (o.props ? Object.keys(o.props).length : 0)

/**
 * Save & Publish bar.
 * • "Save draft" persists the overrides locally (localStorage + live <style>)
 *   without pushing to the backend — useful while iterating.
 * • "Publish" persists locally AND, when a backend endpoint is configured via
 *   configurePublishedThemeEndpoint(), pushes to the server so every user's
 *   frontend picks up the change. Without an endpoint it behaves per-browser.
 * • "Unpublish" removes this component's published overrides.
 */
export const PublishBar = ({ componentId, componentLabel, override, draftConfig }: PublishBarProps) => {
  const [isPublished, setIsPublished] = useState(false)
  const [justPublished, setJustPublished] = useState(false)
  const [justSaved, setJustSaved] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [savedDraft, setSavedDraft] = useState(false)
  const [writingScss, setWritingScss] = useState(false)
  const [wroteScss, setWroteScss] = useState(false)
  const remote = hasPublishedThemeEndpoint()
  const supportsScss = canWriteScss(componentId)

  // Reflect whether this component currently has published overrides.
  useEffect(() => {
    const sync = () => {
      const theme = loadPublishedTheme()
      setIsPublished(Boolean(theme?.components[componentId]))
    }
    sync()
    const syncDraft = () => setSavedDraft(hasDraft(componentId))
    syncDraft()
    window.addEventListener('ds-theme-published', sync as EventListener)
    window.addEventListener('ds-draft-changed', syncDraft as EventListener)
    return () => {
      window.removeEventListener('ds-theme-published', sync as EventListener)
      window.removeEventListener('ds-draft-changed', syncDraft as EventListener)
    }
  }, [componentId])

  const count = varCount(override)
  const hasChanges = count > 0

  /**
   * Persist the workspace config as a *draft* — saved locally, not published.
   * The live demo page and other users are unaffected until you hit Publish.
   */
  const handleSaveDraft = () => {
    if (draftConfig !== undefined) saveDraft(componentId, draftConfig)
    setJustSaved(true)
    setTimeout(() => setJustSaved(false), 2000)
  }

  /** Discard the saved draft for this component. */
  const handleDiscardDraft = () => {
    clearDraft(componentId)
  }

  /**
   * Write the current colour choices into the component's .scss SOURCE file on
   * disk via the theme server. This is a permanent code change (with a .autobak
   * backup), unlike Publish which is a runtime override.
   */
  const handleWriteScss = async () => {
    if (draftConfig === undefined) return
    setWritingScss(true)
    const result = await writeScssToSource(
      componentId,
      draftConfig as Record<string, unknown>,
    )
    setWritingScss(false)
    if (result.ok) {
      setWroteScss(true)
      setTimeout(() => setWroteScss(false), 2200)
      if (result.missing.length) {
        window.alert(
          `Updated ${result.file}.\nWrote: ${result.updated.join(', ')}\nNot found in source (skipped): ${result.missing.join(', ')}`,
        )
      }
    } else {
      window.alert(result.error || 'Could not write to the SCSS source. Is the theme server running?')
    }
  }

  /** Persist locally, then push to backend when configured. */
  const handlePublish = async () => {
    const nextTheme = publishComponentOverride(componentId, override)
    if (remote) {
      setPublishing(true)
      const ok = await publishThemeToServer(nextTheme)
      setPublishing(false)
      if (!ok) {
        window.alert('Saved locally, but publishing to the server failed. Check the endpoint and try again.')
        return
      }
    }
    setJustPublished(true)
    setTimeout(() => setJustPublished(false), 2200)
  }

  const handleUnpublish = async () => {
    const nextTheme = clearComponentOverride(componentId)
    if (remote) {
      await publishThemeToServer(nextTheme ?? emptyPublishedTheme())
    }
  }

  return (
    <div className="pg-publish">
      <div className="pg-publish__info">
        <span className={`pg-publish__dot${isPublished ? ' pg-publish__dot--live' : ''}`} aria-hidden="true" />
        <span className="pg-publish__status">
          {isPublished ? (
            <>
              <strong>{componentLabel}</strong> is published — live on all pages
              {remote ? '' : ' in this browser'}
            </>
          ) : hasChanges ? (
            <>
              {count} override{count === 1 ? '' : 's'} ready to publish
            </>
          ) : (
            <>No overrides yet — tweak colours or spacing to publish</>
          )}
        </span>
        {savedDraft && (
          <span className="pg-publish__draft-tag" title="A draft is saved locally for this component">
            draft saved
          </span>
        )}
      </div>

      <div className="pg-publish__actions">
        {isPublished && (
          <button
            className="pg-publish__btn pg-publish__btn--ghost"
            onClick={handleUnpublish}
            type="button"
            title="Remove published overrides for this component"
          >
            <TrashIcon />
            Unpublish
          </button>
        )}
        {supportsScss && (
          <button
            className={`pg-publish__btn pg-publish__btn--subtle${wroteScss ? ' pg-publish__btn--done' : ''}`}
            onClick={handleWriteScss}
            type="button"
            disabled={!hasChanges || writingScss}
            title="Write the chosen colours into the component's .scss source file on disk (requires the theme server)"
          >
            {wroteScss ? (
              <>
                <CheckIcon />
                Written
              </>
            ) : writingScss ? (
              <>
                <SaveIcon />
                Writing…
              </>
            ) : (
              <>
                <SaveIcon />
                Write to source
              </>
            )}
          </button>
        )}
        {savedDraft && (
          <button
            className="pg-publish__btn pg-publish__btn--ghost"
            onClick={handleDiscardDraft}
            type="button"
            title="Discard the locally saved draft"
          >
            <TrashIcon />
            Discard draft
          </button>
        )}
        <button
          className={`pg-publish__btn pg-publish__btn--subtle${justSaved ? ' pg-publish__btn--done' : ''}`}
          onClick={handleSaveDraft}
          type="button"
          disabled={!hasChanges}
          title="Save these overrides locally without publishing to the server"
        >
          {justSaved ? (
            <>
              <CheckIcon />
              Saved
            </>
          ) : (
            <>
              <SaveIcon />
              Save draft
            </>
          )}
        </button>
        <button
          className={`pg-publish__btn pg-publish__btn--primary${justPublished ? ' pg-publish__btn--done' : ''}`}
          onClick={handlePublish}
          type="button"
          disabled={!hasChanges || publishing}
          title={
            hasChanges
              ? remote
                ? 'Publish these overrides to every user via the backend'
                : 'Publish these overrides to every page using the design system'
              : 'Change a colour or spacing value first'
          }
        >
          {justPublished ? (
            <>
              <CheckIcon />
              Published!
            </>
          ) : publishing ? (
            <>
              <RocketIcon />
              Publishing…
            </>
          ) : (
            <>
              <RocketIcon />
              {isPublished ? 'Update published' : 'Save & Publish'}
            </>
          )}
        </button>
      </div>
    </div>
  )
}
