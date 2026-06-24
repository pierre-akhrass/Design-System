// filepath: /Users/serenejaber/Documents/GitHub/Design-System/my-design-system/src/components/Map/MapBlock.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import { MapBlock, type MapBlockLabel } from './MapBlock'
import mapImg from '../../assets/map.png'

type PlaygroundArgs = React.ComponentProps<typeof MapBlock>

const labels: MapBlockLabel[] = [
  { id: 'airport',    x: 72, y: 22, label: 'Dubai International Airport', subLabel: '5 min drive',  connectorLength: 22 },
  { id: 'zabeel',     x: 25, y: 30, label: 'Zabeel Park',                 subLabel: '11 min drive', connectorLength: 20 },
  { id: 'healthcare', x: 44, y: 36, label: 'Dubai Healthcare City',       subLabel: '7 min drive',  connectorLength: 28 },
  { id: 'dfc',        x: 70, y: 58, label: 'Dubai Festival City',         hideConnector: true },
  { id: 'design',     x: 30, y: 75, label: 'Dubai Design District',       subLabel: '12 min drive', connectorLength: 22 },
]

const meta: Meta<PlaygroundArgs> = {
  title: 'Map/MapBlock',
  component: MapBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## MapBlock

A hero-style city / area map surface used to introduce a destination. The block
combines a small **category eyebrow**, a large **display title**, a stylised
**background map**, percentage-positioned **location pills** (with optional
sub-text + a thin connector line dropping to the marked point), and a
floating right-side **control rail** for zoom / search.

### Anatomy
- **Category** (\`category\`) — small uppercase eyebrow at the top-left.
- **Title** (\`title\`) — large display heading under the category.
- **Map surface** (\`mapImage\`) — fills the block as a covered background.
- **Labels** (\`labels: MapBlockLabel[]\`) — positioned pills, each with:
  - \`x\` / \`y\` (percentage of the surface),
  - \`label\` (visible pill text),
  - optional \`subLabel\` (e.g. "11 min drive"),
  - optional \`connectorLength\` (px; drops a 1px line under the pill),
  - \`hideConnector\` to suppress the line.
- **Controls** (\`controls\`) — right-side floating rail. Defaults to the
  zoom-in / search / zoom-out stack shown in the screenshot when omitted;
  pass an empty array to hide it entirely.

### Responsive
| Viewport       | Layout                                                          |
| -------------- | --------------------------------------------------------------- |
| ≥ 1025px       | 16/9 surface, header top-left, controls vertical on the right.  |
| 641 – 1024px   | Tighter padding, smaller title, slimmer control rail.           |
| ≤ 640px        | Aspect-ratio dropped to auto; header full-width; controls move  |
|                | to a horizontal bar at the bottom-right; sub-labels hidden.     |

### Accessibility
- Each label is a real \`<button>\` (keyboard focusable, fires \`onClick\`).
- The control rail is wrapped in \`role="group"\` with a localizable label.
- Each control button has its own \`ariaLabel\`.
        `.trim(),
      },
    },
  },
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Color mode for the map surface and overlays.',
    },
    category: { control: 'text', description: 'Small uppercase eyebrow above the title.' },
    title:    { control: 'text', description: 'Large display title.' },
    mapImage: { control: 'text', description: 'Background map image URL.' },
    labels:   { control: 'object', description: 'Positioned location pills (`MapBlockLabel[]`).' },
    activeLabelId: { control: 'text', description: 'Force-highlight a label by id (controlled mode).' },
  },
  args: {
    mode: 'dark',
    category: 'EXPLORE THE CITY',
    title: 'Dubai Festival City',
    mapImage: mapImg,
    labels,
  },
}
export default meta

type Story = StoryObj<PlaygroundArgs>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground for the MapBlock. Edit **labels** to add/remove pills (each with `x`, `y` percentage coordinates, optional `subLabel`, and an optional `connectorLength`), swap the **mapImage**, change the **mode**, or set **activeLabelId** to force-highlight one pill. Resize the Storybook viewport below ~1024px and ~640px to see the responsive layout.',
      },
    },
  },
  render: (args) => (
    <div style={{ padding: 24, background: '#0a111a' }}>
      <MapBlock {...args} />
    </div>
  ),
}
