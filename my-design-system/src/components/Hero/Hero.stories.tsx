// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Hero/Hero.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import heroImg from '../../assets/hero.png'

const baseArgs = {
  image: heroImg,
  title: 'Title of the slide',
  subtitle:
    'This subtitle is optional. It can be long or short, it can wrap to two, or even three lines if necessary.',
  primaryAction: { label: 'Button' },
  secondaryAction: { label: 'Button' },
  currentSlide: 3,
  totalSlides: 5,
}

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['centered', 'bottom-left', 'split'] },
    mode: { control: 'inline-radio', options: ['light', 'dark'] },
  },
  args: baseArgs,
}
export default meta

type Story = StoryObj<typeof Hero>

const wrap = (bg = '#f5f7fa') => (storyArgs: any) => (
  <div style={{ padding: 24, background: bg }}>
    <Hero {...storyArgs} />
  </div>
)

/* ---------------- Centered ---------------- */
export const CenteredDark: Story = {
  args: {
    variant: 'centered',
    mode: 'dark',
    brand: {
      logo: 'LOGO',
      text: 'This text talks more about the brand, or context',
      primary: { label: 'Button' },
      secondary: { label: 'Button' },
    },
  },
  render: wrap('#e9ecf0'),
}

export const CenteredLight: Story = {
  args: {
    ...CenteredDark.args,
    mode: 'light',
  },
  render: wrap('#1e2c3e'),
}

/* ---------------- Bottom Left ---------------- */
export const BottomLeftDark: Story = {
  args: {
    variant: 'bottom-left',
    mode: 'dark',
    secondaryAction: { label: 'This is a link' },
  },
  render: wrap('#e9ecf0'),
}

export const BottomLeftLight: Story = {
  args: {
    ...BottomLeftDark.args,
    mode: 'light',
  },
  render: wrap('#1e2c3e'),
}

/* ---------------- Split ---------------- */
export const SplitDark: Story = {
  args: {
    variant: 'split',
    mode: 'dark',
    secondaryAction: { label: 'This is a link' },
    status: {
      text: 'We Are Open Until 12:00 Am',
      linkLabel: 'How to get there',
      linkHref: '#',
    },
  },
  render: wrap('#e9ecf0'),
}

export const SplitLight: Story = {
  args: {
    ...SplitDark.args,
    mode: 'light',
  },
  render: wrap('#1e2c3e'),
}
