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
          'A tab navigation component with two visual styles: line tabs and pill tabs. Mobile responsive with horizontal scrolling.',
          '',
          '## Design Tokens Used',
          '',
          '### Color Tokens',
          '| Token | Value | Usage |',
          '|-------|-------|-------|',
          '| `--sds-color-text-default-default` | `#545454` | Default tab text |',
          '| `--sds-color-text-default-secondary` | `#292929` | Active tab text |',
          '| `--sds-color-text-default-tertiary` | — | Line tab default text |',
          '| `--sds-color-border-brand-secondary` | `#6B6B6B` | Active/hover bottom border |',
          '| `--sds-color-background-default-tertiary-system` | `#D2D9E0` | Pill container background |',
          '| `--sds-color-background-default-tertiary` | — | Pill active background |',
          '| `--sds-color-background-default-default` | — | Pill hover background |',
          '| `--sds-color-background-default-secondary-system-primary` | `#141F2E` | Indicator dot |',
          '',
          '### Spacing & Size Tokens',
          '| Token | Value | Usage |',
          '|-------|-------|-------|',
          '| `--sds-size-space-800` | `48px` | Line tab height |',
          '| `--sds-size-space-200` | `8px` | Tab gap |',
          '| `--padding-action-s` | `16px` | Tab horizontal padding |',
          '| `--border-width-2` | `2px` | Active/hover border width |',
          '| `--radius-none` | `0px` | Line tab border-radius |',
          '| `--radius-sm` | `4px` | Pill tab border-radius |',
          '| `--radius-md` | `8px` | Pill container border-radius |',
          '',
          '### Typography Tokens',
          '| Token | Value | Usage |',
          '|-------|-------|-------|',
          '| `--UI-Font-Family` | `Noto Sans` | Tab font family |',
          '| `--UI-Size-xlarge` | `20px` | Line tab font size (desktop) |',
          '| `--UI-Size-medium` | `14px` | Tab font size (mobile) |',
          '| `--UI-Font-Weight-default` | `400` | Default tab weight |',
          '| `--UI-Font-Weight-strong` | `600` | Active tab weight |',
          '| `--Typography-Letter-spacing-tracking-1` | `0` | Letter spacing |',
          '',
          '### Responsive',
          '| Breakpoint | Behaviour |',
          '|------------|-----------|',
          '| `≤ 768px` | Smaller tabs (40px height, 14px font), horizontal scroll |',
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
    tabStyle: "pill",
    activeIndex: 0,
  },
}

export const Docs: Story = {
  tags: ['autodocs'],
}
