import{S as V,i as B,s as j,j as h,m as y,b as p,t as c,n as _,q,w as I,x as v,a as b,u as x,r as L,v as z,d as k,p as $,z as C,k as A,l as M,F as E}from"./index-ec07ce5f.js";import{p as G,w as D,M as H,T as J,S as O}from"./collect-stories-e5908286.js";import{C as K}from"./Container-084263ee.js";import"./Theme-d829395d.js";import"./themes-9c401ccc.js";const S=`A large text block that can be used as a standfirst or transition between sections of a feature article, with various options and style customisations.

\`\`\`html
<script>
  import { Filler } from "@onsvisual/svelte-components";
<\/script>

<Filler>
  <p>Contents of filler section.</p>
</Filler>
\`\`\`
`;function N(o){let e,i;const l=o[8].default,s=q(l,o,o[9],null);return{c(){e=I("section"),s&&s.c(),v(e,"class","ons-hero__details ons-feature__filler ons-u-fs-l ons-font-weight__normal"),v(e,"id",o[0])},m(t,r){b(t,e,r),s&&s.m(e,null),i=!0},p(t,r){s&&s.p&&(!i||r&512)&&x(s,l,t,t[9],i?z(l,t[9],r,null):L(t[9]),null),(!i||r&1)&&v(e,"id",t[0])},i(t){i||(p(s,t),i=!0)},o(t){c(s,t),i=!1},d(t){t&&k(e),s&&s.d(t)}}}function P(o){let e,i;return e=new K({props:{theme:o[3],themeOverrides:o[4],width:o[1],background:o[5],marginTop:o[6],marginBottom:o[7],height:o[2],$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment)},m(l,s){y(e,l,s),i=!0},p(l,[s]){const t={};s&8&&(t.theme=l[3]),s&16&&(t.themeOverrides=l[4]),s&2&&(t.width=l[1]),s&32&&(t.background=l[5]),s&64&&(t.marginTop=l[6]),s&128&&(t.marginBottom=l[7]),s&4&&(t.height=l[2]),s&513&&(t.$$scope={dirty:s,ctx:l}),e.$set(t)},i(l){i||(p(e.$$.fragment,l),i=!0)},o(l){c(e.$$.fragment,l),i=!1},d(l){_(e,l)}}}function Q(o,e,i){let{$$slots:l={},$$scope:s}=e,{id:t=null}=e,{width:r="narrow"}=e,{height:u="tall"}=e,{theme:d="lightblue"}=e,{themeOverrides:f=null}=e,{background:g=null}=e,{marginTop:n=!1}=e,{marginBottom:m=!0}=e;return o.$$set=a=>{"id"in a&&i(0,t=a.id),"width"in a&&i(1,r=a.width),"height"in a&&i(2,u=a.height),"theme"in a&&i(3,d=a.theme),"themeOverrides"in a&&i(4,f=a.themeOverrides),"background"in a&&i(5,g=a.background),"marginTop"in a&&i(6,n=a.marginTop),"marginBottom"in a&&i(7,m=a.marginBottom),"$$scope"in a&&i(9,s=a.$$scope)},[t,r,u,d,f,g,n,m,l,s]}class w extends V{constructor(e){super(),B(this,e,Q,P,j,{id:0,width:1,height:2,theme:3,themeOverrides:4,background:5,marginTop:6,marginBottom:7})}}w.__docgen={version:3,name:"Filler.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"narrow"},{keywords:[{name:"type",description:'{"auto"|"tall"|"full"}'}],visibility:"public",description:"Sets the minimum height of the section",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"auto"|"tall"|"full"',type:[{kind:"type",text:'"auto"',type:'"auto"'},{kind:"type",text:'"tall"',type:'"tall"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"tall"},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:"lightblue"},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function R(o){let e;return{c(){e=I("p"),e.textContent="Contents of filler component"},m(i,l){b(i,e,l)},p:E,d(i){i&&k(e)}}}function U(o){let e,i;const l=[o[0]];let s={$$slots:{default:[R]},$$scope:{ctx:o}};for(let t=0;t<l.length;t+=1)s=$(s,l[t]);return e=new w({props:s}),{c(){h(e.$$.fragment)},m(t,r){y(e,t,r),i=!0},p(t,r){const u=r&1?A(l,[M(t[0])]):{};r&2&&(u.$$scope={dirty:r,ctx:t}),e.$set(u)},i(t){i||(p(e.$$.fragment,t),i=!0)},o(t){c(e.$$.fragment,t),i=!1},d(t){_(e,t)}}}function W(o){let e,i,l,s,t,r,u,d;const f=[{title:"Layout/Filler"},{component:w},{argTypes:{width:{options:["narrow","medium","width","full"],control:{type:"select"}},height:{options:["auto","tall","full"],control:{type:"select"}},theme:{options:["light","dark","lightblue"],control:{type:"select"}}}},D(S)];let g={};for(let n=0;n<f.length;n+=1)g=$(g,f[n]);return e=new H({props:g}),l=new J({props:{$$slots:{default:[U,({args:n})=>({0:n}),({args:n})=>n?1:0]},$$scope:{ctx:o}}}),t=new O({props:{name:"Default",args:{}}}),u=new O({props:{name:"Custom theme",args:{theme:"light",background:"#eee"}}}),{c(){h(e.$$.fragment),i=C(),h(l.$$.fragment),s=C(),h(t.$$.fragment),r=C(),h(u.$$.fragment)},m(n,m){y(e,n,m),b(n,i,m),y(l,n,m),b(n,s,m),y(t,n,m),b(n,r,m),y(u,n,m),d=!0},p(n,[m]){const a=m&0?A(f,[f[0],m&0&&{component:w},f[2],m&0&&M(D(S))]):{};e.$set(a);const F={};m&3&&(F.$$scope={dirty:m,ctx:n}),l.$set(F)},i(n){d||(p(e.$$.fragment,n),p(l.$$.fragment,n),p(t.$$.fragment,n),p(u.$$.fragment,n),d=!0)},o(n){c(e.$$.fragment,n),c(l.$$.fragment,n),c(t.$$.fragment,n),c(u.$$.fragment,n),d=!1},d(n){_(e,n),n&&k(i),_(l,n),n&&k(s),_(t,n),n&&k(r),_(u,n)}}}class X extends V{constructor(e){super(),B(this,e,null,W,j,{})}}const T=G(X,{meta:{title:"Layout/Filler"},stories:{"tpl:default":{storyId:"layout-filler--default",name:"default",template:!0,source:`<Filler {...args}>
  <p>Contents of filler component</p>
</Filler>`,hasArgs:!0},Default:{storyId:"layout-filler--default",name:"Default",template:!1,hasArgs:!1},CustomTheme:{storyId:"layout-filler--custom-theme",name:"Custom theme",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Filler","withComponentDocs"]}),le=T.meta,ie=["Default","CustomTheme"],se=T.stories.Default,oe=T.stories.CustomTheme;export{oe as CustomTheme,se as Default,ie as __namedExportsOrder,le as default};
//# sourceMappingURL=Filler.stories-0648ae5e.js.map
