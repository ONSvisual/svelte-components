import{S as se,i as ae,s as oe,e as de,a as Y,z as x,d as G,E as ue,I as fe,o as me,x as d,L as r,y as K,Q as M,w,Z as z,P as s,Y as J,R as _e,ab as X,B as pe,p as ie,j as H,m as N,k as le,l as ce,b as U,t as Q,n as q}from"./index-98bb0bde.js";import{p as ye,w as ee,M as ge,T as he,S as we}from"./collect-stories-cccca598.js";const te=`This component will display a cookie banner and export a function that allows you to push events to the Google Analytics dataLayer array.

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
`;function ne(o){let e;function t(i,u){return i[3]?ke:be}let n=t(o),c=n(o);return{c(){e=d("div"),c.c(),r(e,"class","ons-cookies-banner svelte-1syey1g"),r(e,"role","region"),r(e,"aria-label","Cookies banner"),K(e,"display",o[2]?"block":null)},m(i,u){Y(i,e,u),c.m(e,null)},p(i,u){n===(n=t(i))&&c?c.p(i,u):(c.d(1),c=n(i),c&&(c.c(),c.m(e,null))),u&4&&K(e,"display",i[2]?"block":null)},d(i){i&&G(e),c.d()}}}function ke(o){let e,t,n,c,i,u=o[7](o[4])+"",m,p,a,f=o[7]("You can")+"",D,k,C,A,S=o[7]("at any time")+"",B,E,R,y,g,h,v,j,T;return{c(){e=d("div"),t=d("div"),n=d("div"),c=d("p"),i=d("span"),m=M(u),p=w(),a=d("span"),D=M(f),k=w(),C=d("a"),C.textContent=`${o[7]("change your cookie preferences")}`,A=w(),B=M(S),E=M("."),R=w(),y=d("div"),g=d("button"),h=d("span"),v=d("span"),v.textContent=`${o[7]("Hide")}`,r(C,"href","/cookies"),r(a,"class","ons-cookies-banner__preferences-text"),r(c,"class","ons-cookies-banner__desc ons-u-mb-no@s ons-u-mr-s@s"),r(n,"class","ons-grid__col ons-grid__col--flex ons-col-auto ons-u-flex-shrink@s"),r(v,"class","ons-btn__text"),r(h,"class","ons-btn__inner"),r(g,"type","button"),r(g,"class","ons-btn ons-btn--secondary ons-btn--small ons-js-hide-button"),r(y,"class","ons-grid__col"),r(t,"class","ons-grid ons-grid--flex ons-grid--between ons-grid--gutterless ons-grid--no-wrap@s ons-grid--vertical-center"),r(e,"class","ons-container ons-cookies-banner__confirmation svelte-1syey1g"),z(e,"ons-page__container--wider",o[1]==="wider")},m(l,_){Y(l,e,_),s(e,t),s(t,n),s(n,c),s(c,i),s(i,m),s(c,p),s(c,a),s(a,D),s(a,k),s(a,C),s(a,A),s(a,B),s(a,E),s(t,R),s(t,y),s(y,g),s(g,h),s(h,v),j||(T=J(g,"click",o[15]),j=!0)},p(l,_){_&16&&u!==(u=l[7](l[4])+"")&&_e(m,u),_&2&&z(e,"ons-page__container--wider",l[1]==="wider")},d(l){l&&G(e),j=!1,T()}}}function be(o){let e,t,n,c,i,u,m,p,a,f,D=o[7]("We would like to set")+"",k,C,A,S,B=o[7]("to remember your settings and understand how you use the site. This helps us to improve our services.")+"",E,R,y,g,h,v,j,T,l,_,I,b,V,P,L,W,$;return{c(){e=d("form"),t=d("div"),n=d("div"),c=d("div"),i=d("h2"),i.textContent=`${o[7]("Cookies on ons.gov.uk")}`,u=w(),m=d("div"),p=d("p"),p.textContent=`${o[7]("Cookies are small files stored on your device when you visit a website. We use some essential cookies to make this website work.")}`,a=w(),f=d("p"),k=M(D),C=w(),A=d("a"),A.textContent=`${o[7]("additional cookies")}`,S=w(),E=M(B),R=w(),y=d("div"),g=d("div"),h=d("button"),v=d("span"),j=d("span"),j.textContent=`${o[7]("Accept additional cookies")}`,T=w(),l=d("div"),_=d("button"),I=d("span"),b=d("span"),b.textContent=`${o[7]("Reject additional cookies")}`,V=w(),P=d("div"),L=d("a"),L.textContent=`${o[7]("View cookies")}`,r(i,"class","ons-cookies-banner__title ons-u-mb-xs"),r(A,"href","/cookies"),r(m,"class","ons-cookies-banner__statement"),r(c,"class","ons-grid__col ons-col-8@m"),r(n,"class","ons-grid"),r(j,"class","ons-btn__text"),r(v,"class","ons-btn__inner"),r(h,"type","submit"),r(h,"class","ons-btn ons-btn--small ons-js-accept-cookies ons-cookies-banner__btn"),r(h,"data-button","accept"),r(g,"class","ons-grid__col"),r(b,"class","ons-btn__text"),r(I,"class","ons-btn__inner"),r(_,"type","button"),r(_,"class","ons-btn ons-btn--small ons-js-reject-cookies ons-cookies-banner__btn"),r(_,"data-button","reject"),r(l,"class","ons-grid__col"),r(L,"class","ons-cookies-banner__link"),r(L,"href","/cookies"),r(P,"class","ons-grid__col"),r(y,"class","ons-grid ons-grid--flex ons-u-mt-s"),r(t,"class","ons-container ons-cookies-banner__primary svelte-1syey1g"),z(t,"ons-page__container--wider",o[1]==="wider"),r(e,"action","/cookies/accept-all"),r(e,"method","GET"),r(e,"id","global-cookie-message"),r(e,"aria-label","cookie banner")},m(O,F){Y(O,e,F),s(e,t),s(t,n),s(n,c),s(c,i),s(c,u),s(c,m),s(m,p),s(m,a),s(m,f),s(f,k),s(f,C),s(f,A),s(f,S),s(f,E),s(t,R),s(t,y),s(y,g),s(g,h),s(h,v),s(v,j),s(y,T),s(y,l),s(l,_),s(_,I),s(I,b),s(y,V),s(y,P),s(P,L),W||($=[J(h,"click",X(o[13])),J(_,"click",X(o[14]))],W=!0)},p(O,F){F&2&&z(t,"ons-page__container--wider",O[1]==="wider")},d(O){O&&G(e),W=!1,pe($)}}}function ve(o){let e,t=o[2]&&!o[0]&&ne(o);return{c(){t&&t.c(),e=de()},m(n,c){t&&t.m(n,c),Y(n,e,c)},p(n,[c]){n[2]&&!n[0]?t?t.p(n,c):(t=ne(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:x,o:x,d(n){t&&t.d(n),n&&G(e)}}}function Ce(o){window!=null&&window.dataLayer&&window.dataLayer.push(o)}function Ae(){return-1<document.cookie.indexOf("cookies_preferences_set=true")}function Be(){var o=document.cookie.match(new RegExp("(^|;) ?cookies_policy=([^;]*)(;|$)"));if(o){var e=decodeURIComponent(o[2]),t=JSON.parse(e);return t.usage}return!1}function je(o,e,t){let n;const c=ue("page");fe(o,c,l=>t(12,n=l));let{analyticsId:i="GTM-MBCBVQS"}=e,{analyticsProps:u={}}=e,{hideBanner:m=!1}=e,{usageCookies:p=!1}=e,{width:a="wide"}=e,{pageViewEnabled:f=!0}=e,D,k=!1,C=!1,A="",S=n&&n.url.host.startsWith("cy")?"cy":"en",B=null;function E(l){let _=31536e3,I=window.location.hostname,b=!0,V=`%7B%22essential%22%3Atrue%2C%22usage%22%3A${l=="all"?"true":"false"}%7D`,P="/";document.cookie=`cookies_preferences_set=${b};max-age=${_};domain=${I};path=${P};`,document.cookie=`cookies_policy=${V};max-age=${_};domain=${I};path=${P};`,t(4,A=`You have ${l=="all"?"accepted":"rejected"} all additional cookies.`),l=="all"&&t(8,p=!0),t(3,C=!0),l=="all"&&R()}function R(){console.log("initialising analytics"),window.dataLayer=[{analyticsOptOut:!1,"gtm.whitelist":["google","hjtc","lcl"],"gtm.blacklist":["customScripts","sp","adm","awct","k","d","j"],...u}],function(l,_,I,b,V){l[b]=l[b]||[],l[b].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var P=_.head,L=_.createElement(I),W=b!="dataLayer"?"&l="+b:"";L.async=!0,L.src="https://www.googletagmanager.com/gtm.js?id="+V+W,P.appendChild(L)}(window,document,"script","dataLayer",i),n&&(B=`${n.url.href}`.replace(n.url.hash,""))}function y(l){if(l&&B){const _=`${l.url.href}`.replace(l.url.hash,"");_!==B&&(B=_,Ce({event:"pageView",pageURL:B,...u}))}}me(()=>{D=!0,c||(S=document.location.host.startsWith("cy")?"cy":"en"),t(2,k=!Ae()),t(8,p=Be()),p&&D&&R()});const g={"Cookies on ons.gov.uk":"Cwcis ar ons.gov.uk","Cookies are small files stored on your device when you visit a website. We use some essential cookies to make this website work.":"Ffeiliau bach a gaiff eu storio ar eich dyfais pan fyddwch yn mynd ar wefan yw cwcis. Rydym ni’n defnyddio rhai cwcis hanfodol i wneud i’r wefan hon weithio.","We would like to set":"Hoffem osod","additional cookies":"cwcis ychwanegol","to remember your settings and understand how you use the site. This helps us to improve our services.":"er mwyn cofio eich gosodiadau a deall sut rydych chi’n defnyddio’r wefan. Mae hyn yn ein helpu ni i wella ein gwasanaethau.","Accept additional cookies":"Derbyn cwcis ychwanegol","Reject additional cookies":"Gwrthod cwcis ychwanegol","View cookies":"Gweld cwcis","You have accepted all additional cookies.":"Rydych chi wedi derbyn yr holl gwcis ychwanegol.","You have rejected all additional cookies.":"Rydych chi wedi gwrthod yr holl gwcis ychwanegol.","You can":"Gallwch chi","change your cookie preferences":"newid eich dewisiadau o ran cwcis","at any time.":"ar unrhyw adeg.",Hide:"Cuddio"},h=l=>S=="cy"&&g[l]?g[l]:l,v=()=>E("all"),j=()=>E("reject"),T=()=>t(2,k=!1);return o.$$set=l=>{"analyticsId"in l&&t(9,i=l.analyticsId),"analyticsProps"in l&&t(10,u=l.analyticsProps),"hideBanner"in l&&t(0,m=l.hideBanner),"usageCookies"in l&&t(8,p=l.usageCookies),"width"in l&&t(1,a=l.width),"pageViewEnabled"in l&&t(11,f=l.pageViewEnabled)},o.$$.update=()=>{o.$$.dirty&6144&&f&&y(n)},[m,a,k,C,A,c,E,h,p,i,u,f,n,v,j,T]}class Z extends se{constructor(e){super(),ae(this,e,je,ve,oe,{analyticsId:9,analyticsProps:10,hideBanner:0,usageCookies:8,width:1,pageViewEnabled:11})}}function De(o){let e,t;const n=[o[0]];let c={};for(let i=0;i<n.length;i+=1)c=ie(c,n[i]);return e=new Z({props:c}),{c(){H(e.$$.fragment)},m(i,u){N(e,i,u),t=!0},p(i,u){const m=u&1?le(n,[ce(i[0])]):{};e.$set(m)},i(i){t||(U(e.$$.fragment,i),t=!0)},o(i){Q(e.$$.fragment,i),t=!1},d(i){q(e,i)}}}function Ee(o){let e,t,n,c,i,u;const m=[{title:"Layout/AnalyticsBanner"},{component:Z},{argTypes:{}},ee(te)];let p={};for(let a=0;a<m.length;a+=1)p=ie(p,m[a]);return e=new ge({props:p}),n=new he({props:{$$slots:{default:[De,({args:a})=>({0:a}),({args:a})=>a?1:0]},$$scope:{ctx:o}}}),i=new we({props:{name:"Default",args:{}}}),{c(){H(e.$$.fragment),t=w(),H(n.$$.fragment),c=w(),H(i.$$.fragment)},m(a,f){N(e,a,f),Y(a,t,f),N(n,a,f),Y(a,c,f),N(i,a,f),u=!0},p(a,[f]){const D=f&0?le(m,[m[0],f&0&&{component:Z},m[2],f&0&&ce(ee(te))]):{};e.$set(D);const k={};f&3&&(k.$$scope={dirty:f,ctx:a}),n.$set(k)},i(a){u||(U(e.$$.fragment,a),U(n.$$.fragment,a),U(i.$$.fragment,a),u=!0)},o(a){Q(e.$$.fragment,a),Q(n.$$.fragment,a),Q(i.$$.fragment,a),u=!1},d(a){q(e,a),a&&G(t),q(n,a),a&&G(c),q(i,a)}}}class Ie extends se{constructor(e){super(),ae(this,e,null,Ee,oe,{})}}const re=ye(Ie,{meta:{title:"Layout/AnalyticsBanner"},stories:{"tpl:default":{storyId:"layout-analyticsbanner--default",name:"default",template:!0,source:"<AnalyticsBanner {...args} />",hasArgs:!0},Default:{storyId:"layout-analyticsbanner--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","AnalyticsBanner","withComponentDocs"]}),Re=re.meta,Se=["Default"],Te=re.stories.Default;export{Te as Default,Se as __namedExportsOrder,Re as default};
//# sourceMappingURL=AnalyticsBanner.stories-19a3d993.js.map