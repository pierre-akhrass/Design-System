// ── Published theme server ──────────────────────────────────────────────────────
// A tiny zero-dependency Node HTTP server that stores the design system's
// published theme so it can be shared across browsers, machines and users.
//
//   GET  /api/design-theme  ->  200 { version, updatedAt, components }  | 404
//   PUT  /api/design-theme  <-  PublishedTheme JSON  ->  200 (persisted)
//   DELETE /api/design-theme -> 200 (clears the theme)
//
// The theme is persisted to server/published-theme.json so it survives restarts.
//
//   Run:   npm run theme-server         (server only)
//          npm run dev:full             (server + vite together)
//
// Then, in a consuming app / the playground:
//   import { configurePublishedThemeEndpoint, hydratePublishedTheme } from '@company/design-system'
//   configurePublishedThemeEndpoint('http://localhost:4000/api/design-theme')
//   await hydratePublishedTheme()

import { createServer } from 'node:http'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_FILE = join(__dirname, 'published-theme.json')
const PORT = process.env.THEME_PORT ? Number(process.env.THEME_PORT) : 4000
const ROUTE = '/api/design-theme'
const SCSS_ROUTE = '/api/write-scss'

// Map a playground component id → its source .scss file (relative to repo).
const SCSS_FILES = {
  card: 'src/components/Card/Card.scss',
  carousel: 'src/components/Carousel/Carousel.scss',
  list: 'src/components/List/List.scss',
  'social-media': 'src/components/SocialMediaPost/SocialMediaPost.scss',
  dialog: 'src/components/Dialog/Dialog.scss',
  dropdown: 'src/components/Dropdown/Dropdown.scss',
  tag: 'src/components/Tag/Tag.scss',
  checkbox: 'src/components/Checkbox/Checkbox.scss',
  radio: 'src/components/Radio/Radio.scss',
  switch: 'src/components/Switch/Switch.scss',
  search: 'src/components/Search/Search.scss',
  textarea: 'src/components/TextArea/TextArea.scss',
  breadcrumbs: 'src/components/Breadcrumbs/Breadcrumbs.scss',
  navbar: 'src/components/Navbar/Navbar.scss',
  'mega-menu': 'src/components/MegaMenu/MegaMenu.scss',
  testimonials: 'src/components/Testimonials/Testimonials.scss',
  map: 'src/components/Map/Map.scss',
}

const REPO_ROOT = join(__dirname, '..')

