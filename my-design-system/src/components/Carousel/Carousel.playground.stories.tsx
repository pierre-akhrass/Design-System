import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel, CarouselSlide } from './Carousel'

const description =
  'An interactive content component that allows users to browse through a collection of items, media, or information within a limited space. Carousels support sequential navigation through slides, cards, or visual content while helping surface featured content, highlights, or grouped experiences in an engaging and organized manner.'

const getPageStyle = (theme: 'light' | 'dark' = 'light'): CSSProperties => ({
  backgroundColor: theme === 'dark' ? '#141f2e' : '#ffffff',
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

interface ShowcaseProps {
  theme?: 'light' | 'dark'
  showNavigation?: boolean
  showFade?: boolean
  prevLabel?: string
  nextLabel?: string
  slideCount?: number
}

const Showcase = ({
  theme = 'light',
  showNavigation,
  showFade,
  prevLabel,
  nextLabel,
  slideCount = 6,
}: ShowcaseProps) => (
  <div style={getPageStyle(theme)}>
    <header style={headerStyle}>
      <div style={breadcrumbStyle}>Foundation / Carousel</div>
      <h1 style={titleStyle}>
        Carousel{theme === 'dark' ? ': Dark' : ''}
      </h1>
      <p style={descriptionStyle}>{description}</p>
    </header>
    <Carousel
      theme={theme}
      showNavigation={showNavigation}
      showFade={showFade}
      prevLabel={prevLabel}
      nextLabel={nextLabel}
    >
      {renderSlides(slideCount)}
    </Carousel>
  </div>
)

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel/Playground',
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
  render: (args) => <Showcase {...args} />,
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Light: Story = {
  args: { theme: 'light' },
}

export const Dark: Story = {
  args: { theme: 'dark' },
}

export const PlainSlides: Story = {
  name: 'Plain (no docs header)',
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <Carousel {...args}>{renderSlides(8)}</Carousel>
    </div>
  ),
}

export const WithoutNavigation: Story = {
  args: { showNavigation: false },
  render: (args) => <Showcase {...args} slideCount={8} />,
}

export const WithoutFade: Story = {
  args: { showFade: false },
  render: (args) => <Showcase {...args} slideCount={8} />,
}

export const FewSlides: Story = {
  render: (args) => <Showcase {...args} slideCount={3} />,
}

export const CustomContent: Story = {
  render: (args) => (
    <div style={getPageStyle(args.theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Foundation / Carousel</div>
        <h1 style={titleStyle}>
          Carousel{args.theme === 'dark' ? ': Dark' : ''}
        </h1>
        <p style={descriptionStyle}>{description}</p>
      </header>
      <Carousel {...args}>
        {Array.from({ length: 6 }, (_, index) => (
          <CarouselSlide key={index} style={{ fontWeight: 600 }}>
            Slide {index + 1}
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  ),
}
