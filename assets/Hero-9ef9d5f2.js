import{S as A,i as I,s as L,j as Q,m as R,b as q,t as P,n as z,q as B,x as p,w as b,L as k,a as g,P as y,u as E,r as F,v as G,d as _,Q as w,R as v}from"./index-98bb0bde.js";import{v as C,e as V}from"./utils-bbbf505c.js";import{C as J}from"./Container-db0f663a.js";function j(n){let e,i,t;return{c(){e=p("header"),i=p("h1"),t=w(n[4]),k(i,"class","ons-hero__title ons-u-fs-xxxl")},m(l,s){g(l,e,s),y(e,i),y(i,t)},p(l,s){s&16&&v(t,l[4])},d(l){l&&_(e)}}}function D(n){let e,i;return{c(){e=p("p"),i=w(n[5]),k(e,"class","ons-hero__text ons-u-fs-l ons-font-weight__normal")},m(t,l){g(t,e,l),y(e,i)},p(t,l){l&32&&v(i,t[5])},d(t){t&&_(e)}}}function H(n){let e,i=V(n[6])+"",t;return{c(){e=p("p"),t=w(i),k(e,"class","ons-hero__text")},m(l,s){g(l,e,s),y(e,t)},p(l,s){s&64&&i!==(i=V(l[6])+"")&&v(t,i)},d(l){l&&_(e)}}}function K(n){let e,i,t,l=C(n[6]),s,m,o=n[4]&&j(n),r=n[5]&&D(n),f=l&&H(n);const h=n[11].default,u=B(h,n,n[12],null);return{c(){e=p("div"),o&&o.c(),i=b(),r&&r.c(),t=b(),f&&f.c(),s=b(),u&&u.c(),k(e,"class","ons-hero__details ons-grid__col ons-col-8@m ons-col-10@s@m svelte-i91fpu")},m(a,c){g(a,e,c),o&&o.m(e,null),y(e,i),r&&r.m(e,null),y(e,t),f&&f.m(e,null),y(e,s),u&&u.m(e,null),m=!0},p(a,c){a[4]?o?o.p(a,c):(o=j(a),o.c(),o.m(e,i)):o&&(o.d(1),o=null),a[5]?r?r.p(a,c):(r=D(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),c&64&&(l=C(a[6])),l?f?f.p(a,c):(f=H(a),f.c(),f.m(e,s)):f&&(f.d(1),f=null),u&&u.p&&(!m||c&4096)&&E(u,h,a,a[12],m?G(h,a[12],c,null):F(a[12]),null)},i(a){m||(q(u,a),m=!0)},o(a){P(u,a),m=!1},d(a){a&&_(e),o&&o.d(),r&&r.d(),f&&f.d(),u&&u.d(a)}}}function M(n){let e,i;return e=new J({props:{id:n[0],cls:n[1],theme:n[7],themeOverrides:n[8],allowClientOverrides:n[9],width:n[2],background:n[10],height:n[3],$$slots:{default:[K]},$$scope:{ctx:n}}}),{c(){Q(e.$$.fragment)},m(t,l){R(e,t,l),i=!0},p(t,[l]){const s={};l&1&&(s.id=t[0]),l&2&&(s.cls=t[1]),l&128&&(s.theme=t[7]),l&256&&(s.themeOverrides=t[8]),l&512&&(s.allowClientOverrides=t[9]),l&4&&(s.width=t[2]),l&1024&&(s.background=t[10]),l&8&&(s.height=t[3]),l&4208&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){i||(q(e.$$.fragment,t),i=!0)},o(t){P(e.$$.fragment,t),i=!1},d(t){z(e,t)}}}function N(n,e,i){let{$$slots:t={},$$scope:l}=e,{id:s=null}=e,{cls:m=null}=e,{width:o="wide"}=e,{height:r="tall"}=e,{title:f="Page headline"}=e,{lede:h=""}=e,{date:u=null}=e,{theme:a="dark"}=e,{themeOverrides:c=null}=e,{allowClientOverrides:O=!1}=e,{background:S="rgb(32, 96, 149)"}=e;return n.$$set=d=>{"id"in d&&i(0,s=d.id),"cls"in d&&i(1,m=d.cls),"width"in d&&i(2,o=d.width),"height"in d&&i(3,r=d.height),"title"in d&&i(4,f=d.title),"lede"in d&&i(5,h=d.lede),"date"in d&&i(6,u=d.date),"theme"in d&&i(7,a=d.theme),"themeOverrides"in d&&i(8,c=d.themeOverrides),"allowClientOverrides"in d&&i(9,O=d.allowClientOverrides),"background"in d&&i(10,S=d.background),"$$scope"in d&&i(12,l=d.$$scope)},[s,m,o,r,f,h,u,a,c,O,S,t,l]}class T extends A{constructor(e){super(),I(this,e,N,M,L,{id:0,cls:1,width:2,height:3,title:4,lede:5,date:6,theme:7,themeOverrides:8,allowClientOverrides:9,background:10})}}T.__docgen={version:3,name:"Hero.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets a css class for the section",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"wider"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"wider"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"wider"',type:'"wider"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"wide"},{keywords:[{name:"type",description:'{"auto"|"tall"|"full"}'}],visibility:"public",description:"Sets the minimum height of the section",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"auto"|"tall"|"full"',type:[{kind:"type",text:'"auto"',type:'"auto"'},{kind:"type",text:'"tall"',type:'"tall"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"tall"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title/headline",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Page headline"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the lede (short intro text)",name:"lede",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:'(Optional) Sets the date, using the format "yyyy-mm-dd"',name:"date",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:"dark"},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows client imported CSS for embeddable content",name:"allowClientOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"rgb(32, 96, 149)"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{T as H};
//# sourceMappingURL=Hero-9ef9d5f2.js.map