import{S as E,i as O,s as B,p as L,j as $,w as p,m as c,a as m,k as b,l as j,b as _,t as g,n as w,d,x as T,L as x,z as H}from"./index-98bb0bde.js";import{p as J,w as S,M as K,T as P,S as k}from"./collect-stories-cbdfda5c.js";import{G as F}from"./Grid-8b628cf6.js";import"./Container-db0f663a.js";import"./Theme-b4ca58b3.js";const M=`A media grid component, useful for images and small multiple charts. Setting \`colwidth\` to **full** allows for a single cell/image/chart with an optional caption.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Grid } from "@onsvisual/svelte-components";
<\/script>

<Grid>
  <div>{grid_cell_content}</div>
  <div>{grid_cell_content}</div>
  <div>{grid_cell_content}</div>
</Grid>
\`\`\`
`;function Q(v){let s,f,n,u,t,a,o;return{c(){s=T("div"),s.textContent="Grid cell one",f=p(),n=T("div"),n.textContent="Grid cell two",u=p(),t=T("div"),t.textContent="Grid cell three",a=p(),o=T("div"),o.textContent="Grid cell four",x(s,"class","grid-cell svelte-nlpf1e"),x(n,"class","grid-cell svelte-nlpf1e"),x(t,"class","grid-cell svelte-nlpf1e"),x(o,"class","grid-cell svelte-nlpf1e")},m(l,i){m(l,s,i),m(l,f,i),m(l,n,i),m(l,u,i),m(l,t,i),m(l,a,i),m(l,o,i)},p:H,d(l){l&&d(s),l&&d(f),l&&d(n),l&&d(u),l&&d(t),l&&d(a),l&&d(o)}}}function R(v){let s,f;const n=[v[0]];let u={$$slots:{default:[Q]},$$scope:{ctx:v}};for(let t=0;t<n.length;t+=1)u=L(u,n[t]);return s=new F({props:u}),{c(){$(s.$$.fragment)},m(t,a){c(s,t,a),f=!0},p(t,a){const o=a&1?b(n,[j(t[0])]):{};a&2&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){f||(_(s.$$.fragment,t),f=!0)},o(t){g(s.$$.fragment,t),f=!1},d(t){w(s,t)}}}function U(v){let s,f,n,u,t,a,o,l,i,A,G,I,y,W;const D=[{title:"Layout/Grid"},{component:F},{argTypes:{width:{options:["narrow","medium","wide","wider","full"],control:{type:"select"}}}},S(M)];let h={};for(let e=0;e<D.length;e+=1)h=L(h,D[e]);return s=new K({props:h}),n=new P({props:{$$slots:{default:[R,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:v}}}),t=new k({props:{name:"Default",args:{}}}),o=new k({props:{name:"Dark theme",args:{theme:"dark"}}}),i=new k({props:{name:"Wide columns",args:{colwidth:"wide"}}}),G=new k({props:{name:"Narrow columns",args:{colwidth:"narrow"}}}),y=new k({props:{name:"Full width columns",args:{colwidth:"full"}}}),{c(){$(s.$$.fragment),f=p(),$(n.$$.fragment),u=p(),$(t.$$.fragment),a=p(),$(o.$$.fragment),l=p(),$(i.$$.fragment),A=p(),$(G.$$.fragment),I=p(),$(y.$$.fragment)},m(e,r){c(s,e,r),m(e,f,r),c(n,e,r),m(e,u,r),c(t,e,r),m(e,a,r),c(o,e,r),m(e,l,r),c(i,e,r),m(e,A,r),c(G,e,r),m(e,I,r),c(y,e,r),W=!0},p(e,[r]){const z=r&0?b(D,[D[0],r&0&&{component:F},D[2],r&0&&j(S(M))]):{};s.$set(z);const N={};r&3&&(N.$$scope={dirty:r,ctx:e}),n.$set(N)},i(e){W||(_(s.$$.fragment,e),_(n.$$.fragment,e),_(t.$$.fragment,e),_(o.$$.fragment,e),_(i.$$.fragment,e),_(G.$$.fragment,e),_(y.$$.fragment,e),W=!0)},o(e){g(s.$$.fragment,e),g(n.$$.fragment,e),g(t.$$.fragment,e),g(o.$$.fragment,e),g(i.$$.fragment,e),g(G.$$.fragment,e),g(y.$$.fragment,e),W=!1},d(e){w(s,e),e&&d(f),w(n,e),e&&d(u),w(t,e),e&&d(a),w(o,e),e&&d(l),w(i,e),e&&d(A),w(G,e),e&&d(I),w(y,e)}}}class q extends E{constructor(s){super(),O(this,s,null,U,B,{})}}q.__docgen={version:3,name:"Grid.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const C=J(q,{meta:{title:"Layout/Grid"},stories:{"tpl:default":{storyId:"layout-grid--default",name:"default",template:!0,source:`<Grid {...args}>
  <div class="grid-cell">Grid cell one</div>
  <div class="grid-cell">Grid cell two</div>
  <div class="grid-cell">Grid cell three</div>
  <div class="grid-cell">Grid cell four</div>
</Grid>`,hasArgs:!0},Default:{storyId:"layout-grid--default",name:"Default",template:!1,hasArgs:!1},DarkTheme:{storyId:"layout-grid--dark-theme",name:"Dark theme",template:!1,hasArgs:!1},WideColumns:{storyId:"layout-grid--wide-columns",name:"Wide columns",template:!1,hasArgs:!1},NarrowColumns:{storyId:"layout-grid--narrow-columns",name:"Narrow columns",template:!1,hasArgs:!1},FullWidthColumns:{storyId:"layout-grid--full-width-columns",name:"Full width columns",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Grid","withComponentDocs"]}),te=C.meta,se=["Default","DarkTheme","WideColumns","NarrowColumns","FullWidthColumns"],le=C.stories.Default,re=C.stories.DarkTheme,ne=C.stories.WideColumns,oe=C.stories.NarrowColumns,ie=C.stories.FullWidthColumns;export{re as DarkTheme,le as Default,ie as FullWidthColumns,oe as NarrowColumns,ne as WideColumns,se as __namedExportsOrder,te as default};
//# sourceMappingURL=Grid.stories-6b6aefd3.js.map
