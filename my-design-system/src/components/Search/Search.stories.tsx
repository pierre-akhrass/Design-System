import type { Meta, StoryObj } from '@storybook/react'
import { Search } from './Search'

const meta: Meta<typeof Search> = {
  title: 'Inputs/Search',
  component: Search,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A pill-shaped search input with configurable icons and sizes.

**Design Tokens Used:**
| Token | Value | Usage |
|-------|-------|-------|
| \`$color-system-gray-300\` | #BCBCBC | Border |
| \`$mapping-system-slate-surface-secondary\` | #E9ECF0 | Background |
| \`$mapping-system-slate-text-primary\` | #292929 | Input text |
| \`$mapping-system-slate-text-tertiary\` | #6B6B6B | Placeholder & left icon |
| \`$mapping-system-slate-text-secondary\` | #545454 | Right icon |
| \`$mapping-system-slate-border-secondary\` | #BCBCBC | Focus border |
| \`$mapping-brand-teal-blue-background-tertiary\` | #4F8CD1 | Focus ring |
| \`$font-family-en-primary\` | Noto Sans | Font |`,
      },
    },
  },
  argTypes: {
    valueType: { control: 'inline-radio', options: ['default', 'placeholder'] },
    size: { control: 'inline-radio', options: ['medium', 'small'] },
    iconRight: { control: 'boolean' },
    iconLeft: { control: 'boolean' },
  },
  args: {
    valueType: 'placeholder',
    size: 'medium',
    value: 'Value',
    iconRight: true,
    iconLeft: true,
  },
}
export default meta

type Story = StoryObj<typeof Search>

export const Playground: Story = {}
