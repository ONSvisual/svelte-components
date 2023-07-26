import{S as R,i as z,s as Q,e as V,a as v,B as G,d as w,w as B,y as b,C as de,D as j,x as T,z as J,A as g,E as U,Q as oe,j as C,m as I,b as O,t as A,n as L,q,u as E,r as K,v as N,p as re,k as fe,l as ce}from"./index-be4a2627.js";import{p as _e,w as W,M as pe,T as ge,S as ke}from"./collect-stories-c7256c69.js";import{C as be}from"./Container-1f03dd2e.js";import{v as ye,f as X}from"./utils-dfca2a5c.js";import"./Theme-9da5b63a.js";import"./themes-9c401ccc.js";const Y=`A title block suitable for a standard pages, with optional metadata block.

\`\`\`html
<script>
  import { TitleBlock } from "@onsvisual/svelte-components";
<\/script>

<TitleBlock tite="Page title">
  {optional_additonal_content}
</TitleBlock>
\`\`\`
`;function Z(n,e,s){const t=n.slice();return t[1]=e[s],t[3]=s,t}function x(n){let e,s=n[0],t=[];for(let l=0;l<s.length;l+=1)t[l]=te(Z(n,s,l));return{c(){e=B("dl");for(let l=0;l<t.length;l+=1)t[l].c();b(e,"class","ons-metadata metadata__list ons-grid ons-grid--gutterless ons-u-cf ons-u-mb-m"),b(e,"title","Dataset ID and release date information"),b(e,"aria-label","Dataset ID and release date information")},m(l,a){v(l,e,a);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(l,a){if(a&1){s=l[0];let o;for(o=0;o<s.length;o+=1){const r=Z(l,s,o);t[o]?t[o].p(r,a):(t[o]=te(r),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(l){l&&w(e),de(t,l)}}}function he(n){let e,s=n[1].value+"",t;return{c(){e=new oe(!1),t=V(),e.a=t},m(l,a){e.m(s,l,a),v(l,t,a)},p(l,a){a&1&&s!==(s=l[1].value+"")&&e.p(s)},d(l){l&&w(t),l&&e.d()}}}function ve(n){let e,s=X(n[1].value)+"",t,l,a,o,r=n[1].extra&&ee(n);return{c(){e=B("time"),t=j(s),a=T(),r&&r.c(),o=V(),b(e,"datetime",l=new Date(n[1].value).toISOString())},m(c,i){v(c,e,i),g(e,t),v(c,a,i),r&&r.m(c,i),v(c,o,i)},p(c,i){i&1&&s!==(s=X(c[1].value)+"")&&U(t,s),i&1&&l!==(l=new Date(c[1].value).toISOString())&&b(e,"datetime",l),c[1].extra?r?r.p(c,i):(r=ee(c),r.c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null)},d(c){c&&w(e),c&&w(a),r&&r.d(c),c&&w(o)}}}function ee(n){let e,s=n[1].extra+"",t;return{c(){e=new oe(!1),t=V(),e.a=t},m(l,a){e.m(s,l,a),v(l,t,a)},p(l,a){a&1&&s!==(s=l[1].extra+"")&&e.p(s)},d(l){l&&w(t),l&&e.d()}}}function te(n){let e,s,t=n[1].key+"",l,a,o,r,c,i,m;function k(p,_){return _&1&&(c=null),c==null&&(c=!!ye(p[1].value)),c?ve:he}let u=k(n,-1),d=u(n);return{c(){e=B("div"),s=B("dt"),l=j(t),a=j(":"),o=T(),r=B("dd"),d.c(),i=T(),b(s,"class","ons-metadata__term ons-u-mr-xs"),b(r,"class","ons-metadata__value ons-u-f-no"),b(e,"class",m="ons-grid__col ons-col-"+(n[1].col?n[1].col:12)+"@m"),J(e,"ons-u-mt-xs",n[3]!==0)},m(p,_){v(p,e,_),g(e,s),g(s,l),g(s,a),g(e,o),g(e,r),d.m(r,null),g(e,i)},p(p,_){_&1&&t!==(t=p[1].key+"")&&U(l,t),u===(u=k(p,_))&&d?d.p(p,_):(d.d(1),d=u(p),d&&(d.c(),d.m(r,null))),_&1&&m!==(m="ons-grid__col ons-col-"+(p[1].col?p[1].col:12)+"@m")&&b(e,"class",m),_&1&&J(e,"ons-u-mt-xs",p[3]!==0)},d(p){p&&w(e),d.d()}}}function we(n){let e=Array.isArray(n[0]),s,t=e&&x(n);return{c(){t&&t.c(),s=V()},m(l,a){t&&t.m(l,a),v(l,s,a)},p(l,[a]){a&1&&(e=Array.isArray(l[0])),e?t?t.p(l,a):(t=x(l),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},i:G,o:G,d(l){t&&t.d(l),l&&w(s)}}}function De(n,e,s){let{meta:t=null}=e;return n.$$set=l=>{"meta"in l&&s(0,t=l.meta)},[t]}class ue extends R{constructor(e){super(),z(this,e,De,we,Q,{meta:0})}}ue.__docgen={version:3,name:"Meta.svelte",data:[{visibility:"public",description:null,keywords:[],name:"meta",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Se=n=>({}),le=n=>({}),Te=n=>({}),se=n=>({}),Be=n=>({}),ae=n=>({});function ne(n){let e;return{c(){e=B("div"),e.innerHTML='<div class="ons-grid--flex ons-grid--between@m ons-u-mt-s@m ons-u-mb-m@xxs ons-u-flex-jc-fe@m"><a href="https://uksa.statisticsauthority.gov.uk/about-the-authority/uk-statistical-system/types-of-official-statistics/" class="national-statistics__link ons-u-fs-xxxl"><img src="//cdn.ons.gov.uk/assets/images/ons-logo/kitemark/uksa-kitemark.svg" alt="UK Statistics Authority Kitemark" class="national-statistics__logo"/></a></div>',b(e,"class","ons-grid__col ons-col-2@m svelte-lohx48")},m(s,t){v(s,e,t)},d(s){s&&w(e)}}}function ie(n){let e;return{c(){e=B("div"),e.innerHTML='<div class="ons-grid__col svelte-lohx48"><img src="https://cdn.ons.gov.uk/assets/images/census-logo/logo-census-2021-purple-landscape.svg" title="Census 2021" alt="Census 2021" class="header__svg-logo margin-right--1" focusable="false" width="167" height="32"/></div>',b(e,"class","ons-grid ons-u-mb-m")},m(s,t){v(s,e,t)},d(s){s&&w(e)}}}function $e(n){let e,s,t,l,a,o,r,c,i,m,k,u,d;const p=n[7].before,_=q(p,n,n[8],ae);let y=n[1]&&ne();const P=n[7].brand,D=q(P,n,n[8],se);let h=n[2]&&ie();k=new ue({props:{meta:n[3]}});const H=n[7].after,S=q(H,n,n[8],le);return{c(){e=B("section"),_&&_.c(),s=T(),t=B("div"),l=B("div"),a=B("h1"),o=j(n[0]),r=T(),y&&y.c(),c=T(),D&&D.c(),i=T(),h&&h.c(),m=T(),C(k.$$.fragment),u=T(),S&&S.c(),b(a,"class","ons-u-fs-xxxl ons-u-mt-s ons-u-mb-m ons-u-pb-no ons-u-pt-no"),b(l,"class","ons-grid__col ons-col-10@m svelte-lohx48"),b(t,"class","ons-grid"),b(e,"class","ons-u-mb-xl")},m(f,$){v(f,e,$),_&&_.m(e,null),g(e,s),g(e,t),g(t,l),g(l,a),g(a,o),g(t,r),y&&y.m(t,null),g(e,c),D&&D.m(e,null),g(e,i),h&&h.m(e,null),g(e,m),I(k,e,null),g(e,u),S&&S.m(e,null),d=!0},p(f,$){_&&_.p&&(!d||$&256)&&E(_,p,f,f[8],d?N(p,f[8],$,Be):K(f[8]),ae),(!d||$&1)&&U(o,f[0]),f[1]?y||(y=ne(),y.c(),y.m(t,null)):y&&(y.d(1),y=null),D&&D.p&&(!d||$&256)&&E(D,P,f,f[8],d?N(P,f[8],$,Te):K(f[8]),se),f[2]?h||(h=ie(),h.c(),h.m(e,m)):h&&(h.d(1),h=null);const F={};$&8&&(F.meta=f[3]),k.$set(F),S&&S.p&&(!d||$&256)&&E(S,H,f,f[8],d?N(H,f[8],$,Se):K(f[8]),le)},i(f){d||(O(_,f),O(D,f),O(k.$$.fragment,f),O(S,f),d=!0)},o(f){A(_,f),A(D,f),A(k.$$.fragment,f),A(S,f),d=!1},d(f){f&&w(e),_&&_.d(f),y&&y.d(),D&&D.d(f),h&&h.d(),L(k),S&&S.d(f)}}}function Oe(n){let e,s;return e=new be({props:{theme:n[4],themeOverrides:n[5],background:n[6],$$slots:{default:[$e]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},m(t,l){I(e,t,l),s=!0},p(t,[l]){const a={};l&16&&(a.theme=t[4]),l&32&&(a.themeOverrides=t[5]),l&64&&(a.background=t[6]),l&271&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(O(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Ae(n,e,s){let{$$slots:t={},$$scope:l}=e,{title:a="Page title"}=e,{natStatBadge:o=!1}=e,{censusLogo:r=!1}=e,{meta:c=[]}=e,{theme:i=null}=e,{themeOverrides:m=null}=e,{background:k=null}=e;return n.$$set=u=>{"title"in u&&s(0,a=u.title),"natStatBadge"in u&&s(1,o=u.natStatBadge),"censusLogo"in u&&s(2,r=u.censusLogo),"meta"in u&&s(3,c=u.meta),"theme"in u&&s(4,i=u.theme),"themeOverrides"in u&&s(5,m=u.themeOverrides),"background"in u&&s(6,k=u.background),"$$scope"in u&&s(8,l=u.$$scope)},[a,o,r,c,i,m,k,t,l]}class M extends R{constructor(e){super(),z(this,e,Ae,Oe,Q,{title:0,natStatBadge:1,censusLogo:2,meta:3,theme:4,themeOverrides:5,background:6})}}M.__docgen={version:3,name:"TitleBlock.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title/headline",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Page title"},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:'Include "national statistic" badge',name:"natStatBadge",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Include Census logo",name:"censusLogo",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"Array of {key, value} objects containing page metadata",name:"meta",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"before"},{keywords:[],visibility:"public",description:"",name:"brand"},{keywords:[],visibility:"public",description:"",name:"after"}],refs:[]};function Ce(n){let e,s;const t=[n[0]];let l={};for(let a=0;a<t.length;a+=1)l=re(l,t[a]);return e=new M({props:l}),{c(){C(e.$$.fragment)},m(a,o){I(e,a,o),s=!0},p(a,o){const r=o&1?fe(t,[ce(a[0])]):{};e.$set(r)},i(a){s||(O(e.$$.fragment,a),s=!0)},o(a){A(e.$$.fragment,a),s=!1},d(a){L(e,a)}}}function Ie(n){let e,s,t,l,a,o;const r=[{title:"Layout/TitleBlock"},{component:M},{argTypes:{theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},W(Y)];let c={};for(let i=0;i<r.length;i+=1)c=re(c,r[i]);return e=new pe({props:c}),t=new ge({props:{$$slots:{default:[Ce,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:n}}}),a=new ke({props:{name:"Default",args:{title:"Page headline",meta:[{key:"Dataset ID",value:"RM169"},{key:"Released",value:"2023-04-04",col:4},{key:"Last updated",value:"2023-06-08",col:8,extra:'— <a href="#version-history">See version history</a>'}]}}}),{c(){C(e.$$.fragment),s=T(),C(t.$$.fragment),l=T(),C(a.$$.fragment)},m(i,m){I(e,i,m),v(i,s,m),I(t,i,m),v(i,l,m),I(a,i,m),o=!0},p(i,[m]){const k=m&0?fe(r,[r[0],m&0&&{component:M},r[2],m&0&&ce(W(Y))]):{};e.$set(k);const u={};m&3&&(u.$$scope={dirty:m,ctx:i}),t.$set(u)},i(i){o||(O(e.$$.fragment,i),O(t.$$.fragment,i),O(a.$$.fragment,i),o=!0)},o(i){A(e.$$.fragment,i),A(t.$$.fragment,i),A(a.$$.fragment,i),o=!1},d(i){L(e,i),i&&w(s),L(t,i),i&&w(l),L(a,i)}}}class Le extends R{constructor(e){super(),z(this,e,null,Ie,Q,{})}}const me=_e(Le,{meta:{title:"Layout/TitleBlock"},stories:{"tpl:default":{storyId:"layout-titleblock--default",name:"default",template:!0,source:"<TitleBlock {...args} />",hasArgs:!0},Default:{storyId:"layout-titleblock--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","TitleBlock","withComponentDocs"]}),Ee=me.meta,Ke=["Default"],Ne=me.stories.Default;export{Ne as Default,Ke as __namedExportsOrder,Ee as default};
//# sourceMappingURL=TitleBlock.stories-800a1fb4.js.map
