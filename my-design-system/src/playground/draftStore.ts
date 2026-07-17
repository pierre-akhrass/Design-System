/**
 * Draft store
 * ------------------------------------------------------------------
 * Lets the playground persist a workspace's *configuration* locally without
 * publishing it. Drafts live under a single localStorage key, separate from the
 * published theme (`ds-published-theme`), so saving a draft never affects the
 * live demo page or other users.
 *
 *   saveDraft('tag', config)   // persist while iterating
 *   loadDraft('tag')           // restore on reopen
 *   clearDraft('tag')          // discard
 */

const DRAFTS_KEY = 'ds-playground-drafts'

type DraftMap = Record<string, unknown>

function readAll(): DraftMap {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(DRAFTS_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? (parsed as DraftMap) : {}
  } catch {
    return {}
  }
}

function writeAll(map: DraftMap): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(DRAFTS_KEY, JSON.stringify(map))
  } catch {
    /* storage full or blocked — ignore */
  }
}

/** Persist a component's config as a draft (does NOT publish). */
export function saveDraft<T>(componentId: string, config: T): void {
  const all = readAll()
  all[componentId] = config
  writeAll(all)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('ds-draft-changed', { detail: { componentId } }),
    )
  }
}

/** Read a component's draft config (null when none saved). */
export function loadDraft<T>(componentId: string): T | null {
  const all = readAll()
  return (all[componentId] as T) ?? null
}

/** True when a draft exists for this component. */
export function hasDraft(componentId: string): boolean {
  return componentId in readAll()
}

/** Remove a component's draft. */
export function clearDraft(componentId: string): void {
  const all = readAll()
  if (componentId in all) {
    delete all[componentId]
    writeAll(all)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('ds-draft-changed', { detail: { componentId } }),
      )
    }
  }
}
