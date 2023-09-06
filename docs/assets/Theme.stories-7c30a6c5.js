import{S as W,i as q,s as E,p as I,j as i,w as _,m as u,a as D,k as B,l as j,b as $,t as h,n as c,d as w,x as v,y as S,H as T,N}from"./index-01cfd182.js";import{p as O,w as C,M as z,T as F,S as b}from"./collect-stories-037cf284.js";import{T as L}from"./Theme-f59253ea.js";const A=`A component that sets the colour scheme of its child components using CSS variables.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Theme } from "@onsvisual/svelte-components";
<\/script>

<Theme theme="{theme_name}"> {child_components} </Theme>
\`\`\`
`;function G(l){let t,m,n,p,s,r;return{c(){t=v("div"),m=v("h2"),m.textContent="Title",n=_(),p=v("p"),p.innerHTML='Text with a <a href="#0">hyperlink</a>.',s=_(),r=v("p"),r.textContent="Muted text.",S(r,"color","var(--muted)"),S(t,"padding","12px")},m(o,d){D(o,t,d),T(t,m),T(t,n),T(t,p),T(t,s),T(t,r)},p:N,d(o){o&&w(t)}}}function J(l){let t,m;const n=[l[0]];let p={$$slots:{default:[G]},$$scope:{ctx:l}};for(let s=0;s<n.length;s+=1)p=I(p,n[s]);return t=new L({props:p}),{c(){i(t.$$.fragment)},m(s,r){u(t,s,r),m=!0},p(s,r){const o=r&1?B(n,[j(s[0])]):{};r&2&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){m||($(t.$$.fragment,s),m=!0)},o(s){h(t.$$.fragment,s),m=!1},d(s){c(t,s)}}}function K(l){let t,m,n,p,s,r,o,d,f,k;const g=[{title:"Wrappers/Theme"},{component:L},{argTypes:{theme:{options:["","light","dark","lightblue"],control:{type:"select"}}}},C(A)];let x={};for(let e=0;e<g.length;e+=1)x=I(x,g[e]);return t=new z({props:x}),n=new F({props:{$$slots:{default:[J,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:l}}}),s=new b({props:{name:"Default",args:{}}}),o=new b({props:{name:"Dark",args:{theme:"dark"}}}),f=new b({props:{name:"Light blue",args:{theme:"lightblue"}}}),{c(){i(t.$$.fragment),m=_(),i(n.$$.fragment),p=_(),i(s.$$.fragment),r=_(),i(o.$$.fragment),d=_(),i(f.$$.fragment)},m(e,a){u(t,e,a),D(e,m,a),u(n,e,a),D(e,p,a),u(s,e,a),D(e,r,a),u(o,e,a),D(e,d,a),u(f,e,a),k=!0},p(e,[a]){const H=a&0?B(g,[g[0],a&0&&{component:L},g[2],a&0&&j(C(A))]):{};t.$set(H);const M={};a&3&&(M.$$scope={dirty:a,ctx:e}),n.$set(M)},i(e){k||($(t.$$.fragment,e),$(n.$$.fragment,e),$(s.$$.fragment,e),$(o.$$.fragment,e),$(f.$$.fragment,e),k=!0)},o(e){h(t.$$.fragment,e),h(n.$$.fragment,e),h(s.$$.fragment,e),h(o.$$.fragment,e),h(f.$$.fragment,e),k=!1},d(e){c(t,e),e&&w(m),c(n,e),e&&w(p),c(s,e),e&&w(r),c(o,e),e&&w(d),c(f,e)}}}class P extends W{constructor(t){super(),q(this,t,null,K,E,{})}}const y=O(P,{meta:{title:"Wrappers/Theme"},stories:{"tpl:default":{storyId:"wrappers-theme--default",name:"default",template:!0,source:`<Theme {...args}>
  <div style:padding="12px">
    <h2>Title</h2>
    <p>Text with a <a href="#0">hyperlink</a>.</p>
    <p style:color="var(--muted)">Muted text.</p>
  </div>
</Theme>`,hasArgs:!0},Default:{storyId:"wrappers-theme--default",name:"Default",template:!1,hasArgs:!1},Dark:{storyId:"wrappers-theme--dark",name:"Dark",template:!1,hasArgs:!1},LightBlue:{storyId:"wrappers-theme--light-blue",name:"Light blue",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Theme","withComponentDocs"]}),V=y.meta,X=["Default","Dark","LightBlue"],Y=y.stories.Default,Z=y.stories.Dark,ee=y.stories.LightBlue;export{Z as Dark,Y as Default,ee as LightBlue,X as __namedExportsOrder,V as default};
//# sourceMappingURL=Theme.stories-7c30a6c5.js.map