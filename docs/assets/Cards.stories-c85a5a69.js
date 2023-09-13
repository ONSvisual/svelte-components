import{S as Y,i as Z,s as x,j as k,m as $,b as h,t as C,n as b,B as Ce,q as ce,u as pe,r as ge,v as _e,x as O,w as A,C as B,U as N,a3 as ne,y as I,a as g,H as R,d as _,F as ae,z as we,I as V,J as ye,af as le,p as z,k as E,l as F}from"./index-4c87ff1b.js";import{p as ke,w as re,M as $e,T as be,S as j,b as M}from"./collect-stories-1e766e4e.js";import{G as ve}from"./Grid-5c85ff23.js";import{s as Le}from"./utils-f8d1b000.js";import"./Container-7073de09.js";import"./Theme-d97c2bb2.js";const oe=`Display content and links as cards. The \`<Cards>\` component is a wrapper for the \`<Grid>\` component.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Cards, Card } from "@onsvisual/svelte-components";
<\/script>

<Cards>
  <Card title="Card one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Cards>
\`\`\`
`,de=`<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Cards, Card } from "@onsvisual/svelte-components";
<\/script>

<Cards>
  <Card title="Card one" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Cards>
\`\`\`
`,me=`<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Cards, Card } from "@onsvisual/svelte-components";
<\/script>

<Cards>
  <Card
    title="Card one"
    href="#"
    image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Card>
  <Card
    title="Card two"
    href="#"
    image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Card>
  <Card
    title="Card three"
    href="#"
    image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Card>
</Cards>
\`\`\`
`,ue=`<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Cards, Card } from "@onsvisual/svelte-components";
<\/script>

<Cards>
  <Card title="Card one" rowspan={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two" colspan={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Cards>
\`\`\``;function Te(a){let e;const s=a[13].default,t=ce(s,a,a[14],null);return{c(){t&&t.c()},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&16384)&&pe(t,s,l,l[14],e?_e(s,l[14],n,null):ge(l[14]),null)},i(l){e||(h(t,l),e=!0)},o(l){C(t,l),e=!1},d(l){t&&t.d(l)}}}function Be(a){let e,s;return e=new ve({props:{id:a[0],cls:a[1],width:a[2],height:a[10],title:a[3],hideTitle:a[4],theme:a[5],themeOverrides:a[6],marginTop:a[7],marginBottom:a[8],colwidth:a[9],gap:a[11],$$slots:{default:[Te]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},m(t,l){$(e,t,l),s=!0},p(t,[l]){const n={};l&1&&(n.id=t[0]),l&2&&(n.cls=t[1]),l&4&&(n.width=t[2]),l&1024&&(n.height=t[10]),l&8&&(n.title=t[3]),l&16&&(n.hideTitle=t[4]),l&32&&(n.theme=t[5]),l&64&&(n.themeOverrides=t[6]),l&128&&(n.marginTop=t[7]),l&256&&(n.marginBottom=t[8]),l&512&&(n.colwidth=t[9]),l&2048&&(n.gap=t[11]),l&16384&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function Ae(a,e,s){let{$$slots:t={},$$scope:l}=e,{id:n=null}=e,{cls:d="ons-cards"}=e,{width:i="wide"}=e,{title:o=""}=e,{hideTitle:u=!1}=e,{theme:v=null}=e,{themeOverrides:y=null}=e,{marginTop:L=!1}=e,{marginBottom:S=!0}=e,{colwidth:T="medium"}=e,{height:m=200}=e,{noBackground:w=!1}=e,{gap:f=w?36:16}=e;return Ce("noBackground",w),a.$$set=c=>{"id"in c&&s(0,n=c.id),"cls"in c&&s(1,d=c.cls),"width"in c&&s(2,i=c.width),"title"in c&&s(3,o=c.title),"hideTitle"in c&&s(4,u=c.hideTitle),"theme"in c&&s(5,v=c.theme),"themeOverrides"in c&&s(6,y=c.themeOverrides),"marginTop"in c&&s(7,L=c.marginTop),"marginBottom"in c&&s(8,S=c.marginBottom),"colwidth"in c&&s(9,T=c.colwidth),"height"in c&&s(10,m=c.height),"noBackground"in c&&s(12,w=c.noBackground),"gap"in c&&s(11,f=c.gap),"$$scope"in c&&s(14,l=c.$$scope)},[n,d,i,o,u,v,y,L,S,T,m,f,w,t,l]}class q extends Y{constructor(e){super(),Z(this,e,Ae,Be,x,{id:0,cls:1,width:2,title:3,hideTitle:4,theme:5,themeOverrides:6,marginTop:7,marginBottom:8,colwidth:9,height:10,noBackground:12,gap:11})}}q.__docgen={version:3,name:"Cards.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets a css class for the component",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"ons-cards"},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"wider"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"wider"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"wider"',type:'"wider"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"wide"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title of the section",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows the h2 title tag for the section to be visually hidden",name:"hideTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"colwidth",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"medium"},{keywords:[{name:"type",description:"{number|string}"}],visibility:"public",description:'Set the minimum height of a grid row (can be a number in pixels, or a valid CSS height, like "100vh")',name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"number|string",type:[{kind:"type",text:"number",type:"number"},{kind:"type",text:"string",type:"string"}]},defaultValue:200},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Removes the backgroup on the cards",name:"noBackground",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Set the gap between cards, in pixels",name:"gap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function Se(a){let e,s;return{c(){e=O("h3"),s=V(a[0]),B(e,"class","ons-card__title ons-u-fs-m"),N(e,"ons-u-vh",a[2]),I(e,"padding",a[8]?"":"8px 16px 0"),I(e,"margin-bottom","5px")},m(t,l){g(t,e,l),R(e,s)},p(t,l){l&1&&ye(s,t[0]),l&4&&N(e,"ons-u-vh",t[2]),l&256&&I(e,"padding",t[8]?"":"8px 16px 0")},d(t){t&&_(e)}}}function Ve(a){let e,s,t,l,n=a[3]&&fe(a);return{c(){e=O("a"),n&&n.c(),s=A(),t=O("h3"),l=V(a[0]),B(t,"class","ons-card__title ons-u-fs-m"),I(t,"padding",!a[8]&&!a[3]?"12px 16px 0":a[8]?"":"0 16px"),B(e,"href",a[5]),B(e,"class","ons-card__link ons-u-db"),N(e,"ons-u-vh",a[2])},m(d,i){g(d,e,i),n&&n.m(e,null),R(e,s),R(e,t),R(t,l)},p(d,i){d[3]?n?n.p(d,i):(n=fe(d),n.c(),n.m(e,s)):n&&(n.d(1),n=null),i&1&&ye(l,d[0]),i&264&&I(t,"padding",!d[8]&&!d[3]?"12px 16px 0":d[8]?"":"0 16px"),i&32&&B(e,"href",d[5]),i&4&&N(e,"ons-u-vh",d[2])},d(d){d&&_(e),n&&n.d()}}}function fe(a){let e,s;return{c(){e=O("img"),B(e,"class","ons-card__image ons-u-mb-s svelte-k1nrya"),le(e.src,s=a[3])||B(e,"src",s),B(e,"alt",a[4]),B(e,"loading","lazy"),I(e,"width","100%")},m(t,l){g(t,e,l)},p(t,l){l&8&&!le(e.src,s=t[3])&&B(e,"src",s),l&16&&B(e,"alt",t[4])},d(t){t&&_(e)}}}function We(a){let e,s,t,l,n,d,i,o=`span ${a[9]&&a[10]<3?a[10]:a[6]==1?1:a[6]>a[10]?a[10]:a[6]}`,u;function v(m,w){if(m[5]&&m[0])return Ve;if(m[0])return Se}let y=v(a),L=y&&y(a);const S=a[13].default,T=ce(S,a,a[12],null);return{c(){e=O("div"),s=O("div"),L&&L.c(),t=A(),l=O("div"),T&&T.c(),B(l,"id",n=a[1]+"_text"),B(l,"class","svelte-k1nrya"),N(l,"tile__body",!a[8]),B(s,"id",a[1]),B(s,"class","ons-card"),B(s,"aria-describedby",d=a[1]+"_text"),B(e,"class",i=ne(a[8]?"":"tile tile__content")+" svelte-k1nrya"),I(e,"grid-column",o),I(e,"grid-column-end",a[9]?a[10]+1:null),I(e,"grid-row",a[7]>1?`span ${a[7]}`:null)},m(m,w){g(m,e,w),R(e,s),L&&L.m(s,null),R(s,t),R(s,l),T&&T.m(l,null),u=!0},p(m,[w]){y===(y=v(m))&&L?L.p(m,w):(L&&L.d(1),L=y&&y(m),L&&(L.c(),L.m(s,t))),T&&T.p&&(!u||w&4096)&&pe(T,S,m,m[12],u?_e(S,m[12],w,null):ge(m[12]),null),(!u||w&2&&n!==(n=m[1]+"_text"))&&B(l,"id",n),(!u||w&256)&&N(l,"tile__body",!m[8]),(!u||w&2)&&B(s,"id",m[1]),(!u||w&2&&d!==(d=m[1]+"_text"))&&B(s,"aria-describedby",d),(!u||w&256&&i!==(i=ne(m[8]?"":"tile tile__content")+" svelte-k1nrya"))&&B(e,"class",i),w&1600&&o!==(o=`span ${m[9]&&m[10]<3?m[10]:m[6]==1?1:m[6]>m[10]?m[10]:m[6]}`)&&I(e,"grid-column",o),w&1536&&I(e,"grid-column-end",m[9]?m[10]+1:null),w&128&&I(e,"grid-row",m[7]>1?`span ${m[7]}`:null)},i(m){u||(h(T,m),u=!0)},o(m){C(T,m),u=!1},d(m){m&&_(e),L&&L.d(),T&&T.d(m)}}}function Ie(a,e,s){let t,{$$slots:l={},$$scope:n}=e,{title:d=null}=e,{id:i=Le(d)}=e,{hideTitle:o=!1}=e,{image:u=null}=e,{imageAlt:v=null}=e,{href:y=null}=e,{colspan:L=1}=e,{rowspan:S=1}=e,{noBackground:T=ae("noBackground")||!1}=e,{grow:m=!1}=e;const w=ae("cols");return we(a,w,f=>s(10,t=f)),a.$$set=f=>{"title"in f&&s(0,d=f.title),"id"in f&&s(1,i=f.id),"hideTitle"in f&&s(2,o=f.hideTitle),"image"in f&&s(3,u=f.image),"imageAlt"in f&&s(4,v=f.imageAlt),"href"in f&&s(5,y=f.href),"colspan"in f&&s(6,L=f.colspan),"rowspan"in f&&s(7,S=f.rowspan),"noBackground"in f&&s(8,T=f.noBackground),"grow"in f&&s(9,m=f.grow),"$$scope"in f&&s(12,n=f.$$scope)},[d,i,o,u,v,y,L,S,T,m,t,w,n,l]}class W extends Y{constructor(e){super(),Z(this,e,Ie,We,x,{title:0,id:1,hideTitle:2,image:3,imageAlt:4,href:5,colspan:6,rowspan:7,noBackground:8,grow:9})}}W.__docgen={version:3,name:"Card.svelte",data:[{visibility:"public",description:null,keywords:[],name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"hideTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"imageAlt",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"href",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"colspan",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{keywords:[],visibility:"public",description:"1, 2 or 3",name:"rowspan",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{visibility:"public",description:null,keywords:[],name:"noBackground",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"grow",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function De(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function je(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function Oe(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function Re(a){let e,s,t,l,n,d;return e=new W({props:{title:"Card one",$$slots:{default:[De]},$$scope:{ctx:a}}}),t=new W({props:{title:"Card two",$$slots:{default:[je]},$$scope:{ctx:a}}}),n=new W({props:{title:"Card three",$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment),s=A(),k(t.$$.fragment),l=A(),k(n.$$.fragment)},m(i,o){$(e,i,o),g(i,s,o),$(t,i,o),g(i,l,o),$(n,i,o),d=!0},p(i,o){const u={};o&2&&(u.$$scope={dirty:o,ctx:i}),e.$set(u);const v={};o&2&&(v.$$scope={dirty:o,ctx:i}),t.$set(v);const y={};o&2&&(y.$$scope={dirty:o,ctx:i}),n.$set(y)},i(i){d||(h(e.$$.fragment,i),h(t.$$.fragment,i),h(n.$$.fragment,i),d=!0)},o(i){C(e.$$.fragment,i),C(t.$$.fragment,i),C(n.$$.fragment,i),d=!1},d(i){b(e,i),i&&_(s),b(t,i),i&&_(l),b(n,i)}}}function qe(a){let e,s;const t=[a[0]];let l={$$slots:{default:[Re]},$$scope:{ctx:a}};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return e=new q({props:l}),{c(){k(e.$$.fragment)},m(n,d){$(e,n,d),s=!0},p(n,d){const i=d&1?E(t,[F(n[0])]):{};d&2&&(i.$$scope={dirty:d,ctx:n}),e.$set(i)},i(n){s||(h(e.$$.fragment,n),s=!0)},o(n){C(e.$$.fragment,n),s=!1},d(n){b(e,n)}}}function Me(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function Ne(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function Ge(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function ze(a){let e,s,t,l,n,d;return e=new W({props:{title:"Card one",rowspan:2,$$slots:{default:[Me]},$$scope:{ctx:a}}}),t=new W({props:{title:"Card two",colspan:2,$$slots:{default:[Ne]},$$scope:{ctx:a}}}),n=new W({props:{title:"Card three",$$slots:{default:[Ge]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment),s=A(),k(t.$$.fragment),l=A(),k(n.$$.fragment)},m(i,o){$(e,i,o),g(i,s,o),$(t,i,o),g(i,l,o),$(n,i,o),d=!0},p(i,o){const u={};o&2&&(u.$$scope={dirty:o,ctx:i}),e.$set(u);const v={};o&2&&(v.$$scope={dirty:o,ctx:i}),t.$set(v);const y={};o&2&&(y.$$scope={dirty:o,ctx:i}),n.$set(y)},i(i){d||(h(e.$$.fragment,i),h(t.$$.fragment,i),h(n.$$.fragment,i),d=!0)},o(i){C(e.$$.fragment,i),C(t.$$.fragment,i),C(n.$$.fragment,i),d=!1},d(i){b(e,i),i&&_(s),b(t,i),i&&_(l),b(n,i)}}}function Ee(a){let e,s;return e=new q({props:{$$slots:{default:[ze]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},m(t,l){$(e,t,l),s=!0},p(t,l){const n={};l&2&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function Fe(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function He(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function Je(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function Ue(a){let e,s,t,l,n,d;return e=new W({props:{title:"Card one",href:"#",$$slots:{default:[Fe]},$$scope:{ctx:a}}}),t=new W({props:{title:"Card two",href:"#",$$slots:{default:[He]},$$scope:{ctx:a}}}),n=new W({props:{title:"Card three",href:"#",$$slots:{default:[Je]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment),s=A(),k(t.$$.fragment),l=A(),k(n.$$.fragment)},m(i,o){$(e,i,o),g(i,s,o),$(t,i,o),g(i,l,o),$(n,i,o),d=!0},p(i,o){const u={};o&2&&(u.$$scope={dirty:o,ctx:i}),e.$set(u);const v={};o&2&&(v.$$scope={dirty:o,ctx:i}),t.$set(v);const y={};o&2&&(y.$$scope={dirty:o,ctx:i}),n.$set(y)},i(i){d||(h(e.$$.fragment,i),h(t.$$.fragment,i),h(n.$$.fragment,i),d=!0)},o(i){C(e.$$.fragment,i),C(t.$$.fragment,i),C(n.$$.fragment,i),d=!1},d(i){b(e,i),i&&_(s),b(t,i),i&&_(l),b(n,i)}}}function Ke(a){let e,s;return e=new q({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},m(t,l){$(e,t,l),s=!0},p(t,l){const n={};l&2&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function Pe(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function Qe(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function Xe(a){let e;return{c(){e=V("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")},m(s,t){g(s,e,t)},d(s){s&&_(e)}}}function Ye(a){let e,s,t,l,n,d;return e=new W({props:{title:"Card one",href:"#",image:"https://service-manual.ons.gov.uk/img/small/placeholder-card.png",$$slots:{default:[Pe]},$$scope:{ctx:a}}}),t=new W({props:{title:"Card two",href:"#",image:"https://service-manual.ons.gov.uk/img/small/placeholder-card.png",$$slots:{default:[Qe]},$$scope:{ctx:a}}}),n=new W({props:{title:"Card three",href:"#",image:"https://service-manual.ons.gov.uk/img/small/placeholder-card.png",$$slots:{default:[Xe]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment),s=A(),k(t.$$.fragment),l=A(),k(n.$$.fragment)},m(i,o){$(e,i,o),g(i,s,o),$(t,i,o),g(i,l,o),$(n,i,o),d=!0},p(i,o){const u={};o&2&&(u.$$scope={dirty:o,ctx:i}),e.$set(u);const v={};o&2&&(v.$$scope={dirty:o,ctx:i}),t.$set(v);const y={};o&2&&(y.$$scope={dirty:o,ctx:i}),n.$set(y)},i(i){d||(h(e.$$.fragment,i),h(t.$$.fragment,i),h(n.$$.fragment,i),d=!0)},o(i){C(e.$$.fragment,i),C(t.$$.fragment,i),C(n.$$.fragment,i),d=!1},d(i){b(e,i),i&&_(s),b(t,i),i&&_(l),b(n,i)}}}function Ze(a){let e,s;return e=new q({props:{$$slots:{default:[Ye]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},m(t,l){$(e,t,l),s=!0},p(t,l){const n={};l&2&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function xe(a){let e,s,t,l,n,d,i,o,u,v,y,L,S,T,m,w,f,c;const G=[{title:"Layout/Cards"},{component:q},{argTypes:{width:{options:["narrow","medium","wide","wider","full"],control:{type:"select"}}}},re(oe)];let K={};for(let r=0;r<G.length;r+=1)K=z(K,G[r]);e=new $e({props:K}),t=new be({props:{$$slots:{default:[qe,({args:r})=>({0:r}),({args:r})=>r?1:0]},$$scope:{ctx:a}}}),n=new j({props:{name:"Default",args:{}}}),i=new j({props:{name:"Cards with a title",args:{title:"Some cards"}}}),u=new j({props:{name:"Cards with no background",args:{noBackground:!0}}}),y=new j({props:{name:"Cards, wide",args:{colwidth:"wide"}}});const H=[{name:"Cards, rowspan and colspan"},M(ue)];let P={$$slots:{default:[Ee]},$$scope:{ctx:a}};for(let r=0;r<H.length;r+=1)P=z(P,H[r]);S=new j({props:P});const J=[{name:"Cards with links"},M(de)];let Q={$$slots:{default:[Ke]},$$scope:{ctx:a}};for(let r=0;r<J.length;r+=1)Q=z(Q,J[r]);m=new j({props:Q});const U=[{name:"Cards with images"},M(me)];let X={$$slots:{default:[Ze]},$$scope:{ctx:a}};for(let r=0;r<U.length;r+=1)X=z(X,U[r]);return f=new j({props:X}),{c(){k(e.$$.fragment),s=A(),k(t.$$.fragment),l=A(),k(n.$$.fragment),d=A(),k(i.$$.fragment),o=A(),k(u.$$.fragment),v=A(),k(y.$$.fragment),L=A(),k(S.$$.fragment),T=A(),k(m.$$.fragment),w=A(),k(f.$$.fragment)},m(r,p){$(e,r,p),g(r,s,p),$(t,r,p),g(r,l,p),$(n,r,p),g(r,d,p),$(i,r,p),g(r,o,p),$(u,r,p),g(r,v,p),$(y,r,p),g(r,L,p),$(S,r,p),g(r,T,p),$(m,r,p),g(r,w,p),$(f,r,p),c=!0},p(r,[p]){const he=p&0?E(G,[G[0],p&0&&{component:q},G[2],p&0&&F(re(oe))]):{};e.$set(he);const ee={};p&3&&(ee.$$scope={dirty:p,ctx:r}),t.$set(ee);const te=p&0?E(H,[H[0],F(M(ue))]):{};p&2&&(te.$$scope={dirty:p,ctx:r}),S.$set(te);const se=p&0?E(J,[J[0],F(M(de))]):{};p&2&&(se.$$scope={dirty:p,ctx:r}),m.$set(se);const ie=p&0?E(U,[U[0],F(M(me))]):{};p&2&&(ie.$$scope={dirty:p,ctx:r}),f.$set(ie)},i(r){c||(h(e.$$.fragment,r),h(t.$$.fragment,r),h(n.$$.fragment,r),h(i.$$.fragment,r),h(u.$$.fragment,r),h(y.$$.fragment,r),h(S.$$.fragment,r),h(m.$$.fragment,r),h(f.$$.fragment,r),c=!0)},o(r){C(e.$$.fragment,r),C(t.$$.fragment,r),C(n.$$.fragment,r),C(i.$$.fragment,r),C(u.$$.fragment,r),C(y.$$.fragment,r),C(S.$$.fragment,r),C(m.$$.fragment,r),C(f.$$.fragment,r),c=!1},d(r){b(e,r),r&&_(s),b(t,r),r&&_(l),b(n,r),r&&_(d),b(i,r),r&&_(o),b(u,r),r&&_(v),b(y,r),r&&_(L),b(S,r),r&&_(T),b(m,r),r&&_(w),b(f,r)}}}class et extends Y{constructor(e){super(),Z(this,e,null,xe,x,{})}}const D=ke(et,{meta:{title:"Layout/Cards"},stories:{"tpl:default":{storyId:"layout-cards--default",name:"default",template:!0,source:`<Cards {...args}>
  <Card title="Card one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Cards>`,hasArgs:!0},Default:{storyId:"layout-cards--default",name:"Default",template:!1,hasArgs:!1},CardsWithATitle:{storyId:"layout-cards--cards-with-a-title",name:"Cards with a title",template:!1,hasArgs:!1},CardsWithNoBackground:{storyId:"layout-cards--cards-with-no-background",name:"Cards with no background",template:!1,hasArgs:!1},CardsWide:{storyId:"layout-cards--cards-wide",name:"Cards, wide",template:!1,hasArgs:!1},CardsRowspanAndColspan:{storyId:"layout-cards--cards-rowspan-and-colspan",name:"Cards, rowspan and colspan",template:!1,source:`<Cards>
  <Card title="Card one" rowspan="{2}"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
  >
  <Card title="Card two" colspan="{2}"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
  >
  <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Cards>`,hasArgs:!1},CardsWithLinks:{storyId:"layout-cards--cards-with-links",name:"Cards with links",template:!1,source:`<Cards>
  <Card title="Card one" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
  >
</Cards>`,hasArgs:!1},CardsWithImages:{storyId:"layout-cards--cards-with-images",name:"Cards with images",template:!1,source:`<Cards>
  <Card
    title="Card one"
    href="#"
    image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
  >
  <Card
    title="Card two"
    href="#"
    image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
  >
  <Card
    title="Card three"
    href="#"
    image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card
  >
</Cards>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","egLinks","egImages","egSpans","Cards","Card","withComponentDocs","withStoryDocs"]}),rt=D.meta,ot=["Default","CardsWithATitle","CardsWithNoBackground","CardsWide","CardsRowspanAndColspan","CardsWithLinks","CardsWithImages"],dt=D.stories.Default,mt=D.stories.CardsWithATitle,ut=D.stories.CardsWithNoBackground,ft=D.stories.CardsWide,ct=D.stories.CardsRowspanAndColspan,pt=D.stories.CardsWithLinks,gt=D.stories.CardsWithImages;export{ct as CardsRowspanAndColspan,ft as CardsWide,mt as CardsWithATitle,gt as CardsWithImages,pt as CardsWithLinks,ut as CardsWithNoBackground,dt as Default,ot as __namedExportsOrder,rt as default};
//# sourceMappingURL=Cards.stories-c85a5a69.js.map
