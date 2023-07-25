import{S as I,i as M,s as j,w,x as $,a as p,g as H,t as k,c as J,b,d as m,q as z,u as L,r as P,v as E,y as S,z as y,A as T,B as D,C as K,p as V,j as g,m as q,k as F,l as G,n as v,D as N}from"./index-9c03537d.js";import{p as Q,w as h,M as R,T as U,S as O}from"./collect-stories-d3cc164c.js";const C=`An indented block of large text, designed to sit inside a \`<Section>\` block. Adding an "attribution" text will make it appear as a quote.

\`\`\`html
<script>
  import { Blockquote } from "@onsvisual/svelte-components";
<\/script>

<Blockquote attribution="A. Person">
  Some quoted text.
</Blockquote>
\`\`\`
`;function W(u){let e,o;const l=u[2].default,r=z(l,u,u[1],null);return{c(){e=w("span"),r&&r.c(),$(e,"class","ons-quote__text ons-u-fs-l")},m(a,s){p(a,e,s),r&&r.m(e,null),o=!0},p(a,s){r&&r.p&&(!o||s&2)&&L(r,l,a,a[1],o?E(l,a[1],s,null):P(a[1]),null)},i(a){o||(b(r,a),o=!0)},o(a){k(r,a),o=!1},d(a){a&&m(e),r&&r.d(a)}}}function X(u){let e,o,l,r,a,s,c,i,f;const d=u[2].default,t=z(d,u,u[1],null);return{c(){e=S("svg"),o=S("path"),l=y(),r=w("span"),t&&t.c(),a=y(),s=w("span"),c=T("— "),i=T(u[0]),$(o,"d","M13.44.77h-3l-2 4v6h6v-6h-3l2-4zm-8 0h-3l-2 4v6h6v-6h-3l2-4z"),$(o,"transform","translate(-0.44 -0.77)"),$(e,"class","ons-svg-icon"),$(e,"viewBox","0 0 14 10"),$(e,"xmlns","http://www.w3.org/2000/svg"),$(e,"focusable","false"),$(e,"fill","currentColor"),$(r,"class","ons-quote__text ons-u-fs-l"),$(s,"class","ons-quote__ref")},m(n,_){p(n,e,_),D(e,o),p(n,l,_),p(n,r,_),t&&t.m(r,null),p(n,a,_),p(n,s,_),D(s,c),D(s,i),f=!0},p(n,_){t&&t.p&&(!f||_&2)&&L(t,d,n,n[1],f?E(d,n[1],_,null):P(n[1]),null),(!f||_&1)&&K(i,n[0])},i(n){f||(b(t,n),f=!0)},o(n){k(t,n),f=!1},d(n){n&&m(e),n&&m(l),n&&m(r),t&&t.d(n),n&&m(a),n&&m(s)}}}function Y(u){let e,o,l,r;const a=[X,W],s=[];function c(i,f){return i[0]?0:1}return o=c(u),l=s[o]=a[o](u),{c(){e=w("blockquote"),l.c(),$(e,"class","ons-quote")},m(i,f){p(i,e,f),s[o].m(e,null),r=!0},p(i,[f]){let d=o;o=c(i),o===d?s[o].p(i,f):(H(),k(s[d],1,1,()=>{s[d]=null}),J(),l=s[o],l?l.p(i,f):(l=s[o]=a[o](i),l.c()),b(l,1),l.m(e,null))},i(i){r||(b(l),r=!0)},o(i){k(l),r=!1},d(i){i&&m(e),s[o].d()}}}function Z(u,e,o){let{$$slots:l={},$$scope:r}=e,{attribution:a=""}=e;return u.$$set=s=>{"attribution"in s&&o(0,a=s.attribution),"$$scope"in s&&o(1,r=s.$$scope)},[a,r,l]}class B extends I{constructor(e){super(),M(this,e,Z,Y,j,{attribution:0})}}B.__docgen={version:3,name:"Blockquote.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) attribution for the quote. If you leave this blank, you will just get an indented text block.",name:"attribution",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ee(u){let e;return{c(){e=T(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.`)},m(o,l){p(o,e,l)},d(o){o&&m(e)}}}function te(u){let e,o,l;const r=[u[0]];let a={$$slots:{default:[ee]},$$scope:{ctx:u}};for(let s=0;s<r.length;s+=1)a=V(a,r[s]);return o=new B({props:a}),{c(){e=w("div"),g(o.$$.fragment),N(e,"padding","12px")},m(s,c){p(s,e,c),q(o,e,null),l=!0},p(s,c){const i=c&1?F(r,[G(s[0])]):{};c&2&&(i.$$scope={dirty:c,ctx:s}),o.$set(i)},i(s){l||(b(o.$$.fragment,s),l=!0)},o(s){k(o.$$.fragment,s),l=!1},d(s){s&&m(e),v(o)}}}function se(u){let e,o,l,r,a,s,c,i;const f=[{title:"Decorators/Blockquote"},{component:B},{argTypes:{}},h(C)];let d={};for(let t=0;t<f.length;t+=1)d=V(d,f[t]);return e=new R({props:d}),l=new U({props:{$$slots:{default:[te,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:u}}}),a=new O({props:{name:"Default",args:{attribution:"A. Person"}}}),c=new O({props:{name:"Text only",args:{width:"medium",title:"Section title"}}}),{c(){g(e.$$.fragment),o=y(),g(l.$$.fragment),r=y(),g(a.$$.fragment),s=y(),g(c.$$.fragment)},m(t,n){q(e,t,n),p(t,o,n),q(l,t,n),p(t,r,n),q(a,t,n),p(t,s,n),q(c,t,n),i=!0},p(t,[n]){const _=n&0?F(f,[f[0],n&0&&{component:B},f[2],n&0&&G(h(C))]):{};e.$set(_);const A={};n&3&&(A.$$scope={dirty:n,ctx:t}),l.$set(A)},i(t){i||(b(e.$$.fragment,t),b(l.$$.fragment,t),b(a.$$.fragment,t),b(c.$$.fragment,t),i=!0)},o(t){k(e.$$.fragment,t),k(l.$$.fragment,t),k(a.$$.fragment,t),k(c.$$.fragment,t),i=!1},d(t){v(e,t),t&&m(o),v(l,t),t&&m(r),v(a,t),t&&m(s),v(c,t)}}}class oe extends I{constructor(e){super(),M(this,e,null,se,j,{})}}const x=Q(oe,{meta:{title:"Decorators/Blockquote"},stories:{"tpl:default":{storyId:"decorators-blockquote--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Blockquote {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Blockquote>
</div>`,hasArgs:!0},Default:{storyId:"decorators-blockquote--default",name:"Default",template:!1,hasArgs:!1},TextOnly:{storyId:"decorators-blockquote--text-only",name:"Text only",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Blockquote","withComponentDocs"]}),ae=x.meta,re=["Default","TextOnly"],ie=x.stories.Default,ue=x.stories.TextOnly;export{ie as Default,ue as TextOnly,re as __namedExportsOrder,ae as default};
//# sourceMappingURL=Blockquote.stories-fc1bf4cf.js.map
