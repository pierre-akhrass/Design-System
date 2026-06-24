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

  // Apply theme synchronously to the document so global.scss + component
  // stylesheets that key off [data-theme] / .theme-* react immediately.
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.className = `theme-${theme}`

    if (theme === 'dark') {
      document.body.style.backgroundColor = '#101214'
      document.body.style.color = '#f1f1f1'
    } else {
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }

  // Drive each component's own `theme` prop from the global toolbar toggle.
  // Components that expose a `theme` arg (Tag, Banner, Footer, Avatar, Media,
  // Tooltip, Illustration, …) otherwise pin themselves to their default arg
  // (usually `light`), which made the toolbar appear to do nothing. Stories can
  // still opt out by setting `parameters.themeOverride = false`.
  const allowThemeOverride = context.parameters?.themeOverride !== false
  if (allowThemeOverride && context.args && 'theme' in context.args) {
    context.args.theme = theme
  }

  return Story()
}

const preview: Preview = {
  tags: ['autodocs'],
  loaders: [mswLoader],
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
    msw: {
      handlers: mswHandlers,
    },
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
