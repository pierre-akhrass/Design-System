import type { Meta, StoryObj } from '@storybook/react-vite'
import { Map, type MapPin } from './Map'
import mapImg from '../../assets/map.png'

const pins: MapPin[] = [
  {
    id: '1',
    x: 22,
    y: 42,
    label: 'Dubai Festival City',
    description:
      'A vibrant waterfront destination featuring retail, dining, hotels and entertainment along Dubai Creek.',
    thumbnail: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=200',
    country: 'ae',
    project: 'festival',
  },
  {
    id: '2',
    x: 28,
    y: 55,
    label: 'Festival Plaza',
    description: 'Community-focused retail destination in Jebel Ali, Dubai.',
    thumbnail: 'https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=200',
    country: 'ae',
    project: 'festival',
  },
  {
    id: '3',
    x: 35,
    y: 38,
    label: 'Al Badia',
    description: 'Mixed-use residential and lifestyle community in Dubai Festival City.',
    thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200',
    country: 'ae',
    project: 'badia',
  },
  {
    id: '4',
    x: 48,
    y: 50,
    label: 'Riyadh Hub',
    description: 'Flagship commercial hub anchoring our Saudi Arabia operations.',
    thumbnail: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=200',
    country: 'sa',
    project: 'hub',
  },
  {
    id: '5',
    x: 62,
    y: 45,
    label: 'Doha Site',
    description: 'Strategic logistics and retail site in the heart of Doha.',
    thumbnail: 'https://images.unsplash.com/photo-1568797629192-789acf8e4df3?w=200',
    country: 'qa',
    project: 'hub',
  },
  {
    id: '6',
    x: 70,
    y: 60,
    label: 'Muscat Project',
    description: 'Residential development blending heritage architecture with modern living.',
    thumbnail: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=200',
    country: 'om',
    project: 'badia',
  },
  {
    id: '7',
    x: 55,
    y: 70,
    label: 'Salalah',
    description: 'Coastal festival and leisure destination on the Arabian Sea.',
    thumbnail: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=200',
    country: 'om',
    project: 'festival',
  },
  {
    id: '8',
    x: 80,
    y: 40,
    label: 'Karachi',
    description: 'Regional hub serving South Asian markets and partners.',
    thumbnail: 'https://images.unsplash.com/photo-1589649222264-5f12087fa3f8?w=200',
    country: 'pk',
    project: 'hub',
  },
]

