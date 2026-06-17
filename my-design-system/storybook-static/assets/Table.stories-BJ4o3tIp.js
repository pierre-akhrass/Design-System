import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-CqNWPJR6.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i=e((()=>{}));function a(...e){return e.filter(Boolean).join(` `)}function o(e,t,n){return n?typeof n==`function`?n(e,t):String(e[n]??t):String(t)}function s(){return(0,m.jsxs)(`svg`,{className:`ds-table__icon`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,m.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.5`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,m.jsx)(`path`,{d:`M10.5 10.5L13.5 13.5`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]})}function c({direction:e}){return(0,m.jsx)(`svg`,{className:`ds-table__sort-icon`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:e===`asc`?(0,m.jsx)(`path`,{d:`M6 6L8 4L10 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}):e===`desc`?(0,m.jsx)(`path`,{d:`M6 10L8 12L10 10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`path`,{d:`M6 6L8 4L10 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,opacity:`0.45`}),(0,m.jsx)(`path`,{d:`M6 10L8 12L10 10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,opacity:`0.45`})]})})}function l(){return(0,m.jsx)(`svg`,{className:`ds-table__icon`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M10 4L6 8L10 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function u(){return(0,m.jsx)(`svg`,{className:`ds-table__icon`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M6 4L10 8L6 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function d(){return(0,m.jsx)(`svg`,{className:`ds-table__check-icon`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M3.5 8L6.5 11L12.5 5`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function f({checked:e,indeterminate:t,onChange:n,disabled:r,className:i,...o}){return(0,m.jsxs)(`label`,{className:a(`ds-table-checkbox`,e&&`ds-table-checkbox--checked`,r&&`ds-table-checkbox--disabled`,i),children:[(0,m.jsx)(`input`,{type:`checkbox`,className:`ds-table-checkbox__native`,checked:e,onChange:n,disabled:r,...o}),(0,m.jsx)(`span`,{className:`ds-table-checkbox__box`,"aria-hidden":`true`,children:t?(0,m.jsx)(`span`,{className:`ds-table-checkbox__dash`}):e?(0,m.jsx)(d,{}):null})]})}var p,m,h,g,_,v,y,b,x=e((()=>{p=t(n(),1),i(),m=r(),h=({title:e,showSearch:t=!0,searchValue:n=``,searchPlaceholder:r=`Search`,onSearch:i,actions:o,className:c,...l})=>{let u=(0,p.useId)();return(0,m.jsxs)(`div`,{className:a(`ds-table__toolbar`,c),...l,children:[e&&(0,m.jsx)(`h2`,{className:`ds-table__title`,children:e}),(0,m.jsxs)(`div`,{className:`ds-table__toolbar-actions`,children:[t&&(0,m.jsxs)(`label`,{htmlFor:u,className:`ds-table__search`,children:[(0,m.jsx)(`input`,{id:u,type:`search`,className:`ds-table__search-input`,placeholder:r,value:n,onChange:e=>i?.(e.target.value),"aria-label":r}),(0,m.jsx)(`span`,{className:`ds-table__search-icon`,children:(0,m.jsx)(s,{})})]}),o&&(0,m.jsx)(`div`,{className:`ds-table__toolbar-extra`,children:o})]})]})},g=({children:e,sortable:t=!1,sortDirection:n,onSort:r,align:i=`left`,className:o,...s})=>(0,m.jsx)(`th`,{className:a(`ds-table__cell`,`ds-table__cell--header`,`ds-table__cell--align-${i}`,t&&`ds-table__cell--sortable`,o),"aria-sort":n===`asc`?`ascending`:n===`desc`?`descending`:void 0,...s,children:(0,m.jsxs)(`button`,{type:`button`,className:`ds-table__header-btn`,onClick:t?r:void 0,disabled:!t,"aria-label":t?`Sort by ${typeof e==`string`?e:`column`}`:void 0,children:[(0,m.jsx)(`span`,{className:`ds-table__cell-text`,children:e}),t&&(0,m.jsx)(c,{direction:n??null})]})}),_=({children:e,type:t=`text`,align:n=`left`,prefix:r,dataLabel:i,className:o,...s})=>(0,m.jsxs)(`td`,{className:a(`ds-table__cell`,`ds-table__cell--${t}`,`ds-table__cell--align-${n}`,o),"data-label":i,...s,children:[i&&(0,m.jsx)(`span`,{className:`ds-table__cell-mobile-label`,children:i}),t===`number`?(0,m.jsxs)(`span`,{className:`ds-table__cell-number`,children:[r&&(0,m.jsx)(`span`,{className:`ds-table__cell-prefix`,children:r}),(0,m.jsx)(`span`,{className:`ds-table__cell-value`,children:e})]}):(0,m.jsx)(`span`,{className:`ds-table__cell-text`,children:e})]}),v=({state:e=`default`,selectable:t=!1,selected:n=!1,onSelect:r,className:i,children:o,...s})=>(0,m.jsxs)(`tr`,{className:a(`ds-table__row`,`ds-table__row--${e}`,n&&`ds-table__row--selected`,i),"aria-selected":n||void 0,...s,children:[t&&(0,m.jsxs)(`td`,{className:`ds-table__cell ds-table__cell--select`,"data-label":`Select`,children:[(0,m.jsx)(`span`,{className:`ds-table__cell-mobile-label`,children:`Select`}),(0,m.jsx)(f,{checked:n,onChange:e=>r?.(e.target.checked)})]}),o]}),y=({currentPage:e,pageSize:t,totalItems:n,onPageChange:r,className:i,...o})=>{let s=Math.max(1,Math.ceil(n/t)),c=Math.min((e-1)*t+1,n),d=Math.min(e*t,n),f=()=>{if(s<=7)return Array.from({length:s},(e,t)=>t+1);let t=[1];e>3&&t.push(`...`);for(let n=Math.max(2,e-1);n<=Math.min(s-1,e+1);n++)t.push(n);return e<s-2&&t.push(`...`),t.push(s),t};return(0,m.jsxs)(`div`,{className:a(`ds-table__pagination`,i),role:`navigation`,"aria-label":`Table pagination`,...o,children:[(0,m.jsxs)(`span`,{className:`ds-table__pagination-info`,children:[`Showing `,c,`–`,d,` of `,n,` results`]}),(0,m.jsxs)(`div`,{className:`ds-table__pagination-controls`,children:[(0,m.jsx)(`button`,{type:`button`,className:`ds-table__pagination-btn ds-table__pagination-btn--prev`,onClick:()=>r(e-1),disabled:e===1,"aria-label":`Previous page`,children:(0,m.jsx)(l,{})}),f().map((t,n)=>t===`...`?(0,m.jsx)(`span`,{className:`ds-table__pagination-ellipsis`,"aria-hidden":`true`,children:`...`},`ellipsis-${n}`):(0,m.jsx)(`button`,{type:`button`,className:a(`ds-table__pagination-btn`,t===e&&`ds-table__pagination-btn--active`),onClick:()=>r(t),"aria-label":`Page ${t}`,"aria-current":t===e?`page`:void 0,children:t},t)),(0,m.jsx)(`button`,{type:`button`,className:`ds-table__pagination-btn ds-table__pagination-btn--next`,onClick:()=>r(e+1),disabled:e===s,"aria-label":`Next page`,children:(0,m.jsx)(u,{})})]})]})},b=({theme:e=`light`,columns:t=[],data:n=[],rowKey:r,title:i,showSearch:s=!0,showToolbar:c=!0,showPagination:l=!0,striped:u=!1,selectable:d=!1,selectedRowKeys:p,onRowSelect:b,onSelectAll:x,searchValue:S=``,searchPlaceholder:C=`Search`,onSearch:w,sortKey:T,sortDirection:E,onSort:D,currentPage:O=1,pageSize:k=10,totalItems:A,onPageChange:j,emptyMessage:M,loading:N=!1,responsiveMode:P=`stack`,className:F,tableClassName:I,...L})=>{let R=A??n.length,z=n.length>0&&n.every((e,t)=>p?.has(o(e,t,r))),B=!z&&n.some((e,t)=>p?.has(o(e,t,r))),V=e=>{D&&(T===e?E===`asc`?D(e,`desc`):D(e,null):D(e,`asc`))};return(0,m.jsxs)(`div`,{className:a(`ds-table`,`ds-table--${e}`,`ds-table--responsive-${P}`,N&&`ds-table--loading`,F),...L,children:[c&&(0,m.jsx)(h,{title:i,showSearch:s,searchValue:S,searchPlaceholder:C,onSearch:w,theme:e}),(0,m.jsx)(`div`,{className:`ds-table__scroll-container`,role:`region`,"aria-label":typeof i==`string`?i:`Data table`,children:(0,m.jsxs)(`table`,{className:a(`ds-table__table`,I),children:[(0,m.jsx)(`thead`,{className:`ds-table__head`,children:(0,m.jsxs)(`tr`,{className:`ds-table__row ds-table__row--header`,children:[d&&(0,m.jsx)(`th`,{className:`ds-table__cell ds-table__cell--header ds-table__cell--select`,"aria-label":`Select all`,children:(0,m.jsx)(f,{checked:z,indeterminate:B,onChange:e=>x?.(e.target.checked),"aria-label":`Select all rows`})}),t.map(e=>(0,m.jsx)(g,{sortable:e.sortable,sortDirection:T===e.key?E:null,onSort:()=>V(e.key),align:e.align,style:e.width?{width:e.width}:void 0,children:e.label},e.key))]})}),(0,m.jsx)(`tbody`,{className:`ds-table__body`,children:n.length===0?(0,m.jsx)(`tr`,{className:`ds-table__row ds-table__row--empty`,children:(0,m.jsx)(`td`,{className:`ds-table__cell ds-table__cell--empty`,colSpan:t.length+ +!!d,children:M??`No data available`})}):n.map((e,n)=>{let i=o(e,n,r),a=p?.has(i)??!1;return(0,m.jsx)(v,{state:a?`selected`:u&&n%2!=0?`alternate`:`default`,selectable:d,selected:a,onSelect:e=>b?.(i,e),children:t.map(t=>{let r=e[t.key],i=typeof t.label==`string`?t.label:t.key;return(0,m.jsx)(_,{type:t.type??`text`,align:t.align,prefix:t.prefix,dataLabel:i,children:t.render?t.render(r,e,n):r},t.key)})},i)})})]})}),l&&R>0&&j&&(0,m.jsx)(y,{currentPage:O,pageSize:k,totalItems:R,onPageChange:j,theme:e})]})},h.__docgenInfo={description:``,methods:[],displayName:`TableToolbar`,props:{title:{required:!1,tsType:{name:`ReactNode`},description:``},showSearch:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},searchValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},searchPlaceholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search'`,computed:!1}},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},actions:{required:!1,tsType:{name:`ReactNode`},description:``},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``}},composes:[`Omit`]},g.__docgenInfo={description:``,methods:[],displayName:`TableHeaderCell`,props:{sortable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},sortDirection:{required:!1,tsType:{name:`union`,raw:`'asc' | 'desc' | null`,elements:[{name:`literal`,value:`'asc'`},{name:`literal`,value:`'desc'`},{name:`null`}]},description:``},onSort:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'left'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`ThHTMLAttributes`]},_.__docgenInfo={description:``,methods:[],displayName:`TableCell`,props:{type:{required:!1,tsType:{name:`union`,raw:`'text' | 'number' | 'component' | 'select'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'number'`},{name:`literal`,value:`'component'`},{name:`literal`,value:`'select'`}]},description:``,defaultValue:{value:`'text'`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'left'`,computed:!1}},prefix:{required:!1,tsType:{name:`string`},description:``},dataLabel:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`TdHTMLAttributes`]},v.__docgenInfo={description:``,methods:[],displayName:`TableRow`,props:{state:{required:!1,tsType:{name:`union`,raw:`'default' | 'alternate' | 'hover' | 'selected'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'alternate'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'selected'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},selectable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},selected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]},y.__docgenInfo={description:``,methods:[],displayName:`TablePagination`,props:{currentPage:{required:!0,tsType:{name:`number`},description:``},pageSize:{required:!0,tsType:{name:`number`},description:``},totalItems:{required:!0,tsType:{name:`number`},description:``},onPageChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:``},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``}},composes:[`HTMLAttributes`]},b.__docgenInfo={description:``,methods:[],displayName:`Table`,props:{theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'light'`,computed:!1}},columns:{required:!1,tsType:{name:`Array`,elements:[{name:`TableColumn`,elements:[{name:`T`}],raw:`TableColumn<T>`}],raw:`TableColumn<T>[]`},description:``,defaultValue:{value:`[]`,computed:!1}},data:{required:!1,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``,defaultValue:{value:`[]`,computed:!1}},rowKey:{required:!1,tsType:{name:`union`,raw:`keyof T | ((row: T, index: number) => string)`,elements:[{name:`T`},{name:`unknown`}]},description:``},title:{required:!1,tsType:{name:`ReactNode`},description:``},showSearch:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showToolbar:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showPagination:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},striped:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},selectable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},selectedRowKeys:{required:!1,tsType:{name:`Set`,elements:[{name:`string`}],raw:`Set<string>`},description:``},onRowSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string, selected: boolean) => void`,signature:{arguments:[{type:{name:`string`},name:`key`},{type:{name:`boolean`},name:`selected`}],return:{name:`void`}}},description:``},onSelectAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selected: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`selected`}],return:{name:`void`}}},description:``},searchValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},searchPlaceholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search'`,computed:!1}},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},sortKey:{required:!1,tsType:{name:`string`},description:``},sortDirection:{required:!1,tsType:{name:`union`,raw:`'asc' | 'desc' | null`,elements:[{name:`literal`,value:`'asc'`},{name:`literal`,value:`'desc'`},{name:`null`}]},description:``},onSort:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string, direction: TableSortDirection) => void`,signature:{arguments:[{type:{name:`string`},name:`key`},{type:{name:`union`,raw:`'asc' | 'desc' | null`,elements:[{name:`literal`,value:`'asc'`},{name:`literal`,value:`'desc'`},{name:`null`}]},name:`direction`}],return:{name:`void`}}},description:``},currentPage:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},pageSize:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}},totalItems:{required:!1,tsType:{name:`number`},description:``},onPageChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:``},emptyMessage:{required:!1,tsType:{name:`ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},tableClassName:{required:!1,tsType:{name:`string`},description:``},responsiveMode:{required:!1,tsType:{name:`union`,raw:`'stack' | 'scroll'`,elements:[{name:`literal`,value:`'stack'`},{name:`literal`,value:`'scroll'`}]},description:``,defaultValue:{value:`'stack'`,computed:!1}}},composes:[`Omit`]}}));function S(e){return Array.from({length:e},(e,t)=>j[t%j.length])}function C(e){return M.slice(0,Math.max(1,Math.min(e,M.length)))}function w({theme:e,label:t,children:n}){return(0,k.jsxs)(`div`,{style:{background:e===`dark`?`#04070d`:`#f0f2f5`,borderRadius:16,display:`flex`,flexDirection:`column`,gap:12,padding:24},children:[(0,k.jsx)(`p`,{style:{color:e===`dark`?`rgba(255,255,255,0.6)`:`#545454`,fontFamily:`inherit`,fontSize:14,fontWeight:600,letterSpacing:`0.04em`,margin:0,textTransform:`uppercase`},children:t}),n]})}function T({theme:e}){let[t,n]=(0,O.useState)(1),r=S(10);return(0,k.jsx)(b,{theme:e,title:`Table title`,columns:P,data:r,rowKey:(e,t)=>String(t),showToolbar:!0,showSearch:!0,showPagination:!0,currentPage:t,pageSize:10,totalItems:r.length,onPageChange:n})}function E({theme:e}){let t=e===`dark`?`#ffffff`:`#292929`,n=e===`dark`,r={width:n?880:912,display:`flex`,flexDirection:`column`,gap:n?18:16,padding:n?0:16,boxSizing:`border-box`},i={width:880,tableLayout:`fixed`},a={minWidth:176,color:t,width:176},o={minWidth:176,width:176};return(0,k.jsxs)(`div`,{className:`ds-table ds-table--${e}`,style:r,children:[(0,k.jsx)(`table`,{className:`ds-table__table`,style:i,children:(0,k.jsx)(`tbody`,{children:(0,k.jsxs)(`tr`,{className:`ds-table__row ds-table__row--header`,style:{height:48},children:[(0,k.jsx)(g,{style:a,children:`Cell Label`}),(0,k.jsx)(g,{style:a,children:`Cell Label`}),(0,k.jsx)(g,{style:a,children:`Cell Label`}),(0,k.jsx)(g,{style:a,children:`Cell Label`}),(0,k.jsx)(g,{style:a,children:`Cell Label`})]})})}),(0,k.jsx)(`table`,{className:`ds-table__table`,style:i,children:(0,k.jsx)(`tbody`,{children:(0,k.jsxs)(v,{state:`default`,style:{height:64},children:[(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`})]})})}),(0,k.jsx)(`table`,{className:`ds-table__table`,style:i,children:(0,k.jsx)(`tbody`,{children:(0,k.jsxs)(v,{state:`alternate`,style:{height:64},children:[(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`})]})})}),(0,k.jsx)(`table`,{className:`ds-table__table`,style:i,children:(0,k.jsx)(`tbody`,{children:(0,k.jsxs)(v,{state:`hover`,style:{height:64},children:[(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`})]})})}),(0,k.jsx)(`table`,{className:`ds-table__table`,style:i,children:(0,k.jsx)(`tbody`,{children:(0,k.jsxs)(v,{state:`selected`,style:{height:64},children:[(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`}),(0,k.jsx)(_,{style:o,children:`Cell Label`})]})})})]})}function D({theme:e}){let t=e===`dark`,n={width:t?109:141,display:`flex`,flexDirection:`column`,gap:t?13:16,padding:t?0:16,boxSizing:`border-box`};return(0,k.jsxs)(`div`,{className:`ds-table ds-table--${e}`,style:n,children:[(0,k.jsx)(`table`,{className:`ds-table__table`,style:{width:109,tableLayout:`fixed`},children:(0,k.jsx)(`tbody`,{children:(0,k.jsx)(`tr`,{className:`ds-table__row ds-table__row--header`,style:{height:26},children:(0,k.jsx)(`td`,{className:`ds-table__cell`,style:{width:109,minWidth:109,padding:`8px 16px`},children:(0,k.jsx)(`span`,{style:{color:`var(--ds-table-header-text)`,display:`block`,fontFamily:`var(--ui-font-family)`,fontSize:14,fontWeight:400,lineHeight:1.5,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:`Cell Label`})})})})}),(0,k.jsx)(`table`,{className:`ds-table__table`,style:{width:64,tableLayout:`fixed`},children:(0,k.jsx)(`tbody`,{children:(0,k.jsx)(`tr`,{className:`ds-table__row`,style:{height:40},children:(0,k.jsx)(`td`,{className:`ds-table__cell`,style:{width:64,minWidth:64,padding:`8px 16px 8px 24px`},children:(0,k.jsx)(`span`,{style:{alignItems:`center`,background:`var(--ds-table-checkbox-bg)`,border:`2px solid var(--ds-table-checkbox-border)`,borderRadius:8,boxSizing:`border-box`,display:`inline-flex`,height:24,justifyContent:`center`,width:24}})})})})}),(0,k.jsx)(`table`,{className:`ds-table__table`,style:{width:64,tableLayout:`fixed`},children:(0,k.jsx)(`tbody`,{children:(0,k.jsx)(`tr`,{className:`ds-table__row`,style:{height:40},children:(0,k.jsx)(`td`,{className:`ds-table__cell`,style:{width:64,minWidth:64,padding:`8px 16px 8px 24px`},children:(0,k.jsx)(`span`,{style:{alignItems:`center`,background:`var(--ds-table-checkbox-bg)`,border:`2px solid var(--ds-table-pagination-btn-text)`,borderRadius:8,boxSizing:`border-box`,color:`var(--ds-table-pagination-btn-text)`,display:`inline-flex`,height:24,justifyContent:`center`,width:24},children:(0,k.jsx)(`svg`,{className:`ds-table__check-icon`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M3.5 8L6.5 11L12.5 5`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`,strokeLinejoin:`round`})})})})})})}),(0,k.jsx)(`table`,{className:`ds-table__table`,style:{width:109,tableLayout:`fixed`},children:(0,k.jsx)(`tbody`,{children:(0,k.jsx)(`tr`,{className:`ds-table__row`,style:{height:40},children:(0,k.jsx)(`td`,{className:`ds-table__cell`,style:{width:109,minWidth:109,padding:`8px 16px`},children:(0,k.jsx)(`span`,{className:`ds-table__cell-text`,children:`Cell Label`})})})})}),(0,k.jsx)(`table`,{className:`ds-table__table`,style:{width:109,tableLayout:`fixed`},children:(0,k.jsx)(`tbody`,{children:(0,k.jsx)(`tr`,{className:`ds-table__row`,style:{height:40},children:(0,k.jsx)(`td`,{className:`ds-table__cell`,style:{width:109,minWidth:109,padding:`8px 16px`},children:(0,k.jsxs)(`span`,{style:{color:`var(--ds-table-row-text)`,display:`flex`,fontFamily:`var(--ui-font-family)`,fontSize:16,fontWeight:400,gap:8,justifyContent:`flex-end`,lineHeight:1.5,width:`100%`},children:[(0,k.jsx)(`span`,{style:{flexShrink:0},children:`$`}),(0,k.jsx)(`span`,{style:{flex:`1 1 auto`,minWidth:0,overflow:`hidden`,textAlign:`right`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:`99999.99`})]})})})})}),(0,k.jsx)(`table`,{className:`ds-table__table`,style:{width:109,tableLayout:`fixed`},children:(0,k.jsx)(`tbody`,{children:(0,k.jsx)(`tr`,{className:`ds-table__row`,style:{height:36},children:(0,k.jsx)(`td`,{className:`ds-table__cell`,style:{width:109,minWidth:109,padding:`8px 16px`},children:(0,k.jsx)(`span`,{style:{color:`var(--ds-table-row-text)`,display:`inline-flex`,fontSize:20,lineHeight:1},children:`☆`})})})})})]})}var O,k,A,j,M,N,P,F,I;e((()=>{O=t(n(),1),x(),k=r(),A={title:`Components/Table`,component:b,tags:[`autodocs`],parameters:{layout:`padded`},args:{theme:`light`},argTypes:{theme:{control:{type:`radio`},options:[`light`,`dark`],description:`Color theme`}}},j=[{id:1,name:`Alice Thornton`,role:`Product Designer`,department:`Design`,salary:95e3,status:`Active`},{id:2,name:`Bob Kimura`,role:`Frontend Engineer`,department:`Engineering`,salary:105e3,status:`Active`},{id:3,name:`Clara Mendes`,role:`Data Analyst`,department:`Analytics`,salary:88e3,status:`Away`},{id:4,name:`David Park`,role:`UX Researcher`,department:`Design`,salary:91e3,status:`Active`},{id:5,name:`Eva Schultz`,role:`Backend Engineer`,department:`Engineering`,salary:112e3,status:`Active`},{id:6,name:`Felix Turner`,role:`QA Engineer`,department:`Engineering`,salary:82e3,status:`Inactive`},{id:7,name:`Grace Liu`,role:`Product Manager`,department:`Product`,salary:12e4,status:`Active`},{id:8,name:`Hassan Ali`,role:`DevOps Engineer`,department:`Engineering`,salary:11e4,status:`Active`},{id:9,name:`Iris Petrov`,role:`Marketing Lead`,department:`Marketing`,salary:96e3,status:`Away`},{id:10,name:`James Osei`,role:`Sales Manager`,department:`Sales`,salary:102e3,status:`Active`}],M=[{key:`name`,label:`Name`,sortable:!0},{key:`role`,label:`Role`,sortable:!0},{key:`department`,label:`Department`,sortable:!0},{key:`salary`,label:`Salary`,sortable:!0,type:`number`,align:`right`,prefix:`$`},{key:`status`,label:`Status`,sortable:!1}],N={name:`Playground`,args:{theme:`light`,responsiveMode:`stack`,rowCount:5,columnCount:5,title:`Table title`,striped:!1,selectable:!1,showToolbar:!0,showSearch:!0,showPagination:!0,sortable:!0,loading:!1},argTypes:{theme:{control:{type:`radio`},options:[`light`,`dark`],description:`Color theme`},rowCount:{name:`rowCount`,control:{type:`range`,min:0,max:20,step:1},description:`Number of data rows`},responsiveMode:{control:{type:`radio`},options:[`stack`,`scroll`],description:`Mobile behavior below 640px`},columnCount:{name:`columnCount`,control:{type:`range`,min:1,max:5,step:1},description:`Number of columns (max 5)`},title:{control:`text`,description:`Toolbar title`},striped:{control:`boolean`,description:`Alternate row shading`},selectable:{control:`boolean`,description:`Show row checkboxes`},showToolbar:{control:`boolean`,description:`Show toolbar (title + search)`},showSearch:{control:`boolean`,description:`Show search input`,if:{arg:`showToolbar`}},showPagination:{control:`boolean`,description:`Show pagination footer`},sortable:{control:`boolean`,description:`Enable column sorting`},loading:{control:`boolean`,description:`Loading / disabled state`}},render:e=>{let{theme:t=`light`,responsiveMode:n=`stack`,rowCount:r=5,columnCount:i=5,title:a=`Table title`,striped:o=!1,selectable:s=!1,showToolbar:c=!0,showSearch:l=!0,showPagination:u=!0,sortable:d=!0,loading:f=!1}=e,[p,m]=(0,O.useState)(),[h,g]=(0,O.useState)(null),[_,v]=(0,O.useState)(``),[y,x]=(0,O.useState)(new Set),[w,T]=(0,O.useState)(1),E=S(r),D=C(i).map(e=>({...e,sortable:d?e.sortable:!1})),A=E.filter(e=>_?Object.values(e).some(e=>String(e).toLowerCase().includes(_.toLowerCase())):!0),j=[...A].sort((e,t)=>{if(!p||!h)return 0;let n=e[p],r=t[p],i=String(n).localeCompare(String(r),void 0,{numeric:!0});return h===`asc`?i:-i}).slice((w-1)*10,w*10);return(0,k.jsx)(`div`,{style:{background:t===`dark`?`#04070d`:`#f0f2f5`,borderRadius:16,padding:24},children:(0,k.jsx)(b,{theme:t,responsiveMode:n,columns:D,data:j,rowKey:(e,t)=>String(t),title:c?a:void 0,showSearch:l,showToolbar:c,showPagination:u,striped:o,selectable:s,selectedRowKeys:y,onRowSelect:(e,t)=>{x(n=>{let r=new Set(n);return t?r.add(e):r.delete(e),r})},onSelectAll:e=>{x(e?new Set(j.map((e,t)=>String(t))):new Set)},searchValue:_,onSearch:e=>{v(e),T(1)},sortKey:p,sortDirection:h,onSort:(e,t)=>{m(e),g(t)},currentPage:w,pageSize:10,totalItems:A.length,onPageChange:T,loading:f})})}},P=[{key:`name`,label:`Name`,sortable:!0},{key:`role`,label:`Role`,sortable:!0},{key:`department`,label:`Department`},{key:`salary`,label:`Salary`,type:`number`,align:`right`,prefix:`$`},{key:`status`,label:`Status`}],F={name:`All Tables`,parameters:{controls:{include:[`theme`]}},render:({theme:e=`light`})=>(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[(0,k.jsx)(w,{theme:e,label:`1 — Row (25177:22043 / 25177:22462)`,children:(0,k.jsx)(E,{theme:e})}),(0,k.jsx)(w,{theme:e,label:`2 — Table (22849:8675 / 25177:21625)`,children:(0,k.jsx)(T,{theme:e})}),(0,k.jsx)(w,{theme:e,label:`3 — Cell (22844:185 / 25244:13095)`,children:(0,k.jsx)(D,{theme:e})})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    theme: 'light',
    responsiveMode: 'stack',
    rowCount: 5,
    columnCount: 5,
    title: 'Table title',
    striped: false,
    selectable: false,
    showToolbar: true,
    showSearch: true,
    showPagination: true,
    sortable: true,
    loading: false
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio'
      },
      options: ['light', 'dark'],
      description: 'Color theme'
    },
    rowCount: {
      name: 'rowCount',
      control: {
        type: 'range',
        min: 0,
        max: 20,
        step: 1
      },
      description: 'Number of data rows'
    },
    responsiveMode: {
      control: {
        type: 'radio'
      },
      options: ['stack', 'scroll'],
      description: 'Mobile behavior below 640px'
    },
    columnCount: {
      name: 'columnCount',
      control: {
        type: 'range',
        min: 1,
        max: 5,
        step: 1
      },
      description: 'Number of columns (max 5)'
    },
    title: {
      control: 'text',
      description: 'Toolbar title'
    },
    striped: {
      control: 'boolean',
      description: 'Alternate row shading'
    },
    selectable: {
      control: 'boolean',
      description: 'Show row checkboxes'
    },
    showToolbar: {
      control: 'boolean',
      description: 'Show toolbar (title + search)'
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search input',
      if: {
        arg: 'showToolbar'
      }
    },
    showPagination: {
      control: 'boolean',
      description: 'Show pagination footer'
    },
    sortable: {
      control: 'boolean',
      description: 'Enable column sorting'
    },
    loading: {
      control: 'boolean',
      description: 'Loading / disabled state'
    }
  },
  render: args => {
    const {
      theme = 'light',
      responsiveMode = 'stack',
      rowCount = 5,
      columnCount = 5,
      title = 'Table title',
      striped = false,
      selectable = false,
      showToolbar = true,
      showSearch = true,
      showPagination = true,
      sortable = true,
      loading = false
    } = args;
    const [sortKey, setSortKey] = useState<string | undefined>();
    const [sortDir, setSortDir] = useState<TableSortDirection>(null);
    const [searchVal, setSearchVal] = useState('');
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const rawData = generateRows(rowCount);
    const cols = generateColumns(columnCount).map(c => ({
      ...c,
      sortable: sortable ? c.sortable : false
    }));
    const filtered = rawData.filter(row => searchVal ? Object.values(row).some(v => String(v).toLowerCase().includes(searchVal.toLowerCase())) : true);
    const sorted = [...filtered].sort((a, b) => {
      if (!sortKey || !sortDir) return 0;
      const av = a[sortKey];
      const bv = b[sortKey];
      const cmp = String(av).localeCompare(String(bv), undefined, {
        numeric: true
      });
      return sortDir === 'asc' ? cmp : -cmp;
    });
    const pageSize = 10;
    const paged = sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const handleSort = (key: string, dir: TableSortDirection) => {
      setSortKey(key);
      setSortDir(dir);
    };
    const handleRowSelect = (key: string, checked: boolean) => {
      setSelectedKeys(prev => {
        const next = new Set(prev);
        if (checked) next.add(key);else next.delete(key);
        return next;
      });
    };
    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedKeys(new Set(paged.map((_, i) => String(i))));
      } else {
        setSelectedKeys(new Set());
      }
    };
    const wrapperStyle: CSSProperties = {
      background: theme === 'dark' ? '#04070d' : '#f0f2f5',
      borderRadius: 16,
      padding: 24
    };
    return <div style={wrapperStyle}>\r
        <Table theme={theme} responsiveMode={responsiveMode} columns={cols} data={paged} rowKey={(_, i) => String(i)} title={showToolbar ? title : undefined} showSearch={showSearch} showToolbar={showToolbar} showPagination={showPagination} striped={striped} selectable={selectable} selectedRowKeys={selectedKeys} onRowSelect={handleRowSelect} onSelectAll={handleSelectAll} searchValue={searchVal} onSearch={v => {
        setSearchVal(v);
        setCurrentPage(1);
      }} sortKey={sortKey} sortDirection={sortDir} onSort={handleSort} currentPage={currentPage} pageSize={pageSize} totalItems={filtered.length} onPageChange={setCurrentPage} loading={loading} />\r
      </div>;
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'All Tables',
  parameters: {
    controls: {
      include: ['theme']
    }
  },
  render: ({
    theme = 'light'
  }) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>\r
      <TableDemo theme={theme} label="1 — Row (25177:22043 / 25177:22462)">\r
        <RowStatesFrameDemo theme={theme} />\r
      </TableDemo>\r
\r
      <TableDemo theme={theme} label="2 — Table (22849:8675 / 25177:21625)">\r
        <TableFrameDemo theme={theme} />\r
      </TableDemo>\r
\r
      <TableDemo theme={theme} label="3 — Cell (22844:185 / 25244:13095)">\r
        <CellFrameDemo theme={theme} />\r
      </TableDemo>\r
    </div>
}`,...F.parameters?.docs?.source}}},I=[`Playground`,`AllTables`]}))();export{F as AllTables,N as Playground,I as __namedExportsOrder,A as default};