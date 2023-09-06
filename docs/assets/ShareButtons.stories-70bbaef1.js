import{S as ee,i as te,s as se,j as S,m as B,b as M,t as T,n as D,o as ie,x as u,I as x,w as d,C as n,a as q,H as l,J as re,d as F,p as ne,k as ae,l as le}from"./index-01cfd182.js";import{p as pe,w as X,M as ue,T as me,S as fe}from"./collect-stories-037cf284.js";import{C as ce}from"./Container-2a6ce727.js";import"./Theme-f59253ea.js";const Y=`Add social sharing buttons to a page.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/share-page).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ShareButtons } from "@onsvisual/svelte-components";
<\/script>

<!-- page contents -->
<ShareButtons />
<!-- page footer -->
\`\`\`
`;function he(i){let e,o,a,r,t,m,c,g,s,f,p,v,J,k,O,N,w,G,V,Z,K,L,j,P,_,Q,H,A,R,C,I,U,b,W,$,z;return{c(){e=u("section"),o=u("h2"),a=x(i[0]),r=d(),t=u("ul"),m=u("li"),c=u("span"),c.innerHTML=`<svg class="ons-svg-icon ons-svg-icon--xxl svelte-w4p0hu" id="icon-facebook" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path d="M32,16.0986285 C32.0009185,7.5342974 25.337417,0.468462963 16.8372092,0.0203294753 C8.33700136,-0.427804013
      0.97607758,5.89865855 0.0874346352,14.4161886 C-0.801208309,22.9337186 5.09355054,30.6602611 13.5009524,31.9979281
      L13.5009524,20.7518951 L9.44,20.7518951 L9.44,16.0986285 L13.5009524,16.0986285 L13.5009524,12.549267
      C13.5009524,8.5169471 15.8857143,6.28613892 19.5428571,6.28613892 C20.742535,6.30277426 21.9393895,6.40782423
      23.1238095,6.60044523 L23.1238095,10.5637711 L21.1047619,10.5637711 C19.1161905,10.5637711 18.4990476,11.8056643
      18.4990476,13.0782216 L18.4990476,16.0986285 L22.9409524,16.0986285 L22.2247619,20.7518951 L18.4990476,20.7518951
      L18.4990476,31.9979281 C26.2735701,30.760956 31.9991507,24.0182672 32,16.0986285 L32,16.0986285 Z"></path></svg>`,g=d(),s=u("a"),f=x("Facebook"),p=u("span"),p.textContent="this link will open in a new tab",J=d(),k=u("li"),O=u("span"),O.innerHTML='<svg class="ons-svg-icon ons-svg-icon--xxl svelte-w4p0hu" id="icon-twitter" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path d="M24.04,12.95c0,0.17,0,0.33,0,0.5c0.01,4.01-2.17,7.71-5.69,9.64c-3.52,1.93-7.81,1.78-11.19-0.38c0.31,0.04,0.61,0.05,0.92,0.05c1.73,0,3.42-0.58,4.78-1.65c-1.65-0.04-3.09-1.11-3.6-2.68c0.25,0.05,0.51,0.07,0.76,0.07c0.34,0,0.68-0.05,1.01-0.14C9.23,18,7.93,16.4,7.95,14.55v-0.05c0.54,0.29,1.13,0.46,1.74,0.48c-1.66-1.12-2.2-3.33-1.23-5.08c1.96,2.41,4.85,3.87,7.95,4.03c-0.07-0.29-0.1-0.58-0.1-0.88c0-1.58,0.97-3,2.44-3.59c1.47-0.58,3.15-0.21,4.23,0.94c0.86-0.17,1.69-0.49,2.45-0.94c-0.28,0.9-0.88,1.65-1.69,2.13c0.76-0.09,1.51-0.29,2.21-0.6C25.43,11.76,24.79,12.42,24.04,12.95zM16,0C7.16,0,0,7.16,0,16s7.16,16,16,16s16-7.16,16-16c0-4.24-1.69-8.31-4.69-11.31S20.24,0,16,0z"></path></svg>',N=d(),w=u("a"),G=x("Twitter"),V=u("span"),V.textContent="this link will open in a new tab",K=d(),L=u("li"),j=u("span"),j.innerHTML=`<svg class="ons-svg-icon ons-svg-icon--xxl svelte-w4p0hu" id="icon-linkedin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path d="M16,-3.41060513e-13 C20.2434638,-3.41060513e-13 24.3131264,1.68570945 27.3137085,4.6862915 C30.3142906,7.68687356
          32,11.7565362 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,-3.41060513e-13
          16,-3.41060513e-13 Z M11.3505859,12.4641113 L7.45385744,12.4641113 L7.45385744,24.1875 L11.3505859,24.1875
          L11.3505859,12.4641113 Z M20.9152832,12.1889649 C18.8479004,12.1889649 17.9213867,13.3251953 17.4035644,14.1240234
          L17.4035644,14.1240234 L17.4035644,12.4641113 L13.5070801,12.4641113 C13.5212538,12.7696262 13.5275532,13.809993
          13.5292593,15.1533871 L13.5293118,16.8832762 C13.5292156,16.9843911 13.5291048,17.0860852 13.5289803,17.1882303
          L13.5280782,17.8054916 L13.5280782,17.8054916 L13.5268961,18.427439 C13.5216699,20.9164121 13.5108442,23.3704557
          13.5078578,24.0208157 L13.5070801,24.1875 L17.4035644,24.1875 L17.4035644,17.640625 C17.4035644,17.2902832
          17.4287109,16.9401856 17.5317382,16.6896972 C17.8134766,15.9897461 18.4545899,15.2646484 19.5310059,15.2646484
          C20.940918,15.2646484 21.5051269,16.3395996 21.5051269,17.9157715 L21.5051269,17.9157715 L21.5051269,24.1875
          L25.4013672,24.1875 L25.4013672,17.465332 C25.4013672,13.8645019 23.4790039,12.1889649 20.9152832,12.1889649 Z
          M9.42822263,6.8125 C8.09521488,6.8125 7.22363281,7.68774412 7.22363281,8.83813475 C7.22363281,9.96313475
          8.06933594,10.8632812 9.37695313,10.8632812 L9.37695313,10.8632812 L9.40234375,10.8632812 C10.7612305,10.8632812
          11.6069336,9.96313475 11.6069336,8.83813475 C11.581543,7.68774412 10.7612305,6.8125 9.42822263,6.8125 Z"></path></svg>`,P=d(),_=u("a"),Q=x("LinkedIn"),H=u("span"),H.textContent="this link will open in a new tab",R=d(),C=u("li"),I=u("span"),I.innerHTML=`<svg class="ons-svg-icon ons-svg-icon--xxl svelte-w4p0hu" id="icon-email" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36
              27.9411 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208ZM18 19L26 14V12L18 17L10 12V14L18 19ZM8 10H28V26H8V10Z"></path></svg>`,U=d(),b=u("a"),W=x("Email"),$=u("span"),$.textContent="this link will open in a new tab",n(o,"class","ons-u-fs-r--b ons-u-mb-xs"),n(c,"class","ons-list__prefix"),n(p,"class","ons-u-vh"),n(s,"href",v="https://www.facebook.com/sharer/sharer.php?u="+i[6]),n(s,"class","ons-list__link ons-u-fs-r ons-u-pt-xxs"),n(s,"target","_blank"),n(s,"rel","noreferrer external"),n(m,"class","ons-list__item ons-u-pl-no ons-u-pr-xs"),n(O,"class","ons-list__prefix"),n(V,"class","ons-u-vh"),n(w,"href",Z="https://twitter.com/intent/tweet?original_referer&text="+i[7]+"&url="+i[6]),n(w,"class","ons-list__link ons-u-fs-r ons-u-pt-xxs"),n(w,"target","_blank"),n(w,"rel","noreferrer external"),n(k,"class","ons-list__item ons-u-pl-no ons-u-pr-xs"),n(j,"class","ons-list__prefix"),n(H,"class","ons-u-vh"),n(_,"href",A="https://www.linkedin.com/sharing/share-offsite/?url="+i[6]),n(_,"class","ons-list__link ons-u-fs-r ons-u-pt-xxs"),n(_,"target","_blank"),n(_,"rel","noreferrer external"),n(L,"class","ons-list__item ons-u-pl-no ons-u-pr-xs"),n(I,"class","ons-list__prefix"),n($,"class","ons-u-vh"),n(b,"href",z="mailto:?subject="+i[7]+"&body="+i[7]+"%0A"+i[6]),n(b,"class","ons-list__link ons-u-fs-r ons-u-pt-xxs"),n(b,"target","_blank"),n(b,"rel","noreferrer external"),n(C,"class","ons-list__item ons-u-pl-no ons-u-pr-xs"),n(t,"class","ons-list ons-list--inline ons-list--bare ons-list--icons"),n(e,"class","ons-grid ons-u-ml-no"),n(e,"aria-label","Share this dataset")},m(h,y){q(h,e,y),l(e,o),l(o,a),l(e,r),l(e,t),l(t,m),l(m,c),l(m,g),l(m,s),l(s,f),l(s,p),l(t,J),l(t,k),l(k,O),l(k,N),l(k,w),l(w,G),l(w,V),l(t,K),l(t,L),l(L,j),l(L,P),l(L,_),l(_,Q),l(_,H),l(t,R),l(t,C),l(C,I),l(C,U),l(C,b),l(b,W),l(b,$)},p(h,y){y&1&&re(a,h[0]),y&64&&v!==(v="https://www.facebook.com/sharer/sharer.php?u="+h[6])&&n(s,"href",v),y&192&&Z!==(Z="https://twitter.com/intent/tweet?original_referer&text="+h[7]+"&url="+h[6])&&n(w,"href",Z),y&64&&A!==(A="https://www.linkedin.com/sharing/share-offsite/?url="+h[6])&&n(_,"href",A),y&192&&z!==(z="mailto:?subject="+h[7]+"&body="+h[7]+"%0A"+h[6])&&n(b,"href",z)},d(h){h&&F(e)}}}function de(i){let e,o;return e=new ce({props:{theme:i[2],themeOverrides:i[3],width:i[1],marginTop:i[4],marginBottom:i[5],$$slots:{default:[he]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},m(a,r){B(e,a,r),o=!0},p(a,[r]){const t={};r&4&&(t.theme=a[2]),r&8&&(t.themeOverrides=a[3]),r&2&&(t.width=a[1]),r&16&&(t.marginTop=a[4]),r&32&&(t.marginBottom=a[5]),r&449&&(t.$$scope={dirty:r,ctx:a}),e.$set(t)},i(a){o||(M(e.$$.fragment,a),o=!0)},o(a){T(e.$$.fragment,a),o=!1},d(a){D(e,a)}}}function ge(i,e,o){let{title:a="Share this page"}=e,{width:r="narrow"}=e,{theme:t=null}=e,{themeOverrides:m=null}=e,{marginTop:c=!1}=e,{marginBottom:g=!0}=e,s="",f="";return ie(()=>{o(6,s=document.location.href),o(7,f=document.title)}),i.$$set=p=>{"title"in p&&o(0,a=p.title),"width"in p&&o(1,r=p.width),"theme"in p&&o(2,t=p.theme),"themeOverrides"in p&&o(3,m=p.themeOverrides),"marginTop"in p&&o(4,c=p.marginTop),"marginBottom"in p&&o(5,g=p.marginBottom)},[a,r,t,m,c,g,s,f]}class E extends ee{constructor(e){super(),te(this,e,ge,de,se,{title:0,width:1,theme:2,themeOverrides:3,marginTop:4,marginBottom:5})}}E.__docgen={version:3,name:"ShareButtons.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Set the title/call to action",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Share this page"},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the container",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"narrow"},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function we(i){let e,o;const a=[i[0]];let r={};for(let t=0;t<a.length;t+=1)r=ne(r,a[t]);return e=new E({props:r}),{c(){S(e.$$.fragment)},m(t,m){B(e,t,m),o=!0},p(t,m){const c=m&1?ae(a,[le(t[0])]):{};e.$set(c)},i(t){o||(M(e.$$.fragment,t),o=!0)},o(t){T(e.$$.fragment,t),o=!1},d(t){D(e,t)}}}function _e(i){let e,o,a,r,t,m;const c=[{title:"Layout/ShareButtons"},{component:E},{argTypes:{}},X(Y)];let g={};for(let s=0;s<c.length;s+=1)g=ne(g,c[s]);return e=new ue({props:g}),a=new me({props:{$$slots:{default:[we,({args:s})=>({0:s}),({args:s})=>s?1:0]},$$scope:{ctx:i}}}),t=new fe({props:{name:"Default",args:{}}}),{c(){S(e.$$.fragment),o=d(),S(a.$$.fragment),r=d(),S(t.$$.fragment)},m(s,f){B(e,s,f),q(s,o,f),B(a,s,f),q(s,r,f),B(t,s,f),m=!0},p(s,[f]){const p=f&0?ae(c,[c[0],f&0&&{component:E},c[2],f&0&&le(X(Y))]):{};e.$set(p);const v={};f&3&&(v.$$scope={dirty:f,ctx:s}),a.$set(v)},i(s){m||(M(e.$$.fragment,s),M(a.$$.fragment,s),M(t.$$.fragment,s),m=!0)},o(s){T(e.$$.fragment,s),T(a.$$.fragment,s),T(t.$$.fragment,s),m=!1},d(s){D(e,s),s&&F(o),D(a,s),s&&F(r),D(t,s)}}}class be extends ee{constructor(e){super(),te(this,e,null,_e,se,{})}}const oe=pe(be,{meta:{title:"Layout/ShareButtons"},stories:{"tpl:default":{storyId:"layout-sharebuttons--default",name:"default",template:!0,source:"<ShareButtons {...args} />",hasArgs:!0},Default:{storyId:"layout-sharebuttons--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","ShareButtons","withComponentDocs"]}),Ce=oe.meta,xe=["Default"],Se=oe.stories.Default;export{Se as Default,xe as __namedExportsOrder,Ce as default};
//# sourceMappingURL=ShareButtons.stories-70bbaef1.js.map