import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CqNWPJR6.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./Button-BNQrBnNs.js";import{t as a}from"./Button-leIIfXrT.js";import{n as o,r as s,t as c}from"./Dropdown-CBtWDDAQ.js";import{t as l}from"./NavItem-DdFzjoJp.js";import{t as u}from"./NavItem-sby2edNr.js";var d,f,p,m,h,g;e((()=>{d=t(n(),1),s(),u(),a(),f=r(),p={title:`Navigation/Dropdown (pierre-akhrass)`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`## Dropdown

A vertically stacked menu surface used for navigation menus, account/profile
menus, and overflow actions. It's a thin container — content is fully
composable from \`NavItem\`s, \`DropdownDivider\`s, and an optional trailing
\`Button\`.

### Anatomy
- **Item** — a clickable row (rendered as a \`NavItem\` with \`hierarchy="tier-2"\`).
- **Divider** — a thin rule used to group items.
- **Action button** — an optional trailing primary/secondary \`Button\`.

### When to use
- Account menus, "more actions" overflow, navigation submenus, filter menus.
- Anywhere you need a small list of related actions or links anchored to a trigger.

### When *not* to use
- For selecting one value from a long list — use a Select / Combobox instead.
- For primary site navigation — use the \`Navbar\` + \`NavItem\` directly.

### Usage

\`\`\`tsx
import { Dropdown, DropdownDivider } from '@company/design-system'
import { NavItem, Button } from '@company/design-system'

<Dropdown>
  <NavItem hierarchy="tier-2" label="Profile" href="/profile" />
  <NavItem hierarchy="tier-2" label="Settings" href="/settings" />
  <DropdownDivider />
  <NavItem hierarchy="tier-2" label="Sign out" onClick={signOut} />
  <Button variant="filled">Action</Button>
</Dropdown>
\`\`\`

### Composition rules
- Children render in document order — no auto-sorting.
- Use \`DropdownDivider\` to group related items.
- Action \`Button\`s are typically last; one per dropdown is recommended.

### Theming
Colors are inherited from the global "Selection colors" CSS custom properties
defined in \`src/styles/global.scss\`. Override them on \`:root\` or a section
element to retheme the dropdown and every other consumer.
\`\`\`css
--sds-color-text-default-default
--sds-color-background-default-default
--sds-color-background-default-tertiary
--sds-color-border-brand-secondary
\`\`\`
### Accessibility
- The container has \`role="menu"\`.
- The divider has \`role="separator"\`.
- Child \`NavItem\`s render as real \`<a>\` elements, so keyboard and
  screen-reader navigation work out of the box.`}}}},m=e=>e.map((e,t)=>e.kind===`divider`?(0,f.jsx)(o,{},`divider-${t}`):e.kind===`button`?(0,f.jsx)(i,{variant:e.variant??`filled`,children:e.label},`button-${t}-${e.label}`):(0,f.jsx)(l,{hierarchy:`tier-2`,label:e.label},`item-${t}-${e.label}`)),h={parameters:{docs:{description:{story:'Interactive playground. Edit the **rows** array in the Controls panel to add, remove, reorder, or rename rows. Each row is `{ kind: "item" | "divider" | "button", label?, variant? }`.'}}},args:{rows:[{kind:`item`,label:`Tier 2 Label`},{kind:`item`,label:`Tier 2 Label`},{kind:`item`,label:`Tier 2 Label`},{kind:`item`,label:`Tier 2 Label`},{kind:`divider`},{kind:`item`,label:`Tier 2 Label`},{kind:`button`,label:`Button`,variant:`filled`}]},argTypes:{rows:{control:`object`,description:'Edit this array in the Controls panel. Each row is `{ kind: "item" | "divider" | "button", label?, variant? }`.'}},render:({rows:e})=>(0,f.jsx)(c,{children:(0,f.jsx)(d.Fragment,{children:m(e)})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground. Edit the **rows** array in the Controls panel to add, remove, reorder, or rename rows. Each row is \`{ kind: "item" | "divider" | "button", label?, variant? }\`.'
      }
    }
  },
  args: {
    rows: [{
      kind: 'item',
      label: 'Tier 2 Label'
    }, {
      kind: 'item',
      label: 'Tier 2 Label'
    }, {
      kind: 'item',
      label: 'Tier 2 Label'
    }, {
      kind: 'item',
      label: 'Tier 2 Label'
    }, {
      kind: 'divider'
    }, {
      kind: 'item',
      label: 'Tier 2 Label'
    }, {
      kind: 'button',
      label: 'Button',
      variant: 'filled'
    }]
  },
  argTypes: {
    rows: {
      control: 'object',
      description: 'Edit this array in the Controls panel. Each row is \`{ kind: "item" | "divider" | "button", label?, variant? }\`.'
    }
  },
  render: ({
    rows
  }) => <Dropdown>\r
      <Fragment>{renderRows(rows)}</Fragment>\r
    </Dropdown>
}`,...h.parameters?.docs?.source}}},g=[`Playground`]}))();export{h as Playground,g as __namedExportsOrder,p as default};