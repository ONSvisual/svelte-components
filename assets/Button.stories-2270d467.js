import{S as J,i as K,s as U,e as Z,a as I,z as x,d as $,O as ee,L as v,Z as w,P as V,g as H,t as m,c as D,b as u,W as ve,q as T,x as P,w as S,Y as be,u as G,r as z,v as N,j as B,m as L,n as A,p as ye,k as ke,l as ge,y as F,Q as we,R as Ie}from"./index-98bb0bde.js";import{p as $e,w as te,M as Be,T as Le,S as C}from"./collect-stories-cbdfda5c.js";const ne=`A button/link component that can be styled in various ways. It will render as an \`<a>\` link if it has an \`href\` property defined.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Button } from "@onsvisual/svelte-components";

  // Define your own function on click
  const handleClick = (e) => console.log(e);
<\/script>

<!-- Standard button with on:click function -->
<Button on:click="{handleClick}">Button text</Button>

<!-- Button-styled link with href -->
<Button href="#">Link text</Button>
\`\`\`
`;function oe(l){let e,o,t,n;return{c(){e=ee("svg"),o=ee("path"),v(o,"d",t=l[3][l[0]].d),v(e,"class","ons-svg-icon"),v(e,"viewBox",n=l[3][l[0]].viewBox),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"focusable","false"),v(e,"fill","currentColor"),w(e,"ons-u-ml-xs",l[1]),w(e,"ons-u-mr-xs",l[2])},m(s,i){I(s,e,i),V(e,o)},p(s,i){i&1&&t!==(t=s[3][s[0]].d)&&v(o,"d",t),i&1&&n!==(n=s[3][s[0]].viewBox)&&v(e,"viewBox",n),i&2&&w(e,"ons-u-ml-xs",s[1]),i&4&&w(e,"ons-u-mr-xs",s[2])},d(s){s&&$(e)}}}function Ae(l){let e,o=l[3][l[0]]&&oe(l);return{c(){o&&o.c(),e=Z()},m(t,n){o&&o.m(t,n),I(t,e,n)},p(t,[n]){t[3][t[0]]?o?o.p(t,n):(o=oe(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:x,o:x,d(t){o&&o.d(t),t&&$(e)}}}function Se(l,e,o){let{type:t="arrow"}=e,{marginLeft:n=!1}=e,{marginRight:s=!1}=e;const i={arrow:{d:"m10 .2-.9.9c-.1.1-.1.4 0 .5l4 4H.6c-.2 0-.4.2-.4.4v1.2c0 .2.2.4.4.4h12.5l-3.9 3.7c-.2.2-.2.4 0 .6l.8.9c.2.2.4.2.6 0L16.8 7c.2-.2.2-.4 0-.6L10.7.3c-.3-.2-.5-.2-.7-.1z",viewBox:"0 0 17 13"},externalLink:{d:"M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z",viewBox:"2 2 12 12"},signout:{d:"M13.85,7.65l-2.5-2.5a.5.5,0,0,0-.71,0,.48.48,0,0,0-.15.36V7h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3v1.5A.49.49,0,0,0,11,11a.48.48,0,0,0,.34-.14l2.51-2.5a.49.49,0,0,0,0-.68Z M8.5,14h-6a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2.5,2h6a.5.5,0,0,1,.5.5V3a.5.5,0,0,1-.5.5h-5v9h5A.5.5,0,0,1,9,13v.5A.5.5,0,0,1,8.5,14Z",viewBox:"0 0 12 12"},print:{d:"M17 4H3C1.3 4 0 5.2 0 6.8v5.5h4V16h12v-3.7h4V6.8C20 5.2 18.7 4 17 4zm-3 10H6V9h8v5zm3-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-1-8H4v3h12V0z",viewBox:"0 0 20 16"},download:{d:"M5.6 9a.48.48 0 0 0 .7 0l3-3.2a.48.48 0 0 0 0-.7C9.3 5 9.2 5 9 5H7.5V.5A.47.47 0 0 0 7 0H5a.47.47 0 0 0-.5.5V5H3a.47.47 0 0 0-.5.5.37.37 0 0 0 .1.3Z M11.5 9H11a.47.47 0 0 0-.5.5v1h-9v-1A.47.47 0 0 0 1 9H.5a.47.47 0 0 0-.5.5v2a.47.47 0 0 0 .5.5h11a.47.47 0 0 0 .5-.5v-2a.47.47 0 0 0-.5-.5Z",viewBox:"0 0 12 12"},tick:{d:"M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z",viewBox:"1.5 3 13 10"},search:{d:"M11.86 10.23 8.62 6.99a4.63 4.63 0 1 0-6.34 1.64 4.55 4.55 0 0 0 2.36.64 4.65 4.65 0 0 0 2.33-.65l3.24 3.23a.46.46 0 0 0 .65 0l1-1a.48.48 0 0 0 0-.62Zm-5-3.32a3.28 3.28 0 0 1-2.31.93 3.22 3.22 0 1 1 2.35-.93Z",viewBox:"0 0 12 12"}};return l.$$set=c=>{"type"in c&&o(0,t=c.type),"marginLeft"in c&&o(1,n=c.marginLeft),"marginRight"in c&&o(2,s=c.marginRight)},[t,n,s,i]}class q extends J{constructor(e){super(),K(this,e,Se,Ae,U,{type:0,marginLeft:1,marginRight:2})}}q.__docgen={version:3,name:"Icon.svelte",data:[{visibility:"public",description:null,keywords:[],name:"type",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"arrow"},{visibility:"public",description:null,keywords:[],name:"marginLeft",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"marginRight",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Ve=l=>({}),se=l=>({}),He=l=>({}),le=l=>({}),De=l=>({}),ie=l=>({}),Me=l=>({}),ae=l=>({});function Ce(l){let e,o,t,n,s,i,c,b,p=l[5]==="before"&&re(l);const _=l[11].default,k=T(_,l,l[10],null);let d=l[5]==="after"&&ue(l);return{c(){e=P("button"),o=P("span"),p&&p.c(),t=S(),n=P("span"),k&&k.c(),s=S(),d&&d.c(),v(n,"class","ons-btn__text"),w(n,"ons-u-vh",l[7]),v(o,"class","ons-btn__inner"),v(e,"type",l[0]),v(e,"class","ons-btn"),e.disabled=l[6],v(e,"aria-label",l[8]),w(e,"ons-btn--small",l[3]),w(e,"ons-btn--secondary",l[1]==="secondary"),w(e,"ons-btn--ghost",l[1]==="ghost"),w(e,"ons-btn--disabled",l[6])},m(r,f){I(r,e,f),V(e,o),p&&p.m(o,null),V(o,t),V(o,n),k&&k.m(n,null),V(o,s),d&&d.m(o,null),i=!0,c||(b=be(e,"click",l[13]),c=!0)},p(r,f){r[5]==="before"?p?(p.p(r,f),f&32&&u(p,1)):(p=re(r),p.c(),u(p,1),p.m(o,t)):p&&(H(),m(p,1,1,()=>{p=null}),D()),k&&k.p&&(!i||f&1024)&&G(k,_,r,r[10],i?N(_,r[10],f,null):z(r[10]),null),(!i||f&128)&&w(n,"ons-u-vh",r[7]),r[5]==="after"?d?(d.p(r,f),f&32&&u(d,1)):(d=ue(r),d.c(),u(d,1),d.m(o,null)):d&&(H(),m(d,1,1,()=>{d=null}),D()),(!i||f&1)&&v(e,"type",r[0]),(!i||f&64)&&(e.disabled=r[6]),(!i||f&256)&&v(e,"aria-label",r[8]),(!i||f&8)&&w(e,"ons-btn--small",r[3]),(!i||f&2)&&w(e,"ons-btn--secondary",r[1]==="secondary"),(!i||f&2)&&w(e,"ons-btn--ghost",r[1]==="ghost"),(!i||f&64)&&w(e,"ons-btn--disabled",r[6])},i(r){i||(u(p),u(k,r),u(d),i=!0)},o(r){m(p),m(k,r),m(d),i=!1},d(r){r&&$(e),p&&p.d(),k&&k.d(r),d&&d.d(),c=!1,b()}}}function Pe(l){let e,o,t,n,s,i,c,b,p,_=l[5]==="before"&&pe(l);const k=l[11].default,d=T(k,l,l[10],null);let r=l[5]==="after"&&de(l);return{c(){e=P("a"),o=P("span"),_&&_.c(),t=S(),n=P("span"),d&&d.c(),s=S(),r&&r.c(),v(n,"class","ons-btn__text"),w(n,"ons-u-vh",l[7]),v(o,"class","ons-btn__inner"),v(e,"href",i=l[6]?null:l[2]),v(e,"role","button"),v(e,"class","ons-btn ons-btn--link ons-js-submit-btn"),v(e,"disabled",l[6]),v(e,"aria-label",l[8]),w(e,"ons-btn--small",l[3]),w(e,"ons-btn--secondary",l[1]==="secondary"),w(e,"ons-btn--ghost",l[1]==="ghost"),w(e,"ons-btn--disabled",l[6])},m(f,g){I(f,e,g),V(e,o),_&&_.m(o,null),V(o,t),V(o,n),d&&d.m(n,null),V(o,s),r&&r.m(o,null),c=!0,b||(p=be(e,"click",l[12]),b=!0)},p(f,g){f[5]==="before"?_?(_.p(f,g),g&32&&u(_,1)):(_=pe(f),_.c(),u(_,1),_.m(o,t)):_&&(H(),m(_,1,1,()=>{_=null}),D()),d&&d.p&&(!c||g&1024)&&G(d,k,f,f[10],c?N(k,f[10],g,null):z(f[10]),null),(!c||g&128)&&w(n,"ons-u-vh",f[7]),f[5]==="after"?r?(r.p(f,g),g&32&&u(r,1)):(r=de(f),r.c(),u(r,1),r.m(o,null)):r&&(H(),m(r,1,1,()=>{r=null}),D()),(!c||g&68&&i!==(i=f[6]?null:f[2]))&&v(e,"href",i),(!c||g&64)&&v(e,"disabled",f[6]),(!c||g&256)&&v(e,"aria-label",f[8]),(!c||g&8)&&w(e,"ons-btn--small",f[3]),(!c||g&2)&&w(e,"ons-btn--secondary",f[1]==="secondary"),(!c||g&2)&&w(e,"ons-btn--ghost",f[1]==="ghost"),(!c||g&64)&&w(e,"ons-btn--disabled",f[6])},i(f){c||(u(_),u(d,f),u(r),c=!0)},o(f){m(_),m(d,f),m(r),c=!1},d(f){f&&$(e),_&&_.d(),d&&d.d(f),r&&r.d(),b=!1,p()}}}function re(l){let e;const o=l[11].icon,t=T(o,l,l[10],le),n=t||Re(l);return{c(){n&&n.c()},m(s,i){n&&n.m(s,i),e=!0},p(s,i){t?t.p&&(!e||i&1024)&&G(t,o,s,s[10],e?N(o,s[10],i,He):z(s[10]),le):n&&n.p&&(!e||i&144)&&n.p(s,e?i:-1)},i(s){e||(u(n,s),e=!0)},o(s){m(n,s),e=!1},d(s){n&&n.d(s)}}}function fe(l){let e,o;return e=new q({props:{type:l[4],marginRight:!l[7]}}),{c(){B(e.$$.fragment)},m(t,n){L(e,t,n),o=!0},p(t,n){const s={};n&16&&(s.type=t[4]),n&128&&(s.marginRight=!t[7]),e.$set(s)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){A(e,t)}}}function Re(l){let e,o,t=l[4]&&fe(l);return{c(){t&&t.c(),e=Z()},m(n,s){t&&t.m(n,s),I(n,e,s),o=!0},p(n,s){n[4]?t?(t.p(n,s),s&16&&u(t,1)):(t=fe(n),t.c(),u(t,1),t.m(e.parentNode,e)):t&&(H(),m(t,1,1,()=>{t=null}),D())},i(n){o||(u(t),o=!0)},o(n){m(t),o=!1},d(n){t&&t.d(n),n&&$(e)}}}function ue(l){let e;const o=l[11].icon,t=T(o,l,l[10],se),n=t||Ze(l);return{c(){n&&n.c()},m(s,i){n&&n.m(s,i),e=!0},p(s,i){t?t.p&&(!e||i&1024)&&G(t,o,s,s[10],e?N(o,s[10],i,Ve):z(s[10]),se):n&&n.p&&(!e||i&144)&&n.p(s,e?i:-1)},i(s){e||(u(n,s),e=!0)},o(s){m(n,s),e=!1},d(s){n&&n.d(s)}}}function ce(l){let e,o;return e=new q({props:{type:l[4],marginLeft:!l[7]}}),{c(){B(e.$$.fragment)},m(t,n){L(e,t,n),o=!0},p(t,n){const s={};n&16&&(s.type=t[4]),n&128&&(s.marginLeft=!t[7]),e.$set(s)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){A(e,t)}}}function Ze(l){let e,o,t=l[4]&&ce(l);return{c(){t&&t.c(),e=Z()},m(n,s){t&&t.m(n,s),I(n,e,s),o=!0},p(n,s){n[4]?t?(t.p(n,s),s&16&&u(t,1)):(t=ce(n),t.c(),u(t,1),t.m(e.parentNode,e)):t&&(H(),m(t,1,1,()=>{t=null}),D())},i(n){o||(u(t),o=!0)},o(n){m(t),o=!1},d(n){t&&t.d(n),n&&$(e)}}}function pe(l){let e;const o=l[11].icon,t=T(o,l,l[10],ae),n=t||Te(l);return{c(){n&&n.c()},m(s,i){n&&n.m(s,i),e=!0},p(s,i){t?t.p&&(!e||i&1024)&&G(t,o,s,s[10],e?N(o,s[10],i,Me):z(s[10]),ae):n&&n.p&&(!e||i&144)&&n.p(s,e?i:-1)},i(s){e||(u(n,s),e=!0)},o(s){m(n,s),e=!1},d(s){n&&n.d(s)}}}function me(l){let e,o;return e=new q({props:{type:l[4],marginRight:!l[7]}}),{c(){B(e.$$.fragment)},m(t,n){L(e,t,n),o=!0},p(t,n){const s={};n&16&&(s.type=t[4]),n&128&&(s.marginRight=!t[7]),e.$set(s)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){A(e,t)}}}function Te(l){let e,o,t=l[4]&&me(l);return{c(){t&&t.c(),e=Z()},m(n,s){t&&t.m(n,s),I(n,e,s),o=!0},p(n,s){n[4]?t?(t.p(n,s),s&16&&u(t,1)):(t=me(n),t.c(),u(t,1),t.m(e.parentNode,e)):t&&(H(),m(t,1,1,()=>{t=null}),D())},i(n){o||(u(t),o=!0)},o(n){m(t),o=!1},d(n){t&&t.d(n),n&&$(e)}}}function de(l){let e;const o=l[11].icon,t=T(o,l,l[10],ie),n=t||Ge(l);return{c(){n&&n.c()},m(s,i){n&&n.m(s,i),e=!0},p(s,i){t?t.p&&(!e||i&1024)&&G(t,o,s,s[10],e?N(o,s[10],i,De):z(s[10]),ie):n&&n.p&&(!e||i&144)&&n.p(s,e?i:-1)},i(s){e||(u(n,s),e=!0)},o(s){m(n,s),e=!1},d(s){n&&n.d(s)}}}function _e(l){let e,o;return e=new q({props:{type:l[4],marginLeft:!l[7]}}),{c(){B(e.$$.fragment)},m(t,n){L(e,t,n),o=!0},p(t,n){const s={};n&16&&(s.type=t[4]),n&128&&(s.marginLeft=!t[7]),e.$set(s)},i(t){o||(u(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){A(e,t)}}}function Ge(l){let e,o,t=l[4]&&_e(l);return{c(){t&&t.c(),e=Z()},m(n,s){t&&t.m(n,s),I(n,e,s),o=!0},p(n,s){n[4]?t?(t.p(n,s),s&16&&u(t,1)):(t=_e(n),t.c(),u(t,1),t.m(e.parentNode,e)):t&&(H(),m(t,1,1,()=>{t=null}),D())},i(n){o||(u(t),o=!0)},o(n){m(t),o=!1},d(n){t&&t.d(n),n&&$(e)}}}function ze(l){let e,o,t,n;const s=[Pe,Ce],i=[];function c(b,p){return b[2]?0:1}return e=c(l),o=i[e]=s[e](l),{c(){o.c(),t=Z()},m(b,p){i[e].m(b,p),I(b,t,p),n=!0},p(b,[p]){let _=e;e=c(b),e===_?i[e].p(b,p):(H(),m(i[_],1,1,()=>{i[_]=null}),D(),o=i[e],o?o.p(b,p):(o=i[e]=s[e](b),o.c()),u(o,1),o.m(t.parentNode,t))},i(b){n||(u(o),n=!0)},o(b){m(o),n=!1},d(b){i[e].d(b),b&&$(t)}}}function Ne(l,e,o){let{$$slots:t={},$$scope:n}=e;const s=ve();let{type:i="button"}=e,{variant:c="primary"}=e,{href:b=""}=e,{small:p=!1}=e,{icon:_=""}=e,{iconPosition:k="before"}=e,{disabled:d=!1}=e,{hideLabel:r=!1}=e,{arialabel:f=""}=e;const g=y=>s("click",y),O=y=>s("click",y);return l.$$set=y=>{"type"in y&&o(0,i=y.type),"variant"in y&&o(1,c=y.variant),"href"in y&&o(2,b=y.href),"small"in y&&o(3,p=y.small),"icon"in y&&o(4,_=y.icon),"iconPosition"in y&&o(5,k=y.iconPosition),"disabled"in y&&o(6,d=y.disabled),"hideLabel"in y&&o(7,r=y.hideLabel),"arialabel"in y&&o(8,f=y.arialabel),"$$scope"in y&&o(10,n=y.$$scope)},[i,c,b,p,_,k,d,r,f,s,n,t,g,O]}class Q extends J{constructor(e){super(),K(this,e,Ne,ze,U,{type:0,variant:1,href:2,small:3,icon:4,iconPosition:5,disabled:6,hideLabel:7,arialabel:8})}}Q.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"type",description:'{"button"|"sumbit"|"reset"}'}],visibility:"public",description:"Type of button",name:"type",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"button"|"sumbit"|"reset"',type:[{kind:"type",text:'"button"',type:'"button"'},{kind:"type",text:'"sumbit"',type:'"sumbit"'},{kind:"type",text:'"reset"',type:'"reset"'}]},defaultValue:"button"},{keywords:[{name:"type",description:'{"primary"|"secondary"|"ghost"}'}],visibility:"public",description:"Style variant of button",name:"variant",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"primary"|"secondary"|"ghost"',type:[{kind:"type",text:'"primary"',type:'"primary"'},{kind:"type",text:'"secondary"',type:'"secondary"'},{kind:"type",text:'"ghost"',type:'"ghost"'}]},defaultValue:"primary"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Href of button (renders button as a link)",name:"href",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Make button smaller",name:"small",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:'Icon on button, eg. "arrow", "search"',name:"icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:'{"before"|"after"}'}],visibility:"public",description:"Position of icon",name:"iconPosition",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"before"|"after"',type:[{kind:"type",text:'"before"',type:'"before"'},{kind:"type",text:'"after"',type:'"after"'}]},defaultValue:"before"},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Show button as disabled",name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Visually hide the button text (for icon-only buttons)",name:"hideLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"aria label for button",name:"arialabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"click"}],slots:[{keywords:[],visibility:"public",description:"",name:"icon"},{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function Oe(l){let e=l[0].text+"",o;return{c(){o=we(e)},m(t,n){I(t,o,n)},p(t,n){n&1&&e!==(e=t[0].text+"")&&Ie(o,e)},d(t){t&&$(o)}}}function je(l){let e,o,t;const n=[l[0]];let s={$$slots:{default:[Oe]},$$scope:{ctx:l}};for(let i=0;i<n.length;i+=1)s=ye(s,n[i]);return o=new Q({props:s}),{c(){var i;e=P("div"),B(o.$$.fragment),F(e,"padding","12px"),F(e,"background",((i=l[0])==null?void 0:i.variant)==="ghost"?"var(--ons-color-ocean-blue)":null)},m(i,c){I(i,e,c),L(o,e,null),t=!0},p(i,c){var p;const b=c&1?ke(n,[ge(i[0])]):{};c&3&&(b.$$scope={dirty:c,ctx:i}),o.$set(b),c&1&&F(e,"background",((p=i[0])==null?void 0:p.variant)==="ghost"?"var(--ons-color-ocean-blue)":null)},i(i){t||(u(o.$$.fragment,i),t=!0)},o(i){m(o.$$.fragment,i),t=!1},d(i){i&&$(e),A(o)}}}function qe(l){let e,o,t,n,s,i,c,b,p,_,k,d,r,f,g,O,y,W,R,E;const j=[{title:"Inputs/Button"},{component:Q},{argTypes:{type:{options:["button","submit","reset"],control:{type:"select"}},variant:{options:["primary","secondary","ghost"],control:{type:"select"}},icon:{options:["","arrow","search","download","tick","print","externalLink"],control:{type:"select"}},iconPosition:{options:["before","after"],control:{type:"select"}}}},te(ne)];let Y={};for(let a=0;a<j.length;a+=1)Y=ye(Y,j[a]);return e=new Be({props:Y}),t=new Le({props:{$$slots:{default:[je,({args:a})=>({0:a}),({args:a})=>a?1:0]},$$scope:{ctx:l}}}),s=new C({props:{name:"Default",args:{text:"Primary button"}}}),c=new C({props:{name:"Link",args:{text:"Button-styled link",href:"#"}}}),p=new C({props:{name:"Secondary",args:{text:"Secondary button",variant:"secondary"}}}),k=new C({props:{name:"Ghost",args:{text:"Ghost button",variant:"ghost"}}}),r=new C({props:{name:"Small",args:{text:"Small button",small:!0}}}),g=new C({props:{name:"Icon before",args:{text:"Download",icon:"download"}}}),y=new C({props:{name:"Icon after",args:{text:"Continue",icon:"arrow",iconPosition:"after"}}}),R=new C({props:{name:"Icon only, hidden text",args:{text:"Search",icon:"search",hideLabel:!0}}}),{c(){B(e.$$.fragment),o=S(),B(t.$$.fragment),n=S(),B(s.$$.fragment),i=S(),B(c.$$.fragment),b=S(),B(p.$$.fragment),_=S(),B(k.$$.fragment),d=S(),B(r.$$.fragment),f=S(),B(g.$$.fragment),O=S(),B(y.$$.fragment),W=S(),B(R.$$.fragment)},m(a,h){L(e,a,h),I(a,o,h),L(t,a,h),I(a,n,h),L(s,a,h),I(a,i,h),L(c,a,h),I(a,b,h),L(p,a,h),I(a,_,h),L(k,a,h),I(a,d,h),L(r,a,h),I(a,f,h),L(g,a,h),I(a,O,h),L(y,a,h),I(a,W,h),L(R,a,h),E=!0},p(a,[h]){const he=h&0?ke(j,[j[0],h&0&&{component:Q},j[2],h&0&&ge(te(ne))]):{};e.$set(he);const X={};h&3&&(X.$$scope={dirty:h,ctx:a}),t.$set(X)},i(a){E||(u(e.$$.fragment,a),u(t.$$.fragment,a),u(s.$$.fragment,a),u(c.$$.fragment,a),u(p.$$.fragment,a),u(k.$$.fragment,a),u(r.$$.fragment,a),u(g.$$.fragment,a),u(y.$$.fragment,a),u(R.$$.fragment,a),E=!0)},o(a){m(e.$$.fragment,a),m(t.$$.fragment,a),m(s.$$.fragment,a),m(c.$$.fragment,a),m(p.$$.fragment,a),m(k.$$.fragment,a),m(r.$$.fragment,a),m(g.$$.fragment,a),m(y.$$.fragment,a),m(R.$$.fragment,a),E=!1},d(a){A(e,a),a&&$(o),A(t,a),a&&$(n),A(s,a),a&&$(i),A(c,a),a&&$(b),A(p,a),a&&$(_),A(k,a),a&&$(d),A(r,a),a&&$(f),A(g,a),a&&$(O),A(y,a),a&&$(W),A(R,a)}}}class Ee extends J{constructor(e){super(),K(this,e,null,qe,U,{})}}const M=$e(Ee,{meta:{title:"Inputs/Button"},stories:{"tpl:default":{storyId:"inputs-button--default",name:"default",template:!0,source:`<div
  style:padding="12px"
  style:background="{args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}"
>
  <Button {...args}>{args.text}</Button>
</div>`,hasArgs:!0},Default:{storyId:"inputs-button--default",name:"Default",template:!1,hasArgs:!1},Link:{storyId:"inputs-button--link",name:"Link",template:!1,hasArgs:!1},Secondary:{storyId:"inputs-button--secondary",name:"Secondary",template:!1,hasArgs:!1},Ghost:{storyId:"inputs-button--ghost",name:"Ghost",template:!1,hasArgs:!1},Small:{storyId:"inputs-button--small",name:"Small",template:!1,hasArgs:!1},IconBefore:{storyId:"inputs-button--icon-before",name:"Icon before",template:!1,hasArgs:!1},IconAfter:{storyId:"inputs-button--icon-after",name:"Icon after",template:!1,hasArgs:!1},IconOnlyHiddenText:{storyId:"inputs-button--icon-only-hidden-text",name:"Icon only, hidden text",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Button","withComponentDocs"]}),Ye=M.meta,Fe=["Default","Link","Secondary","Ghost","Small","IconBefore","IconAfter","IconOnlyHiddenText"],Je=M.stories.Default,Ke=M.stories.Link,Ue=M.stories.Secondary,Xe=M.stories.Ghost,xe=M.stories.Small,et=M.stories.IconBefore,tt=M.stories.IconAfter,nt=M.stories.IconOnlyHiddenText;export{Je as Default,Xe as Ghost,tt as IconAfter,et as IconBefore,nt as IconOnlyHiddenText,Ke as Link,Ue as Secondary,xe as Small,Fe as __namedExportsOrder,Ye as default};
//# sourceMappingURL=Button.stories-2270d467.js.map
