import type { Preview } from '@storybook/react-vite'
import '@fontsource/noto-sans/400.css'
import '@fontsource/noto-sans/500.css'
import '@fontsource/noto-sans/700.css'
import '../src/styles/global.scss'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true,
    },
    controls: {
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
