import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n}from"./Button-BNQrBnNs.js";import{t as r}from"./Button-leIIfXrT.js";import{n as i,t as a}from"./Card-CtmLgMzG.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{r(),i(),o=t(),s=`A modular content container used to group related information and actions into a clear, digestible layout. Cards help organize complex content while maintaining flexibility across different use cases such as listings, summaries, previews, or dashboards.`,c=(e=`light`)=>({backgroundColor:e===`dark`?`#0a111a`:`#f5f7fa`,boxSizing:`border-box`,color:e===`dark`?`#ffffff`:`#1f1f1f`,display:`flex`,flexDirection:`column`,gap:`32px`,minHeight:`100vh`,padding:`40px clamp(24px, 4vw, 56px)`,width:`100%`}),l={borderBottom:`1px solid currentColor`,display:`flex`,flexDirection:`column`,gap:`12px`,opacity:.95,paddingBottom:`24px`},u={fontSize:`14px`,opacity:.85},d={fontSize:`40px`,fontWeight:700,margin:0},f={fontSize:`14px`,lineHeight:1.5,margin:0,maxWidth:`560px`,opacity:.85},p={alignItems:`start`,display:`grid`,gap:`32px`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`,maxWidth:`1280px`},m=`Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.`,h=`Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.`,g=()=>(0,o.jsxs)(`span`,{style:{alignItems:`center`,border:`1.5px solid currentColor`,borderRadius:`999px`,display:`inline-flex`,flexDirection:`column`,fontFamily:`inherit`,fontSize:9,fontWeight:700,gap:1,height:38,justifyContent:`center`,letterSpacing:.2,lineHeight:1,width:38},children:[(0,o.jsx)(`span`,{children:`PG`}),(0,o.jsx)(`span`,{children:`15`})]}),_={title:`Components/Card/Playground`,parameters:{layout:`fullscreen`},args:{theme:`light`},argTypes:{theme:{control:`inline-radio`,options:[`light`,`dark`]}}},v={name:`1 · Icon + title (horizontal header)`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Icon header`}),(0,o.jsx)(`p`,{style:f,children:`A simple card with an icon next to the title and two actions in the footer.`})]}),(0,o.jsx)(`div`,{style:{maxWidth:560},children:(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`flex-start`},children:[(0,o.jsx)(a.Icon,{}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,flex:1},children:[(0,o.jsx)(a.Title,{children:`Title`}),(0,o.jsx)(a.Text,{children:m})]})]}),(0,o.jsxs)(a.Actions,{children:[(0,o.jsx)(n,{variant:`plain`,children:`Button`}),(0,o.jsx)(n,{children:`Button`})]})]})})})]})},y={name:`2 · Horizontal · portrait image`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Horizontal · portrait media`}),(0,o.jsx)(`p`,{style:f,children:`A side-by-side layout with the media inset inside the card padding.`})]}),(0,o.jsx)(`div`,{style:{maxWidth:560},children:(0,o.jsxs)(a,{theme:e,orientation:`horizontal`,children:[(0,o.jsx)(a.Media,{shape:`portrait`,inset:!0}),(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Title,{children:`Title`}),(0,o.jsx)(a.Text,{children:m}),(0,o.jsx)(a.Actions,{children:(0,o.jsx)(n,{children:`Button`})})]})]})})]})},b={name:`3 · Stacked icon + title`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Stacked icon`}),(0,o.jsx)(`p`,{style:f,children:`The icon sits above the title — useful for feature lists or highlight grids.`})]}),(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Icon,{}),(0,o.jsx)(a.Title,{children:`Title`}),(0,o.jsx)(a.Text,{children:m}),(0,o.jsxs)(a.Actions,{children:[(0,o.jsx)(n,{variant:`plain`,children:`Button`}),(0,o.jsx)(n,{children:`Button`})]})]})})})]})},x={name:`4 · Rating + person`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Rating + person`}),(0,o.jsx)(`p`,{style:f,children:`Use stars and a person row to attribute a quote or testimonial.`})]}),(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Rating,{value:3.5}),(0,o.jsx)(a.Title,{children:`Title`}),(0,o.jsx)(a.Text,{children:m}),(0,o.jsx)(a.Person,{name:`Name`,supporting:`Supporting text`})]})})})]})},S={name:`5 · Big stat`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Stat card`}),(0,o.jsx)(`p`,{style:f,children:`A headline number with a supporting suffix, paired with body copy and actions.`})]}),(0,o.jsx)(`div`,{style:{maxWidth:460},children:(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Stat,{prefix:`+`,value:`999`,suffix:`Million`}),(0,o.jsx)(a.Title,{children:`Title`}),(0,o.jsx)(a.Text,{children:m}),(0,o.jsxs)(a.Actions,{children:[(0,o.jsx)(n,{variant:`plain`,children:`Button`}),(0,o.jsx)(n,{children:`Button`})]})]})})})]})},C={name:`6 · Circle image + link`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Circle image + link`}),(0,o.jsx)(`p`,{style:f,children:`A round media element above a title, subtitle and a single text link.`})]}),(0,o.jsx)(`div`,{style:{maxWidth:440},children:(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Media,{shape:`circle`}),(0,o.jsx)(a.Title,{children:`Title of the card`}),(0,o.jsx)(a.Text,{children:`The subtitle text for whatever you'd want the user to read first.`}),(0,o.jsx)(a.Link,{href:`#`,children:`This is a link`})]})})})]})},w={name:`7 · Meta + close + alert + labels`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Detail card`}),(0,o.jsx)(`p`,{style:f,children:`A long-form layout combining metadata, a close affordance, an inline alert and a chip group.`})]}),(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Header,{meta:`This is a meta data text`,onClose:()=>void 0}),(0,o.jsx)(a.Title,{children:`Title of the card`}),(0,o.jsx)(a.Subtitle,{children:`The subtitle text for whatever you'd want the user to read first.`}),(0,o.jsx)(a.Text,{children:h}),(0,o.jsx)(a.Alert,{title:`This is the title`,children:`A problem was encountered while processing your request.`}),(0,o.jsxs)(a.Labels,{children:[(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`})]})]})})})]})},T={name:`8 · Booking · split actions`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Booking card`}),(0,o.jsx)(`p`,{style:f,children:`A primary "Book Your Tickets" action paired with a textual "Learn More" link.`})]}),(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Title,{children:`Title of the card`}),(0,o.jsx)(a.Subtitle,{children:`The subtitle text for whatever you'd want the user to read first.`}),(0,o.jsx)(a.Text,{children:h}),(0,o.jsxs)(a.Labels,{children:[(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`})]}),(0,o.jsx)(a.Alert,{icon:(0,o.jsx)(g,{}),children:`A problem was encountered while processing your request.`}),(0,o.jsxs)(a.Actions,{align:`between`,children:[(0,o.jsx)(n,{children:`Book Your Tickets`}),(0,o.jsx)(a.Link,{href:`#`,children:`Learn More`})]})]})})})]})},E={name:`9 · Featured detail`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Featured detail`}),(0,o.jsx)(`p`,{style:f,children:`A wider variant of the booking card with the same vocabulary of headline, body, labels, alert and actions.`})]}),(0,o.jsx)(`div`,{style:{maxWidth:520},children:(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Title,{children:`Title of the card`}),(0,o.jsx)(a.Subtitle,{children:`The subtitle text for whatever you'd want the user to read first.`}),(0,o.jsx)(a.Text,{children:h}),(0,o.jsxs)(a.Labels,{children:[(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`})]}),(0,o.jsx)(a.Alert,{icon:(0,o.jsx)(g,{}),children:`A problem was encountered while processing your request.`}),(0,o.jsxs)(a.Actions,{align:`between`,children:[(0,o.jsx)(n,{children:`Book Your Tickets`}),(0,o.jsx)(a.Link,{href:`#`,children:`Learn More`})]})]})})})]})},D={name:`10 · Image variants (LOGO + overlay)`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card · Assets`}),(0,o.jsx)(`h1`,{style:d,children:`Card image`}),(0,o.jsx)(`p`,{style:f,children:s})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`,maxWidth:480,width:`100%`},children:[(0,o.jsx)(a.Media,{shape:`banner`,logo:!0}),(0,o.jsx)(a.Media,{shape:`banner`,overlay:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Title,{style:{fontSize:22},children:`Title of the card`}),(0,o.jsx)(a.Text,{children:`The subtitle text for whatever you'd want the user to read first.`})]})})]})]})},O={name:`11 · Horizontal · full detail with LOGO`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Horizontal full detail`}),(0,o.jsx)(`p`,{style:f,children:`A horizontal layout combining a portrait media frame with the LOGO badge anchored bottom-left, and the full content vocabulary on the right (meta, close, title, subtitle, body, alert and labels).`})]}),(0,o.jsx)(`div`,{style:{maxWidth:720},children:(0,o.jsxs)(a,{theme:e,orientation:`horizontal`,children:[(0,o.jsx)(a.Media,{shape:`portrait`,logo:!0}),(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Header,{meta:`This is a meta data text`,onClose:()=>void 0}),(0,o.jsx)(a.Title,{children:`Title of the card`}),(0,o.jsx)(a.Subtitle,{children:`The subtitle text for whatever you'd want the user to read first.`}),(0,o.jsx)(a.Text,{children:h}),(0,o.jsx)(a.Alert,{title:`This is the title`,children:`A problem was encountered while processing your request.`}),(0,o.jsxs)(a.Labels,{children:[(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`})]})]})]})})]})},k={name:`12 · Vertical · full detail with LOGO`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsx)(`h1`,{style:d,children:`Vertical full detail`}),(0,o.jsx)(`p`,{style:f,children:`A vertical layout combining a banner media frame with the LOGO badge anchored bottom-left, and the full content vocabulary stacked below (meta, close, title, subtitle, body, alert and labels).`})]}),(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsxs)(a,{theme:e,children:[(0,o.jsx)(a.Media,{shape:`banner`,logo:!0}),(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Header,{meta:`This is a meta data text`,onClose:()=>void 0}),(0,o.jsx)(a.Title,{children:`Title of the card`}),(0,o.jsx)(a.Subtitle,{children:`The subtitle text for whatever you'd want the user to read first.`}),(0,o.jsx)(a.Text,{children:h}),(0,o.jsx)(a.Alert,{title:`This is the title`,children:`A problem was encountered while processing your request.`}),(0,o.jsxs)(a.Labels,{children:[(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`})]})]})]})})]})},A={name:`13 · Showcase (all variants)`,render:({theme:e})=>(0,o.jsxs)(`div`,{style:c(e),children:[(0,o.jsxs)(`header`,{style:l,children:[(0,o.jsx)(`div`,{style:u,children:`Components / Card`}),(0,o.jsxs)(`h1`,{style:d,children:[`Card`,e===`dark`?`: Dark`:``]}),(0,o.jsx)(`p`,{style:f,children:s})]}),(0,o.jsxs)(`div`,{style:p,children:[(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`flex-start`},children:[(0,o.jsx)(a.Icon,{}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,flex:1},children:[(0,o.jsx)(a.Title,{children:`Title`}),(0,o.jsx)(a.Text,{children:m})]})]}),(0,o.jsxs)(a.Actions,{children:[(0,o.jsx)(n,{variant:`plain`,children:`Button`}),(0,o.jsx)(n,{children:`Button`})]})]})}),(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Icon,{}),(0,o.jsx)(a.Title,{children:`Title`}),(0,o.jsx)(a.Text,{children:m}),(0,o.jsxs)(a.Actions,{children:[(0,o.jsx)(n,{variant:`plain`,children:`Button`}),(0,o.jsx)(n,{children:`Button`})]})]})}),(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Rating,{value:3.5}),(0,o.jsx)(a.Title,{children:`Title`}),(0,o.jsx)(a.Text,{children:m}),(0,o.jsx)(a.Person,{name:`Name`,supporting:`Supporting text`})]})}),(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Stat,{prefix:`+`,value:`999`,suffix:`Million`}),(0,o.jsx)(a.Title,{children:`Title`}),(0,o.jsx)(a.Text,{children:m}),(0,o.jsxs)(a.Actions,{children:[(0,o.jsx)(n,{variant:`plain`,children:`Button`}),(0,o.jsx)(n,{children:`Button`})]})]})}),(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Media,{shape:`circle`}),(0,o.jsx)(a.Title,{children:`Title of the card`}),(0,o.jsx)(a.Text,{children:`The subtitle text for whatever you'd want the user to read first.`}),(0,o.jsx)(a.Link,{href:`#`,children:`This is a link`})]})}),(0,o.jsx)(a,{theme:e,children:(0,o.jsxs)(a.Body,{children:[(0,o.jsx)(a.Title,{children:`Title of the card`}),(0,o.jsx)(a.Subtitle,{children:`The subtitle text for whatever you'd want the user to read first.`}),(0,o.jsx)(a.Text,{children:h}),(0,o.jsxs)(a.Labels,{children:[(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`}),(0,o.jsx)(a.Label,{children:`Label`})]}),(0,o.jsx)(a.Alert,{icon:(0,o.jsx)(g,{}),children:`A problem was encountered while processing your request.`}),(0,o.jsxs)(a.Actions,{align:`between`,children:[(0,o.jsx)(n,{children:`Book Your Tickets`}),(0,o.jsx)(a.Link,{href:`#`,children:`Learn More`})]})]})})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '1 · Icon + title (horizontal header)',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Icon header</h1>\r
        <p style={descriptionStyle}>\r
          A simple card with an icon next to the title and two actions in the\r
          footer.\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 560
    }}>\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <div style={{
            display: 'flex',
            gap: 16,
            alignItems: 'flex-start'
          }}>\r
              <Card.Icon />\r
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              flex: 1
            }}>\r
                <Card.Title>Title</Card.Title>\r
                <Card.Text>{bodyText}</Card.Text>\r
              </div>\r
            </div>\r
            <Card.Actions>\r
              <Button variant="plain">Button</Button>\r
              <Button>Button</Button>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '2 · Horizontal · portrait image',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Horizontal · portrait media</h1>\r
        <p style={descriptionStyle}>\r
          A side-by-side layout with the media inset inside the card padding.\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 560
    }}>\r
        <Card theme={theme} orientation="horizontal">\r
          <Card.Media shape="portrait" inset />\r
          <Card.Body>\r
            <Card.Title>Title</Card.Title>\r
            <Card.Text>{bodyText}</Card.Text>\r
            <Card.Actions>\r
              <Button>Button</Button>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '3 · Stacked icon + title',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Stacked icon</h1>\r
        <p style={descriptionStyle}>\r
          The icon sits above the title — useful for feature lists or\r
          highlight grids.\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 480
    }}>\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Icon />\r
            <Card.Title>Title</Card.Title>\r
            <Card.Text>{bodyText}</Card.Text>\r
            <Card.Actions>\r
              <Button variant="plain">Button</Button>\r
              <Button>Button</Button>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '4 · Rating + person',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Rating + person</h1>\r
        <p style={descriptionStyle}>\r
          Use stars and a person row to attribute a quote or testimonial.\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 480
    }}>\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Rating value={3.5} />\r
            <Card.Title>Title</Card.Title>\r
            <Card.Text>{bodyText}</Card.Text>\r
            <Card.Person name="Name" supporting="Supporting text" />\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '5 · Big stat',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Stat card</h1>\r
        <p style={descriptionStyle}>\r
          A headline number with a supporting suffix, paired with body copy\r
          and actions.\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 460
    }}>\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Stat prefix="+" value="999" suffix="Million" />\r
            <Card.Title>Title</Card.Title>\r
            <Card.Text>{bodyText}</Card.Text>\r
            <Card.Actions>\r
              <Button variant="plain">Button</Button>\r
              <Button>Button</Button>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '6 · Circle image + link',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Circle image + link</h1>\r
        <p style={descriptionStyle}>\r
          A round media element above a title, subtitle and a single text link.\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 440
    }}>\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Media shape="circle" />\r
            <Card.Title>Title of the card</Card.Title>\r
            <Card.Text>\r
              The subtitle text for whatever you'd want the user to read first.\r
            </Card.Text>\r
            <Card.Link href="#">This is a link</Card.Link>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '7 · Meta + close + alert + labels',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Detail card</h1>\r
        <p style={descriptionStyle}>\r
          A long-form layout combining metadata, a close affordance, an inline\r
          alert and a chip group.\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 480
    }}>\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Header meta="This is a meta data text" onClose={() => undefined} />\r
            <Card.Title>Title of the card</Card.Title>\r
            <Card.Subtitle>\r
              The subtitle text for whatever you'd want the user to read first.\r
            </Card.Subtitle>\r
            <Card.Text>{longBodyText}</Card.Text>\r
            <Card.Alert title="This is the title">\r
              A problem was encountered while processing your request.\r
            </Card.Alert>\r
            <Card.Labels>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
            </Card.Labels>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '8 · Booking · split actions',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Booking card</h1>\r
        <p style={descriptionStyle}>\r
          A primary "Book Your Tickets" action paired with a textual "Learn More"\r
          link.\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 480
    }}>\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Title>Title of the card</Card.Title>\r
            <Card.Subtitle>\r
              The subtitle text for whatever you'd want the user to read first.\r
            </Card.Subtitle>\r
            <Card.Text>{longBodyText}</Card.Text>\r
