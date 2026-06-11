import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './Tag'
import type { TagTheme } from './Tag'

// ── Star icon (matches Figma) ─────────────────────────────────────────────────

const StarIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
)

// ── Token backgrounds ─────────────────────────────────────────────────────────

const TOKEN_BG_LIGHT = '#f5f7fa'
const TOKEN_BG_DARK  = '#141f2e'

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag (Maher Al Rifai)',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A compact label used to categorise or annotate content. Supports an optional leading and/or trailing icon and two interaction states: `default` and `hover`.',
      },
    },
  },
  args: {
    label: 'Label',
    state: 'default',
    theme: 'light',
  },
  argTypes: {
    label: { control: 'text' },
    state: {
      control: 'inline-radio',
      options: ['default', 'hover'],
      description: 'Visual interaction state.',
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Color theme. Without a prop the component follows `prefers-color-scheme`.',
    },
    // Booleans that toggle the icon slots in the Playground
    showIconStart: {
      control: 'boolean',
      description: 'Show a leading icon (icon start).',
      table: { category: 'Icons' },
    },
    showIconEnd: {
      control: 'boolean',
      description: 'Show a trailing icon (icon end).',
      table: { category: 'Icons' },
    },
    // Hide the raw ReactNode props from controls — they are driven by the booleans above
    iconStart: { control: false, table: { disable: true } },
    iconEnd:   { control: false, table: { disable: true } },
    // Custom color overrides
    bgColor: {
      control: 'color',
      description: 'Override the background color.',
      table: { category: 'Colors' },
    },
    textColor: {
      control: 'color',
      description: 'Override text and icon color.',
      table: { category: 'Colors' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

const structures = [
  { key: 'label',      iconStart: undefined,     iconEnd: undefined,     label: 'Label' },
  { key: 'iconStart',  iconStart: <StarIcon />,   iconEnd: undefined,     label: 'Label' },
  { key: 'iconEnd',    iconStart: undefined,      iconEnd: <StarIcon />,  label: 'Label' },
  { key: 'iconBoth',   iconStart: <StarIcon />,   iconEnd: <StarIcon />,  label: 'Label' },
] as const

const states = ['default', 'hover'] as const

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  tags: ['!autodocs'],
  args: { showIconStart: false, showIconEnd: false } as any,
  render: (args) => {
    const isDark = args.theme === 'dark'
    const a = args as any
    return (
      <div style={{
        background: isDark ? TOKEN_BG_DARK : undefined,
        borderRadius: 12,
        display: 'inline-flex',
        padding: isDark ? 20 : 0,
        transition: 'background 0.2s ease',
      }}>
        <Tag
          {...args}
          iconStart={a.showIconStart ? <StarIcon /> : undefined}
          iconEnd={a.showIconEnd   ? <StarIcon /> : undefined}
        />
      </div>
    )
  },
}

// ── All Tags — exact Figma layout (both themes) ───────────────────────────────

export const AllTags: Story = {
  name: 'All Tags',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
  args: { theme: 'light' },
  argTypes: {
    label: { table: { disable: true } },
    state: { table: { disable: true } },
    iconStart: { table: { disable: true } },
    iconEnd:   { table: { disable: true } },
  },
  render: (args) => {
    const theme = (args.theme ?? 'light') as TagTheme
    const isDark = theme === 'dark'
    const pageBg = isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT

    const sectionTitle: CSSProperties = {
      color: isDark ? '#bcbcbc' : '#6b6b6b',
      display: 'block',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      marginBottom: 16,
      textTransform: 'uppercase',
    }

    const rowLabel: CSSProperties = {
      color: isDark ? '#bcbcbc' : '#6b6b6b',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 11,
      minWidth: 72,
    }

    const chip: CSSProperties = {
      background: isDark ? '#2a3c50' : '#2f3f55',
      borderRadius: 5,
      color: '#f5f8fc',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 10,
      padding: '2px 8px',
      whiteSpace: 'nowrap',
    }

    return (
      <div style={{
        background: pageBg,
        boxSizing: 'border-box',
        fontFamily: "'Noto Sans', sans-serif",
        minHeight: '100vh',
        padding: '48px 64px',
        transition: 'background 0.2s ease',
      }}>

        {/* ── Structure ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 56 }}>
          <span style={sectionTitle}>Structure</span>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { key: 'label',     iconStart: undefined,    iconEnd: undefined,    label: 'Label' },
              { key: 'iconStart', iconStart: <StarIcon />, iconEnd: undefined,    label: 'Label' },
              { key: 'iconEnd',   iconStart: undefined,    iconEnd: <StarIcon />, label: 'Label' },
              { key: 'iconBoth',  iconStart: <StarIcon />, iconEnd: <StarIcon />, label: 'Label' },
            ].map(({ key, iconStart, iconEnd, label }) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <Tag label={label} iconStart={iconStart} iconEnd={iconEnd} theme={theme} />
                <span style={chip}>{key}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── State ─────────────────────────────────────────────────────── */}
        <div>
          <span style={sectionTitle}>State</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {states.map(state => (
              <div key={state} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <span style={rowLabel}>{state}</span>
                {structures.map(({ key, iconStart, iconEnd, label }) => (
                  <Tag
                    key={key}
                    label={label}
                    iconStart={iconStart}
                    iconEnd={iconEnd}
                    state={state}
                    theme={theme}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    )
  },
}

// ── Doc stories (Docs tab only) ───────────────────────────────────────────────

const docRow: CSSProperties = { display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }
const docLabel: CSSProperties = {
  color: '#6b6b6b',
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
  fontSize: 11,
  minWidth: 64,
}

/** Label only, with leading icon, with trailing icon, with both icons. */
export const Structure: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Four structural variants: label only, icon start, icon end, and both icons.' } },
  },
  render: () => (
    <div style={docRow}>
      <Tag label="Label" />
      <Tag label="Label" iconStart={<StarIcon />} />
      <Tag label="Label" iconEnd={<StarIcon />} />
      <Tag label="Label" iconStart={<StarIcon />} iconEnd={<StarIcon />} />
    </div>
  ),
}

/** Default and hover states side by side. */
export const States: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'The `hover` state can be forced via the `state` prop — useful in design documentation and visual tests.' } },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {states.map(state => (
        <div key={state} style={docRow}>
          <span style={docLabel}>{state}</span>
          <Tag label="Label" state={state} />
          <Tag label="Label" state={state} iconStart={<StarIcon />} />
          <Tag label="Label" state={state} iconEnd={<StarIcon />} />
          <Tag label="Label" state={state} iconStart={<StarIcon />} iconEnd={<StarIcon />} />
        </div>
      ))}
    </div>
  ),
}

/** Light and dark themes side by side. */
export const Themes: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Pass `theme="dark"` for the dark palette. Without a theme prop the component follows `prefers-color-scheme: dark` automatically.' } },
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
            gap: 12,
            padding: '24px 32px',
          }}>
            <span style={{ ...docLabel, color: isDark ? '#bcbcbc' : '#6b6b6b' }}>{theme}</span>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Tag label="Default"    state="default" theme={theme} />
              <Tag label="Hover"      state="hover"   theme={theme} />
              <Tag label="With icon"  state="default" iconStart={<StarIcon />} theme={theme} />
              <Tag label="With icon"  state="hover"   iconEnd={<StarIcon />}   theme={theme} />
            </div>
          </div>
        )
      })}
    </div>
  ),
}