const meta: Meta<typeof Map> = {
  title: 'Map/Map (pierre-akhrass, sereneogilvy)',
  component: Map,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Map

An interactive map surface that overlays clickable **pins** on a background image
(typically a stylized world or regional map). Each pin opens a **popup card** with
a thumbnail, title, description, and a call-to-action. A floating **header**
introduces the map and a bottom-left **filter bar** lets users narrow pins by
search query, country, and project.

### Anatomy
- **Header card** (top-left) — title + description.
- **Pins** — absolutely positioned dots placed via percentage coordinates so they
  stay aligned at any size.
- **Popup card** — auto-flips horizontally/vertically near the viewport edges so it
  stays on-screen next to the active pin.
- **Filter bar** (bottom-left) — search input + Country / Project selects.

### When to use
- Showing geographic distribution of projects, offices, stores, partners, etc.
- Curated, branded "find us" experiences where a real tiled map would be overkill.

### When *not* to use
- Real navigation / routing — use a tile-based mapping library (Mapbox, Leaflet).
- Datasets with hundreds of points — performance and overlap handling aren't optimised for that.

### Usage

\`\`\`tsx
import { Map, type MapPin } from '@company/design-system'

const pins: MapPin[] = [
  {
    id: '1',
    x: 22, y: 42,                  // % within the map container
    label: 'Dubai Festival City',
    description: 'A vibrant waterfront destination…',
    thumbnail: '/images/dfc.jpg',
    country: 'ae',
    project: 'festival',
    href: '/projects/dfc',
  },
]

<Map
  title="Our Global Reach"
  description="Landmark projects across the region."
  mapImage="/images/world-map.png"
  pins={pins}
  countries={[{ label: 'UAE', value: 'ae' }]}
  projects={[{ label: 'Festival', value: 'festival' }]}
  onPinClick={(pin) => console.log('clicked', pin)}
  onMoreDetails={(pin) => router.push(pin.href!)}
/>
\`\`\`

### Pin shape (\`MapPin\`)

| Field         | Type      | Purpose                                                            |
| ------------- | --------- | ------------------------------------------------------------------ |
| \`id\`          | \`string\`  | Stable identifier (used as React key and \`activePinId\`).            |
| \`x\` / \`y\`     | \`number\`  | Position as a **percentage** (0–100) of the map container.         |
| \`label\`       | \`string\`  | Popup title / accessible pin name.                                 |
| \`description\` | \`string\`  | Popup body text.                                                   |
| \`thumbnail\`   | \`string\`  | Image URL shown on the left side of the popup.                     |
| \`country\`     | \`string\`  | Used by the Country filter (match a \`MapFilterOption.value\`).      |
| \`project\`     | \`string\`  | Used by the Project filter (match a \`MapFilterOption.value\`).      |
| \`href\`        | \`string\`  | URL opened when the popup's "More Details" button is clicked.      |

### Interactions
- Click a pin → opens its popup (\`onPinClick\` fires).
- Click the popup's **More Details** → navigates to \`pin.href\` (\`onMoreDetails\` fires).
- Type in the search box, or pick a Country / Project → filters visible pins
  (\`onFilterChange\` fires with \`{ search, country, project }\`).
- \`activePinId\` can be passed to control which popup is open from the outside.

### Theming
Colors come from the global "Selection colors" CSS custom properties defined in
\`src/styles/global.scss\` — override them on \`:root\` or a section element to retheme
the map (and every other component that uses the same tokens).

\`\`\`css
--sds-color-text-default-default
--sds-color-background-default-default   /* popup + filter bar surface */
--sds-color-background-default-tertiary  /* header card surface         */
--sds-color-border-brand-secondary
\`\`\`

### Accessibility
- Pins are real \`<button>\` elements with an \`aria-label\` (\`pin.label\` or \`pin-\${id}\`).
- The popup uses \`role="dialog"\`.
- The filter bar is wrapped in \`role="group"\` with a localizable label.
- Filter \`<select>\`s and the search \`<input>\` are native form controls — fully keyboard accessible.
        `.trim(),
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Title shown in the floating header card.' },
    description: { control: 'text', description: 'Description shown under the title.' },
    mapImage: { control: 'text', description: 'Background map image URL.' },
    mode: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Color mode for the map surface and overlays.',
    },
    showFilters: {
      control: 'boolean',
      description: 'Show the bottom-left filter bar (search + Country + Project).',
    },
    activePinId: {
      control: 'text',
      description: 'Force-open the popup for a given pin id. Leave blank for uncontrolled (open on click).',
    },
    pins: { control: 'object', description: 'Array of `MapPin` objects to render.' },
    countries: { control: 'object', description: 'Country filter options (`{ label, value }[]`).' },
    projects: { control: 'object', description: 'Project filter options (`{ label, value }[]`).' },
  },
  args: {
    title: 'Our Global Reach',
    description:
      'Al-Futtaim Group landmark projects include Dubai Festival City, Festival Plaza, and Al Badia, shaping vibrant communities with world-class infrastructure.',
    mapImage: mapImg,
    mode: 'light',
    showFilters: true,
    pins,
    countries: [
      { label: 'UAE', value: 'ae' },
      { label: 'Saudi Arabia', value: 'sa' },
      { label: 'Qatar', value: 'qa' },
      { label: 'Oman', value: 'om' },
      { label: 'Pakistan', value: 'pk' },
    ],
    projects: [
      { label: 'Festival', value: 'festival' },
      { label: 'Al Badia', value: 'badia' },
      { label: 'Hub', value: 'hub' },
    ],
  },
}
export default meta

type Story = StoryObj<typeof Map>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground covering every Map variant. Edit **pins**, **countries**, and **projects** in the Controls panel to add/remove markers and filter options, toggle **showFilters** to hide the bottom bar, and set **activePinId** to force-open a specific popup.',
      },
    },
  },
  render: (args) => (
    <div style={{ padding: 24, background: '#f5f7fa' }}>
      <Map {...args} style={{ minHeight: 480 }} />
    </div>
  ),
}
