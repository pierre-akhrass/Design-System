import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Brs2brnf.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./Button-BNQrBnNs.js";import{t as a}from"./Button-leIIfXrT.js";import{n as o,r as s,t as c}from"./Dropdown-CXQgfd7w.js";import{t as l}from"./NavItem-DdFzjoJp.js";import{t as u}from"./NavItem-sby2edNr.js";import{a as d,i as f,o as p,s as m,t as h}from"./Sidebar-DxWYuVDa.js";var g=e((()=>{})),_=e((()=>{m()})),v,y,b=e((()=>{v=r(),y=({width:e=24,height:t=24,...n})=>(0,v.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:t,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,...n,children:(0,v.jsx)(`path`,{d:`M20.0307 9.53068L12.5307 17.0307C12.461 17.1004 12.3783 17.1557 12.2873 17.1935C12.1962 17.2312 12.0986 17.2506 12.0001 17.2506C11.9015 17.2506 11.8039 17.2312 11.7128 17.1935C11.6218 17.1557 11.5391 17.1004 11.4694 17.0307L3.96943 9.53068C3.8287 9.38995 3.74963 9.19907 3.74963 9.00005C3.74963 8.80103 3.8287 8.61016 3.96943 8.46943C4.11016 8.32869 4.30103 8.24963 4.50005 8.24963C4.69907 8.24963 4.88995 8.32869 5.03068 8.46943L12.0001 15.4397L18.9694 8.46943C19.0391 8.39974 19.1218 8.34447 19.2129 8.30676C19.3039 8.26904 19.4015 8.24963 19.5001 8.24963C19.5986 8.24963 19.6962 8.26904 19.7872 8.30676C19.8783 8.34447 19.961 8.39974 20.0307 8.46943C20.1004 8.53911 20.1556 8.62183 20.1933 8.71288C20.2311 8.80392 20.2505 8.9015 20.2505 9.00005C20.2505 9.0986 20.2311 9.19618 20.1933 9.28722C20.1556 9.37827 20.1004 9.46099 20.0307 9.53068Z`,fill:`currentColor`})}),y.__docgenInfo={description:`Shared chevron-down glyph used for dropdown / expandable indicators across
the Navbar (NavbarMenu trigger) and Sidebar (SidebarItem group trigger).

