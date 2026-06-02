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
    <main style={{ padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="filled">Filled Button</Button>
      <Button variant="filled" state="disabled">Filled Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="outlined" icon={StarIcon()} iconOnly={true} />
    </main>
  </StrictMode>,
)
