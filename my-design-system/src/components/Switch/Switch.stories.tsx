import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch, type SwitchState } from './Switch'

type PlaygroundArgs = {
  label: string
  description: string
  state: SwitchState
  placement: 'left' | 'right'
  disabled: boolean
  interactive: boolean
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Inputs/Switch (sereneogilvy)',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Switch

A two-state toggle for turning a setting on or off **immediately** (without a confirm step).
Renders as a real \`<input type="checkbox" role="switch">\` so it stays accessible to
keyboard users and screen readers.

### Anatomy
- **Track** — pill-shaped background; color reflects the state.
- **Knob** — circular indicator that slides between off (left) and on (right).
- **Label** — primary text describing what the switch controls.
- **Description** — optional helper text under the label.

### When to use
- Settings that take effect instantly (notifications, dark mode, feature toggles).
- Boolean preferences inside forms where saving is automatic.

### When *not* to use
- Inside a form that's only saved on submit — use a \`Checkbox\` instead.
- For selecting one of several options — use \`Radio\`.

### Variants

| Prop          | Values                       | Purpose                                              |
| ------------- | ---------------------------- | ---------------------------------------------------- |
| \`state\`       | \`checked\` · \`unchecked\`      | Visual + functional state.                           |
| \`placement\`   | \`left\` · \`right\`             | Track on the left or right of the label.             |
| \`label\`       | \`ReactNode\`                  | Primary label text.                                  |
| \`description\` | \`ReactNode\`                  | Helper text under the label.                         |
| \`disabled\`    | \`boolean\`                    | Greys out the control and blocks interaction.        |
| \`onChange\`    | \`(next, event) => void\`      | Fires with the next \`SwitchState\` when toggled.      |

### Usage

\`\`\`tsx
import { Switch, type SwitchState } from '@company/design-system'

const [state, setState] = useState<SwitchState>('unchecked')

<Switch
  label="Enable notifications"
  description="We'll email you when a build finishes."
  state={state}
  onChange={(next) => setState(next)}
/>
\`\`\`

### Accessibility
- Renders as \`<input type="checkbox" role="switch">\` with \`aria-checked\`.
- The label is associated via \`htmlFor\`/\`id\` so clicking the label toggles the switch.
- Keyboard: \`Space\` toggles, \`Tab\` moves focus.
- Disabled state is conveyed via the native \`disabled\` attribute.
        `.trim(),
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Primary label text.' },
    description: { control: 'text', description: 'Helper text under the label.' },
    state: {
      control: 'inline-radio',
      options: ['checked', 'unchecked'],
      description: 'Visual + functional state.',
    },
    placement: {
      control: 'inline-radio',
      options: ['left', 'right'],
      description: 'Track on the left or right of the label.',
    },
    disabled: { control: 'boolean', description: 'Disable the control.' },
    interactive: {
      control: 'boolean',
      description:
        'When on, the playground manages its own state so the switch toggles on click. When off, `state` is forced from the Controls panel.',
    },
  },
}
export default meta

type Story = StoryObj<PlaygroundArgs>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground covering every Switch variant. Toggle **interactive** to make the switch manage its own state, or leave it off to force a specific `state` from the Controls panel.',
      },
    },
  },
  args: {
    label: 'Switch Label',
    description: 'Description',
    state: 'unchecked',
    placement: 'left',
    disabled: false,
    interactive: true,
  },
  render: ({ interactive, ...args }) => {
    if (!interactive) {
      return (
        <div style={{ width: 320 }}>
          <Switch {...args} />
        </div>
      )
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState<SwitchState>(args.state)
    return (
      <div style={{ width: 320 }}>
        <Switch
          {...args}
          state={state}
          onChange={(next) => setState(next)}
        />
      </div>
    )
  },
}
