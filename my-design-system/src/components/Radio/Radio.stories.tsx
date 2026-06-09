// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Radio/Radio.stories.tsx
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Radio, type RadioState } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  argTypes: {
    state: { control: 'inline-radio', options: ['checked', 'unchecked'] },
    placement: { control: 'inline-radio', options: ['left', 'right'] },
  },
  args: {
    label: 'Radio Label',
    description: 'Description',
    state: 'unchecked',
    placement: 'left',
  },
}
export default meta

type Story = StoryObj<typeof Radio>

export const Checked: Story = { args: { state: 'checked' } }
export const Unchecked: Story = { args: { state: 'unchecked' } }

export const PlacementRight: Story = {
  args: { state: 'checked', placement: 'right' },
  render: (args) => <div style={{ width: 320 }}><Radio {...args} /></div>,
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, padding: 24 }}>
      {(['left', 'right'] as const).map((placement) => (
        <div
          key={placement}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}
        >
          {(['checked', 'unchecked'] as RadioState[]).map((s) => (
            <div key={s} style={{ width: 280 }}>
              <Radio
                state={s}
                placement={placement}
                label="Radio Label"
                description="Description"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const Group: Story = {
  render: () => {
    const [value, setValue] = useState('one')
    const options = [
      { value: 'one', label: 'Option One', description: 'First option in the group' },
      { value: 'two', label: 'Option Two', description: 'Second option in the group' },
      { value: 'three', label: 'Option Three', description: 'Third option in the group' },
    ]
    return (
      <div style={{ display: 'grid', gap: 16, padding: 24 }} role="radiogroup">
        {options.map((o) => (
          <Radio
            key={o.value}
            name="demo-group"
            value={o.value}
            label={o.label}
            description={o.description}
            state={value === o.value ? 'checked' : 'unchecked'}
            onChange={(next) => next === 'checked' && setValue(o.value)}
          />
        ))}
      </div>
    )
  },
}
