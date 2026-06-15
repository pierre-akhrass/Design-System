import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Brs2brnf.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./Button-BNQrBnNs.js";import{t as a}from"./Button-leIIfXrT.js";import{n as o,t as s}from"./Dialog-CzSF7yFt.js";var c,l,u,d,f,p,m,h,g,_,v;e((()=>{c=t(n(),1),a(),o(),l=r(),u=`A focused interaction window that appears above the interface to present important information, request user input, or confirm actions. Dialogs are designed to interrupt the current flow only when immediate attention or decision-making is required.`,d=(e=`light`)=>({backgroundColor:e===`dark`?`#0a111a`:`#f5f7fa`,boxSizing:`border-box`,color:e===`dark`?`#ffffff`:`#1f1f1f`,display:`flex`,flexDirection:`column`,gap:`32px`,minHeight:`100vh`,padding:`40px clamp(24px, 4vw, 56px)`,width:`100%`}),f={borderBottom:`1px solid currentColor`,display:`flex`,flexDirection:`column`,gap:`12px`,opacity:.95,paddingBottom:`24px`},p={fontSize:`14px`,opacity:.85},m={fontSize:`40px`,fontWeight:700,margin:0},h={fontSize:`14px`,lineHeight:1.5,margin:0,maxWidth:`560px`,opacity:.85},g={title:`Components/Dialog`,parameters:{layout:`fullscreen`},args:{theme:`light`,placement:`center`,size:`medium`},argTypes:{theme:{control:`inline-radio`,options:[`light`,`dark`]},placement:{control:`inline-radio`,options:[`center`,`bottom-sheet`]},size:{control:`inline-radio`,options:[`small`,`medium`,`large`]}}},_={render:({theme:e,placement:t,size:n})=>{let[r,a]=(0,c.useState)(!0);return(0,l.jsxs)(`div`,{style:d(e),children:[(0,l.jsxs)(`header`,{style:f,children:[(0,l.jsx)(`div`,{style:p,children:`Components / Dialog`}),(0,l.jsxs)(`h1`,{style:m,children:[`Dialog`,e===`dark`?`: Dark`:``]}),(0,l.jsx)(`p`,{style:h,children:u})]}),(0,l.jsx)(i,{onClick:()=>a(!0),children:`Open dialog`}),(0,l.jsxs)(s,{open:r,theme:e,placement:t,size:n,onClose:()=>a(!1),children:[(0,l.jsx)(s.Header,{title:`🍪 We use cookies!`,onClose:()=>a(!1)}),(0,l.jsxs)(s.Body,{children:[(0,l.jsx)(s.Text,{children:`We have a friendly cookie policy on our website. This means that we use cookies to enhance your browsing experience and provide personalized content.`}),(0,l.jsx)(s.Text,{children:`Rest assured, your privacy is important to us, and we only use cookies for necessary purposes. Feel free to adjust your cookie settings to suit your preferences.`})]}),(0,l.jsxs)(s.Actions,{children:[(0,l.jsx)(i,{variant:`plain`,onClick:()=>a(!1),children:`Button`}),(0,l.jsx)(i,{onClick:()=>a(!1),children:`Button`})]})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: ({
    theme,
    placement,
    size
  }) => {
    const [open, setOpen] = useState(true);
    return <div style={getPageStyle(theme)}>
        <header style={headerStyle}>
          <div style={breadcrumbStyle}>Components / Dialog</div>
          <h1 style={titleStyle}>Dialog{theme === 'dark' ? ': Dark' : ''}</h1>
          <p style={descriptionStyle}>{description}</p>
        </header>

        <Button onClick={() => setOpen(true)}>Open dialog</Button>

        <Dialog open={open} theme={theme} placement={placement} size={size} onClose={() => setOpen(false)}>
          <Dialog.Header title="🍪 We use cookies!" onClose={() => setOpen(false)} />
          <Dialog.Body>
            <Dialog.Text>
              We have a friendly cookie policy on our website. This means that
              we use cookies to enhance your browsing experience and provide
              personalized content.
            </Dialog.Text>
            <Dialog.Text>
              Rest assured, your privacy is important to us, and we only use
              cookies for necessary purposes. Feel free to adjust your cookie
              settings to suit your preferences.
            </Dialog.Text>
          </Dialog.Body>
          <Dialog.Actions>
            <Button variant="plain" onClick={() => setOpen(false)}>
              Button
            </Button>
            <Button onClick={() => setOpen(false)}>Button</Button>
          </Dialog.Actions>
        </Dialog>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`]}))();export{_ as Default,v as __namedExportsOrder,g as default};