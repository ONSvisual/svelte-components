import{S as v,i as O,s as x,j as B,m as S,b as C,t as j,n as V,x as m,C as d,a as h,H as u,d as p,P as q,w as y,G as b,I as g,J as w}from"./index-8607ceaf.js";import{C as A}from"./Container-57792f3b.js";function k(s,e,l){const t=s.slice();return t[5]=e[l],t}function D(s){let e=s[5].label+"",l;return{c(){l=g(e)},m(t,n){h(t,l,n)},p(t,n){n&1&&e!==(e=t[5].label+"")&&w(l,e)},d(t){t&&p(l)}}}function G(s){let e,l=s[5].label+"",t,n;return{c(){e=m("a"),t=g(l),d(e,"class","ons-breadcrumb__link"),d(e,"href",n=s[5].href)},m(i,o){h(i,e,o),u(e,t)},p(i,o){o&1&&l!==(l=i[5].label+"")&&w(t,l),o&1&&n!==(n=i[5].href)&&d(e,"href",n)},d(i){i&&p(e)}}}function _(s){let e,l,t,n,i;function o(c,f){return c[5].href?G:D}let a=o(s),r=a(s);return{c(){e=m("li"),r.c(),l=y(),t=b("svg"),n=b("path"),i=y(),d(n,"d","M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"),d(n,"transform","translate(-5.02 -1.59)"),d(t,"class","ons-svg-icon svelte-w4p0hu"),d(t,"viewBox","0 0 8 13"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"focusable","false"),d(e,"class","ons-breadcrumb__item ons-u-p-no")},m(c,f){h(c,e,f),r.m(e,null),u(e,l),u(e,t),u(t,n),u(e,i)},p(c,f){a===(a=o(c))&&r?r.p(c,f):(r.d(1),r=a(c),r&&(r.c(),r.m(e,l)))},d(c){c&&p(e),r.d()}}}function H(s){let e,l,t=s[0],n=[];for(let i=0;i<t.length;i+=1)n[i]=_(k(s,t,i));return{c(){e=m("nav"),l=m("ol");for(let i=0;i<n.length;i+=1)n[i].c();d(l,"class","ons-breadcrumb__items ons-u-fs-s"),d(e,"class","ons-breadcrumb print--hide"),d(e,"aria-label","Breadcrumbs")},m(i,o){h(i,e,o),u(e,l);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(l,null)},p(i,o){if(o&1){t=i[0];let a;for(a=0;a<t.length;a+=1){const r=k(i,t,a);n[a]?n[a].p(r,o):(n[a]=_(r),n[a].c(),n[a].m(l,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){i&&p(e),q(n,i)}}}function I(s){let e,l;return e=new A({props:{theme:s[2],themeOverrides:s[3],width:s[1],background:s[4],$$slots:{default:[H]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment)},m(t,n){S(e,t,n),l=!0},p(t,[n]){const i={};n&4&&(i.theme=t[2]),n&8&&(i.themeOverrides=t[3]),n&2&&(i.width=t[1]),n&16&&(i.background=t[4]),n&257&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function J(s,e,l){let{links:t=[]}=e,{width:n="wide"}=e,{theme:i=null}=e,{themeOverrides:o=null}=e,{background:a=null}=e;return s.$$set=r=>{"links"in r&&l(0,t=r.links),"width"in r&&l(1,n=r.width),"theme"in r&&l(2,i=r.theme),"themeOverrides"in r&&l(3,o=r.themeOverrides),"background"in r&&l(4,a=r.background)},[t,n,i,o,a]}class L extends v{constructor(e){super(),O(this,e,J,I,x,{links:0,width:1,theme:2,themeOverrides:3,background:4})}}L.__docgen={version:3,name:"Breadcrumb.svelte",data:[{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"An array of links in the format {label, href}",name:"links",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:'{"narrow"|"medium"|"wide"|"wider"|"full"}'}],visibility:"public",description:"Sets the width of the container",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"narrow"|"medium"|"wide"|"wider"|"full"',type:[{kind:"type",text:'"narrow"',type:'"narrow"'},{kind:"type",text:'"medium"',type:'"medium"'},{kind:"type",text:'"wide"',type:'"wide"'},{kind:"type",text:'"wider"',type:'"wider"'},{kind:"type",text:'"full"',type:'"full"'}]},defaultValue:"wide"},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"Define additional props to override the base theme",name:"themeOverrides",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Overrides the background CSS for the section",name:"background",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{L as B};
//# sourceMappingURL=Breadcrumb-80f2bd27.js.map
