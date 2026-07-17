/**
 * Published theme runtime
 * ------------------------------------------------------------------
 * The playground lets designers tweak component tokens (e.g. a Card's
 * background colour) and "Publish" them. Publishing persists a set of
 * CSS-custom-property overrides that are injected as a single global
 * <style> block. Because every component is built on CSS variables
 * (e.g. `.ds-card { --ds-card-bg: ... }`), those overrides cascade to
 * every instance of that component on any real frontend page that
 * imports this design system.
 *
 * Usage in a consuming app (automatic):
 *   import '@company/design-system'  // applyPublishedTheme() runs on import
 *
 * Usage (manual / SSR hydration):
 *   import { applyPublishedTheme } from '@company/design-system'
 *   applyPublishedTheme()
 */

export interface ComponentOverride {
  /** CSS selector the overrides target, e.g. '.ds-card' */
  selector: string
  /** CSS custom properties to override, e.g. { '--ds-card-bg': '#fff' } */
  vars: Record<string, string>
  /** Optional freeform CSS appended verbatim (already scoped by the author) */
  css?: string
  /**
   * Optional structural props/content published from the workspace, e.g.
   * { slideCount: 4 } for the Carousel or { platform: 'facebook' } for a
   * social post. Consuming pages read these to render non-CSS changes.
   */
  props?: Record<string, unknown>
}

export interface PublishedTheme {
  /** Schema version so we can migrate safely later */
  version: number
  /** ISO timestamp of the last publish */
  updatedAt: string
  /** Keyed by component id, e.g. 'card', 'tag', 'dialog' */
  components: Record<string, ComponentOverride>
}

export const PUBLISHED_THEME_VERSION = 1
const STORAGE_KEY = 'ds-published-theme'
const STYLE_EL_ID = 'ds-published-theme-style'

export const emptyPublishedTheme = (): PublishedTheme => ({
  version: PUBLISHED_THEME_VERSION,
  updatedAt: new Date().toISOString(),
  components: {},
})

// ── Persistence ────────────────────────────────────────────────────────────────

/** Read the currently published theme from localStorage (null when unset). */
export function loadPublishedTheme(): PublishedTheme | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as PublishedTheme
    if (!parsed || typeof parsed !== 'object' || !parsed.components) return null
    return parsed
  } catch {
    return null
  }
}

/** Persist a theme to localStorage and re-apply it to the document. */
export function savePublishedTheme(theme: PublishedTheme): void {
  if (typeof window === 'undefined') return
  const next: PublishedTheme = {
    ...theme,
    version: PUBLISHED_THEME_VERSION,
    updatedAt: new Date().toISOString(),
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    /* storage full or blocked — still apply in-memory below */
  }
  applyPublishedTheme(next)
  // Notify other tabs / listeners in the same tab
  window.dispatchEvent(new CustomEvent('ds-theme-published', { detail: next }))
}

/** Merge one component's override into the published theme and save it. */
export function publishComponentOverride(
  componentId: string,
  override: ComponentOverride,
): PublishedTheme {
  const current = loadPublishedTheme() ?? emptyPublishedTheme()
  const hasContent =
    Object.keys(override.vars).length > 0 ||
    (override.css && override.css.trim()) ||
    (override.props && Object.keys(override.props).length > 0)

  const components = { ...current.components }
  if (hasContent) {
    components[componentId] = override
  } else {
    delete components[componentId]
  }

  const next: PublishedTheme = { ...current, components }
  savePublishedTheme(next)
  return next
}

/** Remove a single component's published overrides. */
export function clearComponentOverride(componentId: string): PublishedTheme {
  const current = loadPublishedTheme() ?? emptyPublishedTheme()
  const components = { ...current.components }
  delete components[componentId]
  const next: PublishedTheme = { ...current, components }
  savePublishedTheme(next)
  return next
}

/** Wipe all published overrides. */
export function resetPublishedTheme(): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
  const el = document.getElementById(STYLE_EL_ID)
  if (el) el.remove()
  window.dispatchEvent(new CustomEvent('ds-theme-published', { detail: null }))
}

// ── Rendering ───────────────────────────────────────────────────────────────────

