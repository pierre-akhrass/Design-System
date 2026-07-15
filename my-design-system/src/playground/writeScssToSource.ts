/**
 * Write-to-source bridge
 * ------------------------------------------------------------------
 * Sends a workspace's colour choices to the theme server, which patches the
 * matching CSS custom-property declarations inside the component's `.scss`
 * source file on disk (see server/themeServer.mjs → POST /api/write-scss).
 *
 * The browser cannot write files, so this requires the theme server to be
 * running (npm run theme-server, or npm run dev:full).
 *
 * Only fields that map cleanly to a CSS variable in the SCSS source are sent.
 * Spacing/radius tokens are intentionally omitted because most components use
 * SCSS token vars ($radius-large, …) rather than CSS custom properties for
 * those, so they can't be safely rewritten by a value replace.
 */

// Map each component id → { configField: '--scss-css-variable' }.
// Extend this as components expose more CSS custom properties.
const VAR_MAP: Record<string, Record<string, string>> = {
  // Only components whose .scss defines real CSS custom properties for colour
  // are listed; those are the ones we can rewrite safely by a value swap. The
  // config field names differ per workspace (e.g. Carousel stores `slideBg`).
  card: { bgColor: '--ds-card-bg', textColor: '--ds-card-fg' },
  carousel: { slideBg: '--ds-carousel-slide-bg', textColor: '--ds-carousel-fg' },
  dialog: { bgColor: '--ds-dialog-bg', textColor: '--ds-dialog-fg' },
  list: { textColor: '--ds-list-fg' },
  search: { textColor: '--ds-search-fg' },
  'social-media': { cardBg: '--ds-smp-card-bg', textColor: '--ds-smp-card-fg' },
}

const ENDPOINT = 'http://localhost:4000/api/write-scss'

export interface WriteScssResult {
  ok: boolean
  updated: string[]
  missing: string[]
  file?: string
  error?: string
}

/** True when this component supports writing colours back to its SCSS source. */
export function canWriteScss(componentId: string): boolean {
  return componentId in VAR_MAP
}

/**
 * Patch the component's SCSS source with the config's colour values.
 * Returns a result describing which variables were updated / skipped.
 */
export async function writeScssToSource(
  componentId: string,
  config: Record<string, unknown>,
): Promise<WriteScssResult> {
  const map = VAR_MAP[componentId]
  if (!map) {
    return { ok: false, updated: [], missing: [], error: `No SCSS mapping for '${componentId}'` }
  }

  // Build { '--ds-card-bg': '#fff', ... } from the config's set values.
  const vars: Record<string, string> = {}
  for (const [field, cssVar] of Object.entries(map)) {
    const value = config[field]
    if (typeof value === 'string' && value.trim()) vars[cssVar] = value.trim()
  }

  if (Object.keys(vars).length === 0) {
    return { ok: false, updated: [], missing: [], error: 'No colour overrides to write' }
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ componentId, vars }),
    })
    const data = (await res.json()) as WriteScssResult
    return data
  } catch (err) {
    return {
      ok: false,
      updated: [],
      missing: [],
      error:
        'Could not reach the theme server. Start it with "npm run theme-server" (or "npm run dev:full").',
    }
  }
}
