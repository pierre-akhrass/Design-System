import{i as e,r as t}from"./preload-helper-xPQekRTU.js";var n=e((()=>{})),r=t((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),i=t(((e,t)=>{t.exports=r()})),a,o,s=e((()=>{n(),a=i(),o=({variant:e=`filled`,state:t=`default`,iconOnly:n=!1,icon:r,children:i,className:o,type:s=`button`,disabled:c,...l})=>{let u=t===`disabled`||!!c;return(0,a.jsxs)(`button`,{className:[`ds-button`,`ds-button--${e}`,`ds-button--${t}`,n?`ds-button--icon-only`:null,o].filter(Boolean).join(` `),disabled:u,type:s,...l,children:[r&&(0,a.jsx)(`span`,{className:`ds-button__icon`,children:r}),!n&&i&&(0,a.jsx)(`span`,{className:`ds-button__label`,children:i})]})},o.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{state:{required:!1,tsType:{name:`union`,raw:`'default' | 'focus' | 'hover' | 'pressed' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'pressed'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},iconOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'filled' | 'outlined' | 'plain'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'plain'`}]},description:``,defaultValue:{value:`'filled'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}},composes:[`ButtonHTMLAttributes`]}})),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{s(),c=i(),l=()=>(0,c.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`16`,height:`16`,children:(0,c.jsx)(`path`,{d:`M12 2.5l2.9 5.88 6.49.94-4.69 4.58 1.11 6.47L12 17.34l-5.81 3.03 1.11-6.47L2.61 9.32l6.49-.94L12 2.5z`,fill:`currentColor`})}),u={title:`Components/Button`,component:o,args:{children:`Button`,variant:`filled`,state:`default`,iconOnly:!1},argTypes:{variant:{control:`inline-radio`,options:[`filled`,`outlined`,`plain`]},state:{control:`inline-radio`,options:[`default`,`focus`,`hover`,`pressed`,`disabled`]},iconOnly:{control:`boolean`}}},d=[`filled`,`outlined`,`plain`],f=[`default`,`focus`,`hover`,`pressed`,`disabled`],p={display:`grid`,gap:`1rem`,maxWidth:`960px`,width:`100%`},m={display:`grid`,gridTemplateColumns:`120px repeat(5, minmax(120px, 1fr))`,gap:`0.75rem`,alignItems:`center`},h={display:`grid`,gridTemplateColumns:`120px repeat(5, minmax(120px, 1fr))`,gap:`0.75rem`,alignItems:`center`},g={fontFamily:`'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace`,fontSize:`0.875rem`,color:`#2f3a4a`},_={...g,justifySelf:`start`,background:`#2f3f55`,borderRadius:`8px`,color:`#f5f8fc`,padding:`0.25rem 0.625rem`},v={...g,fontWeight:700,letterSpacing:`0.02em`,textTransform:`uppercase`},y={args:{children:`Filled Default`,variant:`filled`,state:`default`}},b={args:{children:`Filled Focus`,variant:`filled`,state:`focus`}},x={args:{children:`Filled Hover`,variant:`filled`,state:`hover`}},S={args:{children:`Filled Pressed`,variant:`filled`,state:`pressed`}},C={args:{children:`Filled Disabled`,variant:`filled`,state:`disabled`}},w={args:{children:`Outlined Default`,variant:`outlined`,state:`default`}},T={args:{children:`Outlined Focus`,variant:`outlined`,state:`focus`}},E={args:{children:`Outlined Hover`,variant:`outlined`,state:`hover`}},D={args:{children:`Outlined Pressed`,variant:`outlined`,state:`pressed`}},O={args:{children:`Outlined Disabled`,variant:`outlined`,state:`disabled`}},k={args:{children:`Plain Default`,variant:`plain`,state:`default`}},A={args:{children:`Plain Focus`,variant:`plain`,state:`focus`}},j={args:{children:`Plain Hover`,variant:`plain`,state:`hover`}},M={args:{children:`Plain Pressed`,variant:`plain`,state:`pressed`}},N={args:{children:`Plain Disabled`,variant:`plain`,state:`disabled`}},P={args:{variant:`filled`,state:`default`,iconOnly:!0,icon:(0,c.jsx)(l,{})}},F={args:{variant:`outlined`,state:`default`,iconOnly:!0,icon:(0,c.jsx)(l,{})}},I={args:{variant:`plain`,state:`default`,iconOnly:!0,icon:(0,c.jsx)(l,{})}},L={parameters:{controls:{disable:!0}},render:()=>(0,c.jsxs)(`div`,{style:p,children:[(0,c.jsx)(`div`,{style:v,children:`Text Buttons`}),(0,c.jsxs)(`div`,{style:m,children:[(0,c.jsx)(`div`,{}),f.map(e=>(0,c.jsx)(`div`,{style:_,children:e[0].toUpperCase()+e.slice(1)},`header-text-${e}`))]}),d.map(e=>(0,c.jsxs)(`div`,{style:h,children:[(0,c.jsx)(`div`,{style:g,children:e[0].toUpperCase()+e.slice(1)}),f.map(t=>(0,c.jsx)(o,{variant:e,state:t,children:`Button`},`text-${e}-${t}`))]},`text-row-${e}`)),(0,c.jsx)(`div`,{style:v,children:`Icon Only`}),(0,c.jsxs)(`div`,{style:m,children:[(0,c.jsx)(`div`,{}),f.map(e=>(0,c.jsx)(`div`,{style:_,children:e[0].toUpperCase()+e.slice(1)},`header-icon-${e}`))]}),d.map(e=>(0,c.jsxs)(`div`,{style:h,children:[(0,c.jsx)(`div`,{style:g,children:e[0].toUpperCase()+e.slice(1)}),f.map(t=>(0,c.jsx)(o,{variant:e,state:t,iconOnly:!0,icon:(0,c.jsx)(l,{}),"aria-label":`${e} ${t} icon button`},`icon-${e}-${t}`))]},`icon-row-${e}`))]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Default',
    variant: 'filled',
    state: 'default'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Focus',
    variant: 'filled',
    state: 'focus'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Hover',
    variant: 'filled',
    state: 'hover'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Pressed',
    variant: 'filled',
    state: 'pressed'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Disabled',
    variant: 'filled',
    state: 'disabled'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Default',
    variant: 'outlined',
    state: 'default'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Focus',
    variant: 'outlined',
    state: 'focus'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Hover',
    variant: 'outlined',
    state: 'hover'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Pressed',
    variant: 'outlined',
    state: 'pressed'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Disabled',
    variant: 'outlined',
    state: 'disabled'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Default',
    variant: 'plain',
    state: 'default'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Focus',
    variant: 'plain',
    state: 'focus'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Hover',
    variant: 'plain',
    state: 'hover'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Pressed',
    variant: 'plain',
    state: 'pressed'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Disabled',
    variant: 'plain',
    state: 'disabled'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    state: 'default',
    iconOnly: true,
    icon: <StarIcon />
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    state: 'default',
    iconOnly: true,
    icon: <StarIcon />
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'plain',
    state: 'default',
    iconOnly: true,
    icon: <StarIcon />
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return <div style={matrixWrapperStyle}>\r
        <div style={sectionTitleStyle}>Text Buttons</div>\r
\r
        <div style={matrixHeaderRowStyle}>\r
          <div />\r
          {matrixStates.map(state => <div key={\`header-text-\${state}\`} style={stateChipStyle}>\r
              {state[0].toUpperCase() + state.slice(1)}\r
            </div>)}\r
        </div>\r
\r
        {matrixVariants.map(variant => <div key={\`text-row-\${variant}\`} style={matrixRowStyle}>\r
            <div style={matrixLabelStyle}>{variant[0].toUpperCase() + variant.slice(1)}</div>\r
            {matrixStates.map(state => <Button key={\`text-\${variant}-\${state}\`} variant={variant} state={state}>\r
                Button\r
              </Button>)}\r
          </div>)}\r
\r
        <div style={sectionTitleStyle}>Icon Only</div>\r
\r
        <div style={matrixHeaderRowStyle}>\r
          <div />\r
          {matrixStates.map(state => <div key={\`header-icon-\${state}\`} style={stateChipStyle}>\r
              {state[0].toUpperCase() + state.slice(1)}\r
            </div>)}\r
        </div>\r
\r
        {matrixVariants.map(variant => <div key={\`icon-row-\${variant}\`} style={matrixRowStyle}>\r
            <div style={matrixLabelStyle}>{variant[0].toUpperCase() + variant.slice(1)}</div>\r
            {matrixStates.map(state => <Button key={\`icon-\${variant}-\${state}\`} variant={variant} state={state} iconOnly={true} icon={<StarIcon />} aria-label={\`\${variant} \${state} icon button\`} />)}\r
          </div>)}\r
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R=[`FilledDefault`,`FilledFocus`,`FilledHover`,`FilledPressed`,`FilledDisabled`,`OutlinedDefault`,`OutlinedFocus`,`OutlinedHover`,`OutlinedPressed`,`OutlinedDisabled`,`PlainDefault`,`PlainFocus`,`PlainHover`,`PlainPressed`,`PlainDisabled`,`IconOnlyFilled`,`IconOnlyOutlined`,`IconOnlyPlain`,`StateMatrix`]}))();export{y as FilledDefault,C as FilledDisabled,b as FilledFocus,x as FilledHover,S as FilledPressed,P as IconOnlyFilled,F as IconOnlyOutlined,I as IconOnlyPlain,w as OutlinedDefault,O as OutlinedDisabled,T as OutlinedFocus,E as OutlinedHover,D as OutlinedPressed,k as PlainDefault,N as PlainDisabled,A as PlainFocus,j as PlainHover,M as PlainPressed,L as StateMatrix,R as __namedExportsOrder,u as default};