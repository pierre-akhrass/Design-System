import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  VirtualBlock,
  type VirtualBlockLabel,
  type VirtualBlockLevel,
  type VirtualBlockSearchResult,
  type VirtualBlockStore,
} from './VirtualBlock'

// Dynamic assets imported from `src/assets` so admins can swap the files
// on disk (or add real per-floor maps) without touching component code.
// Vite resolves these to hashed URLs at build time.
import alfuttaimLogo from '../../assets/alfuttaim-logo.svg'
import mapLevelDefault from '../../assets/map-block.png'
// 👇 Drop real per-floor maps in src/assets and import them here, e.g.:
// import mapLevelG from '../../assets/map-level-g.png'
// import mapLevel1 from '../../assets/map-level-1.png'
// import mapLevel2 from '../../assets/map-level-2.png'
// import mapLevel3 from '../../assets/map-level-3.png'

// The Playground exposes a `stores` dataset (a real prop) so admins can
// edit store names / levels / logos / coordinates AND each store's tags
// live from the Storybook controls panel. The map only renders cards
// once the user is actively filtering (search or label chips).
type PlaygroundArgs = React.ComponentProps<typeof VirtualBlock> & {
  stores?: VirtualBlockStore[]
}

// Brand mark — admin replaces /src/assets/alfuttaim-logo.svg with the real
// asset; Vite re-hashes the URL on build and this story picks it up.
const brand = (
  <img
    src={alfuttaimLogo}
    alt="Al-Futtaim"
    style={{ height: 24, display: 'block' }}
  />
)

// Per-floor maps. Each level carries its own `mapImage`; the component
// swaps the background when the user picks a different level. Swap the
// shared `mapLevelDefault` for level-specific imports (e.g. `mapLevelG`)
// once the assets exist in `src/assets`.
const levels: VirtualBlockLevel[] = [
  { value: 'G', label: 'Level [G]', mapImage: mapLevelDefault },
  { value: '1', label: 'Level [1]', mapImage: mapLevelDefault },
  { value: '2', label: 'Level [2]', mapImage: mapLevelDefault },
  { value: '3', label: 'Level [3]', mapImage: mapLevelDefault },
]

// Catalog of tag chips. The Playground story owns active state and wires
// each chip's `onClick` to toggle that id on / off. The component then
// filters the visible scattered cards by tag intersection with each store.
const labelCatalog: VirtualBlockLabel[] = [
  { id: 'food',    label: 'Food' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'tech',    label: 'Tech' },
  { id: 'beauty',  label: 'Beauty' },
  { id: 'kids',    label: 'Kids' },
  { id: 'gifts',   label: 'Gifts' },
  { id: 'sports',  label: 'Sports' },
]

// Sample dataset — fully editable from the controls panel.
// `x` and `y` are percentages (0–100) within the map surface and drive
// where each scattered card lands. `tags` lists the chip ids each store
// belongs to so the label strip works as a category filter.
const stores: VirtualBlockStore[] = [
  { id: 'zara',      name: 'ZARA Store',   level: 'Ground Level', levelValue: 'G', logo: 'ZARA',  x: 22, y: 38, tags: ['fashion'] },
  { id: 'hm',        name: 'H&M',          level: 'Level 1',      levelValue: '1', logo: 'H&M',   x: 42, y: 28, tags: ['fashion', 'kids'] },
  { id: 'apple',     name: 'Apple Store',  level: 'Level 2',      levelValue: '2', logo: 'APPLE', x: 62, y: 35, tags: ['tech'] },
  { id: 'sephora',   name: 'Sephora',      level: 'Ground Level', levelValue: 'G', logo: 'SEPH',  x: 30, y: 62, tags: ['beauty', 'gifts'] },
  { id: 'starbucks', name: 'Starbucks',    level: 'Level 1',      levelValue: '1', logo: 'SBUX',  x: 55, y: 58, tags: ['food'] },
  { id: 'lego',      name: 'LEGO Store',   level: 'Level 2',      levelValue: '2', logo: 'LEGO',  x: 76, y: 65, tags: ['kids', 'gifts'] },
]

