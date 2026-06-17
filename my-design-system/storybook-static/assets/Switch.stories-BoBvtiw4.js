import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CqNWPJR6.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i=e((()=>{})),a,o,s,c=e((()=>{a=t(n(),1),i(),o=r(),s=(0,a.forwardRef)(({state:e=`unchecked`,label:t,description:n,placement:r=`left`,onChange:i,disabled:s,className:c,id:l,...u},d)=>{let f=(0,a.useId)(),p=l??`ds-switch-${f}`,m=[`ds-switch`,`ds-switch--${e}`,`ds-switch--placement-${r}`,s?`ds-switch--disabled`:null,c].filter(Boolean).join(` `),h=e=>{i?.(e.target.checked?`checked`:`unchecked`,e)},g=(0,o.jsx)(`span`,{className:`ds-switch__track`,"aria-hidden":`true`,children:(0,o.jsx)(`span`,{className:`ds-switch__knob`})}),_=(t||n)&&(0,o.jsxs)(`span`,{className:`ds-switch__text`,children:[t&&(0,o.jsx)(`span`,{className:`ds-switch__label`,children:t}),n&&(0,o.jsx)(`span`,{className:`ds-switch__description`,children:n})]});return(0,o.jsxs)(`label`,{htmlFor:p,className:m,children:[(0,o.jsx)(`input`,{ref:d,id:p,type:`checkbox`,role:`switch`,className:`ds-switch__input`,checked:e===`checked`,disabled:s,"aria-checked":e===`checked`,onChange:h,...u}),r===`left`?(0,o.jsxs)(o.Fragment,{children:[g,_]}):(0,o.jsxs)(o.Fragment,{children:[_,g]})]})}),s.displayName=`Switch`,s.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{state:{required:!1,tsType:{name:`union`,raw:`'checked' | 'unchecked'`,elements:[{name:`literal`,value:`'checked'`},{name:`literal`,value:`'unchecked'`}]},description:`Visual + functional state`,defaultValue:{value:`'unchecked'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:`Label text rendered next to the switch`},description:{required:!1,tsType:{name:`ReactNode`},description:`Description text rendered under the label`},placement:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Switch on the left or right of the label`,defaultValue:{value:`'left'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: SwitchState, e: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`union`,raw:`'checked' | 'unchecked'`,elements:[{name:`literal`,value:`'checked'`},{name:`literal`,value:`'unchecked'`}]},name:`next`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`e`}],return:{name:`void`}}},description:`Fired with the next state when the user toggles`}},composes:[`Omit`]}})),l,u,d,f,p;e((()=>{l=t(n(),1),c(),u=r(),d={title:`Inputs/Switch (sereneogilvy)`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`## Switch

A two-state toggle for turning a setting on or off **immediately** (without a confirm step).
Renders as a real \`<input type="checkbox" role="switch">\` so it stays accessible to
keyboard users and screen readers.

### Anatomy
- **Track** — pill-shaped background; color reflects the state.
- **Knob** — circular indicator that slides between off (left) and on (right).
- **Label** — primary text describing what the switch controls.
- **Description** — optional helper text under the label.

### When to use
- Settings that take effect instantly (notifications, dark mode, feature toggles).
- Boolean preferences inside forms where saving is automatic.

### When *not* to use
- Inside a form that's only saved on submit — use a \`Checkbox\` instead.
- For selecting one of several options — use \`Radio\`.

### Variants

| Prop          | Values                       | Purpose                                              |
| ------------- | ---------------------------- | ---------------------------------------------------- |
| \`state\`       | \`checked\` · \`unchecked\`      | Visual + functional state.                           |
| \`placement\`   | \`left\` · \`right\`             | Track on the left or right of the label.             |
| \`label\`       | \`ReactNode\`                  | Primary label text.                                  |
| \`description\` | \`ReactNode\`                  | Helper text under the label.                         |
| \`disabled\`    | \`boolean\`                    | Greys out the control and blocks interaction.        |
| \`onChange\`    | \`(next, event) => void\`      | Fires with the next \`SwitchState\` when toggled.      |

### Usage

\`\`\`tsx
import { Switch, type SwitchState } from '@company/design-system'

const [state, setState] = useState<SwitchState>('unchecked')

<Switch
  label="Enable notifications"
  description="We'll email you when a build finishes."
  state={state}
  onChange={(next) => setState(next)}
/>
\`\`\`

### Accessibility
- Renders as \`<input type="checkbox" role="switch">\` with \`aria-checked\`.
- The label is associated via \`htmlFor\`/\`id\` so clicking the label toggles the switch.
- Keyboard: \`Space\` toggles, \`Tab\` moves focus.
- Disabled state is conveyed via the native \`disabled\` attribute.`}}},argTypes:{label:{control:`text`,description:`Primary label text.`},description:{control:`text`,description:`Helper text under the label.`},state:{control:`inline-radio`,options:[`checked`,`unchecked`],description:`Visual + functional state.`},placement:{control:`inline-radio`,options:[`left`,`right`],description:`Track on the left or right of the label.`},disabled:{control:`boolean`,description:`Disable the control.`},interactive:{control:`boolean`,description:"When on, the playground manages its own state so the switch toggles on click. When off, `state` is forced from the Controls panel."}}},f={parameters:{docs:{description:{story:"Interactive playground covering every Switch variant. Toggle **interactive** to make the switch manage its own state, or leave it off to force a specific `state` from the Controls panel."}}},args:{label:`Switch Label`,description:`Description`,state:`unchecked`,placement:`left`,disabled:!1,interactive:!0},render:({interactive:e,...t})=>{if(!e)return(0,u.jsx)(`div`,{style:{width:320},children:(0,u.jsx)(s,{...t})});let[n,r]=(0,l.useState)(t.state);return(0,u.jsx)(`div`,{style:{width:320},children:(0,u.jsx)(s,{...t,state:n,onChange:e=>r(e)})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground covering every Switch variant. Toggle **interactive** to make the switch manage its own state, or leave it off to force a specific \`state\` from the Controls panel.'
      }
    }
  },
  args: {
    label: 'Switch Label',
    description: 'Description',
    state: 'unchecked',
    placement: 'left',
    disabled: false,
    interactive: true
  },
  render: ({
    interactive,
    ...args
  }) => {
    if (!interactive) {
      return <div style={{
        width: 320
      }}>\r
          <Switch {...args} />\r
        </div>;
    }
    const [state, setState] = useState<SwitchState>(args.state);
    return <div style={{
      width: 320
    }}>\r
        <Switch {...args} state={state} onChange={next => setState(next)} />\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`]}))();export{f as Playground,p as __namedExportsOrder,d as default};