\r
            <Card.Labels>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
            </Card.Labels>\r
\r
            <Card.Alert icon={<PgRatingIcon />}>\r
              A problem was encountered while processing your request.\r
            </Card.Alert>\r
\r
            <Card.Actions align="between">\r
              <Button>Book Your Tickets</Button>\r
              <Card.Link href="#">Learn More</Card.Link>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '9 · Featured detail',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Featured detail</h1>\r
        <p style={descriptionStyle}>\r
          A wider variant of the booking card with the same vocabulary of\r
          headline, body, labels, alert and actions.\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 520
    }}>\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Title>Title of the card</Card.Title>\r
            <Card.Subtitle>\r
              The subtitle text for whatever you'd want the user to read first.\r
            </Card.Subtitle>\r
            <Card.Text>{longBodyText}</Card.Text>\r
\r
            <Card.Labels>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
            </Card.Labels>\r
\r
            <Card.Alert icon={<PgRatingIcon />}>\r
              A problem was encountered while processing your request.\r
            </Card.Alert>\r
\r
            <Card.Actions align="between">\r
              <Button>Book Your Tickets</Button>\r
              <Card.Link href="#">Learn More</Card.Link>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '10 · Image variants (LOGO + overlay)',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card · Assets</div>\r
        <h1 style={titleStyle}>Card image</h1>\r
        <p style={descriptionStyle}>{description}</p>\r
      </header>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      maxWidth: 480,
      width: '100%'
    }}>\r
        <Card.Media shape="banner" logo />\r
        <Card.Media shape="banner" overlay={<>\r
              <Card.Title style={{
          fontSize: 22
        }}>Title of the card</Card.Title>\r
              <Card.Text>\r
                The subtitle text for whatever you'd want the user to read first.\r
              </Card.Text>\r
            </>} />\r
      </div>\r
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '11 · Horizontal · full detail with LOGO',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Horizontal full detail</h1>\r
        <p style={descriptionStyle}>\r
          A horizontal layout combining a portrait media frame with the LOGO\r
          badge anchored bottom-left, and the full content vocabulary on the\r
          right (meta, close, title, subtitle, body, alert and labels).\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 720
    }}>\r
        <Card theme={theme} orientation="horizontal">\r
          <Card.Media shape="portrait" logo />\r
          <Card.Body>\r
            <Card.Header meta="This is a meta data text" onClose={() => undefined} />\r
            <Card.Title>Title of the card</Card.Title>\r
            <Card.Subtitle>\r
              The subtitle text for whatever you'd want the user to read first.\r
            </Card.Subtitle>\r
            <Card.Text>{longBodyText}</Card.Text>\r
            <Card.Alert title="This is the title">\r
              A problem was encountered while processing your request.\r
            </Card.Alert>\r
            <Card.Labels>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
            </Card.Labels>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '12 · Vertical · full detail with LOGO',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Vertical full detail</h1>\r
        <p style={descriptionStyle}>\r
          A vertical layout combining a banner media frame with the LOGO\r
          badge anchored bottom-left, and the full content vocabulary stacked\r
          below (meta, close, title, subtitle, body, alert and labels).\r
        </p>\r
      </header>\r
      <div style={{
      maxWidth: 480
    }}>\r
        <Card theme={theme}>\r
          <Card.Media shape="banner" logo />\r
          <Card.Body>\r
            <Card.Header meta="This is a meta data text" onClose={() => undefined} />\r
            <Card.Title>Title of the card</Card.Title>\r
            <Card.Subtitle>\r
              The subtitle text for whatever you'd want the user to read first.\r
            </Card.Subtitle>\r
            <Card.Text>{longBodyText}</Card.Text>\r
            <Card.Alert title="This is the title">\r
              A problem was encountered while processing your request.\r
            </Card.Alert>\r
            <Card.Labels>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
            </Card.Labels>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '13 · Showcase (all variants)',
  render: ({
    theme
  }) => <div style={getPageStyle(theme)}>\r
      <header style={headerStyle}>\r
        <div style={breadcrumbStyle}>Components / Card</div>\r
        <h1 style={titleStyle}>Card{theme === 'dark' ? ': Dark' : ''}</h1>\r
        <p style={descriptionStyle}>{description}</p>\r
      </header>\r
