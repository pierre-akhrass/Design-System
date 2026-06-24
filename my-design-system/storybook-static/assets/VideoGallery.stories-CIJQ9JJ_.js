import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Brs2brnf.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./VideoGallery-BDQPg8l4.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Media/VideoGallery`,component:a,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nCombines the **VideoPlayer** with a "Suggested Videos" sidebar and a bottom thumbnail row\n("Video Players" layout in Figma).\n\n### Layout\n- **Main Video** — large VideoPlayer on the left (all VideoPlayer props pass through directly).\n- **Suggested Videos sidebar** — items 0–2 of `suggestedVideos`, shown in a right column.\n- **Bottom row** — items 3–5 of `suggestedVideos`, shown in a 3-column grid below.\n\n### Selection\n`activeVideoIndex` highlights a suggested thumbnail with a teal border.\nClicking a thumbnail fires `onVideoSelect(index, item)` — swap `mainVideo` and update\n`activeVideoIndex` in your parent to complete the switch.\n\n### All VideoPlayer props pass through\n`isPlaying`, `isMuted`, `showSubtitles`, `onPlayPause`, `onSeek`, `onRewind`,\n`onForward`, `onMuteToggle`, `onSubtitlesToggle`, `onFullscreen`, `onMore` — all\nforwarded directly to the internal VideoPlayer.\n        '}}},argTypes:{mainVideo:{control:`object`,description:`The featured video data for the main VideoPlayer.`,table:{category:`Videos`}},suggestedVideos:{control:`object`,description:`Up to 6 suggested videos. Items 0–2 → sidebar ("Suggested Videos"). Items 3–5 → bottom row.`,table:{category:`Videos`}},activeVideoIndex:{control:{type:`number`,min:-1,max:5},description:"Zero-based index into `suggestedVideos` that is highlighted. Leave `undefined` when the main video is active.",table:{category:`Selection`}},onVideoSelect:{action:`onVideoSelect`,description:"Called with `(index, item)` when a suggested thumbnail is clicked.",table:{category:`Selection`}},isPlaying:{control:`boolean`,description:`Passed through to the main VideoPlayer.`,table:{category:`VideoPlayer passthrough`}},isMuted:{control:`boolean`,description:`Passed through to the main VideoPlayer.`,table:{category:`VideoPlayer passthrough`}},showSubtitles:{control:`boolean`,description:`Passed through to the main VideoPlayer.`,table:{category:`VideoPlayer passthrough`}},showControls:{control:`boolean`,description:`Passed through to the main VideoPlayer.`,table:{category:`VideoPlayer passthrough`}}},decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:1200},children:(0,s.jsx)(e,{})})]},l=Array.from({length:6},(e,t)=>({id:`ep-${t+1}`,title:`Episode ${t+1} — ${[`Introduction`,`The Journey`,`Discovery`,`Turning Point`,`The Reveal`,`Finale`][t]}`,duration:1800+t*300,currentTime:0})),u={title:`Shop and Drop`,currentTime:2858,duration:6752},d={name:`Default — placeholder media`,args:{mainVideo:u,suggestedVideos:l},parameters:{docs:{source:{language:`tsx`,code:`import { VideoGallery } from '@your-org/design-system'
import type { VideoItem } from '@your-org/design-system'

const mainVideo: VideoItem = {
  title: 'Shop and Drop',
  currentTime: 2858,
  duration: 6752,
}

// Items 0–2 → right sidebar ("Suggested Videos")
// Items 3–5 → bottom thumbnail row
const suggestedVideos: VideoItem[] = [
  { id: 'ep1', title: 'Episode 1', duration: 1800 },
  { id: 'ep2', title: 'Episode 2', duration: 2100 },
  { id: 'ep3', title: 'Episode 3', duration: 2400 },
  { id: 'ep4', title: 'Episode 4', duration: 1800 },
  { id: 'ep5', title: 'Episode 5', duration: 2100 },
  { id: 'ep6', title: 'Episode 6', duration: 2700 },
]

<VideoGallery
  mainVideo={mainVideo}
  suggestedVideos={suggestedVideos}
/>`}}}},f={name:`Sidebar only (3 suggestions)`,args:{mainVideo:u,suggestedVideos:l.slice(0,3)},parameters:{docs:{description:{story:`When fewer than 4 items are provided, only the sidebar renders. The bottom row is omitted.`}}}},p={name:`activeVideoIndex — 1`,args:{mainVideo:{...l[1]},suggestedVideos:l,activeVideoIndex:1},parameters:{docs:{description:{story:"`activeVideoIndex={1}` highlights the second suggested video with a teal border to indicate it is the current selection."},source:{language:`tsx`,code:`import { VideoGallery } from '@your-org/design-system'

// Highlight episode 2 (index 1) as the active selection
<VideoGallery
  mainVideo={episodeTwo}
  suggestedVideos={allEpisodes}
  activeVideoIndex={1}
  onVideoSelect={(index, item) => {
    setActiveVideoIndex(index)
    setMainVideo(item)
  }}
