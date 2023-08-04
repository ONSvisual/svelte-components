import{S as j,i as q,s as H,q as J,x as $,w as N,C as g,U as C,a as b,H as v,u as U,r as F,v as G,b as h,t as w,d as k,I as K,J as P,p as L,j as T,m as I,k as z,l as B,n as D,y as Q,e as R,a2 as W}from"./index-01cfd182.js";import{p as X,w as E,M as Y,T as Z,S as x}from"./collect-stories-037cf284.js";const M=`Container for displaying notices on a page.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/panel).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Notice } from "@onsvisual/svelte-components";
<\/script>

<Notice>
  This is the text of the notice.
</Notice>
\`\`\`
`;function O(r){let e;return{c(){e=$("div"),e.textContent="!",g(e,"class","ons-panel__icon"),g(e,"aria-hidden","true")},m(n,s){b(n,e,s)},d(n){n&&k(e)}}}function V(r){let e,n,s;return{c(){e=$("p"),n=$("strong"),s=K(r[0])},m(o,a){b(o,e,a),v(e,n),v(n,s)},p(o,a){a&1&&P(s,o[0])},d(o){o&&k(e)}}}function ee(r){let e,n,s,o,a,i,c,d,p,_,m=r[1]&&O(),u=r[0]&&V(r);const t=r[5].default,l=J(t,r,r[4],null);return{c(){e=$("div"),n=$("div"),m&&m.c(),s=N(),o=$("span"),o.textContent="Important information:",a=N(),i=$("div"),c=$("div"),u&&u.c(),d=N(),p=$("p"),l&&l.c(),g(o,"class","ons-panel__assistive-text ons-u-vh"),g(p,"class","ons-u-mb-no"),g(c,"class","ons-u-fs-r default-line-height"),g(i,"class","ons-panel__body"),g(n,"class","ons-u-bg--tr"),C(n,"ons-panel--warn",r[1]),g(e,"class","ons-panel ons-panel--info ons-panel--no-title ons-u-mt-m ons-u-mb-l svelte-g4zlbx"),g(e,"style",r[2])},m(f,y){b(f,e,y),v(e,n),m&&m.m(n,null),v(n,s),v(n,o),v(n,a),v(n,i),v(i,c),u&&u.m(c,null),v(c,d),v(c,p),l&&l.m(p,null),_=!0},p(f,[y]){f[1]?m||(m=O(),m.c(),m.m(n,s)):m&&(m.d(1),m=null),f[0]?u?u.p(f,y):(u=V(f),u.c(),u.m(c,d)):u&&(u.d(1),u=null),l&&l.p&&(!_||y&16)&&U(l,t,f,f[4],_?G(t,f[4],y,null):F(f[4]),null),(!_||y&2)&&C(n,"ons-panel--warn",f[1]),(!_||y&4)&&g(e,"style",f[2])},i(f){_||(h(l,f),_=!0)},o(f){w(l,f),_=!1},d(f){f&&k(e),m&&m.d(),u&&u.d(),l&&l.d(f)}}}function te(r,e,n){let s,{$$slots:o={},$$scope:a}=e,{title:i=null}=e,{important:c=!1}=e,{mode:d="info"}=e;return r.$$set=p=>{"title"in p&&n(0,i=p.title),"important"in p&&n(1,c=p.important),"mode"in p&&n(3,d=p.mode),"$$scope"in p&&n(4,a=p.$$scope)},r.$$.update=()=>{r.$$.dirty&8&&n(2,s=d==="success"?"background: var(--ons-color-success-tint); border-color: var(--ons-color-success);":d==="pending"?"background: var(--ons-color-pending-tint); border-color: var(--ons-color-pending);":d==="error"?"background: var(--ons-color-errors-tint); border-color: var(--ons-color-errors);":null)},[i,c,s,d,a,o]}class S extends j{constructor(e){super(),q(this,e,te,ee,H,{title:0,important:1,mode:3})}}S.__docgen={version:3,name:"Notice.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Notice title",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Adds an exclamation mark icon",name:"important",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{"info"|"success"|"pending"|"error"}'}],visibility:"public",description:"Sets the mode/colour of the notice",name:"mode",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"info"|"success"|"pending"|"error"',type:[{kind:"type",text:'"info"',type:'"info"'},{kind:"type",text:'"success"',type:'"success"'},{kind:"type",text:'"pending"',type:'"pending"'},{kind:"type",text:'"error"',type:'"error"'}]},defaultValue:"info"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ne(r){let e,n=r[0].content+"",s;return{c(){e=new W(!1),s=R(),e.a=s},m(o,a){e.m(n,o,a),b(o,s,a)},p(o,a){a&1&&n!==(n=o[0].content+"")&&e.p(n)},d(o){o&&k(s),o&&e.d()}}}function se(r){let e,n,s;const o=[r[0]];let a={$$slots:{default:[ne]},$$scope:{ctx:r}};for(let i=0;i<o.length;i+=1)a=L(a,o[i]);return n=new S({props:a}),{c(){e=$("div"),T(n.$$.fragment),Q(e,"padding","12px")},m(i,c){b(i,e,c),I(n,e,null),s=!0},p(i,c){const d=c&1?z(o,[B(i[0])]):{};c&3&&(d.$$scope={dirty:c,ctx:i}),n.$set(d)},i(i){s||(h(n.$$.fragment,i),s=!0)},o(i){w(n.$$.fragment,i),s=!1},d(i){i&&k(e),D(n)}}}function oe(r){let e,n,s,o,a,i,c,d,p,_;const m=[{title:"Layout/Notice"},{component:S},{argTypes:{}},E(M)];let u={};for(let t=0;t<m.length;t+=1)u=L(u,m[t]);return e=new Y({props:u}),s=new Z({props:{$$slots:{default:[se,({args:t})=>({0:t}),({args:t})=>t?1:0]},$$scope:{ctx:r}}}),a=new x({props:{name:"Default",args:{content:"This is the text of the notice."}}}),c=new x({props:{name:"Title and icon",args:{title:"Important notice",important:!0,content:"This is the text of the notice."}}}),p=new x({props:{name:"Error style",args:{title:"Important notice",important:!0,mode:"error",content:"This is the text of the notice."}}}),{c(){T(e.$$.fragment),n=N(),T(s.$$.fragment),o=N(),T(a.$$.fragment),i=N(),T(c.$$.fragment),d=N(),T(p.$$.fragment)},m(t,l){I(e,t,l),b(t,n,l),I(s,t,l),b(t,o,l),I(a,t,l),b(t,i,l),I(c,t,l),b(t,d,l),I(p,t,l),_=!0},p(t,[l]){const f=l&0?z(m,[m[0],l&0&&{component:S},m[2],l&0&&B(E(M))]):{};e.$set(f);const y={};l&3&&(y.$$scope={dirty:l,ctx:t}),s.$set(y)},i(t){_||(h(e.$$.fragment,t),h(s.$$.fragment,t),h(a.$$.fragment,t),h(c.$$.fragment,t),h(p.$$.fragment,t),_=!0)},o(t){w(e.$$.fragment,t),w(s.$$.fragment,t),w(a.$$.fragment,t),w(c.$$.fragment,t),w(p.$$.fragment,t),_=!1},d(t){D(e,t),t&&k(n),D(s,t),t&&k(o),D(a,t),t&&k(i),D(c,t),t&&k(d),D(p,t)}}}class le extends j{constructor(e){super(),q(this,e,null,oe,H,{})}}const A=X(le,{meta:{title:"Layout/Notice"},stories:{"tpl:default":{storyId:"layout-notice--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Notice {...args}>
    {@html args.content}
  </Notice>
</div>`,hasArgs:!0},Default:{storyId:"layout-notice--default",name:"Default",template:!1,hasArgs:!1},TitleAndIcon:{storyId:"layout-notice--title-and-icon",name:"Title and icon",template:!1,hasArgs:!1},ErrorStyle:{storyId:"layout-notice--error-style",name:"Error style",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Notice","withComponentDocs"]}),re=A.meta,ce=["Default","TitleAndIcon","ErrorStyle"],fe=A.stories.Default,pe=A.stories.TitleAndIcon,me=A.stories.ErrorStyle;export{fe as Default,me as ErrorStyle,pe as TitleAndIcon,ce as __namedExportsOrder,re as default};
//# sourceMappingURL=Notice.stories-104e6d83.js.map