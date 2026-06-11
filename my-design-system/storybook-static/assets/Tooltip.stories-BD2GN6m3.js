import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";var n=e((()=>{})),r,i,a=e((()=>{n(),r=t(),i=({title:e,body:t,placement:n=`top`,theme:i,bgColor:a,borderColor:o,textColor:s,className:c,style:l,...u})=>(0,r.jsxs)(`div`,{className:[`ds-tooltip`,`ds-tooltip--${n}`,i&&`ds-tooltip--${i}`,c].filter(Boolean).join(` `),role:`tooltip`,style:{...a&&{backgroundColor:a,"--ds-tooltip-bg":a},...o&&{borderColor:o,"--ds-tooltip-border":o},...s&&{color:s},...l},...u,children:[(0,r.jsx)(`span`,{className:`ds-tooltip__title`,children:e}),t&&(0,r.jsx)(`span`,{className:`ds-tooltip__body`,children:t})]}),i.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{title:{required:!0,tsType:{name:`string`},description:`Primary label shown in bold`},body:{required:!1,tsType:{name:`string`},description:`Optional supporting text below the title`},placement:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Which side the arrow points toward (where the target is)`,defaultValue:{value:`'top'`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:"Color theme — defaults to system `prefers-color-scheme` when omitted"},bgColor:{required:!1,tsType:{name:`string`},description:`Override the tooltip background color`},borderColor:{required:!1,tsType:{name:`string`},description:`Override the tooltip border color`},textColor:{required:!1,tsType:{name:`string`},description:`Override the text color (applies to both title and body)`}},composes:[`HTMLAttributes`]}})),o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{a(),o=t(),s=`#f5f7fa`,c=`#141f2e`,l={title:`Components/Tooltip`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A lightweight contextual helper that appears on hover, focus, or interaction to provide additional guidance or clarification. Supports four placements (`top`, `bottom`, `left`, `right`) and dual-theme (light/dark)."}}},args:{title:`Title`,body:`Body text`,placement:`top`,theme:`light`},argTypes:{title:{control:`text`,description:`Primary label — always visible.`},body:{control:`text`,description:`Optional supporting text below the title.`},placement:{control:`inline-radio`,options:[`top`,`bottom`,`left`,`right`],description:`Which side the arrow points toward (where the trigger is).`},theme:{control:`inline-radio`,options:[`light`,`dark`],description:"Color theme. Without a prop the component follows `prefers-color-scheme`."},bgColor:{control:`color`,description:`Override background color. Also updates the arrow fill.`},borderColor:{control:`color`,description:`Override border color. Also updates the arrow border layer.`},textColor:{control:`color`,description:`Override text color (title + body).`}}},u=[`top`,`bottom`,`left`,`right`],d={name:`Playground`,tags:[`!autodocs`],render:e=>(0,o.jsx)(`div`,{style:{background:e.theme===`dark`?c:s,borderRadius:12,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,padding:40,transition:`background 0.2s ease`},children:(0,o.jsx)(i,{...e})})},f={name:`All Tooltips`,tags:[`!autodocs`],parameters:{layout:`fullscreen`},args:{theme:`light`},argTypes:{title:{table:{disable:!0}},body:{table:{disable:!0}},placement:{table:{disable:!0}}},render:e=>{let t=e.theme??`light`,n=t===`dark`,r=n?c:s,a=n?`#2a3c50`:`#2f3f55`,l={color:n?`#bcbcbc`:`#6b6b6b`,display:`block`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:11,fontWeight:600,letterSpacing:`0.06em`,marginBottom:48,textTransform:`uppercase`},u={background:a,borderRadius:5,color:`#f5f8fc`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:10,padding:`2px 8px`,whiteSpace:`nowrap`},d={width:32,height:32,borderRadius:`50%`,background:n?`#2a3c50`:`#d2d9e0`,border:`2px solid ${n?`#bcbcbc`:`#545454`}`,flexShrink:0};return(0,o.jsxs)(`div`,{style:{background:r,boxSizing:`border-box`,fontFamily:`'Noto Sans', sans-serif`,minHeight:`100vh`,padding:`64px`,transition:`background 0.2s ease`,display:`flex`,flexDirection:`column`,alignItems:`flex-start`},children:[(0,o.jsx)(`span`,{style:l,children:`Placement`}),(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`auto auto auto`,gridTemplateRows:`auto auto auto`,alignItems:`center`,justifyItems:`center`,rowGap:12,columnGap:12},children:[(0,o.jsx)(`div`,{}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,o.jsx)(i,{title:`Title`,body:`Body text`,placement:`top`,theme:t}),(0,o.jsx)(`span`,{style:u,children:`top`})]}),(0,o.jsx)(`div`,{}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,o.jsx)(i,{title:`Title`,body:`Body text`,placement:`left`,theme:t}),(0,o.jsx)(`span`,{style:u,children:`left`})]}),(0,o.jsx)(`div`,{style:d}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,o.jsx)(i,{title:`Title`,body:`Body text`,placement:`right`,theme:t}),(0,o.jsx)(`span`,{style:u,children:`right`})]}),(0,o.jsx)(`div`,{}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,o.jsx)(i,{title:`Title`,body:`Body text`,placement:`bottom`,theme:t}),(0,o.jsx)(`span`,{style:u,children:`bottom`})]}),(0,o.jsx)(`div`,{})]})]})}},p={display:`flex`,alignItems:`flex-start`,gap:32,flexWrap:`wrap`},m={color:`#6b6b6b`,fontFamily:`ui-monospace, SFMono-Regular, monospace`,fontSize:11,marginTop:8,display:`block`,textAlign:`center`},h={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:"The `placement` prop controls which side the arrow points toward — i.e. where the trigger element is."}}},render:()=>(0,o.jsx)(`div`,{style:p,children:u.map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,padding:e===`top`?`0 0 10px 0`:e===`bottom`?`10px 0 0 0`:e===`left`?`0 10px 0 0`:`0 0 0 10px`},children:[(0,o.jsx)(i,{title:`Title`,body:`Body text`,placement:e,theme:`light`}),(0,o.jsx)(`span`,{style:m,children:e})]},e))})},g={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:"Omit the `body` prop for a compact single-line tooltip."}}},render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:32,paddingBottom:10,alignItems:`flex-start`},children:[(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,o.jsx)(i,{title:`Title only`,placement:`top`,theme:`light`}),(0,o.jsx)(`span`,{style:m,children:`title only`})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,o.jsx)(i,{title:`Title`,body:`Body text`,placement:`top`,theme:`light`}),(0,o.jsx)(`span`,{style:m,children:`title + body`})]})]})},_={tags:[`!dev`],parameters:{controls:{disable:!0},docs:{description:{story:"Light theme tooltip is dark navy on a light page. Dark theme inverts to a light surface on a dark page. Both respond to `prefers-color-scheme` automatically when no `theme` prop is set."}}},render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:0,borderRadius:12,overflow:`hidden`},children:[`light`,`dark`].map(e=>{let t=e===`dark`;return(0,o.jsxs)(`div`,{style:{background:t?c:s,display:`flex`,flex:1,flexDirection:`column`,gap:24,padding:`32px 40px 42px`},children:[(0,o.jsx)(`span`,{style:{...m,color:t?`#bcbcbc`:`#6b6b6b`,textAlign:`left`,marginTop:0},children:e}),(0,o.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,paddingBottom:10},children:u.map(t=>(0,o.jsx)(i,{title:`Title`,body:`Body text`,placement:t,theme:e},t))})]},e)})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  tags: ['!autodocs'],
  render: args => {
    const isDark = args.theme === 'dark';
    // Extra padding so the arrow doesn't get clipped
    return <div style={{
      background: isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT,
      borderRadius: 12,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
      transition: 'background 0.2s ease'
    }}>\r
        <Tooltip {...args} />\r
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'All Tooltips',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    theme: 'light'
  },
  argTypes: {
    title: {
      table: {
        disable: true
      }
    },
    body: {
      table: {
        disable: true
      }
    },
    placement: {
      table: {
        disable: true
      }
    }
  },
  render: args => {
    const theme = (args.theme ?? 'light') as TooltipTheme;
    const isDark = theme === 'dark';
    const pageBg = isDark ? TOKEN_BG_DARK : TOKEN_BG_LIGHT;
    const chipBg = isDark ? '#2a3c50' : '#2f3f55';
    const labelColor = isDark ? '#bcbcbc' : '#6b6b6b';
    const sectionTitle: CSSProperties = {
      color: labelColor,
      display: 'block',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      marginBottom: 48,
      textTransform: 'uppercase'
    };
    const chip: CSSProperties = {
      background: chipBg,
      borderRadius: 5,
      color: '#f5f8fc',
      fontFamily: 'ui-monospace, SFMono-Regular, monospace',
      fontSize: 10,
      padding: '2px 8px',
      whiteSpace: 'nowrap'
    };

    // Central trigger circle
    const trigger: CSSProperties = {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: isDark ? '#2a3c50' : '#d2d9e0',
      border: \`2px solid \${isDark ? '#bcbcbc' : '#545454'}\`,
      flexShrink: 0
    };
    const ARROW_OFFSET = 12; // px gap between arrow tip and trigger

    return <div style={{
      background: pageBg,
      boxSizing: 'border-box',
      fontFamily: "'Noto Sans', sans-serif",
      minHeight: '100vh',
      padding: '64px',
      transition: 'background 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>\r
        <span style={sectionTitle}>Placement</span>\r
\r
        {/* Compass layout: top / [left · trigger · right] / bottom */}\r
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridTemplateRows: 'auto auto auto',
        alignItems: 'center',
        justifyItems: 'center',
        rowGap: ARROW_OFFSET,
        columnGap: ARROW_OFFSET
      }}>\r
\r
          {/* Row 1 */}\r
          <div />\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6
        }}>\r
            <Tooltip title="Title" body="Body text" placement="top" theme={theme} />\r
            <span style={chip}>top</span>\r
          </div>\r
          <div />\r
\r
          {/* Row 2 */}\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6
        }}>\r
            <Tooltip title="Title" body="Body text" placement="left" theme={theme} />\r
            <span style={chip}>left</span>\r
          </div>\r
          <div style={trigger} />\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6
        }}>\r
            <Tooltip title="Title" body="Body text" placement="right" theme={theme} />\r
            <span style={chip}>right</span>\r
          </div>\r
\r
          {/* Row 3 */}\r
          <div />\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6
        }}>\r
            <Tooltip title="Title" body="Body text" placement="bottom" theme={theme} />\r
            <span style={chip}>bottom</span>\r
          </div>\r
          <div />\r
\r
        </div>\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'The \`placement\` prop controls which side the arrow points toward — i.e. where the trigger element is.'
      }
    }
  },
  render: () => <div style={docRow}>\r
      {placements.map(placement => <div key={placement} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: placement === 'top' ? '0 0 10px 0' : placement === 'bottom' ? '10px 0 0 0' : placement === 'left' ? '0 10px 0 0' : '0 0 0 10px'
    }}>\r
          <Tooltip title="Title" body="Body text" placement={placement} theme="light" />\r
          <span style={docLabel}>{placement}</span>\r
        </div>)}\r
    </div>
}`,...h.parameters?.docs?.source},description:{story:`All four placements with title and body.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Omit the \`body\` prop for a compact single-line tooltip.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    paddingBottom: 10,
    alignItems: 'flex-start'
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
        <Tooltip title="Title only" placement="top" theme="light" />\r
        <span style={docLabel}>title only</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>\r
        <Tooltip title="Title" body="Body text" placement="top" theme="light" />\r
        <span style={docLabel}>title + body</span>\r
      </div>\r
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Title-only vs title + body.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Light theme tooltip is dark navy on a light page. Dark theme inverts to a light surface on a dark page. Both respond to \`prefers-color-scheme\` automatically when no \`theme\` prop is set.'
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
        gap: 24,
        padding: '32px 40px 42px' // extra bottom for arrow
      }}>\r
            <span style={{
          ...docLabel,
          color: isDark ? '#bcbcbc' : '#6b6b6b',
          textAlign: 'left',
          marginTop: 0
        }}>{theme}</span>\r
            <div style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
          paddingBottom: 10
        }}>\r
              {placements.map(p => <Tooltip key={p} title="Title" body="Body text" placement={p} theme={theme} />)}\r
            </div>\r
          </div>;
    })}\r
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Light and dark themes side by side.`,..._.parameters?.docs?.description}}},v=[`Playground`,`AllTooltips`,`Placements`,`WithBody`,`Themes`]}))();export{f as AllTooltips,h as Placements,d as Playground,_ as Themes,g as WithBody,v as __namedExportsOrder,l as default};