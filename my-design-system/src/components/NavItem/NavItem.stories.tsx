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
  title: 'Navigation/NavItem (pierre-akhrass)',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## NavItem

A single navigation entry used inside primary navigation surfaces (sidebar, top bar,
nested menus). Renders as an \`<a>\` with optional leading/trailing icons and supports
multiple visual treatments so it can adapt to vertical sidebars, horizontal tab bars,
light/dark surfaces, and nested hierarchies.

### Anatomy
- **Label** — visible link text.
- **Leading icon** (\`iconLeft\`) — optional glyph before the label.
- **Trailing icon** (\`iconRight\`) — optional glyph after the label (e.g. chevron for expandable items).
- **Selection indicator** — pill background or underline depending on \`shape\`.

### Sizing model
Per the Figma spec, **hierarchy** is the single source of truth for item size and
internal alignment. \`orientation\` only describes how the *parent* container lays
items out (row vs. column).

| Variant                  | Height | Padding   | Alignment           |
| ------------------------ | ------ | --------- | ------------------- |
| Tier 1 (parent)          | 64px   | 8px 8px   | centered            |
| Tier 1 + Nested          | 48px   | 8px 48px  | inherits (centered) |
| Tier 2                   | 48px   | 8px 16px  | left-aligned        |
| **Tier 2 + Nested**      | —      | —         | *not supported*     |

### Typography
Shared by both tiers (Figma "Label / large / default"):

\`\`\`
font-family:    Noto Sans
font-size:      16px
font-weight:    400
line-height:    150%   (24px)
letter-spacing: 0
\`\`\`

### Variants

| Prop          | Values                                          | Purpose                                                                       |
| ------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
| \`state\`       | \`default\` · \`hover\` · \`active\`                | Forced interaction state (useful for design previews).                        |
| \`orientation\` | \`vertical\` · \`horizontal\`                     | Parent layout direction (column vs row). Does **not** change per-item sizing. |
| \`level\`       | \`parent\` · \`nested\`  *(shown as "Nesting")*   | Top-level item vs. nested under a parent (Tier 1 only).                       |
| \`hierarchy\`   | \`tier-1\` · \`tier-2\`                           | Drives height, padding, and alignment.                                        |
| \`shape\`       | \`pill\` · \`line\`                               | Selection treatment: filled pill or underline indicator.                      |
| \`colorMode\`   | \`light\` · \`dark\`                              | Surface color mode.                                                           |
| \`selected\`    | \`boolean\`                                       | Marks the current route (adds \`aria-current="page"\`).                         |

> In Storybook, **State** and **Shape** are merged into one dropdown
> (\`Default\` · \`Hover\` · \`Active Pill\` · \`Active Line\`) to match the Figma playground.

### Active Line spec (Tier 1)
Combining \`hierarchy="tier-1"\` + \`shape="line"\` + \`state="active"\` matches the
Figma "Active Line" spec exactly:

\`\`\`
height: 64px; padding: 8px 8px; justify/align: center; gap: 8px;
border-radius: 0;
border-bottom: 2px solid var(--sds-color-border-brand-secondary);
\`\`\`

### Theming
All colors and spacing come from the design-token layer defined in
\`src/styles/tokens/_variables.scss\` and CSS custom properties from
\`src/styles/global.scss\`. Tokens used:

| Category   | Token                                           | Usage                                |
| ---------- | ----------------------------------------------- | ------------------------------------ |
| Text       | \`$color-system-gray-700\`                        | Default label/icon color (light)     |
| Text       | \`var(--sds-color-text-default-default)\`          | Line-shape label color               |
| Text       | \`$mapping-system-slate-text-on-primary\`          | Dark-mode label/icon color           |
| Background | \`$color-system-slate-100\`                        | Hover/active pill background (light) |
| Background | \`var(--sds-color-background-default-default)\`    | Line-shape hover pill background     |
| Background | \`$mapping-system-slate-background-secondary\`     | Dark-mode hover background           |
| Background | \`$mapping-system-slate-background-secondary-hover\` | Dark-mode active background        |
| Border     | \`$color-system-gray-600\`                         | Active line underline (both modes)   |
| Border     | \`$size-stroke-border-width-2\`                    | Line-shape bottom border width       |
| Focus      | \`$mapping-system-focus-border-secondary\`         | Focus ring color                     |
| Depth      | \`$depth-025\`                                    | Focus ring thickness                 |
| Spacing    | \`$space-800\`                                    | Tier 1 height                        |
| Spacing    | \`$space-600\`                                    | Tier 2 / Nested height               |
| Spacing    | \`$space-200\`, \`$space-100\`                      | Internal padding                     |
| Spacing    | \`$gap-2xs\`                                      | Icon-to-label gap, Tier 2 padding    |
| Spacing    | \`$padding-action-xl\`                            | Tier 2 horizontal padding            |
| Radius     | \`$radius-medium\`                                | Pill border-radius                   |
| Radius     | \`$radius-none\`                                  | Line-shape (no rounding)             |
| Typography | \`$ui-font-family\`                               | Font family                          |
| Typography | \`$ui-size-large\`                                | Font size (16px)                     |
| Typography | \`$ui-font-weight-default\`                       | Font weight (400)                    |
| Typography | \`$letter-spacing-tracking-1\`                    | Letter spacing                       |

Override the CSS custom properties on \`:root\` or a section element to retheme
every consumer — no component edits required.

\`\`\`css
--sds-color-text-default-default         /* label / icon color          */
--sds-color-background-default-default   /* hover pill background       */
--sds-color-background-default-tertiary  /* active pill background      */
--sds-color-border-brand-secondary       /* active line underline color */
\`\`\`

### Usage

\`\`\`tsx
import { NavItem } from '@company/design-system'

<NavItem
  href="/dashboard"
  label="Dashboard"
  hierarchy="tier-1"
  shape="pill"
  selected
/>
\`\`\`

### Accessibility
- Renders as a real \`<a href>\` so keyboard and screen-reader navigation work out of the box.
- When \`selected\` is true, \`aria-current="page"\` is applied automatically.
- Icons are decorative (\`aria-hidden\`); the label provides the accessible name.
- Focus ring uses the system focus border token and is visible on keyboard navigation only.
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
    state: "Active Pill",
    orientation: "Horizontal",
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
