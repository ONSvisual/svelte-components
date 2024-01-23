import{S as $,i as ee,s as te,e as B,a as L,N as J,d as T,x as D,C as p,P as re,I as K,w as j,U as z,H as b,J as le,a3 as se,j as ie,m as ne,b as C,t as V,n as ae,q as I,u as A,r as H,v as M}from"./index-8607ceaf.js";import{C as fe}from"./Container-d712deab.js";import{v as ue,f as E}from"./utils-f6662b64.js";function F(i,e,s){const t=i.slice();return t[1]=e[s],t[3]=s,t}function G(i){let e,s=i[0],t=[];for(let l=0;l<s.length;l+=1)t[l]=R(F(i,s,l));return{c(){e=D("dl");for(let l=0;l<t.length;l+=1)t[l].c();p(e,"class","ons-metadata metadata__list ons-grid ons-grid--gutterless ons-u-cf ons-u-mb-m"),p(e,"title","Dataset ID and release date information"),p(e,"aria-label","Dataset ID and release date information")},m(l,n){L(l,e,n);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(l,n){if(n&1){s=l[0];let o;for(o=0;o<s.length;o+=1){const r=F(l,s,o);t[o]?t[o].p(r,n):(t[o]=R(r),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(l){l&&T(e),re(t,l)}}}function de(i){let e,s=i[1].value+"",t;return{c(){e=new se(!1),t=B(),e.a=t},m(l,n){e.m(s,l,n),L(l,t,n)},p(l,n){n&1&&s!==(s=l[1].value+"")&&e.p(s)},d(l){l&&T(t),l&&e.d()}}}function ce(i){let e,s=E(i[1].value)+"",t,l,n,o,r=i[1].extra&&Q(i);return{c(){e=D("time"),t=K(s),n=j(),r&&r.c(),o=B(),p(e,"datetime",l=new Date(i[1].value).toISOString())},m(f,m){L(f,e,m),b(e,t),L(f,n,m),r&&r.m(f,m),L(f,o,m)},p(f,m){m&1&&s!==(s=E(f[1].value)+"")&&le(t,s),m&1&&l!==(l=new Date(f[1].value).toISOString())&&p(e,"datetime",l),f[1].extra?r?r.p(f,m):(r=Q(f),r.c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null)},d(f){f&&T(e),f&&T(n),r&&r.d(f),f&&T(o)}}}function Q(i){let e,s=i[1].extra+"",t;return{c(){e=new se(!1),t=B(),e.a=t},m(l,n){e.m(s,l,n),L(l,t,n)},p(l,n){n&1&&s!==(s=l[1].extra+"")&&e.p(s)},d(l){l&&T(t),l&&e.d()}}}function R(i){let e,s,t=i[1].key+"",l,n,o,r,f,m,h;function g(_,c){return c&1&&(f=null),f==null&&(f=!!ue(_[1].value)),f?ce:de}let u=g(i,-1),d=u(i);return{c(){e=D("div"),s=D("dt"),l=K(t),n=K(":"),o=j(),r=D("dd"),d.c(),m=j(),p(s,"class","ons-metadata__term ons-u-mr-xs"),p(r,"class","ons-metadata__value ons-u-f-no"),p(e,"class",h="ons-grid__col ons-col-"+(i[1].col?i[1].col:12)+"@m"),z(e,"ons-u-mt-xs",i[3]!==0)},m(_,c){L(_,e,c),b(e,s),b(s,l),b(s,n),b(e,o),b(e,r),d.m(r,null),b(e,m)},p(_,c){c&1&&t!==(t=_[1].key+"")&&le(l,t),u===(u=g(_,c))&&d?d.p(_,c):(d.d(1),d=u(_),d&&(d.c(),d.m(r,null))),c&1&&h!==(h="ons-grid__col ons-col-"+(_[1].col?_[1].col:12)+"@m")&&p(e,"class",h),c&1&&z(e,"ons-u-mt-xs",_[3]!==0)},d(_){_&&T(e),d.d()}}}function me(i){let e=Array.isArray(i[0]),s,t=e&&G(i);return{c(){t&&t.c(),s=B()},m(l,n){t&&t.m(l,n),L(l,s,n)},p(l,[n]){n&1&&(e=Array.isArray(l[0])),e?t?t.p(l,n):(t=G(l),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},i:J,o:J,d(l){t&&t.d(l),l&&T(s)}}}function _e(i,e,s){let{meta:t=null}=e;return i.$$set=l=>{"meta"in l&&s(0,t=l.meta)},[t]}class oe extends ${constructor(e){super(),ee(this,e,_e,me,te,{meta:0})}}oe.__docgen={version:3,name:"Meta.svelte",data:[{visibility:"public",description:null,keywords:[],name:"meta",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const be=i=>({}),W=i=>({}),pe=i=>({}),X=i=>({}),ge=i=>({}),Y=i=>({});function Z(i){let e;return{c(){e=D("div"),e.innerHTML='<div class="ons-grid--flex ons-grid--between@m ons-u-mt-s@m ons-u-mb-m@xxs ons-u-flex-jc-fe@m"><a href="https://uksa.statisticsauthority.gov.uk/about-the-authority/uk-statistical-system/types-of-official-statistics/" class="national-statistics__link ons-u-fs-xxxl"><img src="//cdn.ons.gov.uk/assets/images/ons-logo/kitemark/uksa-kitemark.svg" alt="UK Statistics Authority Kitemark" class="national-statistics__logo"/></a></div>',p(e,"class","ons-grid__col ons-col-2@m svelte-lohx48")},m(s,t){L(s,e,t)},d(s){s&&T(e)}}}function x(i){let e;return{c(){e=D("div"),e.innerHTML='<div class="ons-grid__col svelte-lohx48"><img src="https://cdn.ons.gov.uk/assets/images/census-logo/logo-census-2021-purple-landscape.svg" title="Census 2021" alt="Census 2021" class="header__svg-logo margin-right--1" focusable="false" width="167" height="32"/></div>',p(e,"class","ons-grid ons-u-mb-m")},m(s,t){L(s,e,t)},d(s){s&&T(e)}}}function ke(i){let e,s,t,l,n,o,r,f,m,h,g,u,d;const _=i[7].before,c=I(_,i,i[8],Y);let k=i[1]&&Z();const N=i[7].default,w=I(N,i,i[8],null),P=i[7].brand,S=I(P,i,i[8],X);let y=i[2]&&x();g=new oe({props:{meta:i[3]}});const q=i[7].after,O=I(q,i,i[8],W);return{c(){e=D("section"),c&&c.c(),s=j(),t=D("div"),l=D("div"),n=D("h1"),o=j(),k&&k.c(),r=j(),w&&w.c(),f=j(),S&&S.c(),m=j(),y&&y.c(),h=j(),ie(g.$$.fragment),u=j(),O&&O.c(),p(n,"class","ons-u-fs-xxxl ons-u-mt-s ons-u-mb-m ons-u-pb-no ons-u-pt-no"),p(l,"class","ons-grid__col ons-col-10@m svelte-lohx48"),p(t,"class","ons-grid"),p(e,"class","ons-u-mb-xl")},m(a,v){L(a,e,v),c&&c.m(e,null),b(e,s),b(e,t),b(t,l),b(l,n),n.innerHTML=i[0],b(t,o),k&&k.m(t,null),b(e,r),w&&w.m(e,null),b(e,f),S&&S.m(e,null),b(e,m),y&&y.m(e,null),b(e,h),ne(g,e,null),b(e,u),O&&O.m(e,null),d=!0},p(a,v){c&&c.p&&(!d||v&256)&&A(c,_,a,a[8],d?M(_,a[8],v,ge):H(a[8]),Y),(!d||v&1)&&(n.innerHTML=a[0]),a[1]?k||(k=Z(),k.c(),k.m(t,null)):k&&(k.d(1),k=null),w&&w.p&&(!d||v&256)&&A(w,N,a,a[8],d?M(N,a[8],v,null):H(a[8]),null),S&&S.p&&(!d||v&256)&&A(S,P,a,a[8],d?M(P,a[8],v,pe):H(a[8]),X),a[2]?y||(y=x(),y.c(),y.m(e,h)):y&&(y.d(1),y=null);const U={};v&8&&(U.meta=a[3]),g.$set(U),O&&O.p&&(!d||v&256)&&A(O,q,a,a[8],d?M(q,a[8],v,be):H(a[8]),W)},i(a){d||(C(c,a),C(w,a),C(S,a),C(g.$$.fragment,a),C(O,a),d=!0)},o(a){V(c,a),V(w,a),V(S,a),V(g.$$.fragment,a),V(O,a),d=!1},d(a){a&&T(e),c&&c.d(a),k&&k.d(),w&&w.d(a),S&&S.d(a),y&&y.d(),ae(g),O&&O.d(a)}}}function ye(i){let e,s;return e=new fe({props:{theme:i[4],themeOverrides:i[5],background:i[6],$$slots:{default:[ke]},$$scope:{ctx:i}}}),{c(){ie(e.$$.fragment)},m(t,l){ne(e,t,l),s=!0},p(t,[l]){const n={};l&16&&(n.theme=t[4]),l&32&&(n.themeOverrides=t[5]),l&64&&(n.background=t[6]),l&271&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function ve(i,e,s){let{$$slots:t={},$$scope:l}=e,{title:n="Page title"}=e,{natStatBadge:o=!1}=e,{censusLogo:r=!1}=e,{meta:f=null}=e,{theme:m=null}=e,{themeOverrides:h=null}=e,{background:g=null}=e;return i.$$set=u=>{"title"in u&&s(0,n=u.title),"natStatBadge"in u&&s(1,o=u.natStatBadge),"censusLogo"in u&&s(2,r=u.censusLogo),"meta"in u&&s(3,f=u.meta),"theme"in u&&s(4,m=u.theme),"themeOverrides"in u&&s(5,h=u.themeOverrides),"background"in u&&s(6,g=u.background),"$$scope"in u&&s(8,l=u.$$scope)},[n,o,r,f,m,h,g,t,l]}class he extends ${constructor(e){super(),ee(this,e,ve,ye,te,{title:0,natStatBadge:1,censusLogo:2,meta:3,theme:4,themeOverrides:5,background:6})}}he.__docgen={version:3,name:"Titleblock.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title/headline",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Page title"},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:'Include "national statistic" badge',name:"natStatBadge",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Include Census logo",name:"censusLogo",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"Array of {key, value} objects containing page metadata",name:"meta",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"},defaultValue:null},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"before"},{keywords:[],visibility:"public",description:"",name:"default"},{keywords:[],visibility:"public",description:"",name:"brand"},{keywords:[],visibility:"public",description:"",name:"after"}],refs:[]};export{he as T};
//# sourceMappingURL=Titleblock-ddea1a47.js.map