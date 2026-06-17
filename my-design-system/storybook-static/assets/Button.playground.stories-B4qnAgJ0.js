import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Button-BNQrBnNs.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{n(),i=t(),a=()=>(0,i.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`16`,height:`16`,children:(0,i.jsx)(`path`,{d:`M12 2.5l2.9 5.88 6.49.94-4.69 4.58 1.11 6.47L12 17.34l-5.81 3.03 1.11-6.47L2.61 9.32l6.49-.94L12 2.5z`,fill:`currentColor`})}),o={title:`Components/Button/Playground`,component:r,args:{children:`Button`,variant:`filled`,state:`default`,iconOnly:!1},argTypes:{variant:{control:`inline-radio`,options:[`filled`,`outlined`,`plain`]},state:{control:`inline-radio`,options:[`default`,`focus`,`hover`,`pressed`,`disabled`]},iconOnly:{control:`boolean`}}},s=[`filled`,`outlined`,`plain`],c=[`default`,`focus`,`hover`,`pressed`,`disabled`],l={display:`grid`,gap:`1rem`,maxWidth:`960px`,width:`100%`},u={display:`grid`,gridTemplateColumns:`120px repeat(5, minmax(120px, 1fr))`,gap:`0.75rem`,alignItems:`center`},d={display:`grid`,gridTemplateColumns:`120px repeat(5, minmax(120px, 1fr))`,gap:`0.75rem`,alignItems:`center`},f={fontFamily:`'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace`,fontSize:`0.875rem`,color:`#2f3a4a`},p={...f,justifySelf:`start`,background:`#2f3f55`,borderRadius:`8px`,color:`#f5f8fc`,padding:`0.25rem 0.625rem`},m={...f,fontWeight:700,letterSpacing:`0.02em`,textTransform:`uppercase`},h={args:{children:`Filled Default`,variant:`filled`,state:`default`}},g={args:{children:`Filled Focus`,variant:`filled`,state:`focus`}},_={args:{children:`Filled Hover`,variant:`filled`,state:`hover`}},v={args:{children:`Filled Pressed`,variant:`filled`,state:`pressed`}},y={args:{children:`Filled Disabled`,variant:`filled`,state:`disabled`}},b={args:{children:`Outlined Default`,variant:`outlined`,state:`default`}},x={args:{children:`Outlined Focus`,variant:`outlined`,state:`focus`}},S={args:{children:`Outlined Hover`,variant:`outlined`,state:`hover`}},C={args:{children:`Outlined Pressed`,variant:`outlined`,state:`pressed`}},w={args:{children:`Outlined Disabled`,variant:`outlined`,state:`disabled`}},T={args:{children:`Plain Default`,variant:`plain`,state:`default`}},E={args:{children:`Plain Focus`,variant:`plain`,state:`focus`}},D={args:{children:`Plain Hover`,variant:`plain`,state:`hover`}},O={args:{children:`Plain Pressed`,variant:`plain`,state:`pressed`}},k={args:{children:`Plain Disabled`,variant:`plain`,state:`disabled`}},A={args:{variant:`filled`,state:`default`,iconOnly:!0,icon:(0,i.jsx)(a,{})}},j={args:{variant:`outlined`,state:`default`,iconOnly:!0,icon:(0,i.jsx)(a,{})}},M={args:{variant:`plain`,state:`default`,iconOnly:!0,icon:(0,i.jsx)(a,{})}},N={parameters:{controls:{disable:!0}},render:()=>(0,i.jsxs)(`div`,{style:l,children:[(0,i.jsx)(`div`,{style:m,children:`Text Buttons`}),(0,i.jsxs)(`div`,{style:u,children:[(0,i.jsx)(`div`,{}),c.map(e=>(0,i.jsx)(`div`,{style:p,children:e[0].toUpperCase()+e.slice(1)},`header-text-${e}`))]}),s.map(e=>(0,i.jsxs)(`div`,{style:d,children:[(0,i.jsx)(`div`,{style:f,children:e[0].toUpperCase()+e.slice(1)}),c.map(t=>(0,i.jsx)(r,{variant:e,state:t,children:`Button`},`text-${e}-${t}`))]},`text-row-${e}`)),(0,i.jsx)(`div`,{style:m,children:`Icon Only`}),(0,i.jsxs)(`div`,{style:u,children:[(0,i.jsx)(`div`,{}),c.map(e=>(0,i.jsx)(`div`,{style:p,children:e[0].toUpperCase()+e.slice(1)},`header-icon-${e}`))]}),s.map(e=>(0,i.jsxs)(`div`,{style:d,children:[(0,i.jsx)(`div`,{style:f,children:e[0].toUpperCase()+e.slice(1)}),c.map(t=>(0,i.jsx)(r,{variant:e,state:t,iconOnly:!0,icon:(0,i.jsx)(a,{}),"aria-label":`${e} ${t} icon button`},`icon-${e}-${t}`))]},`icon-row-${e}`))]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Default',
    variant: 'filled',
    state: 'default'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Focus',
    variant: 'filled',
    state: 'focus'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Hover',
    variant: 'filled',
    state: 'hover'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Pressed',
    variant: 'filled',
    state: 'pressed'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled Disabled',
    variant: 'filled',
    state: 'disabled'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Default',
    variant: 'outlined',
    state: 'default'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Focus',
    variant: 'outlined',
    state: 'focus'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Hover',
    variant: 'outlined',
    state: 'hover'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Pressed',
    variant: 'outlined',
    state: 'pressed'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Disabled',
    variant: 'outlined',
    state: 'disabled'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Default',
    variant: 'plain',
    state: 'default'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Focus',
    variant: 'plain',
    state: 'focus'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Hover',
    variant: 'plain',
    state: 'hover'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Pressed',
    variant: 'plain',
    state: 'pressed'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Plain Disabled',
    variant: 'plain',
    state: 'disabled'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    state: 'default',
    iconOnly: true,
    icon: <StarIcon />
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    state: 'default',
    iconOnly: true,
    icon: <StarIcon />
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'plain',
    state: 'default',
    iconOnly: true,
    icon: <StarIcon />
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`FilledDefault`,`FilledFocus`,`FilledHover`,`FilledPressed`,`FilledDisabled`,`OutlinedDefault`,`OutlinedFocus`,`OutlinedHover`,`OutlinedPressed`,`OutlinedDisabled`,`PlainDefault`,`PlainFocus`,`PlainHover`,`PlainPressed`,`PlainDisabled`,`IconOnlyFilled`,`IconOnlyOutlined`,`IconOnlyPlain`,`StateMatrix`]}))();export{h as FilledDefault,y as FilledDisabled,g as FilledFocus,_ as FilledHover,v as FilledPressed,A as IconOnlyFilled,j as IconOnlyOutlined,M as IconOnlyPlain,b as OutlinedDefault,w as OutlinedDisabled,x as OutlinedFocus,S as OutlinedHover,C as OutlinedPressed,T as PlainDefault,k as PlainDisabled,E as PlainFocus,D as PlainHover,O as PlainPressed,N as StateMatrix,P as __namedExportsOrder,o as default};