/** Serialise a theme to a CSS string of variable overrides + freeform CSS. */
export function publishedThemeToCss(theme: PublishedTheme): string {
  const blocks: string[] = []
  for (const [id, override] of Object.entries(theme.components)) {
    const decls = Object.entries(override.vars)
      .map(([prop, val]) => `  ${prop}: ${val};`)
      .join('\n')
    if (decls) {
      blocks.push(`/* ${id} */\n${override.selector} {\n${decls}\n}`)
    }
    if (override.css && override.css.trim()) {
      blocks.push(`/* ${id} · custom */\n${override.css.trim()}`)
    }
  }
  return blocks.join('\n\n')
}

/**
 * Inject (or refresh) the global <style> block for the published theme.
 * Pass a theme to apply it directly, or omit to load from storage.
 */
export function applyPublishedTheme(theme?: PublishedTheme | null): void {
  if (typeof document === 'undefined') return
  const resolved = theme ?? loadPublishedTheme()

  let el = document.getElementById(STYLE_EL_ID) as HTMLStyleElement | null

  if (!resolved || Object.keys(resolved.components).length === 0) {
    if (el) el.remove()
    return
  }

  if (!el) {
    el = document.createElement('style')
    el.id = STYLE_EL_ID
    el.setAttribute('data-ds-published', '')
    document.head.appendChild(el)
  }
  el.textContent = publishedThemeToCss(resolved)
}

// ── Remote sync (backend-ready) ──────────────────────────────────────────────────
// By default the theme lives in localStorage (per-browser). To share published
// overrides across all users, point these helpers at a backend endpoint that
// stores and returns a PublishedTheme JSON document.
//
//   Server contract (suggested):
//     GET  {endpoint}  ->  200 { version, updatedAt, components }   (or 404)
//     PUT  {endpoint}  <-  PublishedTheme JSON  ->  200
//
//   Wire it up once at app start:
//     configurePublishedThemeEndpoint('/api/design-theme')
//     await hydratePublishedTheme()   // fetch + apply on boot

let remoteEndpoint: string | null = null
let remoteHeaders: Record<string, string> = {}

/** Set the backend URL used by fetch/publishToServer. Pass null to disable. */
export function configurePublishedThemeEndpoint(
  endpoint: string | null,
  headers?: Record<string, string>,
): void {
  remoteEndpoint = endpoint
  remoteHeaders = headers ?? {}
}

/** True once an endpoint has been configured. */
export function hasPublishedThemeEndpoint(): boolean {
  return Boolean(remoteEndpoint)
}

/** Fetch the published theme from the backend (returns null on 404 / error). */
export async function fetchPublishedTheme(): Promise<PublishedTheme | null> {
  if (!remoteEndpoint) return null
  try {
    const res = await fetch(remoteEndpoint, {
      method: 'GET',
      headers: { Accept: 'application/json', ...remoteHeaders },
    })
    if (!res.ok) return null
    const data = (await res.json()) as PublishedTheme
    if (!data || typeof data !== 'object' || !data.components) return null
    return data
  } catch {
    return null
  }
}

/** Push the current (or given) theme to the backend. Resolves to success. */
export async function publishThemeToServer(
  theme?: PublishedTheme,
): Promise<boolean> {
  if (!remoteEndpoint) return false
  const payload = theme ?? loadPublishedTheme() ?? emptyPublishedTheme()
  try {
    const res = await fetch(remoteEndpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...remoteHeaders },
      body: JSON.stringify(payload),
    })
    return res.ok
  } catch {
    return false
  }
}

/**
 * Boot helper for consuming apps: fetch the theme from the backend (if an
 * endpoint is configured), fall back to localStorage, then apply it.
 * Safe to call on the client during hydration.
 */
export async function hydratePublishedTheme(): Promise<PublishedTheme | null> {
  let theme: PublishedTheme | null = null
  if (remoteEndpoint) {
    theme = await fetchPublishedTheme()
    if (theme && typeof window !== 'undefined') {
      // Cache remotely-fetched theme locally so subsequent loads are instant.
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(theme))
      } catch {
        /* ignore */
      }
    }
  }
  if (!theme) theme = loadPublishedTheme()
  applyPublishedTheme(theme)
  return theme
}

// Auto-apply on import in a browser so consuming apps pick up published
// overrides with zero configuration.
if (typeof window !== 'undefined') {
  // Defer to ensure <head> exists even when imported very early.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyPublishedTheme())
  } else {
    applyPublishedTheme()
  }
  // Keep tabs in sync when another tab publishes.
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) applyPublishedTheme()
  })
}
