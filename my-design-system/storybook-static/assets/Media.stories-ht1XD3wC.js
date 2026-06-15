import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Brs2brnf.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./VideoPlayer-DXSYv85L.js";import{n as o,t as s}from"./VideoGallery-BDQPg8l4.js";var c=e((()=>{})),l,u,d,f=e((()=>{c(),l=r(),u=()=>(0,l.jsxs)(`svg`,{className:`ds-media__placeholder-icon`,viewBox:`0 0 80 56`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,l.jsx)(`circle`,{cx:`22`,cy:`14`,r:`8`,fill:`currentColor`}),(0,l.jsx)(`path`,{d:`M0 56L22 24L38 40L56 16L80 56H0Z`,fill:`currentColor`})]}),d=({src:e,alt:t=``,ratio:n=`video`,overlay:r=!0,theme:i,className:a,...o})=>(0,l.jsxs)(`div`,{className:[`ds-media`,`ds-media--${n}`,i&&`ds-media--${i}`,a].filter(Boolean).join(` `),...o,children:[e?(0,l.jsx)(`img`,{src:e,alt:t,className:`ds-media__image`}):(0,l.jsx)(`div`,{className:`ds-media__placeholder`,"aria-hidden":`true`,children:(0,l.jsx)(u,{})}),r&&(0,l.jsx)(`div`,{className:`ds-media__overlay`,"aria-hidden":`true`})]}),d.__docgenInfo={description:``,methods:[],displayName:`Media`,props:{src:{required:!1,tsType:{name:`string`},description:`Image URL — when omitted a styled placeholder is rendered`},alt:{required:!1,tsType:{name:`string`},description:`Alt text for the image`,defaultValue:{value:`''`,computed:!1}},ratio:{required:!1,tsType:{name:`union`,raw:`'square' | 'video' | 'story' | 'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'square'`},{name:`literal`,value:`'video'`},{name:`literal`,value:`'story'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Aspect ratio variant`,defaultValue:{value:`'video'`,computed:!1}},overlay:{required:!1,tsType:{name:`boolean`},description:`Adds a subtle dark overlay on top of the media (5 % opacity) — matches Figma`,defaultValue:{value:`true`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:"Colour theme — 'light' (default) | 'dark'. Also responds to `prefers-color-scheme`."}},composes:[`HTMLAttributes`]}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{p=t(n(),1),f(),o(),i(),m=r(),h=[`square`,`video`,`story`,`vertical`,`horizontal`],g={square:`Square 1:1`,video:`Video 16:9`,story:`Story 9:16`,vertical:`Vertical 10:13`,horizontal:`Horizontal 13:10`},_=`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800`,v=Array.from({length:6},(e,t)=>({id:`ep-${t+1}`,title:`Episode ${t+1} — ${[`Introduction`,`The Journey`,`Discovery`,`Turning Point`,`The Reveal`,`Finale`][t]}`,duration:1800+t*300,currentTime:0})),y={title:`Shop and Drop`,currentTime:2858,duration:6752},b=6752,x=`#e9ecf0`,S=`#141f2e`,C=`#0a111a`,w={title:`Components/Media (Maher Al Rifai)`,component:d,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"\nThe **Media** component is a responsive image/video container with configurable aspect ratios and an optional dark overlay.\n**VideoPlayer** is a fully controlled player — all state is managed by the parent.\n**VideoGallery** wraps VideoPlayer with a suggested-videos sidebar and a bottom thumbnail row.\n\n---\n\n### Media — props\n\n| Prop | Type | Default | Description |\n|---|---|---|---|\n| `ratio` | string | `'video'` | Aspect ratio: `square` · `video` · `story` · `vertical` · `horizontal` |\n| `theme` | string | `'light'` | `'light'` or `'dark'` — also responds to `prefers-color-scheme` |\n| `src` | string | — | Image URL — omit to show placeholder |\n| `overlay` | boolean | true | 5% dark overlay on top of media |\n\n---\n\n### VideoPlayer — controlled props\n\n| Prop | Type | Default | Description |\n|---|---|---|---|\n| `isPlaying` | boolean | false | Play/pause state |\n| `currentTime` | number | 0 | Playback position in seconds |\n| `duration` | number | 0 | Total duration in seconds |\n| `isMuted` | boolean | false | Muted — swaps icon + adds accent dot |\n| `showSubtitles` | boolean | false | Subtitles on — accent dot under CC |\n| `showControls` | boolean | true | Show / hide the controls overlay |\n| `title` | string | — | Title shown in the controls bar |\n| `src` | string | — | Video source URL |\n| `poster` | string | — | Thumbnail before playback |\n\n### VideoPlayer — callbacks\n\n| Callback | Triggered by |\n|---|---|\n| `onPlayPause` | Play / pause / big centre button |\n| `onSeek(fraction)` | Progress bar click (0–1) |\n| `onRewind` | Rewind 15 s |\n| `onForward` | Forward 15 s |\n| `onMuteToggle` | Volume button |\n| `onSubtitlesToggle` | CC button |\n| `onFullscreen` | Fullscreen button |\n| `onMore` | More (⋮) button |\n\n---\n\n### VideoGallery — additional props\n\n| Prop | Type | Description |\n|---|---|---|\n| `mainVideo` | VideoItem | Featured video (title, src, poster, duration, currentTime) |\n| `suggestedVideos` | VideoItem[] | Up to 6 — items 0–2 → sidebar, 3–5 → bottom row |\n| `activeVideoIndex` | number | Highlighted thumbnail index |\n| `onVideoSelect` | (index, item) => void | Thumbnail click handler |\n        "}}},args:{ratio:`video`,overlay:!0,theme:`light`},argTypes:{ratio:{control:{type:`select`},options:h,description:`Aspect ratio variant`,table:{category:`Media`}},theme:{control:{type:`inline-radio`},options:[`light`,`dark`],description:"Colour theme — also responds to `prefers-color-scheme`",table:{category:`Media`}},src:{control:`text`,description:`Image URL — leave empty to show placeholder`,table:{category:`Media`}},alt:{control:`text`,table:{category:`Media`}},overlay:{control:`boolean`,description:`Adds a 5% dark overlay on top of the media`,table:{category:`Media`}}},decorators:[e=>(0,m.jsx)(e,{})]},T={name:`Playground`,decorators:[e=>(0,m.jsx)(`div`,{style:{maxWidth:560},children:(0,m.jsx)(e,{})})],parameters:{docs:{source:{language:`tsx`,code:`import { Media } from '@your-org/design-system'

