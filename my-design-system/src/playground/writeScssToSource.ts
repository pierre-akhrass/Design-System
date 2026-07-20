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
  card: {
    bgColor: '--ds-card-bg',
    textColor: '--ds-card-fg',
    borderRadius: '--ds-card-radius',
    borderWidth: '--ds-card-border-width',
    borderStyle: '--ds-card-border-style',
    borderColor: '--ds-card-border',
    paddingX: '--ds-card-body-padding-x',
    paddingY: '--ds-card-body-padding-y',
    gap: '--ds-card-body-gap',
  },
  carousel: {
    slideBg: '--ds-carousel-slide-bg',
    textColor: '--ds-carousel-fg',
    gap: '--ds-carousel-track-gap',
    slideRadius: '--ds-carousel-slide-radius',
    buttonRadius: '--ds-carousel-button-radius',
    borderWidth: '--ds-carousel-slide-border-width',
    borderStyle: '--ds-carousel-slide-border-style',
    borderColor: '--ds-carousel-slide-border-color',
  },
  dialog: {
    bgColor: '--ds-dialog-bg',
    textColor: '--ds-dialog-fg',
    borderRadius: '--ds-dialog-radius',
    padding: '--ds-dialog-padding',
    gap: '--ds-dialog-gap',
    borderWidth: '--ds-dialog-border-width',
    borderStyle: '--ds-dialog-border-style',
    borderColor: '--ds-dialog-border-color',
  },
  list: {
    textColor: '--ds-list-fg',
    gap: '--ds-list-gap',
    itemPadding: '--ds-list-item-padding',
    itemRadius: '--ds-list-item-radius',
    borderWidth: '--ds-list-item-border-width',
    borderStyle: '--ds-list-item-border-style',
    borderColor: '--ds-list-item-border-color',
  },
  search: { textColor: '--ds-search-fg' },
  tag: {
    bgColor:   '--ds-tag-bg',
    textColor: '--ds-tag-fg',
  },
  tooltip: {
    bgColor:     '--ds-tooltip-bg',
    borderColor: '--ds-tooltip-border',
    textColor:   '--ds-tooltip-fg',
  },
  avatar: {
    bgColor:   '--ds-avatar-bg',
    textColor: '--ds-avatar-fg',
  },
  form: {
    varSurface:      '--ds-form-surface',
    varBorder:       '--ds-form-border',
    varFieldBg:      '--ds-form-field-bg',
    varFieldBorder:  '--ds-form-field-border',
    varFocusBorder:  '--ds-form-field-border-focus',
    varTextPrimary:  '--ds-form-text-primary',
    varTextTertiary: '--ds-form-text-tertiary',
    varAccent:       '--ds-form-accent',
    varDanger:       '--ds-form-danger',
  },
  footer: {
    bgColor:   '--ds-footer-bg',
    textColor: '--ds-footer-text',
  },
  'social-media': {
    cardBg: '--ds-smp-card-bg',
    textColor: '--ds-smp-card-fg',
    radius: '--ds-smp-radius',
    textPadding: '--ds-smp-text-padding',
    borderWidth: '--ds-smp-border-width',
    borderStyle: '--ds-smp-border-style',
    borderColor: '--ds-smp-border-color',
  },
}

const ENDPOINT = 'http://localhost:4000/api/write-scss'
const READ_ENDPOINT = 'http://localhost:4000/api/read-scss'

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
  } catch {
    return {
      ok: false,
      updated: [],
      missing: [],
      error:
        'Could not reach the theme server. Start it with "npm run theme-server" (or "npm run dev:full").',
    }
  }
}

export interface ReadScssResult {
  ok: boolean
  /** Config fields resolved from the SCSS file, ready to merge into state. */
  config: Record<string, string>
  file?: string
  error?: string
}

/**
 * Read the current colour values from a component's SCSS source and map the
 * CSS custom properties back onto the workspace's config field names.
 *
 * This is the reverse of writeScssToSource: it lets edits made directly in the
 * `.scss` file flow back into the playground UI. Requires the theme server.
 */
export async function readScssFromSource(componentId: string): Promise<ReadScssResult> {
  const map = VAR_MAP[componentId]
  if (!map) {
    return { ok: false, config: {}, error: `No SCSS mapping for '${componentId}'` }
  }
  try {
    const res = await fetch(`${READ_ENDPOINT}?componentId=${encodeURIComponent(componentId)}`)
    const data = (await res.json()) as { ok?: boolean; file?: string; vars?: Record<string, string>; error?: string }
    if (!res.ok || !data.vars) {
      return { ok: false, config: {}, file: data.file, error: data.error ?? 'Read failed' }
    }
    // Invert the field->cssVar map to cssVar->field, then pull matching values.
    const config: Record<string, string> = {}
    for (const [field, cssVar] of Object.entries(map)) {
      const value = data.vars[cssVar]
      if (typeof value === 'string' && value.trim()) config[field] = value.trim()
    }
    return { ok: true, config, file: data.file }
  } catch {
    return {
      ok: false,
      config: {},
      error:
        'Could not reach the theme server. Start it with "npm run theme-server" (or "npm run dev:full").',
    }
  }
}
