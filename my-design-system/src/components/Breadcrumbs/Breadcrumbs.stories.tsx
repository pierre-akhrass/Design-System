import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
}
export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Full: Story = {
  args: {
    items: [
      { label: 'Ancestor', href: '#' },
      { label: 'Ancestor', href: '#' },
      { label: 'Ancestor', href: '#' },
      { label: 'Ancestor', href: '#' },
      { label: 'Current', current: true },
    ],
  },
}

export const Collapsed: Story = {
  args: {
    items: [
      { label: 'Ancestor', href: '#' },
      { collapsed: true, href: '#' },
      { label: 'Ancestor', href: '#' },
      { label: 'Current', current: true },
    ],
  },
}

export const ItemVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <BreadcrumbItem variant="ancestor" href="#">
        Ancestor
      </BreadcrumbItem>
      <BreadcrumbItem variant="collapsed" href="#" />
      <BreadcrumbItem variant="current">Current</BreadcrumbItem>
    </div>
  ),
}
