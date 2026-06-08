import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs'
import './Breadcrumbs.stories.scss'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Ancestor', href: '#' },
      { label: 'Ancestor', href: '#' },
      { label: 'Current', current: true },
    ],
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Breadcrumb sequence. Use { collapsed: true } for the collapsed node.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Hierarchical navigation trail for showing location and allowing quick back-navigation through levels.',
      },
    },
  },
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
    <div className="ds-breadcrumbs-stories__variants">
      <BreadcrumbItem variant="ancestor" href="#">
        Ancestor
      </BreadcrumbItem>
      <BreadcrumbItem variant="collapsed" href="#" />
      <BreadcrumbItem variant="current">Current</BreadcrumbItem>
    </div>
  ),
}
