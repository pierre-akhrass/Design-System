import type { Meta, StoryObj } from '@storybook/react'
import { Testimonials } from './Testimonials'

const sampleTestimonials = [
  {
    image: 'hero.png',
    quote:
      'Dubai Festival City surpassed expectations with its diverse culinary offerings, vibrant atmosphere, and exciting events. The fusion of flavors and retail treasures made every moment memorable. Already looking forward to my next visit!',
    name: 'Larissa Haven',
    role: 'Community Member',
  },
  {
    image: 'hero.png',
    quote:
      'Finding our dream home with Al-Futtaim was an exceptional experience. The process was seamless, the team was incredibly helpful, and the quality of properties exceeded our expectations. We couldn\'t be happier!',
    name: 'Lorem Ipsum',
    role: 'A Happy Customer',
  },
  {
    image: 'hero.png',
    quote:
      'An incredible shopping experience with a wide variety of stores and dining options. The atmosphere is always welcoming and the events are top-notch.',
    name: 'Sarah Mitchell',
    role: 'Regular Visitor',
  },
]

const meta: Meta<typeof Testimonials> = {
  title: 'Components/Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          'A desktop testimonials section with vertical numbered pagination and large image.',
          '',
          '## Color Tokens Used',
          '',
          '| Token | Value | Usage |',
          '|-------|-------|-------|',
          '| `$color-system-slate-50` | `#f8fafb` | Section background |',
          '| `$mapping-system-slate-text-primary` | `#292929` | Heading, author name, active pagination |',
          '| `$mapping-system-slate-text-secondary` | `#545454` | Label, quote text |',
          '| `$mapping-system-slate-text-tertiary` | — | Inactive pagination, author role |',
          '| `$mapping-system-slate-border-tertiary` | — | Pagination line (inactive) |',
          '| `$mapping-system-slate-icon-secondary` | — | Quote icon |',
          '| `$mapping-system-slate-icon-tertiary` | — | Image placeholder icon |',
          '| `$color-system-slate-100` | — | Image container background |',
          '| `$heading-font-family` | `Noto Sans` | Heading, quote text font |',
          '| `$heading-size-h3` | `36px` | Heading size |',
          '| `$heading-font-weight-bold` | `700` | Heading weight |',
          '| `$heading-font-weight-light` | `300` | Quote text weight |',
          '| `$font-family-en-primary` | `Noto Sans` | Label, pagination, author |',
          '| `$radius-large` | `16px` | Image border-radius |',
        ].join('\n'),
      },
    },
  },
  args: {
    label: 'Testimonials',
    heading: 'A word from our community',
    testimonials: sampleTestimonials,
  },
}
export default meta

type Story = StoryObj<typeof Testimonials>

export const Playground: Story = {
  args: {
    testimonials: [{
      "image": "/src/assets/hero.png",
      "quote": "Dubai Festival City surpassed expectations with its diverse culinary offerings, vibrant atmosphere, and exciting events. The fusion of flavors and retail treasures made every moment memorable. Already looking forward to my next visit!",
      "name": "Larissa Haven",
      "role": "Community Member"
    }, {
      "image": "/src/assets/hero.png",
      "quote": "Finding our dream home with Al-Futtaim was an exceptional experience. The process was seamless, the team was incredibly helpful, and the quality of properties exceeded our expectations. We couldn't be happier!",
      "name": "Lorem Ipsum",
      "role": "A Happy Customer"
    }, {
      "image": "/src/assets/hero.png",
      "quote": "An incredible shopping experience with a wide variety of stores and dining options. The atmosphere is always welcoming and the events are top-notch.",
      "name": "Sarah Mitchell",
      "role": "Regular Visitor"
    }]
  }
}

export const Docs: Story = {
  tags: ['autodocs'],
}
