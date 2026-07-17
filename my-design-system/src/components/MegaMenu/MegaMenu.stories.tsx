import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { MegaMenu } from './MegaMenu'
import type {
  MegaMenuColorMode,
  MegaMenuColumnConfig,
  MegaMenuLink,
} from './MegaMenu'
import { COLOR_TOKENS } from '../../playground/colors'
import { TOKENS } from '../../playground/designTokens'

// ----- icons (kept inline so the story stays self-contained) -----
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
  </svg>
)
const BoltIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
  </svg>
)
const FlagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 22V4M4 4h13l-2 4 2 4H4" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
)
const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 21a2 2 0 0 0 4 0" strokeLinecap="round" />
  </svg>
)

/**
 * String-keyed icon registry so the `columns[].links[].icon` field in the
 * Storybook controls panel can stay plain JSON (React nodes can't be
 * serialised inside an args control). Add a new entry here to make a new
 * icon selectable.
 */
const ICONS = {
  star: <StarIcon />,
  bolt: <BoltIcon />,
  flag: <FlagIcon />,
  bell: <BellIcon />,
} as const
type IconName = keyof typeof ICONS

/**
 * Editable shape for each link in the Storybook controls panel.
 * `icon` is a string key into the ICONS registry above — the render fn swaps
 * it for the matching `<svg>` ReactNode.
 */
type LinkEntry = {
  label: string
  href?: string
  icon?: IconName
  selected?: boolean
  external?: boolean
}

type ColumnEntry = {
  title?: string
  links: LinkEntry[]
}

type CardEntry = {
  image?: string
  imageAlt?: string
  title?: string
  subtitle?: string
  body?: string
  buttonLabel?: string
  buttonHref?: string
}

type PlaygroundArgs = {
  colorMode: MegaMenuColorMode
  title: string
  columns: ColumnEntry[]
  /** Set to `null` (clear all fields) to hide the card slot. */
  card: CardEntry
  // Token-based styling
  paddingX: string
  paddingY: string
  marginX: string
  marginY: string
  bgColor: string
  textColor: string
  titleColor: string
}

