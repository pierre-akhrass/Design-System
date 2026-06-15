import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-Brs2brnf.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./Button-BNQrBnNs.js";import{n as o,t as s}from"./map-BPssFQRf.js";var c=e((()=>{})),l,u,d,f,p,m,h,g=e((()=>{l=t(n(),1),i(),c(),u=r(),d=()=>(0,u.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`48`,height:`48`,viewBox:`0 0 128 128`,fill:`none`,"aria-hidden":`true`,children:[(0,u.jsx)(`g`,{opacity:`0.2`,filter:`url(#ds-map-pin-shadow)`,children:(0,u.jsx)(`circle`,{cx:`64`,cy:`53.3334`,r:`28.4444`,fill:`currentColor`})}),(0,u.jsx)(`circle`,{cx:`64`,cy:`53.3333`,r:`14.2222`,fill:`currentColor`}),(0,u.jsx)(`defs`,{children:(0,u.jsxs)(`filter`,{id:`ds-map-pin-shadow`,x:`27.5557`,y:`16.8889`,width:`76.8887`,height:`76.8889`,filterUnits:`userSpaceOnUse`,colorInterpolationFilters:`sRGB`,children:[(0,u.jsx)(`feFlood`,{floodOpacity:`0`,result:`BackgroundImageFix`}),(0,u.jsx)(`feColorMatrix`,{in:`SourceAlpha`,type:`matrix`,values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0`,result:`hardAlpha`}),(0,u.jsx)(`feMorphology`,{radius:`2`,operator:`dilate`,in:`SourceAlpha`,result:`effect1_dropShadow`}),(0,u.jsx)(`feOffset`,{dx:`2`,dy:`2`}),(0,u.jsx)(`feGaussianBlur`,{stdDeviation:`4`}),(0,u.jsx)(`feComposite`,{in2:`hardAlpha`,operator:`out`}),(0,u.jsx)(`feColorMatrix`,{type:`matrix`,values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0`}),(0,u.jsx)(`feBlend`,{mode:`normal`,in2:`BackgroundImageFix`,result:`effect1_dropShadow`}),(0,u.jsx)(`feBlend`,{mode:`normal`,in:`SourceGraphic`,in2:`effect1_dropShadow`,result:`shape`})]})})]}),f=()=>(0,u.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M8.75 15C12.2018 15 15 12.2018 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15Z`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,u.jsx)(`path`,{d:`M13.1694 13.1694L17.4999 17.4999`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),p=()=>(0,u.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`m6 9 6 6 6-6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),m=()=>(0,u.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M15.625 4.375L4.375 15.625`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,u.jsx)(`path`,{d:`M15.625 15.625L4.375 4.375`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),h=({mode:e=`light`,mapImage:t,title:n=`Our Global Reach`,description:r,pins:i=[],countries:o=[],projects:s=[],showFilters:c=!0,onPinClick:h,onMoreDetails:g,onFilterChange:_,activePinId:v,className:y,style:b,...x})=>{let[S,C]=(0,l.useState)(``),[w,T]=(0,l.useState)(``),[E,D]=(0,l.useState)(``),[O,k]=(0,l.useState)(),A=v??O,j=i.find(e=>e.id===A),M=(0,l.useMemo)(()=>{let e=S.trim().toLowerCase();return i.filter(t=>!(w&&t.country!==w||E&&t.project!==E||e&&!(t.label??``).toLowerCase().includes(e)))},[i,S,w,E]),N=e=>{_?.({search:e.search??S,country:e.country??w,project:e.project??E})};return(0,u.jsxs)(`div`,{className:[`ds-map`,`ds-map--mode-${e}`,y].filter(Boolean).join(` `),style:{...t?{backgroundImage:`url(${t})`,backgroundColor:`rgb(233, 233, 233)`,backgroundPosition:`50% 50%`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`,backgroundBlendMode:`color-burn`}:null,...b},...x,children:[(n||r)&&(0,u.jsxs)(`div`,{className:`ds-map__header`,children:[(0,u.jsx)(`div`,{className:`ds-map__header-title`,children:n}),r&&(0,u.jsx)(`div`,{className:`ds-map__header-desc`,children:r})]}),M.map(e=>(0,u.jsx)(`button`,{type:`button`,className:`ds-map__pin${A===e.id?` ds-map__pin--active`:``}`,style:{left:`${e.x}%`,top:`${e.y}%`},"aria-label":e.label??`pin-${e.id}`,onClick:()=>{k(e.id),h?.(e)},children:(0,u.jsx)(d,{})},e.id)),j&&(()=>{let e=j.x>55,t=j.y<45,n=e?`calc(-100% - 16px)`:`16px`,r=t?`16px`:`-100%`;return(0,u.jsxs)(`div`,{className:`ds-map__popup`,style:{left:`${j.x}%`,top:`${j.y}%`,transform:`translate(${n}, ${r})`},role:`dialog`,children:[(0,u.jsx)(`button`,{type:`button`,className:`ds-map__popup-close`,"aria-label":`Close`,onClick:()=>k(void 0),children:(0,u.jsx)(m,{})}),(0,u.jsx)(`div`,{className:`ds-map__popup-thumb`,children:j.thumbnail?(0,u.jsx)(`img`,{src:j.thumbnail,alt:``}):(0,u.jsx)(`span`,{"aria-hidden":`true`})}),(0,u.jsxs)(`div`,{className:`ds-map__popup-body`,children:[(0,u.jsx)(`div`,{className:`ds-map__popup-title`,children:j.label??`Title`}),(0,u.jsx)(`div`,{className:`ds-map__popup-desc`,children:j.description??`Story text for whatever goes here.`}),(0,u.jsx)(a,{className:`ds-map__popup-cta`,variant:`filled`,onClick:()=>{g?.(j),j.href&&window.open(j.href,`_self`)},children:`More Details`})]})]})})(),c&&(0,u.jsxs)(`div`,{className:`ds-map__filters`,role:`group`,"aria-label":`Map filters`,children:[(0,u.jsxs)(`label`,{className:`ds-map__search`,children:[(0,u.jsx)(`input`,{type:`text`,placeholder:`Search`,value:S,onChange:e=>{C(e.target.value),N({search:e.target.value})}}),(0,u.jsx)(f,{})]}),(0,u.jsxs)(`div`,{className:`ds-map__filters-row`,children:[(0,u.jsxs)(`label`,{className:`ds-map__select`,children:[(0,u.jsxs)(`select`,{value:w,onChange:e=>{T(e.target.value),N({country:e.target.value})},children:[(0,u.jsx)(`option`,{value:``,children:`Country`}),o.map(e=>(0,u.jsx)(`option`,{value:e.value,children:e.label},e.value))]}),(0,u.jsx)(p,{})]}),(0,u.jsxs)(`label`,{className:`ds-map__select`,children:[(0,u.jsxs)(`select`,{value:E,onChange:e=>{D(e.target.value),N({project:e.target.value})},children:[(0,u.jsx)(`option`,{value:``,children:`Project`}),s.map(e=>(0,u.jsx)(`option`,{value:e.value,children:e.label},e.value))]}),(0,u.jsx)(p,{})]})]})]})]})},h.__docgenInfo={description:``,methods:[],displayName:`Map`,props:{mode:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'light'`,computed:!1}},mapImage:{required:!1,tsType:{name:`string`},description:`Background map image url`},title:{required:!1,tsType:{name:`ReactNode`},description:`Title shown in the floating header card`,defaultValue:{value:`'Our Global Reach'`,computed:!1}},description:{required:!1,tsType:{name:`ReactNode`},description:`Description shown under the title`},pins:{required:!1,tsType:{name:`Array`,elements:[{name:`MapPin`}],raw:`MapPin[]`},description:``,defaultValue:{value:`[]`,computed:!1}},countries:{required:!1,tsType:{name:`Array`,elements:[{name:`MapFilterOption`}],raw:`MapFilterOption[]`},description:``,defaultValue:{value:`[]`,computed:!1}},projects:{required:!1,tsType:{name:`Array`,elements:[{name:`MapFilterOption`}],raw:`MapFilterOption[]`},description:``,defaultValue:{value:`[]`,computed:!1}},showFilters:{required:!1,tsType:{name:`boolean`},description:`Show the bottom-left filter bar`,defaultValue:{value:`true`,computed:!1}},onPinClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(pin: MapPin) => void`,signature:{arguments:[{type:{name:`MapPin`},name:`pin`}],return:{name:`void`}}},description:``},onMoreDetails:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(pin: MapPin) => void`,signature:{arguments:[{type:{name:`MapPin`},name:`pin`}],return:{name:`void`}}},description:`Fired when the popup 'More Details' button is clicked`},onFilterChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(filters: {
  search: string
  country: string
  project: string
}) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  search: string
  country: string
  project: string
}`,signature:{properties:[{key:`search`,value:{name:`string`,required:!0}},{key:`country`,value:{name:`string`,required:!0}},{key:`project`,value:{name:`string`,required:!0}}]}},name:`filters`}],return:{name:`void`}}},description:``},activePinId:{required:!1,tsType:{name:`string`},description:`Force-show a popup for a given pin id (controlled). If omitted, popup opens on pin click.`}},composes:[`Omit`]}})),_,v,y,b;e((()=>{g(),s(),_=r(),v={title:`Map/Map (pierre-akhrass, sereneogilvy)`,component:h,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`## Map

