import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel, CarouselSlide } from './Carousel'

const description =
  'An interactive content component that allows users to browse through a collection of items, media, or information within a limited space. Carousels support sequential navigation through slides, cards, or visual content while helping surface featured content, highlights, or grouped experiences in an engaging and organized manner.'

const getPageStyle = (theme: 'light' | 'dark' = 'light'): CSSProperties => ({
  backgroundColor:
    theme === 'dark'
      ? '#141f2e'
      : 'var(--sds-color-white-800, rgba(255, 255, 255, 0.9))',
  boxSizing: 'border-box',
  color: theme === 'dark' ? '#ffffff' : '#1f1f1f',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  minHeight: '100vh',
  padding: '40px clamp(24px, 4vw, 56px)',
  width: '100%',
})

const headerStyle: CSSProperties = {
  borderBottom: '1px solid currentColor',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  opacity: 0.95,
  paddingBottom: '24px',
}

const breadcrumbStyle: CSSProperties = {
  fontSize: '14px',
  opacity: 0.85,
}

const titleStyle: CSSProperties = {
  fontSize: '40px',
  fontWeight: 700,
  margin: 0,
}

const descriptionStyle: CSSProperties = {
  fontSize: '14px',
  lineHeight: 1.5,
  margin: 0,
  maxWidth: '420px',
  opacity: 0.85,
}

const renderSlides = (count = 6) =>
  Array.from({ length: count }, (_, index) => (
    <CarouselSlide key={index} aria-label={`Slide ${index + 1}`} />
  ))

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    theme: 'light',
    showNavigation: true,
    showFade: true,
    prevLabel: 'Prev',
    nextLabel: 'Next',
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    showNavigation: { control: 'boolean' },
    showFade: { control: 'boolean' },
    prevLabel: { control: 'text' },
    nextLabel: { control: 'text' },
  },
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Foundation / Carousel</div>
        <h1 style={titleStyle}>
          Carousel{args.theme === 'dark' ? ': Dark' : ''}
        </h1>
        <p style={descriptionStyle}>{description}</p>
      </header>
      <Carousel {...args}>{renderSlides(6)}</Carousel>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    theme: 'light',
    showNavigation: true,
    showFade: true,
    prevLabel: 'Prev',
    nextLabel: 'Next',
  },
}
