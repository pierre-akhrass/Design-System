import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from './index'
import './styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main style={{ padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </main>
  </StrictMode>,
)
