import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Inputs/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `A multi-line text input with label and placeholder states.

**Design Tokens Used:**
| Token | Value | Usage |
|-------|-------|-------|
| \`$mapping-system-slate-text-secondary\` | #545454 | Value text |
| \`$mapping-brand-teal-blue-border-secondary\` | #4F8CD1 | Focus/selection border |
| \`$mapping-system-slate-text-tertiary\` | #6B6B6B | Label & placeholder text |
| \`$mapping-brand-teal-blue-border-tertiary\` | #B9D0ED | Default border |
| \`$mapping-system-slate-background-tertiary\` | #91A2B1 | Text selection background |
| \`$color-system-white-white\` | #FFFFFF | Background |
| \`$font-family-en-primary\` | Noto Sans | Font family |`,
      },
    },
  },
  argTypes: {
    valueType: { control: 'inline-radio', options: ['default', 'placeholder'] },
    state: { control: 'select', options: ['default', 'placeholder', 'focused', 'disabled'] },
    label: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    valueType: 'default',
    state: 'default',
    label: 'Label',
    value: 'Value',
  },
}
export default meta

type Story = StoryObj<typeof TextArea>

export const Playground: Story = {}
