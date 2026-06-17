import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A range slider with two knobs for selecting a value range.

**Design Tokens Used:**
| Token | Value | Usage |
|-------|-------|-------|
| \`$mapping-system-slate-surface-tertiary\` | #D2D9E0 | Track background |
| \`$mapping-system-slate-background-tertiary\` | #91A2B1 | Track fill (active range) |
| \`$mapping-system-slate-background-primary\` | #141F2E | Knob background |
| \`$mapping-brand-teal-blue-border-secondary\` | #4F8CD1 | Knob border |
| \`$mapping-system-slate-text-secondary\` | #545454 | Label text |
| \`$mapping-system-slate-text-primary\` | #292929 | Description text |
| \`$mapping-system-slate-text-tertiary\` | #6B6B6B | Value badge text |
| \`$color-system-gray-300\` | #BCBCBC | Disabled knob border |
| \`$font-family-en-primary\` | Noto Sans | Font family |`,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'active', 'disabled'],
    },
    hasLabel: { control: 'boolean' },
    label: { control: 'text' },
    hasDescription: { control: 'boolean' },
    description: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    valueLow: { control: 'number' },
    valueHigh: { control: 'number' },
  },
  args: {
    state: 'default',
    hasLabel: true,
    label: 'Slider Label',
    hasDescription: true,
    description: 'Description',
    min: 0,
    max: 9999,
    valueLow: 9,
    valueHigh: 9999,
  },
}
export default meta

type Story = StoryObj<typeof Slider>

export const Playground: Story = {}
