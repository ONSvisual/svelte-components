import{S as M,i as W,s as b,p as S,j as l,x as h,m as c,a as D,k as x,l as A,b as i,t as u,n as $,d as w}from"./index-b112ad45.js";import{p as j,w as F,M as L,T as q,S as T}from"./collect-stories-6e9ce8fc.js";import{F as y}from"./Footer-da6dea88.js";import"./Theme-446f25bc.js";const v=`A footer component with compact mode and theming options.

\`\`\`html
<script>
  import { Footer } from "@onsvisual/svelte-components";
<\/script>

<footer />
\`\`\`
`;function E(_){let o,r;const a=[_[0]];let m={};for(let e=0;e<a.length;e+=1)m=S(m,a[e]);return o=new y({props:m}),{c(){l(o.$$.fragment)},m(e,p){c(o,e,p),r=!0},p(e,p){const n=p&1?x(a,[A(e[0])]):{};o.$set(n)},i(e){r||(i(o.$$.fragment,e),r=!0)},o(e){u(o.$$.fragment,e),r=!1},d(e){$(o,e)}}}function O(_){let o,r,a,m,e,p,n,d;const f=[{title:"Layout/Footer"},{component:y},{argTypes:{theme:{options:["light","dark"],control:{type:"select"}}}},F(v)];let g={};for(let t=0;t<f.length;t+=1)g=S(g,f[t]);return o=new L({props:g}),a=new q({props:{$$slots:{default:[E,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:_}}}),e=new T({props:{name:"Default",args:{}}}),n=new T({props:{name:"Compact with dark theme",args:{compact:!0,theme:"dark"}}}),{c(){l(o.$$.fragment),r=h(),l(a.$$.fragment),m=h(),l(e.$$.fragment),p=h(),l(n.$$.fragment)},m(t,s){c(o,t,s),D(t,r,s),c(a,t,s),D(t,m,s),c(e,t,s),D(t,p,s),c(n,t,s),d=!0},p(t,[s]){const I=s&0?x(f,[f[0],s&0&&{component:y},f[2],s&0&&A(F(v))]):{};o.$set(I);const C={};s&3&&(C.$$scope={dirty:s,ctx:t}),a.$set(C)},i(t){d||(i(o.$$.fragment,t),i(a.$$.fragment,t),i(e.$$.fragment,t),i(n.$$.fragment,t),d=!0)},o(t){u(o.$$.fragment,t),u(a.$$.fragment,t),u(e.$$.fragment,t),u(n.$$.fragment,t),d=!1},d(t){$(o,t),t&&w(r),$(a,t),t&&w(m),$(e,t),t&&w(p),$(n,t)}}}class z extends M{constructor(o){super(),W(this,o,null,O,b,{})}}const k=j(z,{meta:{title:"Layout/Footer"},stories:{"tpl:default":{storyId:"layout-footer--default",name:"default",template:!0,source:"<Footer {...args} />",hasArgs:!0},Default:{storyId:"layout-footer--default",name:"Default",template:!1,hasArgs:!1},CompactWithDarkTheme:{storyId:"layout-footer--compact-with-dark-theme",name:"Compact with dark theme",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Footer","withComponentDocs"]}),K=k.meta,N=["Default","CompactWithDarkTheme"],P=k.stories.Default,Q=k.stories.CompactWithDarkTheme;export{Q as CompactWithDarkTheme,P as Default,N as __namedExportsOrder,K as default};
//# sourceMappingURL=Footer.stories-496fc5ba.js.map
