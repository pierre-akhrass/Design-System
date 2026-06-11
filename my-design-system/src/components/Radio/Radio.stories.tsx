import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, type RadioState, type RadioPlacement } from './Radio'

type PlaygroundArgs = {
  label: string
  description: string
  state: RadioState
  placement: RadioPlacement
  disabled: boolean
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Radio

A form control for selecting **one** option from a mutually-exclusive set. Renders
as a native \`<input type="radio">\` wrapped in a clickable \`<label>\` with an
optional title and description.

### Anatomy
- **Dot** — the visual indicator (empty / filled center when selected).
- **Label** — primary text describing the option.
- **Description** — optional secondary text shown under the label.

### Variants

| Prop          | Values                  | Purpose                                              |
| ------------- | ----------------------- | ---------------------------------------------------- |
| \`state\`       | \`unchecked\` · \`checked\` | Visual + functional state.                           |
| \`placement\`   | \`left\` · \`right\`      | Dot position relative to the label.                  |
| \`label\`       | \`ReactNode\`             | Primary text.                                        |
| \`description\` | \`ReactNode\`             | Optional secondary text shown under the label.       |
| \`disabled\`    | \`boolean\`               | Disables interaction and dims the control.           |
| \`name\`        | \`string\`                | Group name — radios with the same name are mutually exclusive. |
| \`value\`       | \`string\`                | Value submitted with the form when this radio is selected. |
| \`onChange\`    | \`(next, e) => void\`     | Fires with the next state (\`checked\` only).          |

### Grouping
Radios become mutually exclusive when they share the same \`name\`. Track the
selected value in state and pass \`state\` per-radio:

\`\`\`tsx
import { useState } from 'react'
import { Radio } from '@company/design-system'

const [value, setValue] = useState('one')

const options = [
  { value: 'one',   label: 'Option One' },
  { value: 'two',   label: 'Option Two' },
  { value: 'three', label: 'Option Three' },
]

<div role="radiogroup" aria-label="Choose an option">
  {options.map((o) => (
    <Radio
      key={o.value}
      name="demo-group"
      value={o.value}
      label={o.label}
      state={value === o.value ? 'checked' : 'unchecked'}
      onChange={(next) => next === 'checked' && setValue(o.value)}
    />
  ))}
</div>
\`\`\`

### Accessibility
- Native \`<input type="radio">\` — full keyboard + screen-reader support out of the box.
- Wrap a logical set in a container with \`role="radiogroup"\` and an \`aria-label\`.
- Clicking the label selects the radio (the label is connected via \`htmlFor\`).
        `.trim(),
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Primary label text.' },
    description: { control: 'text', description: 'Optional secondary text shown under the label.' },
    state: {
      control: 'inline-radio',
      options: ['unchecked', 'checked'],
      description: 'Visual + functional state.',
    },
    placement: {
      control: 'inline-radio',
      options: ['left', 'right'],
      description: 'Dot position relative to the label.',
    },
    disabled: { control: 'boolean', description: 'Disables interaction and dims the control.' },
  },
  args: {
    label: 'Radio Label',
    description: 'Description',
    state: 'unchecked',
    placement: 'left',
    disabled: false,
  },
}
export default meta

type Story = StoryObj<PlaygroundArgs>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground covering every Radio variant. Click the dot to flip state via `onChange`, or force a state via the **state** control.',
      },
    },
  },
  render: (args) => {
    const [state, setState] = useState<RadioState>(args.state)
    useEffect(() => setState(args.state), [args.state])
    return (
      <div style={{ width: 320 }}>
        <Radio
          label={args.label}
          description={args.description}
          state={state}
          placement={args.placement}
          disabled={args.disabled}
          onChange={(next) => setState(next)}
        />
      </div>
    )
  },
}
