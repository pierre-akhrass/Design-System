import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from './index'
import './styles/global.scss'

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
    <main style={{ padding: '2rem' }}>
      <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="filled">Filled Button</Button>
        <Button variant="filled" state="disabled">Filled Button</Button>
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="outlined" icon={StarIcon()} iconOnly={true} />
      </section>

      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 2rem',
          background: '#141f2e',
          borderRadius: '12px',
          gap: '1rem',
        }}
      >
        <div>
          <h2 style={{ margin: '0 0 0.25rem', color: '#fff', fontSize: '1.125rem', fontWeight: 700 }}>
            Footer Components
          </h2>
          <p style={{ margin: 0, color: '#a0aec0', fontSize: '0.875rem' }}>
            15 responsive footer variants — explore them all in Storybook.
          </p>
        </div>
        <a
          href="http://localhost:6006/?path=/story/components-footer--v1-logo-socials-bar"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.625rem 1.25rem',
            background: '#ff4785',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.875rem',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.16 0l.1 1.53a.46.46 0 00.45.42l.7-.03.04.58-2.45.1L0 .02 1.16 0zm1.95.02L3 1.92l-.7.03-.03-.58.7-.03.04-1.3 1.1-.02zm2.2 5.5l1.1.27c.08.54.14 1.05.14 1.56 0 .51-.06 1.02-.15 1.56l-1.1.27c.12-.58.2-1.2.2-1.83 0-.63-.08-1.24-.19-1.83zM7 .02l-.05 1.3.7.03-.04.58-.7-.03-.1-1.9L7 .02zm1.2 5.34l1.1-.27c-.11.59-.19 1.2-.19 1.83 0 .63.08 1.25.2 1.83l-1.1-.27C8.12 8.1 8.06 7.55 8.06 7c0-.55.06-1.1.14-1.64zM7.44.05l.05 1.3-.7.03.04.58.7-.03.1-1.9-1.14.02h-.01z" fill="currentColor"/>
          </svg>
          Open in Storybook
        </a>
      </section>
    </main>
  </StrictMode>,
)
