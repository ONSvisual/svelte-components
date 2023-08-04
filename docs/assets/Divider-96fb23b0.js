import{S as u,i as f,s as y,j as p,m as c,b as h,t as b,n as g,x as k,C as w,y as m,a as v,d as _}from"./index-01cfd182.js";import{C as O}from"./Container-eaab62b8.js";function B(l){let e;return{c(){e=k("hr"),w(e,"class","svelte-1vg9cik"),m(e,"border",l[0]?null:"none")},m(i,t){v(i,e,t)},p(i,t){t&1&&m(e,"border",i[0]?null:"none")},d(i){i&&_(e)}}}function T(l){let e,i;return e=new O({props:{theme:l[2],themeOverrides:l[3],width:l[1],marginTop:l[4],marginBottom:l[5],$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){p(e.$$.fragment)},m(t,n){c(e,t,n),i=!0},p(t,[n]){const o={};n&4&&(o.theme=t[2]),n&8&&(o.themeOverrides=t[3]),n&2&&(o.width=t[1]),n&16&&(o.marginTop=t[4]),n&32&&(o.marginBottom=t[5]),n&65&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){i||(h(e.$$.fragment,t),i=!0)},o(t){b(e.$$.fragment,t),i=!1},d(t){g(e,t)}}}function x(l,e,i){let{hr:t=!0}=e,{width:n="medium"}=e,{theme:o=null}=e,{themeOverrides:r=null}=e,{marginTop:s=!1}=e,{marginBottom:d=!0}=e;return l.$$set=a=>{"hr"in a&&i(0,t=a.hr),"width"in a&&i(1,n=a.width),"theme"in a&&i(2,o=a.theme),"themeOverrides"in a&&i(3,r=a.themeOverrides),"marginTop"in a&&i(4,s=a.marginTop),"marginBottom"in a&&i(5,d=a.marginBottom)},[t,n,o,r,s,d]}class V extends u{constructor(e){super(),f(this,e,x,T,y,{hr:0,width:1,theme:2,themeOverrides:3,marginTop:4,marginBottom:5})}}V.__docgen={version:3,name:"Divider.svelte",data:[{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"(Optional) Include a horizontal rule",name:"hr",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"full"}'}],visibility:"public",description:"Sets the width of the container",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"medium"},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin above section",name:"marginTop",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Optional margin below section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{V as D};
//# sourceMappingURL=Divider-96fb23b0.js.map