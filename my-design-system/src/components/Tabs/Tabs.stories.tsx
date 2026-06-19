import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

const sampleTabs = [
  { label: 'Label' },
  { label: 'Label' },
  { label: 'Label' },
  { label: 'Label' },
  { label: 'Label' },
  { label: 'Label' },
]

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'A tab navigation component with two visual styles: line tabs and pill tabs.',
          '',
          '## Color Tokens Used',
          '',
          '| Token | Value | Usage |',
          '|-------|-------|-------|',
          '| `--sds-color-text-default-default` | `#545454` | Default tab text |',
          '| `--sds-color-text-default-secondary` | `#292929` | Active/hover tab text |',
          '| `--sds-color-border-brand-default` | `#BCBCBC` | Line tabs bottom border |',
          '| `--sds-color-background-default-tertiary-system` | `#D2D9E0` | Pill tabs container background |',
          '| `--sds-color-background-default-secondary-system-primary` | `#141F2E` | Indicator dot |',
          '| `--radius-md` | `8px` | Pill tabs border-radius |',
          '| `--UI-Font-Family` | `Noto Sans` | Tab font |',
          '| `--UI-Size-medium` | `14px` | Tab font size |',
        ].join('\n'),
      },
    },
  },
  args: {
    tabs: sampleTabs,
    tabStyle: 'line',
    activeIndex: 0,
  },
  argTypes: {
    tabStyle: {
      control: 'inline-radio',
      options: ['line', 'pill'],
    },
    activeIndex: { control: 'number' },
  },
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Playground: Story = {
  args: {
    tabs: sampleTabs,
    tabStyle: 'line',
    activeIndex: 0,
  },
}

export const LineDefault: Story = {
  name: 'Line Tabs - Default',
  args: {
    tabs: [
      { label: 'Label' },
      { label: 'Label' },
    ],
    tabStyle: 'line',
    activeIndex: -1,
  },
}

export const LineHover: Story = {
  name: 'Line Tabs - Hover',
  args: {
    tabs: [
      { label: 'Label' },
      { label: 'Label' },
    ],
    tabStyle: 'line',
    activeIndex: -1,
  },
  parameters: { pseudo: { hover: '[role="tab"]:first-child' } },
}

export const LineActive: Story = {
  name: 'Line Tabs - Active',
  args: {
    tabs: [
      { label: 'Label' },
      { label: 'Label' },
    ],
    tabStyle: 'line',
    activeIndex: 0,
  },
}

export const PillDefault: Story = {
  name: 'Pill Tabs - Default',
  args: {
    tabs: sampleTabs,
    tabStyle: 'pill',
    activeIndex: -1,
  },
}

export const PillHover: Story = {
  name: 'Pill Tabs - Hover',
  args: {
    tabs: sampleTabs,
    tabStyle: 'pill',
    activeIndex: -1,
  },
  parameters: { pseudo: { hover: '[role="tab"]:first-child' } },
}

export const PillActive: Story = {
  name: 'Pill Tabs - Active',
  args: {
    tabs: sampleTabs,
    tabStyle: 'pill',
    activeIndex: 0,
  },
}

export const WithIndicator: Story = {
  name: 'Line Tabs - With Indicator',
  args: {
    tabs: [
      { label: 'Label', showIndicator: true },
      { label: 'Label' },
      { label: 'Label' },
      { label: 'Label' },
      { label: 'Label' },
      { label: 'Label' },
    ],
    tabStyle: 'line',
    activeIndex: 0,
  },
}

export const Docs: Story = {
  tags: ['autodocs'],
}
