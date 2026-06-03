import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n=e((()=>{})),r,i,a=e((()=>{n(),r=t(),i=({variant:e=`filled`,state:t=`default`,iconOnly:n=!1,icon:i,children:a,className:o,type:s=`button`,disabled:c,...l})=>{let u=t===`disabled`||!!c;return(0,r.jsxs)(`button`,{className:[`ds-button`,`ds-button--${e}`,`ds-button--${t}`,n?`ds-button--icon-only`:null,o].filter(Boolean).join(` `),disabled:u,type:s,...l,children:[i&&(0,r.jsx)(`span`,{className:`ds-button__icon`,children:i}),!n&&a&&(0,r.jsx)(`span`,{className:`ds-button__label`,children:a})]})},i.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{state:{required:!1,tsType:{name:`union`,raw:`'default' | 'focus' | 'hover' | 'pressed' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'focus'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'pressed'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},iconOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'filled' | 'outlined' | 'plain'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'plain'`}]},description:``,defaultValue:{value:`'filled'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}},composes:[`ButtonHTMLAttributes`]}})),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{a(),o=t(),s=()=>(0,o.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`16`,height:`16`,children:(0,o.jsx)(`path`,{d:`M12 2.5l2.9 5.88 6.49.94-4.69 4.58 1.11 6.47L12 17.34l-5.81 3.03 1.11-6.47L2.61 9.32l6.49-.94L12 2.5z`,fill:`currentColor`})}),c={title:`Components/Button`,component:i,args:{children:`Button`,variant:`filled`,state:`default`,iconOnly:!1},argTypes:{variant:{control:`inline-radio`,options:[`filled`,`outlined`,`plain`]},state:{control:`inline-radio`,options:[`default`,`focus`,`hover`,`pressed`,`disabled`]},iconOnly:{control:`boolean`}}},l=[`filled`,`outlined`,`plain`],u=[`default`,`focus`,`hover`,`pressed`,`disabled`],d={display:`grid`,gap:`1rem`,maxWidth:`960px`,width:`100%`},f={display:`grid`,gridTemplateColumns:`120px repeat(5, minmax(120px, 1fr))`,gap:`0.75rem`,alignItems:`center`},p={display:`grid`,gridTemplateColumns:`120px repeat(5, minmax(120px, 1fr))`,gap:`0.75rem`,alignItems:`center`},m={fontFamily:`'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace`,fontSize:`0.875rem`,color:`#2f3a4a`},h={...m,justifySelf:`start`,background:`#2f3f55`,borderRadius:`8px`,color:`#f5f8fc`,padding:`0.25rem 0.625rem`},g={...m,fontWeight:700,letterSpacing:`0.02em`,textTransform:`uppercase`},_={args:{children:`Filled Default`,variant:`filled`,state:`default`}},v={args:{children:`Filled Focus`,variant:`filled`,state:`focus`}},y={args:{children:`Filled Hover`,variant:`filled`,state:`hover`}},b={args:{children:`Filled Pressed`,variant:`filled`,state:`pressed`}},x={args:{children:`Filled Disabled`,variant:`filled`,state:`disabled`}},S={args:{children:`Outlined Default`,variant:`outlined`,state:`default`}},C={args:{children:`Outlined Focus`,variant:`outlined`,state:`focus`}},w={args:{children:`Outlined Hover`,variant:`outlined`,state:`hover`}},T={args:{children:`Outlined Pressed`,variant:`outlined`,state:`pressed`}},E={args:{children:`Outlined Disabled`,variant:`outlined`,state:`disabled`}},D={args:{children:`Plain Default`,variant:`plain`,state:`default`}},O={args:{children:`Plain Focus`,variant:`plain`,state:`focus`}},k={args:{children:`Plain Hover`,variant:`plain`,state:`hover`}},A={args:{children:`Plain Pressed`,variant:`plain`,state:`pressed`}},j={args:{children:`Plain Disabled`,variant:`plain`,state:`disabled`}},M={args:{variant:`filled`,state:`default`,iconOnly:!0,icon:(0,o.jsx)(s,{})}},N={args:{variant:`outlined`,state:`default`,iconOnly:!0,icon:(0,o.jsx)(s,{})}},P={args:{variant:`plain`,state:`default`,iconOnly:!0,icon:(0,o.jsx)(s,{})}},F={parameters:{controls:{disable:!0}},render:()=>(0,o.jsxs)(`div`,{style:d,children:[(0,o.jsx)(`div`,{style:g,children:`Text Buttons`}),(0,o.jsxs)(`div`,{style:f,children:[(0,o.jsx)(`div`,{}),u.map(e=>(0,o.jsx)(`div`,{style:h,children:e[0].toUpperCase()+e.slice(1)},`header-text-${e}`))]}),l.map(e=>(0,o.jsxs)(`div`,{style:p,children:[(0,o.jsx)(`div`,{style:m,children:e[0].toUpperCase()+e.slice(1)}),u.map(t=>(0,o.jsx)(i,{variant:e,state:t,children:`Button`},`text-${e}-${t}`))]},`text-row-${e}`)),(0,o.jsx)(`div`,{style:g,children:`Icon Only`}),(0,o.jsxs)(`div`,{style:f,children:[(0,o.jsx)(`div`,{}),u.map(e=>(0,o.jsx)(`div`,{style:h,children:e[0].toUpperCase()+e.slice(1)},`header-icon-${e}`))]}),l.map(e=>(0,o.jsxs)(`div`,{style:p,children:[(0,o.jsx)(`div`,{style:m,children:e[0].toUpperCase()+e.slice(1)}),u.map(t=>(0,o.jsx)(i,{variant:e,state:t,iconOnly:!0,icon:(0,o.jsx)(s,{}),"aria-label":`${e} ${t} icon button`},`icon-${e}-${t}`))]},`icon-row-${e}`))]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Default',
    variant: 'filled',
    state: 'default'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Focus',
    variant: 'filled',
    state: 'focus'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Hover',
    variant: 'filled',
    state: 'hover'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Pressed',
    variant: 'filled',
    state: 'pressed'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Disabled',
    variant: 'filled',
    state: 'disabled'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Default',
    variant: 'outlined',
    state: 'default'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Focus',
    variant: 'outlined',
    state: 'focus'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Hover',
    variant: 'outlined',
    state: 'hover'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Pressed',
    variant: 'outlined',
    state: 'pressed'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Disabled',
    variant: 'outlined',
    state: 'disabled'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Default',
    variant: 'plain',
    state: 'default'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Focus',
    variant: 'plain',
    state: 'focus'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Hover',
    variant: 'plain',
    state: 'hover'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Pressed',
    variant: 'plain',
    state: 'pressed'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Disabled',
    variant: 'plain',
    state: 'disabled'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    state: 'default',
    iconOnly: true,
    icon: <StarIcon />
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    state: 'default',
    iconOnly: true,
    icon: <StarIcon />
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'plain',
    state: 'default',
    iconOnly: true,
    icon: <StarIcon />
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`FilledDefault`,`FilledFocus`,`FilledHover`,`FilledPressed`,`FilledDisabled`,`OutlinedDefault`,`OutlinedFocus`,`OutlinedHover`,`OutlinedPressed`,`OutlinedDisabled`,`PlainDefault`,`PlainFocus`,`PlainHover`,`PlainPressed`,`PlainDisabled`,`IconOnlyFilled`,`IconOnlyOutlined`,`IconOnlyPlain`,`StateMatrix`]}))();export{_ as FilledDefault,x as FilledDisabled,v as FilledFocus,y as FilledHover,b as FilledPressed,M as IconOnlyFilled,N as IconOnlyOutlined,P as IconOnlyPlain,S as OutlinedDefault,E as OutlinedDisabled,C as OutlinedFocus,w as OutlinedHover,T as OutlinedPressed,D as PlainDefault,j as PlainDisabled,O as PlainFocus,k as PlainHover,A as PlainPressed,F as StateMatrix,I as __namedExportsOrder,c as default};