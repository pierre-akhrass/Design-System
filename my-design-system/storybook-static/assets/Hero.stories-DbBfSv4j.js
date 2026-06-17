import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CqNWPJR6.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-BNQrBnNs.js";import{n as o,t as s}from"./map-BPssFQRf.js";var c=e((()=>{})),l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{l=t(n(),1),i(),c(),u=r(),d=()=>(0,u.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`m12 2 2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`})}),f=()=>(0,u.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`M5 12h14m-6-6 6 6-6 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),p=()=>(0,u.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,u.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,u.jsx)(`path`,{d:`M12 7v5l3 2`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),m=()=>(0,u.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`}),(0,u.jsx)(`circle`,{cx:`12`,cy:`10`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`})]}),h=(e,t,n)=>e?(0,u.jsxs)(a,{variant:t,onClick:()=>{e.onClick?.(),e.href&&window.open(e.href,`_self`)},children:[n,e.label]}):null,g=({current:e,total:t,onChange:n})=>t<=1?null:(0,u.jsxs)(`div`,{className:`ds-hero__pagination`,role:`tablist`,"aria-label":`Hero slides`,children:[Array.from({length:t},(e,t)=>t+1).map(t=>(0,u.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":t===e,"aria-label":`Go to slide ${t}`,className:`ds-hero__page${t===e?` ds-hero__page--active`:``}`,onClick:()=>n(t),children:String(t).padStart(2,`0`)},t)),(0,u.jsx)(`div`,{className:`ds-hero__progress`,"aria-hidden":`true`,children:(0,u.jsx)(`div`,{className:`ds-hero__progress-fill`,style:{width:`${e/t*100}%`}})})]}),_=({slide:e,pagination:t})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`ds-hero__overlay`}),(0,u.jsxs)(`div`,{className:`ds-hero__centered`,children:[(0,u.jsxs)(`div`,{className:`ds-hero__centered-text`,children:[(0,u.jsx)(`h2`,{className:`ds-hero__title`,children:e.title}),e.subtitle&&(0,u.jsx)(`p`,{className:`ds-hero__subtitle`,children:e.subtitle})]}),e.brand&&(0,u.jsxs)(`div`,{className:`ds-hero__brand`,children:[e.brand.logo&&(0,u.jsx)(`div`,{className:`ds-hero__brand-logo`,children:e.brand.logo}),(0,u.jsxs)(`div`,{className:`ds-hero__brand-body`,children:[e.brand.text&&(0,u.jsx)(`div`,{className:`ds-hero__brand-text`,children:e.brand.text}),(0,u.jsxs)(`div`,{className:`ds-hero__brand-actions`,children:[h(e.brand.primary,`filled`),h(e.brand.secondary,`plain`,(0,u.jsx)(d,{}))]})]})]})]}),(0,u.jsxs)(`div`,{className:`ds-hero__footer`,children:[(0,u.jsxs)(`div`,{className:`ds-hero__actions`,children:[h(e.primaryAction,`filled`),h(e.secondaryAction,`plain`,(0,u.jsx)(d,{}))]}),(0,u.jsx)(g,{...t})]})]}),v=({slide:e,pagination:t})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`ds-hero__overlay`}),(0,u.jsxs)(`div`,{className:`ds-hero__bl`,children:[(0,u.jsx)(`h2`,{className:`ds-hero__title`,children:e.title}),e.subtitle&&(0,u.jsx)(`p`,{className:`ds-hero__subtitle`,children:e.subtitle}),(0,u.jsxs)(`div`,{className:`ds-hero__actions`,children:[h(e.primaryAction,`filled`),e.secondaryAction&&(0,u.jsxs)(a,{variant:`plain`,onClick:()=>{e.secondaryAction?.onClick?.(),e.secondaryAction?.href&&window.open(e.secondaryAction.href,`_self`)},children:[e.secondaryAction.label,(0,u.jsx)(f,{})]})]})]}),(0,u.jsx)(g,{...t})]}),y=({slide:e,pagination:t})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`ds-hero__split-image`,style:e.image?{backgroundImage:`url(${e.image})`}:void 0,children:e.status&&(0,u.jsxs)(`div`,{className:`ds-hero__status`,children:[(0,u.jsxs)(`span`,{className:`ds-hero__status-item`,children:[e.status.icon??(0,u.jsx)(p,{}),(0,u.jsx)(`span`,{children:e.status.text})]}),e.status.linkLabel&&(0,u.jsxs)(`a`,{className:`ds-hero__status-link`,href:e.status.linkHref??`#`,children:[(0,u.jsx)(m,{}),e.status.linkLabel]})]})}),(0,u.jsxs)(`div`,{className:`ds-hero__split-panel`,children:[(0,u.jsxs)(`div`,{className:`ds-hero__split-content`,children:[(0,u.jsx)(`h2`,{className:`ds-hero__title`,children:e.title}),e.subtitle&&(0,u.jsx)(`p`,{className:`ds-hero__subtitle`,children:e.subtitle}),(0,u.jsxs)(`div`,{className:`ds-hero__actions`,children:[h(e.primaryAction,`filled`),e.secondaryAction&&(0,u.jsxs)(a,{variant:`plain`,onClick:()=>{e.secondaryAction?.onClick?.(),e.secondaryAction?.href&&window.open(e.secondaryAction.href,`_self`)},children:[e.secondaryAction.label,(0,u.jsx)(f,{})]})]})]}),(0,u.jsx)(g,{...t})]})]}),b=({variant:e=`centered`,mode:t=`dark`,slides:n,autoPlay:r=0,currentSlide:i,totalSlides:a,onSlideChange:o,image:s,title:c,subtitle:d,brand:f,primaryAction:p,secondaryAction:m,status:h,className:g,style:b,...x})=>{let S={image:s,title:c,subtitle:d,brand:f,primaryAction:p,secondaryAction:m,status:h},C=n&&n.length>0?n:[S],w=a&&a>C.length?[...C,...Array.from({length:a-C.length},()=>S)]:C,T=w.length,[E,D]=(0,l.useState)(0),O=typeof i==`number`,k=O?Math.min(Math.max(0,i-1),T-1):E,A=(0,l.useCallback)(e=>{let t=((e-1)%T+T)%T;O||D(t),o?.(t+1)},[O,o,T]),j=(0,l.useRef)(A);(0,l.useEffect)(()=>{j.current=A},[A]),(0,l.useEffect)(()=>{if(!r||T<=1)return;let e=window.setInterval(()=>{j.current(k+2)},r);return()=>window.clearInterval(e)},[r,T,k]);let M=w[k]??w[0],N=[`ds-hero`,`ds-hero--${e}`,`ds-hero--mode-${t}`,g].filter(Boolean).join(` `),P={...M.image&&e!==`split`?{backgroundImage:`url(${M.image})`}:null,...b},F={current:k+1,total:T,onChange:A};return(0,u.jsxs)(`div`,{className:N,style:P,...x,children:[e===`centered`&&(0,u.jsx)(_,{slide:M,pagination:F}),e===`bottom-left`&&(0,u.jsx)(v,{slide:M,pagination:F}),e===`split`&&(0,u.jsx)(y,{slide:M,pagination:F})]})},b.__docgenInfo={description:``,methods:[],displayName:`Hero`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'centered' | 'bottom-left' | 'split'`,elements:[{name:`literal`,value:`'centered'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'split'`}]},description:``,defaultValue:{value:`'centered'`,computed:!1}},mode:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'dark'`,computed:!1}},slides:{required:!1,tsType:{name:`Array`,elements:[{name:`HeroSlide`}],raw:`HeroSlide[]`},description:`Multiple slides — when provided the hero rotates through them.`},autoPlay:{required:!1,tsType:{name:`number`},description:`Auto-advance interval in ms. 0 disables auto-play.`,defaultValue:{value:`0`,computed:!1}},currentSlide:{required:!1,tsType:{name:`number`},description:`Controlled 1-based active slide index.`},totalSlides:{required:!1,tsType:{name:`number`},description:`Force pagination total when no slides[] is provided.`},onSlideChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Fired with the new 1-based index on every change.`},image:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`ReactNode`},description:``},subtitle:{required:!1,tsType:{name:`ReactNode`},description:``},brand:{required:!1,tsType:{name:`HeroBrandCard`},description:``},primaryAction:{required:!1,tsType:{name:`HeroAction`},description:``},secondaryAction:{required:!1,tsType:{name:`HeroAction`},description:``},status:{required:!1,tsType:{name:`HeroStatus`},description:``}},composes:[`Omit`]}})),S=e((()=>{})),C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{x(),s(),S(),C=r(),w={title:`Components/Hero (pierre-akhrass)`,component:b,parameters:{layout:`fullscreen`},argTypes:{variant:{control:`inline-radio`,options:[`centered`,`bottom-left`,`split`]},mode:{control:`inline-radio`,options:[`light`,`dark`]}},args:{image:o,title:`Title of the slide`,subtitle:`This subtitle is optional. It can be long or short, it can wrap to two, or even three lines if necessary.`,primaryAction:{label:`Button`},secondaryAction:{label:`Button`},totalSlides:5}},T=(e=`light`)=>t=>(0,C.jsx)(`div`,{className:`hero-story hero-story--${e}`,children:(0,C.jsx)(b,{...t})}),E={args:{variant:`centered`,mode:`dark`,brand:{logo:`LOGO`,text:`This text talks more about the brand, or context`,primary:{label:`Button`},secondary:{label:`Button`}}},render:T(`light`)},D={args:{...E.args,mode:`light`},render:T(`dark`)},O={args:{variant:`bottom-left`,mode:`dark`,secondaryAction:{label:`This is a link`}},render:T(`light`)},k={args:{...O.args,mode:`light`},render:T(`dark`)},A={args:{variant:`split`,mode:`dark`,secondaryAction:{label:`This is a link`},status:{text:`We Are Open Until 12:00 Am`,linkLabel:`How to get there`,linkHref:`#`}},render:T(`light`)},j={args:{...A.args,mode:`light`},render:T(`dark`)},M=[{image:o,title:`Slide One — Discover Dubai`,subtitle:`Vibrant waterfront destinations and luxury retail across the UAE.`,primaryAction:{label:`Explore`},secondaryAction:{label:`Learn more`}},{image:o,title:`Slide Two — Festival Plaza`,subtitle:`Community-focused shopping and entertainment in Jebel Ali.`,primaryAction:{label:`Visit`},secondaryAction:{label:`Directions`}},{image:o,title:`Slide Three — Al Badia Living`,subtitle:`Mixed-use residential community in Dubai Festival City.`,primaryAction:{label:`Tour homes`},secondaryAction:{label:`Brochure`}},{image:o,title:`Slide Four — Regional Reach`,subtitle:`Landmark projects across Saudi Arabia, Qatar and beyond.`,primaryAction:{label:`Our map`},secondaryAction:{label:`Press kit`}}],N={args:{variant:`bottom-left`,mode:`dark`,slides:M},render:T(`light`)},P={args:{variant:`centered`,mode:`dark`,slides:M.map(e=>({...e,brand:{logo:`LOGO`,text:`This text talks more about the brand.`,primary:{label:`Button`},secondary:{label:`Button`}}}))},render:T(`light`)},F={args:{variant:`bottom-left`,mode:`dark`,slides:M,autoPlay:3e3},render:T(`light`)},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    mode: 'dark',
    brand: {
      logo: 'LOGO',
      text: 'This text talks more about the brand, or context',
      primary: {
        label: 'Button'
      },
      secondary: {
        label: 'Button'
      }
    }
  },
  render: wrap('light')
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...CenteredDark.args,
    mode: 'light'
  },
  render: wrap('dark')
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bottom-left',
    mode: 'dark',
    secondaryAction: {
      label: 'This is a link'
    }
  },
  render: wrap('light')
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...BottomLeftDark.args,
    mode: 'light'
  },
  render: wrap('dark')
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'split',
    mode: 'dark',
    secondaryAction: {
      label: 'This is a link'
    },
    status: {
      text: 'We Are Open Until 12:00 Am',
      linkLabel: 'How to get there',
      linkHref: '#'
    }
  },
  render: wrap('light')
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...SplitDark.args,
    mode: 'light'
  },
  render: wrap('dark')
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bottom-left',
    mode: 'dark',
    slides: demoSlides
  },
  render: wrap('light')
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    mode: 'dark',
    slides: demoSlides.map(s => ({
      ...s,
      brand: {
        logo: 'LOGO',
        text: 'This text talks more about the brand.',
        primary: {
          label: 'Button'
        },
        secondary: {
          label: 'Button'
        }
      }
    }))
  },
  render: wrap('light')
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bottom-left',
    mode: 'dark',
    slides: demoSlides,
    autoPlay: 3000
  },
  render: wrap('light')
}`,...F.parameters?.docs?.source}}},I=[`CenteredDark`,`CenteredLight`,`BottomLeftDark`,`BottomLeftLight`,`SplitDark`,`SplitLight`,`SliderBottomLeft`,`SliderCentered`,`SliderAutoPlay`]}))();export{O as BottomLeftDark,k as BottomLeftLight,E as CenteredDark,D as CenteredLight,F as SliderAutoPlay,N as SliderBottomLeft,P as SliderCentered,A as SplitDark,j as SplitLight,I as __namedExportsOrder,w as default};