// Escape a string for safe use inside a RegExp.
function escapeRe(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Rewrite CSS custom-property declarations inside a .scss file.
 * For each entry { '--ds-card-bg': '#fff' } we replace the value of the FIRST
 * matching `--ds-card-bg: <old>;` declaration with the new value.
 * Returns { updated: string[], missing: string[] }.
 */
function applyScssVars(source, vars) {
  let out = source
  const updated = []
  const missing = []
  for (const [name, value] of Object.entries(vars)) {
    if (!value) continue
    const re = new RegExp('(' + escapeRe(name) + '\\s*:\\s*)([^;]*)(;)')
    if (re.test(out)) {
      out = out.replace(re, `$1${value}$3`)
      updated.push(name)
    } else {
      missing.push(name)
    }
  }
  return { source: out, updated, missing }
}


// ── Storage helpers ─────────────────────────────────────────────────────────────

async function readTheme() {
  try {
    const raw = await readFile(DATA_FILE, 'utf8')
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object' && parsed.components) return parsed
    return null
  } catch {
    return null // file missing or unreadable
  }
}

async function writeTheme(theme) {
  await writeFile(DATA_FILE, JSON.stringify(theme, null, 2), 'utf8')
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on('data', (c) => {
      size += c.length
      if (size > 1_000_000) {
        reject(new Error('Payload too large'))
        req.destroy()
        return
      }
      chunks.push(c)
    })
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

// ── CORS ─────────────────────────────────────────────────────────────────────────

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function sendJson(res, status, data) {
  setCors(res)
  res.writeHead(status, { 'Content-Type': 'application/json' })
  res.end(data === undefined ? '' : JSON.stringify(data))
}

// ── Server ─────────────────────────────────────────────────────────────────────

const server = createServer(async (req, res) => {
  const url = (req.url || '').split('?')[0]

  if (req.method === 'OPTIONS') {
    setCors(res)
    res.writeHead(204)
    res.end()
    return
  }

  // ── Write SCSS to disk ──────────────────────────────────────────────
  if (url === SCSS_ROUTE) {
    if (req.method !== 'POST') {
      sendJson(res, 405, { error: 'Method not allowed' })
      return
    }
    try {
      const body = await readBody(req)
      let payload
      try {
        payload = JSON.parse(body)
      } catch {
        sendJson(res, 400, { error: 'Invalid JSON' })
        return
      }
      const { componentId, vars } = payload || {}
      if (!componentId || !vars || typeof vars !== 'object') {
        sendJson(res, 400, { error: 'Expected { componentId, vars }' })
        return
      }
      const rel = SCSS_FILES[componentId]
      if (!rel) {
        sendJson(res, 404, { error: `No SCSS file mapped for '${componentId}'` })
        return
      }
      const filePath = join(REPO_ROOT, rel)
      let source
      try {
        source = await readFile(filePath, 'utf8')
      } catch {
        sendJson(res, 404, { error: `SCSS file not found: ${rel}` })
        return
      }
      // Back up once (keeps the original safe), then patch in place.
      try {
        await writeFile(filePath + '.autobak', source, 'utf8')
      } catch { /* backup best-effort */ }

      const { source: next, updated, missing } = applyScssVars(source, vars)
      if (updated.length === 0) {
        sendJson(res, 200, { ok: false, updated, missing, file: rel })
        return
      }
      await writeFile(filePath, next, 'utf8')
      console.log(`[theme-server] patched ${updated.length} var(s) in ${rel}: ${updated.join(', ')}`)
      sendJson(res, 200, { ok: true, updated, missing, file: rel })
    } catch (err) {
      console.error('[theme-server] scss write error:', err)
      sendJson(res, 500, { error: 'Server error' })
    }
    return
  }

  if (url !== ROUTE) {
    sendJson(res, 404, { error: 'Not found' })
    return
  }

  try {
    if (req.method === 'GET') {
      const theme = await readTheme()
      if (!theme) {
        sendJson(res, 404, { error: 'No published theme yet' })
        return
      }
      sendJson(res, 200, theme)
      return
    }

    if (req.method === 'PUT') {
      const body = await readBody(req)
      let theme
      try {
        theme = JSON.parse(body)
      } catch {
        sendJson(res, 400, { error: 'Invalid JSON' })
        return
      }
      if (!theme || typeof theme !== 'object' || typeof theme.components !== 'object') {
        sendJson(res, 400, { error: 'Expected a PublishedTheme with a components object' })
        return
      }
      theme.updatedAt = new Date().toISOString()
      await writeTheme(theme)
      const count = Object.keys(theme.components).length
      console.log(`[theme-server] published ${count} component override(s) at ${theme.updatedAt}`)
      sendJson(res, 200, { ok: true, updatedAt: theme.updatedAt, count })
      return
    }

    if (req.method === 'DELETE') {
      await writeTheme({ version: 1, updatedAt: new Date().toISOString(), components: {} })
      console.log('[theme-server] cleared all published overrides')
      sendJson(res, 200, { ok: true })
      return
    }

    sendJson(res, 405, { error: 'Method not allowed' })
  } catch (err) {
    console.error('[theme-server] error:', err)
    sendJson(res, 500, { error: 'Server error' })
  }
})

server.listen(PORT, () => {
  console.log(`\n  ✦ Theme server running`)
  console.log(`    → http://localhost:${PORT}${ROUTE}`)
  console.log(`    → data file: ${DATA_FILE}\n`)
})
