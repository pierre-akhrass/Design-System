import type { Meta, StoryObj } from '@storybook/react-vite'
import { Banner } from './Banner'
import './Banner.stories.scss'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    theme: 'light',
    layout: 'media-right',
    size: 'large',
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    layout: {
      control: 'inline-radio',
      options: ['media-right', 'media-left', 'stacked'],
    },
    size: {
      control: 'inline-radio',
      options: ['large', 'medium', 'small'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Banner>

const BannerDocumentation = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div className={`ds-banner-doc ds-banner-doc--${theme}`}>
    <div className="ds-banner-doc__intro">
      <h1 className="ds-banner-doc__title">{theme === 'dark' ? 'Banner: Dark' : 'Banner'}</h1>
      <p className="ds-banner-doc__description">
        A high-visibility communication surface used to promote key messages, products, or campaigns.
        Banners combine text, visual media, and calls-to-action in a flexible format that scales across
        content priorities and viewport sizes.
      </p>
    </div>

    <div className="ds-banner-doc__divider" />

    <Banner theme={theme} size="large" layout="media-right" />

    <Banner theme={theme} size="small" layout="media-right" className="ds-banner-doc__compact" />
  </div>
)

const BannerVariationsDocumentation = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div className={`ds-banner-doc ds-banner-doc--${theme}`}>
    <div className="ds-banner-doc__intro">
      <h1 className="ds-banner-doc__title">Banner: Variations</h1>
      <p className="ds-banner-doc__description">
        A high-visibility communication surface used to promote key messages, products, or campaigns.
        Banners support different layout directions and sizes to adapt to content density and emphasis.
      </p>
    </div>

    <div className="ds-banner-doc__divider" />

    <div className="ds-banner-doc__variations">
      <Banner theme={theme} size="large" layout="media-right" />
      <Banner theme={theme} size="medium" layout="media-left" />
      <div className="ds-banner-doc__stack-row">
        <Banner theme={theme} size="small" layout="stacked" />
        <Banner theme={theme} size="small" layout="stacked" />
      </div>
    </div>
  </div>
)

export const Playground: Story = {}

export const DocumentationLight: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <section className="ds-banner-figma ds-banner-figma--light">
      <header className="ds-banner-figma__header">
        <span>Component / Banner</span>
        <span>Al-Futtaim Design System</span>
      </header>

      <div className="ds-banner-figma__content">
        <BannerDocumentation theme="light" />
      </div>
    </section>
  ),
}

export const DocumentationDark: Story = {
  parameters: {
    controls: { disable: true },
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <section className="ds-banner-figma ds-banner-figma--dark">
      <header className="ds-banner-figma__header">
        <span>Component / Banner</span>
        <span>Al-Futtaim Design System</span>
      </header>

      <div className="ds-banner-figma__content">
        <BannerDocumentation theme="dark" />
      </div>
    </section>
  ),
}

export const VariationsLight: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <section className="ds-banner-figma ds-banner-figma--light">
      <header className="ds-banner-figma__header">
        <span>Component / Banner</span>
        <span>Al-Futtaim Design System</span>
      </header>

      <div className="ds-banner-figma__content">
        <BannerVariationsDocumentation theme="light" />
      </div>
    </section>
  ),
}

export const VariationsDark: Story = {
  parameters: {
    controls: { disable: true },
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <section className="ds-banner-figma ds-banner-figma--dark">
      <header className="ds-banner-figma__header">
        <span>Component / Banner</span>
        <span>Al-Futtaim Design System</span>
      </header>

      <div className="ds-banner-figma__content">
        <BannerVariationsDocumentation theme="dark" />
      </div>
    </section>
  ),
}
