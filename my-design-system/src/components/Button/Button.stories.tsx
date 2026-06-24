import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import './Button.stories.scss'

const meta: Meta<typeof Button> = {
  title: 'Components/Button (pierre-akhrass)',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'filled',
    state: 'default',
    iconOnly: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Button supports 3 variants (`filled`, `outlined`, `plain`) and 5 visual states (`default`, `focus`, `hover`, `pressed`, `disabled`). Use Playground for interactive controls and All States for full visual reference.',
      },
    },
    controls: { expanded: true },
  },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'inline-radio',
      options: ['filled', 'outlined', 'plain'],
    },
    state: {
      control: 'inline-radio',
      options: ['default', 'focus', 'hover', 'pressed', 'disabled'],
    },
    iconOnly: { control: 'boolean' },
    icon: { control: false },
    onClick: { action: 'clicked' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    state: 'default',
    iconOnly: false,
  },
}
