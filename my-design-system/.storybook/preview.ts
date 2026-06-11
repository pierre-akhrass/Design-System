import type { Preview } from '@storybook/react-vite'
import '@fontsource/noto-sans/400.css'
import '@fontsource/noto-sans/500.css'
import '@fontsource/noto-sans/700.css'
import { initialize, mswLoader } from 'msw-storybook-addon'
import '../src/styles/global.scss'
import { mswHandlers } from './msw-handlers'

initialize({ onUnhandledRequest: 'bypass' })

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true,
    },
    controls: {
      expanded: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    popoverProvider: {
      ariaLabel: 'Design system component controls',
    },
  },
}

export default preview
