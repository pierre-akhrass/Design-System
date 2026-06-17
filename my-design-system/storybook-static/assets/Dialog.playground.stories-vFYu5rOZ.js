import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CqNWPJR6.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./Button-BNQrBnNs.js";import{t as a}from"./Button-leIIfXrT.js";import{n as o,t as s}from"./Dialog-C_daixbe.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{c=t(n(),1),a(),o(),l=r(),u=`A focused interaction window that appears above the interface to present important information, request user input, or confirm actions. Dialogs are designed to interrupt the current flow only when immediate attention or decision-making is required.`,d=(e=`light`)=>({backgroundColor:e===`dark`?`#0a111a`:`#f5f7fa`,boxSizing:`border-box`,color:e===`dark`?`#ffffff`:`#1f1f1f`,display:`flex`,flexDirection:`column`,gap:`32px`,minHeight:`100vh`,padding:`40px clamp(24px, 4vw, 56px)`,width:`100%`}),f={borderBottom:`1px solid currentColor`,display:`flex`,flexDirection:`column`,gap:`12px`,opacity:.95,paddingBottom:`24px`},p={fontSize:`14px`,opacity:.85},m={fontSize:`40px`,fontWeight:700,margin:0},h={fontSize:`14px`,lineHeight:1.5,margin:0,maxWidth:`560px`,opacity:.85},g=({theme:e,variant:t=`form`})=>{let n=(t,n=`100%`)=>({background:e===`dark`?`#1e2c3e`:`#d2d9e0`,borderRadius:8,height:t,width:n});return(0,l.jsxs)(`div`,{"aria-hidden":`true`,style:{background:e===`dark`?`#141f2e`:`#e9ecf0`,borderRadius:16,display:`flex`,flexDirection:`column`,gap:16,padding:24},children:[t===`form`&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`div`,{style:n(48)}),(0,l.jsx)(`div`,{style:n(48)}),(0,l.jsx)(`div`,{style:n(48,`60%`)})]}),t===`list`&&(0,l.jsx)(l.Fragment,{children:Array.from({length:4}).map((t,r)=>(0,l.jsxs)(`div`,{style:{alignItems:`center`,display:`flex`,gap:12},children:[(0,l.jsx)(`div`,{style:{background:e===`dark`?`#2a3c50`:`#bcc4cb`,borderRadius:6,flexShrink:0,height:24,width:24}}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,flex:1,gap:6},children:[(0,l.jsx)(`div`,{style:n(12,`40%`)}),(0,l.jsx)(`div`,{style:n(10,`60%`)})]})]},r))})]})},_={title:`Components/Dialog/Playground`,parameters:{layout:`fullscreen`},args:{theme:`light`},argTypes:{theme:{control:`inline-radio`,options:[`light`,`dark`]}}},v={name:`1 · Light · centered (cookies)`,render:({theme:e})=>{let[t,n]=(0,c.useState)(!0);return(0,l.jsxs)(`div`,{style:d(e),children:[(0,l.jsxs)(`header`,{style:f,children:[(0,l.jsx)(`div`,{style:p,children:`Components / Dialog`}),(0,l.jsx)(`h1`,{style:m,children:`Dialog`}),(0,l.jsx)(`p`,{style:h,children:u})]}),(0,l.jsx)(i,{onClick:()=>n(!0),children:`Open dialog`}),(0,l.jsxs)(s,{open:t,theme:e,placement:`center`,size:`medium`,onClose:()=>n(!1),children:[(0,l.jsx)(s.Header,{title:`🍪 We use cookies!`,onClose:()=>n(!1)}),(0,l.jsxs)(s.Body,{children:[(0,l.jsx)(s.Text,{children:`We have a friendly cookie policy on our website. This means that we use cookies to enhance your browsing experience and provide personalized content.`}),(0,l.jsx)(s.Text,{children:`Rest assured, your privacy is important to us, and we only use cookies for necessary purposes. Feel free to adjust your cookie settings to suit your preferences.`})]}),(0,l.jsxs)(s.Actions,{children:[(0,l.jsx)(i,{variant:`plain`,onClick:()=>n(!1),children:`Button`}),(0,l.jsx)(i,{onClick:()=>n(!1),children:`Button`})]})]})]})}},y={name:`2 · Bottom sheet · upgrade (stacked actions)`,render:({theme:e})=>{let[t,n]=(0,c.useState)(!0);return(0,l.jsx)(`div`,{style:{...d(e),gap:16,padding:0},children:(0,l.jsxs)(`div`,{style:{background:e===`dark`?`#0a111a`:`#f5f7fa`,border:`1px solid rgba(127,127,127,0.25)`,borderRadius:24,display:`flex`,flexDirection:`column`,gap:16,height:720,margin:`40px auto`,maxWidth:380,overflow:`hidden`,padding:24,position:`relative`,width:`100%`},children:[(0,l.jsx)(g,{theme:e,variant:`form`}),(0,l.jsxs)(s,{open:t,theme:e,placement:`bottom-sheet`,onClose:()=>n(!1),children:[(0,l.jsx)(s.Header,{title:`Would you like to upgrade?`,onClose:()=>n(!1)}),(0,l.jsxs)(s.Body,{children:[(0,l.jsx)(s.Text,{children:`We just released version 3.0 of the Simple Design System, would you like to update?`}),(0,l.jsx)(s.Text,{children:`If you'd prefer to wait, automatic updates are scheduled for 23:00 on the last Wednesday of every month.`})]}),(0,l.jsxs)(s.Actions,{align:`stacked`,children:[(0,l.jsx)(i,{onClick:()=>n(!1),children:`Button`}),(0,l.jsx)(i,{variant:`plain`,onClick:()=>n(!1),children:`Button`})]})]})]})})}},b={name:`3 · Bottom sheet · cookies (stacked)`,render:({theme:e})=>{let[t,n]=(0,c.useState)(!0);return(0,l.jsx)(`div`,{style:{...d(e),gap:16,padding:0},children:(0,l.jsxs)(`div`,{style:{background:e===`dark`?`#0a111a`:`#f5f7fa`,border:`1px solid rgba(127,127,127,0.25)`,borderRadius:24,display:`flex`,flexDirection:`column`,gap:16,height:720,margin:`40px auto`,maxWidth:380,overflow:`hidden`,padding:24,position:`relative`,width:`100%`},children:[(0,l.jsx)(g,{theme:`dark`,variant:`list`}),(0,l.jsxs)(s,{open:t,theme:e,placement:`bottom-sheet`,onClose:()=>n(!1),children:[(0,l.jsx)(s.Header,{title:`🍪 We use cookies!`,onClose:()=>n(!1)}),(0,l.jsxs)(s.Body,{children:[(0,l.jsx)(s.Text,{children:`We have a friendly cookie policy on our website. This means that we use cookies to enhance your browsing experience and provide personalized content.`}),(0,l.jsx)(s.Text,{children:`Rest assured, your privacy is important to us, and we only use cookies for necessary purposes. Feel free to adjust your cookie settings to suit your preferences.`})]}),(0,l.jsxs)(s.Actions,{align:`stacked`,children:[(0,l.jsx)(i,{onClick:()=>n(!1),children:`Button`}),(0,l.jsx)(i,{variant:`plain`,onClick:()=>n(!1),children:`Button`})]})]})]})})}},x={name:`4 · Dark · centered (upgrade)`,render:()=>{let[e,t]=(0,c.useState)(!0);return(0,l.jsxs)(`div`,{style:d(`dark`),children:[(0,l.jsxs)(`header`,{style:f,children:[(0,l.jsx)(`div`,{style:p,children:`Components / Dialog`}),(0,l.jsx)(`h1`,{style:m,children:`Dialog: Dark`}),(0,l.jsx)(`p`,{style:h,children:u})]}),(0,l.jsx)(g,{theme:`dark`,variant:`form`}),(0,l.jsx)(i,{onClick:()=>t(!0),children:`Open dialog`}),(0,l.jsxs)(s,{open:e,theme:`light`,placement:`center`,size:`medium`,onClose:()=>t(!1),children:[(0,l.jsx)(s.Header,{title:`Would you like to upgrade?`,onClose:()=>t(!1)}),(0,l.jsxs)(s.Body,{children:[(0,l.jsx)(s.Text,{children:`We just released version 3.0 of the Simple Design System, would you like to update?`}),(0,l.jsx)(s.Text,{children:`If you'd prefer to wait, automatic updates are scheduled for 23:00 on the last Wednesday of every month.`})]}),(0,l.jsxs)(s.Actions,{children:[(0,l.jsx)(i,{variant:`plain`,onClick:()=>t(!1),children:`Button`}),(0,l.jsx)(i,{onClick:()=>t(!1),children:`Button`})]})]})]})}},S={name:`5 · Dark · centered (cookies)`,render:()=>{let[e,t]=(0,c.useState)(!0);return(0,l.jsxs)(`div`,{style:d(`dark`),children:[(0,l.jsxs)(`header`,{style:f,children:[(0,l.jsx)(`div`,{style:p,children:`Components / Dialog`}),(0,l.jsx)(`h1`,{style:m,children:`Dialog: Dark`}),(0,l.jsx)(`p`,{style:h,children:u})]}),(0,l.jsx)(g,{theme:`dark`,variant:`list`}),(0,l.jsx)(i,{onClick:()=>t(!0),children:`Open dialog`}),(0,l.jsxs)(s,{open:e,theme:`light`,placement:`center`,size:`medium`,onClose:()=>t(!1),children:[(0,l.jsx)(s.Header,{title:`🍪 We use cookies!`,onClose:()=>t(!1)}),(0,l.jsxs)(s.Body,{children:[(0,l.jsx)(s.Text,{children:`We have a friendly cookie policy on our website. This means that we use cookies to enhance your browsing experience and provide personalized content.`}),(0,l.jsx)(s.Text,{children:`Rest assured, your privacy is important to us, and we only use cookies for necessary purposes. Feel free to adjust your cookie settings to suit your preferences.`})]}),(0,l.jsxs)(s.Actions,{children:[(0,l.jsx)(i,{variant:`plain`,onClick:()=>t(!1),children:`Button`}),(0,l.jsx)(i,{onClick:()=>t(!1),children:`Button`})]})]})]})}},C={name:`6 · Showcase (sizes)`,render:({theme:e})=>{let[t,n]=(0,c.useState)(`medium`),[r,a]=(0,c.useState)(!0);return(0,l.jsxs)(`div`,{style:d(e),children:[(0,l.jsxs)(`header`,{style:f,children:[(0,l.jsx)(`div`,{style:p,children:`Components / Dialog`}),(0,l.jsx)(`h1`,{style:m,children:`Sizes`}),(0,l.jsx)(`p`,{style:h,children:`The dialog supports three width presets — Small (400), Medium (560) and Large (720).`})]}),(0,l.jsx)(`div`,{style:{display:`flex`,gap:12},children:[`small`,`medium`,`large`].map(e=>(0,l.jsx)(i,{variant:e===t?`filled`:`outlined`,onClick:()=>{n(e),a(!0)},children:e[0].toUpperCase()+e.slice(1)},e))}),(0,l.jsxs)(s,{open:r,theme:e,size:t,onClose:()=>a(!1),children:[(0,l.jsx)(s.Header,{title:`${t[0].toUpperCase()+t.slice(1)} dialog`,onClose:()=>a(!1)}),(0,l.jsx)(s.Body,{children:(0,l.jsxs)(s.Text,{children:[`The same content rendered at the `,t,` size preset. Resize the window to see the responsive bottom-sheet fallback below 600px.`]})}),(0,l.jsxs)(s.Actions,{children:[(0,l.jsx)(i,{variant:`plain`,onClick:()=>a(!1),children:`Cancel`}),(0,l.jsx)(i,{onClick:()=>a(!1),children:`Confirm`})]})]})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '1 · Light · centered (cookies)',
  render: ({
    theme
  }) => {
    const [open, setOpen] = useState(true);
    return <div style={getPageStyle(theme)}>\r
        <header style={headerStyle}>\r
          <div style={breadcrumbStyle}>Components / Dialog</div>\r
          <h1 style={titleStyle}>Dialog</h1>\r
          <p style={descriptionStyle}>{description}</p>\r
        </header>\r
\r
        <Button onClick={() => setOpen(true)}>Open dialog</Button>\r
\r
        <Dialog open={open} theme={theme} placement="center" size="medium" onClose={() => setOpen(false)}>\r
          <Dialog.Header title="🍪 We use cookies!" onClose={() => setOpen(false)} />\r
          <Dialog.Body>\r
            <Dialog.Text>\r
              We have a friendly cookie policy on our website. This means that\r
              we use cookies to enhance your browsing experience and provide\r
              personalized content.\r
            </Dialog.Text>\r
            <Dialog.Text>\r
              Rest assured, your privacy is important to us, and we only use\r
              cookies for necessary purposes. Feel free to adjust your cookie\r
              settings to suit your preferences.\r
            </Dialog.Text>\r
          </Dialog.Body>\r
          <Dialog.Actions>\r
            <Button variant="plain" onClick={() => setOpen(false)}>\r
              Button\r
            </Button>\r
            <Button onClick={() => setOpen(false)}>Button</Button>\r
          </Dialog.Actions>\r
        </Dialog>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '2 · Bottom sheet · upgrade (stacked actions)',
  render: ({
    theme
  }) => {
    const [open, setOpen] = useState(true);
    return <div style={{
      ...getPageStyle(theme),
      gap: 16,
      padding: 0
    }}>\r
        {/* Phone-shaped frame so the bottom sheet feels native */}\r
        <div style={{
        background: theme === 'dark' ? '#0a111a' : '#f5f7fa',
        border: '1px solid rgba(127,127,127,0.25)',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        height: 720,
        margin: '40px auto',
        maxWidth: 380,
        overflow: 'hidden',
        padding: 24,
        position: 'relative',
        width: '100%'
      }}>\r
          <FakePageBackdrop theme={theme} variant="form" />\r
          <Dialog open={open} theme={theme} placement="bottom-sheet" onClose={() => setOpen(false)}>\r
            <Dialog.Header title="Would you like to upgrade?" onClose={() => setOpen(false)} />\r
            <Dialog.Body>\r
              <Dialog.Text>\r
                We just released version 3.0 of the Simple Design System,\r
                would you like to update?\r
              </Dialog.Text>\r
              <Dialog.Text>\r
                If you'd prefer to wait, automatic updates are scheduled for\r
                23:00 on the last Wednesday of every month.\r
              </Dialog.Text>\r
            </Dialog.Body>\r
            <Dialog.Actions align="stacked">\r
              <Button onClick={() => setOpen(false)}>Button</Button>\r
              <Button variant="plain" onClick={() => setOpen(false)}>\r
                Button\r
              </Button>\r
            </Dialog.Actions>\r
          </Dialog>\r
        </div>\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '3 · Bottom sheet · cookies (stacked)',
  render: ({
    theme
  }) => {
    const [open, setOpen] = useState(true);
    return <div style={{
      ...getPageStyle(theme),
      gap: 16,
      padding: 0
    }}>\r
        <div style={{
        background: theme === 'dark' ? '#0a111a' : '#f5f7fa',
        border: '1px solid rgba(127,127,127,0.25)',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        height: 720,
        margin: '40px auto',
        maxWidth: 380,
        overflow: 'hidden',
        padding: 24,
        position: 'relative',
        width: '100%'
      }}>\r
          <FakePageBackdrop theme="dark" variant="list" />\r
          <Dialog open={open} theme={theme} placement="bottom-sheet" onClose={() => setOpen(false)}>\r
            <Dialog.Header title="🍪 We use cookies!" onClose={() => setOpen(false)} />\r
            <Dialog.Body>\r
              <Dialog.Text>\r
                We have a friendly cookie policy on our website. This means\r
                that we use cookies to enhance your browsing experience and\r
                provide personalized content.\r
              </Dialog.Text>\r
              <Dialog.Text>\r
                Rest assured, your privacy is important to us, and we only\r
                use cookies for necessary purposes. Feel free to adjust your\r
                cookie settings to suit your preferences.\r
              </Dialog.Text>\r
            </Dialog.Body>\r
            <Dialog.Actions align="stacked">\r
              <Button onClick={() => setOpen(false)}>Button</Button>\r
              <Button variant="plain" onClick={() => setOpen(false)}>\r
                Button\r
              </Button>\r
            </Dialog.Actions>\r
          </Dialog>\r
        </div>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '4 · Dark · centered (upgrade)',
  render: () => {
    const [open, setOpen] = useState(true);
    return <div style={getPageStyle('dark')}>\r
        <header style={headerStyle}>\r
          <div style={breadcrumbStyle}>Components / Dialog</div>\r
          <h1 style={titleStyle}>Dialog: Dark</h1>\r
          <p style={descriptionStyle}>{description}</p>\r
        </header>\r
\r
        <FakePageBackdrop theme="dark" variant="form" />\r
\r
        <Button onClick={() => setOpen(true)}>Open dialog</Button>\r
\r
        <Dialog open={open} theme="light" placement="center" size="medium" onClose={() => setOpen(false)}>\r
          <Dialog.Header title="Would you like to upgrade?" onClose={() => setOpen(false)} />\r
          <Dialog.Body>\r
            <Dialog.Text>\r
              We just released version 3.0 of the Simple Design System, would\r
              you like to update?\r
            </Dialog.Text>\r
            <Dialog.Text>\r
              If you'd prefer to wait, automatic updates are scheduled for\r
              23:00 on the last Wednesday of every month.\r
            </Dialog.Text>\r
          </Dialog.Body>\r
          <Dialog.Actions>\r
            <Button variant="plain" onClick={() => setOpen(false)}>\r
              Button\r
            </Button>\r
            <Button onClick={() => setOpen(false)}>Button</Button>\r
          </Dialog.Actions>\r
        </Dialog>\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '5 · Dark · centered (cookies)',
  render: () => {
    const [open, setOpen] = useState(true);
    return <div style={getPageStyle('dark')}>\r
        <header style={headerStyle}>\r
          <div style={breadcrumbStyle}>Components / Dialog</div>\r
          <h1 style={titleStyle}>Dialog: Dark</h1>\r
          <p style={descriptionStyle}>{description}</p>\r
        </header>\r
\r
        <FakePageBackdrop theme="dark" variant="list" />\r
\r
        <Button onClick={() => setOpen(true)}>Open dialog</Button>\r
\r
        <Dialog open={open} theme="light" placement="center" size="medium" onClose={() => setOpen(false)}>\r
          <Dialog.Header title="🍪 We use cookies!" onClose={() => setOpen(false)} />\r
          <Dialog.Body>\r
            <Dialog.Text>\r
              We have a friendly cookie policy on our website. This means that\r
              we use cookies to enhance your browsing experience and provide\r
              personalized content.\r
            </Dialog.Text>\r
            <Dialog.Text>\r
              Rest assured, your privacy is important to us, and we only use\r
              cookies for necessary purposes. Feel free to adjust your cookie\r
              settings to suit your preferences.\r
            </Dialog.Text>\r
          </Dialog.Body>\r
          <Dialog.Actions>\r
            <Button variant="plain" onClick={() => setOpen(false)}>\r
              Button\r
            </Button>\r
            <Button onClick={() => setOpen(false)}>Button</Button>\r
          </Dialog.Actions>\r
        </Dialog>\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '6 · Showcase (sizes)',
  render: ({
    theme
  }) => {
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [open, setOpen] = useState(true);
    return <div style={getPageStyle(theme)}>\r
        <header style={headerStyle}>\r
          <div style={breadcrumbStyle}>Components / Dialog</div>\r
          <h1 style={titleStyle}>Sizes</h1>\r
          <p style={descriptionStyle}>\r
            The dialog supports three width presets — Small (400), Medium (560)\r
            and Large (720).\r
          </p>\r
        </header>\r
        <div style={{
        display: 'flex',
        gap: 12
      }}>\r
          {(['small', 'medium', 'large'] as const).map(s => <Button key={s} variant={s === size ? 'filled' : 'outlined'} onClick={() => {
          setSize(s);
          setOpen(true);
        }}>\r
              {s[0].toUpperCase() + s.slice(1)}\r
            </Button>)}\r
        </div>\r
\r
        <Dialog open={open} theme={theme} size={size} onClose={() => setOpen(false)}>\r
          <Dialog.Header title={\`\${size[0].toUpperCase() + size.slice(1)} dialog\`} onClose={() => setOpen(false)} />\r
          <Dialog.Body>\r
            <Dialog.Text>\r
              The same content rendered at the {size} size preset. Resize the\r
              window to see the responsive bottom-sheet fallback below 600px.\r
            </Dialog.Text>\r
          </Dialog.Body>\r
          <Dialog.Actions>\r
            <Button variant="plain" onClick={() => setOpen(false)}>\r
              Cancel\r
            </Button>\r
            <Button onClick={() => setOpen(false)}>Confirm</Button>\r
          </Dialog.Actions>\r
        </Dialog>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`LightCenter`,`BottomSheetUpgrade`,`BottomSheetCookies`,`DarkCenterUpgrade`,`DarkCenterCookies`,`Showcase`]}))();export{b as BottomSheetCookies,y as BottomSheetUpgrade,S as DarkCenterCookies,x as DarkCenterUpgrade,v as LightCenter,C as Showcase,w as __namedExportsOrder,_ as default};