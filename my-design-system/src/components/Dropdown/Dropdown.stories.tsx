import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fragment } from 'react'
import { Dropdown, DropdownDivider } from './Dropdown'
import { NavItem } from '../NavItem'
import { Button } from '../Button'
import type { ButtonVariant } from '../Button'
import type { DropdownColorMode } from './Dropdown'

/**
 * A dropdown row can be one of:
 *  - { kind: 'item', label }      -> renders a NavItem (tier-2)
 *  - { kind: 'divider' }          -> renders a DropdownDivider
 *  - { kind: 'button', label, variant } -> renders a Button
 *
 * The Storybook Controls panel lets you edit this list live: add rows,
 * remove rows, rename labels, switch button variants, etc.
 */
type DropdownRow =
  | { kind: 'item'; label: string }
  | { kind: 'divider' }
  | { kind: 'button'; label: string; variant?: ButtonVariant }

type PlaygroundArgs = {
  colorMode: DropdownColorMode
  rows: DropdownRow[]
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Components/Dropdown',
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<PlaygroundArgs>

const renderRows = (rows: DropdownRow[], colorMode: DropdownColorMode) =>
  rows.map((row, i) => {
    if (row.kind === 'divider') {
      return <DropdownDivider key={`divider-${i}`} />
    }
    if (row.kind === 'button') {
      return (
        <Button key={`button-${i}-${row.label}`} variant={row.variant ?? 'filled'}>
          {row.label}
        </Button>
      )
    }
    return (
      <NavItem
        key={`item-${i}-${row.label}`}
        hierarchy="tier-2"
        label={row.label}
        colorMode={colorMode}
      />
    )
  })

export const Playground: Story = {
  args: {
    colorMode: 'light',
    rows: [
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'divider' },
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'button', label: 'Button', variant: 'filled' },
    ],
  },
  argTypes: {
    colorMode: { control: 'inline-radio', options: ['light', 'dark'] },
    rows: {
      control: 'object',
      description:
        'Edit this array in the Controls panel. Each row is { kind: "item" | "divider" | "button", label?, variant? }.',
    },
  },
  render: ({ rows, colorMode }) => (
    <Dropdown colorMode={colorMode}>
      <Fragment>{renderRows(rows, colorMode)}</Fragment>
    </Dropdown>
  ),
}

export const Dark: Story = {
  args: {
    colorMode: 'dark',
    rows: [
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'divider' },
      { kind: 'item', label: 'Tier 2 Label' },
      { kind: 'button', label: 'Button', variant: 'filled' },
    ],
  },
  argTypes: {
    colorMode: { control: 'inline-radio', options: ['light', 'dark'] },
    rows: { control: 'object' },
  },
  parameters: { backgrounds: { default: 'dark' } },
  render: ({ rows, colorMode }) => (
    <div style={{ background: '#141f2e', padding: 24 }}>
      <Dropdown colorMode={colorMode}>{renderRows(rows, colorMode)}</Dropdown>
    </div>
  ),
}
