import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,r}from"./List-CPsOwa_e.js";import{a as i,i as a,n as o,r as s,t as c}from"./Search-D3UUNuqj.js";var l=e((()=>{r()})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{l(),i(),u=t(),d=`An enhanced search interaction pattern that provides users with advanced discovery and filtering capabilities beyond a standard search field. Expanded Search can include autocomplete suggestions, recent searches, categorized results, filters, recommendations, and contextual guidance to help users quickly find relevant content, products, or destinations within the experience.`,f=(e=`light`)=>({backgroundColor:e===`dark`?`#0a111a`:`var(--sds-color-white-800, rgba(255, 255, 255, 0.9))`,boxSizing:`border-box`,color:e===`dark`?`#ffffff`:`#1f1f1f`,display:`flex`,flexDirection:`column`,gap:`32px`,minHeight:`100vh`,padding:`40px clamp(24px, 4vw, 56px)`,width:`100%`}),p={borderBottom:`1px solid currentColor`,display:`flex`,flexDirection:`column`,gap:`12px`,opacity:.95,paddingBottom:`24px`},m={fontSize:`40px`,fontWeight:700,margin:0},h={fontSize:`14px`,lineHeight:1.5,margin:0,maxWidth:`640px`,opacity:.85},g=`#9747FF`,_=()=>(0,u.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:g,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`M12 2 L16 6 L12 10 L8 6 Z M22 12 L18 16 L14 12 L18 8 Z M12 22 L8 18 L12 14 L16 18 Z M2 12 L6 8 L10 12 L6 16 Z`})}),v={display:`flex`,flexDirection:`column`,gap:`12px`},y={alignItems:`center`,color:g,display:`flex`,fontSize:`20px`,fontWeight:700,gap:`8px`},b={border:`1px dashed ${g}`,borderRadius:`6px`,display:`flex`,flexDirection:`column`,gap:`24px`,padding:`24px 24px 48px`},x={display:`flex`,flexDirection:`column`,gap:`32px`,width:`100%`},S=()=>(0,u.jsx)(o,{children:Array.from({length:5}).map((e,t)=>(0,u.jsx)(n,{variant:`card`,label:`List item`,description:`Description`},t))}),C=({theme:e})=>(0,u.jsxs)(`div`,{style:x,children:[(0,u.jsx)(c,{theme:e,size:`default`}),(0,u.jsxs)(c,{theme:e,size:`default`,children:[(0,u.jsxs)(a,{activeIndex:0,children:[(0,u.jsx)(s,{label:`Label`,count:42}),(0,u.jsx)(s,{label:`Label`,count:42}),(0,u.jsx)(s,{label:`Label`,count:42}),(0,u.jsx)(s,{label:`Label`,count:42})]}),(0,u.jsx)(S,{})]}),(0,u.jsx)(`div`,{style:{width:`60%`},children:(0,u.jsx)(c,{theme:e,size:`compact`})}),(0,u.jsx)(`div`,{style:{width:`45%`},children:(0,u.jsxs)(c,{theme:e,size:`compact`,children:[(0,u.jsxs)(a,{activeIndex:0,children:[(0,u.jsx)(s,{label:`Label`,count:42}),(0,u.jsx)(s,{label:`Label`,count:42}),(0,u.jsx)(s,{label:`Label`,count:42})]}),(0,u.jsx)(S,{})]})})]}),w={title:`Components/Search/Playground`,component:c,parameters:{layout:`fullscreen`},args:{theme:`light`,size:`default`},argTypes:{theme:{control:`inline-radio`,options:[`light`,`dark`]},size:{control:`inline-radio`,options:[`default`,`compact`]}},render:e=>(0,u.jsxs)(`div`,{style:f(e.theme),children:[(0,u.jsxs)(`header`,{style:p,children:[(0,u.jsxs)(`h1`,{style:m,children:[`Expanded Search`,e.theme===`dark`?`: Dark`:``]}),(0,u.jsx)(`p`,{style:h,children:d})]}),(0,u.jsx)(c,{...e})]})},T={args:{theme:`light`,size:`default`}},E={args:{theme:`light`,size:`compact`}},D={args:{theme:`dark`,size:`default`}},O={render:e=>(0,u.jsx)(`div`,{style:f(e.theme),children:(0,u.jsxs)(c,{...e,children:[(0,u.jsxs)(a,{activeIndex:0,children:[(0,u.jsx)(s,{label:`Label`,count:42}),(0,u.jsx)(s,{label:`Label`,count:42}),(0,u.jsx)(s,{label:`Label`,count:42}),(0,u.jsx)(s,{label:`Label`,count:42})]}),(0,u.jsx)(S,{})]})})},k=()=>(0,u.jsxs)(`div`,{style:f(`light`),children:[(0,u.jsxs)(`header`,{style:p,children:[(0,u.jsx)(`h1`,{style:m,children:`Expanded Search`}),(0,u.jsx)(`p`,{style:h,children:d})]}),(0,u.jsxs)(`div`,{style:v,children:[(0,u.jsxs)(`div`,{style:y,children:[(0,u.jsx)(_,{}),` Expanded Search`]}),(0,u.jsx)(`div`,{style:b,children:(0,u.jsx)(C,{theme:`light`})})]})]}),A=()=>(0,u.jsxs)(`div`,{style:f(`dark`),children:[(0,u.jsxs)(`header`,{style:p,children:[(0,u.jsx)(`h1`,{style:m,children:`Expanded Search: Dark`}),(0,u.jsx)(`p`,{style:h,children:d})]}),(0,u.jsx)(C,{theme:`dark`})]}),j={name:`Showcase – Light`,render:()=>(0,u.jsx)(k,{})},M={name:`Showcase – Dark`,render:()=>(0,u.jsx)(A,{})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'light',
    size: 'default'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'light',
    size: 'compact'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    size: 'default'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <div style={getPageStyle(args.theme)}>
      <Search {...args}>
        <SearchTabs activeIndex={0}>
          <SearchTab label="Label" count={42} />
          <SearchTab label="Label" count={42} />
          <SearchTab label="Label" count={42} />
          <SearchTab label="Label" count={42} />
        </SearchTabs>
        <SampleResults />
      </Search>
    </div>
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Showcase – Light',
  render: () => <ShowcaseLightTemplate />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Showcase – Dark',
  render: () => <ShowcaseDarkTemplate />
}`,...M.parameters?.docs?.source}}},N=[`Default`,`Compact`,`Dark`,`WithTabs`,`ShowcaseLight`,`ShowcaseDark`]}))();export{E as Compact,D as Dark,T as Default,M as ShowcaseDark,j as ShowcaseLight,O as WithTabs,N as __namedExportsOrder,w as default};