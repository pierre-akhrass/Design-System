import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'filled',
    state: 'default',
    iconOnly: false,
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['filled', 'outlined', 'plain'],
    },
    state: {
      control: 'inline-radio',
      options: ['default', 'focus', 'hover', 'pressed', 'disabled'],
    },
    iconOnly: { control: 'boolean' },
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
