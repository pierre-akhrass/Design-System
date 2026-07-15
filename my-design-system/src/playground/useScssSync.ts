import { useEffect } from 'react'
import { readScssFromSource, canWriteScss } from './writeScssToSource'

/**
 * useScssSync
 * ------------------------------------------------------------------
 * Two-way colour sync for a playground workspace. On mount (and whenever the
 * window regains focus) it reads the component's current colour values from its
 * `.scss` source via the theme server and merges them into the workspace config.
 *
 * This is the reverse direction of the publish/write-scss flow: editing a colour
 * directly in the `.scss` file is reflected back in the playground UI.
 *
 * It only merges fields the SCSS actually defines, and never overrides a value
 * the user is actively editing beyond the initial hydrate + focus refresh.
 *
 *   useScssSync('card', setConfig)
 */
export function useScssSync<T>(
  componentId: string,
  setConfig: (updater: (prev: T) => T) => void,
): void {
  useEffect(() => {
    if (!canWriteScss(componentId)) return
    let cancelled = false

    const pull = async () => {
      const result = await readScssFromSource(componentId)
      if (cancelled || !result.ok) return
      const incoming = result.config
      if (!incoming || Object.keys(incoming).length === 0) return
      setConfig((prev) => {
        // Only apply fields whose SCSS value actually differs, so we don't
        // clobber unrelated state or cause needless re-renders.
        const prevRecord = prev as Record<string, unknown>
        let changed = false
        const next: Record<string, unknown> = { ...prevRecord }
        for (const [field, value] of Object.entries(incoming)) {
          if (prevRecord[field] !== value) {
            next[field] = value
            changed = true
          }
        }
        return changed ? (next as T) : prev
      })
    }

    // Initial hydrate, then refresh whenever the tab is refocused (e.g. after
    // the user edits the .scss in their editor and switches back).
    void pull()
    const onFocus = () => void pull()
    window.addEventListener('focus', onFocus)
    return () => {
      cancelled = true
      window.removeEventListener('focus', onFocus)
    }
  }, [componentId, setConfig])
}
