# Tag Component

A compact inline label used to categorise or annotate content — status badges, category chips, attribute labels, and similar UI patterns.

---

## Two folders — two separate concerns

This project has two important top-level source folders that work together but serve completely different purposes. **Both are required and neither replaces the other.**

```
src/
├── components/          ← THE LIBRARY  — publishable, consumed by apps
│   ├── Tag/
│   ├── Button/
│   ├── Avatar/
│   └── ...
└── playground/          ← THE TOOL     — dev-only, never shipped to npm
    ├── Playground.tsx
    ├── components/
    └── workspaces/
```

### `src/components/` — The Design System Library

This is the **actual product**. Every component here is compiled by Vite and published to npm as `@company/design-system`. These files:

- Define the public API (props, types, exports)
- Contain all SCSS styles driven by design tokens
- Have Storybook stories for documentation
- Are **imported by consumer applications** in production

> ⚠️ Do not put playground-specific code here. Nothing in `src/components/` should import from `src/playground/`.

### `src/playground/` — The Interactive Playground App

This is a **developer and designer tool** — a SPA that runs locally via `npm run dev`. It is **not published to npm** and does not appear in the library bundle. Its only job is to let you explore, tweak, and document any component from `src/components/` in real time.

The playground **imports from the library** (`src/components/`) — not the other way around. It is a consumer of the design system, just like any external app would be.

#### Full playground directory

```
src/playground/
│
├── Playground.tsx              Shell: top bar + sidebar + workspace outlet
├── Playground.scss             Shell layout (dark theme, CSS grid)
│
├── components/                 Reusable UI pieces used by every workspace
│   ├── Sidebar/
│   │   ├── Sidebar.tsx         Left nav — grouped list of component entries
│   │   └── Sidebar.scss
│   ├── Canvas/
│   │   ├── Canvas.tsx          Centered preview area with dot-grid background
│   │   └── Canvas.scss         3 bg modes: auto (grid) / light / dark
│   ├── ControlPanel/
│   │   ├── ControlPanel.tsx    Right panel wrapper with "Props" header
│   │   └── ControlPanel.scss
│   └── CodeBlock/
│       ├── CodeBlock.tsx       Syntax-highlighted read-only code output (prismjs)
│       └── CodeBlock.scss      Custom Prism token colour theme
│
└── workspaces/
    ├── registry.ts             Central list of { id, label, group, component }
    │                           Add new components here to register them in the sidebar
    └── TagWorkspace/
        ├── TagWorkspace.tsx    Workspace root — owns TagConfig state
        ├── TagWorkspace.scss   flex layout: canvas+code (center) | controls (right)
        ├── TagControls.tsx     All control form fields for the Tag component
        ├── TagControls.scss    Styles for every control sub-component
        └── tagCodeGen.ts       Pure function: (TagConfig) → JSX import+usage string
```

#### How the playground shell works

`main.tsx` mounts `<Playground />`, which renders:
1. A **top bar** with the project name.
2. A **Sidebar** driven by `registry.ts` — one entry per component.
3. A **workspace outlet** — renders the selected workspace component (e.g. `<TagWorkspace />`).

Each workspace manages its own state and internally composes `<Canvas>`, `<ControlPanel>`, and `<CodeBlock>` — so adding a new component workspace is self-contained.

---

## Component files

| File | Purpose |
|---|---|
| `Tag.tsx` | React component — props, class logic, inline style merging |
| `Tag.scss` | All styles via design tokens; light/dark theme mixins |
| `Tag.stories.tsx` | Storybook stories: Playground, All Tags matrix, Docs tab stories |
| `index.ts` | Re-exports `Tag`, `TagProps`, `TagState`, `TagTheme` |

---

## API

```tsx
import { Tag } from '@company/design-system'

<Tag label="Label" />
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | **required** | Text displayed inside the tag |
| `state` | `'default' \| 'hover'` | `'default'` | Forces a visual interaction state (useful in static docs and visual tests) |
| `theme` | `'light' \| 'dark'` | auto | Explicit color theme. When omitted the component follows `prefers-color-scheme` |
| `iconStart` | `ReactNode` | — | Optional leading icon slot |
| `iconEnd` | `ReactNode` | — | Optional trailing icon slot |
| `bgColor` | `string` | — | Inline background color override (bypasses token) |
| `textColor` | `string` | — | Inline text and icon color override (bypasses token) |

Extends all native `HTMLAttributes<HTMLSpanElement>` — any standard span attribute (`style`, `className`, `aria-*`, etc.) is forwarded.

---

## Styling

Styles live entirely in `Tag.scss` using **SCSS design tokens** from `src/styles/tokens/_variables.scss`.

### Key token references

| CSS property | Token | Resolved value |
|---|---|---|
| `border-radius` | `$dimensions-tag-corner-radius` | `9999px` (full pill) |
| `height` | `$dimensions-tag-height` | `24px` |
| `padding` (h) | `$padding-action-xs` | `8px` |
| `gap` (icons) | `$gap-3xs` | `4px` |
| `font-family` | `$ui-font-family` | `'Noto Sans'` |
| `font-weight` | `$ui-font-weight-strong` | `600` |
| `font-size` | `$ui-size-small` | `12px` |

### BEM class structure

```
.ds-tag                    Block
.ds-tag--default           State modifier (default)
.ds-tag--hover             State modifier (hover)
.ds-tag--light             Explicit light theme
.ds-tag--dark              Explicit dark theme
.ds-tag__label             Label text element
.ds-tag__icon              Icon wrapper element
.ds-tag__icon--start       Leading icon position
.ds-tag__icon--end         Trailing icon position
```

### Theme behaviour

- **Light theme** — uses `$mapping-system-slate-surface-tertiary` background.
- **Dark theme** — uses `$color-system-slate-700` background.
- **Auto (no prop)** — defaults to light theme styles; a `@media (prefers-color-scheme: dark)` rule switches to the dark mixin automatically.

Both the CSS pseudo-state (`:hover`) and the forced static state (`.ds-tag--hover` via `state` prop) share the same mixin, so interactive and static renders are visually identical.

---

## Storybook stories

| Story | Tab | Purpose |
|---|---|---|
| `Playground` | Canvas | Interactive controls — all props, icon toggles, color overrides |
| `All Tags` | Canvas | Full visual matrix: 4 structures × 2 states, theme-switchable |
| `Structure` | Docs | Label-only, icon-start, icon-end, both icons side by side |
| `States` | Docs | Default vs hover across all 4 structures |
| `Themes` | Docs | Light and dark panels side by side |

Run with:
```bash
npm run storybook
```

---

## Playground Workspace

An interactive SPA playground was built at `src/playground/` to allow developers and designers to explore the Tag component in real time without opening Storybook.

### Playground files for Tag

| File | Purpose |
|---|---|
| `src/playground/workspaces/TagWorkspace/TagWorkspace.tsx` | Workspace root — owns all Tag state, wires preview + controls + code block |
| `src/playground/workspaces/TagWorkspace/TagControls.tsx` | Control panel form — all prop controls rendered here |
| `src/playground/workspaces/TagWorkspace/TagControls.scss` | Styles for all control sub-components |
| `src/playground/workspaces/TagWorkspace/tagCodeGen.ts` | Pure function: `(TagConfig) => string` — generates the live import + JSX snippet |

### How the playground state flows

```
TagWorkspace (useState<TagConfig>)
  │
  ├── Canvas  →  <Tag {...resolved props} style={...overrides} />   (live preview)
  ├── CodeBlock  →  tagCodeGen(config)                              (live code snippet)
  └── ControlPanel  →  <TagControls config={} onChange={} />       (controls)