/>`}}}},m={args:{mainVideo:u,suggestedVideos:l,isPlaying:!1},name:`Interactive — click to switch video`,parameters:{docs:{description:{story:"Full interaction demo. Click any suggested thumbnail to update `mainVideo` and `activeVideoIndex`. All VideoPlayer controls also work."},source:{language:`tsx`,code:`import { useState } from 'react'
import { VideoGallery } from '@your-org/design-system'
import type { VideoItem } from '@your-org/design-system'

const VIDEOS: VideoItem[] = [
  { id: 'main', title: 'Shop and Drop', duration: 6752, currentTime: 2858 },
  { id: 'ep1',  title: 'Episode 1',     duration: 1800, currentTime: 0 },
  { id: 'ep2',  title: 'Episode 2',     duration: 2100, currentTime: 0 },
  { id: 'ep3',  title: 'Episode 3',     duration: 2400, currentTime: 0 },
  { id: 'ep4',  title: 'Episode 4',     duration: 1800, currentTime: 0 },
  { id: 'ep5',  title: 'Episode 5',     duration: 2100, currentTime: 0 },
  { id: 'ep6',  title: 'Episode 6',     duration: 2700, currentTime: 0 },
]

export function MyVideoGallery() {
  const [mainVideo, setMainVideo]     = useState<VideoItem>(VIDEOS[0])
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  const [isPlaying, setIsPlaying]     = useState(false)
  const [currentTime, setCurrentTime] = useState(VIDEOS[0].currentTime ?? 0)
  const [isMuted, setIsMuted]         = useState(false)

  const handleVideoSelect = (index: number, item: VideoItem) => {
    setMainVideo(item)
    setActiveIndex(index)
    setCurrentTime(item.currentTime ?? 0)
    setIsPlaying(false)
  }

  return (
    <VideoGallery
      mainVideo={{ ...mainVideo, currentTime }}
      suggestedVideos={VIDEOS.slice(1)}
      activeVideoIndex={activeIndex}
      onVideoSelect={handleVideoSelect}
      isPlaying={isPlaying}
      isMuted={isMuted}
      onPlayPause={() => setIsPlaying((p) => !p)}
      onSeek={(f) => setCurrentTime(Math.round(f * (mainVideo.duration ?? 0)))}
      onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
      onForward={() => setCurrentTime((t) => Math.min(mainVideo.duration ?? 0, t + 15))}
      onMuteToggle={() => setIsMuted((m) => !m)}
    />
  )
}`}}},render:()=>{let[e,t]=(0,o.useState)(u),[n,r]=(0,o.useState)(void 0),[i,c]=(0,o.useState)(!1),[d,f]=(0,o.useState)(u.currentTime??0),[p,m]=(0,o.useState)(!1),[h,g]=(0,o.useState)(!1),_=(e,n)=>{t(n),r(e),f(n.currentTime??0),c(!1)};return(0,s.jsx)(a,{mainVideo:{...e,currentTime:d},suggestedVideos:l,activeVideoIndex:n,onVideoSelect:_,isPlaying:i,isMuted:p,showSubtitles:h,onPlayPause:()=>c(e=>!e),onSeek:t=>f(Math.round(t*(e.duration??0))),onRewind:()=>f(e=>Math.max(0,e-15)),onForward:()=>f(t=>Math.min(e.duration??0,t+15)),onMuteToggle:()=>m(e=>!e),onSubtitlesToggle:()=>g(e=>!e),onFullscreen:()=>alert(`Fullscreen: implement in your app`),onMore:()=>alert(`More options: implement in your app`)})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Default — placeholder media',
  args: {
    mainVideo: MAIN_VIDEO,
    suggestedVideos: SAMPLE_VIDEOS
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`import { VideoGallery } from '@your-org/design-system'
import type { VideoItem } from '@your-org/design-system'

const mainVideo: VideoItem = {
  title: 'Shop and Drop',
  currentTime: 2858,
  duration: 6752,
}

// Items 0–2 → right sidebar ("Suggested Videos")
// Items 3–5 → bottom thumbnail row
const suggestedVideos: VideoItem[] = [
  { id: 'ep1', title: 'Episode 1', duration: 1800 },
  { id: 'ep2', title: 'Episode 2', duration: 2100 },
  { id: 'ep3', title: 'Episode 3', duration: 2400 },
  { id: 'ep4', title: 'Episode 4', duration: 1800 },
  { id: 'ep5', title: 'Episode 5', duration: 2100 },
  { id: 'ep6', title: 'Episode 6', duration: 2700 },
]

<VideoGallery
  mainVideo={mainVideo}
  suggestedVideos={suggestedVideos}
