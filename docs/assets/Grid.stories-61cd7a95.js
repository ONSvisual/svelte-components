import{S as M,i as j,s as L,w as C,j as k,z as G,x as w,a as f,m as v,B as P,b as c,g as Q,t as y,c as R,d as p,n as b,q as U,D as W,u as X,r as Y,v as Z,p as q,k as H,l as z,F as x}from"./index-ec07ce5f.js";import{p as ee,w as I,M as te,T as ie,S as N}from"./collect-stories-e5908286.js";import{C as E}from"./Container-084263ee.js";import"./Theme-d829395d.js";import"./themes-9c401ccc.js";const A=`A media grid component, useful for images and small multiple charts. Setting \`colwidth\` to **full** allows for a single cell/image/chart with an optional caption.

\`\`\`html
<script>
  import { Grid } from "@onsvisual/svelte-components";
<\/script>

<Grid>
  <div>{grid_cell_content}</div>
  <div>{grid_cell_content}</div>
  <div>{grid_cell_content}</div>
</Grid>
\`\`\`
`;function le(r){let e,l;const o=r[13].default,s=U(o,r,r[14],null);return{c(){e=C("div"),s&&s.c(),w(e,"class","grid "+r[8]+" svelte-i7tahs"),W(e,"grid-gap",r[10]),W(e,"min-height",r[9])},m(t,n){f(t,e,n),s&&s.m(e,null),l=!0},p(t,n){s&&s.p&&(!l||n&16384)&&X(s,o,t,t[14],l?Z(o,t[14],n,null):Y(t[14]),null)},i(t){l||(c(s,t),l=!0)},o(t){y(s,t),l=!1},d(t){t&&p(e),s&&s.d(t)}}}function F(r){let e,l,o;return l=new E({props:{theme:r[2],themeOverrides:r[3],width:"narrow",marginBottom:r[5],$$slots:{default:[ne]},$$scope:{ctx:r}}}),{c(){e=C("figcaption"),k(l.$$.fragment),w(e,"class","svelte-i7tahs")},m(s,t){f(s,e,t),v(l,e,null),o=!0},p(s,t){const n={};t&4&&(n.theme=s[2]),t&8&&(n.themeOverrides=s[3]),t&32&&(n.marginBottom=s[5]),t&16448&&(n.$$scope={dirty:t,ctx:s}),l.$set(n)},i(s){o||(c(l.$$.fragment,s),o=!0)},o(s){y(l.$$.fragment,s),o=!1},d(s){s&&p(e),b(l)}}}function ne(r){let e;return{c(){e=C("span"),w(e,"class","ons-figure__caption")},m(l,o){f(l,e,o),e.innerHTML=r[6]},p(l,o){o&64&&(e.innerHTML=l[6])},d(l){l&&p(e)}}}function se(r){let e,l,o,s;l=new E({props:{theme:r[2],themeOverrides:r[3],width:r[1],height:["tall","full"].includes(r[7])?r[7]:"auto",marginTop:r[4],marginBottom:r[6]?!1:r[5],$$slots:{default:[le]},$$scope:{ctx:r}}});let t=r[6]&&F(r);return{c(){e=C("figure"),k(l.$$.fragment),o=G(),t&&t.c(),w(e,"id",r[0]),w(e,"aria-label",r[6]),w(e,"class","svelte-i7tahs")},m(n,d){f(n,e,d),v(l,e,null),P(e,o),t&&t.m(e,null),s=!0},p(n,[d]){const m={};d&4&&(m.theme=n[2]),d&8&&(m.themeOverrides=n[3]),d&2&&(m.width=n[1]),d&128&&(m.height=["tall","full"].includes(n[7])?n[7]:"auto"),d&16&&(m.marginTop=n[4]),d&96&&(m.marginBottom=n[6]?!1:n[5]),d&16384&&(m.$$scope={dirty:d,ctx:n}),l.$set(m),n[6]?t?(t.p(n,d),d&64&&c(t,1)):(t=F(n),t.c(),c(t,1),t.m(e,null)):t&&(Q(),y(t,1,1,()=>{t=null}),R()),(!s||d&1)&&w(e,"id",n[0]),(!s||d&64)&&w(e,"aria-label",n[6])},i(n){s||(c(l.$$.fragment,n),c(t),s=!0)},o(n){y(l.$$.fragment,n),y(t),s=!1},d(n){n&&p(e),b(l),t&&t.d()}}}function ae(r,e,l){let{$$slots:o={},$$scope:s}=e,{id:t=null}=e,{width:n="medium"}=e,{theme:d=null}=e,{themeOverrides:m=null}=e,{marginTop:u=!1}=e,{marginBottom:D=!0}=e,{colwidth:h="medium"}=e,{caption:T=""}=e,{height:g=200}=e,{gap:_=12}=e,$=!h||h==="full"?"":`grid-${h}`,S=g==="full"?"100vh":Number.isNaN(g)?g:g+"px",i=Number.isNaN(_)?_:_+"px";return r.$$set=a=>{"id"in a&&l(0,t=a.id),"width"in a&&l(1,n=a.width),"theme"in a&&l(2,d=a.theme),"themeOverrides"in a&&l(3,m=a.themeOverrides),"marginTop"in a&&l(4,u=a.marginTop),"marginBottom"in a&&l(5,D=a.marginBottom),"colwidth"in a&&l(11,h=a.colwidth),"caption"in a&&l(6,T=a.caption),"height"in a&&l(7,g=a.height),"gap"in a&&l(12,_=a.gap),"$$scope"in a&&l(14,s=a.$$scope)},[t,n,d,m,u,D,T,g,$,S,i,h,_,o,s]}class B extends M{constructor(e){super(),j(this,e,ae,se,L,{id:0,width:1,theme:2,themeOverrides:3,marginTop:4,marginBottom:5,colwidth:11,caption:6,height:7,gap:12})}}B.__docgen={version:3,name:"Grid.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"medium"},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"colwidth",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"medium"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) caption below the grid",name:"caption",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{number|string}"}],visibility:"public",description:'Set the minimum height of a grid row (can be a number in pixels, or a valid CSS height, like "100vh")',name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"number|string",type:[{kind:"type",text:"number",type:"number"},{kind:"type",text:"string",type:"string"}]},defaultValue:200},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Set the grid gap, in pixels",name:"gap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:12}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function re(r){let e,l,o,s,t,n,d;return{c(){e=C("div"),e.textContent="Grid cell one",l=G(),o=C("div"),o.textContent="Grid cell two",s=G(),t=C("div"),t.textContent="Grid cell three",n=G(),d=C("div"),d.textContent="Grid cell four",w(e,"class","grid-cell svelte-nlpf1e"),w(o,"class","grid-cell svelte-nlpf1e"),w(t,"class","grid-cell svelte-nlpf1e"),w(d,"class","grid-cell svelte-nlpf1e")},m(m,u){f(m,e,u),f(m,l,u),f(m,o,u),f(m,s,u),f(m,t,u),f(m,n,u),f(m,d,u)},p:x,d(m){m&&p(e),m&&p(l),m&&p(o),m&&p(s),m&&p(t),m&&p(n),m&&p(d)}}}function oe(r){let e,l;const o=[r[0]];let s={$$slots:{default:[re]},$$scope:{ctx:r}};for(let t=0;t<o.length;t+=1)s=q(s,o[t]);return e=new B({props:s}),{c(){k(e.$$.fragment)},m(t,n){v(e,t,n),l=!0},p(t,n){const d=n&1?H(o,[z(t[0])]):{};n&2&&(d.$$scope={dirty:n,ctx:t}),e.$set(d)},i(t){l||(c(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){b(e,t)}}}function de(r){let e,l,o,s,t,n,d,m,u,D,h,T,g,_;const $=[{title:"Layout/Grid"},{component:B},{argTypes:{width:{options:["narrow","medium","width","full"],control:{type:"select"}}}},I(A)];let S={};for(let i=0;i<$.length;i+=1)S=q(S,$[i]);return e=new te({props:S}),o=new ie({props:{$$slots:{default:[oe,({args:i})=>({0:i}),({args:i})=>i?1:0]},$$scope:{ctx:r}}}),t=new N({props:{name:"Default",args:{}}}),d=new N({props:{name:"Dark theme",args:{theme:"dark"}}}),u=new N({props:{name:"Wide columns",args:{colwidth:"wide"}}}),h=new N({props:{name:"Narrow columns",args:{colwidth:"narrow"}}}),g=new N({props:{name:"Full width columns",args:{colwidth:"full"}}}),{c(){k(e.$$.fragment),l=G(),k(o.$$.fragment),s=G(),k(t.$$.fragment),n=G(),k(d.$$.fragment),m=G(),k(u.$$.fragment),D=G(),k(h.$$.fragment),T=G(),k(g.$$.fragment)},m(i,a){v(e,i,a),f(i,l,a),v(o,i,a),f(i,s,a),v(t,i,a),f(i,n,a),v(d,i,a),f(i,m,a),v(u,i,a),f(i,D,a),v(h,i,a),f(i,T,a),v(g,i,a),_=!0},p(i,[a]){const K=a&0?H($,[$[0],a&0&&{component:B},$[2],a&0&&z(I(A))]):{};e.$set(K);const V={};a&3&&(V.$$scope={dirty:a,ctx:i}),o.$set(V)},i(i){_||(c(e.$$.fragment,i),c(o.$$.fragment,i),c(t.$$.fragment,i),c(d.$$.fragment,i),c(u.$$.fragment,i),c(h.$$.fragment,i),c(g.$$.fragment,i),_=!0)},o(i){y(e.$$.fragment,i),y(o.$$.fragment,i),y(t.$$.fragment,i),y(d.$$.fragment,i),y(u.$$.fragment,i),y(h.$$.fragment,i),y(g.$$.fragment,i),_=!1},d(i){b(e,i),i&&p(l),b(o,i),i&&p(s),b(t,i),i&&p(n),b(d,i),i&&p(m),b(u,i),i&&p(D),b(h,i),i&&p(T),b(g,i)}}}class J extends M{constructor(e){super(),j(this,e,null,de,L,{})}}J.__docgen={version:3,name:"Grid.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const O=ee(J,{meta:{title:"Layout/Grid"},stories:{"tpl:default":{storyId:"layout-grid--default",name:"default",template:!0,source:`<Grid {...args}>
  <div class="grid-cell">Grid cell one</div>
  <div class="grid-cell">Grid cell two</div>
  <div class="grid-cell">Grid cell three</div>
  <div class="grid-cell">Grid cell four</div>
</Grid>`,hasArgs:!0},Default:{storyId:"layout-grid--default",name:"Default",template:!1,hasArgs:!1},DarkTheme:{storyId:"layout-grid--dark-theme",name:"Dark theme",template:!1,hasArgs:!1},WideColumns:{storyId:"layout-grid--wide-columns",name:"Wide columns",template:!1,hasArgs:!1},NarrowColumns:{storyId:"layout-grid--narrow-columns",name:"Narrow columns",template:!1,hasArgs:!1},FullWidthColumns:{storyId:"layout-grid--full-width-columns",name:"Full width columns",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Grid","withComponentDocs"]}),ge=O.meta,ye=["Default","DarkTheme","WideColumns","NarrowColumns","FullWidthColumns"],he=O.stories.Default,we=O.stories.DarkTheme,_e=O.stories.WideColumns,ke=O.stories.NarrowColumns,ve=O.stories.FullWidthColumns;export{we as DarkTheme,he as Default,ve as FullWidthColumns,ke as NarrowColumns,_e as WideColumns,ye as __namedExportsOrder,ge as default};
//# sourceMappingURL=Grid.stories-61cd7a95.js.map