Source: src/assets/chevron-down.svg. Inlined here so consumers can:
  - drive color via \`currentColor\` (no extra theming wiring needed),
  - apply a CSS transform for the open/closed rotation.`,methods:[],displayName:`ChevronDownIcon`,props:{width:{defaultValue:{value:`24`,computed:!1},required:!1},height:{defaultValue:{value:`24`,computed:!1},required:!1}}}})),x,S,C,w,T=e((()=>{x=t(n(),1),u(),s(),a(),b(),S=r(),C=(e,t,n)=>e.kind===`divider`?(0,S.jsx)(o,{},`divider-${t}`):e.kind===`custom`?(0,S.jsx)(`span`,{children:e.node},`custom-${t}`):e.kind===`button`?(0,S.jsx)(i,{variant:e.variant??`filled`,icon:e.icon,iconOnly:e.iconOnly,onClick:e.onClick,children:e.label},`button-${t}`):(0,S.jsx)(l,{orientation:`vertical`,hierarchy:e.hierarchy??`tier-2`,colorMode:n,label:e.label,href:e.href??`#`,iconLeft:e.iconLeft,iconRight:e.iconRight,selected:e.selected,onClick:e.onClick},`item-${t}`),w=({label:e,iconLeft:t,iconRight:n,selected:r,colorMode:i=`dark`,dropdownColorMode:a,rows:o,children:s,openOnHover:u=!0,triggerProps:d})=>{let[f,p]=(0,x.useState)(!1),m=(0,x.useRef)(null),h=(0,x.useId)(),g=(0,x.useCallback)(()=>p(!1),[]);(0,x.useEffect)(()=>{if(!f)return;let e=e=>{m.current?.contains(e.target)||g()},t=e=>{e.key===`Escape`&&g()};return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[f,g]);let _=()=>u&&p(!0),v=()=>u&&p(!1),b=a??i,w=n??(0,S.jsx)(y,{width:16,height:16,style:{transition:`transform 0.15s ease`,transform:f?`rotate(180deg)`:`rotate(0deg)`}});return(0,S.jsxs)(`div`,{ref:m,className:`ds-navbar__menu`,onMouseEnter:_,onMouseLeave:v,children:[(0,S.jsx)(l,{...d,orientation:`horizontal`,colorMode:i,label:e,iconLeft:t,iconRight:w,selected:r,href:d?.href??`#`,"aria-haspopup":`menu`,"aria-expanded":f,"aria-controls":h,onClick:e=>{e.preventDefault(),p(e=>!e),d?.onClick?.(e)}}),f&&(0,S.jsx)(`div`,{className:`ds-navbar__menu-panel`,id:h,children:(0,S.jsx)(c,{colorMode:b,children:o?o.map((e,t)=>C(e,t,b)):s})})]})},w.__docgenInfo={description:"A Navbar entry that opens a Dropdown panel. Use as a drop-in replacement\nfor a `NavItem` inside `<Navbar>` when the link needs sub-links.\n\nPass `rows` for a declarative API that exposes every Dropdown variant\n(items, dividers, buttons, custom nodes). Or pass `children` for full\nmanual control.",methods:[],displayName:`NavbarMenu`,props:{label:{required:!0,tsType:{name:`ReactNode`},description:``},iconLeft:{required:!1,tsType:{name:`ReactNode`},description:``},iconRight:{required:!1,tsType:{name:`ReactNode`},description:``},selected:{required:!1,tsType:{name:`boolean`},description:``},colorMode:{required:!1,tsType:{name:`NavItemProps['colorMode']`,raw:`NavItemProps['colorMode']`},description:``,defaultValue:{value:`'dark'`,computed:!1}},dropdownColorMode:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``},rows:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| {
    kind: 'item'
    label: ReactNode
    href?: string
    iconLeft?: ReactNode
    iconRight?: ReactNode
    selected?: boolean
    hierarchy?: NavItemProps['hierarchy']
    onClick?: NavItemProps['onClick']
  }
| { kind: 'divider' }
| {
    kind: 'button'
    label: ReactNode
    variant?: ButtonVariant
    icon?: ReactNode
    iconOnly?: boolean
    onClick?: () => void
  }
| { kind: 'custom'; node: ReactNode }`,elements:[{name:`signature`,type:`object`,raw:`{
  kind: 'item'
  label: ReactNode
  href?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  selected?: boolean
  hierarchy?: NavItemProps['hierarchy']
  onClick?: NavItemProps['onClick']
}`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'item'`,required:!0}},{key:`label`,value:{name:`ReactNode`,required:!0}},{key:`href`,value:{name:`string`,required:!1}},{key:`iconLeft`,value:{name:`ReactNode`,required:!1}},{key:`iconRight`,value:{name:`ReactNode`,required:!1}},{key:`selected`,value:{name:`boolean`,required:!1}},{key:`hierarchy`,value:{name:`NavItemProps['hierarchy']`,raw:`NavItemProps['hierarchy']`,required:!1}},{key:`onClick`,value:{name:`NavItemProps['onClick']`,raw:`NavItemProps['onClick']`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ kind: 'divider' }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'divider'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  kind: 'button'
  label: ReactNode
  variant?: ButtonVariant
  icon?: ReactNode
  iconOnly?: boolean
  onClick?: () => void
}`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'button'`,required:!0}},{key:`label`,value:{name:`ReactNode`,required:!0}},{key:`variant`,value:{name:`union`,raw:`'filled' | 'outlined' | 'plain'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'plain'`}],required:!1}},{key:`icon`,value:{name:`ReactNode`,required:!1}},{key:`iconOnly`,value:{name:`boolean`,required:!1}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1}}]}},{name:`signature`,type:`object`,raw:`{ kind: 'custom'; node: ReactNode }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'custom'`,required:!0}},{key:`node`,value:{name:`ReactNode`,required:!0}}]}}]}],raw:`NavbarMenuRow[]`},description:`Declarative rows — supports every Dropdown variant.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Escape hatch: raw children rendered inside the Dropdown.`},openOnHover:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},triggerProps:{required:!1,tsType:{name:`Partial`,elements:[{name:`NavItemProps`}],raw:`Partial<NavItemProps>`},description:``}}}})),E,D,O,k,A,j,M,N,P,F=e((()=>{E=t(n(),1),g(),u(),_(),T(),D=r(),O=()=>(0,D.jsx)(`svg`,{"aria-hidden":`true`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:(0,D.jsx)(`path`,{d:`M3 6h18M3 12h18M3 18h18`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})}),k=()=>(0,D.jsx)(`svg`,{"aria-hidden":`true`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:(0,D.jsx)(`path`,{d:`M6 6l12 12M6 18L18 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})}),A=e=>{if(e==null||e===!1)return null;if(typeof e==`string`)return(0,D.jsx)(`img`,{src:e,alt:`Logo`,className:`ds-navbar__logo-img`});if(typeof e==`object`&&e&&!(0,E.isValidElement)(e)&&`src`in e&&typeof e.src==`string`){let{src:t,alt:n=`Logo`,href:r,height:i=32,width:a}=e,o=(0,D.jsx)(`img`,{src:t,alt:n,height:i,width:a,className:`ds-navbar__logo-img`});return r?(0,D.jsx)(`a`,{href:r,className:`ds-navbar__logo-link`,"aria-label":n,children:o}):o}return e},j=e=>Array.isArray(e)&&e.every(e=>typeof e==`object`&&!!e&&!(0,E.isValidElement)(e)),M=(e,t,n)=>e.map((e,r)=>{let i=e.key??(typeof e.label==`string`?`${e.label}-${r}`:`action-${r}`),a=e.external?{target:`_blank`,rel:`noopener noreferrer`}:null;return e.label?(0,D.jsx)(l,{orientation:n,hierarchy:n===`vertical`?`tier-2`:`tier-1`,colorMode:t,label:e.label,href:e.href??`#`,iconLeft:e.iconLeft,iconRight:e.iconRight,selected:e.selected,onClick:e.onClick,"aria-label":e.ariaLabel,...a},i):(0,D.jsx)(`a`,{className:`ds-navbar__action-link`,href:e.href??`#`,"aria-label":e.ariaLabel,"aria-current":e.selected?`page`:void 0,onClick:e.onClick,...a,children:e.iconLeft??e.iconRight},i)}),N=(e,t)=>{if(!(0,E.isValidElement)(e))return e;if(e.type===w){let n=e.props,r=n.rows?n.rows.map((e,t)=>e.kind===`item`?(0,D.jsx)(d,{label:e.label,href:e.href??`#`,iconLeft:e.iconLeft,iconRight:e.iconRight,selected:e.selected,onClick:e.onClick},`row-${t}`):e.kind===`button`?(0,D.jsx)(d,{label:e.label,href:`#`,onClick:t=>{t.preventDefault(),e.onClick?.()}},`row-${t}`):e.kind===`custom`?(0,D.jsx)(`span`,{children:e.node},`row-${t}`):null).filter(Boolean):n.children;return(0,D.jsx)(f,{label:n.label,iconLeft:n.iconLeft,selected:n.selected,children:r},t)}if(e.type===l){let n=e.props;return(0,D.jsx)(p,{label:n.label,iconLeft:n.iconLeft,iconRight:n.iconRight,selected:n.selected,href:n.href,onClick:n.onClick},t)}return e},P=({logo:e,children:t,actions:n,ariaLabel:r=`Primary`,colorMode:i=`dark`,burgerAriaLabel:a=`Toggle navigation menu`,mobileMenu:o,mobileDrawerSide:s=`right`,className:c,...l})=>{let[u,d]=(0,E.useState)(!1),f=(0,E.useId)(),p=(0,E.useId)(),m=(0,E.useCallback)(()=>d(!1),[]),g=(0,E.useMemo)(()=>A(e),[e]),{actionsBarNode:_,actionsDrawerFooter:v,hasActions:y}=(0,E.useMemo)(()=>j(n)?{actionsBarNode:M(n,i,`horizontal`),actionsDrawerFooter:n,hasActions:n.length>0}:{actionsBarNode:n,actionsDrawerFooter:n,hasActions:!!n},[n,i]);(0,E.useEffect)(()=>{if(!u)return;let e=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=e}},[u]),(0,E.useEffect)(()=>{if(!u)return;let e=e=>{e.key===`Escape`&&m()};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[u,m]);let b=(0,E.useMemo)(()=>{let e=E.Children.map(t,(e,t)=>N(e,t));return(0,D.jsx)(h,{colorMode:i,logo:g,footer:y?v:void 0,ariaLabel:`Mobile navigation`,children:e})},[t,v,y,g,i]),x=o??b,S=e=>{e.defaultPrevented||e.target.closest(`a.ds-nav-item`)&&m()};return(0,D.jsxs)(`nav`,{className:[`ds-navbar`,`ds-navbar--mode-${i}`,u?`ds-navbar--mobile-open`:null,`ds-navbar--drawer-${s}`,c].filter(Boolean).join(` `),"aria-label":r,...l,children:[(0,D.jsxs)(`div`,{className:`ds-navbar__bar`,children:[g&&(0,D.jsx)(`div`,{className:`ds-navbar__logo`,children:g}),(0,D.jsx)(`div`,{className:`ds-navbar__items`,id:f,role:`menubar`,children:t}),y&&(0,D.jsx)(`div`,{className:`ds-navbar__actions`,children:_}),(0,D.jsx)(`button`,{type:`button`,className:`ds-navbar__burger`,"aria-label":a,"aria-expanded":u,"aria-controls":p,onClick:()=>d(e=>!e),children:u?(0,D.jsx)(k,{}):(0,D.jsx)(O,{})})]}),(0,D.jsx)(`div`,{className:`ds-navbar__backdrop`,"aria-hidden":`true`,onClick:m}),(0,D.jsx)(`div`,{id:p,className:`ds-navbar__mobile-drawer`,role:`dialog`,"aria-modal":`true`,"aria-label":`Mobile navigation`,"aria-hidden":!u,onClick:S,children:x})]})},P.__docgenInfo={description:``,methods:[],displayName:`Navbar`,props:{logo:{required:!1,tsType:{name:`union`,raw:`ReactNode | NavbarLogoConfig | string`,elements:[{name:`ReactNode`},{name:`NavbarLogoConfig`},{name:`string`}]},description:"Brand mark. Accepts:\n  - a `ReactNode`  (full control, e.g. inline SVG + text)\n  - a `string`     (treated as a dynamic image src)\n  - a `NavbarLogoConfig` object (`{ src, alt?, href?, height?, width? }`)"},children:{required:!1,tsType:{name:`ReactNode`},description:"Center-aligned navigation content (e.g. `NavItem`s, `NavbarMenu`s)."},actions:{required:!1,tsType:{name:`union`,raw:`ReactNode | NavbarActionLink[]`,elements:[{name:`ReactNode`},{name:`Array`,elements:[{name:`NavbarActionLink`}],raw:`NavbarActionLink[]`}]},description:"Right-aligned content. Accepts either:\n  - a `ReactNode` — full control (icons, account, search, etc.).\n  - a `NavbarActionLink[]` — declarative, dynamic list of links rendered\n    automatically as `NavItem`s in the bar and the mobile drawer."},ariaLabel:{required:!1,tsType:{name:`string`},description:"Accessible label for the `<nav>` landmark.",defaultValue:{value:`'Primary'`,computed:!1}},colorMode:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:"Light or dark surface. Defaults to `dark`.",defaultValue:{value:`'dark'`,computed:!1}},burgerAriaLabel:{required:!1,tsType:{name:`string`},description:`Override the burger button's accessible label.`,defaultValue:{value:`'Toggle navigation menu'`,computed:!1}},mobileMenu:{required:!1,tsType:{name:`ReactNode`},description:"Optional custom drawer content for mobile. When omitted, an internal\nSidebar is auto-derived from `children` + `actions` so the mobile drawer\nmirrors the desktop bar with no data duplication."},mobileDrawerSide:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:"Side the mobile drawer slides in from. Defaults to `'right'`.",defaultValue:{value:`'right'`,computed:!1}}},composes:[`HTMLAttributes`]}})),I=e((()=>{F(),T()})),L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{I(),u(),L=r(),R=()=>(0,L.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`14`,height:`14`,children:(0,L.jsx)(`path`,{d:`M6 9l6 6 6-6`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),z=()=>(0,L.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,L.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`})}),B=()=>(0,L.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,L.jsx)(`path`,{d:`M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2z`}),(0,L.jsx)(`path`,{d:`M9 3v16M15 5v16`})]}),V=()=>(0,L.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,L.jsx)(`circle`,{cx:`11`,cy:`11`,r:`7`}),(0,L.jsx)(`path`,{d:`m20 20-3.5-3.5`,strokeLinecap:`round`})]}),H=()=>(0,L.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,L.jsx)(`path`,{d:`M4 22V4M4 4h13l-2 4 2 4H4`,strokeLinejoin:`round`,strokeLinecap:`round`})}),U=()=>(0,L.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,L.jsx)(`path`,{d:`M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,L.jsx)(`path`,{d:`M10 21a2 2 0 0 0 4 0`,strokeLinecap:`round`})]}),W=()=>(0,L.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,"aria-hidden":`true`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,L.jsx)(`path`,{d:`m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`,strokeLinejoin:`round`})}),G={flag:(0,L.jsx)(H,{}),bell:(0,L.jsx)(U,{}),search:(0,L.jsx)(V,{}),star:(0,L.jsx)(W,{}),circle:(0,L.jsx)(z,{}),map:(0,L.jsx)(B,{})},K={title:`Navigation/Navbar (pierre-akhrass, sereneogilvy)`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"## Navbar\n\nA responsive primary navigation surface — logo on the left, menu items in the\nmiddle, action **links** on the right. On mobile (≤ 768 px) the items + actions\ncollapse behind a **burger menu** and re-render inside a real `<Sidebar>` slide-in\ndrawer (same component, same data — no duplication).\n\n### Anatomy\n- **Logo** (`logo`) — left-aligned brand mark. Polymorphic:\n  - `ReactNode` (full control, e.g. inline SVG + text)\n  - `string` (treated as a dynamic image `src`)\n  - `NavbarLogoConfig` object — `{ src, alt?, href?, height?, width? }`\n- **Items** (`children`) — center menubar of `NavItem` and/or `NavbarMenu` (dropdown) entries.\n- **Actions** (`actions`) — right-aligned **links**. Polymorphic:\n  - `ReactNode` — full control (icons, account chip, etc.).\n  - `NavbarActionLink[]` — declarative, dynamic list rendered automatically.\n    - **Icon-only** entries (no `label`) render as a bare `<a>` wrapping\n      the icon — same centered-icon-row look as the standalone Sidebar's footer.\n    - **Labeled** entries render as full `NavItem` chrome (icon + text).\n- **Burger** — auto-rendered toggle button visible only on mobile.\n\n### Dynamic actions\n\nThe `actions` prop accepts a config array so consumers can add / remove / reorder\nlinks at runtime (e.g. from a CMS, auth state, or feature flags) without writing\nany JSX:\n\n```tsx\n<Navbar\n  colorMode=\"dark\"\n  logo={{ src: '/brand.svg', alt: 'Acme', href: '/' }}\n  actions={[\n    // Icon-only (bare <a>) — matches the Sidebar footer look.\n    { href: '/inbox',  iconLeft: <BellIcon />,   ariaLabel: 'Notifications' },\n    { href: '/map',    iconLeft: <MapIcon />,    ariaLabel: 'Locations' },\n    { href: '/search', iconLeft: <SearchIcon />, ariaLabel: 'Search' },\n    // Add a `label` to render as a labeled NavItem instead.\n    // { label: 'Sign in', href: '/login' },\n  ]}\n>\n  {/* ...nav items... */}\n</Navbar>\n```\n\nEach entry supports: `label`, `href`, `iconLeft`, `iconRight`, `selected`,\n`onClick`, `external`, `ariaLabel`, `key`.\n\n> **Playground note.** In the Storybook controls panel, icons are referenced by\n> a string key (`'flag' | 'bell' | 'search' | 'star' | 'circle' | 'map'`)\n> instead of a React node so the args stay JSON-serialisable. The story render\n> fn swaps each key for the matching SVG. In real code you'd pass the SVG\n> (or icon component) directly as `iconLeft`.\n\n### Mobile drawer\nOn viewports ≤ 768 px the burger toggle reveals a slide-in drawer that is a\nreal `<Sidebar>` component, auto-derived from the navbar's own `children`\nand `actions` — so there's only one source of truth for the navigation data.\nThe same `NavbarActionLink[]` is forwarded straight through to\n`Sidebar.footer` (the two interfaces are structurally identical), which\nmeans icon-only actions get the Sidebar's bare-anchor icon row in the drawer\ntoo. Pass a custom `mobileMenu` node to override.\n### Theming\nAll colors come from the slate token set defined in\n`src/styles/tokens/_variables.scss` (e.g.\n`$mapping-system-slate-background-secondary`,\n`$mapping-system-slate-text-on-primary`,\n`$mapping-system-focus-border-secondary`). No hardcoded color values — swap\nthe token layer to retheme the component (and the Navbar's mobile drawer).\n### Responsive behavior\n| Viewport         | Layout                                                                                  |\n| ---------------- | --------------------------------------------------------------------------------------- |\n| ≥ 1025 px        | Inline: logo · items · actions, full container padding.                                 |\n| 769 – 1024 px    | Inline with tighter padding and action spacing.                                         |\n| ≤ 768 px         | Burger menu: items + actions hidden; toggle reveals them stacked below the bar.         |\n\n### Accessibility\n- Renders inside a `<nav>` landmark with a localizable `aria-label` (default `\"Primary\"`).\n- The items wrapper has `role=\"menubar\"`.\n- The burger button exposes `aria-expanded` and `aria-controls`.\n- `NavbarMenu` triggers expose `aria-haspopup=\"menu\"` + `aria-expanded`.\n- The mobile drawer is a `role=\"dialog\"` with `aria-modal=\"true\"`.\n- Action links with no visible label must set `ariaLabel`."}}}},q={parameters:{docs:{description:{story:"Interactive playground. Edit the **links** array to change the center menubar, and the **actions** array to change the right-side links. Each action defaults to **icon-only** with a dummy `href` you can edit in the Controls panel to wire it to a real route. Add a `label` to any entry to render text next to the icon. Resize the Storybook viewport below ~768 px to see the burger menu."}}},args:{colorMode:`dark`,logoSrc:`/favicon.svg`,links:[{type:`dropdown`,label:`Products`,rows:[{kind:`item`,label:`Overview`},{kind:`item`,label:`Features`},{kind:`item`,label:`Integrations`},{kind:`divider`},{kind:`item`,label:`Changelog`},{kind:`button`,label:`Get a demo`,variant:`filled`}]},{type:`dropdown`,label:`Solutions`,rows:[{kind:`item`,label:`For Teams`},{kind:`item`,label:`For Enterprise`},{kind:`item`,label:`For Startups`},{kind:`divider`},{kind:`button`,label:`Compare plans`,variant:`outlined`},{kind:`button`,label:`Talk to sales`,variant:`plain`}]},{type:`navItem`,label:`Community`,selected:!0},{type:`navItem`,label:`Resources`},{type:`navItem`,label:`Pricing`},{type:`navItem`,label:`Contact`}],actions:[{href:`#reports`,icon:`flag`,ariaLabel:`Reports`},{href:`#notifications`,icon:`bell`,ariaLabel:`Notifications`},{href:`#search`,icon:`search`,ariaLabel:`Search`}]},argTypes:{colorMode:{control:`inline-radio`,options:[`light`,`dark`]},logoSrc:{control:`text`,description:"Logo image URL (passed straight to the Navbar `logo` prop)."},links:{control:`object`,description:`Each entry is either { type: "navItem", label } (renders a NavItem — no chevron) or { type: "dropdown", label, dropdownColorMode?, rows } (renders a NavbarMenu trigger + Dropdown — chevron shown automatically). Rows mirror Dropdown variants: { kind: "item" | "divider" | "button" | "custom", ... }.`},actions:{control:`object`,description:'Dynamic, user-editable list of action links rendered on the right of the navbar. Each entry: { label?, href?, icon?: "flag" | "bell" | "search" | "star" | "circle" | "map", selected?, external?, ariaLabel? }. Add / remove entries to add or remove links. Set `label` to "" + provide `ariaLabel` for icon-only. Set the whole array to `[]` to hide the actions slot.'}},render:({colorMode:e,links:t,actions:n,logoSrc:r})=>{let i=n.map((e,t)=>{let n=e.icon?G[e.icon]:void 0;return{key:t,label:e.label,href:e.href??`#`,iconLeft:n,selected:e.selected,external:e.external,ariaLabel:e.ariaLabel??(e.label?void 0:e.icon)}});return(0,L.jsx)(P,{colorMode:e,logo:r||void 0,actions:i,children:t.map((t,n)=>t.type===`dropdown`?(0,L.jsx)(w,{label:t.label,colorMode:e,dropdownColorMode:t.dropdownColorMode??e,iconRight:(0,L.jsx)(R,{}),rows:t.rows},`${t.label}-${n}`):(0,L.jsx)(l,{orientation:`horizontal`,colorMode:e,label:t.label,selected:t.selected},`${t.label}-${n}`))})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground. Edit the **links** array to change the center menubar, and the **actions** array to change the right-side links. Each action defaults to **icon-only** with a dummy \`href\` you can edit in the Controls panel to wire it to a real route. Add a \`label\` to any entry to render text next to the icon. Resize the Storybook viewport below ~768 px to see the burger menu.'
      }
    }
  },
  args: {
    colorMode: 'dark',
    logoSrc: '/favicon.svg',
    links: [{
      type: 'dropdown',
      label: 'Products',
      rows: [{
        kind: 'item',
        label: 'Overview'
      }, {
        kind: 'item',
        label: 'Features'
      }, {
        kind: 'item',
        label: 'Integrations'
      }, {
        kind: 'divider'
      }, {
        kind: 'item',
        label: 'Changelog'
      }, {
        kind: 'button',
        label: 'Get a demo',
        variant: 'filled'
      }]
    }, {
      type: 'dropdown',
      label: 'Solutions',
      rows: [{
        kind: 'item',
        label: 'For Teams'
      }, {
        kind: 'item',
        label: 'For Enterprise'
      }, {
        kind: 'item',
        label: 'For Startups'
      }, {
        kind: 'divider'
      }, {
        kind: 'button',
        label: 'Compare plans',
        variant: 'outlined'
      }, {
        kind: 'button',
        label: 'Talk to sales',
        variant: 'plain'
      }]
    }, {
      type: 'navItem',
      label: 'Community',
      selected: true
    }, {
      type: 'navItem',
      label: 'Resources'
    }, {
      type: 'navItem',
      label: 'Pricing'
    }, {
      type: 'navItem',
      label: 'Contact'
    }],
    // ⬇️  Icon-only action links with dummy \`href\`s. Edit \`href\` on any entry
    //     in the Storybook Controls panel to wire it to a real route. Add a
    //     \`label\` if you want a text label next to the icon.
    //     The icons + dummy links here are intentionally identical to the
    //     Sidebar story so the navbar bar, the mobile drawer footer (which
    //     is a real <Sidebar>), and the standalone Sidebar component all
    //     render the exact same icon row.
    actions: [{
      href: '#reports',
      icon: 'flag',
      ariaLabel: 'Reports'
    }, {
      href: '#notifications',
      icon: 'bell',
      ariaLabel: 'Notifications'
    }, {
      href: '#search',
      icon: 'search',
      ariaLabel: 'Search'
    }]
  },
  argTypes: {
    colorMode: {
      control: 'inline-radio',
      options: ['light', 'dark']
    },
    logoSrc: {
      control: 'text',
      description: 'Logo image URL (passed straight to the Navbar \`logo\` prop).'
    },
    links: {
      control: 'object',
      description: 'Each entry is either { type: "navItem", label } (renders a NavItem — no chevron) ' + 'or { type: "dropdown", label, dropdownColorMode?, rows } (renders a NavbarMenu trigger + ' + 'Dropdown — chevron shown automatically). Rows mirror Dropdown variants: ' + '{ kind: "item" | "divider" | "button" | "custom", ... }.'
    },
    actions: {
      control: 'object',
      description: 'Dynamic, user-editable list of action links rendered on the right of the navbar. ' + 'Each entry: { label?, href?, icon?: "flag" | "bell" | "search" | "star" | "circle" | "map", selected?, external?, ariaLabel? }. ' + 'Add / remove entries to add or remove links. Set \`label\` to "" + provide \`ariaLabel\` for icon-only. ' + 'Set the whole array to \`[]\` to hide the actions slot.'
    }
  },
  render: ({
    colorMode,
    links,
    actions,
    logoSrc
  }) => {
    // Resolve each editable action entry into a real NavbarActionLink by
    // swapping the string \`icon\` key for the matching SVG ReactNode from the
    // ICONS registry. Icons WITHOUT a matching key are silently dropped so a
    // typo doesn't crash the preview.
    const resolvedActions: NavbarActionLink[] = actions.map((a, i) => {
      const iconNode: ReactNode | undefined = a.icon ? ICONS[a.icon] : undefined;
      return {
        key: i,
        label: a.label,
        href: a.href ?? '#',
        iconLeft: iconNode,
        selected: a.selected,
        external: a.external,
        ariaLabel: a.ariaLabel ?? (a.label ? undefined : a.icon)
      };
    });
    return <Navbar colorMode={colorMode} logo={logoSrc || undefined} actions={resolvedActions}>
        {links.map((entry, i) => {
        if (entry.type === 'dropdown') {
          return <NavbarMenu key={\`\${entry.label}-\${i}\`} label={entry.label} colorMode={colorMode} dropdownColorMode={entry.dropdownColorMode ?? colorMode} iconRight={<Chevron />} rows={entry.rows} />;
        }
        return <NavItem key={\`\${entry.label}-\${i}\`} orientation="horizontal" colorMode={colorMode} label={entry.label} selected={entry.selected} />;
      })}
      </Navbar>;
  }
}`,...q.parameters?.docs?.source}}},J=[`Playground`]}))();export{q as Playground,J as __namedExportsOrder,K as default};