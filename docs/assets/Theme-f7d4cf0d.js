import{S as H,i as A,s as D,e as S,z as F,B as G,a as g,g as I,t as p,c as J,b as w,d as k,$ as K,a3 as v,a0 as L,a5 as M,q as O,u as P,r as z,v as B,w as Q,x as T}from"./index-9c03537d.js";import{a as R}from"./collect-stories-d3cc164c.js";import{t as C}from"./themes-9c401ccc.js";function N(a){let n,s=`<style>body{background:${a[1]}}</style>`,t;return{c(){n=new M(!1),t=S(),n.a=t},m(e,l){n.m(s,e,l),g(e,t,l)},p(e,l){l&2&&s!==(s=`<style>body{background:${e[1]}}</style>`)&&n.p(s)},d(e){e&&k(t),e&&n.d()}}}function U(a){let n;const s=a[10].default,t=O(s,a,a[9],null);return{c(){t&&t.c()},m(e,l){t&&t.m(e,l),n=!0},p(e,l){t&&t.p&&(!n||l&512)&&P(t,s,e,e[9],n?B(s,e[9],l,null):z(e[9]),null)},i(e){n||(w(t,e),n=!0)},o(e){p(t,e),n=!1},d(e){t&&t.d(e)}}}function V(a){let n,s;const t=a[10].default,e=O(t,a,a[9],null);return{c(){n=Q("div"),e&&e.c(),T(n,"class","theme-wrapper svelte-jueyxc"),T(n,"style",a[2])},m(l,r){g(l,n,r),e&&e.m(n,null),s=!0},p(l,r){e&&e.p&&(!s||r&512)&&P(e,t,l,l[9],s?B(t,l[9],r,null):z(l[9]),null),(!s||r&4)&&T(n,"style",l[2])},i(l){s||(w(e,l),s=!0)},o(l){p(e,l),s=!1},d(l){l&&k(n),e&&e.d(l)}}}function W(a){let n,s,t,e,l,r,f=a[0]&&a[1]&&N(a);const b=[V,U],_=[];function c(o,i){return o[2]?0:1}return t=c(a),e=_[t]=b[t](a),{c(){f&&f.c(),n=S(),s=F(),e.c(),l=S()},m(o,i){f&&f.m(document.head,null),G(document.head,n),g(o,s,i),_[t].m(o,i),g(o,l,i),r=!0},p(o,[i]){o[0]&&o[1]?f?f.p(o,i):(f=N(o),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null);let m=t;t=c(o),t===m?_[t].p(o,i):(I(),p(_[m],1,1,()=>{_[m]=null}),J(),e=_[t],e?e.p(o,i):(e=_[t]=b[t](o),e.c()),w(e,1),e.m(l.parentNode,l))},i(o){r||(w(e),r=!0)},o(o){p(e),r=!1},d(o){f&&f.d(o),k(n),o&&k(s),_[t].d(o),o&&k(l)}}}function X(a,n,s){var q;let t,e,l,{$$slots:r={},$$scope:f}=n,{global:b=!1}=n,_=b?null:K("theme");v(a,_,u=>s(8,l=u));let{theme:c=null}=n,{overrides:o=null}=n,{background:i=(o==null?void 0:o.background)||((q=C[c])==null?void 0:q.background)||null}=n;const m=R(c||l);v(a,m,u=>s(7,e=u)),L("theme",m);function E(u,j,h){if(u&&u!==l){const y=C[u]||C.light;return j&&Object.keys(j).forEach(d=>y[d]=j[d]),h&&(y.background=h),Object.keys(y).map(d=>`--${d}: ${y[d]};`).join("")}else if(h)return`--background:${h}`;return null}return a.$$set=u=>{"global"in u&&s(0,b=u.global),"theme"in u&&s(5,c=u.theme),"overrides"in u&&s(6,o=u.overrides),"background"in u&&s(1,i=u.background),"$$scope"in u&&s(9,f=u.$$scope)},a.$$.update=()=>{a.$$.dirty&288&&m.set(c||l),a.$$.dirty&194&&s(2,t=E(e,o,i))},[b,i,t,_,m,c,o,e,l,f,r]}class $ extends H{constructor(n){super(),A(this,n,X,W,D,{global:0,theme:5,overrides:6,background:1})}}export{$ as T};
//# sourceMappingURL=Theme-f7d4cf0d.js.map
