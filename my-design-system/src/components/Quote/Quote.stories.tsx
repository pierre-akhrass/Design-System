import type { Meta, StoryObj } from '@storybook/react'
import { Quote } from './Quote'

const sampleQuotes = [
  {
    image: '/src/assets/hero.png',
    quote:
      'Dubai Festival City surpassed expectations with its diverse culinary offerings, vibrant atmosphere, and exciting events. The fusion of flavors and retail treasures made every moment memorable. Already looking forward to my next visit!',
    name: 'Larissa Haven',
    role: 'Community Member',
  },
  {
    image: '/src/assets/hero.png',
    quote:
      'Finding our dream home with Al-Futtaim was an exceptional experience. The process was seamless, the team was incredibly helpful, and the quality of properties exceeded our expectations. We couldn\'t be happier!',
    name: 'Lorem Ipsum',
    role: 'A Happy Customer!',
  },
  {
    image: '/src/assets/hero.png',
    quote:
      'An incredible shopping experience with a wide variety of stores and dining options. The atmosphere is always welcoming and the events are top-notch.',
    name: 'Sarah Mitchell',
    role: 'Regular Visitor',
  },
]

const meta: Meta<typeof Quote> = {
  title: 'Components/Quote',
  component: Quote,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          'A carousel-based quote/testimonial component with two variants: default and inline.',
          '',
          '## Color Tokens Used',
          '',
          '| Token | Value | Usage |',
          '|-------|-------|-------|',
          '| `--sds-color-text-default-secondary` | `#292929` | Quote text, nav buttons |',
          '| `--sds-color-background-default-secondary` | Slate surface | Avatar background |',
          '| `--sds-color-background-default-tertiary-system` | `#D2D9E0` | Inline card background |',
          '| `--sds-color-icon-neutral-secondary` | Slate icon | Placeholder icon |',
          '| `--radius-full` | `9999px` | Avatar border-radius |',
          '| `--sds-typography-heading-font-family` | `Noto Sans` | Quote text font |',
          '| `--sds-typography-heading-size-large` | `32px` | Quote text size |',
          '| `--sds-typography-heading-font-weight` | `300` | Quote text weight |',
          '| `--UI-Font-Family` | `Noto Sans` | Nav button font |',
          '| `--UI-Size-medium` | `14px` | Nav button size |',
          '| `--UI-Font-Weight-strong` | `600` | Nav button weight |',
        ].join('\n'),
      },
    },
  },
  args: {
    quotes: sampleQuotes,
    showNavigation: true,
    showAuthor: true,
    variant: 'default',
  },
  argTypes: {
    showNavigation: { control: 'boolean' },
    showAuthor: { control: 'boolean' },
    variant: {
      control: 'inline-radio',
      options: ['default', 'inline'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Quote>

export const Playground: Story = {
  args: {
    quotes: [{
      "image": "/src/assets/hero.png",
      "quote": "Dubai Festival City surpassed expectations with its diverse culinary offerings, vibrant atmosphere, and exciting events. The fusion of flavors and retail treasures made every moment memorable. Already looking forward to my next visit!",
      "name": "Larissa Haven",
      "role": "Community Member"
    }, {
      "image": "/src/assets/map.png",
      "quote": "Finding our dream home with Al-Futtaim was an exceptional experience. The process was seamless, the team was incredibly helpful, and the quality of properties exceeded our expectations. We couldn't be happier!",
      "name": "Lorem Ipsum",
      "role": "A Happy Customer!"
    }, {
      "image": "/src/assets/hero.png",
      "quote": "An incredible shopping experience with a wide variety of stores and dining options. The atmosphere is always welcoming and the events are top-notch.",
      "name": "Sarah Mitchell",
      "role": "Regular Visitor"
    }],

    variant: "inline"
  }
}

export const Docs: Story = {
  tags: ['autodocs'],
}
