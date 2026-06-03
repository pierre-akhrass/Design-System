import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dropdown, DropdownDivider } from './Dropdown'
import { NavItem } from '../NavItem'
import { Button } from '../Button'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    colorMode: 'light',
  },
  argTypes: {
    colorMode: { control: 'inline-radio', options: ['light', 'dark'] },
  },
}
export default meta

type Story = StoryObj<typeof Dropdown>

const defaultItems = [
  { key: 'a', label: 'Tier 2 Label' },
  { key: 'b', label: 'Tier 2 Label' },
  { key: 'c', label: 'Tier 2 Label' },
  { key: 'd', label: 'Tier 2 Label' },
]

export const Playground: Story = {
  render: (args) => (
    <Dropdown {...args}>
      {defaultItems.map((item) => (
        <NavItem
          key={item.key}
          hierarchy="tier-2"
          label={item.label}
          colorMode={args.colorMode}
        />
      ))}
      <DropdownDivider />
      <NavItem hierarchy="tier-2" label="Tier 2 Label" colorMode={args.colorMode} />
      <Button>Button</Button>
    </Dropdown>
  ),
}

export const Dark: Story = {
  args: { colorMode: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
  render: (args) => (
    <div style={{ background: '#141f2e', padding: 24 }}>
      <Dropdown {...args}>
        {defaultItems.map((item) => (
          <NavItem
            key={item.key}
            hierarchy="tier-2"
            label={item.label}
            colorMode="dark"
          />
        ))}
        <DropdownDivider />
        <NavItem hierarchy="tier-2" label="Tier 2 Label" colorMode="dark" />
        <Button>Button</Button>
      </Dropdown>
    </div>
  ),
}
