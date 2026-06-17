import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./Sidebar-BL-rLpBe.js";var l,u,d,f,p,m,h,g,_;e((()=>{s(),l=t(),u=()=>(0,l.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,l.jsx)(`path`,{d:`m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`,strokeLinejoin:`round`})}),d=()=>(0,l.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,l.jsx)(`path`,{d:`M4 22V4M4 4h13l-2 4 2 4H4`,strokeLinejoin:`round`,strokeLinecap:`round`})}),f=()=>(0,l.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,l.jsx)(`path`,{d:`M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,l.jsx)(`path`,{d:`M10 21a2 2 0 0 0 4 0`,strokeLinecap:`round`})]}),p=()=>(0,l.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,l.jsx)(`circle`,{cx:`11`,cy:`11`,r:`7`}),(0,l.jsx)(`path`,{d:`m20 20-3.5-3.5`,strokeLinecap:`round`})]}),m={flag:(0,l.jsx)(d,{}),bell:(0,l.jsx)(f,{}),search:(0,l.jsx)(p,{}),star:(0,l.jsx)(u,{})},h={title:`Navigation/Sidebar`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`## Sidebar
A card-style vertical primary-navigation surface for app shells, dashboards, and admin
layouts. Composes the existing \`NavItem\` with **expandable Tier 1 groups**, **category
headings**, **dividers**, **standalone Tier 2 items**, a pinned **footer** slot, and a
polymorphic **logo** slot — both the logo and the footer can be driven by plain data so
they're fully dynamic without writing JSX.

> The Navbar's mobile burger drawer reuses this exact component — same chrome,
> same icon row, same data shape. See *Navigation/Navbar* for details.

### Anatomy
- **Logo** (\`logo\`) — brand mark at the top of the card. **Polymorphic**:
  - \`ReactNode\` (full control, e.g. inline SVG + text)
  - \`string\` (treated as a dynamic image \`src\`)
  - \`SidebarLogoConfig\` object — \`{ src, alt?, href?, height?, width?, text? }\`
- **SidebarItem** — Tier 1 entry; renders a chevron and toggles its nested children when any are provided.
- **SidebarNestedItem** — child of a \`SidebarItem\` (Tier 1 + Nested NavItem).
- **SidebarCategory** — small uppercase heading (e.g. *"CATEGORY TITLE"*).
- **SidebarDivider** — thin horizontal separator.
- **SidebarTier2Item** — standalone Tier 2 row (used near the footer).
- **Footer** (\`footer\`) — pinned bottom slot. **Polymorphic**:
  - \`ReactNode\` — full control (icons, account chip, etc.).
  - \`SidebarActionLink[]\` — declarative, dynamic list of links.
    - **Icon-only** entries (no \`label\`) render as a bare \`<a>\` wrapping
      the icon — preserves the original centered icon row look.
    - **Labeled** entries render as full Tier-2 \`NavItem\` chrome (icon + text).

### Dynamic logo
Pass a string \`src\` or a \`SidebarLogoConfig\` so the logo can be swapped at
runtime (CMS, tenant config, A/B test, etc.) without writing JSX:
\`\`\`tsx
<Sidebar
  logo={{ src: '/brand.svg', alt: 'Acme', text: 'Acme', href: '/' }}
  // ...
/>
\`\`\`
Pass a \`ReactNode\` instead when you need full control (inline SVG, custom layout).

### Dynamic footer
Pass a config array so consumers can add / remove / reorder bottom links at
runtime without writing JSX. Mix icon-only and labeled entries freely:
\`\`\`tsx
<Sidebar
  logo={{ src: '/brand.svg', alt: 'Acme' }}
  footer={[
    // Icon-only (bare <a>) — original centered icon row look.
    { href: '/flag',   iconLeft: <FlagIcon />,   ariaLabel: 'Reports' },
    { href: '/inbox',  iconLeft: <BellIcon />,   ariaLabel: 'Notifications' },
    { href: '/search', iconLeft: <SearchIcon />, ariaLabel: 'Search' },
    // Add a \`label\` to render as a labeled Tier-2 NavItem instead.
    // { label: 'Sign out', href: '/logout', iconLeft: <ExitIcon /> },
  ]}
>
  {/* ...sidebar items... */}
</Sidebar>
\`\`\`
Each entry supports: \`label\`, \`href\`, \`iconLeft\`, \`iconRight\`, \`selected\`,
\`onClick\`, \`external\`, \`ariaLabel\`, \`key\`.

> **Playground note.** In the Storybook controls panel, icons are referenced by
> a string key (\`'flag' | 'bell' | 'search' | 'star'\`) instead of a React node
> so the args stay JSON-serialisable. The story render fn swaps each key for
> the matching SVG. In real code you'd pass the SVG (or icon component)
> directly as \`iconLeft\`.

### Usage (composition API)
\`\`\`tsx
import {
  Sidebar,
  SidebarItem,
  SidebarNestedItem,
  SidebarTier2Item,
  SidebarCategory,
  SidebarDivider,
} from '@company/design-system'

<Sidebar logo={<Brand />} footer={<><Flag /><Bell /><Search /></>}>
  <SidebarItem iconLeft={<Star />} label="Tier 1 Label" />
  <SidebarItem iconLeft={<Star />} label="Tier 1 Label" defaultOpen>
    <SidebarNestedItem label="Tier 1 Nested" />
    <SidebarNestedItem label="Tier 1 Nested" />
  </SidebarItem>
  <SidebarDivider />
  <SidebarCategory>Category Title</SidebarCategory>
  <SidebarTier2Item label="Tier 2 Label" />
</Sidebar>
\`\`\`

### Theming
All colors come from the slate token set defined in
\`src/styles/tokens/_variables.scss\` (e.g.
\`$mapping-system-slate-surface-primary\`,
\`$mapping-system-slate-background-secondary\`,
\`$mapping-system-slate-text-on-primary\`,
\`$mapping-system-slate-border-primary\`,
\`$mapping-system-focus-border-secondary\`). **No hardcoded color values** —
swap the token layer to retheme the component (and, by extension, the
Navbar's mobile drawer which renders this same Sidebar).

### Accessibility
- Rendered inside an \`<aside>\` landmark with a localizable \`aria-label\` (default \`"Sidebar"\`).
- The body is wrapped in a \`<nav>\`.
- Expandable Tier 1 triggers expose \`aria-expanded\`.
- Dividers carry \`role="separator"\`.
- Child rows are real \`<a>\` elements (via \`NavItem\`), so keyboard and screen-reader
  navigation work out of the box.
- Bare-anchor footer icons expose \`aria-label\` (required when no visible label).
- Logo image accepts \`alt\` text; when \`href\` is provided the wrapper \`<a>\` also receives \`aria-label\`.`}}},argTypes:{colorMode:{control:`inline-radio`,options:[`light`,`dark`],description:`Light or dark surface.`},logoSrc:{control:`text`,description:"Logo image URL (passed straight to the Sidebar `logo` prop as a `SidebarLogoConfig`). Leave empty to hide the brand mark."},logoText:{control:`text`,description:`Optional brand text rendered to the right of the logo image. Leave empty for image-only.`},logoHref:{control:`text`,description:"Optional href — wraps the logo in an `<a>`. Leave empty for a non-linking logo."},footer:{control:`object`,description:'Dynamic, user-editable list of footer links rendered at the bottom of the sidebar. Each entry: { label?, href?, icon?: "flag" | "bell" | "search" | "star", selected?, external?, ariaLabel? }. Add / remove entries to add or remove links. Set the whole array to `[]` to hide the footer slot.'}}},g={parameters:{docs:{description:{story:'Interactive playground matching the Figma "Sidebar" specimen. Each footer link defaults to **icon-only** with a dummy `href` you can edit in the Controls panel to wire it to a real route. Each entry has an `href` (the dynamic link), an `icon` key (`flag`, `bell`, `search`, or `star`), and an `ariaLabel`. Add a `label` to any entry if you want a text label rendered next to the icon. Edit the **logo** controls (`logoSrc`, `logoText`, `logoHref`) to swap the brand mark dynamically — clear `logoSrc` to hide it. Switch color mode and expand the chevron groups to reveal nested items.'}}},args:{colorMode:`light`,logoSrc:`/favicon.svg`,logoText:`Al-Futtaim`,logoHref:`#home`,footer:[{href:`#reports`,icon:`flag`,ariaLabel:`Reports`},{href:`#notifications`,icon:`bell`,ariaLabel:`Notifications`},{href:`#search`,icon:`search`,ariaLabel:`Search`}]},render:({colorMode:e,logoSrc:t,logoText:s,logoHref:d,footer:f})=>{let p=f.map((e,t)=>{let n=e.icon?m[e.icon]:void 0;return{key:t,label:e.label,href:e.href??`#`,iconLeft:n,selected:e.selected,external:e.external,ariaLabel:e.ariaLabel??(e.label?void 0:e.icon)}});return(0,l.jsxs)(c,{colorMode:e,logo:t?{src:t,alt:s||`Logo`,text:s||void 0,href:d||void 0}:void 0,footer:p,children:[(0,l.jsx)(r,{iconLeft:(0,l.jsx)(u,{}),label:`Tier 1 Label`}),(0,l.jsx)(r,{iconLeft:(0,l.jsx)(u,{}),label:`Tier 1 Label`}),(0,l.jsxs)(r,{iconLeft:(0,l.jsx)(u,{}),label:`Tier 1 Label`,defaultOpen:!0,children:[(0,l.jsx)(n,{label:`Tier 1 Nested`}),(0,l.jsx)(n,{label:`Tier 1 Nested`})]}),(0,l.jsx)(o,{}),(0,l.jsx)(i,{children:`Category Title`}),(0,l.jsx)(r,{iconLeft:(0,l.jsx)(u,{}),label:`Tier 1 Label`}),(0,l.jsx)(r,{iconLeft:(0,l.jsx)(u,{}),label:`Tier 1 Label`}),(0,l.jsxs)(r,{iconLeft:(0,l.jsx)(u,{}),label:`Tier 1 Label`,defaultOpen:!0,children:[(0,l.jsx)(n,{label:`Tier 1 Nested`}),(0,l.jsx)(n,{label:`Tier 1 Nested`})]}),(0,l.jsx)(o,{}),(0,l.jsx)(a,{label:`Tier 2 Label`}),(0,l.jsx)(a,{label:`Tier 2 Label`}),(0,l.jsx)(a,{label:`Tier 2 Label`})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground matching the Figma "Sidebar" specimen. Each footer link defaults to **icon-only** with a dummy \`href\` you can edit in the Controls panel to wire it to a real route. Each entry has an \`href\` (the dynamic link), an \`icon\` key (\`flag\`, \`bell\`, \`search\`, or \`star\`), and an \`ariaLabel\`. Add a \`label\` to any entry if you want a text label rendered next to the icon. Edit the **logo** controls (\`logoSrc\`, \`logoText\`, \`logoHref\`) to swap the brand mark dynamically — clear \`logoSrc\` to hide it. Switch color mode and expand the chevron groups to reveal nested items.'
      }
    }
  },
  args: {
    colorMode: 'light',
    // ⬇️ Logo is now dynamic — edit the URL / text / href in the Controls
    //    panel to swap the brand mark at runtime (no JSX required).
    logoSrc: '/favicon.svg',
    logoText: 'Al-Futtaim',
    logoHref: '#home',
    // ⬇️ These three replace the old standalone <FlagIcon /> <BellIcon /> <SearchIcon />.
    //    Each is now a real link the user can edit (label, href, icon) and the
    //    icon is rendered visibly to the left of the label.
    footer: [{
      href: '#reports',
      icon: 'flag',
      ariaLabel: 'Reports'
    }, {
      href: '#notifications',
      icon: 'bell',
      ariaLabel: 'Notifications'
    }, {
      href: '#search',
      icon: 'search',
      ariaLabel: 'Search'
    }]
  },
  render: ({
    colorMode,
    logoSrc,
    logoText,
    logoHref,
    footer
  }) => {
    // Resolve each editable footer entry into a real SidebarActionLink by
    // swapping the string \`icon\` key for the matching SVG ReactNode from the
    // ICONS registry. Icons WITHOUT a matching key are silently dropped so a
    // typo doesn't crash the preview.
    const resolvedFooter: SidebarActionLink[] = footer.map((a, i) => {
      const iconNode: ReactNode | undefined = a.icon ? ICONS[a.icon] : undefined;
      return {
        key: i,
        label: a.label,
        href: a.href ?? '#',
        iconLeft: iconNode,
        selected: a.selected,
        external: a.external,
        ariaLabel: a.ariaLabel ?? (a.label ? undefined : a.icon)
      };
    });
    return <Sidebar colorMode={colorMode} logo={logoSrc ? {
      src: logoSrc,
      alt: logoText || 'Logo',
      text: logoText || undefined,
      href: logoHref || undefined
    } : undefined} footer={resolvedFooter}>\r
        <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" />\r
        <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" />\r
        <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" defaultOpen>\r
          <SidebarNestedItem label="Tier 1 Nested" />\r
          <SidebarNestedItem label="Tier 1 Nested" />\r
        </SidebarItem>\r
        <SidebarDivider />\r
        <SidebarCategory>Category Title</SidebarCategory>\r
        <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" />\r
        <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" />\r
        <SidebarItem iconLeft={<StarIcon />} label="Tier 1 Label" defaultOpen>\r
          <SidebarNestedItem label="Tier 1 Nested" />\r
          <SidebarNestedItem label="Tier 1 Nested" />\r
        </SidebarItem>\r
        <SidebarDivider />\r
        <SidebarTier2Item label="Tier 2 Label" />\r
        <SidebarTier2Item label="Tier 2 Label" />\r
        <SidebarTier2Item label="Tier 2 Label" />\r
      </Sidebar>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};