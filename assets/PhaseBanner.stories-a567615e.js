import{S as W,i as j,s as A,x as g,Q as v,w as x,L as c,a as h,P as d,R as q,z as S,d as _,p as O,j as k,m as w,k as R,l as V,b as P,t as B,n as D}from"./index-98bb0bde.js";import{p as z,w as T,M as E,T as N,S as I}from"./collect-stories-cbdfda5c.js";const M=`Dispay a phase banner on prototypes, alpha and beta products.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/phase-banner).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { PhaseBanner } from "@onsvisual/svelte-components";
<\/script>

<PhaseBanner />
<!-- page header -->
<!-- page contents -->
\`\`\`
`;function Q(i){let s,n,a,o;return{c(){s=v("This is a new service – your "),n=g("a"),a=v("feedback"),o=v(" will help us improve it."),c(n,"href",i[1])},m(e,r){h(e,s,r),h(e,n,r),d(n,a),h(e,o,r)},p(e,r){r&2&&c(n,"href",e[1])},d(e){e&&_(s),e&&_(n),e&&_(o)}}}function U(i){let s,n,a,o;return{c(){s=v("This is a prototype – your "),n=g("a"),a=v("feedback"),o=v(" will help us improve it."),c(n,"href",i[1])},m(e,r){h(e,s,r),h(e,n,r),d(n,a),h(e,o,r)},p(e,r){r&2&&c(n,"href",e[1])},d(e){e&&_(s),e&&_(n),e&&_(o)}}}function F(i){let s,n,a,o,e,r,m,y,u,$;function t(p,b){return b&1&&($=null),$==null&&($=p[0].toLowerCase()==="prototype"),$?U:Q}let l=t(i,-1),f=l(i);return{c(){s=g("div"),n=g("div"),a=g("div"),o=g("div"),e=g("strong"),r=v(i[0]),m=x(),y=g("div"),u=g("span"),f.c(),c(e,"class","ons-phase-banner__badge svelte-x2c8o"),c(o,"class","ons-grid__col ons-col-auto ons-u-flex-no-grow ons-u-flex-no-shrink"),c(u,"class","ons-u-fs-s ons-u-m-no"),c(y,"class","ons-col-auto ons-grid--flex ons-grid--no-wrap@l ons-grid--vertical-center"),c(a,"class","ons-grid ons-grid--flex ons-grid--gutterless ons-grid--no-wrap"),c(n,"class","ons-container"),c(s,"class","ons-phase-banner svelte-x2c8o")},m(p,b){h(p,s,b),d(s,n),d(n,a),d(a,o),d(o,e),d(e,r),d(a,m),d(a,y),d(y,u),f.m(u,null)},p(p,[b]){b&1&&q(r,p[0]),l===(l=t(p,b))&&f?f.p(p,b):(f.d(1),f=l(p),f&&(f.c(),f.m(u,null)))},i:S,o:S,d(p){p&&_(s),f.d()}}}function G(i,s,n){let{phase:a="Beta"}=s,{href:o="/feedback"}=s;return i.$$set=e=>{"phase"in e&&n(0,a=e.phase),"href"in e&&n(1,o=e.href)},[a,o]}class L extends W{constructor(s){super(),j(this,s,G,F,A,{phase:0,href:1})}}L.__docgen={version:3,name:"PhaseBanner.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Phase of project (alpha, beta, prototype etc.)",name:"phase",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Beta"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"URL of feedback form (relative or absolute)",name:"href",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"/feedback"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function H(i){let s,n;const a=[i[0]];let o={};for(let e=0;e<a.length;e+=1)o=O(o,a[e]);return s=new L({props:o}),{c(){k(s.$$.fragment)},m(e,r){w(s,e,r),n=!0},p(e,r){const m=r&1?R(a,[V(e[0])]):{};s.$set(m)},i(e){n||(P(s.$$.fragment,e),n=!0)},o(e){B(s.$$.fragment,e),n=!1},d(e){D(s,e)}}}function J(i){let s,n,a,o,e,r,m,y;const u=[{title:"Layout/PhaseBanner"},{component:L},{argTypes:{}},T(M)];let $={};for(let t=0;t<u.length;t+=1)$=O($,u[t]);return s=new E({props:$}),a=new N({props:{$$slots:{default:[H,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:i}}}),e=new I({props:{name:"Default",args:{}}}),m=new I({props:{name:"Prototype with custom link",args:{phase:"Prototype",href:"https://example.com"}}}),{c(){k(s.$$.fragment),n=x(),k(a.$$.fragment),o=x(),k(e.$$.fragment),r=x(),k(m.$$.fragment)},m(t,l){w(s,t,l),h(t,n,l),w(a,t,l),h(t,o,l),w(e,t,l),h(t,r,l),w(m,t,l),y=!0},p(t,[l]){const f=l&0?R(u,[u[0],l&0&&{component:L},u[2],l&0&&V(T(M))]):{};s.$set(f);const p={};l&3&&(p.$$scope={dirty:l,ctx:t}),a.$set(p)},i(t){y||(P(s.$$.fragment,t),P(a.$$.fragment,t),P(e.$$.fragment,t),P(m.$$.fragment,t),y=!0)},o(t){B(s.$$.fragment,t),B(a.$$.fragment,t),B(e.$$.fragment,t),B(m.$$.fragment,t),y=!1},d(t){D(s,t),t&&_(n),D(a,t),t&&_(o),D(e,t),t&&_(r),D(m,t)}}}class K extends W{constructor(s){super(),j(this,s,null,J,A,{})}}const C=z(K,{meta:{title:"Layout/PhaseBanner"},stories:{"tpl:default":{storyId:"layout-phasebanner--default",name:"default",template:!0,source:"<PhaseBanner {...args} />",hasArgs:!0},Default:{storyId:"layout-phasebanner--default",name:"Default",template:!1,hasArgs:!1},PrototypeWithCustomLink:{storyId:"layout-phasebanner--prototype-with-custom-link",name:"Prototype with custom link",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","PhaseBanner","withComponentDocs"]}),Z=C.meta,ee=["Default","PrototypeWithCustomLink"],te=C.stories.Default,se=C.stories.PrototypeWithCustomLink;export{te as Default,se as PrototypeWithCustomLink,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=PhaseBanner.stories-a567615e.js.map
