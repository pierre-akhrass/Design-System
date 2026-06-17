import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CqNWPJR6.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i=e((()=>{})),a,o,s,c,l=e((()=>{a=t(n(),1),i(),o=r(),s=()=>(0,o.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 20 20`,width:`20`,height:`20`,children:(0,o.jsx)(`path`,{d:`M5.5 7.5L10 12l4.5-4.5`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`})}),c=({theme:e=`light`,allowMultiple:t=!1,defaultOpenIds:n,items:r=[{id:`closed`,title:`Title for accordion row`,isOpen:!1},{id:`open`,title:`Title for accordion row`,isOpen:!0,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tellus eget sapien ultricies, ac dapibus arcu fermentum. Morbi massa metus, iaculis vitae mi eu, bibendum posuere ante. Aliquam sed imperdiet dui, nec convallis nunc. Quisque tortor turpis, consectetur ac elit rutrum, bibendum scelerisque massa.`}],icon:i,className:c,...l})=>{let[u,d]=(0,a.useState)((0,a.useMemo)(()=>n?.length?n:r.filter(e=>e.isOpen).map(e=>e.id),[n,r])),f=[`ds-accordion`,`ds-accordion--${e}`,c].filter(Boolean).join(` `),p=e=>{d(n=>n.includes(e)?n.filter(t=>t!==e):t?[...n,e]:[e])};return(0,o.jsx)(`div`,{className:f,...l,children:r.map(e=>{let t=u.includes(e.id);return(0,o.jsxs)(`article`,{className:[`ds-accordion__item`,t?`is-open`:`is-closed`].join(` `),children:[(0,o.jsxs)(`button`,{className:`ds-accordion__header`,type:`button`,onClick:()=>p(e.id),children:[(0,o.jsx)(`span`,{className:`ds-accordion__title`,children:e.title}),(0,o.jsx)(`span`,{className:`ds-accordion__icon`,children:i??(0,o.jsx)(s,{})})]}),t&&e.content?(0,o.jsx)(`p`,{className:`ds-accordion__content`,children:e.content}):null]},e.id)})})},c.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'light'`,computed:!1}},items:{required:!1,tsType:{name:`Array`,elements:[{name:`AccordionItemData`}],raw:`AccordionItemData[]`},description:``,defaultValue:{value:`[\r
  { id: 'closed', title: 'Title for accordion row', isOpen: false },\r
  {\r
    id: 'open',\r
    title: 'Title for accordion row',\r
    isOpen: true,\r
    content:\r
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tellus eget sapien ultricies, ac dapibus arcu fermentum. Morbi massa metus, iaculis vitae mi eu, bibendum posuere ante. Aliquam sed imperdiet dui, nec convallis nunc. Quisque tortor turpis, consectetur ac elit rutrum, bibendum scelerisque massa.',\r
  },\r
]`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:``},allowMultiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},defaultOpenIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``}},composes:[`HTMLAttributes`]}})),u=e((()=>{})),d,f,p,m,h,g;e((()=>{l(),u(),d=r(),f={title:`Components/Accordion (pierre-akhrass)`,component:c,tags:[`autodocs`],args:{theme:`light`,allowMultiple:!1},argTypes:{theme:{control:`inline-radio`,options:[`light`,`dark`]},allowMultiple:{control:`boolean`}},parameters:{docs:{description:{component:`Expandable content sections with single or multiple open behavior for dense information layouts.`}}}},p=({theme:e,allowMultiple:t})=>(0,d.jsxs)(`div`,{className:`ds-accordion-doc ds-accordion-doc--${e}`,children:[(0,d.jsxs)(`div`,{className:`ds-accordion-doc__intro`,children:[(0,d.jsx)(`h1`,{className:`ds-accordion-doc__title`,children:e===`dark`?`Accordion Item: Dark`:`Accordion Item`}),(0,d.jsx)(`p`,{className:`ds-accordion-doc__description`,children:`A vertically stacked interactive component that allows users to expand and collapse sections of content. Accordions help organize large amounts of information into manageable groups while reducing visual clutter and improving scanability.`})]}),(0,d.jsx)(`div`,{className:`ds-accordion-doc__divider`}),(0,d.jsxs)(`div`,{className:`ds-accordion-doc__rows`,children:[(0,d.jsxs)(`div`,{className:`ds-accordion-doc__row`,children:[(0,d.jsx)(`span`,{className:`ds-accordion-doc__chip`,children:`Closed`}),(0,d.jsx)(c,{theme:e,allowMultiple:t,items:[{id:`closed`,title:`Title for accordion row`,isOpen:!1}],className:`ds-accordion-doc__component`})]}),(0,d.jsxs)(`div`,{className:`ds-accordion-doc__row`,children:[(0,d.jsx)(`span`,{className:`ds-accordion-doc__chip`,children:`Open`}),(0,d.jsx)(c,{theme:e,allowMultiple:t,items:[{id:`open`,title:`Title for accordion row`,isOpen:!0,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tellus eget sapien ultricies, ac dapibus arcu fermentum. Morbi massa metus, iaculis vitae mi eu, bibendum posuere ante. Aliquam sed imperdiet dui, nec convallis nunc. Quisque tortor turpis, consectetur ac elit rutrum, bibendum scelerisque massa.`}],className:`ds-accordion-doc__component`})]})]})]}),m={},h={parameters:{backgrounds:{values:[{name:`light`,value:`#f5f7fa`},{name:`dark`,value:`#0a111a`}],default:`light`}},render:e=>(0,d.jsxs)(`section`,{className:`ds-accordion-figma ds-accordion-figma--${e.theme}`,children:[(0,d.jsxs)(`header`,{className:`ds-accordion-figma__header`,children:[(0,d.jsxs)(`span`,{children:[(0,d.jsx)(`span`,{className:`ds-accordion-figma__header-muted`,children:`Component / `}),`Accordion`]}),(0,d.jsx)(`span`,{children:`Design System`})]}),(0,d.jsx)(`div`,{className:`ds-accordion-figma__content`,children:(0,d.jsx)(p,{theme:e.theme??`light`,allowMultiple:!!e.allowMultiple})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      values: [{
        name: 'light',
        value: '#f5f7fa'
      }, {
        name: 'dark',
        value: '#0a111a'
      }],
      default: 'light'
    }
  },
  render: args => <section className={\`ds-accordion-figma ds-accordion-figma--\${args.theme}\`}>\r
      <header className="ds-accordion-figma__header">\r
        <span>\r
          <span className="ds-accordion-figma__header-muted">Component / </span>Accordion\r
        </span>\r
        <span>Design System</span>\r
      </header>\r
\r
      <div className="ds-accordion-figma__content">\r
        <AccordionDocumentation theme={args.theme ?? 'light'} allowMultiple={Boolean(args.allowMultiple)} />\r
      </div>\r
    </section>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Documentation`]}))();export{h as Documentation,m as Playground,g as __namedExportsOrder,f as default};