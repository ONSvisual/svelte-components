import{S as L,i as P,s as z,e as C,w as B,P as E,a as k,g as H,t as m,c as I,b as y,d as b,a3 as F,q as V,u as j,r as T,v as q,x as S,L as p,a4 as D,y as G}from"./index-98bb0bde.js";const N={light:{text:"#222",muted:"#777",hinted:"#e2e2e3",pale:"#f0f0f0",background:"#fff",link:"#206095","link-hover":"#003c57"},dark:{text:"#fff",muted:"#bbb",hinted:"#444",pale:"#333",background:"#222",link:"#f5f5f6","link-hover":"#f5f5f6"},lightblue:{text:"#206095",muted:"#707070",pale:"#f0f0f0",background:"rgb(233, 239, 244)",link:"#206095","link-hover":"#003c57"}};function A(o){let t,n=`<style>${o[4]}</style>`,e;return{c(){t=new F(!1),e=C(),t.a=e},m(l,i){t.m(n,l,i),k(l,e,i)},p(l,i){i&16&&n!==(n=`<style>${l[4]}</style>`)&&t.p(n)},d(l){l&&b(e),l&&t.d()}}}function J(o){let t;const n=o[9].default,e=V(n,o,o[8],null);return{c(){e&&e.c()},m(l,i){e&&e.m(l,i),t=!0},p(l,i){e&&e.p&&(!t||i&256)&&j(e,n,l,l[8],t?q(n,l[8],i,null):T(l[8]),null)},i(l){t||(y(e,l),t=!0)},o(l){m(e,l),t=!1},d(l){e&&e.d(l)}}}function K(o){let t,n,e,l,i,s;const r=[Q,M],_=[];function d(f,a){return f[3]?0:1}return n=d(o),e=_[n]=r[n](o),{c(){t=S("div"),e.c(),p(t,"id",o[0]),p(t,"class",l=D(o[1]?`theme-wrapper ${o[1]}`:"theme-wrapper")+" svelte-l14fl1"),p(t,"style",i=o[4]+" display: contents")},m(f,a){k(f,t,a),_[n].m(t,null),s=!0},p(f,a){let c=n;n=d(f),n===c?_[n].p(f,a):(H(),m(_[c],1,1,()=>{_[c]=null}),I(),e=_[n],e?e.p(f,a):(e=_[n]=r[n](f),e.c()),y(e,1),e.m(t,null)),(!s||a&1)&&p(t,"id",f[0]),(!s||a&2&&l!==(l=D(f[1]?`theme-wrapper ${f[1]}`:"theme-wrapper")+" svelte-l14fl1"))&&p(t,"class",l),(!s||a&16&&i!==(i=f[4]+" display: contents"))&&p(t,"style",i)},i(f){s||(y(e),s=!0)},o(f){m(e),s=!1},d(f){f&&b(t),_[n].d()}}}function M(o){let t,n;const e=o[9].default,l=V(e,o,o[8],null);return{c(){t=S("div"),l&&l.c(),p(t,"class","theme-internal svelte-l14fl1")},m(i,s){k(i,t,s),l&&l.m(t,null),n=!0},p(i,s){l&&l.p&&(!n||s&256)&&j(l,e,i,i[8],n?q(e,i[8],s,null):T(i[8]),null)},i(i){n||(y(l,i),n=!0)},o(i){m(l,i),n=!1},d(i){i&&b(t),l&&l.d(i)}}}function Q(o){let t,n,e;const l=o[9].default,i=V(l,o,o[8],null);return{c(){t=S("div"),n=S("div"),i&&i.c(),p(n,"class","theme-internal svelte-l14fl1"),p(t,"class","client-css-override"),G(t,"display","contents")},m(s,r){k(s,t,r),E(t,n),i&&i.m(n,null),e=!0},p(s,r){i&&i.p&&(!e||r&256)&&j(i,l,s,s[8],e?q(l,s[8],r,null):T(s[8]),null)},i(s){e||(y(i,s),e=!0)},o(s){m(i,s),e=!1},d(s){s&&b(t),i&&i.d(s)}}}function R(o){let t,n,e,l,i,s,r=o[2]&&A(o);const _=[K,J],d=[];function f(a,c){return a[4]&&!a[2]?0:1}return e=f(o),l=d[e]=_[e](o),{c(){r&&r.c(),t=C(),n=B(),l.c(),i=C()},m(a,c){r&&r.m(document.head,null),E(document.head,t),k(a,n,c),d[e].m(a,c),k(a,i,c),s=!0},p(a,[c]){a[2]?r?r.p(a,c):(r=A(a),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null);let h=e;e=f(a),e===h?d[e].p(a,c):(H(),m(d[h],1,1,()=>{d[h]=null}),I(),l=d[e],l?l.p(a,c):(l=d[e]=_[e](a),l.c()),y(l,1),l.m(i.parentNode,i))},i(a){s||(y(l),s=!0)},o(a){m(l),s=!1},d(a){r&&r.d(a),b(t),a&&b(n),d[e].d(a),a&&b(i)}}}function U(o,t,n){let e,{$$slots:l={},$$scope:i}=t,{id:s=null}=t,{cls:r=null}=t,{global:_=!1}=t,{theme:d=null}=t,{overrides:f=null}=t,{background:a=null}=t,{allowClientOverrides:c=!1}=t;function h(u,O,g){if(u){const w=N[u]||N.light;return O&&Object.keys(O).forEach(v=>w[v]=O[v]),g&&(w.background=g),Object.keys(w).map(v=>`--${v}: ${w[v]};`).join("")}else if(g)return`--background:${g};`;return null}return o.$$set=u=>{"id"in u&&n(0,s=u.id),"cls"in u&&n(1,r=u.cls),"global"in u&&n(2,_=u.global),"theme"in u&&n(5,d=u.theme),"overrides"in u&&n(6,f=u.overrides),"background"in u&&n(7,a=u.background),"allowClientOverrides"in u&&n(3,c=u.allowClientOverrides),"$$scope"in u&&n(8,i=u.$$scope)},o.$$.update=()=>{o.$$.dirty&224&&n(4,e=h(d,f,a))},[s,r,_,c,e,d,f,a,i,l]}class W extends L{constructor(t){super(),P(this,t,U,R,z,{id:0,cls:1,global:2,theme:5,overrides:6,background:7,allowClientOverrides:3})}}W.__docgen={version:3,name:"Theme.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets the unique ID of the container",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets a css class for the container",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Sets the body background to match this theme (only use this at the top level)",name:"global",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"overrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the base theme background (accepts any valid CSS background value)",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows client imported CSS for embeddable content",name:"allowClientOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{W as T};
//# sourceMappingURL=Theme-b4ca58b3.js.map
