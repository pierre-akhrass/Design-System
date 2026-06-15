import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Brs2brnf.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i=e((()=>{})),a,o,s,c,l,u,d=e((()=>{a=t(n(),1),i(),o=r(),s=[{id:`1`,label:1},{id:`2`,label:2},{id:`3`,label:3},{id:`4`,label:4},{id:`5`,label:5},{id:`ellipsis`,label:`...`,kind:`truncation`},{id:`10`,label:10}],c=()=>(0,o.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 20 20`,width:`20`,height:`20`,children:(0,o.jsx)(`path`,{d:`M12.5 4.5L7 10l5.5 5.5`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`})}),l=()=>(0,o.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 20 20`,width:`20`,height:`20`,children:(0,o.jsx)(`path`,{d:`M7.5 4.5L13 10l-5.5 5.5`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`})}),u=({theme:e=`light`,entries:t=s,activeValue:n,controlMode:r=`icon-only`,previousLabel:i=`Previous`,nextLabel:u=`Next`,showControls:d=!0,canGoPrevious:f=!0,canGoNext:p=!0,onPrevious:m,onNext:h,onPageChange:g,className:_,...v})=>{let[y,b]=(0,a.useState)((0,a.useMemo)(()=>t.find(e=>e.kind!==`truncation`)?.label,[t])),x=n??y,S=[`ds-pagination`,`ds-pagination--${e}`,_].filter(Boolean).join(` `),C=e=>{e.kind!==`truncation`&&(n===void 0&&b(e.label),g?.(e.label))},w=r===`icon-only`;return(0,o.jsxs)(`nav`,{className:S,"aria-label":`Pagination`,...v,children:[d&&(0,o.jsxs)(`button`,{type:`button`,className:[`ds-pagination__control`,`ds-pagination__control--previous`,w?`is-icon-only`:`is-label`].join(` `),onClick:m,disabled:!f,"aria-label":i,children:[(0,o.jsx)(`span`,{className:`ds-pagination__icon`,children:(0,o.jsx)(c,{})}),!w&&(0,o.jsx)(`span`,{className:`ds-pagination__control-label`,children:i})]}),(0,o.jsx)(`ul`,{className:`ds-pagination__list`,children:t.map(e=>{let t=e.kind===`truncation`,n=!t&&e.label===x;return(0,o.jsx)(`li`,{className:`ds-pagination__item`,children:(0,o.jsx)(`button`,{type:`button`,className:[`ds-pagination__page`,t?`is-truncation`:null,n?`is-active`:null].filter(Boolean).join(` `),onClick:()=>C(e),disabled:t,"aria-current":n?`page`:void 0,children:e.label})},e.id)})}),d&&(0,o.jsxs)(`button`,{type:`button`,className:[`ds-pagination__control`,`ds-pagination__control--next`,w?`is-icon-only`:`is-label`].join(` `),onClick:h,disabled:!p,"aria-label":u,children:[!w&&(0,o.jsx)(`span`,{className:`ds-pagination__control-label`,children:u}),(0,o.jsx)(`span`,{className:`ds-pagination__icon`,children:(0,o.jsx)(l,{})})]})]})},u.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'light'`,computed:!1}},entries:{required:!1,tsType:{name:`Array`,elements:[{name:`PaginationEntry`}],raw:`PaginationEntry[]`},description:``,defaultValue:{value:`[
  { id: '1', label: 1 },
  { id: '2', label: 2 },
  { id: '3', label: 3 },
  { id: '4', label: 4 },
  { id: '5', label: 5 },
  { id: 'ellipsis', label: '...', kind: 'truncation' },
  { id: '10', label: 10 },
]`,computed:!1}},activeValue:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},controlMode:{required:!1,tsType:{name:`union`,raw:`'icon-only' | 'label'`,elements:[{name:`literal`,value:`'icon-only'`},{name:`literal`,value:`'label'`}]},description:``,defaultValue:{value:`'icon-only'`,computed:!1}},previousLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Previous'`,computed:!1}},nextLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Next'`,computed:!1}},showControls:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},canGoPrevious:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},canGoNext:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},onPrevious:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNext:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onPageChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: PaginationValue) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`value`}],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]}})),f=e((()=>{})),p,m,h,g,_,v,y,b,x,S;e((()=>{d(),f(),p=r(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Pagination (pierre-akhrass)`,component:u,tags:[`autodocs`,`ai-generated`],args:{theme:`light`,controlMode:`icon-only`,showControls:!0,canGoPrevious:!0,canGoNext:!0},argTypes:{theme:{control:`inline-radio`,options:[`light`,`dark`]},controlMode:{control:`inline-radio`,options:[`icon-only`,`label`]},showControls:{control:`boolean`},canGoPrevious:{control:`boolean`},canGoNext:{control:`boolean`}},parameters:{docs:{description:{component:`Paged navigation controls with previous/next actions and numbered page selection.`}}}},g=[{id:`1`,label:1},{id:`2`,label:2},{id:`3`,label:3},{id:`4`,label:4},{id:`5`,label:5},{id:`ellipsis`,label:`...`,kind:`truncation`},{id:`10`,label:10}],_=`ABCDEFGHIJKLMN`.split(``).map(e=>({id:e,label:e})),v={args:{entries:g,activeValue:1}},y={args:{entries:_,activeValue:`A`,showControls:!1}},b={parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:`ds-pagination-doc`,children:[(0,p.jsx)(u,{entries:g,activeValue:1,controlMode:`icon-only`,theme:`light`,"aria-label":`Pagination icon-only`}),(0,p.jsx)(u,{entries:g,activeValue:1,controlMode:`label`,theme:`light`,"aria-label":`Pagination labeled controls`}),(0,p.jsx)(u,{entries:_,activeValue:`A`,showControls:!1,theme:`light`,"aria-label":`Pagination letters`}),(0,p.jsx)(`div`,{className:`ds-pagination-doc__dark-row`,children:(0,p.jsx)(u,{entries:g,activeValue:1,controlMode:`icon-only`,theme:`dark`,"aria-label":`Pagination dark`})})]})},x={args:{entries:g,activeValue:1,controlMode:`icon-only`,theme:`light`},play:async({canvas:e})=>{let t=e.getByRole(`button`,{current:`page`});await m(getComputedStyle(t).color).toBe(`rgb(41, 41, 41)`)}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    entries: numericEntries,
    activeValue: 1
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    entries: letterEntries,
    activeValue: 'A',
    showControls: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="ds-pagination-doc">
      <Pagination entries={numericEntries} activeValue={1} controlMode="icon-only" theme="light" aria-label="Pagination icon-only" />
      <Pagination entries={numericEntries} activeValue={1} controlMode="label" theme="light" aria-label="Pagination labeled controls" />
      <Pagination entries={letterEntries} activeValue="A" showControls={false} theme="light" aria-label="Pagination letters" />
      <div className="ds-pagination-doc__dark-row">
        <Pagination entries={numericEntries} activeValue={1} controlMode="icon-only" theme="dark" aria-label="Pagination dark" />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    entries: numericEntries,
    activeValue: 1,
    controlMode: 'icon-only',
    theme: 'light'
  },
  play: async ({
    canvas
  }) => {
    const active = canvas.getByRole('button', {
      current: 'page'
    });
    await expect(getComputedStyle(active).color).toBe('rgb(41, 41, 41)');
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Letters`,`Documentation`,`CssCheck`]}))();export{x as CssCheck,b as Documentation,y as Letters,v as Playground,S as __namedExportsOrder,h as default};