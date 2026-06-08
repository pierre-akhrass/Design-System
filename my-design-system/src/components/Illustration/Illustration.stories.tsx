import type { Meta, StoryObj } from '@storybook/react-vite'
import { Illustration } from './Illustration'
import type { IllustrationName, IllustrationTheme } from './Illustration'

const allNames: IllustrationName[] = [
  'mechanical-01', 'mechanical-02', 'mechanical-03', 'mechanical-04', 'mechanical-05',
  'mechanical-06', 'mechanical-07', 'mechanical-08', 'mechanical-09', 'mechanical-10',
  'mechanical-11', 'mechanical-12', 'mechanical-13', 'mechanical-14', 'mechanical-15',
  'mechanical-16', 'mechanical-17', 'mechanical-18', 'mechanical-19', 'mechanical-20',
]

const meta: Meta<typeof Illustration> = {
  title: 'Components/Illustration',
  component: Illustration,
  parameters: {
    docs: {
      description: {
        component:
          'Renders a named SVG illustration in a themed colour context. Supports `light` and `dark` themes, named size presets (`sm` / `md` / `lg` / `xl`) or a custom pixel number.',
      },
    },
  },
  args: {
    name: 'mechanical-01',
    theme: 'light',
    size: 'lg',
  },
  argTypes: {
    name: {
      control: 'select',
      options: allNames,
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 48, 64, 80, 104, 128, 160, 200, 256],
      description: 'Named preset (sm/md/lg/xl) or custom pixel number.',
    },
    color: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof Illustration>

// ─── Story 1: Playground ──────────────────────────────────────────────────────
// Wraps the illustration in a background that matches the chosen theme so the
// icon is always seen against the correct Figma canvas colour.
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const bg = args.theme === 'dark' ? '#141f2e' : undefined
    return (
      <div style={{ background: bg, display: 'inline-flex', padding: bg ? 24 : 0, borderRadius: 8, transition: 'background 0.2s ease' }}>
        <Illustration {...args} />
      </div>
    )
  },
}

// ─── Story 2: All Illustrations ───────────────────────────────────────────────
// theme is driven by the Controls panel (inline-radio in the args panel).
// name / size / color are hidden since they don't apply to the full grid.
function AllIllustrationsCanvas({ theme = 'light' }: { theme?: IllustrationTheme }) {
  const isDark = theme === 'dark'

  // Figma token colours:
  // light bg → $mapping-system-slate-surface-primary    #f5f7fa
  // dark  bg → $mapping-system-slate-background-primary #141f2e
  const bg         = isDark ? '#141f2e' : '#f5f7fa'
  const labelColor = isDark ? '#8099b3' : '#6b6b6b'

  return (
    <div
      style={{
        minHeight: '100vh',
        background: bg,
        padding: '40px 48px',
        transition: 'background 0.2s ease',
        fontFamily: "'Noto Sans', sans-serif",
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gap: '12px 8px',
      }}>
        {allNames.map((name) => (
          <div key={name} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
          }}>
            <Illustration name={name} size="sm" theme={theme} />
            <span style={{
              fontSize: 9,
              color: labelColor,
              textAlign: 'center',
              letterSpacing: '0.03em',
            }}>
              {name.replace('mechanical-', '')}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const AllIllustrations: Story = {
  name: 'All Illustrations',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
  args: { theme: 'light' },
  argTypes: {
    // Only theme is controllable for this story
    name:  { table: { disable: true } },
    size:  { table: { disable: true } },
    color: { table: { disable: true } },
  },
  render: (args) => <AllIllustrationsCanvas theme={args.theme} />,
}
