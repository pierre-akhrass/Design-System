import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import heroImg from '../../assets/hero.png'

const slides = [
  {
    image: heroImg,
    title: 'Slide One â€” Discover Dubai',
    subtitle: 'Vibrant waterfront destinations and luxury retail across the UAE.',
    primaryAction: { label: 'Button' },
    secondaryAction: { label: 'This is a link' },
  },
  {
    image: heroImg,
    title: 'Slide Two â€” Festival Plaza',
    subtitle: 'Community-focused shopping and entertainment in Jebel Ali.',
    primaryAction: { label: 'Button' },
    secondaryAction: { label: 'This is a link' },
  },
  {
    image: heroImg,
    title: 'Slide Three â€” Al Badia Living',
    subtitle: 'Mixed-use residential community in Dubai Festival City.',
    primaryAction: { label: 'Button' },
    secondaryAction: { label: 'This is a link' },
  },
  {
    image: heroImg,
    title: 'Slide Four â€” Regional Reach',
    subtitle: 'Landmark projects across Saudi Arabia, Qatar and beyond.',
    primaryAction: { label: 'Button' },
    secondaryAction: { label: 'This is a link' },
  },
  {
    image: heroImg,
    title: 'Slide Five â€” Future Vision',
    subtitle: 'Innovative developments shaping the future of urban living.',
    primaryAction: { label: 'Button' },
    secondaryAction: { label: 'This is a link' },
  },
]

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['section-hero', 'split'] },
    mode: { control: 'inline-radio', options: ['light', 'dark'] },
  },
  args: {
    variant: 'section-hero',
    mode: 'light',
    slides,
    brand: {
      logo: 'LOGO',
      text: 'This text talks more about the brand, or context',
      primary: { label: 'Button' },
      secondary: { label: 'Button' },
    },
    status: {
      text: 'We Are Open Until 12:00 Am',
      linkLabel: 'How to get there',
      linkHref: '#',
    },
  },
}
export default meta

type Story = StoryObj<typeof Hero>

export const Playground: Story = {
  args: {
    slides: [{
      "image": "/src/assets/mega-menu-card.png",
      "title": "Slide One â€” Discover Dubai",
      "subtitle": "Vibrant waterfront destinations and luxury retail across the UAE.",

      "primaryAction": {
        "label": "Button"
      },

      "secondaryAction": {
        "label": "This is a link"
      }
    }, {
      "image": "/src/assets/hero.png?t=1781514169062",
      "title": "Slide Two â€” Festival Plaza",
      "subtitle": "Community-focused shopping and entertainment in Jebel Ali.",

      "primaryAction": {
        "label": "Button"
      },

      "secondaryAction": {
        "label": "This is a link"
      }
    }, {
      "image": "/src/assets/mega-menu-card.png",
      "title": "Slide Three â€” Al Badia Living",
      "subtitle": "Mixed-use residential community in Dubai Festival City.",

      "primaryAction": {
        "label": "Button"
      },

      "secondaryAction": {
        "label": "This is a link"
      }
    }, {
      "image": "/src/assets/hero.png?t=1781514169062",
      "title": "Slide Four â€” Regional Reach",
      "subtitle": "Landmark projects across Saudi Arabia, Qatar and beyond.",

      "primaryAction": {
        "label": "Button"
      },

      "secondaryAction": {
        "label": "This is a link"
      }
    }, {
      "image": "/src/assets/hero.png?t=1781514169062",
      "title": "Slide Five â€” Future Vision",
      "subtitle": "Innovative developments shaping the future of urban living.",

      "primaryAction": {
        "label": "Button"
      },

      "secondaryAction": {
        "label": "This is a link"
      }
    }],

    mode: "light",
    variant: "split"
  }
}
