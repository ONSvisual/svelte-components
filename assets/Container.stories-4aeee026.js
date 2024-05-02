import{S as B,i as G,s as H,p as z,j as m,w as c,m as l,a as d,k as E,l as O,b as f,t as $,n as u,d as w,x as T,y as N,P as J,z as K}from"./index-98bb0bde.js";import{p as L,w as j,M as Q,T as R,S as M}from"./collect-stories-cccca598.js";import{C as k}from"./Container-db0f663a.js";import"./Theme-b4ca58b3.js";const q=`A container to set the width, minimum height and theme of a block of content.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Container } from "@onsvisual/svelte-components";
<\/script>

<Container width="{narrow|medium|wide|full}"> {child_components} </Container>
\`\`\`
`;function U(_){let t,a;return{c(){t=T("div"),a=T("p"),a.textContent="Contents of container.",N(a,"margin","0"),N(t,"padding","24px 12px"),N(t,"background","lightgrey")},m(r,o){d(r,t,o),J(t,a)},p:K,d(r){r&&w(t)}}}function V(_){let t,a;const r=[_[0]];let o={$$slots:{default:[U]},$$scope:{ctx:_}};for(let s=0;s<r.length;s+=1)o=z(o,r[s]);return t=new k({props:o}),{c(){m(t.$$.fragment)},m(s,i){l(t,s,i),a=!0},p(s,i){const p=i&1?E(r,[O(s[0])]):{};i&2&&(p.$$scope={dirty:i,ctx:s}),t.$set(p)},i(s){a||(f(t.$$.fragment,s),a=!0)},o(s){$(t.$$.fragment,s),a=!1},d(s){u(t,s)}}}function X(_){let t,a,r,o,s,i,p,x,y,A,C,I,W,b,D,v;const h=[{title:"Wrappers/Container"},{component:k},{argTypes:{width:{options:["narrow","medium","wide","wider","full"],control:{type:"select"}},height:{options:["auto","tall","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},j(q)];let F={};for(let e=0;e<h.length;e+=1)F=z(F,h[e]);return t=new Q({props:F}),r=new R({props:{$$slots:{default:[V,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:_}}}),s=new M({props:{name:"Default",args:{}}}),p=new M({props:{name:"Narrow",args:{width:"narrow"}}}),y=new M({props:{name:"Medium",args:{width:"medium"}}}),C=new M({props:{name:"Wide",args:{width:"wide"}}}),W=new M({props:{name:"Wider",args:{width:"wider"}}}),D=new M({props:{name:"Full",args:{width:"full"}}}),{c(){m(t.$$.fragment),a=c(),m(r.$$.fragment),o=c(),m(s.$$.fragment),i=c(),m(p.$$.fragment),x=c(),m(y.$$.fragment),A=c(),m(C.$$.fragment),I=c(),m(W.$$.fragment),b=c(),m(D.$$.fragment)},m(e,n){l(t,e,n),d(e,a,n),l(r,e,n),d(e,o,n),l(s,e,n),d(e,i,n),l(p,e,n),d(e,x,n),l(y,e,n),d(e,A,n),l(C,e,n),d(e,I,n),l(W,e,n),d(e,b,n),l(D,e,n),v=!0},p(e,[n]){const P=n&0?E(h,[h[0],n&0&&{component:k},h[2],n&0&&O(j(q))]):{};t.$set(P);const S={};n&3&&(S.$$scope={dirty:n,ctx:e}),r.$set(S)},i(e){v||(f(t.$$.fragment,e),f(r.$$.fragment,e),f(s.$$.fragment,e),f(p.$$.fragment,e),f(y.$$.fragment,e),f(C.$$.fragment,e),f(W.$$.fragment,e),f(D.$$.fragment,e),v=!0)},o(e){$(t.$$.fragment,e),$(r.$$.fragment,e),$(s.$$.fragment,e),$(p.$$.fragment,e),$(y.$$.fragment,e),$(C.$$.fragment,e),$(W.$$.fragment,e),$(D.$$.fragment,e),v=!1},d(e){u(t,e),e&&w(a),u(r,e),e&&w(o),u(s,e),e&&w(i),u(p,e),e&&w(x),u(y,e),e&&w(A),u(C,e),e&&w(I),u(W,e),e&&w(b),u(D,e)}}}class Y extends B{constructor(t){super(),G(this,t,null,X,H,{})}}const g=L(Y,{meta:{title:"Wrappers/Container"},stories:{"tpl:default":{storyId:"wrappers-container--default",name:"default",template:!0,source:`<Container {...args}>
  <div style:padding="24px 12px" style:background="lightgrey">
    <p style:margin="0">Contents of container.</p>
  </div>
</Container>`,hasArgs:!0},Default:{storyId:"wrappers-container--default",name:"Default",template:!1,hasArgs:!1},Narrow:{storyId:"wrappers-container--narrow",name:"Narrow",template:!1,hasArgs:!1},Medium:{storyId:"wrappers-container--medium",name:"Medium",template:!1,hasArgs:!1},Wide:{storyId:"wrappers-container--wide",name:"Wide",template:!1,hasArgs:!1},Wider:{storyId:"wrappers-container--wider",name:"Wider",template:!1,hasArgs:!1},Full:{storyId:"wrappers-container--full",name:"Full",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Container","withComponentDocs"]}),ne=g.meta,re=["Default","Narrow","Medium","Wide","Wider","Full"],ae=g.stories.Default,oe=g.stories.Narrow,ie=g.stories.Medium,pe=g.stories.Wide,me=g.stories.Wider,le=g.stories.Full;export{ae as Default,le as Full,ie as Medium,oe as Narrow,pe as Wide,me as Wider,re as __namedExportsOrder,ne as default};
//# sourceMappingURL=Container.stories-4aeee026.js.map