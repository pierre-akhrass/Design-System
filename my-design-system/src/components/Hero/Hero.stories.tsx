import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import heroImg from '../../assets/hero.png'

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['centered', 'bottom-left', 'split'] },
    mode: { control: 'inline-radio', options: ['light', 'dark'] },
  },
  args: {
    image: heroImg,
    title: 'Title of the slide',
    subtitle:
      'This subtitle is optional. It can be long or short, it can wrap to two, or even three lines if necessary.',
    primaryAction: { label: 'Button' },
    secondaryAction: { label: 'Button' },
    totalSlides: 5,
    variant: 'centered',
    mode: 'dark',
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
    variant: "bottom-left",
    mode: "light",
    image: "/src/assets/hero.png",

    brand: {
      "logo": "LOGO",
      "text": "This text talks more about the brand, or context",

      "primary": {
        "label": "Button"
      },

      "secondary": {
        "label": "this is a link"
      }
    }
  }
}
