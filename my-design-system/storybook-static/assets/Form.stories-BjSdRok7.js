import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-bPXBCRN8.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-CUohm_gx.js";var o=e((()=>{i()})),s=e((()=>{}));function c(...e){return e.filter(Boolean).join(` `)}function l(e,t){return{isDisabled:t||e===`disabled`,stateClass:`ds-form-control--${e}`,ariaInvalid:e===`error`||void 0}}function u(){return(0,h.jsx)(`svg`,{"aria-hidden":`true`,className:`ds-form__icon`,viewBox:`0 0 16 16`,fill:`none`,children:(0,h.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function d(){return(0,h.jsx)(`svg`,{"aria-hidden":`true`,className:`ds-form__icon`,viewBox:`0 0 16 16`,fill:`none`,children:(0,h.jsx)(`path`,{d:`M3.5 8.5L6.5 11.5L12.5 4.5`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function f(){return(0,h.jsxs)(`svg`,{"aria-hidden":`true`,className:`ds-form__icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,h.jsx)(`path`,{d:`M8 2.25L14.03 12.75H1.97L8 2.25Z`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinejoin:`round`}),(0,h.jsx)(`path`,{d:`M8 5.5V9`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`}),(0,h.jsx)(`circle`,{cx:`8`,cy:`11.25`,r:`0.75`,fill:`currentColor`})]})}function p(){return(0,h.jsxs)(`svg`,{"aria-hidden":`true`,className:`ds-form__icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,h.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.25`,stroke:`currentColor`,strokeWidth:`1.2`}),(0,h.jsx)(`path`,{d:`M8 7.25V11`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`}),(0,h.jsx)(`circle`,{cx:`8`,cy:`5.25`,r:`0.75`,fill:`currentColor`})]})}var m,h,g,_,v,y,b,x,S,C,w=e((()=>{m=t(n(),1),o(),s(),h=r(),g=({theme:e=`light`,className:t,children:n,...r})=>(0,h.jsx)(`form`,{className:c(`ds-form`,`ds-form--${e}`,t),...r,children:n}),_=({label:e,description:t,error:n,required:r,className:i,children:a,...o})=>(0,h.jsxs)(`div`,{className:c(`ds-form-field`,i),...o,children:[e&&(0,h.jsxs)(`div`,{className:`ds-form-field__header`,children:[(0,h.jsx)(`span`,{className:`ds-form-field__label`,children:e}),r&&(0,h.jsx)(`span`,{className:`ds-form-field__required`,children:`*`})]}),a,t&&!n&&(0,h.jsxs)(`div`,{className:`ds-form-field__message ds-form-field__message--description`,children:[(0,h.jsx)(p,{}),(0,h.jsx)(`span`,{children:t})]}),n&&(0,h.jsxs)(`div`,{className:`ds-form-field__message ds-form-field__message--error`,children:[(0,h.jsx)(f,{}),(0,h.jsx)(`span`,{children:n})]})]}),v=({label:e,description:t,error:n,leadingIcon:r,trailingIcon:i,state:a=`default`,className:o,id:s,value:u,defaultValue:d,placeholder:f,disabled:p,readOnly:g,onChange:v,...y})=>{let b=(0,m.useId)(),x=s??b,S=g??(u!==void 0&&v===void 0),{isDisabled:C,stateClass:w,ariaInvalid:T}=l(a,p),E=c(`ds-form-control`,`ds-form-control--input`,w,C?`ds-form-control--disabled`:null,o);return(0,h.jsx)(_,{label:e,description:t??(a===`hover`?`Hover state`:void 0),error:n??(a===`error`?`Error message`:void 0),className:`ds-form-field--input`,children:(0,h.jsxs)(`div`,{className:E,children:[r&&(0,h.jsx)(`span`,{className:`ds-form-control__adornment ds-form-control__adornment--leading`,children:r}),(0,h.jsx)(`input`,{id:x,className:`ds-form-control__input`,"aria-invalid":T,disabled:C,placeholder:f,readOnly:S,value:u,defaultValue:d,onChange:v,...y}),i&&(0,h.jsx)(`span`,{className:`ds-form-control__adornment ds-form-control__adornment--trailing`,children:i})]})})},y=({label:e,description:t,error:n,state:r=`default`,className:i,id:a,value:o,defaultValue:s,placeholder:u,disabled:d,readOnly:f,onChange:p,rows:g=4,...v})=>{let y=(0,m.useId)(),b=a??y,x=f??(o!==void 0&&p===void 0),{isDisabled:S,stateClass:C,ariaInvalid:w}=l(r,d),T=c(`ds-form-control`,`ds-form-control--textarea`,C,S?`ds-form-control--disabled`:null,i);return(0,h.jsx)(_,{label:e,description:t??(r===`hover`?`Hover state`:void 0),error:n??(r===`error`?`Error message`:void 0),className:`ds-form-field--textarea`,children:(0,h.jsx)(`div`,{className:T,children:(0,h.jsx)(`textarea`,{id:b,className:`ds-form-control__input ds-form-control__textarea`,"aria-invalid":w,disabled:S,placeholder:u,readOnly:x,value:o,defaultValue:s,onChange:p,rows:g,...v})})})},b=({label:e,inlineLabel:t,value:n,defaultValue:r,placeholder:i,description:a,error:o,open:s=!1,state:f=`default`,options:p=[],leadingIcon:g,trailingIcon:v,name:y,required:b,disabled:x,onValueChange:S,className:C,...w})=>{let[T,E]=(0,m.useState)(r??p.find(e=>e.selected)?.value??p[0]?.value??``),D=n??T,O=p.find(e=>e.value===D)??p.find(e=>e.selected)??p[0],k=O?.label??i,A=O?.label??i,{isDisabled:j,stateClass:M,ariaInvalid:N}=l(f,x),P=e=>{n===void 0&&E(e),S?.(e)},F=c(`ds-form-select`,M.replace(`ds-form-control`,`ds-form-select`),s?`ds-form-select--open`:null,j?`ds-form-select--disabled`:null,C);return(0,h.jsx)(_,{label:e,description:a,error:o,className:`ds-form-field--select`,...w,children:(0,h.jsxs)(`div`,{className:F,children:[(0,h.jsxs)(`button`,{type:`button`,className:c(`ds-form-control`,`ds-form-control--select`,M,j?`ds-form-control--disabled`:null),"aria-expanded":s,"aria-invalid":N,disabled:j,children:[g&&(0,h.jsx)(`span`,{className:`ds-form-control__adornment ds-form-control__adornment--leading`,children:g}),(0,h.jsxs)(`span`,{className:c(`ds-form-select__value`,t?`ds-form-select__value--stacked`:null,O?`ds-form-select__value--filled`:`ds-form-select__value--placeholder`),children:[t&&(0,h.jsx)(`span`,{className:`ds-form-select__inline-label`,children:t}),(0,h.jsx)(`span`,{className:`ds-form-select__inline-value`,children:k})]}),v??(0,h.jsx)(u,{})]}),(0,h.jsx)(`select`,{className:`ds-form-select__native`,disabled:j,name:y,onChange:e=>P(e.target.value),required:b,tabIndex:-1,value:D,"aria-hidden":`true`,children:p.map((e,t)=>(0,h.jsx)(`option`,{value:e.value,children:typeof e.label==`string`?e.label:e.value},`${e.value}-${t}`))}),s&&p.length>0&&(0,h.jsx)(`div`,{className:`ds-form-select__menu`,role:`listbox`,"aria-label":typeof A==`string`?A:void 0,children:p.map((e,t)=>(0,h.jsxs)(`button`,{type:`button`,className:`ds-form-select__option`,role:`option`,"aria-selected":e.value===D,onClick:()=>P(e.value),children:[(0,h.jsx)(`span`,{className:`ds-form-select__option-label`,children:e.label}),e.description&&(0,h.jsx)(`span`,{className:`ds-form-select__option-description`,children:e.description}),e.value===D&&(0,h.jsx)(d,{})]},`${t}-${e.value}`))})]})})},x=({id:e,name:t,value:n,label:r,description:i,checked:a,defaultChecked:o,onChange:s,disabled:u,required:f,readOnly:p,state:g=`default`,linkLabel:_,linkHref:v=`#`,linkPlacement:y=`inline`,className:b,...x})=>{let C=(0,m.useId)(),w=e??C,{isDisabled:T}=l(g,u),E=p??(a!==void 0&&s===void 0),D=a??o??!1;return(0,h.jsxs)(`label`,{className:c(`ds-form-checkbox`,`ds-form-checkbox--${g}`,D?`ds-form-checkbox--checked`:null,T?`ds-form-checkbox--disabled`:null,b),htmlFor:w,children:[(0,h.jsx)(`input`,{id:w,className:`ds-form-checkbox__native`,type:`checkbox`,name:t,value:typeof n==`string`?n:void 0,checked:a,defaultChecked:o,onChange:s,disabled:T,required:f,readOnly:E,...x}),(0,h.jsx)(`span`,{className:`ds-form-checkbox__box`,"aria-hidden":`true`,children:D&&(0,h.jsx)(d,{})}),(0,h.jsxs)(`div`,{className:`ds-form-checkbox__content`,children:[(0,h.jsxs)(`div`,{className:`ds-form-checkbox__label-row`,children:[(0,h.jsx)(`span`,{className:`ds-form-checkbox__label`,children:r}),_&&y===`inline`&&(0,h.jsx)(S,{href:v,className:`ds-form-checkbox__link`,children:_})]}),i&&(0,h.jsx)(`div`,{className:`ds-form-checkbox__description`,children:i}),_&&y===`below`&&(0,h.jsx)(S,{href:v,className:`ds-form-checkbox__link ds-form-checkbox__link--below`,children:_})]})]})},S=({children:e,className:t,...n})=>(0,h.jsx)(`a`,{className:c(`ds-form-link`,t),...n,children:e}),C=({primaryLabel:e,secondaryLabel:t,primaryState:n=`default`,secondaryState:r=`default`,primaryTone:i=`neutral`,compact:o=!1,className:s,...l})=>(0,h.jsxs)(`div`,{className:c(`ds-form-actions`,`ds-form-actions--${i}`,o?`ds-form-actions--compact`:null,s),...l,children:[t&&(0,h.jsx)(a,{className:`ds-form-actions__button ds-form-actions__button--secondary`,state:r,variant:`plain`,children:t}),(0,h.jsx)(a,{className:`ds-form-actions__button ds-form-actions__button--primary`,state:n,variant:`filled`,children:e})]}),g.__docgenInfo={description:``,methods:[],displayName:`Form`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'light'`,computed:!1}}},composes:[`FormHTMLAttributes`]},_.__docgenInfo={description:``,methods:[],displayName:`FormField`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`HTMLAttributes`]},v.__docgenInfo={description:``,methods:[],displayName:`FormInput`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},leadingIcon:{required:!1,tsType:{name:`ReactNode`},description:``},trailingIcon:{required:!1,tsType:{name:`ReactNode`},description:``},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'focus' | 'hover' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}}},composes:[`Omit`]},y.__docgenInfo={description:``,methods:[],displayName:`FormTextarea`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'focus' | 'hover' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},rows:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`4`,computed:!1}}},composes:[`Omit`]},b.__docgenInfo={description:``,methods:[],displayName:`FormSelect`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},inlineLabel:{required:!1,tsType:{name:`ReactNode`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'focus' | 'hover' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},options:{required:!1,tsType:{name:`Array`,elements:[{name:`FormSelectOption`}],raw:`FormSelectOption[]`},description:``,defaultValue:{value:`[]`,computed:!1}},leadingIcon:{required:!1,tsType:{name:`ReactNode`},description:``},trailingIcon:{required:!1,tsType:{name:`ReactNode`},description:``},name:{required:!1,tsType:{name:`string`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}},composes:[`Omit`]},x.__docgenInfo={description:``,methods:[],displayName:`FormCheckbox`,props:{label:{required:!0,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'focus' | 'hover' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},linkLabel:{required:!1,tsType:{name:`ReactNode`},description:``},linkHref:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#'`,computed:!1}},linkPlacement:{required:!1,tsType:{name:`union`,raw:`'inline' | 'below'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'below'`}]},description:``,defaultValue:{value:`'inline'`,computed:!1}}},composes:[`Omit`]},S.__docgenInfo={description:``,methods:[],displayName:`FormTextLink`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`AnchorHTMLAttributes`]},C.__docgenInfo={description:``,methods:[],displayName:`FormActions`,props:{primaryLabel:{required:!0,tsType:{name:`ReactNode`},description:``},secondaryLabel:{required:!1,tsType:{name:`ReactNode`},description:``},primaryState:{required:!1,tsType:{name:`union`,raw:`'default' | 'focus' | 'hover' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},secondaryState:{required:!1,tsType:{name:`union`,raw:`'default' | 'focus' | 'hover' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},primaryTone:{required:!1,tsType:{name:`union`,raw:`'neutral' | 'brand'`,elements:[{name:`literal`,value:`'neutral'`},{name:`literal`,value:`'brand'`}]},description:``,defaultValue:{value:`'neutral'`,computed:!1}},compact:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]}}));function T({title:e,subtitle:t}){return(0,P.jsxs)(`div`,{className:`ds-form-doc__header`,children:[(0,P.jsx)(`h3`,{className:`ds-form-doc__title`,children:e}),t&&(0,P.jsx)(`p`,{className:`ds-form-doc__subtitle`,children:t})]})}function E(e){let[t,n]=(0,N.useState)(e);return{value:t,onChange:e=>n(e.target.value)}}function D({theme:e,selectOpen:t,checkboxChecked:n,compactButtons:r,inputState:i,actionTone:a,showDescriptions:o,showSecondaryAction:s}){let c=n??!0,l=r??!1,u=i??`default`,d=o??!0,f=s??!0,p=E(`Email`),m=E(`Password`);return(0,P.jsxs)(g,{className:`ds-form-doc__card`,style:{...I,maxWidth:320},theme:e,children:[(0,P.jsx)(v,{state:u,...p}),(0,P.jsx)(v,{state:u,...m}),(0,P.jsx)(x,{checked:c,description:d?`Description`:void 0,label:`Checkbox Label`}),(0,P.jsx)(C,{compact:l,primaryLabel:`Button`,secondaryLabel:f?`Button`:void 0,primaryTone:a??`neutral`}),t&&(0,P.jsx)(`div`,{className:`ds-form-doc__note`,children:`Open state is showcased in the select example below.`})]})}function O({theme:e,inputState:t,actionTone:n,showSecondaryAction:r,selectOpen:i}){let a=t??`default`,o=n??`neutral`,s=E(`Email`),c=E(`Password`);return(0,P.jsxs)(g,{className:`ds-form-doc__card`,style:{...I,maxWidth:320},theme:e,children:[(0,P.jsx)(v,{state:a,...s}),(0,P.jsx)(v,{state:a,...c}),(0,P.jsx)(C,{primaryLabel:`Button`,secondaryLabel:r===!1?void 0:`Button`,primaryTone:o}),(0,P.jsx)(S,{href:`#`,className:`ds-form-doc__link`,children:`Forgot password?`}),i&&null]})}function k({theme:e,selectOpen:t,checkboxChecked:n,inputState:r,textareaState:i,selectState:a,actionTone:o,linkPlacement:s,selectInverted:c,showSecondaryAction:l}){let u=r??`default`,d=i??`default`,f=a??`default`,p=o??`neutral`,m=E(`Full Name`),h=E(`Delivery note`),[_,S]=(0,N.useState)(`standard`);return(0,P.jsxs)(g,{className:`ds-form-doc__card`,style:{...I,maxWidth:365},theme:e,children:[(0,P.jsx)(T,{title:`Shipping information`,subtitle:`We ship within 2 working days`}),(0,P.jsx)(v,{state:u,...m}),(0,P.jsx)(b,{inlineLabel:`Label`,open:t??!0,state:f,className:c?`ds-form-select--inverted`:void 0,options:[{value:`standard`,label:`Standard Delivery`,description:`2-3 business days`},{value:`express`,label:`Express Delivery`,description:`Next business day`},{value:`pickup`,label:`Store Pickup`,description:`Ready in 4 hours`}],value:_,onValueChange:S}),(0,P.jsx)(y,{rows:4,state:d,...h}),(0,P.jsx)(x,{checked:n??!0,label:`I accept the terms`,linkLabel:`Read our T&Cs`,linkPlacement:s??`below`}),(0,P.jsx)(C,{primaryLabel:`Button`,secondaryLabel:l===!1?void 0:`Button`,primaryTone:p})]})}function A({theme:e,inputState:t,compactButtons:n,actionTone:r}){let i=t??`default`,a=E(`you@example.com`);return(0,P.jsxs)(g,{className:`ds-form-doc__card ds-form--newsletter`,style:{...I,maxWidth:338},theme:e,children:[(0,P.jsx)(v,{state:i,...a}),(0,P.jsx)(C,{compact:n??!0,primaryLabel:`Button`,primaryTone:r??`brand`})]})}function j({theme:e,inputState:t,textareaState:n,actionTone:r,showSecondaryAction:i}){let a=t??`default`,o=n??`default`,s=E(`Name`),c=E(`Surname`),l=E(`Email`),u=E(`Message`);return(0,P.jsxs)(g,{className:`ds-form-doc__card`,style:{...I,maxWidth:320},theme:e,children:[(0,P.jsx)(v,{state:a,...s}),(0,P.jsx)(v,{state:a,...c}),(0,P.jsx)(v,{state:a,...l}),(0,P.jsx)(y,{rows:4,state:o,...u}),(0,P.jsx)(C,{primaryLabel:`Button`,secondaryLabel:i===!1?void 0:`Button`,primaryTone:r??`neutral`})]})}function M({theme:e,inputState:t,actionTone:n,showSecondaryAction:r}){let i=t??`default`,a=E(`Email`);return(0,P.jsxs)(g,{className:`ds-form-doc__card`,style:{...I,maxWidth:320},theme:e,children:[(0,P.jsx)(v,{state:i,...a}),(0,P.jsx)(C,{className:`ds-form-actions--forgot`,primaryLabel:`Button`,secondaryLabel:r===!1?void 0:`Button`,primaryTone:n??`neutral`})]})}var N,P,F,I,L,R,z,B;e((()=>{N=t(n(),1),w(),P=r(),F={title:`Components/Form`,component:g,tags:[`autodocs`],args:{theme:`dark`},argTypes:{theme:{control:{type:`radio`},options:[`light`,`dark`]}}},I={maxWidth:440,width:`100%`},L={args:{layout:`shipping`,selectOpen:!1,checkboxChecked:!0,compactButtons:!1,theme:`dark`,inputState:`default`,textareaState:`default`,selectState:`default`,actionTone:`neutral`,linkPlacement:`below`,selectInverted:!0,showDescriptions:!0,showSecondaryAction:!0},argTypes:{layout:{control:{type:`radio`},options:[`login`,`login-link`,`shipping`,`newsletter`,`contact-compact`,`forgot-password`]},selectOpen:{control:`boolean`,if:{arg:`layout`,eq:`shipping`}},checkboxChecked:{control:`boolean`,if:{arg:`layout`,neq:`newsletter`}},compactButtons:{control:`boolean`,if:{arg:`layout`,neq:`shipping`}},inputState:{control:{type:`radio`},options:[`default`,`focus`,`hover`,`error`,`disabled`],if:{arg:`layout`,neq:`forgot-password`}},textareaState:{control:{type:`radio`},options:[`default`,`focus`,`hover`,`error`,`disabled`],if:{arg:`layout`,eq:`contact-compact`}},selectState:{control:{type:`radio`},options:[`default`,`focus`,`hover`,`error`,`disabled`],if:{arg:`layout`,eq:`shipping`}},actionTone:{control:{type:`radio`},options:[`neutral`,`brand`],if:{arg:`layout`,neq:`newsletter`}},linkPlacement:{control:{type:`radio`},options:[`inline`,`below`],if:{arg:`layout`,eq:`shipping`}},selectInverted:{control:`boolean`,if:{arg:`layout`,eq:`shipping`}},showDescriptions:{control:`boolean`,if:{arg:`layout`,eq:`login`}},showSecondaryAction:{control:`boolean`,if:{arg:`layout`,neq:`newsletter`}}},render:({theme:e=`light`,layout:t,selectOpen:n,checkboxChecked:r,compactButtons:i,inputState:a,textareaState:o,selectState:s,actionTone:c,linkPlacement:l,selectInverted:u,showDescriptions:d,showSecondaryAction:f})=>{let p={theme:e,layout:t,selectOpen:n,checkboxChecked:r,compactButtons:i,inputState:a,textareaState:o,selectState:s,actionTone:c,linkPlacement:l,selectInverted:u,showDescriptions:d,showSecondaryAction:f},m=(()=>{switch(t){case`login`:return(0,P.jsx)(D,{...p,theme:e});case`login-link`:return(0,P.jsx)(O,{...p,theme:e});case`shipping`:return(0,P.jsx)(k,{...p,theme:e});case`newsletter`:return(0,P.jsx)(A,{...p,theme:e});case`contact-compact`:return(0,P.jsx)(j,{...p,theme:e});case`forgot-password`:return(0,P.jsx)(M,{...p,theme:e})}})();return(0,P.jsxs)(`div`,{className:`ds-form-doc`,children:[(0,P.jsx)(T,{title:`Form playground`,subtitle:`Switch layouts and states to verify spacing, labels, checkbox behavior, and action styles.`}),m]})}},R={name:`All Forms`,parameters:{controls:{include:[`theme`]}},render:({theme:e=`dark`})=>(0,P.jsxs)(`div`,{className:`ds-form-doc ds-form-doc--all`,children:[(0,P.jsx)(T,{title:`All forms`,subtitle:`Six layouts implemented from Figma with theme toggle (light and dark).`}),(0,P.jsxs)(`div`,{className:`ds-form-doc__grid ds-form-doc__grid--showcase`,children:[(0,P.jsx)(D,{theme:e,selectOpen:!1,checkboxChecked:!0,compactButtons:!0}),(0,P.jsx)(O,{theme:e,selectOpen:!1,checkboxChecked:!1,compactButtons:!1}),(0,P.jsx)(k,{theme:e,selectOpen:!0,checkboxChecked:!0}),(0,P.jsx)(A,{theme:e,selectOpen:!1,checkboxChecked:!1,compactButtons:!1}),(0,P.jsx)(j,{theme:e,selectOpen:!1,checkboxChecked:!1,compactButtons:!1}),(0,P.jsx)(M,{theme:e,selectOpen:!1,checkboxChecked:!1,compactButtons:!1})]})]})},z={name:`Select States`,args:{theme:`dark`,selectOpen:!0,selectInverted:!1},argTypes:{theme:{control:{type:`radio`},options:[`light`,`dark`]},selectOpen:{control:`boolean`},selectInverted:{control:`boolean`,if:{arg:`theme`,eq:`dark`}}},render:({theme:e=`dark`,selectOpen:t=!0,selectInverted:n=!1})=>(0,P.jsxs)(`div`,{className:`ds-form-doc`,children:[(0,P.jsx)(T,{title:`Select states`,subtitle:`Validate default, focus, hover, error, and disabled states in both themes.`}),(0,P.jsx)(`div`,{className:`ds-form-doc__grid ds-form-doc__grid--showcase`,children:[`default`,`focus`,`hover`,`error`,`disabled`].map(r=>(0,P.jsxs)(g,{className:`ds-form-doc__card`,style:{...I,maxWidth:365},theme:e,children:[(0,P.jsx)(T,{title:`State: ${r}`}),(0,P.jsx)(b,{inlineLabel:`Shipping method`,state:r,open:r===`disabled`?!1:t,className:n?`ds-form-select--inverted`:void 0,options:[{value:`standard`,label:`Standard Delivery`,description:`2-3 business days`},{value:`express`,label:`Express Delivery`,description:`Next business day`},{value:`pickup`,label:`Store Pickup`,description:`Ready in 4 hours`}],value:`standard`})]},r))})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'shipping',
    selectOpen: false,
    checkboxChecked: true,
    compactButtons: false,
    theme: 'dark',
    inputState: 'default',
    textareaState: 'default',
    selectState: 'default',
    actionTone: 'neutral',
    linkPlacement: 'below',
    selectInverted: true,
    showDescriptions: true,
    showSecondaryAction: true
  },
  argTypes: {
    layout: {
      control: {
        type: 'radio'
      },
      options: ['login', 'login-link', 'shipping', 'newsletter', 'contact-compact', 'forgot-password']
    },
    selectOpen: {
      control: 'boolean',
      if: {
        arg: 'layout',
        eq: 'shipping'
      }
    },
    checkboxChecked: {
      control: 'boolean',
      if: {
        arg: 'layout',
        neq: 'newsletter'
      }
    },
    compactButtons: {
      control: 'boolean',
      if: {
        arg: 'layout',
        neq: 'shipping'
      }
    },
    inputState: {
      control: {
        type: 'radio'
      },
      options: ['default', 'focus', 'hover', 'error', 'disabled'],
      if: {
        arg: 'layout',
        neq: 'forgot-password'
      }
    },
    textareaState: {
      control: {
        type: 'radio'
      },
      options: ['default', 'focus', 'hover', 'error', 'disabled'],
      if: {
        arg: 'layout',
        eq: 'contact-compact'
      }
    },
    selectState: {
      control: {
        type: 'radio'
      },
      options: ['default', 'focus', 'hover', 'error', 'disabled'],
      if: {
        arg: 'layout',
        eq: 'shipping'
      }
    },
    actionTone: {
      control: {
        type: 'radio'
      },
      options: ['neutral', 'brand'],
      if: {
        arg: 'layout',
        neq: 'newsletter'
      }
    },
    linkPlacement: {
      control: {
        type: 'radio'
      },
      options: ['inline', 'below'],
      if: {
        arg: 'layout',
        eq: 'shipping'
      }
    },
    selectInverted: {
      control: 'boolean',
      if: {
        arg: 'layout',
        eq: 'shipping'
      }
    },
    showDescriptions: {
      control: 'boolean',
      if: {
        arg: 'layout',
        eq: 'login'
      }
    },
    showSecondaryAction: {
      control: 'boolean',
      if: {
        arg: 'layout',
        neq: 'newsletter'
      }
    }
  },
  render: ({
    theme = 'light',
    layout,
    selectOpen,
    checkboxChecked,
    compactButtons,
    inputState,
    textareaState,
    selectState,
    actionTone,
    linkPlacement,
    selectInverted,
    showDescriptions,
    showSecondaryAction
  }) => {
    const demoProps: DemoProps = {
      theme,
      layout,
      selectOpen,
      checkboxChecked,
      compactButtons,
      inputState,
      textareaState,
      selectState,
      actionTone,
      linkPlacement,
      selectInverted,
      showDescriptions,
      showSecondaryAction
    };
    const preview = (() => {
      switch (layout) {
        case 'login':
          return <LoginForm {...demoProps} theme={theme} />;
        case 'login-link':
          return <LoginWithLinkForm {...demoProps} theme={theme} />;
        case 'shipping':
          return <ShippingForm {...demoProps} theme={theme} />;
        case 'newsletter':
          return <NewsletterForm {...demoProps} theme={theme} />;
        case 'contact-compact':
          return <ContactCompactForm {...demoProps} theme={theme} />;
        case 'forgot-password':
          return <ForgotPasswordForm {...demoProps} theme={theme} />;
      }
    })();
    return <div className="ds-form-doc">\r
        <SectionTitle title="Form playground" subtitle="Switch layouts and states to verify spacing, labels, checkbox behavior, and action styles." />\r
        {preview}\r
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'All Forms',
  parameters: {
    controls: {
      include: ['theme']
    }
  },
  render: ({
    theme = 'dark'
  }) => <div className="ds-form-doc ds-form-doc--all">\r
      <SectionTitle title="All forms" subtitle="Six layouts implemented from Figma with theme toggle (light and dark)." />\r
      <div className="ds-form-doc__grid ds-form-doc__grid--showcase">\r
        <LoginForm theme={theme} selectOpen={false} checkboxChecked compactButtons />\r
        <LoginWithLinkForm theme={theme} selectOpen={false} checkboxChecked={false} compactButtons={false} />\r
        <ShippingForm theme={theme} selectOpen checkboxChecked />\r
        <NewsletterForm theme={theme} selectOpen={false} checkboxChecked={false} compactButtons={false} />\r
        <ContactCompactForm theme={theme} selectOpen={false} checkboxChecked={false} compactButtons={false} />\r
        <ForgotPasswordForm theme={theme} selectOpen={false} checkboxChecked={false} compactButtons={false} />\r
      </div>\r
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Select States',
  args: {
    theme: 'dark',
    selectOpen: true,
    selectInverted: false
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio'
      },
      options: ['light', 'dark']
    },
    selectOpen: {
      control: 'boolean'
    },
    selectInverted: {
      control: 'boolean',
      if: {
        arg: 'theme',
        eq: 'dark'
      }
    }
  },
  render: ({
    theme = 'dark',
    selectOpen = true,
    selectInverted = false
  }) => {
    const states: FormControlState[] = ['default', 'focus', 'hover', 'error', 'disabled'];
    return <div className="ds-form-doc">\r
        <SectionTitle title="Select states" subtitle="Validate default, focus, hover, error, and disabled states in both themes." />\r
        <div className="ds-form-doc__grid ds-form-doc__grid--showcase">\r
          {states.map(state => <Form key={state} className="ds-form-doc__card" style={{
          ...formCardStyle,
          maxWidth: 365
        }} theme={theme}>\r
              <SectionTitle title={\`State: \${state}\`} />\r
              <FormSelect inlineLabel="Shipping method" state={state} open={state === 'disabled' ? false : selectOpen} className={selectInverted ? 'ds-form-select--inverted' : undefined} options={[{
            value: 'standard',
            label: 'Standard Delivery',
            description: '2-3 business days'
          }, {
            value: 'express',
            label: 'Express Delivery',
            description: 'Next business day'
          }, {
            value: 'pickup',
            label: 'Store Pickup',
            description: 'Ready in 4 hours'
          }]} value="standard" />\r
            </Form>)}\r
        </div>\r
      </div>;
  }
}`,...z.parameters?.docs?.source}}},B=[`Playground`,`AllForms`,`SelectStates`]}))();export{R as AllForms,L as Playground,z as SelectStates,B as __namedExportsOrder,F as default};