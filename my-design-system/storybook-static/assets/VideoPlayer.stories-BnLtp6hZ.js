import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CqNWPJR6.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./VideoPlayer-DiursuTo.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Media/VideoPlayer`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nA fully **controlled** video player component ("Video Players" in Figma).\nAll state is managed by the parent — no internal state is held inside the component.\n\n### Controlled props\n| Prop | Type | Default | Description |\n|---|---|---|---|\n| `isPlaying` | boolean | false | Play/pause state — drives icon and big centre button |\n| `currentTime` | number | 0 | Playback position in seconds — drives timestamp + progress bar |\n| `duration` | number | 0 | Total duration in seconds |\n| `isMuted` | boolean | false | Muted state — swaps volume icon, adds accent dot |\n| `showSubtitles` | boolean | false | Subtitles active — adds accent dot under the CC button |\n| `showControls` | boolean | true | Show or hide the entire "Player Controllers" overlay |\n\n### Callbacks\n| Callback | Triggered by |\n|---|---|\n| `onPlayPause` | Play button, pause button, big centre button |\n| `onSeek(fraction)` | Click on the progress bar (fraction 0–1) |\n| `onRewind` | Rewind 15 s button |\n| `onForward` | Forward 15 s button |\n| `onMuteToggle` | Volume button |\n| `onSubtitlesToggle` | Subtitles (CC) button |\n| `onFullscreen` | Fullscreen button |\n| `onMore` | More (⋮) button |\n        '}}},args:{title:`Shop and Drop`,currentTime:2858,duration:6752,isPlaying:!1,isMuted:!1,showSubtitles:!1,showControls:!0},argTypes:{src:{control:`text`,description:"Video source URL. Renders a `<video>` element when provided.",table:{category:`Media`}},poster:{control:`text`,description:`Poster / thumbnail image URL shown before playback.`,table:{category:`Media`}},title:{control:`text`,description:`Video title shown in "Titles & episodes" area of the controls bar.`,table:{category:`Info bar`}},currentTime:{control:{type:`number`,min:0},description:`Current playback position in **seconds**. Drives timestamp display and progress bar fill.`,table:{category:`Info bar`}},duration:{control:{type:`number`,min:0},description:`Total video duration in **seconds**.`,table:{category:`Info bar`}},isPlaying:{control:`boolean`,description:`Playing state. Switches the play/pause icon and the big centred button.`,table:{category:`Playback`}},onPlayPause:{action:`onPlayPause`,description:`Called when play, pause, or the big centre button is clicked.`,table:{category:`Playback`}},onRewind:{action:`onRewind`,description:`Called when the Rewind 15 s button is clicked.`,table:{category:`Playback`}},onForward:{action:`onForward`,description:`Called when the Forward 15 s button is clicked.`,table:{category:`Playback`}},onSeek:{action:`onSeek`,description:`Called with a fraction (0–1) when the user clicks the progress bar.`,table:{category:`Progress bar`}},isMuted:{control:`boolean`,description:`Muted state. Swaps the volume icon and adds an accent dot below it.`,table:{category:`Volume`}},onMuteToggle:{action:`onMuteToggle`,description:`Called when the volume button is clicked.`,table:{category:`Volume`}},showSubtitles:{control:`boolean`,description:`Subtitles active. Adds an accent dot below the CC button.`,table:{category:`Subtitles`}},onSubtitlesToggle:{action:`onSubtitlesToggle`,description:`Called when the subtitles (CC) button is clicked.`,table:{category:`Subtitles`}},onFullscreen:{action:`onFullscreen`,description:`Called when the fullscreen button is clicked.`,table:{category:`Other controls`}},onMore:{action:`onMore`,description:`Called when the More (⋮) button is clicked.`,table:{category:`Other controls`}},showControls:{control:`boolean`,description:`Show or hide the entire "Player Controllers" overlay bar.`,table:{category:`Visibility`}}},decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:800},children:(0,s.jsx)(e,{})})]},l={name:`Default — placeholder media`,parameters:{docs:{source:{language:`tsx`,code:`import { VideoPlayer } from '@your-org/design-system'

<VideoPlayer
  title="Shop and Drop"
  currentTime={2858}
  duration={6752}
