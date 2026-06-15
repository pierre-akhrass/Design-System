import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'
import type { AvatarProps } from './Avatar'
import type { AvatarTheme } from './Avatar'
import { AvatarGroup } from './AvatarGroup'
import { AvatarBlock } from './AvatarBlock'

// ─── Shared placeholder icon ──────────────────────────────────────────────────

const PersonIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="60%" height="60%" fill="currentColor">
    <path d="M12 12c2.69 0 4.8-2.11 4.8-4.8S14.69 2.4 12 2.4 7.2 4.51 7.2 7.2 9.31 12 12 12zm0 2.4c-3.2 0-9.6 1.61-9.6 4.8v2.4h19.2v-2.4c0-3.19-6.4-4.8-9.6-4.8z" />
  </svg>
)

// ─── Token bg colours ─────────────────────────────────────────────────────────
const TOKEN_BG_LIGHT = '#f5f7fa'
const TOKEN_BG_DARK  = '#141f2e'

const IMG = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
]

// ─── Meta ─────────────────────────────────────────────────────────────────────

type AvatarStoryArgs = AvatarProps & {
  spacing?: 'overlap' | 'spaced'
  showOverflow?: boolean
  overflowCount?: number
  title?: string
  description?: string
}

const meta: Meta<AvatarStoryArgs> = {
  title: 'Components/Avatar (Maher Al Rifai)',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An **Avatar** represents a user or entity through one of three types: \`initial\` (letter monogram), \`image\` (photo), or \`shape\` (icon placeholder).

---

### Sub-components

| Component | Purpose |
|---|---|
| \`Avatar\` | Single avatar circle |
| \`AvatarGroup\` | Row of avatars with optional overflow badge |
| \`AvatarBlock\` | Avatar + title + description row |

---

### Theming

Pass \`theme="dark"\` to any of the three components for the dark-mode palette. They also respond automatically to \`prefers-color-scheme: dark\` when no theme prop is set.
        `,
      },
    },
  },
  args: {
    type: 'initial',
    size: 'medium',
    initials: 'A',
    theme: 'light',
  },
  argTypes: {
    // ── Avatar ──────────────────────────────────────────────────────────────
    type: {
      control: 'inline-radio',
      options: ['initial', 'image', 'shape'],
      description: 'Visual representation style.',
      table: { category: 'Avatar' },
    },
    size: {
      control: 'inline-radio',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'Diameter of the avatar circle.',
      table: { category: 'Avatar' },
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Color theme — shared across Avatar, Avatar Group, and Avatar Block.',
      table: { category: 'Avatar' },
    },
    initials: {
      control: 'text',
      description: 'Letter(s) shown when `type="initial"`.',
      table: { category: 'Avatar' },
    },
    src: {
      control: 'text',
      description: 'Image URL shown when `type="image"`.',
      table: { category: 'Avatar' },
    },
    alt: {
      control: 'text',
      description: 'Accessible label for the image.',
      table: { category: 'Avatar' },
    },
    icon: {
      control: false,
      description: 'React node rendered inside the circle when `type="shape"`.',
      table: { category: 'Avatar' },
    },
    // ── Avatar Group ────────────────────────────────────────────────────────
    spacing: {
      control: 'inline-radio',
      options: ['overlap', 'spaced'],
      description: 'Overlap stacks avatars with a negative margin; spaced uses a gap.',
      table: { category: 'Avatar Group' },
    },
    showOverflow: {
      control: 'boolean',
      description: 'Whether to render the overflow count badge.',
      table: { category: 'Avatar Group' },
    },
    overflowCount: {
      control: 'number',
      description: 'Number displayed inside the overflow badge.',
      table: { category: 'Avatar Group' },
    },
    // ── Avatar Block ────────────────────────────────────────────────────────
    title: {
      control: 'text',
      description: 'Primary text label next to the avatar.',
      table: { category: 'Avatar Block' },
    },
    description: {
      control: 'text',
      description: 'Secondary/supporting text below the title.',
      table: { category: 'Avatar Block' },
    },
  },
}

export default meta
type Story = StoryObj<AvatarStoryArgs>

