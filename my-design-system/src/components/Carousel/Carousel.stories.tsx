import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel, CarouselSlide } from './Carousel'

const description =
  'An interactive content component that allows users to browse through a collection of items, media, or information within a limited space. Carousels support sequential navigation through slides, cards, or visual content while helping surface featured content, highlights, or grouped experiences in an engaging and organized manner.'

const headerWrapperStyle: CSSProperties = {
  borderBottom: '1px solid currentColor',
  marginBottom: '32px',
  opacity: 0.95,
  paddingBottom: '24px',
}

const breadcrumbStyle: CSSProperties = {
  fontSize: '14px',
  marginBottom: '16px',
  opacity: 0.85,
}

const titleStyle: CSSProperties = {
  fontSize: '40px',
  fontWeight: 700,
  margin: '0 0 16px',
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
    <Carousel {...args}>
      <div style={{ width: '100%' }}>
        <div style={headerWrapperStyle}>
          <div style={breadcrumbStyle}>Foundation / Carousel</div>
          <h1 style={titleStyle}>
            Carousel{args.theme === 'dark' ? ': Dark' : ''}
          </h1>
          <p style={descriptionStyle}>{description}</p>
        </div>
      </div>
      {renderSlides(6)}
    </Carousel>
  ),
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Light: Story = {
  args: {
    theme: 'light',
  },
}

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
}

export const PlainSlides: Story = {
  name: 'Plain (no docs header)',
  render: (args) => <Carousel {...args}>{renderSlides(8)}</Carousel>,
}

export const WithoutNavigation: Story = {
  args: {
    showNavigation: false,
  },
  render: (args) => <Carousel {...args}>{renderSlides(8)}</Carousel>,
}

export const WithoutFade: Story = {
  args: {
    showFade: false,
  },
  render: (args) => <Carousel {...args}>{renderSlides(8)}</Carousel>,
}

export const FewSlides: Story = {
  render: (args) => <Carousel {...args}>{renderSlides(3)}</Carousel>,
}

export const CustomContent: Story = {
  render: (args) => (
    <Carousel {...args}>
      {Array.from({ length: 6 }, (_, index) => (
        <CarouselSlide
          key={index}
          style={{
            alignItems: 'center',
            display: 'flex',
            fontWeight: 600,
            justifyContent: 'center',
          }}
        >
          Slide {index + 1}
        </CarouselSlide>
      ))}
    </Carousel>
  ),
}