\r
      <div style={gridStyle}>\r
        {/* 1. Icon header */}\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <div style={{
            display: 'flex',
            gap: 16,
            alignItems: 'flex-start'
          }}>\r
              <Card.Icon />\r
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              flex: 1
            }}>\r
                <Card.Title>Title</Card.Title>\r
                <Card.Text>{bodyText}</Card.Text>\r
              </div>\r
            </div>\r
            <Card.Actions>\r
              <Button variant="plain">Button</Button>\r
              <Button>Button</Button>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
\r
        {/* 3. Stacked icon */}\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Icon />\r
            <Card.Title>Title</Card.Title>\r
            <Card.Text>{bodyText}</Card.Text>\r
            <Card.Actions>\r
              <Button variant="plain">Button</Button>\r
              <Button>Button</Button>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
\r
        {/* 4. Rating */}\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Rating value={3.5} />\r
            <Card.Title>Title</Card.Title>\r
            <Card.Text>{bodyText}</Card.Text>\r
            <Card.Person name="Name" supporting="Supporting text" />\r
          </Card.Body>\r
        </Card>\r
\r
        {/* 5. Stat */}\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Stat prefix="+" value="999" suffix="Million" />\r
            <Card.Title>Title</Card.Title>\r
            <Card.Text>{bodyText}</Card.Text>\r
            <Card.Actions>\r
              <Button variant="plain">Button</Button>\r
              <Button>Button</Button>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
