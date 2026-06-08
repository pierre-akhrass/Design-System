import type { Meta, StoryObj } from '@storybook/react'
import { Overlay } from './Overlay'

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'inline-radio', options: ['light', 'dark'] },
    opacity: { control: 'inline-radio', options: [5, 10, 25, 50, 75, 90, 100] },
  },
  args: { mode: 'light', opacity: 5 },
  parameters: {
    docs: {
      description: {
        component: 'Surface overlay utility for dimming and focus layering across light and dark modes.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Overlay>

export const Light: Story = { args: { mode: 'light', opacity: 5 } }
export const Dark: Story = { args: { mode: 'dark', opacity: 5 } }

export const AllOpacitiesLight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[5, 10, 25, 50, 75, 90, 100].map((o) => (
        <Overlay key={o} mode="light" opacity={o as 5}>
          Light {o}%
        </Overlay>
      ))}
    </div>
  ),
}

export const AllOpacitiesDark: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[5, 10, 25, 50, 75, 90, 100].map((o) => (
        <Overlay key={o} mode="dark" opacity={o as 5}>
          Dark {o}%
        </Overlay>
      ))}
    </div>
  ),
}
