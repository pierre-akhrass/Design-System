import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs'
import type { BreadcrumbItemData, BreadcrumbsProps } from './Breadcrumbs'

type Ancestor = { label: string; href: string }

type PlaygroundArgs = {
  ancestors: Ancestor[]
  showCollapsed: boolean
  currentLabel: string
  ariaLabel: string
}

// Meta is widened so both the real `items` prop (auto-extracted for docs)
// and our playground-only `ancestors` arg are recognized by Storybook's types.
type MetaArgs = BreadcrumbsProps & PlaygroundArgs

const meta: Meta<MetaArgs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Breadcrumbs

Breadcrumbs show the user's location within a hierarchy and let them jump back to any
parent page. They render as a semantic \`<nav aria-label="Breadcrumb">\` containing an
ordered list of crumbs separated by a chevron icon.

### Anatomy
- **Ancestor** — a clickable link to a parent page.
- **Collapsed (\`…\`)** — a placeholder representing one or more hidden middle crumbs
  (useful for long paths). May be a link/button that reveals the hidden crumbs.
- **Current** — the active page. Rendered as non-interactive text with
  \`aria-current="page"\`.

### When to use
- Pages that live more than one level deep in the navigation hierarchy.
- To give users a quick way back to parent sections without using the browser back button.

### When *not* to use
- Top-level pages (Home, Dashboard) where there's no hierarchy to show.
- As a substitute for primary navigation.

### Usage

\`\`\`tsx
import { Breadcrumbs } from '@company/design-system'

<Breadcrumbs
  items={[
    { label: 'Home',    href: '/' },
    { label: 'Library', href: '/library' },
    { label: 'Data',    href: '/library/data' },
    { label: 'Report',  current: true },
  ]}
/>
\`\`\`

### Item shape (\`BreadcrumbItemData\`)

| Field        | Type                | Purpose                                                              |
| ------------ | ------------------- | -------------------------------------------------------------------- |
| \`label\`      | \`ReactNode\`         | Visible text. Optional for \`collapsed\` (defaults to \`…\`).            |
| \`href\`       | \`string\`            | If set, renders as an \`<a>\`.                                         |
| \`onClick\`    | \`() => void\`        | Click handler (use when no \`href\`, e.g. SPA navigation).             |
| \`current\`    | \`boolean\`           | Marks the active page; non-link, gets \`aria-current="page"\`.         |
| \`collapsed\`  | \`boolean\`           | Renders as a \`…\` indicator for hidden middle crumbs.                 |
| \`key\`        | \`string \\| number\` | Stable React list key.                                               |

### Accessibility
- Rendered inside a \`<nav>\` landmark with a localizable \`aria-label\` (default \`"Breadcrumb"\`).
- The current page uses \`aria-current="page"\` instead of a link.
- The chevron separator is \`aria-hidden\`.
- A collapsed item exposes an \`aria-label\` (\`"Show collapsed breadcrumbs"\`) when interactive.
        `.trim(),
      },
    },
  },
  argTypes: {
    // `items` is built inside render() from `ancestors`, so hide the raw prop control.
    items: { table: { disable: true } },
  },
}
export default meta

type Story = StoryObj<MetaArgs>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground. Edit the **ancestors** list in the Controls panel to add, remove, or rename parent links. Toggle **showCollapsed** to insert a `…` placeholder after the first ancestor.',
      },
    },
  },
  argTypes: {
    ancestors: {
      control: 'object',
      description: 'List of ancestor links rendered before the current crumb. Each entry is `{ label, href }`.',
      table: { type: { summary: '{ label: string; href: string }[]' } },
    },
    showCollapsed: {
      control: 'boolean',
      description: 'Insert a `…` collapsed placeholder between the first ancestor and the rest.',
    },
    currentLabel: {
      control: 'text',
      description: 'Text shown for the final, non-link crumb (the active page).',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label applied to the `<nav>` landmark.',
      table: { defaultValue: { summary: 'Breadcrumb' } },
    },
  },
  args: {
    ancestors: [
      { label: 'Home', href: '#home' },
      { label: 'Library', href: '#library' },
      { label: 'Data', href: '#data' },
    ],
    showCollapsed: false,
    currentLabel: 'Current',
    ariaLabel: 'Breadcrumb',
  },
  render: (args) => {
    // `ancestors` comes from the Controls panel (object editor).
    // Each entry is a parent link: { label, href }.
    const ancestors = (args.ancestors ?? []).filter((a) => a && a.label)

    // `items` is what <Breadcrumbs> actually renders.
    // We build it by combining: ancestors (+ optional collapsed) + the current crumb.
    const items: BreadcrumbItemData[] = []

    if (args.showCollapsed && ancestors.length > 0) {
      // First ancestor stays visible as a link.
      items.push({ label: ancestors[0].label, href: ancestors[0].href, key: 'a-0' })
      // "…" placeholder representing hidden middle crumbs.
      items.push({ collapsed: true, href: '#', key: 'collapsed' })
      // Remaining ancestors render after the collapsed indicator.
      ancestors.slice(1).forEach((a, i) => {
        items.push({ label: a.label, href: a.href, key: `a-${i + 1}` })
      })
    } else {
      // No collapse: render every ancestor as a link in order.
      ancestors.forEach((a, i) => {
        items.push({ label: a.label, href: a.href, key: `a-${i}` })
      })
    }

    // Final crumb = the current page (non-link, gets aria-current="page").
    items.push({ label: args.currentLabel, current: true, key: 'current' })

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <section>
          <h4 style={{ margin: '0 0 12px', font: '600 14px/1.2 system-ui' }}>Breadcrumbs</h4>
          {/* `items` drives the whole nav: ancestors → (optional …) → current */}
          <Breadcrumbs items={items} ariaLabel={args.ariaLabel} />
        </section>

        <section>
          <h4 style={{ margin: '0 0 12px', font: '600 14px/1.2 system-ui' }}>Item Variants</h4>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {/* ancestor: clickable link to a parent page */}
            <BreadcrumbItem variant="ancestor" href="#">Ancestor</BreadcrumbItem>
            {/* collapsed: "…" placeholder for hidden middle crumbs */}
            <BreadcrumbItem variant="collapsed" href="#" />
            {/* current: the active page, non-link, aria-current="page" */}
            <BreadcrumbItem variant="current">Current</BreadcrumbItem>
          </div>
        </section>
      </div>
    )
  },
}
