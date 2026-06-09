import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fragment } from 'react'
import { Dropdown, DropdownDivider } from './Dropdown'
import { NavItem } from '../NavItem'
import { Button } from '../Button'
import type { ButtonVariant } from '../Button'

/**
 * A dropdown row can be one of:
 *  - { kind: 'item', label }              -> renders a NavItem (tier-2)
 *  - { kind: 'divider' }                  -> renders a DropdownDivider
 *  - { kind: 'button', label, variant }   -> renders a Button
 *
 * The Storybook Controls panel lets you edit this list live: add rows,
 * remove rows, rename labels, switch button variants, etc.
 */
type DropdownRow =
  | { kind: 'item'; label: string }
  | { kind: 'divider' }
  | { kind: 'button'; label: string; variant?: ButtonVariant }

type PlaygroundArgs = {
  rows: DropdownRow[]
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Dropdown

A vertically stacked menu surface used for navigation menus, account/profile
menus, and overflow actions. It's a thin container — content is fully
composable from \`NavItem\`s, \`DropdownDivider\`s, and an optional trailing
\`Button\`.

### Anatomy
- **Item** — a clickable row (rendered as a \`NavItem\` with \`hierarchy="tier-2"\`).
- **Divider** — a thin rule used to group items.
- **Action button** — an optional trailing primary/secondary \`Button\`.

### When to use
- Account menus, "more actions" overflow, navigation submenus, filter menus.
- Anywhere you need a small list of related actions or links anchored to a trigger.

### When *not* to use
- For selecting one value from a long list — use a Select / Combobox instead.
- For primary site navigation — use the \`Navbar\` + \`NavItem\` directly.

### Usage

\`\`\`tsx
import { Dropdown, DropdownDivider } from '@company/design-system'
import { NavItem, Button } from '@company/design-system'

<Dropdown>
  <NavItem hierarchy="tier-2" label="Profile" href="/profile" />
  <NavItem hierarchy="tier-2" label="Settings" href="/settings" />
  <DropdownDivider />
  <NavItem hierarchy="tier-2" label="Sign out" onClick={signOut} />
  <Button variant="filled">Action</Button>
</Dropdown>
\`\`\`

### Composition rules
- Children render in document order — no auto-sorting.
- Use \`DropdownDivider\` to group related items.
- Action \`Button\`s are typically last; one per dropdown is recommended.

### Theming
Colors are inherited from the global "Selection colors" CSS custom properties
defined in \`src/styles/global.scss\`. Override them on \`:root\` or a section
element to retheme the dropdown and every other consumer.

\`\`\`css
--sds-color-text-default-default
--sds-color-background-default-default
--sds-color-background-default-tertiary
--sds-color-border-brand-secondary
\`\`\`

### Accessibility
- The container has \`role="menu"\`.
- The divider has \`role="separator"\`.
- Child \`NavItem\`s render as real \`<a>\` elements, so keyboard and
  screen-reader navigation work out of the box.
        `.trim(),
      },
    },
  },
}
export default meta

type Story = StoryObj<PlaygroundArgs>

const renderRows = (rows: DropdownRow[]) =>
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
      />
    )
  })

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground. Edit the **rows** array in the Controls panel to add, remove, reorder, or rename rows. Each row is `{ kind: "item" | "divider" | "button", label?, variant? }`.',
      },
    },
  },
  args: {
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
    rows: {
      control: 'object',
      description:
        'Edit this array in the Controls panel. Each row is `{ kind: "item" | "divider" | "button", label?, variant? }`.',
    },
  },
  render: ({ rows }) => (
    <Dropdown>
      <Fragment>{renderRows(rows)}</Fragment>
    </Dropdown>
  ),
}
