import{S as N,i as V,s as j,q as W,x as S,w as v,L as m,Z as y,a as T,P as g,u as X,r as Y,v as Z,b as $,t as w,d as h,X as ee,W as te,I as M,F as q,Q as E,Y as se,ab as ae,R as z,K as B,E as O,o as ne,a5 as le,f as oe,p as G,j as k,m as C,k as J,l as x,n as D,y as ie}from"./index-98bb0bde.js";import{b as F,p as re,w as K,M as fe,T as de,S as H}from"./collect-stories-cbdfda5c.js";import{b as ue}from"./utils-bbbf505c.js";import"./_commonjsHelpers-725317a4.js";const Q=`Use tabs to help users navigate between short sections of related content within a single page, showing one section at a time.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/tabs).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Tab, Tabs } from "@onsvisual/svelte-components";
<\/script>

<Tabs>
  <Tab title="Tab one">Contents of tab panel one.</Tab>
  <Tab title="Tab two">Contents of tab panel two.</Tab>
  <Tab title="Tab three">Contents of tab panel three.</Tab>
</Tabs>
\`\`\`
`;function R(s,e,t){const l=s.slice();return l[12]=e[t],l}function U(s){let e,t,l=s[12].dataset.title+"",c,p,f,a,r,o,u,_,d;function i(){return s[10](s[12])}return{c(){e=S("li"),t=S("a"),c=E(l),o=v(),m(t,"href",p="#"+s[12].id),m(t,"class","ons-tab ons-tab--row svelte-vptep1"),m(t,"data-ga","click"),m(t,"data-ga-category","tabs"),m(t,"data-ga-action",f="Show: "+s[12].dataset.title),m(t,"data-ga-label",a="Show: "+s[12].dataset.title),m(t,"aria-selected",r=s[12].id===s[0]?"true":"false"),y(t,"ons-tab--compact",s[1]),y(t,"ons-tab--selected",s[12].id===s[0]),m(e,"id",u="tab_"+s[12].id),m(e,"class","ons-tab__list-item ons-tab__list-item--row"),m(e,"role","presentation")},m(n,b){T(n,e,b),g(e,t),g(t,c),g(e,o),_||(d=se(t,"click",ae(i)),_=!0)},p(n,b){s=n,b&8&&l!==(l=s[12].dataset.title+"")&&z(c,l),b&8&&p!==(p="#"+s[12].id)&&m(t,"href",p),b&8&&f!==(f="Show: "+s[12].dataset.title)&&m(t,"data-ga-action",f),b&8&&a!==(a="Show: "+s[12].dataset.title)&&m(t,"data-ga-label",a),b&9&&r!==(r=s[12].id===s[0]?"true":"false")&&m(t,"aria-selected",r),b&2&&y(t,"ons-tab--compact",s[1]),b&9&&y(t,"ons-tab--selected",s[12].id===s[0]),b&8&&u!==(u="tab_"+s[12].id)&&m(e,"id",u)},d(n){n&&h(e),_=!1,d()}}}function ce(s){let e,t,l,c,p,f,a,r=s[3],o=[];for(let d=0;d<r.length;d+=1)o[d]=U(R(s,r,d));const u=s[9].default,_=W(u,s,s[8],null);return{c(){e=S("section"),t=S("h2"),t.textContent="Contents",l=v(),c=S("div"),p=S("ul");for(let d=0;d<o.length;d+=1)o[d].c();f=v(),_&&_.c(),m(t,"class","ons-tabs__title ons-u-fs-r--b ons-u-mt-no ons-u-vh"),m(p,"class","ons-tabs__list ons-tabs__list--row svelte-vptep1"),m(p,"role","tablist"),m(c,"class","ons-tabs__container svelte-vptep1"),m(e,"class","ons-tabs svelte-vptep1"),y(e,"ons-tabs__border",s[2])},m(d,i){T(d,e,i),g(e,t),g(e,l),g(e,c),g(c,p);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(p,null);g(e,f),_&&_.m(e,null),a=!0},p(d,[i]){if(i&75){r=d[3];let n;for(n=0;n<r.length;n+=1){const b=R(d,r,n);o[n]?o[n].p(b,i):(o[n]=U(b),o[n].c(),o[n].m(p,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=r.length}_&&_.p&&(!a||i&256)&&X(_,u,d,d[8],a?Z(u,d[8],i,null):Y(d[8]),null),(!a||i&4)&&y(e,"ons-tabs__border",d[2])},i(d){a||($(_,d),a=!0)},o(d){w(_,d),a=!1},d(d){d&&h(e),ee(o,d),_&&_.d(d)}}}function pe(s,e,t){let l,c,{$$slots:p={},$$scope:f}=e;const a=te();let{compact:r=!1}=e,{border:o=!1}=e,{selected:u=null}=e;const _=F([]);M(s,_,b=>t(3,c=b)),q("sections",_);const d=F(u);M(s,d,b=>t(7,l=b)),q("selected",d);function i(b){B(d,l=b,l),[...c].forEach(I=>I.className=I.id===b?"ons-tabs__panel":"ons-tabs__panel ons-tabs__panel--hidden"),a("change",{id:b})}const n=b=>i(b.id);return s.$$set=b=>{"compact"in b&&t(1,r=b.compact),"border"in b&&t(2,o=b.border),"selected"in b&&t(0,u=b.selected),"$$scope"in b&&t(8,f=b.$$scope)},s.$$.update=()=>{s.$$.dirty&129&&u!==l&&t(0,u=l)},[u,r,o,c,_,d,i,l,f,p,n]}class P extends N{constructor(e){super(),V(this,e,pe,ce,j,{compact:1,border:2,selected:0})}}P.__docgen={version:3,name:"Tabs.svelte",data:[{keywords:[],visibility:"public",description:"Make tabs smaller/more compact",name:"compact",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Include a border around the tab panel",name:"border",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string|null}"}],visibility:"public",description:"The ID of selected tab (for binding)",name:"selected",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"string|null",type:[{kind:"type",text:"string",type:"string"},{kind:"type",text:"null",type:"null"}]},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function be(s){let e,t,l,c,p,f;const a=s[8].default,r=W(a,s,s[7],null);return{c(){e=S("section"),t=S("h2"),l=E(s[0]),p=v(),r&&r.c(),m(t,"id",c=s[2]+"-content-title"),m(t,"class","ons-u-vh"),y(t,"ons-u-vh",s[1]),m(e,"id",s[2]),m(e,"data-title",s[0]),m(e,"data-type","Tab"),m(e,"class","ons-tabs__panel"),y(e,"ons-tabs__panel--hidden",s[4]!==s[2])},m(o,u){T(o,e,u),g(e,t),g(t,l),g(e,p),r&&r.m(e,null),s[9](e),f=!0},p(o,[u]){(!f||u&1)&&z(l,o[0]),(!f||u&4&&c!==(c=o[2]+"-content-title"))&&m(t,"id",c),(!f||u&2)&&y(t,"ons-u-vh",o[1]),r&&r.p&&(!f||u&128)&&X(r,a,o,o[7],f?Z(a,o[7],u,null):Y(o[7]),null),(!f||u&4)&&m(e,"id",o[2]),(!f||u&1)&&m(e,"data-title",o[0]),(!f||u&20)&&y(e,"ons-tabs__panel--hidden",o[4]!==o[2])},i(o){f||($(r,o),f=!0)},o(o){w(r,o),f=!1},d(o){o&&h(e),r&&r.d(o),s[9](null)}}}function _e(s,e,t){let l,c,{$$slots:p={},$$scope:f}=e,{title:a="Tab title"}=e,{hideTitle:r=!1}=e,{id:o=ue(a)}=e;const u=O("sections");M(s,u,n=>t(10,l=n));const _=O("selected");M(s,_,n=>t(4,c=n));let d;ne(()=>{var n;u&&(B(u,l=[...d.parentElement.getElementsByTagName("section")].filter(b=>b.dataset.type==="Tab"),l),c==null&&B(_,c=(n=l[0])==null?void 0:n.id,c))}),le(()=>{u&&(B(u,l=l.filter(n=>n.id!==o),l),c===o&&B(_,c=l.length>0?l[0].id:null,c))});function i(n){oe[n?"unshift":"push"](()=>{d=n,t(3,d)})}return s.$$set=n=>{"title"in n&&t(0,a=n.title),"hideTitle"in n&&t(1,r=n.hideTitle),"id"in n&&t(2,o=n.id),"$$scope"in n&&t(7,f=n.$$scope)},[a,r,o,d,c,u,_,f,p,i]}class L extends N{constructor(e){super(),V(this,e,_e,be,j,{title:0,hideTitle:1,id:2})}}function me(s){let e;return{c(){e=E("Contents of tab panel one.")},m(t,l){T(t,e,l)},d(t){t&&h(e)}}}function Te(s){let e;return{c(){e=E("Contents of tab panel two.")},m(t,l){T(t,e,l)},d(t){t&&h(e)}}}function he(s){let e;return{c(){e=E("Contents of tab panel three.")},m(t,l){T(t,e,l)},d(t){t&&h(e)}}}function ge(s){let e,t,l,c,p,f;return e=new L({props:{title:"Tab one",hideTitle:s[0].hideTitle,$$slots:{default:[me]},$$scope:{ctx:s}}}),l=new L({props:{title:"Tab two",hideTitle:s[0].hideTitle,$$slots:{default:[Te]},$$scope:{ctx:s}}}),p=new L({props:{title:"Tab three",hideTitle:s[0].hideTitle,$$slots:{default:[he]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=v(),k(l.$$.fragment),c=v(),k(p.$$.fragment)},m(a,r){C(e,a,r),T(a,t,r),C(l,a,r),T(a,c,r),C(p,a,r),f=!0},p(a,r){const o={};r&1&&(o.hideTitle=a[0].hideTitle),r&2&&(o.$$scope={dirty:r,ctx:a}),e.$set(o);const u={};r&1&&(u.hideTitle=a[0].hideTitle),r&2&&(u.$$scope={dirty:r,ctx:a}),l.$set(u);const _={};r&1&&(_.hideTitle=a[0].hideTitle),r&2&&(_.$$scope={dirty:r,ctx:a}),p.$set(_)},i(a){f||($(e.$$.fragment,a),$(l.$$.fragment,a),$(p.$$.fragment,a),f=!0)},o(a){w(e.$$.fragment,a),w(l.$$.fragment,a),w(p.$$.fragment,a),f=!1},d(a){D(e,a),a&&h(t),D(l,a),a&&h(c),D(p,a)}}}function $e(s){let e,t,l;const c=[s[0]];let p={$$slots:{default:[ge]},$$scope:{ctx:s}};for(let f=0;f<c.length;f+=1)p=G(p,c[f]);return t=new P({props:p}),{c(){e=S("div"),k(t.$$.fragment),ie(e,"padding","12px")},m(f,a){T(f,e,a),C(t,e,null),l=!0},p(f,a){const r=a&1?J(c,[x(f[0])]):{};a&3&&(r.$$scope={dirty:a,ctx:f}),t.$set(r)},i(f){l||($(t.$$.fragment,f),l=!0)},o(f){w(t.$$.fragment,f),l=!1},d(f){f&&h(e),D(t)}}}function we(s){let e,t,l,c,p,f,a,r,o,u;const _=[{title:"Layout/Tabs"},{component:P},{argTypes:{}},K(Q)];let d={};for(let i=0;i<_.length;i+=1)d=G(d,_[i]);return e=new fe({props:d}),l=new de({props:{$$slots:{default:[$e,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:s}}}),p=new H({props:{name:"Default",args:{}}}),a=new H({props:{name:"Tab panel border",args:{border:!0}}}),o=new H({props:{name:"Compact, hidden titles",args:{compact:!0,hideTitle:!0}}}),{c(){k(e.$$.fragment),t=v(),k(l.$$.fragment),c=v(),k(p.$$.fragment),f=v(),k(a.$$.fragment),r=v(),k(o.$$.fragment)},m(i,n){C(e,i,n),T(i,t,n),C(l,i,n),T(i,c,n),C(p,i,n),T(i,f,n),C(a,i,n),T(i,r,n),C(o,i,n),u=!0},p(i,[n]){const b=n&0?J(_,[_[0],n&0&&{component:P},_[2],n&0&&x(K(Q))]):{};e.$set(b);const I={};n&3&&(I.$$scope={dirty:n,ctx:i}),l.$set(I)},i(i){u||($(e.$$.fragment,i),$(l.$$.fragment,i),$(p.$$.fragment,i),$(a.$$.fragment,i),$(o.$$.fragment,i),u=!0)},o(i){w(e.$$.fragment,i),w(l.$$.fragment,i),w(p.$$.fragment,i),w(a.$$.fragment,i),w(o.$$.fragment,i),u=!1},d(i){D(e,i),i&&h(t),D(l,i),i&&h(c),D(p,i),i&&h(f),D(a,i),i&&h(r),D(o,i)}}}class ve extends N{constructor(e){super(),V(this,e,null,we,j,{})}}const A=re(ve,{meta:{title:"Layout/Tabs"},stories:{"tpl:default":{storyId:"layout-tabs--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Tabs {...args}>
    <Tab title="Tab one" hideTitle="{args.hideTitle}">Contents of tab panel one.</Tab>
    <Tab title="Tab two" hideTitle="{args.hideTitle}">Contents of tab panel two.</Tab>
    <Tab title="Tab three" hideTitle="{args.hideTitle}">Contents of tab panel three.</Tab>
  </Tabs>
</div>`,hasArgs:!0},Default:{storyId:"layout-tabs--default",name:"Default",template:!1,hasArgs:!1},TabPanelBorder:{storyId:"layout-tabs--tab-panel-border",name:"Tab panel border",template:!1,hasArgs:!1},CompactHiddenTitles:{storyId:"layout-tabs--compact-hidden-titles",name:"Compact, hidden titles",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Tabs","Tab","withComponentDocs"]}),Se=A.meta,Ie=["Default","TabPanelBorder","CompactHiddenTitles"],Be=A.stories.Default,Ee=A.stories.TabPanelBorder,Me=A.stories.CompactHiddenTitles;export{Me as CompactHiddenTitles,Be as Default,Ee as TabPanelBorder,Ie as __namedExportsOrder,Se as default};
//# sourceMappingURL=Tabs.stories-7be13311.js.map
