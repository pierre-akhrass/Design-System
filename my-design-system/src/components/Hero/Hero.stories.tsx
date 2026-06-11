import type { Meta, StoryObj } from '@storybook/react'
import { Hero, type HeroSlide } from './Hero'
import mapImg from '../../assets/map.png'

const baseArgs = {
  image: mapImg,
  title: 'Title of the slide',
  subtitle:
    'This subtitle is optional. It can be long or short, it can wrap to two, or even three lines if necessary.',
  primaryAction: { label: 'Button' },
  secondaryAction: { label: 'Button' },
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

/* ---------------- Multi-slide working slider ---------------- */
const demoSlides: HeroSlide[] = [
  {
    image: heroImg,
    title: 'Slide One — Discover Dubai',
    subtitle: 'Vibrant waterfront destinations and luxury retail across the UAE.',
    primaryAction: { label: 'Explore' },
    secondaryAction: { label: 'Learn more' },
  },
  {
    image: heroImg,
    title: 'Slide Two — Festival Plaza',
    subtitle: 'Community-focused shopping and entertainment in Jebel Ali.',
    primaryAction: { label: 'Visit' },
    secondaryAction: { label: 'Directions' },
  },
  {
    image: heroImg,
    title: 'Slide Three — Al Badia Living',
    subtitle: 'Mixed-use residential community in Dubai Festival City.',
    primaryAction: { label: 'Tour homes' },
    secondaryAction: { label: 'Brochure' },
  },
  {
    image: heroImg,
    title: 'Slide Four — Regional Reach',
    subtitle: 'Landmark projects across Saudi Arabia, Qatar and beyond.',
    primaryAction: { label: 'Our map' },
    secondaryAction: { label: 'Press kit' },
  },
]

export const SliderBottomLeft: Story = {
  args: {
    variant: 'bottom-left',
    mode: 'dark',
    slides: demoSlides,
  },
  render: wrap('#e9ecf0'),
}

export const SliderCentered: Story = {
  args: {
    variant: 'centered',
    mode: 'dark',
    slides: demoSlides.map((s) => ({
      ...s,
      brand: {
        logo: 'LOGO',
        text: 'This text talks more about the brand.',
        primary: { label: 'Button' },
        secondary: { label: 'Button' },
      },
    })),
  },
  render: wrap('#e9ecf0'),
}

export const SliderAutoPlay: Story = {
  args: {
    variant: 'bottom-left',
    mode: 'dark',
    slides: demoSlides,
    autoPlay: 3000,
  },
  render: wrap('#e9ecf0'),
}
