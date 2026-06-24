import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,r,t as i}from"./Carousel-DUgCggF_.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{r(),a=t(),o=`An interactive content component that allows users to browse through a collection of items, media, or information within a limited space. Carousels support sequential navigation through slides, cards, or visual content while helping surface featured content, highlights, or grouped experiences in an engaging and organized manner.`,s=(e=`light`)=>({backgroundColor:e===`dark`?`#141f2e`:`var(--sds-color-white-800, rgba(255, 255, 255, 0.9))`,boxSizing:`border-box`,color:e===`dark`?`#ffffff`:`#1f1f1f`,display:`flex`,flexDirection:`column`,gap:`32px`,minHeight:`100vh`,padding:`40px clamp(24px, 4vw, 56px)`,width:`100%`}),c={borderBottom:`1px solid currentColor`,display:`flex`,flexDirection:`column`,gap:`12px`,opacity:.95,paddingBottom:`24px`},l={fontSize:`14px`,opacity:.85},u={fontSize:`40px`,fontWeight:700,margin:0},d={fontSize:`14px`,lineHeight:1.5,margin:0,maxWidth:`420px`,opacity:.85},f=(e=6)=>Array.from({length:e},(e,t)=>(0,a.jsx)(n,{"aria-label":`Slide ${t+1}`},t)),p=({theme:e=`light`,showNavigation:t,showFade:n,prevLabel:r,nextLabel:p,slideCount:m=6})=>(0,a.jsxs)(`div`,{style:s(e),children:[(0,a.jsxs)(`header`,{style:c,children:[(0,a.jsx)(`div`,{style:l,children:`Foundation / Carousel`}),(0,a.jsxs)(`h1`,{style:u,children:[`Carousel`,e===`dark`?`: Dark`:``]}),(0,a.jsx)(`p`,{style:d,children:o})]}),(0,a.jsx)(i,{theme:e,showNavigation:t,showFade:n,prevLabel:r,nextLabel:p,children:f(m)})]}),m={title:`Components/Carousel/Playground`,component:i,parameters:{layout:`fullscreen`},args:{theme:`light`,showNavigation:!0,showFade:!0,prevLabel:`Prev`,nextLabel:`Next`},argTypes:{theme:{control:`inline-radio`,options:[`light`,`dark`]},showNavigation:{control:`boolean`},showFade:{control:`boolean`},prevLabel:{control:`text`},nextLabel:{control:`text`}},render:e=>(0,a.jsx)(p,{...e})},h={args:{theme:`light`}},g={args:{theme:`dark`}},_={name:`Plain (no docs header)`,render:e=>(0,a.jsx)(`div`,{style:s(e.theme),children:(0,a.jsx)(i,{...e,children:f(8)})})},v={args:{showNavigation:!1},render:e=>(0,a.jsx)(p,{...e,slideCount:8})},y={args:{showFade:!1},render:e=>(0,a.jsx)(p,{...e,slideCount:8})},b={render:e=>(0,a.jsx)(p,{...e,slideCount:3})},x={render:e=>(0,a.jsxs)(`div`,{style:s(e.theme),children:[(0,a.jsxs)(`header`,{style:c,children:[(0,a.jsx)(`div`,{style:l,children:`Foundation / Carousel`}),(0,a.jsxs)(`h1`,{style:u,children:[`Carousel`,e.theme===`dark`?`: Dark`:``]}),(0,a.jsx)(`p`,{style:d,children:o})]}),(0,a.jsx)(i,{...e,children:Array.from({length:6},(e,t)=>(0,a.jsxs)(n,{style:{fontWeight:600},children:[`Slide `,t+1]},t))})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'light'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'dark'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Plain (no docs header)',
  render: args => <div style={getPageStyle(args.theme)}>
      <Carousel {...args}>{renderSlides(8)}</Carousel>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    showNavigation: false
  },
  render: args => <Showcase {...args} slideCount={8} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    showFade: false
  },
  render: args => <Showcase {...args} slideCount={8} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Showcase {...args} slideCount={3} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={getPageStyle(args.theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Foundation / Carousel</div>
        <h1 style={titleStyle}>
          Carousel{args.theme === 'dark' ? ': Dark' : ''}
        </h1>
        <p style={descriptionStyle}>{description}</p>
      </header>
      <Carousel {...args}>
        {Array.from({
        length: 6
      }, (_, index) => <CarouselSlide key={index} style={{
        fontWeight: 600
      }}>
            Slide {index + 1}
          </CarouselSlide>)}
      </Carousel>
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Light`,`Dark`,`PlainSlides`,`WithoutNavigation`,`WithoutFade`,`FewSlides`,`CustomContent`]}))();export{x as CustomContent,g as Dark,b as FewSlides,h as Light,_ as PlainSlides,y as WithoutFade,v as WithoutNavigation,S as __namedExportsOrder,m as default};