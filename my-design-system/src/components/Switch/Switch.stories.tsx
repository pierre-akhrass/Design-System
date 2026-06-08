// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Switch/Switch.stories.tsx
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch, type SwitchState } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    state: { control: 'inline-radio', options: ['checked', 'unchecked'] },
    placement: { control: 'inline-radio', options: ['left', 'right'] },
  },
  args: {
    label: 'Switch Label',
    description: 'Description',
    state: 'unchecked',
    placement: 'left',
  },
}
export default meta

type Story = StoryObj<typeof Switch>

export const Checked: Story = { args: { state: 'checked' } }
export const Unchecked: Story = { args: { state: 'unchecked' } }

export const PlacementRight: Story = {
  args: { state: 'checked', placement: 'right' },
  render: (args) => <div style={{ width: 320 }}><Switch {...args} /></div>,
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, padding: 24 }}>
      {(['right', 'left'] as const).map((placement) => (
        <div
          key={placement}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}
        >
          {(['checked', 'unchecked'] as SwitchState[]).map((s) => (
            <div key={s} style={{ width: 280 }}>
              <Switch
                state={s}
                placement={placement}
                label="Switch Label"
                description="Description"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const Interactive: Story = {
  render: (args) => {
    const [state, setState] = useState<SwitchState>('unchecked')
    return (
      <Switch
        {...args}
        state={state}
        onChange={(next) => setState(next)}
      />
    )
  },
}
