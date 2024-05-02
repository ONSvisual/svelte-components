import{S,i as C,s as M,q as A,x as c,w as P,L as g,a as w,P as m,u as O,r as Y,v as B,b as d,t as _,d as E,Q as L,R as N,p as T,j as $,m as v,k as j,l as q,n as y,y as Q}from"./index-98bb0bde.js";import{p as R,w as D,M as U,T as V,S as z}from"./collect-stories-cccca598.js";import{I as F}from"./Input-bdd656d5.js";const I=`Use this component to show validation errors by wrapping form inputs and fieldsets.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/error).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ErrorPanel, Input } from "@onsvisual/svelte-components";
<\/script>

<ErrorPanel message="You enterered the wrong text">
  <Input/>
</ErrorPanel>
\`\`\`
`;function k(i){let e,r,n;return{c(){e=c("p"),r=c("strong"),n=L(i[0]),g(e,"class","ons-panel__error")},m(o,p){w(o,e,p),m(e,r),m(r,n)},p(o,p){p&1&&N(n,o[0])},d(o){o&&E(e)}}}function G(i){let e,r,n,o,p,s,l=i[0]&&k(i);const u=i[2].default,t=A(u,i,i[1],null);return{c(){e=c("div"),r=c("span"),r.textContent="Error:",n=P(),o=c("div"),l&&l.c(),p=P(),t&&t.c(),g(r,"class","ons-panel__assistive-text ons-u-vh"),g(o,"class","ons-panel__body"),g(e,"class","ons-panel ons-panel--error ons-panel--no-title svelte-uoiyfs"),g(e,"id","number-of-employees-error")},m(a,f){w(a,e,f),m(e,r),m(e,n),m(e,o),l&&l.m(o,null),m(o,p),t&&t.m(o,null),s=!0},p(a,[f]){a[0]?l?l.p(a,f):(l=k(a),l.c(),l.m(o,p)):l&&(l.d(1),l=null),t&&t.p&&(!s||f&2)&&O(t,u,a,a[1],s?B(u,a[1],f,null):Y(a[1]),null)},i(a){s||(d(t,a),s=!0)},o(a){_(t,a),s=!1},d(a){a&&E(e),l&&l.d(),t&&t.d(a)}}}function H(i,e,r){let{$$slots:n={},$$scope:o}=e,{message:p=""}=e;return i.$$set=s=>{"message"in s&&r(0,p=s.message),"$$scope"in s&&r(1,o=s.$$scope)},[p,o,n]}class h extends S{constructor(e){super(),C(this,e,H,G,M,{message:0})}}h.__docgen={version:3,name:"ErrorPanel.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Set an error message",name:"message",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function J(i){let e,r;return e=new F({}),{c(){$(e.$$.fragment)},m(n,o){v(e,n,o),r=!0},i(n){r||(d(e.$$.fragment,n),r=!0)},o(n){_(e.$$.fragment,n),r=!1},d(n){y(e,n)}}}function K(i){let e,r,n;const o=[i[0]];let p={$$slots:{default:[J]},$$scope:{ctx:i}};for(let s=0;s<o.length;s+=1)p=T(p,o[s]);return r=new h({props:p}),{c(){e=c("div"),$(r.$$.fragment),Q(e,"padding","12px")},m(s,l){w(s,e,l),v(r,e,null),n=!0},p(s,l){const u=l&1?j(o,[q(s[0])]):{};l&2&&(u.$$scope={dirty:l,ctx:s}),r.$set(u)},i(s){n||(d(r.$$.fragment,s),n=!0)},o(s){_(r.$$.fragment,s),n=!1},d(s){s&&E(e),y(r)}}}function W(i){let e,r,n,o,p,s;const l=[{title:"Inputs/ErrorPanel"},{component:h},{argTypes:{}},D(I)];let u={};for(let t=0;t<l.length;t+=1)u=T(u,l[t]);return e=new U({props:u}),n=new V({props:{$$slots:{default:[K,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:i}}}),p=new z({props:{name:"Default",args:{message:"You entered the wrong text"}}}),{c(){$(e.$$.fragment),r=P(),$(n.$$.fragment),o=P(),$(p.$$.fragment)},m(t,a){v(e,t,a),w(t,r,a),v(n,t,a),w(t,o,a),v(p,t,a),s=!0},p(t,[a]){const f=a&0?j(l,[l[0],a&0&&{component:h},l[2],a&0&&q(D(I))]):{};e.$set(f);const b={};a&3&&(b.$$scope={dirty:a,ctx:t}),n.$set(b)},i(t){s||(d(e.$$.fragment,t),d(n.$$.fragment,t),d(p.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),_(n.$$.fragment,t),_(p.$$.fragment,t),s=!1},d(t){y(e,t),t&&E(r),y(n,t),t&&E(o),y(p,t)}}}class X extends S{constructor(e){super(),C(this,e,null,W,M,{})}}const x=R(X,{meta:{title:"Inputs/ErrorPanel"},stories:{"tpl:default":{storyId:"inputs-errorpanel--default",name:"default",template:!0,source:`<div style:padding="12px">
  <ErrorPanel {...args}>
    <Input />
  </ErrorPanel>
</div>`,hasArgs:!0},Default:{storyId:"inputs-errorpanel--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","ErrorPanel","Input","withComponentDocs"]}),se=x.meta,ne=["Default"],re=x.stories.Default;export{re as Default,ne as __namedExportsOrder,se as default};
//# sourceMappingURL=ErrorPanel.stories-39399954.js.map