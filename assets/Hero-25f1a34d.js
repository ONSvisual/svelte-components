import{S as I,i as P,s as J,j as z,m as A,b as D,t as q,n as B,q as E,x as p,w as b,C as k,a as g,H as y,u as F,r as G,v as K,d as _,I as w,J as v}from"./index-8607ceaf.js";import{v as O,f as V}from"./utils-f6662b64.js";import{C as L}from"./Container-57792f3b.js";function C(n){let e,i,t;return{c(){e=p("header"),i=p("h1"),t=w(n[4]),k(i,"class","ons-hero__title ons-u-fs-xxxl")},m(l,a){g(l,e,a),y(e,i),y(i,t)},p(l,a){a&16&&v(t,l[4])},d(l){l&&_(e)}}}function H(n){let e,i;return{c(){e=p("p"),i=w(n[5]),k(e,"class","ons-hero__text ons-u-fs-l ons-font-weight__normal")},m(t,l){g(t,e,l),y(e,i)},p(t,l){l&32&&v(i,t[5])},d(t){t&&_(e)}}}function j(n){let e,i=V(n[6])+"",t;return{c(){e=p("p"),t=w(i),k(e,"class","ons-hero__text")},m(l,a){g(l,e,a),y(e,t)},p(l,a){a&64&&i!==(i=V(l[6])+"")&&v(t,i)},d(l){l&&_(e)}}}function M(n){let e,i,t,l=O(n[6]),a,m,o=n[4]&&C(n),r=n[5]&&H(n),f=l&&j(n);const h=n[10].default,u=E(h,n,n[11],null);return{c(){e=p("div"),o&&o.c(),i=b(),r&&r.c(),t=b(),f&&f.c(),a=b(),u&&u.c(),k(e,"class","ons-hero__details ons-grid__col ons-col-8@m ons-col-10@s@m svelte-i91fpu")},m(s,c){g(s,e,c),o&&o.m(e,null),y(e,i),r&&r.m(e,null),y(e,t),f&&f.m(e,null),y(e,a),u&&u.m(e,null),m=!0},p(s,c){s[4]?o?o.p(s,c):(o=C(s),o.c(),o.m(e,i)):o&&(o.d(1),o=null),s[5]?r?r.p(s,c):(r=H(s),r.c(),r.m(e,t)):r&&(r.d(1),r=null),c&64&&(l=O(s[6])),l?f?f.p(s,c):(f=j(s),f.c(),f.m(e,a)):f&&(f.d(1),f=null),u&&u.p&&(!m||c&2048)&&F(u,h,s,s[11],m?K(h,s[11],c,null):G(s[11]),null)},i(s){m||(D(u,s),m=!0)},o(s){q(u,s),m=!1},d(s){s&&_(e),o&&o.d(),r&&r.d(),f&&f.d(),u&&u.d(s)}}}function N(n){let e,i;return e=new L({props:{id:n[0],cls:n[1],theme:n[7],themeOverrides:n[8],width:n[2],background:n[9],height:n[3],$$slots:{default:[M]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},m(t,l){A(e,t,l),i=!0},p(t,[l]){const a={};l&1&&(a.id=t[0]),l&2&&(a.cls=t[1]),l&128&&(a.theme=t[7]),l&256&&(a.themeOverrides=t[8]),l&4&&(a.width=t[2]),l&512&&(a.background=t[9]),l&8&&(a.height=t[3]),l&2160&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){i||(D(e.$$.fragment,t),i=!0)},o(t){q(e.$$.fragment,t),i=!1},d(t){B(e,t)}}}function Q(n,e,i){let{$$slots:t={},$$scope:l}=e,{id:a=null}=e,{cls:m=null}=e,{width:o="wide"}=e,{height:r="tall"}=e,{title:f="Page headline"}=e,{lede:h=""}=e,{date:u=null}=e,{theme:s="dark"}=e,{themeOverrides:c=null}=e,{background:S="rgb(32, 96, 149)"}=e;return n.$$set=d=>{"id"in d&&i(0,a=d.id),"cls"in d&&i(1,m=d.cls),"width"in d&&i(2,o=d.width),"height"in d&&i(3,r=d.height),"title"in d&&i(4,f=d.title),"lede"in d&&i(5,h=d.lede),"date"in d&&i(6,u=d.date),"theme"in d&&i(7,s=d.theme),"themeOverrides"in d&&i(8,c=d.themeOverrides),"background"in d&&i(9,S=d.background),"$$scope"in d&&i(11,l=d.$$scope)},[a,m,o,r,f,h,u,s,c,S,t,l]}class R extends I{constructor(e){super(),P(this,e,Q,N,J,{id:0,cls:1,width:2,height:3,title:4,lede:5,date:6,theme:7,themeOverrides:8,background:9})}}R.__docgen={version:3,name:"Hero.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Sets a css class for the section",name:"cls",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"wider"|"full"}'}],visibility:"public",description:"Sets the width of the section",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"wider"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"wider"',type:'"wider"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"wide"},{keywords:[{name:"type",description:'{"auto"|"tall"|"full"}'}],visibility:"public",description:"Sets the minimum height of the section",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"auto"|"tall"|"full"',type:[{kind:"type",text:'"auto"',type:'"auto"'},{kind:"type",text:'"tall"',type:'"tall"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"tall"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title/headline",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Page headline"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the lede (short intro text)",name:"lede",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:'(Optional) Sets the date, using the format "yyyy-mm-dd"',name:"date",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:"dark"},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"rgb(32, 96, 149)"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{R as H};
//# sourceMappingURL=Hero-25f1a34d.js.map