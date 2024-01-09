import{S as se,i as oe,s as ae,e as de,a as G,N as K,d as W,F as ue,z as fe,o as me,x as d,C as c,y as X,I as M,w,U as F,H as s,Q as q,J as pe,ac as Z,T as _e,p as ie,j as O,m as V,k as le,l as ce,b as H,t as N,n as U}from"./index-8607ceaf.js";import{p as ye,w as ee,M as ge,T as he,S as ke}from"./collect-stories-45ecfa9a.js";const te=`This component will display a cookie banner and export a function that allows you to push events to the Google Analytics dataLayer array.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { AnalyticsBanner, AnalyticsEvent } from "@onsvisual/svelte-components";

  // Example of an analytics event triggered by another event "e"
  function doAnalyticsEvent(e) {
    // Assumes that e.detail is in the form {key1: "value1", key2: "value2", etc}
    AnalyticsEvent({event: "eventName", ...e.detail});
  }
<\/script>

<AnalyticsBanner analyticsId="{id_string}" />
<!-- Rest of page content -->
\`\`\`
`;function ne(a){let e;function t(i,u){return i[3]?we:be}let n=t(a),l=n(a);return{c(){e=d("div"),l.c(),c(e,"class","ons-cookies-banner svelte-1syey1g"),c(e,"role","region"),c(e,"aria-label","Cookies banner"),X(e,"display",a[2]?"block":null)},m(i,u){G(i,e,u),l.m(e,null)},p(i,u){n===(n=t(i))&&l?l.p(i,u):(l.d(1),l=n(i),l&&(l.c(),l.m(e,null))),u&4&&X(e,"display",i[2]?"block":null)},d(i){i&&W(e),l.d()}}}function we(a){let e,t,n,l,i,u=a[7](a[4])+"",m,y,o,f=a[7]("You can")+"",A,v,B,j,D=a[7]("at any time")+"",T,P,L,g,k,h,C,I,r;return{c(){e=d("div"),t=d("div"),n=d("div"),l=d("p"),i=d("span"),m=M(u),y=w(),o=d("span"),A=M(f),v=w(),B=d("a"),B.textContent=`${a[7]("change your cookie preferences")}`,j=w(),T=M(D),P=M("."),L=w(),g=d("div"),k=d("button"),h=d("span"),C=d("span"),C.textContent=`${a[7]("Hide")}`,c(B,"href","/cookies"),c(o,"class","ons-cookies-banner__preferences-text"),c(l,"class","ons-cookies-banner__desc ons-u-mb-no@s ons-u-mr-s@s"),c(n,"class","ons-grid__col ons-grid__col--flex ons-col-auto ons-u-flex-shrink@s"),c(C,"class","ons-btn__text"),c(h,"class","ons-btn__inner"),c(k,"type","button"),c(k,"class","ons-btn ons-btn--secondary ons-btn--small ons-js-hide-button"),c(g,"class","ons-grid__col"),c(t,"class","ons-grid ons-grid--flex ons-grid--between ons-grid--gutterless ons-grid--no-wrap@s ons-grid--vertical-center"),c(e,"class","ons-container ons-cookies-banner__confirmation svelte-1syey1g"),F(e,"ons-page__container--wider",a[1]==="wider")},m(p,_){G(p,e,_),s(e,t),s(t,n),s(n,l),s(l,i),s(i,m),s(l,y),s(l,o),s(o,A),s(o,v),s(o,B),s(o,j),s(o,T),s(o,P),s(t,L),s(t,g),s(g,k),s(k,h),s(h,C),I||(r=q(k,"click",a[14]),I=!0)},p(p,_){_&16&&u!==(u=p[7](p[4])+"")&&pe(m,u),_&2&&F(e,"ons-page__container--wider",p[1]==="wider")},d(p){p&&W(e),I=!1,r()}}}function be(a){let e,t,n,l,i,u,m,y,o,f,A=a[7]("We would like to set")+"",v,B,j,D,T=a[7]("to remember your settings and understand how you use the site. This helps us to improve our services.")+"",P,L,g,k,h,C,I,r,p,_,b,S,R,E,$,J,x;return{c(){e=d("form"),t=d("div"),n=d("div"),l=d("div"),i=d("h2"),i.textContent=`${a[7]("Cookies on ons.gov.uk")}`,u=w(),m=d("div"),y=d("p"),y.textContent=`${a[7]("Cookies are small files stored on your device when you visit a website. We use some essential cookies to make this website work.")}`,o=w(),f=d("p"),v=M(A),B=w(),j=d("a"),j.textContent=`${a[7]("additional cookies")}`,D=w(),P=M(T),L=w(),g=d("div"),k=d("div"),h=d("button"),C=d("span"),I=d("span"),I.textContent=`${a[7]("Accept additional cookies")}`,r=w(),p=d("div"),_=d("button"),b=d("span"),S=d("span"),S.textContent=`${a[7]("Reject additional cookies")}`,R=w(),E=d("div"),$=d("a"),$.textContent=`${a[7]("View cookies")}`,c(i,"class","ons-cookies-banner__title ons-u-mb-xs"),c(j,"href","/cookies"),c(m,"class","ons-cookies-banner__statement"),c(l,"class","ons-grid__col ons-col-8@m"),c(n,"class","ons-grid"),c(I,"class","ons-btn__text"),c(C,"class","ons-btn__inner"),c(h,"type","submit"),c(h,"class","ons-btn ons-btn--small ons-js-accept-cookies ons-cookies-banner__btn"),c(h,"data-button","accept"),c(k,"class","ons-grid__col"),c(S,"class","ons-btn__text"),c(b,"class","ons-btn__inner"),c(_,"type","button"),c(_,"class","ons-btn ons-btn--small ons-js-reject-cookies ons-cookies-banner__btn"),c(_,"data-button","reject"),c(p,"class","ons-grid__col"),c($,"class","ons-cookies-banner__link"),c($,"href","/cookies"),c(E,"class","ons-grid__col"),c(g,"class","ons-grid ons-grid--flex ons-u-mt-s"),c(t,"class","ons-container ons-cookies-banner__primary svelte-1syey1g"),F(t,"ons-page__container--wider",a[1]==="wider"),c(e,"action","/cookies/accept-all"),c(e,"method","GET"),c(e,"id","global-cookie-message"),c(e,"aria-label","cookie banner")},m(Y,Q){G(Y,e,Q),s(e,t),s(t,n),s(n,l),s(l,i),s(l,u),s(l,m),s(m,y),s(m,o),s(m,f),s(f,v),s(f,B),s(f,j),s(f,D),s(f,P),s(t,L),s(t,g),s(g,k),s(k,h),s(h,C),s(C,I),s(g,r),s(g,p),s(p,_),s(_,b),s(b,S),s(g,R),s(g,E),s(E,$),J||(x=[q(h,"click",Z(a[12])),q(_,"click",Z(a[13]))],J=!0)},p(Y,Q){Q&2&&F(t,"ons-page__container--wider",Y[1]==="wider")},d(Y){Y&&W(e),J=!1,_e(x)}}}function ve(a){let e,t=a[2]&&!a[0]&&ne(a);return{c(){t&&t.c(),e=de()},m(n,l){t&&t.m(n,l),G(n,e,l)},p(n,[l]){n[2]&&!n[0]?t?t.p(n,l):(t=ne(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:K,o:K,d(n){t&&t.d(n),n&&W(e)}}}function Ce(a){window!=null&&window.dataLayer&&window.dataLayer.push(a)}function Ae(){return-1<document.cookie.indexOf("cookies_preferences_set=true")}function Be(){var a=document.cookie.match(new RegExp("(^|;) ?cookies_policy=([^;]*)(;|$)"));if(a){var e=decodeURIComponent(a[2]),t=JSON.parse(e);return t.usage}return!1}function je(a,e,t){let n;const l=ue("page");fe(a,l,r=>t(11,n=r));let{analyticsId:i="GTM-MBCBVQS"}=e,{analyticsProps:u={}}=e,{hideBanner:m=!1}=e,{usageCookies:y=!1}=e,{width:o="wide"}=e,f,A=!1,v=!1,B="",j=n&&n.url.host.startsWith("cy")?"cy":"en",D=null;function T(r){let p=31536e3,_=window.location.hostname,b=!0,S=`%7B%22essential%22%3Atrue%2C%22usage%22%3A${r=="all"?"true":"false"}%7D`,R="/";document.cookie=`cookies_preferences_set=${b};max-age=${p};domain=${_};path=${R};`,document.cookie=`cookies_policy=${S};max-age=${p};domain=${_};path=${R};`,t(4,B=`You have ${r=="all"?"accepted":"rejected"} all additional cookies.`),r=="all"&&t(8,y=!0),t(3,v=!0),r=="all"&&P()}function P(){console.log("initialising analytics"),window.dataLayer=[{analyticsOptOut:!1,"gtm.whitelist":["google","hjtc","lcl"],"gtm.blacklist":["customScripts","sp","adm","awct","k","d","j"],...u}],function(r,p,_,b,S){r[b]=r[b]||[],r[b].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var R=p.head,E=p.createElement(_),$=b!="dataLayer"?"&l="+b:"";E.async=!0,E.src="https://www.googletagmanager.com/gtm.js?id="+S+$,R.appendChild(E)}(window,document,"script","dataLayer",i),n&&(D=`${n.url.href}`.replace(n.url.hash,""))}function L(r){if(r&&D){const p=`${r.url.href}`.replace(r.url.hash,"");p!==D&&(D=p,Ce({event:"pageView",pageURL:D,...u}))}}me(()=>{f=!0,l||(j=document.location.host.startsWith("cy")?"cy":"en"),t(2,A=!Ae()),t(8,y=Be()),y&&f&&P()});const g={"Cookies on ons.gov.uk":"Cwcis ar ons.gov.uk","Cookies are small files stored on your device when you visit a website. We use some essential cookies to make this website work.":"Ffeiliau bach a gaiff eu storio ar eich dyfais pan fyddwch yn mynd ar wefan yw cwcis. Rydym ni’n defnyddio rhai cwcis hanfodol i wneud i’r wefan hon weithio.","We would like to set":"Hoffem osod","additional cookies":"cwcis ychwanegol","to remember your settings and understand how you use the site. This helps us to improve our services.":"er mwyn cofio eich gosodiadau a deall sut rydych chi’n defnyddio’r wefan. Mae hyn yn ein helpu ni i wella ein gwasanaethau.","Accept additional cookies":"Derbyn cwcis ychwanegol","Reject additional cookies":"Gwrthod cwcis ychwanegol","View cookies":"Gweld cwcis","You have accepted all additional cookies.":"Rydych chi wedi derbyn yr holl gwcis ychwanegol.","You have rejected all additional cookies.":"Rydych chi wedi gwrthod yr holl gwcis ychwanegol.","You can":"Gallwch chi","change your cookie preferences":"newid eich dewisiadau o ran cwcis","at any time.":"ar unrhyw adeg.",Hide:"Cuddio"},k=r=>j=="cy"&&g[r]?g[r]:r,h=()=>T("all"),C=()=>T("reject"),I=()=>t(2,A=!1);return a.$$set=r=>{"analyticsId"in r&&t(9,i=r.analyticsId),"analyticsProps"in r&&t(10,u=r.analyticsProps),"hideBanner"in r&&t(0,m=r.hideBanner),"usageCookies"in r&&t(8,y=r.usageCookies),"width"in r&&t(1,o=r.width)},a.$$.update=()=>{a.$$.dirty&2048&&L(n)},[m,o,A,v,B,l,T,k,y,i,u,n,h,C,I]}class z extends se{constructor(e){super(),oe(this,e,je,ve,ae,{analyticsId:9,analyticsProps:10,hideBanner:0,usageCookies:8,width:1})}}function De(a){let e,t;const n=[a[0]];let l={};for(let i=0;i<n.length;i+=1)l=ie(l,n[i]);return e=new z({props:l}),{c(){O(e.$$.fragment)},m(i,u){V(e,i,u),t=!0},p(i,u){const m=u&1?le(n,[ce(i[0])]):{};e.$set(m)},i(i){t||(H(e.$$.fragment,i),t=!0)},o(i){N(e.$$.fragment,i),t=!1},d(i){U(e,i)}}}function Ie(a){let e,t,n,l,i,u;const m=[{title:"Layout/AnalyticsBanner"},{component:z},{argTypes:{}},ee(te)];let y={};for(let o=0;o<m.length;o+=1)y=ie(y,m[o]);return e=new ge({props:y}),n=new he({props:{$$slots:{default:[De,({args:o})=>({0:o}),({args:o})=>o?1:0]},$$scope:{ctx:a}}}),i=new ke({props:{name:"Default",args:{}}}),{c(){O(e.$$.fragment),t=w(),O(n.$$.fragment),l=w(),O(i.$$.fragment)},m(o,f){V(e,o,f),G(o,t,f),V(n,o,f),G(o,l,f),V(i,o,f),u=!0},p(o,[f]){const A=f&0?le(m,[m[0],f&0&&{component:z},m[2],f&0&&ce(ee(te))]):{};e.$set(A);const v={};f&3&&(v.$$scope={dirty:f,ctx:o}),n.$set(v)},i(o){u||(H(e.$$.fragment,o),H(n.$$.fragment,o),H(i.$$.fragment,o),u=!0)},o(o){N(e.$$.fragment,o),N(n.$$.fragment,o),N(i.$$.fragment,o),u=!1},d(o){U(e,o),o&&W(t),U(n,o),o&&W(l),U(i,o)}}}class Te extends se{constructor(e){super(),oe(this,e,null,Ie,ae,{})}}const re=ye(Te,{meta:{title:"Layout/AnalyticsBanner"},stories:{"tpl:default":{storyId:"layout-analyticsbanner--default",name:"default",template:!0,source:"<AnalyticsBanner {...args} />",hasArgs:!0},Default:{storyId:"layout-analyticsbanner--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","AnalyticsBanner","withComponentDocs"]}),Ee=re.meta,Le=["Default"],Re=re.stories.Default;export{Re as Default,Le as __namedExportsOrder,Ee as default};
//# sourceMappingURL=AnalyticsBanner.stories-a23c8415.js.map