const meta: Meta<PlaygroundArgs> = {
  title: 'Navigation/MegaMenu',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## MegaMenu

A wide multi-column navigation panel — used to surface large information
architectures (product lines, departments, sections) from a single trigger.
Each column groups **Tier-1 \`NavItem\`s** under an uppercase category heading,
and an optional promotional **card** sits to the right with an image, copy and
a \`Button\` call-to-action.

### Anatomy
- **Title** (\`title\`) — heading at the top of the panel.
- **Columns** (\`columns\`) — declarative, fully dynamic list of columns. Each
  column has:
  - \`title\` — uppercase category heading.
  - \`links: MegaMenuLink[]\` — list of Tier-1 \`NavItem\` links. Each entry
    supports \`label\`, \`href\`, \`iconLeft\`, \`iconRight\`, \`selected\`,
    \`onClick\`, \`external\`, \`ariaLabel\`, \`key\`.
- **Card** (\`card\`) — pinned promotional slot. **Polymorphic**:
  - \`MegaMenuCardConfig\` — declarative, dynamic (\`image\`, \`title\`,
    \`subtitle\`, \`body\`, \`button: { label, onClick?, href?, variant? }\`,
    optional whole-card \`href\`).
  - \`ReactNode\` — full control (e.g. \`<MegaMenuCard ... />\` or a custom node).
- **Children** — composition escape hatch using \`<MegaMenuColumn>\` when you
  need to author the columns from JSX instead of plain data.

### Dynamic content
Both \`columns\` and \`card\` accept plain data so consumers can add / remove
/ reorder content at runtime (CMS, feature flags, auth state) without writing
any JSX:

\`\`\`tsx
<MegaMenu
  title="Our Products"
  columns={[
    {
      title: 'POPULAR',
      links: [
        { label: 'Overview',     href: '/overview' },
        { label: 'Features',     href: '/features' },
        { label: 'Integrations', href: '/integrations', external: true },
      ],
    },
    {
      title: 'BY ROLE',
      links: [
        { label: 'For Designers',  href: '/designers' },
        { label: 'For Developers', href: '/developers' },
      ],
    },
  ]}
  card={{
    image: '/promo.jpg',
    title: 'New release',
    subtitle: 'v2.0 is here',
    body: 'Faster, lighter and ready for production.',
    button: { label: 'Read more', href: '/changelog' },
  }}
/>
\`\`\`

### Composition API
Prefer JSX? Compose with \`<MegaMenuColumn>\` (and optionally
\`<MegaMenuCard>\` passed via \`card\`):

\`\`\`tsx
<MegaMenu title="Our Products" card={<MegaMenuCard ... />}>
  <MegaMenuColumn title="POPULAR">
    <NavItem hierarchy="tier-1" label="Overview"     href="/overview" />
    <NavItem hierarchy="tier-1" label="Features"     href="/features" />
    <NavItem hierarchy="tier-1" label="Integrations" href="/integrations" />
  </MegaMenuColumn>
  {/* ...more columns... */}
</MegaMenu>
\`\`\`

### Responsive behavior
| Viewport         | Layout                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| ≥ 1025 px        | Columns + card sit side-by-side; columns auto-fit (min 180 px).        |
| 641 – 1024 px    | Card drops below columns; columns force 2-up; card goes horizontal.    |
| ≤ 640 px         | Everything stacks into a single column; card image goes 16:9.          |

### Theming
All colors come from the slate token set in
\`src/styles/tokens/_variables.scss\` (e.g.
\`$color-system-slate-50\`,
\`$color-system-slate-600\`,
\`$color-system-white-white\`,
\`$color-system-gray-200\`,
\`$color-system-blue-400\`). **No hardcoded color values** —
swap the token layer to retheme.

### Accessibility
- Rendered inside a \`<section>\` landmark with either an \`aria-label\` or
  an \`aria-labelledby\` referencing the panel \`title\`.
- Each column's links use a semantic \`<ul role="list">\`.
- Tier-1 entries are real \`<a>\` elements (via \`NavItem\`), so keyboard and
  screen-reader navigation work out of the box.
- The card's CTA uses the design system's \`<Button>\` (full focus / hover /
  pressed states inherited).
        `.trim(),
      },
    },
  },
  argTypes: {
    colorMode: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Light or dark surface.',
    },
    title: {
      control: 'text',
      description: 'Heading rendered at the top of the panel.',
    },
    columns: {
      control: 'object',
      description:
        'Dynamic, user-editable list of columns. Each entry: ' +
        '{ title?, links: [{ label, href?, icon?: "star" | "bolt" | "flag" | "bell", selected?, external? }] }. ' +
        'Add / remove columns or links to add or remove them from the panel.',
    },
    card: {
      control: 'object',
      description:
        'Promotional card pinned to the right of the columns. ' +
        'Fields: { image?, imageAlt?, title?, subtitle?, body?, buttonLabel?, buttonHref? }. ' +
        'Clear `title`, `subtitle`, `body` and `buttonLabel` to hide the card body, ' +
        'or clear every field to hide the card entirely.',
    },
    // Spacing tokens
    paddingX: {
      control: 'select',
      options: [
        'default',
        `xs ${TOKENS.paddingContainer.xs}`,
        `s ${TOKENS.paddingContainer.s}`,
        `m ${TOKENS.paddingContainer.m}`,
        `l ${TOKENS.paddingContainer.l}`,
        `xl ${TOKENS.paddingContainer.xl}`,
      ],
      description: 'Horizontal padding from container scale.',
    },
    paddingY: {
      control: 'select',
      options: [
        'default',
        `050 ${TOKENS.space['050']}`,
        `100 ${TOKENS.space['100']}`,
        `200 ${TOKENS.space['200']}`,
        `300 ${TOKENS.space['300']}`,
        `400 ${TOKENS.space['400']}`,
        `500 ${TOKENS.space['500']}`,
        `600 ${TOKENS.space['600']}`,
      ],
      description: 'Vertical padding from space scale.',
    },
    marginX: {
      control: 'select',
      options: [
        'default',
        `0 ${TOKENS.space['0']}`,
        `050 ${TOKENS.space['050']}`,
        `100 ${TOKENS.space['100']}`,
        `200 ${TOKENS.space['200']}`,
        `300 ${TOKENS.space['300']}`,
        `400 ${TOKENS.space['400']}`,
      ],
      description: 'Horizontal margin from space scale.',
    },
    marginY: {
      control: 'select',
      options: [
        'default',
        `0 ${TOKENS.space['0']}`,
        `050 ${TOKENS.space['050']}`,
        `100 ${TOKENS.space['100']}`,
        `200 ${TOKENS.space['200']}`,
        `300 ${TOKENS.space['300']}`,
      ],
      description: 'Vertical margin from space scale.',
    },
    // Color tokens
    bgColor: {
      control: 'select',
      options: [
        'default',
        // System Slate
        `Slate Surface Primary ${COLOR_TOKENS.systemSlate.surface.primary}`,
        `Slate Surface Secondary ${COLOR_TOKENS.systemSlate.surface.secondary}`,
        `Slate Surface Tertiary ${COLOR_TOKENS.systemSlate.surface.tertiary}`,
        `Slate Background Primary ${COLOR_TOKENS.systemSlate.background.primary}`,
        `Slate Background Secondary ${COLOR_TOKENS.systemSlate.background.secondary}`,
        // System Neutral
        `Neutral Surface Primary ${COLOR_TOKENS.systemNeutral.surface.primary}`,
        `Neutral Background Primary ${COLOR_TOKENS.systemNeutral.background.primary}`,
        `Neutral Background Secondary ${COLOR_TOKENS.systemNeutral.background.secondary}`,
        // System Success
        `Success Surface Primary ${COLOR_TOKENS.systemSuccess.surface.primary}`,
        `Success Background Primary ${COLOR_TOKENS.systemSuccess.background.primary}`,
        // Brand Teal Blue
        `Teal Blue Surface Primary ${COLOR_TOKENS.brandTealBlue.surface.primary}`,
        `Teal Blue Background Primary ${COLOR_TOKENS.brandTealBlue.background.primary}`,
        `Teal Blue Background Secondary ${COLOR_TOKENS.brandTealBlue.background.secondary}`,
        // Brand Dark Turquoise
        `Dark Turquoise Surface Primary ${COLOR_TOKENS.brandDarkTurquoise.surface.primary}`,
        `Dark Turquoise Background Primary ${COLOR_TOKENS.brandDarkTurquoise.background.primary}`,
        // Brand Pale Blue
        `Pale Blue Surface Primary ${COLOR_TOKENS.brandPaleBlue.surface.primary}`,
        `Pale Blue Background Primary ${COLOR_TOKENS.brandPaleBlue.background.primary}`,
      ],
      description: 'Background color with actual hex value.',
    },
    textColor: {
      control: 'select',
      options: [
        'default',
        // System Slate
        `Slate Text Primary ${COLOR_TOKENS.systemSlate.text.primary}`,
        `Slate Text Secondary ${COLOR_TOKENS.systemSlate.text.secondary}`,
        `Slate Text Tertiary ${COLOR_TOKENS.systemSlate.text.tertiary}`,
        `Slate Text On Primary ${COLOR_TOKENS.systemSlate.text.onPrimary}`,
        // System Neutral
        `Neutral Text Primary ${COLOR_TOKENS.systemNeutral.text.primary}`,
        `Neutral Text Secondary ${COLOR_TOKENS.systemNeutral.text.secondary}`,
        `Neutral Text On Primary ${COLOR_TOKENS.systemNeutral.text.onPrimary}`,
        // System Success
        `Success Text Primary ${COLOR_TOKENS.systemSuccess.text.primary}`,
        `Success Text Secondary ${COLOR_TOKENS.systemSuccess.text.secondary}`,
        // Brand Teal Blue
        `Teal Blue Text Primary ${COLOR_TOKENS.brandTealBlue.text.primary}`,
        `Teal Blue Text Secondary ${COLOR_TOKENS.brandTealBlue.text.secondary}`,
        `Teal Blue Text On Primary ${COLOR_TOKENS.brandTealBlue.text.onPrimary}`,
        // Brand Dark Turquoise
        `Dark Turquoise Text Primary ${COLOR_TOKENS.brandDarkTurquoise.text.primary}`,
        `Dark Turquoise Text Secondary ${COLOR_TOKENS.brandDarkTurquoise.text.secondary}`,
        // Brand Pale Blue
        `Pale Blue Text Primary ${COLOR_TOKENS.brandPaleBlue.text.primary}`,
        `Pale Blue Text Secondary ${COLOR_TOKENS.brandPaleBlue.text.secondary}`,
      ],
      description: 'Text / link color with actual hex value.',
    },
    titleColor: {
      control: 'select',
      options: [
        'default',
        // System Slate
        `Slate Text Primary ${COLOR_TOKENS.systemSlate.text.primary}`,
        `Slate Text Secondary ${COLOR_TOKENS.systemSlate.text.secondary}`,
        `Slate Text Tertiary ${COLOR_TOKENS.systemSlate.text.tertiary}`,
        // System Neutral
        `Neutral Text Primary ${COLOR_TOKENS.systemNeutral.text.primary}`,
        `Neutral Text Secondary ${COLOR_TOKENS.systemNeutral.text.secondary}`,
        // Brand Teal Blue
        `Teal Blue Text Primary ${COLOR_TOKENS.brandTealBlue.text.primary}`,
        `Teal Blue Text Secondary ${COLOR_TOKENS.brandTealBlue.text.secondary}`,
        // Brand Dark Turquoise
        `Dark Turquoise Text Primary ${COLOR_TOKENS.brandDarkTurquoise.text.primary}`,
        `Dark Turquoise Text Secondary ${COLOR_TOKENS.brandDarkTurquoise.text.secondary}`,
        // Brand Pale Blue
        `Pale Blue Text Primary ${COLOR_TOKENS.brandPaleBlue.text.primary}`,
        `Pale Blue Text Secondary ${COLOR_TOKENS.brandPaleBlue.text.secondary}`,
      ],
      description: 'Title heading color with actual hex value.',
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
          'Interactive playground. Edit the **columns** array to change the link groups and the **card** object to change the promotional slot. Each link defaults to no icon — set `icon` to `"star" | "bolt" | "flag" | "bell"` to render a leading icon. Resize the Storybook viewport below ~1024 px to see the responsive collapse, and below ~640 px to see the single-column mobile layout.',
      },
    },
  },
  args: {
    colorMode: "light",
    title: 'Our Products',
    paddingX: `m ${TOKENS.paddingContainer.m}`,
    paddingY: `400 ${TOKENS.space['400']}`,
    marginX: 'default',
    marginY: 'default',
    bgColor: 'default',
    textColor: "Neutral Text Secondary #545454",
    titleColor: "Teal Blue Text Secondary #144284",
    columns: [
      {
        title: 'POPULAR',
        links: [
          { label: 'Overview',     href: '#overview' },
          { label: 'Features',     href: '#features' },
          { label: 'Integrations', href: '#integrations' },
          { label: 'Changelog',    href: '#changelog' },
        ],
      },
      {
        title: 'BY ROLE',
        links: [
          { label: 'For Designers',  href: '#designers' },
          { label: 'For Developers', href: '#developers' },
          { label: 'For Teams',      href: '#teams' },
          { label: 'For Enterprise', href: '#enterprise', selected: true },
        ],
      },
      {
        title: 'BY INDUSTRY',
        links: [
          { label: 'Retail',     href: '#retail' },
          { label: 'Automotive', href: '#automotive' },
          { label: 'Real Estate', href: '#real-estate' },
          { label: 'Healthcare', href: '#healthcare' },
        ],
      },
      {
        title: 'RESOURCES',
        links: [
          { label: 'Docs',         href: '#docs' },
          { label: 'API Reference', href: '#api', external: true },
          { label: 'Community',    href: '#community' },
          { label: 'Support',      href: '#support' },
        ],
      },
    ],
    card: {
      image: '',
      imageAlt: 'Promotional image',
      title: 'New release',
      subtitle: 'v2.0 is here',
      // ~18 words so the 3-line clamp on .ds-mega-menu__card-text
      // actually fills three lines inside the 320px card width.
      body: 'Faster, lighter, and ready for production with refreshed components, improved accessibility, and brand-new theming for every supported viewport.',
      buttonLabel: 'Read more',
      buttonHref: '#changelog',
    },
  },
  render: ({ colorMode, title, columns, card, paddingX, paddingY, marginX, marginY, bgColor, textColor, titleColor }) => {
    // Resolve each editable column into a real MegaMenuColumnConfig by
    // swapping the string `icon` key for the matching SVG ReactNode from the
    // ICONS registry. Icons without a matching key are silently dropped so a
    // typo doesn't crash the preview.
    const resolvedColumns: MegaMenuColumnConfig[] = columns.map((col, i) => ({
      key: i,
      title: col.title,
      links: col.links.map<MegaMenuLink>((l, j) => {
        const iconNode: ReactNode | undefined = l.icon
          ? ICONS[l.icon]
          : undefined
        return {
          key: j,
          label: l.label,
          href: l.href ?? '#',
          iconLeft: iconNode,
          selected: l.selected,
          external: l.external,
        }
      }),
    }))

    // Treat a fully-empty card as "no card" so the user can hide the slot
    // from the Storybook controls panel.
    const hasCardContent =
      Boolean(card?.image) ||
      Boolean(card?.title) ||
      Boolean(card?.subtitle) ||
      Boolean(card?.body) ||
      Boolean(card?.buttonLabel)

    // Extract hex color from option string (e.g., "Slate Text Primary #292929" → "#292929")
    const extractHexColor = (option: string) => {
      if (option === 'default') return undefined
      const match = option.match(/#[0-9a-fA-F]{6}/)
      return match ? match[0] : undefined
    }

    // Extract spacing value from option string (e.g., "m 32px" → "32px")
    const extractSpacingValue = (option: string) => {
      if (option === 'default') return undefined
      const parts = option.split(' ')
      return parts[1] || undefined // Return the value part after token name
    }

    const bgColorValue = extractHexColor(bgColor)
    const textColorValue = extractHexColor(textColor)
    const titleColorValue = extractHexColor(titleColor)
    const paddingXValue = extractSpacingValue(paddingX)
    const paddingYValue = extractSpacingValue(paddingY)
    const marginXValue = extractSpacingValue(marginX)
    const marginYValue = extractSpacingValue(marginY)

    // Build inline styles from token selections
    const styles = {
      paddingInline: paddingXValue,
      paddingBlock: paddingYValue,
      marginInline: marginXValue,
      marginBlock: marginYValue,
      backgroundColor: bgColorValue,
      '--sds-mega-menu-text-color': textColorValue,
      '--sds-mega-menu-title-color': titleColorValue,
    } as React.CSSProperties

    return (
      <MegaMenu
        colorMode={colorMode}
        title={title || undefined}
        columns={resolvedColumns}
        style={styles}
        card={
          hasCardContent
            ? {
                image: card.image || undefined,
                imageAlt: card.imageAlt,
                title: card.title || undefined,
                subtitle: card.subtitle || undefined,
                body: card.body || undefined,
                button: card.buttonLabel
                  ? {
                      label: card.buttonLabel,
                      href: card.buttonHref || undefined,
                    }
                  : undefined,
              }
            : undefined
        }
      />
    )
  },
}