An interactive map surface that overlays clickable **pins** on a background image
(typically a stylized world or regional map). Each pin opens a **popup card** with
a thumbnail, title, description, and a call-to-action. A floating **header**
introduces the map and a bottom-left **filter bar** lets users narrow pins by
search query, country, and project.

### Anatomy
- **Header card** (top-left) — title + description.
- **Pins** — absolutely positioned dots placed via percentage coordinates so they
  stay aligned at any size.
- **Popup card** — auto-flips horizontally/vertically near the viewport edges so it
  stays on-screen next to the active pin.
- **Filter bar** (bottom-left) — search input + Country / Project selects.

### When to use
- Showing geographic distribution of projects, offices, stores, partners, etc.
- Curated, branded "find us" experiences where a real tiled map would be overkill.

### When *not* to use
- Real navigation / routing — use a tile-based mapping library (Mapbox, Leaflet).
- Datasets with hundreds of points — performance and overlap handling aren't optimised for that.

### Usage

\`\`\`tsx
import { Map, type MapPin } from '@company/design-system'

const pins: MapPin[] = [
  {
    id: '1',
    x: 22, y: 42,                  // % within the map container
    label: 'Dubai Festival City',
    description: 'A vibrant waterfront destination…',
    thumbnail: '/images/dfc.jpg',
    country: 'ae',
    project: 'festival',
    href: '/projects/dfc',
  },
]

<Map
  title="Our Global Reach"
  description="Landmark projects across the region."
  mapImage="/images/world-map.png"
  pins={pins}
  countries={[{ label: 'UAE', value: 'ae' }]}
  projects={[{ label: 'Festival', value: 'festival' }]}
  onPinClick={(pin) => console.log('clicked', pin)}
  onMoreDetails={(pin) => router.push(pin.href!)}
/>
\`\`\`

### Pin shape (\`MapPin\`)

| Field         | Type      | Purpose                                                            |
| ------------- | --------- | ------------------------------------------------------------------ |
| \`id\`          | \`string\`  | Stable identifier (used as React key and \`activePinId\`).            |
| \`x\` / \`y\`     | \`number\`  | Position as a **percentage** (0–100) of the map container.         |
| \`label\`       | \`string\`  | Popup title / accessible pin name.                                 |
| \`description\` | \`string\`  | Popup body text.                                                   |
| \`thumbnail\`   | \`string\`  | Image URL shown on the left side of the popup.                     |
| \`country\`     | \`string\`  | Used by the Country filter (match a \`MapFilterOption.value\`).      |
| \`project\`     | \`string\`  | Used by the Project filter (match a \`MapFilterOption.value\`).      |
| \`href\`        | \`string\`  | URL opened when the popup's "More Details" button is clicked.      |

### Interactions
- Click a pin → opens its popup (\`onPinClick\` fires).
- Click the popup's **More Details** → navigates to \`pin.href\` (\`onMoreDetails\` fires).
- Type in the search box, or pick a Country / Project → filters visible pins
  (\`onFilterChange\` fires with \`{ search, country, project }\`).
- \`activePinId\` can be passed to control which popup is open from the outside.

### Theming
Colors come from the global "Selection colors" CSS custom properties defined in
\`src/styles/global.scss\` — override them on \`:root\` or a section element to retheme
the map (and every other component that uses the same tokens).

\`\`\`css
--sds-color-text-default-default
--sds-color-background-default-default   /* popup + filter bar surface */
--sds-color-background-default-tertiary  /* header card surface         */
--sds-color-border-brand-secondary
\`\`\`

### Accessibility
- Pins are real \`<button>\` elements with an \`aria-label\` (\`pin.label\` or \`pin-\${id}\`).
- The popup uses \`role="dialog"\`.
- The filter bar is wrapped in \`role="group"\` with a localizable label.
- Filter \`<select>\`s and the search \`<input>\` are native form controls — fully keyboard accessible.`}}},argTypes:{title:{control:`text`,description:`Title shown in the floating header card.`},description:{control:`text`,description:`Description shown under the title.`},mapImage:{control:`text`,description:`Background map image URL.`},mode:{control:`inline-radio`,options:[`light`,`dark`],description:`Color mode for the map surface and overlays.`},showFilters:{control:`boolean`,description:`Show the bottom-left filter bar (search + Country + Project).`},activePinId:{control:`text`,description:`Force-open the popup for a given pin id. Leave blank for uncontrolled (open on click).`},pins:{control:`object`,description:"Array of `MapPin` objects to render."},countries:{control:`object`,description:"Country filter options (`{ label, value }[]`)."},projects:{control:`object`,description:"Project filter options (`{ label, value }[]`)."}},args:{title:`Our Global Reach`,description:`Al-Futtaim Group landmark projects include Dubai Festival City, Festival Plaza, and Al Badia, shaping vibrant communities with world-class infrastructure.`,mapImage:o,mode:`light`,showFilters:!0,pins:[{id:`1`,x:22,y:42,label:`Dubai Festival City`,description:`A vibrant waterfront destination featuring retail, dining, hotels and entertainment along Dubai Creek.`,thumbnail:`https://images.unsplash.com/photo-1518684079-3c830dcef090?w=200`,country:`ae`,project:`festival`},{id:`2`,x:28,y:55,label:`Festival Plaza`,description:`Community-focused retail destination in Jebel Ali, Dubai.`,thumbnail:`https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=200`,country:`ae`,project:`festival`},{id:`3`,x:35,y:38,label:`Al Badia`,description:`Mixed-use residential and lifestyle community in Dubai Festival City.`,thumbnail:`https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200`,country:`ae`,project:`badia`},{id:`4`,x:48,y:50,label:`Riyadh Hub`,description:`Flagship commercial hub anchoring our Saudi Arabia operations.`,thumbnail:`https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=200`,country:`sa`,project:`hub`},{id:`5`,x:62,y:45,label:`Doha Site`,description:`Strategic logistics and retail site in the heart of Doha.`,thumbnail:`https://images.unsplash.com/photo-1568797629192-789acf8e4df3?w=200`,country:`qa`,project:`hub`},{id:`6`,x:70,y:60,label:`Muscat Project`,description:`Residential development blending heritage architecture with modern living.`,thumbnail:`https://images.unsplash.com/photo-1548013146-72479768bada?w=200`,country:`om`,project:`badia`},{id:`7`,x:55,y:70,label:`Salalah`,description:`Coastal festival and leisure destination on the Arabian Sea.`,thumbnail:`https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=200`,country:`om`,project:`festival`},{id:`8`,x:80,y:40,label:`Karachi`,description:`Regional hub serving South Asian markets and partners.`,thumbnail:`https://images.unsplash.com/photo-1589649222264-5f12087fa3f8?w=200`,country:`pk`,project:`hub`}],countries:[{label:`UAE`,value:`ae`},{label:`Saudi Arabia`,value:`sa`},{label:`Qatar`,value:`qa`},{label:`Oman`,value:`om`},{label:`Pakistan`,value:`pk`}],projects:[{label:`Festival`,value:`festival`},{label:`Al Badia`,value:`badia`},{label:`Hub`,value:`hub`}]}},y={parameters:{docs:{description:{story:`Interactive playground covering every Map variant. Edit **pins**, **countries**, and **projects** in the Controls panel to add/remove markers and filter options, toggle **showFilters** to hide the bottom bar, and set **activePinId** to force-open a specific popup.`}}},render:e=>(0,_.jsx)(`div`,{style:{padding:24,background:`#f5f7fa`},children:(0,_.jsx)(h,{...e,style:{minHeight:480}})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground covering every Map variant. Edit **pins**, **countries**, and **projects** in the Controls panel to add/remove markers and filter options, toggle **showFilters** to hide the bottom bar, and set **activePinId** to force-open a specific popup.'
      }
    }
  },
  render: args => <div style={{
    padding: 24,
    background: '#f5f7fa'
  }}>
      <Map {...args} style={{
      minHeight: 480
    }} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Playground`]}))();export{y as Playground,b as __namedExportsOrder,v as default};