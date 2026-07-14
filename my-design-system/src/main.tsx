import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Playground } from './playground/Playground'
import {
  configurePublishedThemeEndpoint,
  hydratePublishedTheme,
} from './theme/publishedTheme'

// ── Published theme ───────────────────────────────────────────────────────────
// LOCAL-ONLY by default: publishing is stored in this browser's localStorage and
// applied instantly — no server required. To share across browsers/users later,
// set VITE_THEME_ENDPOINT (e.g. 'http://localhost:4000/api/design-theme') and
// run `npm run theme-server`.
const themeEndpoint = import.meta.env.VITE_THEME_ENDPOINT ?? ''

if (themeEndpoint) {
  configurePublishedThemeEndpoint(themeEndpoint)
  void hydratePublishedTheme()
}

// ── Previous showcase imports (preserved, not deleted) ────────────────────────
// import { Button } from './index'
// import './styles/global.scss'
// import './showcase.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
)
