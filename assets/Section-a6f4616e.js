import{S as V,i as B,s as C,j,m as q,b as w,t as _,n as D,q as I,x as v,w as A,C as f,a as S,H as T,u as H,r as J,v as U,d as O,I as z,U as b,J as E}from"./index-8607ceaf.js";import{b as g}from"./utils-f6662b64.js";import{C as F}from"./Container-57792f3b.js";function k(n){let e,l;return{c(){e=v("h2"),l=z(n[3]),f(e,"class","section-title"),b(e,"ons-u-vh",n[4])},m(t,i){S(t,e,i),T(e,l)},p(t,i){i&8&&E(l,t[3]),i&16&&b(e,"ons-u-vh",t[4])},d(t){t&&O(e)}}}function G(n){let e,l,t,i=n[3]&&k(n);const o=n[10].default,d=I(o,n,n[11],null);return{c(){e=v("section"),i&&i.c(),l=A(),d&&d.c(),f(e,"aria-label",n[3]),f(e,"class","ons-feature__section")},m(s,r){S(s,e,r),i&&i.m(e,null),T(e,l),d&&d.m(e,null),t=!0},p(s,r){s[3]?i?i.p(s,r):(i=k(s),i.c(),i.m(e,l)):i&&(i.d(1),i=null),d&&d.p&&(!t||r&2048)&&H(d,o,s,s[11],t?U(o,s[11],r,null):J(s[11]),null),(!t||r&8)&&f(e,"aria-label",s[3])},i(s){t||(w(d,s),t=!0)},o(s){_(d,s),t=!1},d(s){s&&O(e),i&&i.d(),d&&d.d(s)}}}function K(n){let e,l;return e=new F({props:{id:n[0]?n[0]:g(n[3]),cls:n[1],theme:n[5],themeOverrides:n[6],width:n[2],marginTop:n[8],marginBottom:n[9],background:n[7],$$slots:{default:[G]},$$scope:{ctx:n}}}),{c(){j(e.$$.fragment)},m(t,i){q(e,t,i),l=!0},p(t,[i]){const o={};i&9&&(o.id=t[0]?t[0]:g(t[3])),i&2&&(o.cls=t[1]),i&32&&(o.theme=t[5]),i&64&&(o.themeOverrides=t[6]),i&4&&(o.width=t[2]),i&256&&(o.marginTop=t[8]),i&512&&(o.marginBottom=t[9]),i&128&&(o.background=t[7]),i&2072&&(o.$$scope={dirty:i,ctx:t}),e.$set(o)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){D(e,t)}}}function L(n,e,l){let{$$slots:t={},$$scope:i}=e,{id:o=null}=e,{cls:d=null}=e,{width:s="narrow"}=e,{title:r=""}=e,{hideTitle:u=!1}=e,{theme:m=null}=e,{themeOverrides:c=null}=e,{background:y=null}=e,{marginTop:p=!1}=e,{marginBottom:h=!0}=e;return n.$$set=a=>{"id"in a&&l(0,o=a.id),"cls"in a&&l(1,d=a.cls),"width"in a&&l(2,s=a.width),"title"in a&&l(3,r=a.title),"hideTitle"in a&&l(4,u=a.hideTitle),"theme"in a&&l(5,m=a.theme),"themeOverrides"in a&&l(6,c=a.themeOverrides),"background"in a&&l(7,y=a.background),"marginTop"in a&&l(8,p=a.marginTop),"marginBottom"in a&&l(9,h=a.marginBottom),"$$scope"in a&&l(11,i=a.$$scope)},[o,d,s,r,u,m,c,y,p,h,t,i]}class M extends V{constructor(e){super(),B(this,e,L,K,C,{id:0,cls:1,width:2,title:3,hideTitle:4,theme:5,themeOverrides:6,background:7,marginTop:8,marginBottom:9})}}M.__docgen={version:3,name:"Section.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets a css class for the section",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"wider"|"full"}'}],visibility:"public",description:"Sets the width of the container",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"wider"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"wider"',type:'"wider"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"narrow"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title of the section",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows the h2 title tag for the section to be visually hidden",name:"hideTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{M as S};
//# sourceMappingURL=Section-a6f4616e.js.map
