import{S as B,i as E,s as H,p as M,j as i,x as y,m,a as g,k as T,l as j,b as f,t as u,n as $,d as _,w as N,H as b,A as O,B as z}from"./index-b112ad45.js";import{p as G,w as k,M as J,T as K,S as v}from"./collect-stories-6e9ce8fc.js";import{C as F}from"./Container-a17e3332.js";import"./Theme-446f25bc.js";const S=`A container to set the width, minimum height and theme of a block of content.

\`\`\`html
<script>
  import { Container } from "@onsvisual/svelte-components";
<\/script>

<Container width="{narrow|medium|wide|full}"> {child_components} </Container>
\`\`\`
`;function L(c){let t,a;return{c(){t=N("div"),a=N("p"),a.textContent="Contents of container.",b(a,"margin","0"),b(t,"padding","24px 12px"),b(t,"background","lightgrey")},m(r,o){g(r,t,o),O(t,a)},p:z,d(r){r&&_(t)}}}function P(c){let t,a;const r=[c[0]];let o={$$slots:{default:[L]},$$scope:{ctx:c}};for(let n=0;n<r.length;n+=1)o=M(o,r[n]);return t=new F({props:o}),{c(){i(t.$$.fragment)},m(n,l){m(t,n,l),a=!0},p(n,l){const p=l&1?T(r,[j(n[0])]):{};l&2&&(p.$$scope={dirty:l,ctx:n}),t.$set(p)},i(n){a||(f(t.$$.fragment,n),a=!0)},o(n){u(t.$$.fragment,n),a=!1},d(n){$(t,n)}}}function Q(c){let t,a,r,o,n,l,p,x,d,W,w,D;const C=[{title:"Wrappers/Container"},{component:F},{argTypes:{width:{options:["narrow","medium","width","full"],control:{type:"select"}},height:{options:["auto","tall","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},k(S)];let A={};for(let e=0;e<C.length;e+=1)A=M(A,C[e]);return t=new J({props:A}),r=new K({props:{$$slots:{default:[P,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:c}}}),n=new v({props:{name:"Default",args:{}}}),p=new v({props:{name:"Narrow",args:{width:"narrow"}}}),d=new v({props:{name:"Wide",args:{width:"wide"}}}),w=new v({props:{name:"Full",args:{width:"full"}}}),{c(){i(t.$$.fragment),a=y(),i(r.$$.fragment),o=y(),i(n.$$.fragment),l=y(),i(p.$$.fragment),x=y(),i(d.$$.fragment),W=y(),i(w.$$.fragment)},m(e,s){m(t,e,s),g(e,a,s),m(r,e,s),g(e,o,s),m(n,e,s),g(e,l,s),m(p,e,s),g(e,x,s),m(d,e,s),g(e,W,s),m(w,e,s),D=!0},p(e,[s]){const q=s&0?T(C,[C[0],s&0&&{component:F},C[2],s&0&&j(k(S))]):{};t.$set(q);const I={};s&3&&(I.$$scope={dirty:s,ctx:e}),r.$set(I)},i(e){D||(f(t.$$.fragment,e),f(r.$$.fragment,e),f(n.$$.fragment,e),f(p.$$.fragment,e),f(d.$$.fragment,e),f(w.$$.fragment,e),D=!0)},o(e){u(t.$$.fragment,e),u(r.$$.fragment,e),u(n.$$.fragment,e),u(p.$$.fragment,e),u(d.$$.fragment,e),u(w.$$.fragment,e),D=!1},d(e){$(t,e),e&&_(a),$(r,e),e&&_(o),$(n,e),e&&_(l),$(p,e),e&&_(x),$(d,e),e&&_(W),$(w,e)}}}class R extends B{constructor(t){super(),E(this,t,null,Q,H,{})}}const h=G(R,{meta:{title:"Wrappers/Container"},stories:{"tpl:default":{storyId:"wrappers-container--default",name:"default",template:!0,source:`<Container {...args}>
  <div style:padding="24px 12px" style:background="lightgrey">
    <p style:margin="0">Contents of container.</p>
  </div>
</Container>`,hasArgs:!0},Default:{storyId:"wrappers-container--default",name:"Default",template:!1,hasArgs:!1},Narrow:{storyId:"wrappers-container--narrow",name:"Narrow",template:!1,hasArgs:!1},Wide:{storyId:"wrappers-container--wide",name:"Wide",template:!1,hasArgs:!1},Full:{storyId:"wrappers-container--full",name:"Full",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Container","withComponentDocs"]}),Z=h.meta,ee=["Default","Narrow","Wide","Full"],te=h.stories.Default,ne=h.stories.Narrow,se=h.stories.Wide,re=h.stories.Full;export{te as Default,re as Full,ne as Narrow,se as Wide,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=Container.stories-d861242f.js.map
