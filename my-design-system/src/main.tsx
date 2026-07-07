import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Playground } from './playground/Playground'

// ── Previous showcase imports (preserved, not deleted) ────────────────────────
// import { Button } from './index'
// import { AvatarShowcase } from './components/Showcase/AvatarShowcase/AvatarShowcase'
// import { IllustrationShowcase } from './components/Showcase/IllustrationShowcase/IllustrationShowcase'
// import { MediaShowcase } from './components/Showcase/MediaShowcase/MediaShowcase'
// import { FooterShowcase } from './components/Showcase/FooterShowcase/FooterShowcase'
// import './styles/global.scss'
// import './showcase.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
)