<Media ratio="video" theme="light" src="https://example.com/image.jpg" overlay />`}}}},E={name:`Video Gallery`,parameters:{layout:`padded`,docs:{description:{story:`
Full interactive **VideoGallery** — every prop is exposed in the Controls panel below.

- **Theme** — switches between light and dark placeholders; also responds to \`prefers-color-scheme\`
- **Show Controls** — toggles the player overlay bar on/off
- **Is Playing** — seeds the initial play/pause state (player buttons also toggle it live)
- **Is Muted** — seeds the initial mute state
- **Show Subtitles** — seeds the initial subtitle state
- **Main Video** / **Suggested Videos** — edit JSON to swap video data

Figma node **25705:15222** implementation details:
- Desktop: main media height **517 px**, sidebar width **233 px**, sidebar thumbs **3 × 156 px**, bottom thumbs **3 × 176 px**
- Spacing: **24 px** between regions and thumbnails
- Token colors: placeholder **$mapping-system-slate-surface-secondary** (
  #e9ecf0), controls text/icons **$mapping-system-slate-surface-primary** (
  #f5f7fa), thumb play-circle **$mapping-system-slate-border-tertiary** (
  #d7d7d7)
- Responsive: tablet stacks main + horizontal suggested row, mobile uses 2-col sidebar grid and 1-col bottom stack
        `},source:{language:`tsx`,code:`import { useState } from 'react'
import { VideoGallery } from '@your-org/design-system'
import type { VideoItem } from '@your-org/design-system'

const MAIN: VideoItem = { title: 'Shop and Drop', duration: 6752, currentTime: 2858 }
const SUGGESTED: VideoItem[] = [
  { id: '1', title: 'Episode 1', duration: 1800, currentTime: 0 },
  { id: '2', title: 'Episode 2', duration: 2100, currentTime: 0 },
  // …up to 6
]

export function MyVideoPage() {
  const [mainVideo, setMainVideo]     = useState<VideoItem>(MAIN)
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  const [isPlaying, setIsPlaying]     = useState(false)
  const [currentTime, setCurrentTime] = useState(MAIN.currentTime ?? 0)
  const [isMuted, setIsMuted]         = useState(false)
  const [showSubtitles, setSubtitles] = useState(false)

  const handleSelect = (index: number, item: VideoItem) => {
    setMainVideo(item); setActiveIndex(index)
    setCurrentTime(item.currentTime ?? 0); setIsPlaying(false)
  }

  return (
    <VideoGallery
      theme="light"
      mainVideo={{ ...mainVideo, currentTime }}
      suggestedVideos={SUGGESTED}
      activeVideoIndex={activeIndex}
      onVideoSelect={handleSelect}
      isPlaying={isPlaying}
      isMuted={isMuted}
      showSubtitles={showSubtitles}
      showControls
      onPlayPause={() => setIsPlaying(p => !p)}
      onSeek={f => setCurrentTime(Math.round(f * (mainVideo.duration ?? 0)))}
      onRewind={() => setCurrentTime(t => Math.max(0, t - 15))}
      onForward={() => setCurrentTime(t => Math.min(mainVideo.duration ?? 0, t + 15))}
      onMuteToggle={() => setIsMuted(m => !m)}
      onSubtitlesToggle={() => setSubtitles(s => !s)}
    />
  )
}`}}},args:{vg_theme:`light`,vg_showControls:!0,vg_isPlaying:!1,vg_isMuted:!1,vg_showSubtitles:!1,vg_mainVideo:y,vg_suggestedVideos:[{id:`ep-1`,title:`Episode 1 — Introduction`,duration:1800,currentTime:0},{id:`ep-2`,title:`Episode 2 — The Journey`,duration:2100,currentTime:0},{id:`ep-3`,title:`Episode 3 — Discovery`,duration:2400,currentTime:0},{id:`ep-4`,title:`Episode 4 — Turning Point`,duration:2700,currentTime:0},{id:`ep-5`,title:`Episode 5 — The Reveal`,duration:3e3,currentTime:0},{id:`maher`,title:`Episode 6 — Finale`,duration:3300,currentTime:0}]},argTypes:{ratio:{table:{disable:!0}},src:{table:{disable:!0}},alt:{table:{disable:!0}},overlay:{table:{disable:!0}},theme:{table:{disable:!0}},vg_theme:{name:`theme`,control:{type:`inline-radio`},options:[`light`,`dark`],description:"Colour theme — also responds to `prefers-color-scheme`",table:{category:`Theme`}},vg_showControls:{name:`showControls`,control:`boolean`,description:`Show or hide the player controls overlay bar`,table:{category:`Visibility`}},vg_isPlaying:{name:`isPlaying`,control:`boolean`,description:`Seeds the initial play/pause state. Player buttons also toggle it live.`,table:{category:`Playback`}},vg_isMuted:{name:`isMuted`,control:`boolean`,description:`Seeds the initial mute state. Volume button also toggles it live.`,table:{category:`Volume`}},vg_showSubtitles:{name:`showSubtitles`,control:`boolean`,description:`Seeds the initial subtitle state. CC button also toggles it live.`,table:{category:`Subtitles`}},vg_mainVideo:{name:`mainVideo`,control:`object`,description:"Featured video data — `title`, `src`, `poster`, `duration`, `currentTime`",table:{category:`Videos`}},vg_suggestedVideos:{name:`suggestedVideos`,control:`object`,description:`Up to 6 suggested videos. Items 0–2 → 233 px sidebar. Items 3–5 → bottom row.`,table:{category:`Videos`}}},decorators:[e=>(0,m.jsx)(`div`,{style:{maxWidth:1440},children:(0,m.jsx)(e,{})})],render:e=>{let t=e.vg_theme??`light`,n=e.vg_showControls??!0,r=e.vg_isPlaying??!1,i=e.vg_isMuted??!1,a=e.vg_showSubtitles??!1,o=e.vg_mainVideo??y,c=e.vg_suggestedVideos??v,l=t===`dark`,[u,d]=(0,p.useState)(o),[f,h]=(0,p.useState)(void 0),[g,_]=(0,p.useState)(r),[b,x]=(0,p.useState)(o.currentTime??0),[S,C]=(0,p.useState)(i),[w,T]=(0,p.useState)(a);(0,p.useEffect)(()=>_(r),[r]),(0,p.useEffect)(()=>C(i),[i]),(0,p.useEffect)(()=>T(a),[a]),(0,p.useEffect)(()=>{d(o),x(o.currentTime??0),h(void 0)},[o]);let E=(e,t)=>{d(t),h(e),x(t.currentTime??0),_(!1)};return(0,m.jsx)(`div`,{style:{backgroundColor:l?`#141f2e`:`#f5f7fa`,padding:24,transition:`background-color 0.2s ease`},children:(0,m.jsx)(s,{theme:t,showControls:n,mainVideo:{...u,currentTime:b},suggestedVideos:c,activeVideoIndex:f,onVideoSelect:E,isPlaying:g,isMuted:S,showSubtitles:w,onPlayPause:()=>_(e=>!e),onSeek:e=>x(Math.round(e*(u.duration??0))),onRewind:()=>x(e=>Math.max(0,e-15)),onForward:()=>x(e=>Math.min(u.duration??0,e+15)),onMuteToggle:()=>C(e=>!e),onSubtitlesToggle:()=>T(e=>!e)})})}},D={name:`All Media`,tags:[`!autodocs`],parameters:{layout:`fullscreen`,docs:{description:{story:`Exact Figma media frame (node 25127:8670) rendered in both light and dark themes with identical layout.`}}},args:{theme:`light`,overlay:!0},argTypes:{theme:{control:{type:`inline-radio`},options:[`light`,`dark`],description:`Theme switch for the full All Media layout`,table:{category:`Theme`}},ratio:{table:{disable:!0}},src:{table:{disable:!0}},alt:{table:{disable:!0}},overlay:{table:{disable:!0}}},render:e=>{let t=e.theme??`light`,n=t===`dark`;return(0,m.jsx)(`div`,{style:{minHeight:`100vh`,backgroundColor:n?C:`#ffffff`,padding:`0 24px`,display:`flex`,justifyContent:`center`,boxSizing:`border-box`},children:(0,m.jsxs)(`div`,{style:{width:752,maxWidth:`100%`,backgroundColor:n?S:x,padding:16,display:`flex`,flexDirection:`column`,gap:26,boxSizing:`border-box`},children:[(0,m.jsx)(`div`,{style:{width:400,maxWidth:`100%`},children:(0,m.jsx)(d,{ratio:`square`,theme:t,overlay:!0})}),(0,m.jsx)(`div`,{style:{width:720,maxWidth:`100%`},children:(0,m.jsx)(d,{ratio:`video`,theme:t,overlay:!0})}),(0,m.jsx)(`div`,{style:{width:405,maxWidth:`100%`},children:(0,m.jsx)(d,{ratio:`story`,theme:t,overlay:!0})}),(0,m.jsx)(`div`,{style:{width:520,maxWidth:`100%`},children:(0,m.jsx)(d,{ratio:`horizontal`,theme:t,overlay:!0})}),(0,m.jsx)(`div`,{style:{width:400,maxWidth:`100%`},children:(0,m.jsx)(d,{ratio:`vertical`,theme:t,overlay:!0})})]})})}},O=({children:e})=>(0,m.jsx)(`p`,{style:{fontFamily:`monospace`,fontSize:11,fontWeight:700,margin:`0 0 6px`,color:`#1e2c3e`},children:e}),k=({children:e})=>(0,m.jsx)(`p`,{style:{fontFamily:`sans-serif`,fontSize:11,margin:`0 0 8px`,color:`#888`},children:e}),A=({children:e})=>(0,m.jsx)(`h3`,{style:{fontFamily:`sans-serif`,fontSize:12,fontWeight:700,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#545454`,margin:`0 0 16px`,borderBottom:`1px solid #e9ecf0`,paddingBottom:8},children:e}),j={name:`Overview`,tags:[`!dev`],parameters:{layout:`padded`,controls:{disable:!0},docs:{description:{story:`All **Media** ratios and themes, all **VideoPlayer** states, and the full **VideoGallery** layout — in one scrollable reference view.`}}},decorators:[e=>(0,m.jsx)(`div`,{style:{maxWidth:1200},children:(0,m.jsx)(e,{})})],render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:56,fontFamily:`sans-serif`},children:[(0,m.jsxs)(`section`,{children:[(0,m.jsx)(A,{children:`Media — Aspect Ratios`}),(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:h.map(e=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6},children:[(0,m.jsxs)(O,{children:[`ratio="`,e,`" — `,g[e]]}),(0,m.jsx)(`div`,{style:{maxWidth:e===`story`?240:e===`vertical`?280:560},children:(0,m.jsx)(d,{ratio:e,overlay:!0})})]},e))})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(A,{children:`Media — Themes`}),(0,m.jsx)(`div`,{style:{display:`flex`,gap:24},children:[`light`,`dark`].map(e=>(0,m.jsxs)(`div`,{style:{flex:1,backgroundColor:e===`dark`?`#141f2e`:`#f5f7fa`,borderRadius:12,padding:20,display:`flex`,flexDirection:`column`,gap:8},children:[(0,m.jsxs)(`p`,{style:{fontFamily:`sans-serif`,fontSize:12,fontWeight:600,textTransform:`capitalize`,margin:0,color:e===`dark`?`#91a2b1`:`#545454`},children:[`theme="`,e,`"`]}),(0,m.jsx)(d,{ratio:`video`,theme:e,overlay:!0})]},e))})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(A,{children:`Media — With Image`}),(0,m.jsx)(k,{children:`Pass src to display a real image instead of the placeholder.`}),(0,m.jsx)(`div`,{style:{maxWidth:560},children:(0,m.jsx)(d,{ratio:`video`,src:_,alt:`Mountain landscape`,overlay:!0})})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(A,{children:`VideoPlayer — States`}),(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:32},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(O,{children:[`isPlaying=`,`{false}`,` — default`]}),(0,m.jsx)(k,{children:`Big centre play button visible`}),(0,m.jsx)(a,{title:`Shop and Drop`,currentTime:2858,duration:b,isPlaying:!1,showControls:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(O,{children:[`isPlaying=`,`{true}`]}),(0,m.jsx)(k,{children:`Big button hidden, pause icon in bar`}),(0,m.jsx)(a,{title:`Shop and Drop`,currentTime:2858,duration:b,isPlaying:!0,showControls:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(O,{children:[`isMuted=`,`{true}`]}),(0,m.jsx)(k,{children:`Struck speaker + accent dot indicator`}),(0,m.jsx)(a,{title:`Shop and Drop`,currentTime:2858,duration:b,isMuted:!0,showControls:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(O,{children:[`showSubtitles=`,`{true}`]}),(0,m.jsx)(k,{children:`Accent dot under CC button`}),(0,m.jsx)(a,{title:`Shop and Drop`,currentTime:2858,duration:b,showSubtitles:!0,showControls:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(O,{children:[`showControls=`,`{false}`]}),(0,m.jsx)(k,{children:`Controls hidden — clean media frame`}),(0,m.jsx)(a,{title:`Shop and Drop`,currentTime:2858,duration:b,showControls:!1})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(O,{children:[`poster + currentTime=`,`{0}`]}),(0,m.jsx)(k,{children:`Thumbnail shown, progress bar at start`}),(0,m.jsx)(a,{title:`Mountain Timelapse`,poster:`https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800`,currentTime:0,duration:360,showControls:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(O,{children:`Progress 0%`}),(0,m.jsx)(k,{children:`currentTime=0 — bar completely empty`}),(0,m.jsx)(a,{title:`Shop and Drop`,currentTime:0,duration:b,showControls:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(O,{children:`Progress 100%`}),(0,m.jsx)(k,{children:`currentTime=duration — bar fully filled`}),(0,m.jsx)(a,{title:`Shop and Drop`,currentTime:b,duration:b,showControls:!0})]})]})]}),(0,m.jsxs)(`section`,{children:[(0,m.jsx)(A,{children:`VideoGallery — Full Layout`}),(0,m.jsx)(k,{children:`mainVideo + 6 suggestedVideos. Desktop: main 517 px, sidebar 233 px with 3 × 156 px, bottom row 3 × 176 px. Uses Figma token colors (#e9ecf0, #f5f7fa, #d7d7d7) and responsive tablet/mobile stacking.`}),(0,m.jsxs)(`div`,{style:{marginBottom:24},children:[(0,m.jsx)(O,{children:`theme="light"`}),(0,m.jsx)(s,{theme:`light`,mainVideo:y,suggestedVideos:v,isPlaying:!1,isMuted:!1,showSubtitles:!1,showControls:!0})]}),(0,m.jsxs)(`div`,{style:{backgroundColor:`#141f2e`,borderRadius:12,padding:20},children:[(0,m.jsx)(O,{children:`theme="dark"`}),(0,m.jsx)(s,{theme:`dark`,mainVideo:y,suggestedVideos:v,isPlaying:!1,isMuted:!1,showSubtitles:!1,showControls:!0})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  decorators: [Story => <div style={{
    maxWidth: 560
  }}>
        <Story />
      </div>],
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`import { Media } from '@your-org/design-system'

<Media ratio="video" theme="light" src="https://example.com/image.jpg" overlay />\`
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Video Gallery',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: \`
Full interactive **VideoGallery** — every prop is exposed in the Controls panel below.

- **Theme** — switches between light and dark placeholders; also responds to \\\`prefers-color-scheme\\\`
- **Show Controls** — toggles the player overlay bar on/off
- **Is Playing** — seeds the initial play/pause state (player buttons also toggle it live)
- **Is Muted** — seeds the initial mute state
- **Show Subtitles** — seeds the initial subtitle state
- **Main Video** / **Suggested Videos** — edit JSON to swap video data

Figma node **25705:15222** implementation details:
- Desktop: main media height **517 px**, sidebar width **233 px**, sidebar thumbs **3 × 156 px**, bottom thumbs **3 × 176 px**
- Spacing: **24 px** between regions and thumbnails
- Token colors: placeholder **$mapping-system-slate-surface-secondary** (
  #e9ecf0), controls text/icons **$mapping-system-slate-surface-primary** (
  #f5f7fa), thumb play-circle **$mapping-system-slate-border-tertiary** (
  #d7d7d7)
- Responsive: tablet stacks main + horizontal suggested row, mobile uses 2-col sidebar grid and 1-col bottom stack
        \`
      },
      source: {
        language: 'tsx',
        code: \`import { useState } from 'react'
import { VideoGallery } from '@your-org/design-system'
import type { VideoItem } from '@your-org/design-system'

const MAIN: VideoItem = { title: 'Shop and Drop', duration: 6752, currentTime: 2858 }
const SUGGESTED: VideoItem[] = [
  { id: '1', title: 'Episode 1', duration: 1800, currentTime: 0 },
  { id: '2', title: 'Episode 2', duration: 2100, currentTime: 0 },
  // …up to 6
]

export function MyVideoPage() {
  const [mainVideo, setMainVideo]     = useState<VideoItem>(MAIN)
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  const [isPlaying, setIsPlaying]     = useState(false)
  const [currentTime, setCurrentTime] = useState(MAIN.currentTime ?? 0)
  const [isMuted, setIsMuted]         = useState(false)
  const [showSubtitles, setSubtitles] = useState(false)

  const handleSelect = (index: number, item: VideoItem) => {
    setMainVideo(item); setActiveIndex(index)
    setCurrentTime(item.currentTime ?? 0); setIsPlaying(false)
  }

  return (
    <VideoGallery
      theme="light"
      mainVideo={{ ...mainVideo, currentTime }}
      suggestedVideos={SUGGESTED}
      activeVideoIndex={activeIndex}
      onVideoSelect={handleSelect}
      isPlaying={isPlaying}
      isMuted={isMuted}
      showSubtitles={showSubtitles}
      showControls
      onPlayPause={() => setIsPlaying(p => !p)}
      onSeek={f => setCurrentTime(Math.round(f * (mainVideo.duration ?? 0)))}
      onRewind={() => setCurrentTime(t => Math.max(0, t - 15))}
      onForward={() => setCurrentTime(t => Math.min(mainVideo.duration ?? 0, t + 15))}
      onMuteToggle={() => setIsMuted(m => !m)}
      onSubtitlesToggle={() => setSubtitles(s => !s)}
    />
  )
}\`
      }
    }
  },
  // Story-level args — these appear in the Controls panel
  args: {
    vg_theme: 'light',
    vg_showControls: true,
    vg_isPlaying: false,
    vg_isMuted: false,
    vg_showSubtitles: false,
    vg_mainVideo: MAIN_VIDEO,
    vg_suggestedVideos: [{
      "id": "ep-1",
      "title": "Episode 1 — Introduction",
      "duration": 1800,
      "currentTime": 0
    }, {
      "id": "ep-2",
      "title": "Episode 2 — The Journey",
      "duration": 2100,
      "currentTime": 0
    }, {
      "id": "ep-3",
      "title": "Episode 3 — Discovery",
      "duration": 2400,
      "currentTime": 0
    }, {
      "id": "ep-4",
      "title": "Episode 4 — Turning Point",
      "duration": 2700,
      "currentTime": 0
    }, {
      "id": "ep-5",
      "title": "Episode 5 — The Reveal",
      "duration": 3000,
      "currentTime": 0
    }, {
      "id": "maher",
      "title": "Episode 6 — Finale",
      "duration": 3300,
      "currentTime": 0
    }]
  },
  // Story-level argTypes — hide Media controls, add VideoGallery controls
  argTypes: {
    // ── Hide all Media controls for this story ──────────────────────────
    ratio: {
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
    overlay: {
      table: {
        disable: true
      }
    },
    theme: {
      table: {
        disable: true
      }
    },
    // ── VideoGallery controls ───────────────────────────────────────────
    vg_theme: {
      name: 'theme',
      control: {
        type: 'inline-radio'
      },
      options: ['light', 'dark'],
      description: 'Colour theme — also responds to \`prefers-color-scheme\`',
      table: {
        category: 'Theme'
      }
    },
    vg_showControls: {
      name: 'showControls',
      control: 'boolean',
      description: 'Show or hide the player controls overlay bar',
      table: {
        category: 'Visibility'
      }
    },
    vg_isPlaying: {
      name: 'isPlaying',
      control: 'boolean',
      description: 'Seeds the initial play/pause state. Player buttons also toggle it live.',
      table: {
        category: 'Playback'
      }
    },
    vg_isMuted: {
      name: 'isMuted',
      control: 'boolean',
      description: 'Seeds the initial mute state. Volume button also toggles it live.',
      table: {
        category: 'Volume'
      }
    },
    vg_showSubtitles: {
      name: 'showSubtitles',
      control: 'boolean',
      description: 'Seeds the initial subtitle state. CC button also toggles it live.',
      table: {
        category: 'Subtitles'
      }
    },
    vg_mainVideo: {
      name: 'mainVideo',
      control: 'object',
      description: 'Featured video data — \`title\`, \`src\`, \`poster\`, \`duration\`, \`currentTime\`',
      table: {
        category: 'Videos'
      }
    },
    vg_suggestedVideos: {
      name: 'suggestedVideos',
      control: 'object',
      description: 'Up to 6 suggested videos. Items 0–2 → 233 px sidebar. Items 3–5 → bottom row.',
      table: {
        category: 'Videos'
      }
    }
  },
  decorators: [Story => <div style={{
    maxWidth: 1440
  }}>
        <Story />
      </div>],
  render: args => {
    const theme = args.vg_theme ?? 'light';
    const showControls = args.vg_showControls ?? true;
    const seedPlaying = args.vg_isPlaying ?? false;
    const seedMuted = args.vg_isMuted ?? false;
    const seedSubs = args.vg_showSubtitles ?? false;
    const mainVideoArg = args.vg_mainVideo ?? MAIN_VIDEO;
    const suggestedArg = args.vg_suggestedVideos ?? SAMPLE_VIDEOS;
    const isDark = theme === 'dark';
    const [mainVideo, setMainVideo] = useState<VideoItem>(mainVideoArg);
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
    const [isPlaying, setIsPlaying] = useState(seedPlaying);
    const [currentTime, setCurrentTime] = useState(mainVideoArg.currentTime ?? 0);
    const [isMuted, setIsMuted] = useState(seedMuted);
    const [showSubtitles, setShowSubtitles] = useState(seedSubs);

    // Sync Controls panel changes into local state
    useEffect(() => setIsPlaying(seedPlaying), [seedPlaying]);
    useEffect(() => setIsMuted(seedMuted), [seedMuted]);
    useEffect(() => setShowSubtitles(seedSubs), [seedSubs]);
    useEffect(() => {
      setMainVideo(mainVideoArg);
      setCurrentTime(mainVideoArg.currentTime ?? 0);
      setActiveIndex(undefined);
    }, [mainVideoArg]);
    const handleVideoSelect = (index: number, item: VideoItem) => {
      setMainVideo(item);
      setActiveIndex(index);
      setCurrentTime(item.currentTime ?? 0);
      setIsPlaying(false);
    };
    return <div style={{
      backgroundColor: isDark ? '#141f2e' : '#f5f7fa',
      padding: 24,
      transition: 'background-color 0.2s ease'
    }}>
        <VideoGallery theme={theme} showControls={showControls} mainVideo={{
        ...mainVideo,
        currentTime
      }} suggestedVideos={suggestedArg} activeVideoIndex={activeIndex} onVideoSelect={handleVideoSelect} isPlaying={isPlaying} isMuted={isMuted} showSubtitles={showSubtitles} onPlayPause={() => setIsPlaying(p => !p)} onSeek={f => setCurrentTime(Math.round(f * (mainVideo.duration ?? 0)))} onRewind={() => setCurrentTime(t => Math.max(0, t - 15))} onForward={() => setCurrentTime(t => Math.min(mainVideo.duration ?? 0, t + 15))} onMuteToggle={() => setIsMuted(m => !m)} onSubtitlesToggle={() => setShowSubtitles(s => !s)} />
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'All Media',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Exact Figma media frame (node 25127:8670) rendered in both light and dark themes with identical layout.'
      }
    }
  },
  args: {
    theme: 'light',
    overlay: true
  },
  argTypes: {
    theme: {
      control: {
        type: 'inline-radio'
      },
      options: ['light', 'dark'],
      description: 'Theme switch for the full All Media layout',
      table: {
        category: 'Theme'
      }
    },
    ratio: {
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
    overlay: {
      table: {
        disable: true
      }
    }
  },
  render: args => {
    const theme = (args.theme ?? 'light') as MediaTheme;
    const isDark = theme === 'dark';
    return <div style={{
      minHeight: '100vh',
      backgroundColor: isDark ? FIGMA_MEDIA_CANVAS_DARK : '#ffffff',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }}>
        <div style={{
        width: 752,
        maxWidth: '100%',
        backgroundColor: isDark ? FIGMA_MEDIA_BG_DARK : FIGMA_MEDIA_BG_LIGHT,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 26,
        boxSizing: 'border-box'
      }}>
          <div style={{
          width: 400,
          maxWidth: '100%'
        }}>
            <Media ratio="square" theme={theme} overlay />
          </div>
          <div style={{
          width: 720,
          maxWidth: '100%'
        }}>
            <Media ratio="video" theme={theme} overlay />
          </div>
          <div style={{
          width: 405,
          maxWidth: '100%'
        }}>
            <Media ratio="story" theme={theme} overlay />
          </div>
          <div style={{
          width: 520,
          maxWidth: '100%'
        }}>
            <Media ratio="horizontal" theme={theme} overlay />
          </div>
          <div style={{
          width: 400,
          maxWidth: '100%'
        }}>
            <Media ratio="vertical" theme={theme} overlay />
          </div>
        </div>
      </div>;
  }
}`,...D.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  tags: ['!dev'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'All **Media** ratios and themes, all **VideoPlayer** states, and the full **VideoGallery** layout — in one scrollable reference view.'
      }
    }
  },
  decorators: [Story => <div style={{
    maxWidth: 1200
  }}>
        <Story />
      </div>],
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 56,
    fontFamily: 'sans-serif'
  }}>

      {/* ── Media Ratios ── */}
      <section>
        <DocSection>Media — Aspect Ratios</DocSection>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          {RATIOS.map(r => <div key={r} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        }}>
              <DocLabel>ratio="{r}" — {RATIO_LABELS[r]}</DocLabel>
              <div style={{
            maxWidth: r === 'story' ? 240 : r === 'vertical' ? 280 : 560
          }}>
                <Media ratio={r} overlay />
              </div>
            </div>)}
        </div>
      </section>

      {/* ── Media Themes ── */}
      <section>
        <DocSection>Media — Themes</DocSection>
        <div style={{
        display: 'flex',
        gap: 24
      }}>
          {(['light', 'dark'] as MediaTheme[]).map(t => <div key={t} style={{
          flex: 1,
          backgroundColor: t === 'dark' ? '#141f2e' : '#f5f7fa',
          borderRadius: 12,
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <p style={{
            fontFamily: 'sans-serif',
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'capitalize',
            margin: 0,
            color: t === 'dark' ? '#91a2b1' : '#545454'
          }}>
                theme="{t}"
              </p>
              <Media ratio="video" theme={t} overlay />
            </div>)}
        </div>
      </section>

      {/* ── Media with Image ── */}
      <section>
        <DocSection>Media — With Image</DocSection>
        <DocSub>Pass src to display a real image instead of the placeholder.</DocSub>
        <div style={{
        maxWidth: 560
      }}>
          <Media ratio="video" src={SAMPLE_IMG} alt="Mountain landscape" overlay />
        </div>
      </section>

      {/* ── VideoPlayer States ── */}
      <section>
        <DocSection>VideoPlayer — States</DocSection>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32
      }}>
          <div>
            <DocLabel>isPlaying={'{false}'} — default</DocLabel>
            <DocSub>Big centre play button visible</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} isPlaying={false} showControls />
          </div>
          <div>
            <DocLabel>isPlaying={'{true}'}</DocLabel>
            <DocSub>Big button hidden, pause icon in bar</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} isPlaying showControls />
          </div>
          <div>
            <DocLabel>isMuted={'{true}'}</DocLabel>
            <DocSub>Struck speaker + accent dot indicator</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} isMuted showControls />
          </div>
          <div>
            <DocLabel>showSubtitles={'{true}'}</DocLabel>
            <DocSub>Accent dot under CC button</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} showSubtitles showControls />
          </div>
          <div>
            <DocLabel>showControls={'{false}'}</DocLabel>
            <DocSub>Controls hidden — clean media frame</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={2858} duration={DEMO_DURATION} showControls={false} />
          </div>
          <div>
            <DocLabel>poster + currentTime={'{0}'}</DocLabel>
            <DocSub>Thumbnail shown, progress bar at start</DocSub>
            <VideoPlayer title="Mountain Timelapse" poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800" currentTime={0} duration={360} showControls />
          </div>
          <div>
            <DocLabel>Progress 0%</DocLabel>
            <DocSub>currentTime=0 — bar completely empty</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={0} duration={DEMO_DURATION} showControls />
          </div>
          <div>
            <DocLabel>Progress 100%</DocLabel>
            <DocSub>currentTime=duration — bar fully filled</DocSub>
            <VideoPlayer title="Shop and Drop" currentTime={DEMO_DURATION} duration={DEMO_DURATION} showControls />
          </div>
        </div>
      </section>

      {/* ── VideoGallery Layout ── */}
      <section>
        <DocSection>VideoGallery — Full Layout</DocSection>
        <DocSub>mainVideo + 6 suggestedVideos. Desktop: main 517 px, sidebar 233 px with 3 × 156 px, bottom row 3 × 176 px. Uses Figma token colors (#e9ecf0, #f5f7fa, #d7d7d7) and responsive tablet/mobile stacking.</DocSub>

        {/* Light */}
        <div style={{
        marginBottom: 24
      }}>
          <DocLabel>theme="light"</DocLabel>
          <VideoGallery theme="light" mainVideo={MAIN_VIDEO} suggestedVideos={SAMPLE_VIDEOS} isPlaying={false} isMuted={false} showSubtitles={false} showControls />
        </div>

        {/* Dark */}
        <div style={{
        backgroundColor: '#141f2e',
        borderRadius: 12,
        padding: 20
      }}>
          <DocLabel>theme="dark"</DocLabel>
          <VideoGallery theme="dark" mainVideo={MAIN_VIDEO} suggestedVideos={SAMPLE_VIDEOS} isPlaying={false} isMuted={false} showSubtitles={false} showControls />
        </div>
      </section>

    </div>
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`VideoGalleryPlayground`,`AllMedia`,`Overview`]}))();export{D as AllMedia,j as Overview,T as Playground,E as VideoGalleryPlayground,M as __namedExportsOrder,w as default};