/>`}}}},u={name:`With poster image`,args:{poster:`https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800`,title:`Mountain Timelapse`,currentTime:120,duration:360},parameters:{docs:{source:{language:`tsx`,code:`import { VideoPlayer } from '@your-org/design-system'

<VideoPlayer
  title="Mountain Timelapse"
  poster="https://example.com/thumbnail.jpg"
  src="https://example.com/video.mp4"
  currentTime={120}
  duration={360}
/>`}}}},d={name:`isPlaying — true`,args:{isPlaying:!0,currentTime:2858,duration:6752},parameters:{docs:{description:{story:"When `isPlaying` is `true` the play button switches to a pause icon. The big centred button is hidden by default and reappears on hover."}}}},f={name:`Progress — 0 %`,args:{currentTime:0,duration:3600,title:`Episode 1 — Introduction`}},p={name:`Progress — 90 %`,args:{currentTime:3240,duration:3600,title:`Episode 1 — Introduction`}},m={name:`isMuted — true`,args:{isMuted:!0},parameters:{docs:{description:{story:"When `isMuted` is `true` the volume icon swaps to a muted speaker and an accent dot appears beneath it."}}}},h={name:`showSubtitles — true`,args:{showSubtitles:!0},parameters:{docs:{description:{story:"When `showSubtitles` is `true` an accent dot appears beneath the CC button to indicate active subtitles."}}}},g={name:`showControls — false`,args:{showControls:!1,poster:`https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800`},parameters:{docs:{description:{story:"Set `showControls` to `false` to render a bare 16:9 media frame without any UI overlay."},source:{language:`tsx`,code:`import { VideoPlayer } from '@your-org/design-system'

// Bare media frame — no controls overlay
<VideoPlayer
  poster="https://example.com/thumbnail.jpg"
  showControls={false}
/>`}}}},_={name:`Interactive — full controls demo`,parameters:{docs:{description:{story:"All state is managed with `useState` in the render function below. Click any control to see the parent state update in real time."},source:{language:`tsx`,code:`import { useState } from 'react'
import { VideoPlayer } from '@your-org/design-system'

const DURATION = 6752 // total seconds

export function MyVideoPlayer() {
  const [isPlaying, setIsPlaying]     = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted]         = useState(false)
  const [showSubtitles, setSubtitles] = useState(false)

  return (
    <VideoPlayer
      title="Shop and Drop"
      isPlaying={isPlaying}
      currentTime={currentTime}
      duration={DURATION}
      isMuted={isMuted}
      showSubtitles={showSubtitles}
      onPlayPause={() => setIsPlaying((p) => !p)}
      onSeek={(fraction) => setCurrentTime(Math.round(fraction * DURATION))}
      onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
      onForward={() => setCurrentTime((t) => Math.min(DURATION, t + 15))}
      onMuteToggle={() => setIsMuted((m) => !m)}
      onSubtitlesToggle={() => setSubtitles((s) => !s)}
      onFullscreen={() => { /* open fullscreen */ }}
      onMore={() => { /* open options menu */ }}
    />
  )
}`}}},render:()=>{let e=6752,[t,n]=(0,o.useState)(!1),[r,i]=(0,o.useState)(2858),[c,l]=(0,o.useState)(!1),[u,d]=(0,o.useState)(!1);return(0,s.jsx)(a,{title:`Shop and Drop`,isPlaying:t,currentTime:r,duration:e,isMuted:c,showSubtitles:u,onPlayPause:()=>n(e=>!e),onSeek:t=>i(Math.round(t*e)),onRewind:()=>i(e=>Math.max(0,e-15)),onForward:()=>i(t=>Math.min(e,t+15)),onMuteToggle:()=>l(e=>!e),onSubtitlesToggle:()=>d(e=>!e),onFullscreen:()=>alert(`Fullscreen: implement in your app`),onMore:()=>alert(`More options: implement in your app`)})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Default — placeholder media',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`import { VideoPlayer } from '@your-org/design-system'

<VideoPlayer
  title="Shop and Drop"
  currentTime={2858}
  duration={6752}