const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const
const types = ['initial', 'image', 'shape'] as const

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  tags: ['!autodocs'],
  args: {
    spacing: 'overlap',
    showOverflow: true,
    overflowCount: 5,
    title: 'Jane Doe',
    description: 'Product Designer',
  },
  render: (args) => {
    const isDark = args.theme === 'dark'
    const bg = isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT
    const {
      spacing,
      showOverflow,
      overflowCount,
      title,
      description,
      ...avatarProps
    } = args

    // Avatar: fill the right slot per type
    const avatarExtra =
      args.type === 'image'
        ? { src: args.src || IMG[0], alt: args.alt || 'User' }
        : args.type === 'shape'
        ? { icon: <PersonIcon /> }
        : {}

    // AvatarGroup props
    const resolvedSpacing = spacing ?? 'overlap'
    const showOvf = showOverflow ?? true
    const ovfCount = overflowCount ?? 5

    // AvatarBlock props
    const blockTitle = title ?? 'Jane Doe'
    const blockDesc = description

    const sectionLabel: CSSProperties = {
      color: isDark ? '#bcbcbc' : '#6b6b6b',
      display: 'block',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      marginBottom: 12,
      textTransform: 'uppercase',
    }

    return (
      <div style={{
        background: bg,
        borderRadius: 12,
        display: 'inline-flex',
        gap: 48,
        padding: 24,
        transition: 'background 0.2s ease',
        alignItems: 'flex-start',
      }}>

        {/* Avatar */}
        <div>
          <span style={sectionLabel}>Avatar</span>
          <Avatar {...avatarProps} {...avatarExtra} />
        </div>

        {/* Avatar Group */}
        <div>
          <span style={sectionLabel}>Avatar Group</span>
          <AvatarGroup spacing={resolvedSpacing} showOverflow={showOvf} overflowCount={ovfCount} theme={args.theme}>
            <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" theme={args.theme} />
            <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" theme={args.theme} />
            <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" theme={args.theme} />
          </AvatarGroup>
        </div>

        {/* Avatar Block */}
        <div>
          <span style={sectionLabel}>Avatar Block</span>
          <AvatarBlock
            avatar={<Avatar type="image" size="medium" src={IMG[0]} alt={blockTitle} theme={args.theme} />}
            title={blockTitle}
            description={blockDesc}
            theme={args.theme}
          />
        </div>

      </div>
    )
  },
}

// ─── All Avatars — exact Figma layout (light + dark) ─────────────────────────

