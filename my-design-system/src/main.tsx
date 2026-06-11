import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from './index'
import { AvatarShowcase } from './components/Showcase/AvatarShowcase/AvatarShowcase'
import { IllustrationShowcase } from './components/Showcase/IllustrationShowcase/IllustrationShowcase'
import { MediaShowcase } from './components/Showcase/MediaShowcase/MediaShowcase'
import { FooterShowcase } from './components/Showcase/FooterShowcase/FooterShowcase'
import './styles/global.scss'
import './showcase.scss'

const StarIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2.5l2.92 5.92 6.53.95-4.72 4.6 1.11 6.5L12 17.4l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.5z"
      fill="currentColor"
    />
  </svg>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="showcase-page">

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <header className="showcase-page__header">
        <p className="showcase-page__eyebrow">Company</p>
        <h1 className="showcase-page__title">Design System</h1>
        <p className="showcase-page__subtitle">
          A collection of reusable components, design tokens, and guidelines that power consistent,
          accessible product experiences.
        </p>
      </header>

      {/* ── Sections ────────────────────────────────────────────────────── */}
      <main className="showcase-page__content">

        {/* ── Button section ──────────────────────────────────────────── */}
        <section className="showcase-section" aria-labelledby="button-section-title">
          <div className="showcase-section__header">
            <span className="showcase-section__badge">Component</span>
            <h2 className="showcase-section__title" id="button-section-title">Button</h2>
            <p className="showcase-section__desc">
              Triggers actions or navigates users through the interface. Available in filled,
              outlined, and plain variants — each with full state coverage and icon support.
            </p>
          </div>

          <div className="showcase-demo">
            <Button variant="filled">Filled</Button>
            <Button variant="filled" state="hover">Hover</Button>
            <Button variant="filled" state="disabled">Disabled</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined" state="hover">Hover</Button>
            <Button variant="plain">Plain</Button>
            <Button variant="filled" icon={<StarIcon />}>With icon</Button>
            <Button variant="outlined" icon={<StarIcon />} iconOnly />
          </div>
        </section>

        <hr className="showcase-divider" />

        {/* ── Avatar section ──────────────────────────────────────────── */}
        <AvatarShowcase />

        <hr className="showcase-divider" />

        {/* ── Illustration section ─────────────────────────────────────── */}
        <IllustrationShowcase />

        <hr className="showcase-divider" />

        {/* ── Media section ────────────────────────────────────────────── */}
        <MediaShowcase />

        <hr className="showcase-divider" />

        {/* ── Footer section ───────────────────────────────────────────── */}
        <FooterShowcase />

      </main>
    </div>
  </StrictMode>,
)
