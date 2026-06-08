import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'
import { AvatarGroup } from './AvatarGroup'
import { AvatarBlock } from './AvatarBlock'

// ─── Shared placeholder icon ──────────────────────────────────────────────────

const PersonIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="60%" height="60%" fill="currentColor">
    <path d="M12 12c2.69 0 4.8-2.11 4.8-4.8S14.69 2.4 12 2.4 7.2 4.51 7.2 7.2 9.31 12 12 12zm0 2.4c-3.2 0-9.6 1.61-9.6 4.8v2.4h19.2v-2.4c0-3.19-6.4-4.8-9.6-4.8z" />
  </svg>
)

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    type: 'initial',
    size: 'medium',
    initials: 'A',
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['initial', 'image', 'shape'],
    },
    size: {
      control: 'inline-radio',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

// ─── Matrix helpers ───────────────────────────────────────────────────────────

const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const
const types = ['initial', 'image', 'shape'] as const

const matrixWrapperStyle: CSSProperties = {
  display: 'grid',
  gap: '1.25rem',
  maxWidth: '680px',
  width: '100%',
}

const matrixHeaderRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '80px repeat(5, 80px)',
  gap: '0.5rem',
  alignItems: 'center',
}

const matrixRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '80px repeat(5, 80px)',
  gap: '0.5rem',
  alignItems: 'center',
}

const labelStyle: CSSProperties = {
  fontFamily: "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: '0.8125rem',
  color: '#2f3a4a',
}

const chipStyle: CSSProperties = {
  ...labelStyle,
  background: '#2f3f55',
  borderRadius: '8px',
  color: '#f5f8fc',
  padding: '0.2rem 0.5rem',
  textAlign: 'center',
}

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  args: { type: 'initial', size: 'medium', initials: 'A' },
}

// ─── Size × Type matrix ───────────────────────────────────────────────────────

export const SizeTypeMatrix: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={matrixWrapperStyle}>
      <div style={matrixHeaderRowStyle}>
        <span />
        {sizes.map((s) => (
          <span key={s} style={chipStyle}>{s}</span>
        ))}
      </div>
      {types.map((type) => (
        <div key={type} style={matrixRowStyle}>
          <span style={labelStyle}>{type}</span>
          {sizes.map((size) => (
            <div key={size} style={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                type={type}
                size={size}
                initials="A"
                src="https://i.pravatar.cc/150?img=3"
                alt="User"
                icon={<PersonIcon />}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}

// ─── Avatar Group — Overlap ───────────────────────────────────────────────────

export const GroupOverlap: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <AvatarGroup spacing="overlap" overflowCount={99} showOverflow>
      <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=1" alt="User 1" />
      <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=2" alt="User 2" />
      <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=3" alt="User 3" />
    </AvatarGroup>
  ),
}

// ─── Avatar Group — Spaced ────────────────────────────────────────────────────

export const GroupSpaced: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <AvatarGroup spacing="spaced" overflowCount={99} showOverflow>
      <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=4" alt="User 4" />
      <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=5" alt="User 5" />
      <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=6" alt="User 6" />
    </AvatarGroup>
  ),
}

// ─── Avatar Group — No overflow ───────────────────────────────────────────────

export const GroupNoOverflow: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <AvatarGroup spacing="overlap">
        <Avatar type="initial" size="xsmall" initials="A" />
        <Avatar type="initial" size="xsmall" initials="B" />
        <Avatar type="initial" size="xsmall" initials="C" />
      </AvatarGroup>
      <AvatarGroup spacing="spaced">
        <Avatar type="initial" size="xsmall" initials="A" />
        <Avatar type="initial" size="xsmall" initials="B" />
        <Avatar type="initial" size="xsmall" initials="C" />
      </AvatarGroup>
    </div>
  ),
}

// ─── Avatar Block ─────────────────────────────────────────────────────────────

export const BlockImage: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <AvatarBlock
      avatar={
        <Avatar type="image" size="medium" src="https://i.pravatar.cc/150?img=7" alt="Jane Doe" />
      }
      title="Jane Doe"
      description="Product Designer"
    />
  ),
}

export const BlockInitial: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <AvatarBlock
      avatar={<Avatar type="initial" size="medium" initials="A" />}
      title="Ahmed"
      description="Engineering Lead"
    />
  ),
}

export const BlockShape: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <AvatarBlock
      avatar={<Avatar type="shape" size="medium" icon={<PersonIcon />} />}
      title="Team Account"
      description="Shared workspace"
    />
  ),
}

export const BlockTitleOnly: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <AvatarBlock
      avatar={<Avatar type="initial" size="medium" initials="S" />}
      title="Sara"
    />
  ),
}
