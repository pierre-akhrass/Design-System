import type { Meta, StoryObj } from '@storybook/react'
import { Feedback } from './Feedback'

const meta: Meta<typeof Feedback> = {
  title: 'Components/Feedback',
  component: Feedback,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'A notification component for inline alerts and toast messages.',
          '',
          '## Color Tokens Used',
          '',
          '| Token | Value | Usage |',
          '|-------|-------|-------|',
          '| `--sds-color-background-default-default` | Slate surface | Alert background |',
          '| `--sds-color-border-brand-default` | `#BCBCBC` | Alert border |',
          '| `--sds-color-text-default-secondary` | `#292929` | Alert title |',
          '| `--sds-color-text-default-default` | `#545454` | Alert description |',
          '| `--sds-color-background-default-secondary-system-primary` | `#141F2E` | Toast background |',
          '| `--sds-color-border-brand-secondary` | `#6B6B6B` | Toast border |',
          '| `--Schema-Text-On-Primary` | `#FFF` | Toast text |',
          '| `--Mapping-System-Shadow-Medium` | `rgba(35, 47, 55, 0.10)` | Toast shadow |',
          '| `--radius-md` | `8px` | Border radius |',
          '| `--UI-Font-Family` | `Noto Sans` | Title font |',
          '| `--UI-Size-large` | `16px` | Title size |',
          '| `--UI-Font-Weight-medium` | `500` | Title weight |',
          '| `--sds-typography-body-font-family` | `Noto Sans` | Description font |',
          '| `--sds-typography-body-size-medium` | `14px` | Description size |',
          '| `--Typography-Letter-spacing-tracking-1` | `0` | Letter spacing |',
        ].join('\n'),
      },
    },
  },
  args: {
    title: 'This is the title',
    description: 'A problem was encountered while processing your request.',
    variant: 'alert',
    dismissible: true,
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['alert', 'toast'],
    },
    dismissible: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Feedback>

export const Playground: Story = {
  args: {
    variant: "toast"
  }
}

export const Docs: Story = {
  tags: ['autodocs'],
}
