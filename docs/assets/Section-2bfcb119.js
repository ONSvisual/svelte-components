import{S as v,i as O,s as T,j as S,m as V,b as h,t as p,n as B,q as j,w as g,x as f,a as b,u as C,r as q,v as D,d as k,z as I,B as F,A as z,C as E}from"./index-ec07ce5f.js";import{C as A}from"./Container-084263ee.js";import{s as w}from"./utils-fbf4892b.js";function G(a){let e,l;const n=a[8].default,i=j(n,a,a[9],null);return{c(){e=g("section"),i&&i.c(),f(e,"class","ons-hero__details ons-feature__filler ons-u-fs-l ons-font-weight__normal"),f(e,"id",a[0])},m(t,r){b(t,e,r),i&&i.m(e,null),l=!0},p(t,r){i&&i.p&&(!l||r&512)&&C(i,n,t,t[9],l?D(n,t[9],r,null):q(t[9]),null),(!l||r&1)&&f(e,"id",t[0])},i(t){l||(h(i,t),l=!0)},o(t){p(i,t),l=!1},d(t){t&&k(e),i&&i.d(t)}}}function H(a){let e,l;return e=new A({props:{theme:a[3],themeOverrides:a[4],width:a[1],background:a[5],marginTop:a[6],marginBottom:a[7],height:a[2],$$slots:{default:[G]},$$scope:{ctx:a}}}),{c(){S(e.$$.fragment)},m(n,i){V(e,n,i),l=!0},p(n,[i]){const t={};i&8&&(t.theme=n[3]),i&16&&(t.themeOverrides=n[4]),i&2&&(t.width=n[1]),i&32&&(t.background=n[5]),i&64&&(t.marginTop=n[6]),i&128&&(t.marginBottom=n[7]),i&4&&(t.height=n[2]),i&513&&(t.$$scope={dirty:i,ctx:n}),e.$set(t)},i(n){l||(h(e.$$.fragment,n),l=!0)},o(n){p(e.$$.fragment,n),l=!1},d(n){B(e,n)}}}function J(a,e,l){let{$$slots:n={},$$scope:i}=e,{id:t=null}=e,{width:r="narrow"}=e,{height:d="tall"}=e,{theme:s="lightblue"}=e,{themeOverrides:u=null}=e,{background:m=null}=e,{marginTop:y=!1}=e,{marginBottom:c=!0}=e;return a.$$set=o=>{"id"in o&&l(0,t=o.id),"width"in o&&l(1,r=o.width),"height"in o&&l(2,d=o.height),"theme"in o&&l(3,s=o.theme),"themeOverrides"in o&&l(4,u=o.themeOverrides),"background"in o&&l(5,m=o.background),"marginTop"in o&&l(6,y=o.marginTop),"marginBottom"in o&&l(7,c=o.marginBottom),"$$scope"in o&&l(9,i=o.$$scope)},[t,r,d,s,u,m,y,c,n,i]}class K extends v{constructor(e){super(),O(this,e,J,H,T,{id:0,width:1,height:2,theme:3,themeOverrides:4,background:5,marginTop:6,marginBottom:7})}}K.__docgen={version:3,name:"Filler.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"narrow"},{keywords:[{name:"type",description:'{"auto"|"tall"|"full"}'}],visibility:"public",description:"Sets the minimum height of the section",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"auto"|"tall"|"full"',type:[{kind:"type",text:'"auto"',type:'"auto"'},{kind:"type",text:'"tall"',type:'"tall"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"tall"},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:"lightblue"},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function _(a){let e,l;return{c(){e=g("h2"),l=z(a[2]),f(e,"class","section-title")},m(n,i){b(n,e,i),F(e,l)},p(n,i){i&4&&E(l,n[2])},d(n){n&&k(e)}}}function L(a){let e,l,n,i,t=a[2]&&!a[3]&&_(a);const r=a[8].default,d=j(r,a,a[9],null);return{c(){e=g("section"),t&&t.c(),l=I(),d&&d.c(),f(e,"id",n=a[0]?a[0]:w(a[2])),f(e,"aria-label",a[2]),f(e,"class","ons-feature__section")},m(s,u){b(s,e,u),t&&t.m(e,null),F(e,l),d&&d.m(e,null),i=!0},p(s,u){s[2]&&!s[3]?t?t.p(s,u):(t=_(s),t.c(),t.m(e,l)):t&&(t.d(1),t=null),d&&d.p&&(!i||u&512)&&C(d,r,s,s[9],i?D(r,s[9],u,null):q(s[9]),null),(!i||u&5&&n!==(n=s[0]?s[0]:w(s[2])))&&f(e,"id",n),(!i||u&4)&&f(e,"aria-label",s[2])},i(s){i||(h(d,s),i=!0)},o(s){p(d,s),i=!1},d(s){s&&k(e),t&&t.d(),d&&d.d(s)}}}function M(a){let e,l;return e=new A({props:{theme:a[4],themeOverrides:a[5],width:a[1],marginTop:a[6],marginBottom:a[7],$$slots:{default:[L]},$$scope:{ctx:a}}}),{c(){S(e.$$.fragment)},m(n,i){V(e,n,i),l=!0},p(n,[i]){const t={};i&16&&(t.theme=n[4]),i&32&&(t.themeOverrides=n[5]),i&2&&(t.width=n[1]),i&64&&(t.marginTop=n[6]),i&128&&(t.marginBottom=n[7]),i&525&&(t.$$scope={dirty:i,ctx:n}),e.$set(t)},i(n){l||(h(e.$$.fragment,n),l=!0)},o(n){p(e.$$.fragment,n),l=!1},d(n){B(e,n)}}}function N(a,e,l){let{$$slots:n={},$$scope:i}=e,{id:t=null}=e,{width:r="narrow"}=e,{title:d=""}=e,{hideTitle:s=!1}=e,{theme:u=null}=e,{themeOverrides:m=null}=e,{marginTop:y=!1}=e,{marginBottom:c=!0}=e;return a.$$set=o=>{"id"in o&&l(0,t=o.id),"width"in o&&l(1,r=o.width),"title"in o&&l(2,d=o.title),"hideTitle"in o&&l(3,s=o.hideTitle),"theme"in o&&l(4,u=o.theme),"themeOverrides"in o&&l(5,m=o.themeOverrides),"marginTop"in o&&l(6,y=o.marginTop),"marginBottom"in o&&l(7,c=o.marginBottom),"$$scope"in o&&l(9,i=o.$$scope)},[t,r,d,s,u,m,y,c,n,i]}class P extends v{constructor(e){super(),O(this,e,N,M,T,{id:0,width:1,title:2,hideTitle:3,theme:4,themeOverrides:5,marginTop:6,marginBottom:7})}}P.__docgen={version:3,name:"Section.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the container",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"narrow"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title of the section",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows the h2 title tag for the section to be visually hidden",name:"hideTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{K as F,P as S};
//# sourceMappingURL=Section-2bfcb119.js.map
