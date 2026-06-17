import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CqNWPJR6.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i=e((()=>{})),a,o,s,c,l,u=e((()=>{a=t(n(),1),i(),o=r(),s=()=>(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,o.jsx)(`mask`,{id:`ds-radio-checked-mask`,fill:`white`,children:(0,o.jsx)(`path`,{d:`M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z`})}),(0,o.jsx)(`path`,{d:`M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z`,fill:`#141F2E`}),(0,o.jsx)(`path`,{d:`M0 10M20 10M20 10M0 10M10 0M20 10M10 20M0 10M10 20V19C5.02944 19 1 14.9706 1 10H0H-1C-1 16.0751 3.92487 21 10 21V20ZM20 10H19C19 14.9706 14.9706 19 10 19V20V21C16.0751 21 21 16.0751 21 10H20ZM10 0V1C14.9706 1 19 5.02944 19 10H20H21C21 3.92487 16.0751 -1 10 -1V0ZM10 0V-1C3.92487 -1 -1 3.92487 -1 10H0H1C1 5.02944 5.02944 1 10 1V0Z`,fill:`#6B6B6B`,mask:`url(#ds-radio-checked-mask)`}),(0,o.jsx)(`circle`,{cx:`10`,cy:`10`,r:`4`,fill:`white`})]}),c=()=>(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,o.jsx)(`mask`,{id:`ds-radio-unchecked-mask`,fill:`white`,children:(0,o.jsx)(`path`,{d:`M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z`})}),(0,o.jsx)(`path`,{d:`M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z`,fill:`#E9ECF0`}),(0,o.jsx)(`path`,{d:`M0 10M20 10M20 10M0 10M10 0M20 10M10 20M0 10M10 20V19C5.02944 19 1 14.9706 1 10H0H-1C-1 16.0751 3.92487 21 10 21V20ZM20 10H19C19 14.9706 14.9706 19 10 19V20V21C16.0751 21 21 16.0751 21 10H20ZM10 0V1C14.9706 1 19 5.02944 19 10H20H21C21 3.92487 16.0751 -1 10 -1V0ZM10 0V-1C3.92487 -1 -1 3.92487 -1 10H0H1C1 5.02944 5.02944 1 10 1V0Z`,fill:`#BCBCBC`,mask:`url(#ds-radio-unchecked-mask)`})]}),l=(0,a.forwardRef)(({state:e=`unchecked`,label:t,description:n,placement:r=`left`,onChange:i,disabled:l,className:u,id:d,name:f,value:p,...m},h)=>{let g=(0,a.useId)(),_=d??`ds-radio-${g}`,v=[`ds-radio`,`ds-radio--${e}`,`ds-radio--placement-${r}`,l?`ds-radio--disabled`:null,u].filter(Boolean).join(` `),y=e=>{i?.(e.target.checked?`checked`:`unchecked`,e)},b=(0,o.jsx)(`span`,{className:`ds-radio__box`,"aria-hidden":`true`,children:e===`checked`?(0,o.jsx)(s,{}):(0,o.jsx)(c,{})}),x=(t||n)&&(0,o.jsxs)(`span`,{className:`ds-radio__text`,children:[t&&(0,o.jsx)(`span`,{className:`ds-radio__label`,children:t}),n&&(0,o.jsx)(`span`,{className:`ds-radio__description`,children:n})]});return(0,o.jsxs)(`label`,{htmlFor:_,className:v,children:[(0,o.jsx)(`input`,{ref:h,id:_,name:f,value:p,type:`radio`,className:`ds-radio__input`,checked:e===`checked`,disabled:l,onChange:y,...m}),r===`left`?(0,o.jsxs)(o.Fragment,{children:[b,x]}):(0,o.jsxs)(o.Fragment,{children:[x,b]})]})}),l.displayName=`Radio`,l.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{state:{required:!1,tsType:{name:`union`,raw:`'checked' | 'unchecked'`,elements:[{name:`literal`,value:`'checked'`},{name:`literal`,value:`'unchecked'`}]},description:`Visual + functional state`,defaultValue:{value:`'unchecked'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:`Label text (rendered next to the radio)`},description:{required:!1,tsType:{name:`ReactNode`},description:`Description text (rendered under the label)`},placement:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Radio on the left or right of the label`,defaultValue:{value:`'left'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: RadioState, e: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`union`,raw:`'checked' | 'unchecked'`,elements:[{name:`literal`,value:`'checked'`},{name:`literal`,value:`'unchecked'`}]},name:`next`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`e`}],return:{name:`void`}}},description:`Fired when the user selects this radio`}},composes:[`Omit`]}})),d,f,p,m,h;e((()=>{d=t(n(),1),u(),f=r(),p={title:`Inputs/Radio (sereneogilvy)`,component:l,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`## Radio

A form control for selecting **one** option from a mutually-exclusive set. Renders
as a native \`<input type="radio">\` wrapped in a clickable \`<label>\` with an
optional title and description.

### Anatomy
- **Dot** — the visual indicator (empty / filled center when selected).
- **Label** — primary text describing the option.
- **Description** — optional secondary text shown under the label.

### Variants

| Prop          | Values                  | Purpose                                              |
| ------------- | ----------------------- | ---------------------------------------------------- |
| \`state\`       | \`unchecked\` · \`checked\` | Visual + functional state.                           |
| \`placement\`   | \`left\` · \`right\`      | Dot position relative to the label.                  |
| \`label\`       | \`ReactNode\`             | Primary text.                                        |
| \`description\` | \`ReactNode\`             | Optional secondary text shown under the label.       |
| \`disabled\`    | \`boolean\`               | Disables interaction and dims the control.           |
| \`name\`        | \`string\`                | Group name — radios with the same name are mutually exclusive. |
| \`value\`       | \`string\`                | Value submitted with the form when this radio is selected. |
| \`onChange\`    | \`(next, e) => void\`     | Fires with the next state (\`checked\` only).          |

### Grouping
Radios become mutually exclusive when they share the same \`name\`. Track the
selected value in state and pass \`state\` per-radio:

\`\`\`tsx
import { useState } from 'react'
import { Radio } from '@company/design-system'

const [value, setValue] = useState('one')

const options = [
  { value: 'one',   label: 'Option One' },
  { value: 'two',   label: 'Option Two' },
  { value: 'three', label: 'Option Three' },
]

<div role="radiogroup" aria-label="Choose an option">
  {options.map((o) => (
    <Radio
      key={o.value}
      name="demo-group"
      value={o.value}
      label={o.label}
      state={value === o.value ? 'checked' : 'unchecked'}
      onChange={(next) => next === 'checked' && setValue(o.value)}
    />
  ))}
</div>
\`\`\`

### Accessibility
- Native \`<input type="radio">\` — full keyboard + screen-reader support out of the box.
- Wrap a logical set in a container with \`role="radiogroup"\` and an \`aria-label\`.
- Clicking the label selects the radio (the label is connected via \`htmlFor\`).`}}},argTypes:{label:{control:`text`,description:`Primary label text.`},description:{control:`text`,description:`Optional secondary text shown under the label.`},state:{control:`inline-radio`,options:[`unchecked`,`checked`],description:`Visual + functional state.`},placement:{control:`inline-radio`,options:[`left`,`right`],description:`Dot position relative to the label.`},disabled:{control:`boolean`,description:`Disables interaction and dims the control.`}},args:{label:`Radio Label`,description:`Description`,state:`unchecked`,placement:`left`,disabled:!1}},m={parameters:{docs:{description:{story:"Interactive playground covering every Radio variant. Click the dot to flip state via `onChange`, or force a state via the **state** control."}}},render:e=>{let[t,n]=(0,d.useState)(e.state);return(0,d.useEffect)(()=>n(e.state),[e.state]),(0,f.jsx)(`div`,{style:{width:320},children:(0,f.jsx)(l,{label:e.label,description:e.description,state:t,placement:e.placement,disabled:e.disabled,onChange:e=>n(e)})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground covering every Radio variant. Click the dot to flip state via \`onChange\`, or force a state via the **state** control.'
      }
    }
  },
  render: args => {
    const [state, setState] = useState<RadioState>(args.state);
    useEffect(() => setState(args.state), [args.state]);
    return <div style={{
      width: 320
    }}>\r
        <Radio label={args.label} description={args.description} state={state} placement={args.placement} disabled={args.disabled} onChange={next => setState(next)} />\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Playground`]}))();export{m as Playground,h as __namedExportsOrder,p as default};