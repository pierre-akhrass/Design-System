import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextBlock } from './TextBlock'

const meta: Meta<typeof TextBlock> = {
  title: 'Components/Text Block',
  component: TextBlock,
  args: {
    theme: 'light',
    showMeta: true,
    showTitle: true,
    showSubtitle: true,
    showParagraph: true,
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
}

export default meta

type Story = StoryObj<typeof TextBlock>

const sectionShellStyle: CSSProperties = {
  border: '1px solid rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '807px',
}

const sectionHeaderStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '32px 96px',
  fontSize: '16px',
  lineHeight: 1.5,
}

const sectionContentStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  padding: '64px 96px 96px',
}

const h1Style: CSSProperties = {
  fontSize: '60px',
  fontWeight: 700,
  letterSpacing: '-0.0333em',
  lineHeight: 1.2,
  margin: 0,
  textTransform: 'uppercase',
}

const definitionStyle: CSSProperties = {
  fontSize: '20px',
  lineHeight: 1.5,
  margin: 0,
}

const cardWrapStyle: CSSProperties = {
  maxWidth: '615px',
}

export const Light: Story = {
  args: {
    theme: 'light',
  },
}

export const Dark: Story = {
  parameters: {
    controls: { disable: false },
  },
  render: (args) => (
    <div style={{ background: '#0A111A', padding: '24px', maxWidth: '700px' }}>
      <TextBlock {...args} theme="dark" />
    </div>
  ),
  args: {
    theme: 'dark',
  },
}

export const DocumentationLight: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return (
      <section style={{ ...sectionShellStyle, background: '#F5F7FA' }}>
        <header style={{ ...sectionHeaderStyle, background: '#D2D9E0', color: '#292929' }}>
          <span>
            <span style={{ color: '#545454' }}>Foundations / </span>Text Block
          </span>
          <span>Design System</span>
        </header>

        <div style={sectionContentStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '612px' }}>
            <h1 style={{ ...h1Style, color: '#292929' }}>Text Block</h1>
            <p style={{ ...definitionStyle, color: '#6B6B6B' }}>
              A foundational typography container used to display structured written content such as
              headings, paragraphs, captions, labels, and supporting copy. Text Blocks establish
              readability, hierarchy, and consistency across the interface while adapting to different
              content densities and layouts.
            </p>
          </div>

          <div style={{ borderTop: '1px solid #BCBCBC', width: '100%' }} />

          <div style={cardWrapStyle}>
            <TextBlock theme="light" />
          </div>
        </div>
      </section>
    )
  },
}

export const DocumentationDark: Story = {
  parameters: {
    controls: { disable: true },
    backgrounds: { default: 'dark' },
  },
  render: () => {
    return (
      <section style={{ ...sectionShellStyle, background: '#0A111A' }}>
        <header style={{ ...sectionHeaderStyle, background: '#1E2C3E', color: '#ECECEC' }}>
          <span>
            <span style={{ color: '#9D9D9D' }}>Foundations / </span>Text Block
          </span>
          <span>Design System</span>
        </header>

        <div style={sectionContentStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '612px' }}>
            <h1 style={{ ...h1Style, color: '#ECECEC' }}>Text Block: Dark</h1>
            <p style={{ ...definitionStyle, color: '#9D9D9D' }}>
              A foundational typography container used to display structured written content such as
              headings, paragraphs, captions, labels, and supporting copy. Text Blocks establish
              readability, hierarchy, and consistency across the interface while adapting to different
              content densities and layouts.
            </p>
          </div>

          <div style={{ borderTop: '1px solid #545454', width: '100%' }} />

          <div style={cardWrapStyle}>
            <TextBlock theme="dark" />
          </div>
        </div>
      </section>
    )
  },
}
