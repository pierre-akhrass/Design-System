// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Checkbox/Checkbox.stories.tsx
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, type CheckboxState } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    state: { control: 'inline-radio', options: ['checked', 'unchecked', 'indeterminate'] },
    placement: { control: 'inline-radio', options: ['left', 'right'] },
  },
  args: {
    label: 'Checkbox Label',
    description: 'Description',
    state: 'unchecked',
    placement: 'left',
  },
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Checked: Story = { args: { state: 'checked' } }
export const Unchecked: Story = { args: { state: 'unchecked' } }
export const Indeterminate: Story = { args: { state: 'indeterminate' } }

export const PlacementRight: Story = {
  args: { state: 'checked', placement: 'right' },
  render: (args) => <div style={{ width: 320 }}><Checkbox {...args} /></div>,
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, padding: 24 }}>
      {(['left', 'right'] as const).map((placement) => (
        <div
          key={placement}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
        >
          {(['checked', 'unchecked', 'indeterminate'] as CheckboxState[]).map((s) => (
            <div key={s} style={{ width: 280 }}>
              <Checkbox
                state={s}
                placement={placement}
                label="Checkbox Label"
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
    const [state, setState] = useState<CheckboxState>('unchecked')
    return (
      <Checkbox
        {...args}
        state={state}
        onChange={(next) => setState(next)}
      />
    )
  },
}
