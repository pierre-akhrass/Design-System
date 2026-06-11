import type { Preview } from '@storybook/react-vite'
import '@fontsource/noto-sans/400.css'
import '@fontsource/noto-sans/500.css'
import '@fontsource/noto-sans/700.css'
import { initialize, mswLoader } from 'msw-storybook-addon'
import '../src/styles/global.scss'
import { mswHandlers } from './msw-handlers'

initialize({ onUnhandledRequest: 'bypass' })

// Initialize theme on page load
function initializeTheme() {
  if (typeof document !== 'undefined') {
    // Get theme from localStorage or default to 'light'
    const theme = localStorage.getItem('sb-theme') || 'light'
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.className = `theme-${theme}`
    
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#101214'
      document.body.style.color = '#f1f1f1'
    }
  }
}

// Initialize on load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme)
  } else {
    initializeTheme()
  }
}

const ThemeDecorator: Preview['decorators'][number] = (Story, context) => {
  const theme = context.globals.theme ?? 'light'
  
  // Apply theme synchronously to main document
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.className = `theme-${theme}`
    
    // Apply inline styles for immediate effect
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#101214'
      document.body.style.color = '#f1f1f1'
      
      // Apply dark theme to common elements
      const elements = document.querySelectorAll('[class*="ds-accordion"], [class*="ds-button"], p, h1, h2, h3, h4, h5, h6, span, div')
      elements.forEach(el => {
        const computedStyle = window.getComputedStyle(el)
        if (computedStyle.color === 'rgb(41, 41, 41)' || computedStyle.color === 'rgb(84, 84, 84)') {
          (el as HTMLElement).style.color = '#f1f1f1'
        }
        if ((el as HTMLElement).classList.contains('ds-accordion__item') || 
            (el as HTMLElement).classList.contains('ds-accordion__header')) {
          (el as HTMLElement).style.color = '#f1f1f1'
        }
      })
    } else {
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }
  
  return Story()
}

const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global color theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [ThemeDecorator],
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
    backgrounds: {
      values: [
        { name: 'Light', value: '#ffffff' },
        { name: 'Dark', value: '#101214' },
      ],
    },
  },
}

export default preview
