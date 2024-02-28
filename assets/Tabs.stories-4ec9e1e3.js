import{S as E,i as L,s as j,q as X,x as S,w,L as m,Z as y,a as T,P as g,u as Y,r as Z,v as z,b as $,t as v,d as h,X as ee,I as H,F as N,Q as I,Y as te,ab as se,R as G,K as M,E as O,o as ae,a9 as ne,f as le,p as J,j as k,m as C,k as W,l as x,n as D,y as oe}from"./index-9473b494.js";import{a as F,p as ie,w as K,M as re,T as fe,S as V}from"./collect-stories-458d6889.js";import{b as de}from"./utils-af21360b.js";const Q=`Use tabs to help users navigate between short sections of related content within a single page, showing one section at a time.

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
`;function R(s,e,t){const i=s.slice();return i[10]=e[t],i}function U(s){let e,t,i=s[10].title+"",p,c,f,n,r,o,u,b,d;function a(){return s[9](s[10])}return{c(){e=S("li"),t=S("a"),p=I(i),o=w(),m(t,"href",c="#"+s[10].id),m(t,"class","ons-tab ons-tab--row svelte-vptep1"),m(t,"data-ga","click"),m(t,"data-ga-category","tabs"),m(t,"data-ga-action",f="Show: "+s[10].title),m(t,"data-ga-label",n="Show: "+s[10].title),m(t,"aria-selected",r=s[10].id===s[3]?"true":"false"),y(t,"ons-tab--compact",s[0]),y(t,"ons-tab--selected",s[10].id===s[5]),m(e,"id",u="tab_"+s[10].id),m(e,"class","ons-tab__list-item ons-tab__list-item--row"),m(e,"role","presentation")},m(l,_){T(l,e,_),g(e,t),g(t,p),g(e,o),b||(d=te(t,"click",se(a)),b=!0)},p(l,_){s=l,_&4&&i!==(i=s[10].title+"")&&G(p,i),_&4&&c!==(c="#"+s[10].id)&&m(t,"href",c),_&4&&f!==(f="Show: "+s[10].title)&&m(t,"data-ga-action",f),_&4&&n!==(n="Show: "+s[10].title)&&m(t,"data-ga-label",n),_&12&&r!==(r=s[10].id===s[3]?"true":"false")&&m(t,"aria-selected",r),_&1&&y(t,"ons-tab--compact",s[0]),_&36&&y(t,"ons-tab--selected",s[10].id===s[5]),_&4&&u!==(u="tab_"+s[10].id)&&m(e,"id",u)},d(l){l&&h(e),b=!1,d()}}}function ue(s){let e,t,i,p,c,f,n,r=s[2],o=[];for(let d=0;d<r.length;d+=1)o[d]=U(R(s,r,d));const u=s[8].default,b=X(u,s,s[7],null);return{c(){e=S("section"),t=S("h2"),t.textContent="Contents",i=w(),p=S("div"),c=S("ul");for(let d=0;d<o.length;d+=1)o[d].c();f=w(),b&&b.c(),m(t,"class","ons-tabs__title ons-u-fs-r--b ons-u-mt-no ons-u-vh"),m(c,"class","ons-tabs__list ons-tabs__list--row svelte-vptep1"),m(c,"role","tablist"),m(p,"class","ons-tabs__container svelte-vptep1"),m(e,"class","ons-tabs svelte-vptep1"),y(e,"ons-tabs__border",s[1])},m(d,a){T(d,e,a),g(e,t),g(e,i),g(e,p),g(p,c);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(c,null);g(e,f),b&&b.m(e,null),n=!0},p(d,[a]){if(a&109){r=d[2];let l;for(l=0;l<r.length;l+=1){const _=R(d,r,l);o[l]?o[l].p(_,a):(o[l]=U(_),o[l].c(),o[l].m(c,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}b&&b.p&&(!n||a&128)&&Y(b,u,d,d[7],n?z(u,d[7],a,null):Z(d[7]),null),(!n||a&2)&&y(e,"ons-tabs__border",d[1])},i(d){n||($(b,d),n=!0)},o(d){v(b,d),n=!1},d(d){d&&h(e),ee(o,d),b&&b.d(d)}}}function pe(s,e,t){let i,p,{$$slots:c={},$$scope:f}=e,{compact:n=!1}=e,{border:r=!1}=e;const o=F([]);H(s,o,a=>t(2,i=a)),N("sections",o);const u=F(null);H(s,u,a=>t(3,p=a)),N("selected",u);function b(a){M(u,p=a,p),[...i].forEach(l=>l.el.className=l.id===a?"ons-tabs__panel":"ons-tabs__panel ons-tabs__panel--hidden")}const d=a=>b(a.id);return s.$$set=a=>{"compact"in a&&t(0,n=a.compact),"border"in a&&t(1,r=a.border),"$$scope"in a&&t(7,f=a.$$scope)},[n,r,i,p,o,u,b,f,c,d]}class P extends E{constructor(e){super(),L(this,e,pe,ue,j,{compact:0,border:1})}}P.__docgen={version:3,name:"Tabs.svelte",data:[{keywords:[],visibility:"public",description:"Make tabs smaller/more compact",name:"compact",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Include a border around the tab panel",name:"border",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ce(s){let e,t,i,p,c,f;const n=s[8].default,r=X(n,s,s[7],null);return{c(){e=S("section"),t=S("h2"),i=I(s[0]),c=w(),r&&r.c(),m(t,"id",p=s[2]+"-content-title"),m(t,"class","ons-u-vh"),y(t,"ons-u-vh",s[1]),m(e,"id",s[2]),m(e,"class","ons-tabs__panel"),y(e,"ons-tabs__panel--hidden",s[4]!==s[2])},m(o,u){T(o,e,u),g(e,t),g(t,i),g(e,c),r&&r.m(e,null),s[9](e),f=!0},p(o,[u]){(!f||u&1)&&G(i,o[0]),(!f||u&4&&p!==(p=o[2]+"-content-title"))&&m(t,"id",p),(!f||u&2)&&y(t,"ons-u-vh",o[1]),r&&r.p&&(!f||u&128)&&Y(r,n,o,o[7],f?z(n,o[7],u,null):Z(o[7]),null),(!f||u&4)&&m(e,"id",o[2]),(!f||u&20)&&y(e,"ons-tabs__panel--hidden",o[4]!==o[2])},i(o){f||($(r,o),f=!0)},o(o){v(r,o),f=!1},d(o){o&&h(e),r&&r.d(o),s[9](null)}}}function be(s,e,t){let i,p,{$$slots:c={},$$scope:f}=e,{title:n="Tab title"}=e,{hideTitle:r=!1}=e,{id:o=de(n)}=e;const u=O("sections");H(s,u,l=>t(10,i=l));const b=O("selected");H(s,b,l=>t(4,p=l));let d;ae(()=>{u&&(!i[0]&&(p||p===null)&&M(b,p=o,p),M(u,i=[...i,{title:n,id:o,el:d}],i))}),ne(()=>{u&&M(u,i=i.filter(l=>l.id!==o),i)});function a(l){le[l?"unshift":"push"](()=>{d=l,t(3,d)})}return s.$$set=l=>{"title"in l&&t(0,n=l.title),"hideTitle"in l&&t(1,r=l.hideTitle),"id"in l&&t(2,o=l.id),"$$scope"in l&&t(7,f=l.$$scope)},[n,r,o,d,p,u,b,f,c,a]}class B extends E{constructor(e){super(),L(this,e,be,ce,j,{title:0,hideTitle:1,id:2})}}B.__docgen={version:3,name:"Tab.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Title of tab/panel",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Tab title"},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Hide the title within the panel",name:"hideTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"ID/slug for tab (auto-generated from title if not set)",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function me(s){let e;return{c(){e=I("Contents of tab panel one.")},m(t,i){T(t,e,i)},d(t){t&&h(e)}}}function _e(s){let e;return{c(){e=I("Contents of tab panel two.")},m(t,i){T(t,e,i)},d(t){t&&h(e)}}}function Te(s){let e;return{c(){e=I("Contents of tab panel three.")},m(t,i){T(t,e,i)},d(t){t&&h(e)}}}function he(s){let e,t,i,p,c,f;return e=new B({props:{title:"Tab one",hideTitle:s[0].hideTitle,$$slots:{default:[me]},$$scope:{ctx:s}}}),i=new B({props:{title:"Tab two",hideTitle:s[0].hideTitle,$$slots:{default:[_e]},$$scope:{ctx:s}}}),c=new B({props:{title:"Tab three",hideTitle:s[0].hideTitle,$$slots:{default:[Te]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=w(),k(i.$$.fragment),p=w(),k(c.$$.fragment)},m(n,r){C(e,n,r),T(n,t,r),C(i,n,r),T(n,p,r),C(c,n,r),f=!0},p(n,r){const o={};r&1&&(o.hideTitle=n[0].hideTitle),r&2&&(o.$$scope={dirty:r,ctx:n}),e.$set(o);const u={};r&1&&(u.hideTitle=n[0].hideTitle),r&2&&(u.$$scope={dirty:r,ctx:n}),i.$set(u);const b={};r&1&&(b.hideTitle=n[0].hideTitle),r&2&&(b.$$scope={dirty:r,ctx:n}),c.$set(b)},i(n){f||($(e.$$.fragment,n),$(i.$$.fragment,n),$(c.$$.fragment,n),f=!0)},o(n){v(e.$$.fragment,n),v(i.$$.fragment,n),v(c.$$.fragment,n),f=!1},d(n){D(e,n),n&&h(t),D(i,n),n&&h(p),D(c,n)}}}function ge(s){let e,t,i;const p=[s[0]];let c={$$slots:{default:[he]},$$scope:{ctx:s}};for(let f=0;f<p.length;f+=1)c=J(c,p[f]);return t=new P({props:c}),{c(){e=S("div"),k(t.$$.fragment),oe(e,"padding","12px")},m(f,n){T(f,e,n),C(t,e,null),i=!0},p(f,n){const r=n&1?W(p,[x(f[0])]):{};n&3&&(r.$$scope={dirty:n,ctx:f}),t.$set(r)},i(f){i||($(t.$$.fragment,f),i=!0)},o(f){v(t.$$.fragment,f),i=!1},d(f){f&&h(e),D(t)}}}function $e(s){let e,t,i,p,c,f,n,r,o,u;const b=[{title:"Layout/Tabs"},{component:P},{argTypes:{}},K(Q)];let d={};for(let a=0;a<b.length;a+=1)d=J(d,b[a]);return e=new re({props:d}),i=new fe({props:{$$slots:{default:[ge,({args:a})=>({0:a}),({args:a})=>a?1:0]},$$scope:{ctx:s}}}),c=new V({props:{name:"Default",args:{}}}),n=new V({props:{name:"Tab panel border",args:{border:!0}}}),o=new V({props:{name:"Compact, hidden titles",args:{compact:!0,hideTitle:!0}}}),{c(){k(e.$$.fragment),t=w(),k(i.$$.fragment),p=w(),k(c.$$.fragment),f=w(),k(n.$$.fragment),r=w(),k(o.$$.fragment)},m(a,l){C(e,a,l),T(a,t,l),C(i,a,l),T(a,p,l),C(c,a,l),T(a,f,l),C(n,a,l),T(a,r,l),C(o,a,l),u=!0},p(a,[l]){const _=l&0?W(b,[b[0],l&0&&{component:P},b[2],l&0&&x(K(Q))]):{};e.$set(_);const q={};l&3&&(q.$$scope={dirty:l,ctx:a}),i.$set(q)},i(a){u||($(e.$$.fragment,a),$(i.$$.fragment,a),$(c.$$.fragment,a),$(n.$$.fragment,a),$(o.$$.fragment,a),u=!0)},o(a){v(e.$$.fragment,a),v(i.$$.fragment,a),v(c.$$.fragment,a),v(n.$$.fragment,a),v(o.$$.fragment,a),u=!1},d(a){D(e,a),a&&h(t),D(i,a),a&&h(p),D(c,a),a&&h(f),D(n,a),a&&h(r),D(o,a)}}}class ve extends E{constructor(e){super(),L(this,e,null,$e,j,{})}}const A=ie(ve,{meta:{title:"Layout/Tabs"},stories:{"tpl:default":{storyId:"layout-tabs--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Tabs {...args}>
    <Tab title="Tab one" hideTitle="{args.hideTitle}">Contents of tab panel one.</Tab>
    <Tab title="Tab two" hideTitle="{args.hideTitle}">Contents of tab panel two.</Tab>
    <Tab title="Tab three" hideTitle="{args.hideTitle}">Contents of tab panel three.</Tab>
  </Tabs>
</div>`,hasArgs:!0},Default:{storyId:"layout-tabs--default",name:"Default",template:!1,hasArgs:!1},TabPanelBorder:{storyId:"layout-tabs--tab-panel-border",name:"Tab panel border",template:!1,hasArgs:!1},CompactHiddenTitles:{storyId:"layout-tabs--compact-hidden-titles",name:"Compact, hidden titles",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Tabs","Tab","withComponentDocs"]}),Ce=A.meta,De=["Default","TabPanelBorder","CompactHiddenTitles"],Se=A.stories.Default,Ie=A.stories.TabPanelBorder,Me=A.stories.CompactHiddenTitles;export{Me as CompactHiddenTitles,Se as Default,Ie as TabPanelBorder,De as __namedExportsOrder,Ce as default};
//# sourceMappingURL=Tabs.stories-4ec9e1e3.js.map
