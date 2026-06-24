import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Brs2brnf.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./SocialMediaPost-BezHcXvY.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{o=t(n(),1),i(),s=r(),c=`A reusable content template designed to create consistent social media assets across multiple platforms and formats. Social Media Post templates support platform-specific layouts and content structures for channels such as Facebook, Instagram, TikTok, YouTube, and X while maintaining brand consistency and visual cohesion.`,l=(e=`light`)=>({backgroundColor:e===`dark`?`#141f2e`:`var(--sds-color-white-800, rgba(255, 255, 255, 0.9))`,boxSizing:`border-box`,color:e===`dark`?`#ffffff`:`#1f1f1f`,display:`flex`,flexDirection:`column`,gap:`32px`,minHeight:`100vh`,padding:`40px clamp(24px, 4vw, 56px)`,width:`100%`}),u={borderBottom:`1px solid currentColor`,display:`flex`,flexDirection:`column`,gap:`12px`,opacity:.95,paddingBottom:`24px`},d={fontSize:`14px`,opacity:.85},f={fontSize:`40px`,fontWeight:700,margin:0},p={fontSize:`14px`,lineHeight:1.5,margin:0,maxWidth:`420px`,opacity:.85},m={alignItems:`flex-start`,display:`flex`,flexDirection:`column`,gap:`24px`},h=`A fashion trend signifies a specific look or expression that is spread across a population at a specific time and place...`,g=`Style isn't just what you wear—it's how you wear it. Confidence is the best accessory.`,_=({theme:e})=>{let[t,n]=(0,o.useState)(2);return(0,s.jsx)(a,{theme:e,platform:`instagram`,type:`image`,pagination:{current:t,total:6,onPrev:()=>n(e=>Math.max(1,e-1)),onNext:()=>n(e=>Math.min(6,e+1))}})},v=[{platform:`facebook`,type:`image`,caption:h},{platform:`instagram`,type:`image`,pagination:{current:2,total:6}},{platform:`tiktok`,type:`video`},{platform:`youtube`,type:`video`},{platform:`x`,type:`text`,text:g,hashtags:`#FashionForward #StyleMatters`}],y=({theme:e})=>(0,s.jsxs)(`div`,{style:l(e),children:[(0,s.jsxs)(`header`,{style:u,children:[(0,s.jsx)(`div`,{style:d,children:`Component / Social Media Post`}),(0,s.jsxs)(`h1`,{style:f,children:[`Social Media Post`,e===`dark`?`: Dark`:``]}),(0,s.jsx)(`p`,{style:p,children:c})]}),(0,s.jsx)(`div`,{style:m,children:v.map(t=>(0,s.jsx)(a,{theme:e,platform:t.platform,type:t.type,caption:t.caption,text:t.text,hashtags:t.hashtags,pagination:t.pagination},t.platform))})]}),b={title:`Components/SocialMediaPost/Playground`,component:a,parameters:{layout:`fullscreen`},args:{theme:`light`,platform:`facebook`,type:`image`},argTypes:{theme:{control:`inline-radio`,options:[`light`,`dark`]},platform:{control:`inline-radio`,options:[`facebook`,`instagram`,`tiktok`,`youtube`,`x`]},type:{control:`inline-radio`,options:[`image`,`video`,`text`]}},render:e=>(0,s.jsxs)(`div`,{style:l(e.theme),children:[(0,s.jsxs)(`header`,{style:u,children:[(0,s.jsx)(`div`,{style:d,children:`Component / Social Media Post`}),(0,s.jsxs)(`h1`,{style:f,children:[`Social Media Post`,e.theme===`dark`?`: Dark`:``]}),(0,s.jsx)(`p`,{style:p,children:c})]}),(0,s.jsx)(`div`,{style:m,children:(0,s.jsx)(a,{...e})})]})},x={args:{platform:`facebook`,type:`image`,caption:h}},S={render:e=>(0,s.jsxs)(`div`,{style:l(e.theme),children:[(0,s.jsxs)(`header`,{style:u,children:[(0,s.jsx)(`div`,{style:d,children:`Component / Social Media Post`}),(0,s.jsxs)(`h1`,{style:f,children:[`Social Media Post`,e.theme===`dark`?`: Dark`:``]}),(0,s.jsx)(`p`,{style:p,children:c})]}),(0,s.jsx)(`div`,{style:m,children:(0,s.jsx)(_,{theme:e.theme??`light`})})]})},C={args:{platform:`tiktok`,type:`video`}},w={args:{platform:`youtube`,type:`video`}},T={args:{platform:`x`,type:`text`,text:g,hashtags:`#FashionForward #StyleMatters`}},E={name:`Showcase – Light`,render:()=>(0,s.jsx)(y,{theme:`light`})},D={name:`Showcase – Dark`,render:()=>(0,s.jsx)(y,{theme:`dark`})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    platform: 'facebook',
    type: 'image',
    caption: captionText
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={getPageStyle(args.theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Component / Social Media Post</div>
        <h1 style={titleStyle}>
          Social Media Post{args.theme === 'dark' ? ': Dark' : ''}
        </h1>
        <p style={descriptionStyle}>{description}</p>
      </header>
      <div style={cardsColumnStyle}>
        <PaginatedInstagram theme={args.theme ?? 'light'} />
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    platform: 'tiktok',
    type: 'video'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    platform: 'youtube',
    type: 'video'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    platform: 'x',
    type: 'text',
    text: xText,
    hashtags: '#FashionForward #StyleMatters'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Showcase – Light',
  render: () => <ShowcaseTemplate theme="light" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Showcase – Dark',
  render: () => <ShowcaseTemplate theme="dark" />
}`,...D.parameters?.docs?.source}}},O=[`Facebook`,`Instagram`,`TikTok`,`YouTube`,`X`,`ShowcaseLight`,`ShowcaseDark`]}))();export{x as Facebook,S as Instagram,D as ShowcaseDark,E as ShowcaseLight,C as TikTok,T as X,w as YouTube,O as __namedExportsOrder,b as default};