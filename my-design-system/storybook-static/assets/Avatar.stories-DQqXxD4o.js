import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n=e((()=>{})),r,i,a=e((()=>{n(),r=t(),i=({type:e=`initial`,size:t=`medium`,initials:n=`A`,src:i,alt:a=``,icon:o,theme:s,className:c,...l})=>(0,r.jsxs)(`div`,{className:[`ds-avatar`,`ds-avatar--${t}`,`ds-avatar--${e}`,s&&`ds-avatar--${s}`,c].filter(Boolean).join(` `),...l,children:[e===`initial`&&(0,r.jsx)(`span`,{className:`ds-avatar__initials`,children:n}),e===`image`&&(0,r.jsx)(`img`,{className:`ds-avatar__image`,src:i,alt:a}),e===`shape`&&(0,r.jsx)(`span`,{className:`ds-avatar__shape`,children:o})]}),i.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{type:{required:!1,tsType:{name:`union`,raw:`'initial' | 'image' | 'shape'`,elements:[{name:`literal`,value:`'initial'`},{name:`literal`,value:`'image'`},{name:`literal`,value:`'shape'`}]},description:``,defaultValue:{value:`'initial'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'`,elements:[{name:`literal`,value:`'xsmall'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`},{name:`literal`,value:`'xlarge'`}]},description:``,defaultValue:{value:`'medium'`,computed:!1}},initials:{required:!1,tsType:{name:`string`},description:`Single character only (e.g. "A"). Multiple characters will overflow.`,defaultValue:{value:`'A'`,computed:!1}},src:{required:!1,tsType:{name:`string`},description:`Image URL — used when type="image"`},alt:{required:!1,tsType:{name:`string`},description:`Alt text for the image — used when type="image"`,defaultValue:{value:`''`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:`SVG or icon node — used when type="shape". Should use fill="currentColor".`},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:`Color theme — light uses surface palette, dark uses background palette`}},composes:[`HTMLAttributes`]}})),o,s,c=e((()=>{o=t(),s=({spacing:e=`overlap`,overflowCount:t,showOverflow:n=!1,theme:r,children:i,className:a,...s})=>(0,o.jsxs)(`div`,{className:[`ds-avatar-group`,`ds-avatar-group--${e}`,r&&`ds-avatar-group--${r}`,a].filter(Boolean).join(` `),...s,children:[(0,o.jsx)(`div`,{className:`ds-avatar-group__avatars`,children:i}),n&&t!==void 0&&(0,o.jsxs)(`div`,{className:`ds-avatar-group__overflow`,"aria-hidden":`true`,children:[`+`,t]})]}),s.__docgenInfo={description:``,methods:[],displayName:`AvatarGroup`,props:{spacing:{required:!1,tsType:{name:`union`,raw:`'overlap' | 'spaced'`,elements:[{name:`literal`,value:`'overlap'`},{name:`literal`,value:`'spaced'`}]},description:``,defaultValue:{value:`'overlap'`,computed:!1}},overflowCount:{required:!1,tsType:{name:`number`},description:`Number shown in the overflow badge`},showOverflow:{required:!1,tsType:{name:`boolean`},description:`Whether to render the overflow badge`,defaultValue:{value:`false`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:`Color theme`},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]}})),l,u,d=e((()=>{l=t(),u=({avatar:e,title:t,description:n,theme:r,className:i,...a})=>(0,l.jsxs)(`div`,{className:[`ds-avatar-block`,r&&`ds-avatar-block--${r}`,i].filter(Boolean).join(` `),...a,children:[e,(0,l.jsxs)(`div`,{className:`ds-avatar-block__info`,children:[(0,l.jsx)(`span`,{className:`ds-avatar-block__title`,children:t}),n&&(0,l.jsx)(`span`,{className:`ds-avatar-block__description`,children:n})]})]}),u.__docgenInfo={description:``,methods:[],displayName:`AvatarBlock`,props:{avatar:{required:!0,tsType:{name:`ReactNode`},description:`An Avatar component instance`},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:`Color theme`}},composes:[`HTMLAttributes`]}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{a(),c(),d(),f=t(),p=()=>(0,f.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`60%`,height:`60%`,fill:`currentColor`,children:(0,f.jsx)(`path`,{d:`M12 12c2.69 0 4.8-2.11 4.8-4.8S14.69 2.4 12 2.4 7.2 4.51 7.2 7.2 9.31 12 12 12zm0 2.4c-3.2 0-9.6 1.61-9.6 4.8v2.4h19.2v-2.4c0-3.19-6.4-4.8-9.6-4.8z`})}),m=`#f5f7fa`,h=`#141f2e`,g=[`https://i.pravatar.cc/150?img=1`,`https://i.pravatar.cc/150?img=2`,`https://i.pravatar.cc/150?img=3`],_={title:`Components/Avatar`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`
An **Avatar** represents a user or entity through one of three types: \`initial\` (letter monogram), \`image\` (photo), or \`shape\` (icon placeholder).

---

### Sub-components

| Component | Purpose |
|---|---|
| \`Avatar\` | Single avatar circle |
| \`AvatarGroup\` | Row of avatars with optional overflow badge |
| \`AvatarBlock\` | Avatar + title + description row |

---

### Theming

Pass \`theme="dark"\` to any of the three components for the dark-mode palette. They also respond automatically to \`prefers-color-scheme: dark\` when no theme prop is set.
        `}}},args:{type:`initial`,size:`medium`,initials:`A`,theme:`light`},argTypes:{type:{control:`inline-radio`,options:[`initial`,`image`,`shape`],description:`Visual representation style.`,table:{category:`Avatar`}},size:{control:`inline-radio`,options:[`xsmall`,`small`,`medium`,`large`,`xlarge`],description:`Diameter of the avatar circle.`,table:{category:`Avatar`}},theme:{control:`inline-radio`,options:[`light`,`dark`],description:`Color theme — shared across Avatar, Avatar Group, and Avatar Block.`,table:{category:`Avatar`}},initials:{control:`text`,description:'Letter(s) shown when `type="initial"`.',table:{category:`Avatar`}},src:{control:`text`,description:'Image URL shown when `type="image"`.',table:{category:`Avatar`}},alt:{control:`text`,description:`Accessible label for the image.`,table:{category:`Avatar`}},icon:{control:!1,description:'React node rendered inside the circle when `type="shape"`.',table:{category:`Avatar`}},spacing:{control:`inline-radio`,options:[`overlap`,`spaced`],description:`Overlap stacks avatars with a negative margin; spaced uses a gap.`,table:{category:`Avatar Group`}},showOverflow:{control:`boolean`,description:`Whether to render the overflow count badge.`,table:{category:`Avatar Group`}},overflowCount:{control:`number`,description:`Number displayed inside the overflow badge.`,table:{category:`Avatar Group`}},title:{control:`text`,description:`Primary text label next to the avatar.`,table:{category:`Avatar Block`}},description:{control:`text`,description:`Secondary/supporting text below the title.`,table:{category:`Avatar Block`}}}},v=[`xsmall`,`small`,`medium`,`large`,`xlarge`],y=[`initial`,`image`,`shape`],b={name:`Playground`,tags:[`!autodocs`],args:{spacing:`overlap`,showOverflow:!0,overflowCount:5,title:`Jane Doe`,description:`Product Designer`},render:e=>{let t=e.theme===`dark`,n=t?h:m,r=e,a=e.type===`image`?{src:e.src||g[0],alt:e.alt||`User`}:e.type===`shape`?{icon:(0,f.jsx)(p,{})}:{},o=r.spacing??`overlap`,c=r.showOverflow??!0,l=r.overflowCount??5,d=r.title??`Jane Doe`,_=r.description,v={color:t?`#bcbcbc`:`#6b6b6b`,display:`block`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:11,fontWeight:600,letterSpacing:`0.06em`,marginBottom:12,textTransform:`uppercase`};return(0,f.jsxs)(`div`,{style:{background:n,borderRadius:12,display:`inline-flex`,gap:48,padding:24,transition:`background 0.2s ease`,alignItems:`flex-start`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{style:v,children:`Avatar`}),(0,f.jsx)(i,{...e,...a})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{style:v,children:`Avatar Group`}),(0,f.jsxs)(s,{spacing:o,showOverflow:c,overflowCount:l,theme:e.theme,children:[(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[0],alt:`User 1`,theme:e.theme}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[1],alt:`User 2`,theme:e.theme}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[2],alt:`User 3`,theme:e.theme})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{style:v,children:`Avatar Block`}),(0,f.jsx)(u,{avatar:(0,f.jsx)(i,{type:`image`,size:`medium`,src:g[0],alt:d,theme:e.theme}),title:d,description:_,theme:e.theme})]})]})}},x={name:`All Avatars`,tags:[`!autodocs`],parameters:{layout:`fullscreen`},args:{theme:`light`},argTypes:{type:{table:{disable:!0}},size:{table:{disable:!0}},initials:{table:{disable:!0}},src:{table:{disable:!0}},alt:{table:{disable:!0}},icon:{table:{disable:!0}}},render:e=>{let t=e.theme??`light`,n=t===`dark`,r=n?h:m,a={color:n?`#bcbcbc`:`#6b6b6b`,display:`block`,fontFamily:`'Noto Sans', sans-serif`,fontSize:11,fontWeight:600,letterSpacing:`0.06em`,marginBottom:16,textTransform:`uppercase`},o={color:n?`#bcbcbc`:`#6b6b6b`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:11},c={background:n?`#2a3c50`:`#2f3f55`,borderRadius:5,color:`#f5f8fc`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:10,padding:`2px 6px`,textAlign:`center`,whiteSpace:`nowrap`};return(0,f.jsx)(`div`,{style:{background:r,boxSizing:`border-box`,fontFamily:`'Noto Sans', sans-serif`,minHeight:`100vh`,padding:`48px 64px`,transition:`background 0.2s ease`},children:(0,f.jsxs)(`div`,{style:{alignItems:`flex-start`,display:`flex`,flexWrap:`wrap`,gap:80},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{style:a,children:`Avatar`}),(0,f.jsxs)(`div`,{style:{alignItems:`center`,display:`grid`,gap:`14px 10px`,gridTemplateColumns:`60px repeat(5, 52px)`},children:[(0,f.jsx)(`span`,{}),v.map(e=>(0,f.jsx)(`span`,{style:c,children:e},e)),y.flatMap(e=>[(0,f.jsx)(`span`,{style:o,children:e},`lbl-${e}`),...v.map(n=>(0,f.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`},children:(0,f.jsx)(i,{type:e,size:n,initials:`A`,src:g[0],alt:`User`,icon:(0,f.jsx)(p,{}),theme:t})},`${e}-${n}`))])]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,f.jsx)(`span`,{style:a,children:`Avatar Group`}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,f.jsx)(`span`,{style:o,children:`Spaced`}),(0,f.jsxs)(s,{spacing:`spaced`,overflowCount:5,showOverflow:!0,theme:t,children:[(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[0],alt:`User 1`,theme:t}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[1],alt:`User 2`,theme:t}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[2],alt:`User 3`,theme:t})]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,f.jsx)(`span`,{style:o,children:`Overlap`}),(0,f.jsxs)(s,{spacing:`overlap`,overflowCount:5,showOverflow:!0,theme:t,children:[(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[0],alt:`User 1`,theme:t}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[1],alt:`User 2`,theme:t}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[2],alt:`User 3`,theme:t})]})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{style:a,children:`Avatar Block`}),(0,f.jsx)(u,{avatar:(0,f.jsx)(i,{type:`image`,size:`medium`,src:g[0],alt:`Jane Doe`,theme:t}),title:`Jane Doe`,description:`Product Designer`,theme:t})]})]})})}},S={display:`flex`,alignItems:`center`,gap:16,flexWrap:`wrap`},C={color:`#6b6b6b`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:11,minWidth:52},w={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:"Use `type` to switch between an initial monogram, a photo, or a shape placeholder icon."}}},render:()=>(0,f.jsx)(`div`,{style:S,children:[`initial`,`image`,`shape`].map(e=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,f.jsx)(i,{type:e,size:`medium`,initials:`A`,src:g[0],alt:`User`,icon:(0,f.jsx)(p,{})}),(0,f.jsx)(`span`,{style:C,children:e})]},e))})},T={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:"Five size steps from `xsmall` (24 px) to `xlarge` (56 px)."}}},render:()=>(0,f.jsx)(`div`,{style:{...S,alignItems:`flex-end`},children:[`xsmall`,`small`,`medium`,`large`,`xlarge`].map(e=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,f.jsx)(i,{type:`initial`,size:e,initials:`A`}),(0,f.jsx)(`span`,{style:C,children:e})]},e))})},E={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:'`spacing="overlap"` stacks avatars with a negative margin. `spacing="spaced"` uses a regular gap. Both support an overflow count badge.'}}},render:()=>(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[`overlap`,`spaced`].map(e=>(0,f.jsxs)(`div`,{style:S,children:[(0,f.jsx)(`span`,{style:{...C,minWidth:60},children:e}),(0,f.jsxs)(s,{spacing:e,overflowCount:5,showOverflow:!0,children:[(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[0],alt:`User 1`}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[1],alt:`User 2`}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[2],alt:`User 3`})]})]},e))})},D={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:"Pass any `Avatar` as the `avatar` slot. The `description` prop is optional."}}},render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsx)(u,{avatar:(0,f.jsx)(i,{type:`image`,size:`medium`,src:g[0],alt:`Jane`}),title:`Jane Doe`,description:`Product Designer`}),(0,f.jsx)(u,{avatar:(0,f.jsx)(i,{type:`initial`,size:`medium`,initials:`A`}),title:`Ahmed Ali`,description:`Engineering Lead`}),(0,f.jsx)(u,{avatar:(0,f.jsx)(i,{type:`shape`,size:`medium`,icon:(0,f.jsx)(p,{})}),title:`Team Account`})]})},O={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:'Pass `theme="dark"` for the dark palette. Without a theme prop the component responds to `prefers-color-scheme: dark` automatically.'}}},render:()=>(0,f.jsx)(`div`,{style:{display:`flex`,gap:0,borderRadius:12,overflow:`hidden`},children:[`light`,`dark`].map(e=>{let t=e===`dark`;return(0,f.jsxs)(`div`,{style:{background:t?h:m,padding:`24px 32px`,display:`flex`,flexDirection:`column`,gap:20,flex:1},children:[(0,f.jsx)(`span`,{style:{...C,color:t?`#bcbcbc`:`#6b6b6b`},children:e}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,f.jsx)(i,{type:`initial`,size:`medium`,initials:`A`,theme:e}),(0,f.jsx)(i,{type:`image`,size:`medium`,src:g[0],alt:`User`,theme:e}),(0,f.jsx)(i,{type:`shape`,size:`medium`,icon:(0,f.jsx)(p,{}),theme:e})]}),(0,f.jsxs)(s,{spacing:`overlap`,overflowCount:3,showOverflow:!0,theme:e,children:[(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[0],alt:`User 1`,theme:e}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[1],alt:`User 2`,theme:e}),(0,f.jsx)(i,{type:`image`,size:`xsmall`,src:g[2],alt:`User 3`,theme:e})]}),(0,f.jsx)(u,{avatar:(0,f.jsx)(i,{type:`image`,size:`medium`,src:g[0],alt:`Jane`,theme:e}),title:`Jane Doe`,description:`Product Designer`,theme:e})]},e)})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!autodocs'],
  args: {
    spacing: 'overlap',
    showOverflow: true,
    overflowCount: 5,
    title: 'Jane Doe',
    description: 'Product Designer'
  } as any,
  render: args => {
    const isDark = args.theme === 'dark';
    const bg = isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT;
    const a = args as any;

    // Avatar: fill the right slot per type
    const avatarExtra = args.type === 'image' ? {
      src: args.src || IMG[0],
      alt: args.alt || 'User'
    } : args.type === 'shape' ? {
      icon: <PersonIcon />
    } : {};

    // AvatarGroup props
    const spacing = a.spacing ?? 'overlap';
    const showOvf = a.showOverflow ?? true;
    const ovfCount = a.overflowCount ?? 5;

    // AvatarBlock props
    const blockTitle = a.title ?? 'Jane Doe';
    const blockDesc = a.description;
    const sectionLabel: CSSProperties = {
      color: isDark ? '#bcbcbc' : '#6b6b6b',
      display: 'block',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      marginBottom: 12,
      textTransform: 'uppercase'
    };
    return <div style={{
      background: bg,
      borderRadius: 12,
      display: 'inline-flex',
      gap: 48,
      padding: 24,
      transition: 'background 0.2s ease',
      alignItems: 'flex-start'
    }}>\r
\r
        {/* Avatar */}\r
        <div>\r
          <span style={sectionLabel}>Avatar</span>\r
          <Avatar {...args} {...avatarExtra} />\r
        </div>\r
\r
        {/* Avatar Group */}\r
        <div>\r
          <span style={sectionLabel}>Avatar Group</span>\r
          <AvatarGroup spacing={spacing} showOverflow={showOvf} overflowCount={ovfCount} theme={args.theme}>\r
            <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" theme={args.theme} />\r
            <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" theme={args.theme} />\r
            <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" theme={args.theme} />\r
          </AvatarGroup>\r
        </div>\r
\r
        {/* Avatar Block */}\r
        <div>\r
          <span style={sectionLabel}>Avatar Block</span>\r
          <AvatarBlock avatar={<Avatar type="image" size="medium" src={IMG[0]} alt={blockTitle} theme={args.theme} />} title={blockTitle} description={blockDesc} theme={args.theme} />\r
        </div>\r
\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'All Avatars',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    theme: 'light'
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    initials: {
      table: {
        disable: true
      }
    },
    src: {
      table: {
        disable: true
      }
    },
    alt: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    }
  },
  render: args => {
    const theme = (args.theme ?? 'light') as AvatarTheme;
    const isDark = theme === 'dark';
    const bg = isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT;
    const sectionLabel: CSSProperties = {
      color: isDark ? '#bcbcbc' : '#6b6b6b',
      display: 'block',
      fontFamily: "'Noto Sans', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      marginBottom: 16,
      textTransform: 'uppercase'
    };
    const rowLabel: CSSProperties = {
      color: isDark ? '#bcbcbc' : '#6b6b6b',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 11
    };
    const chip: CSSProperties = {
      background: isDark ? '#2a3c50' : '#2f3f55',
      borderRadius: 5,
      color: '#f5f8fc',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 10,
      padding: '2px 6px',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    };
    return <div style={{
      background: bg,
      boxSizing: 'border-box',
      fontFamily: "'Noto Sans', sans-serif",
      minHeight: '100vh',
      padding: '48px 64px',
      transition: 'background 0.2s ease'
    }}>\r
        <div style={{
        alignItems: 'flex-start',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 80
      }}>\r
\r
          {/* ── Column 1: Type × Size grid ─────────────────────────────── */}\r
          <div>\r
            <span style={sectionLabel}>Avatar</span>\r
            <div style={{
            alignItems: 'center',
            display: 'grid',
            gap: '14px 10px',
            gridTemplateColumns: '60px repeat(5, 52px)'
          }}>\r
              {/* Header */}\r
              <span />\r
              {sizes.map(s => <span key={s} style={chip}>{s}</span>)}\r
\r
              {/* Rows */}\r
              {types.flatMap(type => [<span key={\`lbl-\${type}\`} style={rowLabel}>{type}</span>, ...sizes.map(size => <div key={\`\${type}-\${size}\`} style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>\r
                    <Avatar type={type} size={size} initials="A" src={IMG[0]} alt="User" icon={<PersonIcon />} theme={theme} />\r
                  </div>)])}\r
            </div>\r
          </div>\r
\r
          {/* ── Column 2: Groups ────────────────────────────────────────── */}\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32
        }}>\r
            <span style={sectionLabel}>Avatar Group</span>\r
\r
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}>\r
              <span style={rowLabel}>Spaced</span>\r
              <AvatarGroup spacing="spaced" overflowCount={5} showOverflow theme={theme}>\r
                <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" theme={theme} />\r
                <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" theme={theme} />\r
                <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" theme={theme} />\r
              </AvatarGroup>\r
            </div>\r
\r
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}>\r
              <span style={rowLabel}>Overlap</span>\r
              <AvatarGroup spacing="overlap" overflowCount={5} showOverflow theme={theme}>\r
                <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" theme={theme} />\r
                <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" theme={theme} />\r
                <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" theme={theme} />\r
              </AvatarGroup>\r
            </div>\r
          </div>\r
\r
          {/* ── Column 3: Avatar Block ──────────────────────────────────── */}\r
          <div>\r
            <span style={sectionLabel}>Avatar Block</span>\r
            <AvatarBlock avatar={<Avatar type="image" size="medium" src={IMG[0]} alt="Jane Doe" theme={theme} />} title="Jane Doe" description="Product Designer" theme={theme} />\r
          </div>\r
\r
        </div>\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Use \`type\` to switch between an initial monogram, a photo, or a shape placeholder icon.'
      }
    }
  },
  render: () => <div style={docRow}>\r
      {(['initial', 'image', 'shape'] as const).map(type => <div key={type} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
          <Avatar type={type} size="medium" initials="A" src={IMG[0]} alt="User" icon={<PersonIcon />} />\r
          <span style={docLabel}>{type}</span>\r
        </div>)}\r
    </div>
}`,...w.parameters?.docs?.source},description:{story:`All three avatar types side by side.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Five size steps from \`xsmall\` (24 px) to \`xlarge\` (56 px).'
      }
    }
  },
  render: () => <div style={{
    ...docRow,
    alignItems: 'flex-end'
  }}>\r
      {(['xsmall', 'small', 'medium', 'large', 'xlarge'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
          <Avatar type="initial" size={size} initials="A" />\r
          <span style={docLabel}>{size}</span>\r
        </div>)}\r
    </div>
}`,...T.parameters?.docs?.source},description:{story:`All five sizes using the initial type.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '\`spacing="overlap"\` stacks avatars with a negative margin. \`spacing="spaced"\` uses a regular gap. Both support an overflow count badge.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      {(['overlap', 'spaced'] as const).map(spacing => <div key={spacing} style={docRow}>\r
          <span style={{
        ...docLabel,
        minWidth: 60
      }}>{spacing}</span>\r
          <AvatarGroup spacing={spacing} overflowCount={5} showOverflow>\r
            <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" />\r
            <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" />\r
            <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" />\r
          </AvatarGroup>\r
        </div>)}\r
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Overlap and spaced group variants with an overflow badge.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Pass any \`Avatar\` as the \`avatar\` slot. The \`description\` prop is optional.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <AvatarBlock avatar={<Avatar type="image" size="medium" src={IMG[0]} alt="Jane" />} title="Jane Doe" description="Product Designer" />\r
      <AvatarBlock avatar={<Avatar type="initial" size="medium" initials="A" />} title="Ahmed Ali" description="Engineering Lead" />\r
      <AvatarBlock avatar={<Avatar type="shape" size="medium" icon={<PersonIcon />} />} title="Team Account" />\r
    </div>
}`,...D.parameters?.docs?.source},description:{story:`AvatarBlock with each avatar type and an optional description.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Pass \`theme="dark"\` for the dark palette. Without a theme prop the component responds to \`prefers-color-scheme: dark\` automatically.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 0,
    borderRadius: 12,
    overflow: 'hidden'
  }}>\r
      {(['light', 'dark'] as const).map(theme => {
      const isDark = theme === 'dark';
      return <div key={theme} style={{
        background: isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT,
        padding: '24px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        flex: 1
      }}>\r
            <span style={{
          ...docLabel,
          color: isDark ? '#bcbcbc' : '#6b6b6b'
        }}>{theme}</span>\r
            <div style={{
          display: 'flex',
          gap: 12
        }}>\r
              <Avatar type="initial" size="medium" initials="A" theme={theme} />\r
              <Avatar type="image" size="medium" src={IMG[0]} alt="User" theme={theme} />\r
              <Avatar type="shape" size="medium" icon={<PersonIcon />} theme={theme} />\r
            </div>\r
            <AvatarGroup spacing="overlap" overflowCount={3} showOverflow theme={theme}>\r
              <Avatar type="image" size="xsmall" src={IMG[0]} alt="User 1" theme={theme} />\r
              <Avatar type="image" size="xsmall" src={IMG[1]} alt="User 2" theme={theme} />\r
              <Avatar type="image" size="xsmall" src={IMG[2]} alt="User 3" theme={theme} />\r
            </AvatarGroup>\r
            <AvatarBlock avatar={<Avatar type="image" size="medium" src={IMG[0]} alt="Jane" theme={theme} />} title="Jane Doe" description="Product Designer" theme={theme} />\r
          </div>;
    })}\r
    </div>
}`,...O.parameters?.docs?.source},description:{story:`Light and dark themes side by side.`,...O.parameters?.docs?.description}}},k=[`Playground`,`AllAvatars`,`Types`,`Sizes`,`Group`,`Block`,`Themes`]}))();export{x as AllAvatars,D as Block,E as Group,b as Playground,T as Sizes,O as Themes,w as Types,k as __namedExportsOrder,_ as default};