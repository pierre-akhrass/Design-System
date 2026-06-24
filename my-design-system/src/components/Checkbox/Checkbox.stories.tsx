import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox, type CheckboxState, type CheckboxPlacement } from './Checkbox'

type PlaygroundArgs = {
  label: string
  description: string
  state: CheckboxState
  placement: CheckboxPlacement
  disabled: boolean
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Inputs/Checkbox (sereneogilvy)',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Checkbox

A tri-state form control for selecting one or more options independently. Renders
as a native \`<input type="checkbox">\` wrapped in a clickable \`<label>\` with an
optional title and description.

### Anatomy
- **Box** — the visual indicator (empty / check / minus for indeterminate).
- **Label** — primary text describing the option.
- **Description** — optional secondary text shown under the label.

### States

| State           | Meaning                                                                   |
| --------------- | ------------------------------------------------------------------------- |
| \`unchecked\`     | Not selected. Default.                                                    |
| \`checked\`       | Selected.                                                                 |
| \`indeterminate\` | Mixed selection — typically used by a parent over a partially-selected list. |

### Variants

| Prop          | Values                                          | Purpose                                              |
| ------------- | ----------------------------------------------- | ---------------------------------------------------- |
| \`state\`       | \`unchecked\` · \`checked\` · \`indeterminate\`     | Visual + functional state.                           |
| \`placement\`   | \`left\` · \`right\`                              | Box position relative to the label.                  |
| \`label\`       | \`ReactNode\`                                     | Primary text.                                        |
| \`description\` | \`ReactNode\`                                     | Optional secondary text shown under the label.       |
| \`disabled\`    | \`boolean\`                                       | Disables interaction and dims the control.           |
| \`onChange\`    | \`(next, e) => void\`                             | Fires with the next state (\`checked\` / \`unchecked\`). |

### Usage

\`\`\`tsx
import { useState } from 'react'
import { Checkbox, type CheckboxState } from '@company/design-system'

const [state, setState] = useState<CheckboxState>('unchecked')

<Checkbox
  label="Accept terms"
  description="You can withdraw consent at any time."
  state={state}
  onChange={setState}
/>
\`\`\`

### Accessibility
- Native \`<input type="checkbox">\` — full keyboard + screen-reader support out of the box.
- \`aria-checked="mixed"\` is set automatically for the indeterminate state.
- Clicking the label toggles the box (the label is connected via \`htmlFor\`).
        `.trim(),
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Primary label text.' },
    description: { control: 'text', description: 'Optional secondary text shown under the label.' },
    state: {
      control: 'inline-radio',
      options: ['unchecked', 'checked', 'indeterminate'],
      description: 'Visual + functional state.',
    },
    placement: {
      control: 'inline-radio',
      options: ['left', 'right'],
      description: 'Box position relative to the label.',
    },
    disabled: { control: 'boolean', description: 'Disables interaction and dims the control.' },
  },
  args: {
    label: 'Checkbox Label',
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
          'Interactive playground covering every Checkbox variant. Toggle the box to see `onChange` flip the state, or force a state via the **state** control.',
      },
    },
  },
  render: (args) => {
    const [state, setState] = useState<CheckboxState>(args.state)
    // Keep local state in sync when the Controls panel changes the arg.
    useEffect(() => setState(args.state), [args.state])
    return (
      <div style={{ width: 320 }}>
        <Checkbox
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
