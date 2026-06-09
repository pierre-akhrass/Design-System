import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavItem } from './NavItem'
import type { NavItemState, NavItemShape } from './NavItem'

const HomeIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
    <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11z" fill="currentColor" />
  </svg>
)

const ChevronIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14">
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Combined State+Shape options that match the Figma "State" dropdown.
type CombinedState = 'Default' | 'Hover' | 'Active Pill' | 'Active Line'

const stateMap: Record<CombinedState, { state: NavItemState; shape: NavItemShape }> = {
  Default: { state: 'default', shape: 'pill' },
  Hover: { state: 'hover', shape: 'pill' },
  'Active Pill': { state: 'active', shape: 'pill' },
  'Active Line': { state: 'active', shape: 'line' },
}

type PlaygroundArgs = {
  label: string
  state: CombinedState
  orientation: 'Horizontal' | 'Vertical'
  nesting: 'Parent' | 'Nested'
  hierarchy: 'Tier 1' | 'Tier 2'
  iconLeft: boolean
  iconRight: boolean
  colorMode: 'Light' | 'Dark'
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Components/NavItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## NavItem

A single navigation entry used inside primary navigation surfaces (sidebar, top bar, nested menus).
Renders as an \`<a>\` with optional leading/trailing icons and supports multiple visual
treatments so it can adapt to vertical sidebars, horizontal tab bars, light/dark surfaces,
and nested hierarchies.

### Orientation
A standalone \`NavItem\` looks **identical** in both orientations (content-width pill,
label centered). The \`orientation\` prop is metadata for the parent Navigation
container — it decides whether items stack in a column (\`vertical\`) or sit on a row
(\`horizontal\`).

### Anatomy
- **Label** — visible link text.
- **Leading icon** (\`iconLeft\`) — optional glyph before the label.
- **Trailing icon** (\`iconRight\`) — optional glyph after the label (e.g. chevron for expandable items).
- **Selection indicator** — pill background or underline depending on \`shape\`.

### Variants

| Prop          | Values                                          | Purpose                                                   |
| ------------- | ----------------------------------------------- | --------------------------------------------------------- |
| \`state\`       | \`default\` · \`hover\` · \`active\`                | Forced interaction state (useful for design previews).    |
| \`orientation\` | \`vertical\` · \`horizontal\`                     | Parent layout direction (column vs row).                  |
| \`level\`       | \`parent\` · \`nested\`  *(shown as "Nesting")*   | Top-level item vs. nested under a parent.                 |
| \`hierarchy\`   | \`tier-1\` · \`tier-2\`                           | Visual depth in the nav tree.                             |
| \`shape\`       | \`pill\` · \`line\`                               | Selection treatment: filled pill or underline indicator.  |
| \`colorMode\`   | \`light\` · \`dark\`                              | Surface color mode.                                       |
| \`selected\`    | \`boolean\`                                       | Marks the current route (adds \`aria-current="page"\`).   |

> In Storybook, **State** and **Shape** are merged into one dropdown
> (\`Default\` · \`Hover\` · \`Active Pill\` · \`Active Line\`) to match the Figma playground.

### Theming
Hover/active/text colors come from CSS variables defined in \`src/styles/global.scss\`:

\`\`\`css
--sds-color-text-default-default
--sds-color-background-default-default   /* hover pill */
--sds-color-background-default-tertiary  /* active pill */
--sds-color-border-brand-secondary       /* active line underline */
\`\`\`

Override these on \`:root\` or a section element to retheme every consumer.
        `.trim(),
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Visible link text.' },
    state: {
      name: 'State',
      control: 'select',
      options: ['Default', 'Hover', 'Active Pill', 'Active Line'],
      description: 'Combined visual state + shape (maps to `state` + `shape` props on `<NavItem>`).',
    },
    orientation: {
      name: 'Orientation',
      control: 'inline-radio',
      options: ['Horizontal', 'Vertical'],
      description:
        'Parent layout direction. Vertical = stacked column (sidebar). Horizontal = inline row (tab bar).',
    },
    nesting: {
      name: 'Nesting',
      control: 'inline-radio',
      options: ['Parent', 'Nested'],
      description: 'Top-level vs nested under a parent (maps to `level`).',
    },
    hierarchy: {
      name: 'Hierarchy',
      control: 'inline-radio',
      options: ['Tier 1', 'Tier 2'],
      description: 'Visual hierarchy / depth in the nav tree.',
    },
    iconLeft: {
      name: 'Icon left',
      control: 'boolean',
      description: 'Show the leading icon.',
    },
    iconRight: {
      name: 'Icon right',
      control: 'boolean',
      description: 'Show the trailing icon.',
    },
    colorMode: {
      name: 'Color Mode',
      control: 'inline-radio',
      options: ['Light', 'Dark'],
      description: 'Light or dark surface.',
    },
  },
}
export default meta

type Story = StoryObj<PlaygroundArgs>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground covering every NavItem variant — mirrors the Figma component playground (State, Orientation, Nesting, Hierarchy, Icon left, Icon right).',
      },
    },
  },
  args: {
    label: 'Tier 1 Label',
    state: 'Default',
    orientation: 'Vertical',
    nesting: 'Parent',
    hierarchy: 'Tier 1',
    iconLeft: false,
    iconRight: false,
    colorMode: 'Light',
  },
  render: (args) => {
    const { state, shape } = stateMap[args.state]
    const isDark = args.colorMode === 'Dark'
    const isVertical = args.orientation === 'Vertical'

    return (
      <div
        style={{
          background: isDark ? '#141f2e' : 'transparent',
          padding: 32,
          minWidth: 320,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <NavItem
          label={args.label}
          state={state}
          shape={shape}
          orientation={isVertical ? 'vertical' : 'horizontal'}
          level={args.nesting === 'Parent' ? 'parent' : 'nested'}
          hierarchy={args.hierarchy === 'Tier 1' ? 'tier-1' : 'tier-2'}
          colorMode={isDark ? 'dark' : 'light'}
          iconLeft={args.iconLeft ? <HomeIcon /> : undefined}
          iconRight={args.iconRight ? <ChevronIcon /> : undefined}
        />
      </div>
    )
  },
}
