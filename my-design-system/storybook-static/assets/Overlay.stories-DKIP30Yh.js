import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n=e((()=>{})),r,i,a=e((()=>{n(),r=t(),i=({mode:e=`light`,opacity:t=5,children:n,className:i,...a})=>(0,r.jsx)(`div`,{className:[`ds-overlay`,`ds-overlay--mode-${e}`,`ds-overlay--opacity-${t}`,i].filter(Boolean).join(` `),...a,children:n}),i.__docgenInfo={description:``,methods:[],displayName:`Overlay`,props:{mode:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'light'`,computed:!1}},opacity:{required:!1,tsType:{name:`union`,raw:`5 | 10 | 25 | 50 | 75 | 90 | 100`,elements:[{name:`literal`,value:`5`},{name:`literal`,value:`10`},{name:`literal`,value:`25`},{name:`literal`,value:`50`},{name:`literal`,value:`75`},{name:`literal`,value:`90`},{name:`literal`,value:`100`}]},description:``,defaultValue:{value:`5`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]}})),o,s,c,l,u,d,f;e((()=>{a(),o=t(),s={title:`Components/Overlay (pierre-akhrass)`,component:i,argTypes:{mode:{control:`inline-radio`,options:[`light`,`dark`]},opacity:{control:`inline-radio`,options:[5,10,25,50,75,90,100]}},args:{mode:`light`,opacity:5}},c={args:{mode:`light`,opacity:5}},l={args:{mode:`dark`,opacity:5}},u={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[5,10,25,50,75,90,100].map(e=>(0,o.jsxs)(i,{mode:`light`,opacity:e,children:[`Light `,e,`%`]},e))})},d={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[5,10,25,50,75,90,100].map(e=>(0,o.jsxs)(i,{mode:`dark`,opacity:e,children:[`Dark `,e,`%`]},e))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'light',
    opacity: 5
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    opacity: 5
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      {[5, 10, 25, 50, 75, 90, 100].map(o => <Overlay key={o} mode="light" opacity={o as 5}>\r
          Light {o}%\r
        </Overlay>)}\r
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      {[5, 10, 25, 50, 75, 90, 100].map(o => <Overlay key={o} mode="dark" opacity={o as 5}>\r
          Dark {o}%\r
        </Overlay>)}\r
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Light`,`Dark`,`AllOpacitiesLight`,`AllOpacitiesDark`]}))();export{d as AllOpacitiesDark,u as AllOpacitiesLight,l as Dark,c as Light,f as __namedExportsOrder,s as default};