import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Pagination } from './Pagination'
import './Pagination.stories.scss'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['ai-generated'],
  args: {
    theme: 'light',
    controlMode: 'icon-only',
    showControls: true,
    canGoPrevious: true,
    canGoNext: true,
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    controlMode: {
      control: 'inline-radio',
      options: ['icon-only', 'label'],
    },
    showControls: { control: 'boolean' },
    canGoPrevious: { control: 'boolean' },
    canGoNext: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Pagination>

const numericEntries = [
  { id: '1', label: 1 },
  { id: '2', label: 2 },
  { id: '3', label: 3 },
  { id: '4', label: 4 },
  { id: '5', label: 5 },
  { id: 'ellipsis', label: '...', kind: 'truncation' as const },
  { id: '10', label: 10 },
]

const letterEntries = 'ABCDEFGHIJKLMN'.split('').map((letter) => ({ id: letter, label: letter }))

export const Playground: Story = {
  args: {
    entries: numericEntries,
    activeValue: 1,
  },
}

export const Letters: Story = {
  args: {
    entries: letterEntries,
    activeValue: 'A',
    showControls: false,
  },
}

export const Documentation: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="ds-pagination-doc">
      <Pagination
        entries={numericEntries}
        activeValue={1}
        controlMode="icon-only"
        theme="light"
        aria-label="Pagination icon-only"
      />
      <Pagination
        entries={numericEntries}
        activeValue={1}
        controlMode="label"
        theme="light"
        aria-label="Pagination labeled controls"
      />
      <Pagination
        entries={letterEntries}
        activeValue="A"
        showControls={false}
        theme="light"
        aria-label="Pagination letters"
      />
      <div className="ds-pagination-doc__dark-row">
        <Pagination
          entries={numericEntries}
          activeValue={1}
          controlMode="icon-only"
          theme="dark"
          aria-label="Pagination dark"
        />
      </div>
    </div>
  ),
}

export const CssCheck: Story = {
  args: {
    entries: numericEntries,
    activeValue: 1,
    controlMode: 'icon-only',
    theme: 'light',
  },
  play: async ({ canvas }) => {
    const active = canvas.getByRole('button', { current: 'page' })
    await expect(getComputedStyle(active).color).toBe('rgb(41, 41, 41)')
  },
}
