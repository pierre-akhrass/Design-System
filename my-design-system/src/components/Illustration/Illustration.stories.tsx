import type { Meta, StoryObj } from '@storybook/react-vite'
import { Illustration } from './Illustration'
import type { IllustrationName, IllustrationSize } from './Illustration'

const allNames: IllustrationName[] = [
  'mechanical-01', 'mechanical-02', 'mechanical-03', 'mechanical-04', 'mechanical-05',
  'mechanical-06', 'mechanical-07', 'mechanical-08', 'mechanical-09', 'mechanical-10',
  'mechanical-11', 'mechanical-12', 'mechanical-13', 'mechanical-14', 'mechanical-15',
  'mechanical-16', 'mechanical-17', 'mechanical-18', 'mechanical-19', 'mechanical-20',
]

const meta: Meta<typeof Illustration> = {
  title: 'Components/Illustration',
  component: Illustration,
  tags: ['autodocs'],
  args: {
    name: 'mechanical-01',
    size: 'lg',
  },
  argTypes: {
    name: {
      control: 'select',
      options: allNames,
    },
    size: {
      // 'inline-radio' for named presets; user can also type a number
      // in the Default story controls panel via the free-text fallback.
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 48, 64, 80, 104, 128, 160, 200, 256],
      description: 'Named preset (sm/md/lg/xl) or any custom pixel number.',
    },
    color: { control: 'color' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Token-aligned illustration renderer for selecting and displaying predefined visual assets.',
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Illustration>

export const Default: Story = {}

export const Sizes: Story = {
  name: 'Sizes',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* Named presets */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>Named presets</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32 }}>
          {([['sm', 48], ['md', 80], ['lg', 104], ['xl', 160]] as [IllustrationSize, number][]).map(([s, px]) => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Illustration {...args} size={s} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#333' }}>{s}</span>
              <span style={{ fontSize: 11, color: '#888' }}>{px}px</span>
            </div>
          ))}
        </div>
      </div>
      {/* Custom pixel sizes */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>Custom pixels</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32 }}>
          {[32, 48, 64, 96, 128, 192].map((px) => (
            <div key={px} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Illustration {...args} size={px} />
              <span style={{ fontSize: 11, color: '#888' }}>{px}px</span>
              <code style={{ fontSize: 10, color: '#aaa' }}>size={`{${px}}`}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  args: { name: 'mechanical-01' },
}

export const Colors: Story = {
  render: (args) => {
    const colors = [
      { label: 'Deep Navy', color: '#003e7e' },
      { label: 'Vibrant Teal', color: '#008c94' },
      { label: 'Golden Beige', color: '#b4814f' },
      { label: 'Danger', color: '#d32f2f' },
      { label: 'Slate', color: '#546e7a' },
    ]
    return (
      <div style={{ display: 'flex', gap: 24 }}>
        {colors.map(({ label, color }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Illustration {...args} color={color} />
            <span style={{ fontSize: 12, color: '#666' }}>{label}</span>
          </div>
        ))}
      </div>
    )
  },
  args: { name: 'mechanical-10', size: 'lg' },
}

export const AllIllustrations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, padding: 16 }}>
      {allNames.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Illustration name={name} size="lg" />
          <span style={{ fontSize: 11, color: '#666' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
}
