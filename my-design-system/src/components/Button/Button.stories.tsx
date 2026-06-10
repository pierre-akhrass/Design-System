import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const StarIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
    <path
      d="M12 2.5l2.9 5.88 6.49.94-4.69 4.58 1.11 6.47L12 17.34l-5.81 3.03 1.11-6.47L2.61 9.32l6.49-.94L12 2.5z"
      fill="currentColor"
    />
  </svg>
)

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Primary interactive element. Supports `filled`, `outlined`, and `plain` variants with optional leading/trailing icons or icon-only mode.',
      },
    },
  },
  args: {
    children: 'Button',
    variant: 'filled',
    state: 'default',
    iconOnly: false,
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['filled', 'outlined', 'plain'],
    },
    state: {
      control: 'inline-radio',
      options: ['default', 'focus', 'hover', 'pressed', 'disabled'],
    },
    iconOnly: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

const matrixVariants = ['filled', 'outlined', 'plain'] as const
const matrixStates = ['default', 'focus', 'hover', 'pressed', 'disabled'] as const

const matrixWrapperStyle: CSSProperties = {
  display: 'grid',
  gap: '1rem',
  maxWidth: '960px',
  width: '100%',
}

const matrixHeaderRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '120px repeat(5, minmax(120px, 1fr))',
  gap: '0.75rem',
  alignItems: 'center',
}

const matrixRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '120px repeat(5, minmax(120px, 1fr))',
  gap: '0.75rem',
  alignItems: 'center',
}

const matrixLabelStyle: CSSProperties = {
  fontFamily: "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: '0.875rem',
  color: '#2f3a4a',
}

const stateChipStyle: CSSProperties = {
  ...matrixLabelStyle,
  justifySelf: 'start',
  background: '#2f3f55',
  borderRadius: '8px',
  color: '#f5f8fc',
  padding: '0.25rem 0.625rem',
}

const sectionTitleStyle: CSSProperties = {
  ...matrixLabelStyle,
  fontWeight: 700,
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
}

export const Playground: Story = {
  name: 'Playground',
}

export const AllStates: Story = {
  name: 'All States',
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return (
      <div style={matrixWrapperStyle}>
        <div style={sectionTitleStyle}>Text Buttons</div>

        <div style={matrixHeaderRowStyle}>
          <div />
          {matrixStates.map((state) => (
            <div key={`header-text-${state}`} style={stateChipStyle}>
              {state[0].toUpperCase() + state.slice(1)}
            </div>
          ))}
        </div>

        {matrixVariants.map((variant) => (
          <div key={`text-row-${variant}`} style={matrixRowStyle}>
            <div style={matrixLabelStyle}>{variant[0].toUpperCase() + variant.slice(1)}</div>
            {matrixStates.map((state) => (
              <Button key={`text-${variant}-${state}`} variant={variant} state={state}>
                Button
              </Button>
            ))}
          </div>
        ))}

        <div style={sectionTitleStyle}>Icon Only</div>

        <div style={matrixHeaderRowStyle}>
          <div />
          {matrixStates.map((state) => (
            <div key={`header-icon-${state}`} style={stateChipStyle}>
              {state[0].toUpperCase() + state.slice(1)}
            </div>
          ))}
        </div>

        {matrixVariants.map((variant) => (
          <div key={`icon-row-${variant}`} style={matrixRowStyle}>
            <div style={matrixLabelStyle}>{variant[0].toUpperCase() + variant.slice(1)}</div>
            {matrixStates.map((state) => (
              <Button
                key={`icon-${variant}-${state}`}
                variant={variant}
                state={state}
                iconOnly={true}
                icon={<StarIcon />}
                aria-label={`${variant} ${state} icon button`}
              />
            ))}
          </div>
        ))}
      </div>
    )
  },
}