/>\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With poster image',
  args: {
    poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
    title: 'Mountain Timelapse',
    currentTime: 120,
    duration: 360
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`import { VideoPlayer } from '@your-org/design-system'

<VideoPlayer
  title="Mountain Timelapse"
  poster="https://example.com/thumbnail.jpg"
  src="https://example.com/video.mp4"
  currentTime={120}
  duration={360}
/>\`
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'isPlaying — true',
  args: {
    isPlaying: true,
    currentTime: 2858,
    duration: 6752
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`isPlaying\` is \`true\` the play button switches to a pause icon. The big centred button is hidden by default and reappears on hover.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Progress — 0 %',
  args: {
    currentTime: 0,
    duration: 3600,
    title: 'Episode 1 — Introduction'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Progress — 90 %',
  args: {
    currentTime: 3240,
    duration: 3600,
    title: 'Episode 1 — Introduction'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'isMuted — true',
  args: {
    isMuted: true
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`isMuted\` is \`true\` the volume icon swaps to a muted speaker and an accent dot appears beneath it.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'showSubtitles — true',
  args: {
    showSubtitles: true
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`showSubtitles\` is \`true\` an accent dot appears beneath the CC button to indicate active subtitles.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'showControls — false',
  args: {
    showControls: false,
    poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800'
  },
  parameters: {
    docs: {
      description: {
        story: 'Set \`showControls\` to \`false\` to render a bare 16:9 media frame without any UI overlay.'
      },
      source: {
        language: 'tsx',
        code: \`import { VideoPlayer } from '@your-org/design-system'

// Bare media frame — no controls overlay
<VideoPlayer
  poster="https://example.com/thumbnail.jpg"
  showControls={false}
/>\`
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Interactive — full controls demo',
  parameters: {
    docs: {
      description: {
        story: 'All state is managed with \`useState\` in the render function below. Click any control to see the parent state update in real time.'
      },
      source: {
        language: 'tsx',
        code: \`import { useState } from 'react'
import { VideoPlayer } from '@your-org/design-system'

const DURATION = 6752 // total seconds

export function MyVideoPlayer() {
  const [isPlaying, setIsPlaying]     = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted]         = useState(false)
  const [showSubtitles, setSubtitles] = useState(false)

  return (
    <VideoPlayer
      title="Shop and Drop"
      isPlaying={isPlaying}
      currentTime={currentTime}
      duration={DURATION}
      isMuted={isMuted}
      showSubtitles={showSubtitles}
      onPlayPause={() => setIsPlaying((p) => !p)}
      onSeek={(fraction) => setCurrentTime(Math.round(fraction * DURATION))}
      onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
      onForward={() => setCurrentTime((t) => Math.min(DURATION, t + 15))}
      onMuteToggle={() => setIsMuted((m) => !m)}
      onSubtitlesToggle={() => setSubtitles((s) => !s)}
      onFullscreen={() => { /* open fullscreen */ }}
      onMore={() => { /* open options menu */ }}
    />
  )
}\`
      }
    }
  },
  render: () => {
    const DURATION = 6752;
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(2858);
    const [isMuted, setIsMuted] = useState(false);
    const [showSubtitles, setSubtitles] = useState(false);
    return <VideoPlayer title="Shop and Drop" isPlaying={isPlaying} currentTime={currentTime} duration={DURATION} isMuted={isMuted} showSubtitles={showSubtitles} onPlayPause={() => setIsPlaying(p => !p)} onSeek={fraction => setCurrentTime(Math.round(fraction * DURATION))} onRewind={() => setCurrentTime(t => Math.max(0, t - 15))} onForward={() => setCurrentTime(t => Math.min(DURATION, t + 15))} onMuteToggle={() => setIsMuted(m => !m)} onSubtitlesToggle={() => setSubtitles(s => !s)} onFullscreen={() => alert('Fullscreen: implement in your app')} onMore={() => alert('More options: implement in your app')} />;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithPoster`,`Playing`,`NotStarted`,`AlmostDone`,`Muted`,`SubtitlesOn`,`NoControls`,`Interactive`]}))();export{p as AlmostDone,l as Default,_ as Interactive,m as Muted,g as NoControls,f as NotStarted,d as Playing,h as SubtitlesOn,u as WithPoster,v as __namedExportsOrder,c as default};