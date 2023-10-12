import{S as V,i as W,s as B,q as K,x as w,w as T,I as J,C as y,U as E,a as $,H as v,J as U,u as P,r as Q,v as R,b as h,t as N,d as b,p as z,j as I,m as D,k as F,l as G,n as S,y as X,e as Y,a2 as Z}from"./index-4c87ff1b.js";import{p as x,w as j,M as ee,T as te,S as O}from"./collect-stories-1e766e4e.js";const q=`Container for displaying notices on a page.

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
`;function H(i){let t;return{c(){t=w("div"),t.textContent="!",y(t,"class","ons-panel__icon"),y(t,"aria-hidden","true")},m(n,s){$(n,t,s)},d(n){n&&b(t)}}}function L(i){let t,n,s;return{c(){t=w("p"),n=w("strong"),s=J(i[0])},m(a,l){$(a,t,l),v(t,n),v(n,s)},p(a,l){l&1&&U(s,a[0])},d(a){a&&b(t)}}}function ne(i){let t,n,s,a,l=i[1]==="warning"?"Warning:":"Important information:",r,f,u,p,k,_,m,e=i[2]&&H(),o=i[0]&&L(i);const A=i[5].default,d=K(A,i,i[4],null);return{c(){t=w("div"),n=w("div"),e&&e.c(),s=T(),a=w("span"),r=J(l),f=T(),u=w("div"),p=w("div"),o&&o.c(),k=T(),d&&d.c(),y(a,"class","ons-panel__assistive-text ons-u-vh"),y(p,"class","default-line-height"),E(p,"ons-u-fs-r",i[1]!=="warning"),y(u,"class","ons-panel__body"),y(n,"class","ons-u-bg--tr"),E(n,"ons-panel--warn",i[2]&&i[1]!=="warning"),y(t,"class",_="ons-panel "+(i[1]==="warning"?"ons-panel--warn":"ons-panel--info")+" ons-panel--no-title svelte-1l6efpg"),y(t,"style",i[3])},m(c,g){$(c,t,g),v(t,n),e&&e.m(n,null),v(n,s),v(n,a),v(a,r),v(n,f),v(n,u),v(u,p),o&&o.m(p,null),v(p,k),d&&d.m(p,null),m=!0},p(c,[g]){c[2]?e||(e=H(),e.c(),e.m(n,s)):e&&(e.d(1),e=null),(!m||g&2)&&l!==(l=c[1]==="warning"?"Warning:":"Important information:")&&U(r,l),c[0]?o?o.p(c,g):(o=L(c),o.c(),o.m(p,k)):o&&(o.d(1),o=null),d&&d.p&&(!m||g&16)&&P(d,A,c,c[4],m?R(A,c[4],g,null):Q(c[4]),null),(!m||g&2)&&E(p,"ons-u-fs-r",c[1]!=="warning"),(!m||g&6)&&E(n,"ons-panel--warn",c[2]&&c[1]!=="warning"),(!m||g&2&&_!==(_="ons-panel "+(c[1]==="warning"?"ons-panel--warn":"ons-panel--info")+" ons-panel--no-title svelte-1l6efpg"))&&y(t,"class",_),(!m||g&8)&&y(t,"style",c[3])},i(c){m||(h(d,c),m=!0)},o(c){N(d,c),m=!1},d(c){c&&b(t),e&&e.d(),o&&o.d(),d&&d.d(c)}}}function se(i,t,n){let s,{$$slots:a={},$$scope:l}=t,{title:r=null}=t,{mode:f="info"}=t,{important:u=f==="warning"}=t;return i.$$set=p=>{"title"in p&&n(0,r=p.title),"mode"in p&&n(1,f=p.mode),"important"in p&&n(2,u=p.important),"$$scope"in p&&n(4,l=p.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&n(3,s=f==="success"?"background: var(--ons-color-success-tint); border-color: var(--ons-color-success);":f==="pending"?"background: var(--ons-color-pending-tint); border-color: var(--ons-color-pending);":f==="error"?"background: var(--ons-color-errors-tint); border-color: var(--ons-color-errors);":null)},[r,f,u,s,l,a]}class C extends V{constructor(t){super(),W(this,t,se,ne,B,{title:0,mode:1,important:2})}}C.__docgen={version:3,name:"Notice.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Notice title",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"info"|"success"|"pending"|"error"|"warning"}'}],visibility:"public",description:"Sets the mode/colour of the notice",name:"mode",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"info"|"success"|"pending"|"error"|"warning"',type:[{kind:"type",text:'"info"',type:'"info"'},{kind:"type",text:'"success"',type:'"success"'},{kind:"type",text:'"pending"',type:'"pending"'},{kind:"type",text:'"error"',type:'"error"'},{kind:"type",text:'"warning"',type:'"warning"'}]},defaultValue:"info"},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Adds an exclamation mark icon",name:"important",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function oe(i){let t,n=i[0].content+"",s;return{c(){t=new Z(!1),s=Y(),t.a=s},m(a,l){t.m(n,a,l),$(a,s,l)},p(a,l){l&1&&n!==(n=a[0].content+"")&&t.p(n)},d(a){a&&b(s),a&&t.d()}}}function ie(i){let t,n,s;const a=[i[0]];let l={$$slots:{default:[oe]},$$scope:{ctx:i}};for(let r=0;r<a.length;r+=1)l=z(l,a[r]);return n=new C({props:l}),{c(){t=w("div"),I(n.$$.fragment),X(t,"padding","12px")},m(r,f){$(r,t,f),D(n,t,null),s=!0},p(r,f){const u=f&1?F(a,[G(r[0])]):{};f&3&&(u.$$scope={dirty:f,ctx:r}),n.$set(u)},i(r){s||(h(n.$$.fragment,r),s=!0)},o(r){N(n.$$.fragment,r),s=!1},d(r){r&&b(t),S(n)}}}function ae(i){let t,n,s,a,l,r,f,u,p,k;const _=[{title:"Layout/Notice"},{component:C},{argTypes:{mode:{options:["info","success","pending","error","warning"],control:{type:"select"}}}},j(q)];let m={};for(let e=0;e<_.length;e+=1)m=z(m,_[e]);return t=new ee({props:m}),s=new te({props:{$$slots:{default:[ie,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:i}}}),l=new O({props:{name:"Default",args:{content:"This is the text of the notice."}}}),f=new O({props:{name:"Title and icon",args:{title:"Important notice",important:!0,content:"This is the text of the notice."}}}),p=new O({props:{name:"Error style",args:{title:"Important notice",important:!0,mode:"error",content:"This is the text of the notice."}}}),{c(){I(t.$$.fragment),n=T(),I(s.$$.fragment),a=T(),I(l.$$.fragment),r=T(),I(f.$$.fragment),u=T(),I(p.$$.fragment)},m(e,o){D(t,e,o),$(e,n,o),D(s,e,o),$(e,a,o),D(l,e,o),$(e,r,o),D(f,e,o),$(e,u,o),D(p,e,o),k=!0},p(e,[o]){const A=o&0?F(_,[_[0],o&0&&{component:C},_[2],o&0&&G(j(q))]):{};t.$set(A);const d={};o&3&&(d.$$scope={dirty:o,ctx:e}),s.$set(d)},i(e){k||(h(t.$$.fragment,e),h(s.$$.fragment,e),h(l.$$.fragment,e),h(f.$$.fragment,e),h(p.$$.fragment,e),k=!0)},o(e){N(t.$$.fragment,e),N(s.$$.fragment,e),N(l.$$.fragment,e),N(f.$$.fragment,e),N(p.$$.fragment,e),k=!1},d(e){S(t,e),e&&b(n),S(s,e),e&&b(a),S(l,e),e&&b(r),S(f,e),e&&b(u),S(p,e)}}}class le extends V{constructor(t){super(),W(this,t,null,ae,B,{})}}const M=x(le,{meta:{title:"Layout/Notice"},stories:{"tpl:default":{storyId:"layout-notice--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Notice {...args}>
    {@html args.content}
  </Notice>
</div>`,hasArgs:!0},Default:{storyId:"layout-notice--default",name:"Default",template:!1,hasArgs:!1},TitleAndIcon:{storyId:"layout-notice--title-and-icon",name:"Title and icon",template:!1,hasArgs:!1},ErrorStyle:{storyId:"layout-notice--error-style",name:"Error style",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Notice","withComponentDocs"]}),ce=M.meta,fe=["Default","TitleAndIcon","ErrorStyle"],me=M.stories.Default,ue=M.stories.TitleAndIcon,de=M.stories.ErrorStyle;export{me as Default,de as ErrorStyle,ue as TitleAndIcon,fe as __namedExportsOrder,ce as default};
//# sourceMappingURL=Notice.stories-2b698b06.js.map