\r
        {/* 6. Circle */}\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Media shape="circle" />\r
            <Card.Title>Title of the card</Card.Title>\r
            <Card.Text>\r
              The subtitle text for whatever you'd want the user to read first.\r
            </Card.Text>\r
            <Card.Link href="#">This is a link</Card.Link>\r
          </Card.Body>\r
        </Card>\r
\r
        {/* 8. Booking */}\r
        <Card theme={theme}>\r
          <Card.Body>\r
            <Card.Title>Title of the card</Card.Title>\r
            <Card.Subtitle>\r
              The subtitle text for whatever you'd want the user to read first.\r
            </Card.Subtitle>\r
            <Card.Text>{longBodyText}</Card.Text>\r
            <Card.Labels>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
              <Card.Label>Label</Card.Label>\r
            </Card.Labels>\r
            <Card.Alert icon={<PgRatingIcon />}>\r
              A problem was encountered while processing your request.\r
            </Card.Alert>\r
            <Card.Actions align="between">\r
              <Button>Book Your Tickets</Button>\r
              <Card.Link href="#">Learn More</Card.Link>\r
            </Card.Actions>\r
          </Card.Body>\r
        </Card>\r
      </div>\r
    </div>
}`,...A.parameters?.docs?.source}}},j=[`IconHeader`,`HorizontalPortrait`,`StackedIcon`,`RatingPerson`,`StatCard`,`CircleMedia`,`DetailCard`,`BookingCard`,`FeaturedDetail`,`ImageAssets`,`HorizontalFullDetail`,`VerticalFullDetail`,`Showcase`]}))();export{T as BookingCard,C as CircleMedia,w as DetailCard,E as FeaturedDetail,O as HorizontalFullDetail,y as HorizontalPortrait,v as IconHeader,D as ImageAssets,x as RatingPerson,A as Showcase,b as StackedIcon,S as StatCard,k as VerticalFullDetail,j as __namedExportsOrder,_ as default};