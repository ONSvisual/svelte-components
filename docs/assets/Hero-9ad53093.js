import{S as q,i as I,s as P,j as J,m as z,b as j,t as D,n as A,q as B,x as k,w as b,C as p,a as _,H as h,u as E,r as F,v as G,d as g,I as w,J as v}from"./index-01cfd182.js";import{v as S,f as O}from"./utils-dfca2a5c.js";import{C as K}from"./Container-eaab62b8.js";function V(n){let e,i,t;return{c(){e=k("header"),i=k("h1"),t=w(n[3]),p(i,"class","ons-hero__title ons-u-fs-xxxl")},m(l,a){_(l,e,a),h(e,i),h(i,t)},p(l,a){a&8&&v(t,l[3])},d(l){l&&g(e)}}}function C(n){let e,i;return{c(){e=k("p"),i=w(n[4]),p(e,"class","ons-hero__text ons-u-fs-l ons-font-weight__normal")},m(t,l){_(t,e,l),h(e,i)},p(t,l){l&16&&v(i,t[4])},d(t){t&&g(e)}}}function H(n){let e,i=O(n[5])+"",t;return{c(){e=k("p"),t=w(i),p(e,"class","ons-hero__text")},m(l,a){_(l,e,a),h(e,t)},p(l,a){a&32&&i!==(i=O(l[5])+"")&&v(t,i)},d(l){l&&g(e)}}}function L(n){let e,i,t,l=S(n[5]),a,c,o=n[3]&&V(n),r=n[4]&&C(n),f=l&&H(n);const y=n[9].default,u=B(y,n,n[10],null);return{c(){e=k("div"),o&&o.c(),i=b(),r&&r.c(),t=b(),f&&f.c(),a=b(),u&&u.c(),p(e,"id",n[0]),p(e,"class","ons-hero__details ons-grid__col ons-col-8@m ons-col-10@s@m svelte-i91fpu")},m(s,m){_(s,e,m),o&&o.m(e,null),h(e,i),r&&r.m(e,null),h(e,t),f&&f.m(e,null),h(e,a),u&&u.m(e,null),c=!0},p(s,m){s[3]?o?o.p(s,m):(o=V(s),o.c(),o.m(e,i)):o&&(o.d(1),o=null),s[4]?r?r.p(s,m):(r=C(s),r.c(),r.m(e,t)):r&&(r.d(1),r=null),m&32&&(l=S(s[5])),l?f?f.p(s,m):(f=H(s),f.c(),f.m(e,a)):f&&(f.d(1),f=null),u&&u.p&&(!c||m&1024)&&E(u,y,s,s[10],c?G(y,s[10],m,null):F(s[10]),null),(!c||m&1)&&p(e,"id",s[0])},i(s){c||(j(u,s),c=!0)},o(s){D(u,s),c=!1},d(s){s&&g(e),o&&o.d(),r&&r.d(),f&&f.d(),u&&u.d(s)}}}function M(n){let e,i;return e=new K({props:{theme:n[6],themeOverrides:n[7],width:n[1],background:n[8],height:n[2],$$slots:{default:[L]},$$scope:{ctx:n}}}),{c(){J(e.$$.fragment)},m(t,l){z(e,t,l),i=!0},p(t,[l]){const a={};l&64&&(a.theme=t[6]),l&128&&(a.themeOverrides=t[7]),l&2&&(a.width=t[1]),l&256&&(a.background=t[8]),l&4&&(a.height=t[2]),l&1081&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){i||(j(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){A(e,t)}}}function N(n,e,i){let{$$slots:t={},$$scope:l}=e,{id:a=null}=e,{width:c="medium"}=e,{height:o="tall"}=e,{title:r="Page headline"}=e,{lede:f=""}=e,{date:y=null}=e,{theme:u="dark"}=e,{themeOverrides:s=null}=e,{background:m="rgb(32, 96, 149)"}=e;return n.$$set=d=>{"id"in d&&i(0,a=d.id),"width"in d&&i(1,c=d.width),"height"in d&&i(2,o=d.height),"title"in d&&i(3,r=d.title),"lede"in d&&i(4,f=d.lede),"date"in d&&i(5,y=d.date),"theme"in d&&i(6,u=d.theme),"themeOverrides"in d&&i(7,s=d.themeOverrides),"background"in d&&i(8,m=d.background),"$$scope"in d&&i(10,l=d.$$scope)},[a,c,o,r,f,y,u,s,m,t,l]}class Q extends q{constructor(e){super(),I(this,e,N,M,P,{id:0,width:1,height:2,title:3,lede:4,date:5,theme:6,themeOverrides:7,background:8})}}Q.__docgen={version:3,name:"Hero.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"medium"},{keywords:[{name:"type",description:'{"auto"|"tall"|"full"}'}],visibility:"public",description:"Sets the minimum height of the section",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"auto"|"tall"|"full"',type:[{kind:"type",text:'"auto"',type:'"auto"'},{kind:"type",text:'"tall"',type:'"tall"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"tall"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title/headline",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Page headline"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the lede (short intro text)",name:"lede",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:'(Optional) Sets the date, using the format "yyyy-mm-dd"',name:"date",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:"dark"},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"rgb(32, 96, 149)"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{Q as H};
//# sourceMappingURL=Hero-9ad53093.js.map