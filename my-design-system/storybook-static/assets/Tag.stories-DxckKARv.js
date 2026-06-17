import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n=e((()=>{})),r,i,a=e((()=>{n(),r=t(),i=({label:e,iconStart:t,iconEnd:n,state:i=`default`,theme:a,bgColor:o,textColor:s,className:c,style:l,...u})=>(0,r.jsxs)(`span`,{className:[`ds-tag`,`ds-tag--${i}`,a&&`ds-tag--${a}`,c].filter(Boolean).join(` `),style:{...o&&{backgroundColor:o},...s&&{color:s},...l},...u,children:[t&&(0,r.jsx)(`span`,{className:`ds-tag__icon ds-tag__icon--start`,children:t}),(0,r.jsx)(`span`,{className:`ds-tag__label`,children:e}),n&&(0,r.jsx)(`span`,{className:`ds-tag__icon ds-tag__icon--end`,children:n})]}),i.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{label:{required:!0,tsType:{name:`string`},description:``},iconStart:{required:!1,tsType:{name:`ReactNode`},description:``},iconEnd:{required:!1,tsType:{name:`ReactNode`},description:``},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'hover'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'hover'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``},bgColor:{required:!1,tsType:{name:`string`},description:`Override the background color`},textColor:{required:!1,tsType:{name:`string`},description:`Override the text (and icon) color`}},composes:[`HTMLAttributes`]}})),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{a(),o=t(),s=()=>(0,o.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,o.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z`})}),c=`#f5f7fa`,l=`#141f2e`,u={title:`Components/Tag (Maher Al Rifai)`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A compact label used to categorise or annotate content. Supports an optional leading and/or trailing icon and two interaction states: `default` and `hover`."}}},args:{label:`Label`,state:`default`,theme:`light`},argTypes:{label:{control:`text`},state:{control:`inline-radio`,options:[`default`,`hover`],description:`Visual interaction state.`},theme:{control:`inline-radio`,options:[`light`,`dark`],description:"Color theme. Without a prop the component follows `prefers-color-scheme`."},showIconStart:{control:`boolean`,description:`Show a leading icon (icon start).`,table:{category:`Icons`}},showIconEnd:{control:`boolean`,description:`Show a trailing icon (icon end).`,table:{category:`Icons`}},iconStart:{control:!1,table:{disable:!0}},iconEnd:{control:!1,table:{disable:!0}},bgColor:{control:`color`,description:`Override the background color.`,table:{category:`Colors`}},textColor:{control:`color`,description:`Override text and icon color.`,table:{category:`Colors`}}}},d=[{key:`label`,iconStart:void 0,iconEnd:void 0,label:`Label`},{key:`iconStart`,iconStart:(0,o.jsx)(s,{}),iconEnd:void 0,label:`Label`},{key:`iconEnd`,iconStart:void 0,iconEnd:(0,o.jsx)(s,{}),label:`Label`},{key:`iconBoth`,iconStart:(0,o.jsx)(s,{}),iconEnd:(0,o.jsx)(s,{}),label:`Label`}],f=[`default`,`hover`],p={name:`Playground`,tags:[`!autodocs`],args:{showIconStart:!1,showIconEnd:!1},render:e=>{let{showIconStart:t,showIconEnd:n,...r}=e,a=e.theme===`dark`;return(0,o.jsx)(`div`,{style:{background:a?l:void 0,borderRadius:12,display:`inline-flex`,padding:a?20:0,transition:`background 0.2s ease`},children:(0,o.jsx)(i,{...r,iconStart:t?(0,o.jsx)(s,{}):void 0,iconEnd:n?(0,o.jsx)(s,{}):void 0})})}},m={name:`All Tags`,tags:[`!autodocs`],parameters:{layout:`fullscreen`},args:{theme:`light`},argTypes:{label:{table:{disable:!0}},state:{table:{disable:!0}},iconStart:{table:{disable:!0}},iconEnd:{table:{disable:!0}}},render:e=>{let t=e.theme??`light`,n=t===`dark`,r=n?l:c,a={color:n?`#bcbcbc`:`#6b6b6b`,display:`block`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:11,fontWeight:600,letterSpacing:`0.06em`,marginBottom:16,textTransform:`uppercase`},u={color:n?`#bcbcbc`:`#6b6b6b`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:11,minWidth:72},p={background:n?`#2a3c50`:`#2f3f55`,borderRadius:5,color:`#f5f8fc`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:10,padding:`2px 8px`,whiteSpace:`nowrap`};return(0,o.jsxs)(`div`,{style:{background:r,boxSizing:`border-box`,fontFamily:`'Noto Sans', sans-serif`,minHeight:`100vh`,padding:`48px 64px`,transition:`background 0.2s ease`},children:[(0,o.jsxs)(`div`,{style:{marginBottom:56},children:[(0,o.jsx)(`span`,{style:a,children:`Structure`}),(0,o.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[{key:`label`,iconStart:void 0,iconEnd:void 0,label:`Label`},{key:`iconStart`,iconStart:(0,o.jsx)(s,{}),iconEnd:void 0,label:`Label`},{key:`iconEnd`,iconStart:void 0,iconEnd:(0,o.jsx)(s,{}),label:`Label`},{key:`iconBoth`,iconStart:(0,o.jsx)(s,{}),iconEnd:(0,o.jsx)(s,{}),label:`Label`}].map(({key:e,iconStart:n,iconEnd:r,label:a})=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:10},children:[(0,o.jsx)(i,{label:a,iconStart:n,iconEnd:r,theme:t}),(0,o.jsx)(`span`,{style:p,children:e})]},e))})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{style:a,children:`State`}),(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:f.map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24},children:[(0,o.jsx)(`span`,{style:u,children:e}),d.map(({key:n,iconStart:r,iconEnd:a,label:s})=>(0,o.jsx)(i,{label:s,iconStart:r,iconEnd:a,state:e,theme:t},n))]},e))})]})]})}},h={display:`flex`,alignItems:`center`,gap:16,flexWrap:`wrap`},g={color:`#6b6b6b`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:11,minWidth:64},_={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:`Four structural variants: label only, icon start, icon end, and both icons.`}}},render:()=>(0,o.jsxs)(`div`,{style:h,children:[(0,o.jsx)(i,{label:`Label`}),(0,o.jsx)(i,{label:`Label`,iconStart:(0,o.jsx)(s,{})}),(0,o.jsx)(i,{label:`Label`,iconEnd:(0,o.jsx)(s,{})}),(0,o.jsx)(i,{label:`Label`,iconStart:(0,o.jsx)(s,{}),iconEnd:(0,o.jsx)(s,{})})]})},v={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:"The `hover` state can be forced via the `state` prop — useful in design documentation and visual tests."}}},render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:f.map(e=>(0,o.jsxs)(`div`,{style:h,children:[(0,o.jsx)(`span`,{style:g,children:e}),(0,o.jsx)(i,{label:`Label`,state:e}),(0,o.jsx)(i,{label:`Label`,state:e,iconStart:(0,o.jsx)(s,{})}),(0,o.jsx)(i,{label:`Label`,state:e,iconEnd:(0,o.jsx)(s,{})}),(0,o.jsx)(i,{label:`Label`,state:e,iconStart:(0,o.jsx)(s,{}),iconEnd:(0,o.jsx)(s,{})})]},e))})},y={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:'Pass `theme="dark"` for the dark palette. Without a theme prop the component follows `prefers-color-scheme: dark` automatically.'}}},render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:0,borderRadius:12,overflow:`hidden`},children:[`light`,`dark`].map(e=>{let t=e===`dark`;return(0,o.jsxs)(`div`,{style:{background:t?l:c,display:`flex`,flex:1,flexDirection:`column`,gap:12,padding:`24px 32px`},children:[(0,o.jsx)(`span`,{style:{...g,color:t?`#bcbcbc`:`#6b6b6b`},children:e}),(0,o.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,o.jsx)(i,{label:`Default`,state:`default`,theme:e}),(0,o.jsx)(i,{label:`Hover`,state:`hover`,theme:e}),(0,o.jsx)(i,{label:`With icon`,state:`default`,iconStart:(0,o.jsx)(s,{}),theme:e}),(0,o.jsx)(i,{label:`With icon`,state:`hover`,iconEnd:(0,o.jsx)(s,{}),theme:e})]})]},e)})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!autodocs'],
  args: {
    showIconStart: false,
    showIconEnd: false
  },
  render: args => {
    const {
      showIconStart,
      showIconEnd,
      ...tagProps
    } = args;
    const isDark = args.theme === 'dark';
    return <div style={{
      background: isDark ? TOKEN_BG_DARK : undefined,
      borderRadius: 12,
      display: 'inline-flex',
      padding: isDark ? 20 : 0,
      transition: 'background 0.2s ease'
    }}>\r
        <Tag {...tagProps} iconStart={showIconStart ? <StarIcon /> : undefined} iconEnd={showIconEnd ? <StarIcon /> : undefined} />\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'All Tags',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    theme: 'light'
  },
  argTypes: {
    label: {
      table: {
        disable: true
      }
    },
    state: {
      table: {
        disable: true
      }
    },
    iconStart: {
      table: {
        disable: true
      }
    },
    iconEnd: {
      table: {
        disable: true
      }
    }
  },
  render: args => {
    const theme = (args.theme ?? 'light') as TagTheme;
    const isDark = theme === 'dark';
    const pageBg = isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT;
    const sectionTitle: CSSProperties = {
      color: isDark ? '#bcbcbc' : '#6b6b6b',
      display: 'block',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      marginBottom: 16,
      textTransform: 'uppercase'
    };
    const rowLabel: CSSProperties = {
      color: isDark ? '#bcbcbc' : '#6b6b6b',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 11,
      minWidth: 72
    };
    const chip: CSSProperties = {
      background: isDark ? '#2a3c50' : '#2f3f55',
      borderRadius: 5,
      color: '#f5f8fc',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 10,
      padding: '2px 8px',
      whiteSpace: 'nowrap'
    };
    return <div style={{
      background: pageBg,
      boxSizing: 'border-box',
      fontFamily: "'Noto Sans', sans-serif",
      minHeight: '100vh',
      padding: '48px 64px',
      transition: 'background 0.2s ease'
    }}>\r
\r
        {/* ── Structure ─────────────────────────────────────────────────── */}\r
        <div style={{
        marginBottom: 56
      }}>\r
          <span style={sectionTitle}>Structure</span>\r
          <div style={{
          display: 'flex',
          gap: 24,
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>\r
            {[{
            key: 'label',
            iconStart: undefined,
            iconEnd: undefined,
            label: 'Label'
          }, {
            key: 'iconStart',
            iconStart: <StarIcon />,
            iconEnd: undefined,
            label: 'Label'
          }, {
            key: 'iconEnd',
            iconStart: undefined,
            iconEnd: <StarIcon />,
            label: 'Label'
          }, {
            key: 'iconBoth',
            iconStart: <StarIcon />,
            iconEnd: <StarIcon />,
            label: 'Label'
          }].map(({
            key,
            iconStart,
            iconEnd,
            label
          }) => <div key={key} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10
          }}>\r
                <Tag label={label} iconStart={iconStart} iconEnd={iconEnd} theme={theme} />\r
                <span style={chip}>{key}</span>\r
              </div>)}\r
          </div>\r
        </div>\r
\r
        {/* ── State ─────────────────────────────────────────────────────── */}\r
        <div>\r
          <span style={sectionTitle}>State</span>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>\r
            {states.map(state => <div key={state} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24
          }}>\r
                <span style={rowLabel}>{state}</span>\r
                {structures.map(({
              key,
              iconStart,
              iconEnd,
              label
            }) => <Tag key={key} label={label} iconStart={iconStart} iconEnd={iconEnd} state={state} theme={theme} />)}\r
              </div>)}\r
          </div>\r
        </div>\r
\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Four structural variants: label only, icon start, icon end, and both icons.'
      }
    }
  },
  render: () => <div style={docRow}>\r
      <Tag label="Label" />\r
      <Tag label="Label" iconStart={<StarIcon />} />\r
      <Tag label="Label" iconEnd={<StarIcon />} />\r
      <Tag label="Label" iconStart={<StarIcon />} iconEnd={<StarIcon />} />\r
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Label only, with leading icon, with trailing icon, with both icons.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'The \`hover\` state can be forced via the \`state\` prop — useful in design documentation and visual tests.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      {states.map(state => <div key={state} style={docRow}>\r
          <span style={docLabel}>{state}</span>\r
          <Tag label="Label" state={state} />\r
          <Tag label="Label" state={state} iconStart={<StarIcon />} />\r
          <Tag label="Label" state={state} iconEnd={<StarIcon />} />\r
          <Tag label="Label" state={state} iconStart={<StarIcon />} iconEnd={<StarIcon />} />\r
        </div>)}\r
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Default and hover states side by side.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Pass \`theme="dark"\` for the dark palette. Without a theme prop the component follows \`prefers-color-scheme: dark\` automatically.'
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
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        gap: 12,
        padding: '24px 32px'
      }}>\r
            <span style={{
          ...docLabel,
          color: isDark ? '#bcbcbc' : '#6b6b6b'
        }}>{theme}</span>\r
            <div style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap'
        }}>\r
              <Tag label="Default" state="default" theme={theme} />\r
              <Tag label="Hover" state="hover" theme={theme} />\r
              <Tag label="With icon" state="default" iconStart={<StarIcon />} theme={theme} />\r
              <Tag label="With icon" state="hover" iconEnd={<StarIcon />} theme={theme} />\r
            </div>\r
          </div>;
    })}\r
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Light and dark themes side by side.`,...y.parameters?.docs?.description}}},b=[`Playground`,`AllTags`,`Structure`,`States`,`Themes`]}))();export{m as AllTags,p as Playground,v as States,_ as Structure,y as Themes,b as __namedExportsOrder,u as default};