const meta: Meta<PlaygroundArgs> = {
  title: 'Map/VirtualBlock',
  component: VirtualBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## VirtualBlock

Indoor / virtual mall map surface, used for store-level wayfinding. Combines:

- **Top toolbar** — brand logo, level selector, search input, filters button.
- **Label strip (tag filter)** — horizontal chips below the toolbar. Each
  chip is a category (Food, Fashion, Tech…). Clicking a chip toggles it
  on / off; the map only renders stores whose \`tags\` intersect the
  active chips.
- **Map surface** — virtual mall background image. Stores plotted as
  **scattered cards** at their \`x\`/\`y\` (0–100 %) coordinates.
  Cards only appear once the user is **actively filtering** (typing in
  the search box or with at least one chip enabled); otherwise the map
  shows a hint.
- **Store card** — full popup pinned to the bottom-left, used when a
  store without coordinates is selected (e.g. from a search result).
  Includes the dark logo block plus **Location** and **Directions**
  action buttons.
- **Search dropdown** — results list anchored to the search input,
  filtered live as the user types (\`searchResults\`).
- **Zoom rail** — bottom-right floating column (same \`#0A111A\` spec as
  MapBlock for consistency).

All radii, gaps and padding are sourced from \`tokens/variables.scss\`;
colors follow the slate mapping (\`$mapping-system-slate-text-primary\`,
\`$mapping-system-slate-text-on-primary\`) so consumers can retheme via
tokens without editing component CSS.
        `.trim(),
      },
    },
  },
  argTypes: {
    brand:    { control: false },
    levels:   { control: 'object', description: 'Floors available in the level selector.' },
    labels:   { control: false, table: { disable: true } },
    stores:   {
      control: 'object',
      description:
        'Store dataset rendered as scattered cards on the map. Each store has `x`/`y` (0–100 %) and a `tags` list so admins can move cards and assign categories live from this control. Cards only render while the user is actively filtering (search or tag chip).',
    },
    activeStore:    { control: false, table: { disable: true } },
    searchResults:  { control: false, table: { disable: true } },
    searchPlaceholder: { control: 'text' },
    filtersLabel:      { control: 'text' },
    searchResultsHeader: { control: 'text' },
    currentLevel:   { control: 'text' },
    mapImage:       { control: 'text' },
  },
  args: {
    brand,
    levels,
    stores,
    searchPlaceholder: 'Search stores…',
    filtersLabel: 'Filters',
    searchResultsHeader: 'Store name',
    // No top-level `mapImage` — each level provides its own. The Playground
    // owns `currentLevel` via React state (see render), so the level
    // dropdown actually swaps the map background as the user picks a floor.
  },
}

export default meta
type Story = StoryObj<PlaygroundArgs>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground. The map starts empty — pick a **tag chip** above the map (Food, Fashion, Tech…) or type in the **search box** to reveal the matching stores as scattered cards. Click a card to make it active. Admins drive layout entirely by editing the **stores** dataset (positions + tags).',
      },
    },
  },
  render: (args) => {
    const { stores: dataset = [], ...rest } = args
    const [active, setActive] = useState<VirtualBlockStore | undefined>()
    const [query, setQuery] = useState('')
    // Track the selected level locally so changing the dropdown swaps the
    // map background (each level carries its own `mapImage`).
    const [currentLevel, setCurrentLevel] = useState<string>(levels[0]?.value ?? '')
    // Consumer-owned tag-chip toggle state — drives which chips show as
    // `is-active` and which stores the component renders on the map.
    const [activeTags, setActiveTags] = useState<Set<string>>(new Set())
    // Consumer-owned set of search-dropdown checkboxes that the user has
    // turned on. The component shows a scattered card on the map for each
    // checked store (in addition to anything matched by active tags).
    const [checkedStoreIds, setCheckedStoreIds] = useState<Set<string>>(new Set())

    const toggleChecked = (id: string) =>
      setCheckedStoreIds((prev) => {
        const next = new Set(prev)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        return next
      })

    // Toggle a chip on / off and propagate the new state to the component
    // by recomputing the `labels` array below.
    const toggleTag = (id: string) =>
      setActiveTags((prev) => {
        const next = new Set(prev)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        return next
      })

    const labels = useMemo<VirtualBlockLabel[]>(
      () =>
        labelCatalog.map((l) => ({
          ...l,
          active: activeTags.has(l.id),
          onClick: () => toggleTag(l.id),
        })),
      [activeTags],
    )

    // Wrap a raw store with the alert handlers so the card buttons work
    // regardless of whether the user opened the card via a scattered-card
    // click or a search result.
    const selectStore = (s: VirtualBlockStore) =>
      setActive({
        ...s,
        onLocation:   () => alert(`Location: ${String(s.name)}`),
        onDirections: () => alert(`Directions to: ${String(s.name)}`),
      })

    // Filter the dataset live as the user types; clicking a result becomes
    // the active store.
    const results = useMemo<VirtualBlockSearchResult[]>(() => {
      const q = query.trim().toLowerCase()
      return dataset
        .filter((s) => !q || String(s.name).toLowerCase().includes(q))
        .map((s) => ({
          id: s.id,
          storeName: s.name,
          levelInfo: s.level,
          // Checkbox state mirrors the consumer-owned `checkedStoreIds`
          // set. Clicking the row toggles it — the component then shows a
          // scattered card on the map for each checked store.
          selected: checkedStoreIds.has(s.id),
          onClick: () => toggleChecked(s.id),
        }))
    }, [dataset, query, checkedStoreIds])

    return (
      <div style={{ padding: 24, background: '#0a111a', minHeight: '100vh' }}>
        <VirtualBlock
          {...rest}
          currentLevel={currentLevel}
          onLevelChange={setCurrentLevel}
          labels={labels}
          stores={dataset}
          onStoreClick={selectStore}
          searchValue={query}
          onSearchChange={setQuery}
          searchResults={results}
          activeStore={active}
          onCloseStore={() => setActive(undefined)}
          onFiltersClick={() => alert('Filters clicked')}
          onZoomIn={() => {}}
          onZoomOut={() => {}}
          onZoomSearch={() => {}}
        />
      </div>
    )
  },
}
