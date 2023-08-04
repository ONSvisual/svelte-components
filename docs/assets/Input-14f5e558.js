import{S as O,i as Q,s as U,x as h,w as N,C as l,a as L,H as m,N as T,d as V,O as z,I as S,U as c,J as E,a7 as I,Q as A,T as j}from"./index-01cfd182.js";function C(i){let e,s,t;return{c(){e=h("label"),s=S(i[2]),l(e,"class","ons-label"),l(e,"aria-describedby",t=i[4]?`${i[1]}-description-hint`:null),l(e,"for",i[1]),c(e,"ons-label--with-description",i[4]),c(e,"ons-u-vh",i[3])},m(n,a){L(n,e,a),m(e,s)},p(n,a){a&4&&E(s,n[2]),a&18&&t!==(t=n[4]?`${n[1]}-description-hint`:null)&&l(e,"aria-describedby",t),a&2&&l(e,"for",n[1]),a&16&&c(e,"ons-label--with-description",n[4]),a&8&&c(e,"ons-u-vh",n[3])},d(n){n&&V(e)}}}function D(i){let e,s,t;return{c(){e=h("span"),s=S(i[4]),l(e,"id",t=i[1]+"-description-hint"),l(e,"class","ons-label__description ons-input--with-description")},m(n,a){L(n,e,a),m(e,s)},p(n,a){a&16&&E(s,n[4]),a&2&&t!==(t=n[1]+"-description-hint")&&l(e,"id",t)},d(n){n&&V(e)}}}function B(i){let e,s,t,n,a,y,b;return{c(){e=h("input"),l(e,"type","text"),l(e,"id",i[1]),l(e,"pattern",s=i[10]?i[10]:i[11]?"[0-9]*":null),l(e,"inputmode",t=i[11]?"numeric":null),l(e,"class",n="ons-input ons-input--text ons-input-type__input "+(Number.isInteger(i[6])?`ons-input--w-${i[6]}`:"")+" svelte-1ryk8vd"),l(e,"aria-describedby",a=i[4]?`${i[1]}-description-hint`:null),c(e,"ons-input--error",i[12])},m(u,r){L(u,e,r),I(e,i[0]),y||(b=[A(e,"input",i[16]),A(e,"change",i[17])],y=!0)},p(u,r){r&2&&l(e,"id",u[1]),r&3072&&s!==(s=u[10]?u[10]:u[11]?"[0-9]*":null)&&l(e,"pattern",s),r&2048&&t!==(t=u[11]?"numeric":null)&&l(e,"inputmode",t),r&64&&n!==(n="ons-input ons-input--text ons-input-type__input "+(Number.isInteger(u[6])?`ons-input--w-${u[6]}`:"")+" svelte-1ryk8vd")&&l(e,"class",n),r&18&&a!==(a=u[4]?`${u[1]}-description-hint`:null)&&l(e,"aria-describedby",a),r&1&&e.value!==u[0]&&I(e,u[0]),r&4160&&c(e,"ons-input--error",u[12])},d(u){u&&V(e),y=!1,j(b)}}}function F(i){let e,s,t,n,a,y,b,u,r,d,_=(i[7]||i[8])+"",k,g,v,w;return{c(){e=h("span"),s=h("span"),t=h("input"),r=N(),d=h("abbr"),k=S(_),l(t,"type","text"),l(t,"id",i[1]),l(t,"maxlength",i[5]),l(t,"pattern",n=i[10]?i[10]:i[11]?"[0-9]*":null),l(t,"inputmode",a=i[11]?"numeric":null),l(t,"class",y="ons-input ons-input--text ons-input-type__input "+(Number.isInteger(i[6])?`ons-input--w-${i[6]}`:"")+" svelte-1ryk8vd"),l(t,"aria-labelledby",b=i[1]+" "+i[1]+"-unit"),l(t,"aria-describedby",u=i[4]?`${i[1]}-description-hint`:null),c(t,"ons-input--error",i[12]),l(d,"id",g=i[1]+"-unit"),l(d,"class","ons-input-type__type ons-js-input-abbr svelte-1ryk8vd"),l(d,"aria-label",i[9]),l(d,"role","figure"),l(d,"title",i[9]),l(s,"class","ons-input-type__inner"),l(e,"class","ons-input-type svelte-1ryk8vd"),c(e,"ons-input-type--prefix",i[7])},m(p,f){L(p,e,f),m(e,s),m(s,t),I(t,i[0]),m(s,r),m(s,d),m(d,k),v||(w=[A(t,"input",i[14]),A(t,"change",i[15])],v=!0)},p(p,f){f&2&&l(t,"id",p[1]),f&32&&l(t,"maxlength",p[5]),f&3072&&n!==(n=p[10]?p[10]:p[11]?"[0-9]*":null)&&l(t,"pattern",n),f&2048&&a!==(a=p[11]?"numeric":null)&&l(t,"inputmode",a),f&64&&y!==(y="ons-input ons-input--text ons-input-type__input "+(Number.isInteger(p[6])?`ons-input--w-${p[6]}`:"")+" svelte-1ryk8vd")&&l(t,"class",y),f&2&&b!==(b=p[1]+" "+p[1]+"-unit")&&l(t,"aria-labelledby",b),f&18&&u!==(u=p[4]?`${p[1]}-description-hint`:null)&&l(t,"aria-describedby",u),f&1&&t.value!==p[0]&&I(t,p[0]),f&4160&&c(t,"ons-input--error",p[12]),f&384&&_!==(_=(p[7]||p[8])+"")&&E(k,_),f&2&&g!==(g=p[1]+"-unit")&&l(d,"id",g),f&512&&l(d,"aria-label",p[9]),f&512&&l(d,"title",p[9]),f&128&&c(e,"ons-input-type--prefix",p[7])},d(p){p&&V(e),v=!1,j(w)}}}function G(i){let e,s,t,n=i[2]&&C(i),a=i[4]&&D(i);function y(r,d){return r[7]||r[8]?F:B}let b=y(i),u=b(i);return{c(){e=h("div"),n&&n.c(),s=N(),a&&a.c(),t=N(),u.c(),l(e,"class","ons-field")},m(r,d){L(r,e,d),n&&n.m(e,null),m(e,s),a&&a.m(e,null),m(e,t),u.m(e,null)},p(r,[d]){r[2]?n?n.p(r,d):(n=C(r),n.c(),n.m(e,s)):n&&(n.d(1),n=null),r[4]?a?a.p(r,d):(a=D(r),a.c(),a.m(e,t)):a&&(a.d(1),a=null),b===(b=y(r))&&u?u.p(r,d):(u.d(1),u=b(r),u&&(u.c(),u.m(e,null)))},i:T,o:T,d(r){r&&V(e),n&&n.d(),a&&a.d(),u.d()}}}function K(i,e,s){const t=z();let{id:n=""}=e,{value:a=""}=e,{label:y="Enter some text"}=e,{hideLabel:b=!1}=e,{description:u=""}=e,{charLimit:r=null}=e,{width:d=null}=e,{prefix:_=""}=e,{suffix:k=""}=e,{unitLabel:g=_||k||""}=e,{pattern:v=""}=e,{numeric:w=!1}=e,{error:p=!1}=e;function f(){a=this.value,s(0,a)}const q=o=>t("change",o);function H(){a=this.value,s(0,a)}const J=o=>t("change",o);return i.$$set=o=>{"id"in o&&s(1,n=o.id),"value"in o&&s(0,a=o.value),"label"in o&&s(2,y=o.label),"hideLabel"in o&&s(3,b=o.hideLabel),"description"in o&&s(4,u=o.description),"charLimit"in o&&s(5,r=o.charLimit),"width"in o&&s(6,d=o.width),"prefix"in o&&s(7,_=o.prefix),"suffix"in o&&s(8,k=o.suffix),"unitLabel"in o&&s(9,g=o.unitLabel),"pattern"in o&&s(10,v=o.pattern),"numeric"in o&&s(11,w=o.numeric),"error"in o&&s(12,p=o.error)},[a,n,y,b,u,r,d,_,k,g,v,w,p,t,f,q,H,J]}class M extends O{constructor(e){super(),Q(this,e,K,G,U,{id:1,value:0,label:2,hideLabel:3,description:4,charLimit:5,width:6,prefix:7,suffix:8,unitLabel:9,pattern:10,numeric:11,error:12})}}M.__docgen={version:3,name:"Input.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"ID for &lt;input&gt; element",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"A prop to bind to for the entered value",name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"A label to describe the &lt;input&gt; element (expected for accessibility)",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Enter some text"},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Visually hide the label",name:"hideLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"An optional description to help users know what to enter",name:"description",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"The maximum number of characters that can be entered (optional)",name:"charLimit",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:null},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"The width of the &lt;input&gt; in characters",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"An optional prefix (eg. £) to appear on the left of the input",name:"prefix",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"An optional suffix (eg. %) to appear on the right of the input",name:"suffix",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"An optional hidden description of the prefix (for accessibility)",name:"unitLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"An optional regex pattern foto limit the input (not currently used)",name:"pattern",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Set to `true` if the value should be a number",name:"numeric",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Set to `true` to highlight border in red",name:"error",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[],refs:[]};export{M as I};
//# sourceMappingURL=Input-14f5e558.js.map