/>\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Sidebar only (3 suggestions)',
  args: {
    mainVideo: MAIN_VIDEO,
    suggestedVideos: SAMPLE_VIDEOS.slice(0, 3)
  },
  parameters: {
    docs: {
      description: {
        story: 'When fewer than 4 items are provided, only the sidebar renders. The bottom row is omitted.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'activeVideoIndex — 1',
  args: {
    mainVideo: {
      ...SAMPLE_VIDEOS[1]
    },
    suggestedVideos: SAMPLE_VIDEOS,
    activeVideoIndex: 1
  },
  parameters: {
    docs: {
      description: {
        story: '\`activeVideoIndex={1}\` highlights the second suggested video with a teal border to indicate it is the current selection.'
      },
      source: {
        language: 'tsx',
        code: \`import { VideoGallery } from '@your-org/design-system'

// Highlight episode 2 (index 1) as the active selection
<VideoGallery
  mainVideo={episodeTwo}
  suggestedVideos={allEpisodes}
  activeVideoIndex={1}
  onVideoSelect={(index, item) => {
    setActiveVideoIndex(index)
    setMainVideo(item)
  }}
/>\`
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    mainVideo: MAIN_VIDEO,
    suggestedVideos: SAMPLE_VIDEOS,
    isPlaying: false
  },
  name: 'Interactive — click to switch video',
  parameters: {
    docs: {
      description: {
        story: 'Full interaction demo. Click any suggested thumbnail to update \`mainVideo\` and \`activeVideoIndex\`. All VideoPlayer controls also work.'
      },
      source: {
        language: 'tsx',
        code: \`import { useState } from 'react'
import { VideoGallery } from '@your-org/design-system'
import type { VideoItem } from '@your-org/design-system'

const VIDEOS: VideoItem[] = [
  { id: 'main', title: 'Shop and Drop', duration: 6752, currentTime: 2858 },
  { id: 'ep1',  title: 'Episode 1',     duration: 1800, currentTime: 0 },
  { id: 'ep2',  title: 'Episode 2',     duration: 2100, currentTime: 0 },
  { id: 'ep3',  title: 'Episode 3',     duration: 2400, currentTime: 0 },
  { id: 'ep4',  title: 'Episode 4',     duration: 1800, currentTime: 0 },
  { id: 'ep5',  title: 'Episode 5',     duration: 2100, currentTime: 0 },
  { id: 'ep6',  title: 'Episode 6',     duration: 2700, currentTime: 0 },
]

export function MyVideoGallery() {
  const [mainVideo, setMainVideo]     = useState<VideoItem>(VIDEOS[0])
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  const [isPlaying, setIsPlaying]     = useState(false)
  const [currentTime, setCurrentTime] = useState(VIDEOS[0].currentTime ?? 0)
  const [isMuted, setIsMuted]         = useState(false)

  const handleVideoSelect = (index: number, item: VideoItem) => {
    setMainVideo(item)
    setActiveIndex(index)
    setCurrentTime(item.currentTime ?? 0)
    setIsPlaying(false)
  }

  return (
    <VideoGallery
      mainVideo={{ ...mainVideo, currentTime }}
      suggestedVideos={VIDEOS.slice(1)}
      activeVideoIndex={activeIndex}
      onVideoSelect={handleVideoSelect}
      isPlaying={isPlaying}
      isMuted={isMuted}
      onPlayPause={() => setIsPlaying((p) => !p)}
      onSeek={(f) => setCurrentTime(Math.round(f * (mainVideo.duration ?? 0)))}
      onRewind={() => setCurrentTime((t) => Math.max(0, t - 15))}
      onForward={() => setCurrentTime((t) => Math.min(mainVideo.duration ?? 0, t + 15))}
      onMuteToggle={() => setIsMuted((m) => !m)}
    />
  )
}\`
      }
    }
  },
  render: () => {
    const [mainVideo, setMainVideo] = useState<VideoItem>(MAIN_VIDEO);
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(MAIN_VIDEO.currentTime ?? 0);
    const [isMuted, setIsMuted] = useState(false);
    const [showSubtitles, setShowSubtitles] = useState(false);
    const handleVideoSelect = (index: number, item: VideoItem) => {
      setMainVideo(item);
      setActiveIndex(index);
      setCurrentTime(item.currentTime ?? 0);
      setIsPlaying(false);
    };
    return <VideoGallery mainVideo={{
      ...mainVideo,
      currentTime
    }} suggestedVideos={SAMPLE_VIDEOS} activeVideoIndex={activeIndex} onVideoSelect={handleVideoSelect} isPlaying={isPlaying} isMuted={isMuted} showSubtitles={showSubtitles} onPlayPause={() => setIsPlaying(p => !p)} onSeek={fraction => setCurrentTime(Math.round(fraction * (mainVideo.duration ?? 0)))} onRewind={() => setCurrentTime(t => Math.max(0, t - 15))} onForward={() => setCurrentTime(t => Math.min(mainVideo.duration ?? 0, t + 15))} onMuteToggle={() => setIsMuted(m => !m)} onSubtitlesToggle={() => setShowSubtitles(s => !s)} onFullscreen={() => alert('Fullscreen: implement in your app')} onMore={() => alert('More options: implement in your app')} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`SidebarOnly`,`ActiveThumbnail`,`Interactive`]}))();export{p as ActiveThumbnail,d as Default,m as Interactive,f as SidebarOnly,h as __namedExportsOrder,c as default};