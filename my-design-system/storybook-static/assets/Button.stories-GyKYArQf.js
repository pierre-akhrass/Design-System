import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./Button-CUohm_gx.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{n(),i=t(),a=()=>(0,i.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`16`,height:`16`,children:(0,i.jsx)(`path`,{d:`M12 2.5l2.9 5.88 6.49.94-4.69 4.58 1.11 6.47L12 17.34l-5.81 3.03 1.11-6.47L2.61 9.32l6.49-.94L12 2.5z`,fill:`currentColor`})}),o={title:`Components/Button`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Primary interactive element. Supports `filled`, `outlined`, and `plain` variants with optional leading/trailing icons or icon-only mode."}}},args:{children:`Button`,variant:`filled`,state:`default`,iconOnly:!1},argTypes:{variant:{control:`inline-radio`,options:[`filled`,`outlined`,`plain`]},state:{control:`inline-radio`,options:[`default`,`focus`,`hover`,`pressed`,`disabled`]},iconOnly:{control:`boolean`}}},s=[`filled`,`outlined`,`plain`],c=[`default`,`focus`,`hover`,`pressed`,`disabled`],l={display:`grid`,gap:`1rem`,maxWidth:`960px`,width:`100%`},u={display:`grid`,gridTemplateColumns:`120px repeat(5, minmax(120px, 1fr))`,gap:`0.75rem`,alignItems:`center`},d={display:`grid`,gridTemplateColumns:`120px repeat(5, minmax(120px, 1fr))`,gap:`0.75rem`,alignItems:`center`},f={fontFamily:`'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace`,fontSize:`0.875rem`,color:`#2f3a4a`},p={...f,justifySelf:`start`,background:`#2f3f55`,borderRadius:`8px`,color:`#f5f8fc`,padding:`0.25rem 0.625rem`},m={...f,fontWeight:700,letterSpacing:`0.02em`,textTransform:`uppercase`},h={name:`Playground`},g={name:`All States`,tags:[`!autodocs`],parameters:{controls:{disable:!0}},render:()=>(0,i.jsxs)(`div`,{style:l,children:[(0,i.jsx)(`div`,{style:m,children:`Text Buttons`}),(0,i.jsxs)(`div`,{style:u,children:[(0,i.jsx)(`div`,{}),c.map(e=>(0,i.jsx)(`div`,{style:p,children:e[0].toUpperCase()+e.slice(1)},`header-text-${e}`))]}),s.map(e=>(0,i.jsxs)(`div`,{style:d,children:[(0,i.jsx)(`div`,{style:f,children:e[0].toUpperCase()+e.slice(1)}),c.map(t=>(0,i.jsx)(r,{variant:e,state:t,children:`Button`},`text-${e}-${t}`))]},`text-row-${e}`)),(0,i.jsx)(`div`,{style:m,children:`Icon Only`}),(0,i.jsxs)(`div`,{style:u,children:[(0,i.jsx)(`div`,{}),c.map(e=>(0,i.jsx)(`div`,{style:p,children:e[0].toUpperCase()+e.slice(1)},`header-icon-${e}`))]}),s.map(e=>(0,i.jsxs)(`div`,{style:d,children:[(0,i.jsx)(`div`,{style:f,children:e[0].toUpperCase()+e.slice(1)}),c.map(t=>(0,i.jsx)(r,{variant:e,state:t,iconOnly:!0,icon:(0,i.jsx)(a,{}),"aria-label":`${e} ${t} icon button`},`icon-${e}-${t}`))]},`icon-row-${e}`))]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Playground'
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  tags: ['!autodocs'],
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
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`AllStates`]}))();export{g as AllStates,h as Playground,_ as __namedExportsOrder,o as default};