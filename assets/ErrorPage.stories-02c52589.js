import{S as T,i as A,s as C,x as g,L as y,a as m,P as h,z as k,d as c,A as q,Q as L,w as _,R as N,p as F,j as $,m as w,k as j,l as H,b,t as v,n as P,y as z}from"./index-9473b494.js";import{p as B,w as x,M as Q,T as R,S as I}from"./collect-stories-458d6889.js";const M=`An error page component that will display generic error messages for "page not found" (404) or other errors.

Based on [this ONS Design System pattern](https://service-manual.ons.gov.uk/design-system/patterns/error-status-pages).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { page } from "$app/stores";
  import { ErrorPage } from "@onsvisual/svelte-components";
<\/script>

<ErrorPage page="{page}" />
\`\`\`
`;function G(f){let s,n=(f[2]||"Sorry, there is a problem with the service")+"",r,l,p;return{c(){s=g("h1"),r=L(n),l=_(),p=g("p"),p.innerHTML='If you continue to experience problems with this service, please <a href="https://www.ons.gov.uk/feedback">contact us</a>.'},m(t,o){m(t,s,o),h(s,r),m(t,l,o),m(t,p,o)},p(t,o){o&4&&n!==(n=(t[2]||"Sorry, there is a problem with the service")+"")&&N(r,n)},d(t){t&&c(s),t&&c(l),t&&c(p)}}}function J(f){let s,n=(f[2]||"Page not found")+"",r,l,p,t,o,i,u;return{c(){s=g("h1"),r=L(n),l=_(),p=g("p"),p.textContent="If you entered a web address, check it is correct.",t=_(),o=g("p"),o.textContent="If you pasted the web address, check you copied the whole address.",i=_(),u=g("p"),u.innerHTML='If the web address is correct or you selected a link or button, <a href="https://www.ons.gov.uk/feedback">contact us</a> for more help.'},m(a,e){m(a,s,e),h(s,r),m(a,l,e),m(a,p,e),m(a,t,e),m(a,o,e),m(a,i,e),m(a,u,e)},p(a,e){e&4&&n!==(n=(a[2]||"Page not found")+"")&&N(r,n)},d(a){a&&c(s),a&&c(l),a&&c(p),a&&c(t),a&&c(o),a&&c(i),a&&c(u)}}}function K(f){let s,n,r,l;function p(i,u){return i[1]===404?J:G}let t=p(f),o=t(f);return{c(){s=g("div"),n=g("div"),r=g("div"),l=g("main"),o.c(),y(l,"id","main-content"),y(l,"class","ons-page__main"),y(r,"class","ons-grid__col ons-col-12@m"),y(n,"class","ons-grid"),y(s,"class","ons-page__container ons-container")},m(i,u){m(i,s,u),h(s,n),h(n,r),h(r,l),o.m(l,null)},p(i,[u]){t===(t=p(i))&&o?o.p(i,u):(o.d(1),o=t(i),o&&(o.c(),o.m(l,null)))},i:k,o:k,d(i){i&&c(s),o.d()}}}function U(f,s,n){var u;let r,l=k,p=()=>(l(),l=q(t,a=>n(3,r=a)),t);f.$$.on_destroy.push(()=>l());let{page:t=null}=s;p();let{status:o=r?r==null?void 0:r.status:null}=s,{message:i=r?(u=r==null?void 0:r.error)==null?void 0:u.message:""}=s;return f.$$set=a=>{"page"in a&&p(n(0,t=a.page)),"status"in a&&n(1,o=a.status),"message"in a&&n(2,i=a.message)},[t,o,i]}class D extends T{constructor(s){super(),A(this,s,U,K,C,{page:0,status:1,message:2})}}function V(f){let s,n,r;const l=[f[0]];let p={};for(let t=0;t<l.length;t+=1)p=F(p,l[t]);return n=new D({props:p}),{c(){s=g("div"),$(n.$$.fragment),z(s,"padding","12px")},m(t,o){m(t,s,o),w(n,s,null),r=!0},p(t,o){const i=o&1?j(l,[H(t[0])]):{};n.$set(i)},i(t){r||(b(n.$$.fragment,t),r=!0)},o(t){v(n.$$.fragment,t),r=!1},d(t){t&&c(s),P(n)}}}function W(f){let s,n,r,l,p,t,o,i;const u=[{title:"Layout/ErrorPage"},{component:D},{argTypes:{}},x(M)];let a={};for(let e=0;e<u.length;e+=1)a=F(a,u[e]);return s=new Q({props:a}),r=new R({props:{$$slots:{default:[V,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:f}}}),p=new I({props:{name:"Default",args:{}}}),o=new I({props:{name:"Page not found",args:{status:404}}}),{c(){$(s.$$.fragment),n=_(),$(r.$$.fragment),l=_(),$(p.$$.fragment),t=_(),$(o.$$.fragment)},m(e,d){w(s,e,d),m(e,n,d),w(r,e,d),m(e,l,d),w(p,e,d),m(e,t,d),w(o,e,d),i=!0},p(e,[d]){const O=d&0?j(u,[u[0],d&0&&{component:D},u[2],d&0&&H(x(M))]):{};s.$set(O);const S={};d&3&&(S.$$scope={dirty:d,ctx:e}),r.$set(S)},i(e){i||(b(s.$$.fragment,e),b(r.$$.fragment,e),b(p.$$.fragment,e),b(o.$$.fragment,e),i=!0)},o(e){v(s.$$.fragment,e),v(r.$$.fragment,e),v(p.$$.fragment,e),v(o.$$.fragment,e),i=!1},d(e){P(s,e),e&&c(n),P(r,e),e&&c(l),P(p,e),e&&c(t),P(o,e)}}}class X extends T{constructor(s){super(),A(this,s,null,W,C,{})}}const E=B(X,{meta:{title:"Layout/ErrorPage"},stories:{"tpl:default":{storyId:"layout-errorpage--default",name:"default",template:!0,source:`<div style:padding="12px">
  <ErrorPage {...args} />
</div>`,hasArgs:!0},Default:{storyId:"layout-errorpage--default",name:"Default",template:!1,hasArgs:!1},PageNotFound:{storyId:"layout-errorpage--page-not-found",name:"Page not found",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","ErrorPage","withComponentDocs"]}),ee=E.meta,te=["Default","PageNotFound"],se=E.stories.Default,re=E.stories.PageNotFound;export{se as Default,re as PageNotFound,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=ErrorPage.stories-02c52589.js.map