export const AllAvatars: Story = {
  name: 'All Avatars',
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
  args: { theme: 'light' },
  argTypes: {
    type:     { table: { disable: true } },
    size:     { table: { disable: true } },
    initials: { table: { disable: true } },
    src:      { table: { disable: true } },
    alt:      { table: { disable: true } },
    icon:     { table: { disable: true } },
  },
  render: (args) => {
    const theme = (args.theme ?? 'light') as AvatarTheme
    const isDark = theme === 'dark'
    const bg = isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT

    const sectionLabel: CSSProperties = {
      color: isDark ? '#bcbcbc' : '#6b6b6b',
      display: 'block',
      fontFamily: "'Noto Sans', sans-serif",
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
    }

    const chip: CSSProperties = {
      background: isDark ? '#2a3c50' : '#2f3f55',
      borderRadius: 5,
      color: '#f5f8fc',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 10,
      padding: '2px 6px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
    }

    return (
      <div style={{
        background: bg,
        boxSizing: 'border-box',
        fontFamily: "'Noto Sans', sans-serif",
        minHeight: '100vh',
        padding: '48px 64px',
        transition: 'background 0.2s ease',
      }}>
        <div style={{ alignItems: 'flex-start', display: 'flex', flexWrap: 'wrap', gap: 80 }}>

          {/* ── Column 1: Type × Size grid ─────────────────────────────── */}
          <div>
            <span style={sectionLabel}>Avatar</span>
            <div style={{
              alignItems: 'center',
              display: 'grid',
              gap: '14px 10px',
              gridTemplateColumns: '60px repeat(5, 52px)',
            }}>
              {/* Header */}
              <span />
              {sizes.map(s => <span key={s} style={chip}>{s}</span>)}

              {/* Rows */}
              {types.flatMap(type => [
                <span key={`lbl-${type}`} style={rowLabel}>{type}</span>,
                ...sizes.map(size => (
                  <div key={`${type}-${size}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar
                      type={type}
                      size={size}
                      initials="A"
                      src={IMG[0]}
                      alt="User"
                      icon={<PersonIcon />}
                      theme={theme}
                    />
                  </div>
                )),
              ])}
            </div>
          </div>

          {/* ── Column 2: Groups ────────────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <span style={sectionLabel}>Avatar Group</span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={rowLabel}>Spaced</span>
              <AvatarGroup spacing="spaced" overflowCount={5} showOverflow theme={theme}>
                <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" theme={theme} />
                <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" theme={theme} />
                <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" theme={theme} />
              </AvatarGroup>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={rowLabel}>Overlap</span>
              <AvatarGroup spacing="overlap" overflowCount={5} showOverflow theme={theme}>
                <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" theme={theme} />
                <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" theme={theme} />
                <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" theme={theme} />
              </AvatarGroup>
            </div>
          </div>

          {/* ── Column 3: Avatar Block ──────────────────────────────────── */}
          <div>
            <span style={sectionLabel}>Avatar Block</span>
            <AvatarBlock
              avatar={<Avatar type="image" size="medium" src={IMG[0]} alt="Jane Doe" theme={theme} />}
              title="Jane Doe"
              description="Product Designer"
              theme={theme}
            />
          </div>

        </div>
      </div>
    )
  },
}

// ─── Doc stories (appear inline in the Docs tab) ─────────────────────────────

const docRow: CSSProperties = { display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }
const docLabel: CSSProperties = {
  color: '#6b6b6b',
  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
  fontSize: 11,
  minWidth: 52,
}

/** All three avatar types side by side. */
export const Types: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Use `type` to switch between an initial monogram, a photo, or a shape placeholder icon.' } },
  },
  render: () => (
    <div style={docRow}>
      {(['initial', 'image', 'shape'] as const).map(type => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Avatar type={type} size="medium" initials="A" src={IMG[0]} alt="User" icon={<PersonIcon />} />
          <span style={docLabel}>{type}</span>
        </div>
      ))}
    </div>
  ),
}

/** All five sizes using the initial type. */
export const Sizes: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Five size steps from `xsmall` (24 px) to `xlarge` (56 px).' } },
  },
  render: () => (
    <div style={{ ...docRow, alignItems: 'flex-end' }}>
      {(['xsmall', 'small', 'medium', 'large', 'xlarge'] as const).map(size => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Avatar type="initial" size={size} initials="A" />
          <span style={docLabel}>{size}</span>
        </div>
      ))}
    </div>
  ),
}

/** Overlap and spaced group variants with an overflow badge. */
export const Group: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: '`spacing="overlap"` stacks avatars with a negative margin. `spacing="spaced"` uses a regular gap. Both support an overflow count badge.' } },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['overlap', 'spaced'] as const).map(spacing => (
        <div key={spacing} style={docRow}>
          <span style={{ ...docLabel, minWidth: 60 }}>{spacing}</span>
          <AvatarGroup spacing={spacing} overflowCount={5} showOverflow>
            <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" />
            <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" />
            <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" />
          </AvatarGroup>
        </div>
      ))}
    </div>
  ),
}

/** AvatarBlock with each avatar type and an optional description. */
export const Block: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Pass any `Avatar` as the `avatar` slot. The `description` prop is optional.' } },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <AvatarBlock avatar={<Avatar type="image"   size="medium" src={IMG[0]} alt="Jane"  />} title="Jane Doe"    description="Product Designer" />
      <AvatarBlock avatar={<Avatar type="initial" size="medium" initials="A"             />} title="Ahmed Ali"   description="Engineering Lead" />
      <AvatarBlock avatar={<Avatar type="shape"   size="medium" icon={<PersonIcon />}    />} title="Team Account" />
    </div>
  ),
}

/** Light and dark themes side by side. */
export const Themes: Story = {
  tags: ['!dev'],
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Pass `theme="dark"` for the dark palette. Without a theme prop the component responds to `prefers-color-scheme: dark` automatically.' } },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 0, borderRadius: 12, overflow: 'hidden' }}>
      {(['light', 'dark'] as const).map(theme => {
        const isDark = theme === 'dark'
        return (
          <div key={theme} style={{
            background: isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT,
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            flex: 1,
          }}>
            <span style={{ ...docLabel, color: isDark ? '#bcbcbc' : '#6b6b6b' }}>{theme}</span>
            <div style={{ display: 'flex', gap: 12 }}>
              <Avatar type="initial" size="medium" initials="A" theme={theme} />
              <Avatar type="image"   size="medium" src={IMG[0]} alt="User" theme={theme} />
              <Avatar type="shape"   size="medium" icon={<PersonIcon />} theme={theme} />
            </div>
            <AvatarGroup spacing="overlap" overflowCount={3} showOverflow theme={theme}>
              <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" theme={theme} />
              <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" theme={theme} />
              <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" theme={theme} />
            </AvatarGroup>
            <AvatarBlock
              avatar={<Avatar type="image" size="medium" src={IMG[0]} alt="Jane" theme={theme} />}
              title="Jane Doe"
              description="Product Designer"
              theme={theme}
            />
          </div>
        )
      })}
    </div>
  ),
}

