import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n=e((()=>{})),r,i,a,o,s=e((()=>{n(),r=t(),i=()=>(0,r.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,className:`ds-breadcrumbs__separator-icon`,width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,r.jsx)(`path`,{d:`M6 3L11 8L6 13`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),a=({variant:e=`ancestor`,children:t,className:n,href:i,onClick:a,...o})=>{let s=[`ds-breadcrumbs__item`,`ds-breadcrumbs__item--${e}`,n].filter(Boolean).join(` `),c=e===`collapsed`&&!t?`…`:t;return e===`current`?(0,r.jsx)(`span`,{className:s,"aria-current":`page`,...o,children:c}):i||a?(0,r.jsx)(`a`,{className:s,href:i,onClick:a,"aria-label":e===`collapsed`?`Show collapsed breadcrumbs`:void 0,...o,children:c}):(0,r.jsx)(`span`,{className:s,"aria-label":e===`collapsed`?`Collapsed breadcrumbs`:void 0,...o,children:c})},o=({items:e,ariaLabel:t=`Breadcrumb`,className:n,...o})=>(0,r.jsx)(`nav`,{className:[`ds-breadcrumbs`,n].filter(Boolean).join(` `),"aria-label":t,...o,children:(0,r.jsx)(`ol`,{className:`ds-breadcrumbs__list`,children:e.map((t,n)=>{let o=n===e.length-1;return(0,r.jsxs)(`li`,{className:`ds-breadcrumbs__list-item`,children:[(0,r.jsx)(a,{variant:t.current?`current`:t.collapsed?`collapsed`:`ancestor`,href:t.href,onClick:t.onClick,children:t.label}),!o&&(0,r.jsx)(`span`,{className:`ds-breadcrumbs__separator`,"aria-hidden":`true`,children:(0,r.jsx)(i,{})})]},t.key??n)})})}),a.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbItem`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'ancestor' | 'collapsed' | 'current'`,elements:[{name:`literal`,value:`'ancestor'`},{name:`literal`,value:`'collapsed'`},{name:`literal`,value:`'current'`}]},description:``,defaultValue:{value:`'ancestor'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]},o.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItemData`}],raw:`BreadcrumbItemData[]`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:`Accessible label for the nav landmark.`,defaultValue:{value:`'Breadcrumb'`,computed:!1}}},composes:[`HTMLAttributes`]}})),c,l,u,d;e((()=>{s(),c=t(),l={title:`Navigation/Breadcrumbs`,component:o,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"## Breadcrumbs\n\nBreadcrumbs show the user's location within a hierarchy and let them jump back to any\nparent page. They render as a semantic `<nav aria-label=\"Breadcrumb\">` containing an\nordered list of crumbs separated by a chevron icon.\n\n### Anatomy\n- **Ancestor** — a clickable link to a parent page.\n- **Collapsed (`…`)** — a placeholder representing one or more hidden middle crumbs\n  (useful for long paths). May be a link/button that reveals the hidden crumbs.\n- **Current** — the active page. Rendered as non-interactive text with\n  `aria-current=\"page\"`.\n\n### When to use\n- Pages that live more than one level deep in the navigation hierarchy.\n- To give users a quick way back to parent sections without using the browser back button.\n\n### When *not* to use\n- Top-level pages (Home, Dashboard) where there's no hierarchy to show.\n- As a substitute for primary navigation.\n\n### Usage\n\n```tsx\nimport { Breadcrumbs } from '@company/design-system'\n\n<Breadcrumbs\n  items={[\n    { label: 'Home',    href: '/' },\n    { label: 'Library', href: '/library' },\n    { label: 'Data',    href: '/library/data' },\n    { label: 'Report',  current: true },\n  ]}\n/>\n```\n\n### Item shape (`BreadcrumbItemData`)\n\n| Field        | Type                | Purpose                                                              |\n| ------------ | ------------------- | -------------------------------------------------------------------- |\n| `label`      | `ReactNode`         | Visible text. Optional for `collapsed` (defaults to `…`).            |\n| `href`       | `string`            | If set, renders as an `<a>`.                                         |\n| `onClick`    | `() => void`        | Click handler (use when no `href`, e.g. SPA navigation).             |\n| `current`    | `boolean`           | Marks the active page; non-link, gets `aria-current=\"page\"`.         |\n| `collapsed`  | `boolean`           | Renders as a `…` indicator for hidden middle crumbs.                 |\n| `key`        | `string \\| number` | Stable React list key.                                               |\n\n### Accessibility\n- Rendered inside a `<nav>` landmark with a localizable `aria-label` (default `\"Breadcrumb\"`).\n- The current page uses `aria-current=\"page\"` instead of a link.\n- The chevron separator is `aria-hidden`.\n- A collapsed item exposes an `aria-label` (`\"Show collapsed breadcrumbs\"`) when interactive."}}},argTypes:{items:{table:{disable:!0}}}},u={parameters:{docs:{description:{story:"Interactive playground. Edit the **ancestors** list in the Controls panel to add, remove, or rename parent links. Toggle **showCollapsed** to insert a `…` placeholder after the first ancestor."}}},argTypes:{ancestors:{control:`object`,description:"List of ancestor links rendered before the current crumb. Each entry is `{ label, href }`.",table:{type:{summary:`{ label: string; href: string }[]`}}},showCollapsed:{control:`boolean`,description:"Insert a `…` collapsed placeholder between the first ancestor and the rest."},currentLabel:{control:`text`,description:`Text shown for the final, non-link crumb (the active page).`},ariaLabel:{control:`text`,description:"Accessible label applied to the `<nav>` landmark.",table:{defaultValue:{summary:`Breadcrumb`}}}},args:{ancestors:[{label:`Home`,href:`#home`},{label:`Library`,href:`#library`},{label:`Data`,href:`#data`}],showCollapsed:!1,currentLabel:`Current`,ariaLabel:`Breadcrumb`},render:e=>{let t=(e.ancestors??[]).filter(e=>e&&e.label),n=[];return e.showCollapsed&&t.length>0?(n.push({label:t[0].label,href:t[0].href,key:`a-0`}),n.push({collapsed:!0,href:`#`,key:`collapsed`}),t.slice(1).forEach((e,t)=>{n.push({label:e.label,href:e.href,key:`a-${t+1}`})})):t.forEach((e,t)=>{n.push({label:e.label,href:e.href,key:`a-${t}`})}),n.push({label:e.currentLabel,current:!0,key:`current`}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,c.jsxs)(`section`,{children:[(0,c.jsx)(`h4`,{style:{margin:`0 0 12px`,font:`600 14px/1.2 system-ui`},children:`Breadcrumbs`}),(0,c.jsx)(o,{items:n,ariaLabel:e.ariaLabel})]}),(0,c.jsxs)(`section`,{children:[(0,c.jsx)(`h4`,{style:{margin:`0 0 12px`,font:`600 14px/1.2 system-ui`},children:`Item Variants`}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`},children:[(0,c.jsx)(a,{variant:`ancestor`,href:`#`,children:`Ancestor`}),(0,c.jsx)(a,{variant:`collapsed`,href:`#`}),(0,c.jsx)(a,{variant:`current`,children:`Current`})]})]})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground. Edit the **ancestors** list in the Controls panel to add, remove, or rename parent links. Toggle **showCollapsed** to insert a \`…\` placeholder after the first ancestor.'
      }
    }
  },
  argTypes: {
    ancestors: {
      control: 'object',
      description: 'List of ancestor links rendered before the current crumb. Each entry is \`{ label, href }\`.',
      table: {
        type: {
          summary: '{ label: string; href: string }[]'
        }
      }
    },
    showCollapsed: {
      control: 'boolean',
      description: 'Insert a \`…\` collapsed placeholder between the first ancestor and the rest.'
    },
    currentLabel: {
      control: 'text',
      description: 'Text shown for the final, non-link crumb (the active page).'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label applied to the \`<nav>\` landmark.',
      table: {
        defaultValue: {
          summary: 'Breadcrumb'
        }
      }
    }
  },
  args: {
    ancestors: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'Library',
      href: '#library'
    }, {
      label: 'Data',
      href: '#data'
    }],
    showCollapsed: false,
    currentLabel: 'Current',
    ariaLabel: 'Breadcrumb'
  },
  render: args => {
    // \`ancestors\` comes from the Controls panel (object editor).
    // Each entry is a parent link: { label, href }.
    const ancestors = (args.ancestors ?? []).filter(a => a && a.label);

    // \`items\` is what <Breadcrumbs> actually renders.
    // We build it by combining: ancestors (+ optional collapsed) + the current crumb.
    const items: BreadcrumbItemData[] = [];
    if (args.showCollapsed && ancestors.length > 0) {
      // First ancestor stays visible as a link.
      items.push({
        label: ancestors[0].label,
        href: ancestors[0].href,
        key: 'a-0'
      });
      // "…" placeholder representing hidden middle crumbs.
      items.push({
        collapsed: true,
        href: '#',
        key: 'collapsed'
      });
      // Remaining ancestors render after the collapsed indicator.
      ancestors.slice(1).forEach((a, i) => {
        items.push({
          label: a.label,
          href: a.href,
          key: \`a-\${i + 1}\`
        });
      });
    } else {
      // No collapse: render every ancestor as a link in order.
      ancestors.forEach((a, i) => {
        items.push({
          label: a.label,
          href: a.href,
          key: \`a-\${i}\`
        });
      });
    }

    // Final crumb = the current page (non-link, gets aria-current="page").
    items.push({
      label: args.currentLabel,
      current: true,
      key: 'current'
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}>\r
        <section>\r
          <h4 style={{
          margin: '0 0 12px',
          font: '600 14px/1.2 system-ui'
        }}>Breadcrumbs</h4>\r
          {/* \`items\` drives the whole nav: ancestors → (optional …) → current */}\r
          <Breadcrumbs items={items} ariaLabel={args.ariaLabel} />\r
        </section>\r
\r
        <section>\r
          <h4 style={{
          margin: '0 0 12px',
          font: '600 14px/1.2 system-ui'
        }}>Item Variants</h4>\r
          <div style={{
          display: 'flex',
          gap: 24,
          alignItems: 'center'
        }}>\r
            {/* ancestor: clickable link to a parent page */}\r
            <BreadcrumbItem variant="ancestor" href="#">Ancestor</BreadcrumbItem>\r
            {/* collapsed: "…" placeholder for hidden middle crumbs */}\r
            <BreadcrumbItem variant="collapsed" href="#" />\r
            {/* current: the active page, non-link, aria-current="page" */}\r
            <BreadcrumbItem variant="current">Current</BreadcrumbItem>\r
          </div>\r
        </section>\r
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Playground`]}))();export{u as Playground,d as __namedExportsOrder,l as default};