import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip } from './Tooltip'
import type { TooltipTheme } from './Tooltip'

// ── Token backgrounds ─────────────────────────────────────────────────────────

const TOKEN_BG_LIGHT = '#f5f7fa'
const TOKEN_BG_DARK  = '#141f2e'

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A lightweight contextual helper that appears on hover, focus, or interaction to provide additional guidance or clarification. Supports four placements (`top`, `bottom`, `left`, `right`) and dual-theme (light/dark).',
      },
    },
  },
  args: {
    title: 'Title',
    body: 'Body text',
    placement: 'top',
    theme: 'light',
  },
  argTypes: {
    title: { control: 'text', description: 'Primary label — always visible.' },
    body: { control: 'text', description: 'Optional supporting text below the title.' },
    placement: {
      control: 'inline-radio',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Which side the arrow points toward (where the trigger is).',
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Color theme. Without a prop the component follows `prefers-color-scheme`.',
    },
    bgColor: {
      control: 'color',
      description: 'Override background color. Also updates the arrow fill.',
    },
    borderColor: {
      control: 'color',
      description: 'Override border color. Also updates the arrow border layer.',
    },
    textColor: {
      control: 'color',
      description: 'Override text color (title + body).',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

const placements = ['top', 'bottom', 'left', 'right'] as const

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  tags: ['!autodocs'],
  render: (args) => {
    const isDark = args.theme === 'dark'
    // Extra padding so the arrow doesn't get clipped
    return (
      <div style={{
        background: isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT,
        borderRadius: 12,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        transition: 'background 0.2s ease',
      }}>
        <Tooltip {...args} />
      </div>
    )
  },
}

// ── All Tooltips — exact Figma layout (4 placements, both themes) ─────────────

export const AllTooltips: Story = {
  name: 'All Tooltips',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
  args: { theme: 'light' },
  argTypes: {
    title:     { table: { disable: true } },
    body:      { table: { disable: true } },
    placement: { table: { disable: true } },
  },
  render: (args) => {
    const theme = (args.theme ?? 'light') as TooltipTheme
    const isDark = theme === 'dark'
    const pageBg    = isDark ? TOKEN_BG_DARK  : TOKEN_BG_LIGHT
    const chipBg    = isDark ? '#2a3c50' : '#2f3f55'
    const labelColor = isDark ? '#bcbcbc' : '#6b6b6b'

    const sectionTitle: CSSProperties = {
      color: labelColor,
      display: 'block',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      marginBottom: 48,
      textTransform: 'uppercase',
    }

    const chip: CSSProperties = {
      background: chipBg,
      borderRadius: 5,
      color: '#f5f8fc',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 10,
      padding: '2px 8px',
      whiteSpace: 'nowrap',
    }

    // Central trigger circle
    const trigger: CSSProperties = {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: isDark ? '#2a3c50' : '#d2d9e0',
      border: `2px solid ${isDark ? '#bcbcbc' : '#545454'}`,
      flexShrink: 0,
    }

    const ARROW_OFFSET = 12 // px gap between arrow tip and trigger

    return (
      <div style={{
        background: pageBg,
        boxSizing: 'border-box',
        fontFamily: "'Noto Sans', sans-serif",
        minHeight: '100vh',
        padding: '64px',
        transition: 'background 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <span style={sectionTitle}>Placement</span>

        {/* Compass layout: top / [left · trigger · right] / bottom */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gridTemplateRows: 'auto auto auto',
          alignItems: 'center',
          justifyItems: 'center',
          rowGap: ARROW_OFFSET,
          columnGap: ARROW_OFFSET,
        }}>

          {/* Row 1 */}
          <div />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <Tooltip title="Title" body="Body text" placement="top" theme={theme} />
            <span style={chip}>top</span>
          </div>
          <div />

          {/* Row 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <Tooltip title="Title" body="Body text" placement="left" theme={theme} />
            <span style={chip}>left</span>
          </div>
          <div style={trigger} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <Tooltip title="Title" body="Body text" placement="right" theme={theme} />
            <span style={chip}>right</span>
          </div>

          {/* Row 3 */}
          <div />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <Tooltip title="Title" body="Body text" placement="bottom" theme={theme} />
            <span style={chip}>bottom</span>
          </div>
          <div />

        </div>
      </div>
    )
  },
}

// ── Doc stories (Docs tab only, hidden from sidebar) ─────────────────────────

const docRow: CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }
const docLabel: CSSProperties = {
  color: '#6b6b6b',
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
  fontSize: 11,
  marginTop: 8,
  display: 'block',
  textAlign: 'center',
}

/** All four placements with title and body. */
export const Placements: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'The `placement` prop controls which side the arrow points toward — i.e. where the trigger element is.' } },
  },
  render: () => (
    <div style={docRow}>
      {placements.map(placement => (
        <div key={placement} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding:
            placement === 'top'    ? '0 0 10px 0' :
            placement === 'bottom' ? '10px 0 0 0' :
            placement === 'left'   ? '0 10px 0 0' :
            '0 0 0 10px',
        }}>
          <Tooltip title="Title" body="Body text" placement={placement} theme="light" />
          <span style={docLabel}>{placement}</span>
        </div>
      ))}
    </div>
  ),
}

/** Title-only vs title + body. */
export const WithBody: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Omit the `body` prop for a compact single-line tooltip.' } },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 32, paddingBottom: 10, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Tooltip title="Title only" placement="top" theme="light" />
        <span style={docLabel}>title only</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Tooltip title="Title" body="Body text" placement="top" theme="light" />
        <span style={docLabel}>title + body</span>
      </div>
    </div>
  ),
}

/** Light and dark themes side by side. */
export const Themes: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Light theme tooltip is dark navy on a light page. Dark theme inverts to a light surface on a dark page. Both respond to `prefers-color-scheme` automatically when no `theme` prop is set.' } },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 0, borderRadius: 12, overflow: 'hidden' }}>
      {(['light', 'dark'] as const).map(theme => {
        const isDark = theme === 'dark'
        return (
          <div key={theme} style={{
            background: isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            gap: 24,
            padding: '32px 40px 42px', // extra bottom for arrow
          }}>
            <span style={{ ...docLabel, color: isDark ? '#bcbcbc' : '#6b6b6b', textAlign: 'left', marginTop: 0 }}>{theme}</span>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', paddingBottom: 10 }}>
              {placements.map(p => (
                <Tooltip key={p} title="Title" body="Body text" placement={p} theme={theme} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  ),
}