```

Every control change calls `setConfig` once. The canvas and code block re-render from the same state — they are always in sync.

### TagConfig — all controllable fields

```ts
interface TagConfig {
  // Content
  label: string

  // Behaviour
  state: 'default' | 'hover'
  theme: 'auto' | 'light' | 'dark'    // 'auto' omits the prop (follows prefers-color-scheme)

  // Icons
  showIconStart: boolean               // toggles a StarIcon in iconStart slot
  showIconEnd: boolean                 // toggles a StarIcon in iconEnd slot

  // Color overrides (native Tag props)
  bgColor: string                      // '' = no override
  textColor: string                    // '' = no override

  // Spacing overrides (applied via style prop; '' = use design token)
  borderRadius: string                 // $radius-* token scale
  paddingX: string                     // $padding-action-* token scale → paddingInline
  paddingY: string                     // $padding-action-* token scale → paddingBlock
  gap: string                          // $gap-* token scale

  // Border overrides (applied via style prop; '' = no border)
  borderWidth: string                  // $size-stroke-border-width-* token scale
  borderStyle: string                  // 'solid' | 'dashed' | 'dotted'
  borderColor: string                  // free color picker
}
```

### Control panel sections

| Section | Controls |
|---|---|
| **Content** | `label` — text input |
| **Behaviour** | `state` — segmented (default / hover); `theme` — segmented (auto / light / dark) |
| **Icons** | `iconStart` toggle; `iconEnd` toggle |
| **Color overrides** | `bgColor` color picker + hex; `textColor` color picker + hex |
| **Spacing overrides** | `border-radius` token selector; `padding x` token selector; `padding y` token selector; `gap` token selector |
| **Border** | `border-width` token selector (none/1px/2px/4px); `border-style` selector (solid/dashed/dotted); `border-color` color picker |

### Token selectors — design token alignment

Spacing and border controls use a **TokenSegmented** component. Each button shows the **token name** (e.g. `xs`, `sm`, `3xs`) and its **resolved pixel value** as a subscript. The first button is always `token` — selecting it removes the inline override and lets the CSS design token govern the value.

| Control | Token source | Tag default |
|---|---|---|
| `border-radius` | `$radius-*` | `$dimensions-tag-corner-radius` = 9999px |
| `padding x` | `$padding-action-*` | `$padding-action-xs` = 8px |
| `padding y` | `$padding-action-*` | 0px (Tag default) |
| `gap` | `$gap-*` | `$gap-3xs` = 4px |
| `border-width` | `$size-stroke-border-width-*` | none |

### Live code snippet example

When the user sets `state="hover"`, `borderRadius="8px"`, and `borderWidth="1px"`, the code block shows:

```jsx
import { Tag } from '@company/design-system';

<Tag
  label="Label"
  state="hover"
  style={{ borderRadius: "8px", borderWidth: "1px", borderStyle: "solid" }}
/>
```

Only non-default values appear in the snippet. The `style` prop is omitted entirely when all spacing/border fields are at their token defaults.

### Adding more components to the playground

To register a new component in the playground sidebar:
1. Create `src/playground/workspaces/<Name>Workspace/` following the same pattern.
2. Add an entry to `src/playground/workspaces/registry.ts`:

```ts
import { ButtonWorkspace } from './ButtonWorkspace/ButtonWorkspace'

export const registry: WorkspaceEntry[] = [
  { id: 'tag',    label: 'Tag',    group: 'Components', component: TagWorkspace },
  { id: 'button', label: 'Button', group: 'Components', component: ButtonWorkspace },
]
```

---

## Running locally

```bash
# Start the playground (Vite dev server)
npm run dev

# Start Storybook
npm run storybook

# Rebuild design tokens (after changing tokens/*.json)
npm run build:tokens
```
