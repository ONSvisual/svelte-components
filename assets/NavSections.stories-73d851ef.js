import{S as W,i as $,s as x,j as B,m as E,b as y,t as w,n as A,F as te,I as G,o as Ne,K as ne,q as P,x as g,w as q,L as m,a as v,P as b,u as H,r as Z,v as z,g as Te,c as Ie,d as h,Q as R,R as Y,e as Ce,X as qe,Z as F,z as K,E as ie,a5 as Le,f as Ve,p as Be,k as Ee,l as Ae}from"./index-98bb0bde.js";import{b as se,p as Me,w as oe,M as je,T as Ue,S as Pe}from"./collect-stories-cbdfda5c.js";import{C as He}from"./Container-db0f663a.js";import{b as Ze}from"./utils-bbbf505c.js";import"./Theme-b4ca58b3.js";import"./_commonjsHelpers-725317a4.js";const le=`Use this layou component to allow users to quickly jump to sections of a long page of content.

As the user scrolls down the page, the table of contents will remain accessible at the top of the viewport and will highlight the subheading of the section in view.

Note: These examples will not preview correctly in the iframes on this page. You can select the examples from the menu instead.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { NavSections, NavSection } from "@onsvisual/svelte-components";
<\/script>

<NavSections>
  <NavSection title="Section one">
    <p>Contents of first section.</p>
  </NavSection>
  <NavSection title="Subsection A" subsection>
    <p>Contents of subsection.</p>
  </NavSection>
  <NavSection title="Subsection B" subsection>
    <p>Contents of subsection.</p>
  </NavSection>
  <NavSection title="Section two">
    <p>Contents of third section.</p>
  </NavSection>
</NavSections>
\`\`\`
`;const ze=s=>({}),ae=s=>({}),Fe=s=>({}),re=s=>({}),Ke=s=>({}),ce=s=>({}),Qe=s=>({}),ue=s=>({});function fe(s,e,n){const t=s.slice();return t[19]=e[n],t}function de(s,e,n){const t=s.slice();return t[22]=e[n],t}const Re=s=>({}),me=s=>({}),Xe=s=>({}),pe=s=>({});function _e(s){let e,n,t=s[3]&&be(s),i=s[12]&&ge(s);return{c(){t&&t.c(),e=q(),n=g("ol"),i&&i.c(),m(n,"class","ons-list ons-u-mb-m ons-list--dashed")},m(o,a){t&&t.m(o,a),v(o,e,a),v(o,n,a),i&&i.m(n,null)},p(o,a){o[3]?t?t.p(o,a):(t=be(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),o[12]?i?i.p(o,a):(i=ge(o),i.c(),i.m(n,null)):i&&(i.d(1),i=null)},d(o){t&&t.d(o),o&&h(e),o&&h(n),i&&i.d()}}}function be(s){let e,n;return{c(){e=g("h2"),n=R(s[3]),m(e,"class","ons-toc__title ons-u-fs-r--b ons-u-mb-s")},m(t,i){v(t,e,i),b(e,n)},p(t,i){i&8&&Y(n,t[3])},d(t){t&&h(e)}}}function ge(s){let e,n=s[12],t=[];for(let i=0;i<n.length;i+=1)t[i]=ke(fe(s,n,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=Ce()},m(i,o){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(i,o);v(i,e,o)},p(i,o){if(o&6144){n=i[12];let a;for(a=0;a<n.length;a+=1){const r=fe(i,n,a);t[a]?t[a].p(r,o):(t[a]=ke(r),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},d(i){qe(t,i),i&&h(e)}}}function ve(s){let e,n=s[19].title+"",t,i;return{c(){e=g("a"),t=R(n),m(e,"href",i="#"+s[19].id),m(e,"class","ons-list__link"),F(e,"ons-toc__link-active",s[19].id===s[11])},m(o,a){v(o,e,a),b(e,t)},p(o,a){a&4096&&n!==(n=o[19].title+"")&&Y(t,n),a&4096&&i!==(i="#"+o[19].id)&&m(e,"href",i),a&6144&&F(e,"ons-toc__link-active",o[19].id===o[11])},d(o){o&&h(e)}}}function he(s){let e,n=s[19].subsections,t=[];for(let i=0;i<n.length;i+=1)t[i]=ye(de(s,n,i));return{c(){e=g("ol");for(let i=0;i<t.length;i+=1)t[i].c();m(e,"class","ons-list ons-u-mb-no ons-list--dashed")},m(i,o){v(i,e,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(i,o){if(o&6144){n=i[19].subsections;let a;for(a=0;a<n.length;a+=1){const r=de(i,n,a);t[a]?t[a].p(r,o):(t[a]=ye(r),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},d(i){i&&h(e),qe(t,i)}}}function ye(s){let e,n,t=s[22].title+"",i,o,a;return{c(){e=g("li"),n=g("a"),i=R(t),a=q(),m(n,"href",o="#"+s[22].id),m(n,"class","ons-list__link"),F(n,"ons-toc__link-active",s[22].id===s[11]),m(e,"class","ons-list__item")},m(r,d){v(r,e,d),b(e,n),b(n,i),b(e,a)},p(r,d){d&4096&&t!==(t=r[22].title+"")&&Y(i,t),d&4096&&o!==(o="#"+r[22].id)&&m(n,"href",o),d&6144&&F(n,"ons-toc__link-active",r[22].id===r[11])},d(r){r&&h(e)}}}function ke(s){let e,n,t,i=s[19].id&&s[19].title&&ve(s),o=s[19].subsections.length>0&&he(s);return{c(){e=g("li"),i&&i.c(),n=q(),o&&o.c(),t=q(),m(e,"class","ons-list__item")},m(a,r){v(a,e,r),i&&i.m(e,null),b(e,n),o&&o.m(e,null),b(e,t)},p(a,r){a[19].id&&a[19].title?i?i.p(a,r):(i=ve(a),i.c(),i.m(e,n)):i&&(i.d(1),i=null),a[19].subsections.length>0?o?o.p(a,r):(o=he(a),o.c(),o.m(e,t)):o&&(o.d(1),o=null)},d(a){a&&h(e),i&&i.d(),o&&o.d()}}}function we(s){let e;const n=s[17].default,t=P(n,s,s[18],null);return{c(){t&&t.c()},m(i,o){t&&t.m(i,o),e=!0},p(i,o){t&&t.p&&(!e||o&262144)&&H(t,n,i,i[18],e?z(n,i[18],o,null):Z(i[18]),null)},i(i){e||(y(t,i),e=!0)},o(i){w(t,i),e=!1},d(i){t&&t.d(i)}}}function Ye(s){let e,n,t,i,o,a,r,d,l,u,T,S,_;const I=s[17].header,k=P(I,s,s[18],pe),M=s[17]["before-nav"],p=P(M,s,s[18],me);let D=!s[4]&&_e(s);const Q=s[17]["after-nav"],O=P(Q,s,s[18],ue),j=s[17].before,f=P(j,s,s[18],ce);let N=s[13]&&we(s);const U=s[17].after,L=P(U,s,s[18],re),ee=s[17].footer,V=P(ee,s,s[18],ae);return{c(){e=g("div"),k&&k.c(),n=q(),t=g("div"),i=g("aside"),o=g("nav"),p&&p.c(),a=q(),D&&D.c(),r=q(),O&&O.c(),d=q(),l=g("div"),f&&f.c(),u=q(),N&&N.c(),T=q(),L&&L.c(),S=q(),V&&V.c(),m(o,"class","ons-toc"),m(o,"aria-label","Pages in this guide"),m(i,"class","ons-toc-container"),m(i,"role","complementary"),m(t,"class","ons-grid__col ons-col-4@m ons-u-pl-no ons-grid__col--sticky@m svelte-15yeld7"),m(t,"id",s[0]),m(l,"class","ons-nav-sections ons-grid__col ons-col-8@m ons-u-pl-no svelte-15yeld7"),m(e,"class","ons-grid ons-js-toc-container ons-u-ml-no")},m(c,C){v(c,e,C),k&&k.m(e,null),b(e,n),b(e,t),b(t,i),b(i,o),p&&p.m(o,null),b(o,a),D&&D.m(o,null),b(o,r),O&&O.m(o,null),b(e,d),b(e,l),f&&f.m(l,null),b(l,u),N&&N.m(l,null),b(l,T),L&&L.m(l,null),b(e,S),V&&V.m(e,null),_=!0},p(c,C){k&&k.p&&(!_||C&262144)&&H(k,I,c,c[18],_?z(I,c[18],C,Xe):Z(c[18]),pe),p&&p.p&&(!_||C&262144)&&H(p,M,c,c[18],_?z(M,c[18],C,Re):Z(c[18]),me),c[4]?D&&(D.d(1),D=null):D?D.p(c,C):(D=_e(c),D.c(),D.m(o,r)),O&&O.p&&(!_||C&262144)&&H(O,Q,c,c[18],_?z(Q,c[18],C,Qe):Z(c[18]),ue),(!_||C&1)&&m(t,"id",c[0]),f&&f.p&&(!_||C&262144)&&H(f,j,c,c[18],_?z(j,c[18],C,Ke):Z(c[18]),ce),c[13]?N?(N.p(c,C),C&8192&&y(N,1)):(N=we(c),N.c(),y(N,1),N.m(l,T)):N&&(Te(),w(N,1,1,()=>{N=null}),Ie()),L&&L.p&&(!_||C&262144)&&H(L,U,c,c[18],_?z(U,c[18],C,Fe):Z(c[18]),re),V&&V.p&&(!_||C&262144)&&H(V,ee,c,c[18],_?z(ee,c[18],C,ze):Z(c[18]),ae)},i(c){_||(y(k,c),y(p,c),y(O,c),y(f,c),y(N),y(L,c),y(V,c),_=!0)},o(c){w(k,c),w(p,c),w(O,c),w(f,c),w(N),w(L,c),w(V,c),_=!1},d(c){c&&h(e),k&&k.d(c),p&&p.d(c),D&&D.d(),O&&O.d(c),f&&f.d(c),N&&N.d(),L&&L.d(c),V&&V.d(c)}}}function Ge(s){let e,n;return e=new He({props:{cls:s[1],theme:s[5],themeOverrides:s[6],allowClientOverrides:s[8],width:s[2],marginTop:s[9],marginBottom:s[10],background:s[7],$$slots:{default:[Ye]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment)},m(t,i){E(e,t,i),n=!0},p(t,[i]){const o={};i&2&&(o.cls=t[1]),i&32&&(o.theme=t[5]),i&64&&(o.themeOverrides=t[6]),i&256&&(o.allowClientOverrides=t[8]),i&4&&(o.width=t[2]),i&512&&(o.marginTop=t[9]),i&1024&&(o.marginBottom=t[10]),i&128&&(o.background=t[7]),i&276505&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Je(s){const e=[];let n={subsections:[]};for(const t of s)t.dataset.subsection!=="true"?((n.title||n.subsections.length>0)&&e.push(n),n={id:t.id,title:t.dataset.title,subsections:[]}):n.subsections.push({id:t.id,title:t.dataset.title});return[...e,n]}function We(s,e,n){let t,i,o,{$$slots:a={},$$scope:r}=e,{id:d="toc"}=e,{cls:l=null}=e,{width:u="wide"}=e,{contentsLabel:T="Page contents"}=e,{noContents:S=!1}=e,{theme:_=null}=e,{themeOverrides:I=null}=e,{background:k=null}=e,{allowClientOverrides:M=!1}=e,{marginTop:p=!1}=e,{marginBottom:D=!0}=e,Q;te("tocId",d);const O=se([]);G(s,O,f=>n(16,o=f)),te("sections",O);const j=se();return G(s,j,f=>n(13,i=f)),te("observer",j),Ne(()=>{S||ne(j,i=new IntersectionObserver((f,N)=>{for(let U=0;U<f.length;U++)if(f[U].isIntersecting){n(11,Q=f[U].target.id);break}},{root:null,rootMargin:"0% 0% -70% 0%",threshold:0}),i)}),s.$$set=f=>{"id"in f&&n(0,d=f.id),"cls"in f&&n(1,l=f.cls),"width"in f&&n(2,u=f.width),"contentsLabel"in f&&n(3,T=f.contentsLabel),"noContents"in f&&n(4,S=f.noContents),"theme"in f&&n(5,_=f.theme),"themeOverrides"in f&&n(6,I=f.themeOverrides),"background"in f&&n(7,k=f.background),"allowClientOverrides"in f&&n(8,M=f.allowClientOverrides),"marginTop"in f&&n(9,p=f.marginTop),"marginBottom"in f&&n(10,D=f.marginBottom),"$$scope"in f&&n(18,r=f.$$scope)},s.$$.update=()=>{s.$$.dirty&65536&&n(12,t=Je(o))},[d,l,u,T,S,_,I,k,M,p,D,Q,t,i,O,j,o,a,r]}class J extends W{constructor(e){super(),$(this,e,We,Ge,x,{id:0,cls:1,width:2,contentsLabel:3,noContents:4,theme:5,themeOverrides:6,background:7,allowClientOverrides:8,marginTop:9,marginBottom:10})}}J.__docgen={version:3,name:"NavSections.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"ID for back-linking to table of contents",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"toc"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets a css class for the section",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"wider"|"full"}'}],visibility:"public",description:"Sets the width of the container",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"wider"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"wider"',type:'"wider"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"wide"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"A label for the page contents nav",name:"contentsLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Page contents"},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Don't include table of contents (allows for custom uses of nav panel)",name:"noContents",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows client imported CSS for embeddable content",name:"allowClientOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"header"},{keywords:[],visibility:"public",description:"",name:"before-nav"},{keywords:[],visibility:"public",description:"",name:"after-nav"},{keywords:[],visibility:"public",description:"",name:"before"},{keywords:[],visibility:"public",description:"",name:"default"},{keywords:[],visibility:"public",description:"",name:"after"},{keywords:[],visibility:"public",description:"",name:"footer"}],refs:[]};function $e(s){let e,n,t,i,o,a;return{c(){e=g("div"),n=g("div"),t=g("a"),i=g("span"),i.innerHTML=`<svg class="ons-svg-icon ons-u-mr-xs" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" role="presentation"><path d="M0 8.07275L1.41 9.48275L7 3.90275V16.0728H9V3.90275L14.58 9.49275L16 8.07275L8 0.0727539L0 8.07275Z" fill="currentColor"></path></svg> 
      `,o=R("Back to contents"),m(i,"class","ons-back-to__icon"),m(t,"href",a="#"+s[0]),m(t,"class","ons-back-to__link"),m(n,"class","ons-back-to"),m(e,"class","ons-u-mt-l ons-u-d-no@m")},m(r,d){v(r,e,d),b(e,n),b(n,t),b(t,i),b(t,o)},p(r,[d]){d&1&&a!==(a="#"+r[0])&&m(t,"href",a)},i:K,o:K,d(r){r&&h(e)}}}function xe(s,e,n){let{tocId:t="toc"}=e;return s.$$set=i=>{"tocId"in i&&n(0,t=i.tocId)},[t]}class De extends W{constructor(e){super(),$(this,e,xe,$e,x,{tocId:0})}}De.__docgen={version:3,name:"SectionBacklink.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"ID for contents nav section (for back links)",name:"tocId",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"toc"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Se(s){let e;function n(o,a){return o[4]?tt:et}let t=n(s),i=t(s);return{c(){i.c(),e=Ce()},m(o,a){i.m(o,a),v(o,e,a)},p(o,a){t===(t=n(o))&&i?i.p(o,a):(i.d(1),i=t(o),i&&(i.c(),i.m(e.parentNode,e)))},d(o){i.d(o),o&&h(e)}}}function et(s){let e,n;return{c(){e=g("h2"),n=R(s[0]),m(e,"class","section-title ons-u-mt-l ons-u-pb-no ons-u-pt-no"),F(e,"ons-u-vh",s[3])},m(t,i){v(t,e,i),b(e,n)},p(t,i){i&1&&Y(n,t[0]),i&8&&F(e,"ons-u-vh",t[3])},d(t){t&&h(e)}}}function tt(s){let e,n;return{c(){e=g("h3"),n=R(s[0]),m(e,"class","subsection-title ons-u-fs-m"),F(e,"ons-u-vh",s[3])},m(t,i){v(t,e,i),b(e,n)},p(t,i){i&1&&Y(n,t[0]),i&8&&F(e,"ons-u-vh",t[3])},d(t){t&&h(e)}}}function it(s){let e,n;return e=new De({props:{tocId:s[8]}}),{c(){B(e.$$.fragment)},m(t,i){E(e,t,i),n=!0},p:K,i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function nt(s){let e,n,t,i,o=s[0]&&Se(s);const a=s[10].default,r=P(a,s,s[9],null);let d=s[8]&&it(s);return{c(){e=g("section"),o&&o.c(),n=q(),r&&r.c(),t=q(),d&&d.c(),m(e,"id",s[1]),m(e,"data-title",s[0]),m(e,"data-type","NavSection"),m(e,"data-subsection",s[4]),m(e,"class",s[2]),m(e,"aria-label",s[0])},m(l,u){v(l,e,u),o&&o.m(e,null),b(e,n),r&&r.m(e,null),b(e,t),d&&d.m(e,null),s[11](e),i=!0},p(l,[u]){l[0]?o?o.p(l,u):(o=Se(l),o.c(),o.m(e,n)):o&&(o.d(1),o=null),r&&r.p&&(!i||u&512)&&H(r,a,l,l[9],i?z(a,l[9],u,null):Z(l[9]),null),l[8]&&d.p(l,u),(!i||u&2)&&m(e,"id",l[1]),(!i||u&1)&&m(e,"data-title",l[0]),(!i||u&16)&&m(e,"data-subsection",l[4]),(!i||u&4)&&m(e,"class",l[2]),(!i||u&1)&&m(e,"aria-label",l[0])},i(l){i||(y(r,l),y(d),i=!0)},o(l){w(r,l),w(d),i=!1},d(l){l&&h(e),o&&o.d(),r&&r.d(l),d&&d.d(),s[11](null)}}}function st(s,e,n){let t,i,{$$slots:o={},$$scope:a}=e,{title:r="Section title"}=e,{id:d=Ze(r)}=e,{cls:l=null}=e,{hideTitle:u=!1}=e,{subsection:T=!1}=e;const S=ie("sections");G(s,S,p=>n(13,i=p));const _=ie("observer");G(s,_,p=>n(12,t=p));const I=ie("tocId");let k;Ne(()=>{S&&_&&(ne(S,i=[...k.parentElement.getElementsByTagName("section")].filter(p=>p.dataset.type==="NavSection"),i),t.observe(k))}),Le(()=>{S&&_&&(ne(S,i=i.filter(p=>p.id!==d),i),t.unobserve(k))});function M(p){Ve[p?"unshift":"push"](()=>{k=p,n(5,k)})}return s.$$set=p=>{"title"in p&&n(0,r=p.title),"id"in p&&n(1,d=p.id),"cls"in p&&n(2,l=p.cls),"hideTitle"in p&&n(3,u=p.hideTitle),"subsection"in p&&n(4,T=p.subsection),"$$scope"in p&&n(9,a=p.$$scope)},[r,d,l,u,T,k,S,_,I,a,o,M]}class X extends W{constructor(e){super(),$(this,e,st,nt,x,{title:0,id:1,cls:2,hideTitle:3,subsection:4})}}X.__docgen={version:3,name:"NavSection.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title of the section",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Section title"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the unique ID of the section (if not set, this will be slugified from the title)",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets a css class for the section",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows the h2 title tag for the section to be visually hidden",name:"hideTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Treat a section as sub-section. It will have an h3 title, and will be indented in the contents table",name:"subsection",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ot(s){let e;return{c(){e=g("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(n,t){v(n,e,t)},p:K,d(n){n&&h(e)}}}function lt(s){let e;return{c(){e=g("p"),e.textContent=`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`},m(n,t){v(n,e,t)},p:K,d(n){n&&h(e)}}}function at(s){let e;return{c(){e=g("p"),e.textContent=`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`},m(n,t){v(n,e,t)},p:K,d(n){n&&h(e)}}}function rt(s){let e;return{c(){e=g("p"),e.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`},m(n,t){v(n,e,t)},p:K,d(n){n&&h(e)}}}function ct(s){let e,n,t,i,o,a,r,d;return e=new X({props:{title:"Section one",$$slots:{default:[ot]},$$scope:{ctx:s}}}),t=new X({props:{title:"Subsection A",subsection:!0,$$slots:{default:[lt]},$$scope:{ctx:s}}}),o=new X({props:{title:"Subsection B",subsection:!0,$$slots:{default:[at]},$$scope:{ctx:s}}}),r=new X({props:{title:"Section two",$$slots:{default:[rt]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment),n=q(),B(t.$$.fragment),i=q(),B(o.$$.fragment),a=q(),B(r.$$.fragment)},m(l,u){E(e,l,u),v(l,n,u),E(t,l,u),v(l,i,u),E(o,l,u),v(l,a,u),E(r,l,u),d=!0},p(l,u){const T={};u&2&&(T.$$scope={dirty:u,ctx:l}),e.$set(T);const S={};u&2&&(S.$$scope={dirty:u,ctx:l}),t.$set(S);const _={};u&2&&(_.$$scope={dirty:u,ctx:l}),o.$set(_);const I={};u&2&&(I.$$scope={dirty:u,ctx:l}),r.$set(I)},i(l){d||(y(e.$$.fragment,l),y(t.$$.fragment,l),y(o.$$.fragment,l),y(r.$$.fragment,l),d=!0)},o(l){w(e.$$.fragment,l),w(t.$$.fragment,l),w(o.$$.fragment,l),w(r.$$.fragment,l),d=!1},d(l){A(e,l),l&&h(n),A(t,l),l&&h(i),A(o,l),l&&h(a),A(r,l)}}}function ut(s){let e,n;return e=new J({props:{$$slots:{default:[ct]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment)},m(t,i){E(e,t,i),n=!0},p(t,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function ft(s){let e,n,t,i,o,a;const r=[{title:"Layout/NavSections"},{component:J},{argTypes:{}},oe(le)];let d={};for(let l=0;l<r.length;l+=1)d=Be(d,r[l]);return e=new je({props:d}),t=new Ue({props:{$$slots:{default:[ut,({args:l})=>({0:l}),({args:l})=>l?1:0]},$$scope:{ctx:s}}}),o=new Pe({props:{name:"Default",args:{}}}),{c(){B(e.$$.fragment),n=q(),B(t.$$.fragment),i=q(),B(o.$$.fragment)},m(l,u){E(e,l,u),v(l,n,u),E(t,l,u),v(l,i,u),E(o,l,u),a=!0},p(l,[u]){const T=u&0?Ee(r,[r[0],u&0&&{component:J},r[2],u&0&&Ae(oe(le))]):{};e.$set(T);const S={};u&2&&(S.$$scope={dirty:u,ctx:l}),t.$set(S)},i(l){a||(y(e.$$.fragment,l),y(t.$$.fragment,l),y(o.$$.fragment,l),a=!0)},o(l){w(e.$$.fragment,l),w(t.$$.fragment,l),w(o.$$.fragment,l),a=!1},d(l){A(e,l),l&&h(n),A(t,l),l&&h(i),A(o,l)}}}class dt extends W{constructor(e){super(),$(this,e,null,ft,x,{})}}const Oe=Me(dt,{meta:{title:"Layout/NavSections"},stories:{"tpl:default":{storyId:"layout-navsections--default",name:"default",template:!0,source:`<NavSections>
  <NavSection title="Section one">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </NavSection>
  <NavSection title="Subsection A" subsection>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </NavSection>
  <NavSection title="Subsection B" subsection>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </NavSection>
  <NavSection title="Section two">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </NavSection>
</NavSections>`,hasArgs:!0},Default:{storyId:"layout-navsections--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","NavSections","NavSection","withComponentDocs"]}),ht=Oe.meta,yt=["Default"],kt=Oe.stories.Default;export{kt as Default,yt as __namedExportsOrder,ht as default};
//# sourceMappingURL=NavSections.stories-73d851ef.js.map
