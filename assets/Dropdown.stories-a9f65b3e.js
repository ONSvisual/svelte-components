import{S as G,i as J,s as N,x as C,w as L,e as W,C as _,D as X,a as b,H as D,a7 as V,Q as $,N as j,d as h,P as Y,T as Z,O as x,I as T,U as Q,J as I,a8 as ee,p as z,j as y,m as g,k as F,l as K,b as v,t as w,n as k,y as te}from"./index-8607ceaf.js";import{p as le,w as M,M as ne,T as ae,S}from"./collect-stories-45ecfa9a.js";const q=`A standard \`<select>\` component with Svelte bindings and events.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Dropdown } from "@onsvisual/svelte-components";

  const values = [
    { id: "1", label: "one" },
    { id: "2", label: "two" },
    { id: "3", label: "three" },
  ];

  // Bind the <select> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
<\/script>

<Dropdown {options} bind:value on:change="{handleChange}" />
\`\`\`
`;function E(a,e,n){const l=a.slice();return l[9]=e[n],l}function O(a){let e,n;return{c(){e=C("label"),n=T(a[2]),_(e,"class","ons-label"),_(e,"for",a[1]),Q(e,"ons-u-vh",a[3])},m(l,r){b(l,e,r),D(e,n)},p(l,r){r&4&&I(n,l[2]),r&2&&_(e,"for",l[1]),r&8&&Q(e,"ons-u-vh",l[3])},d(l){l&&h(e)}}}function U(a){let e,n;return{c(){e=C("option"),n=T(a[4]),e.__value=null,e.value=e.__value,e.selected=!0,e.disabled=!0},m(l,r){b(l,e,r),D(e,n)},p(l,r){r&16&&I(n,l[4])},d(l){l&&h(e)}}}function B(a){var f;let e,n=(((f=a[9])==null?void 0:f.label)||a[9])+"",l,r;return{c(){e=C("option"),l=T(n),e.__value=r=a[9],e.value=e.__value},m(i,s){b(i,e,s),D(e,l)},p(i,s){var d;s&32&&n!==(n=(((d=i[9])==null?void 0:d.label)||i[9])+"")&&I(l,n),s&32&&r!==(r=i[9])&&(e.__value=r,e.value=e.__value)},d(i){i&&h(e)}}}function se(a){let e,n,l,r,f,i,s=a[2]&&O(a),d=a[4]&&U(a),m=a[5],c=[];for(let o=0;o<m.length;o+=1)c[o]=B(E(a,m,o));return{c(){e=C("div"),s&&s.c(),n=L(),l=C("select"),d&&d.c(),r=W();for(let o=0;o<c.length;o+=1)c[o].c();_(l,"id",a[1]),_(l,"name",a[1]),_(l,"class","ons-input ons-input--select svelte-4cr5ai"),a[0]===void 0&&X(()=>a[7].call(l)),_(e,"class","ons-field")},m(o,p){b(o,e,p),s&&s.m(e,null),D(e,n),D(e,l),d&&d.m(l,null),D(l,r);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(l,null);V(l,a[0],!0),f||(i=[$(l,"change",a[7]),$(l,"change",a[8])],f=!0)},p(o,[p]){if(o[2]?s?s.p(o,p):(s=O(o),s.c(),s.m(e,n)):s&&(s.d(1),s=null),o[4]?d?d.p(o,p):(d=U(o),d.c(),d.m(l,r)):d&&(d.d(1),d=null),p&32){m=o[5];let t;for(t=0;t<m.length;t+=1){const u=E(o,m,t);c[t]?c[t].p(u,p):(c[t]=B(u),c[t].c(),c[t].m(l,null))}for(;t<c.length;t+=1)c[t].d(1);c.length=m.length}p&2&&_(l,"id",o[1]),p&2&&_(l,"name",o[1]),p&33&&V(l,o[0])},i:j,o:j,d(o){o&&h(e),s&&s.d(),d&&d.d(),Y(c,o),f=!1,Z(i)}}}function oe(a,e,n){const l=x();let{id:r=""}=e,{label:f=""}=e,{hideLabel:i=!1}=e,{placeholder:s="Select an option"}=e,{value:d=null}=e,{options:m=[]}=e;function c(){d=ee(this),n(0,d),n(5,m)}const o=p=>l("change",p);return a.$$set=p=>{"id"in p&&n(1,r=p.id),"label"in p&&n(2,f=p.label),"hideLabel"in p&&n(3,i=p.hideLabel),"placeholder"in p&&n(4,s=p.placeholder),"value"in p&&n(0,d=p.value),"options"in p&&n(5,m=p.options)},[d,r,f,i,s,m,l,c,o]}class A extends G{constructor(e){super(),J(this,e,oe,se,N,{id:1,label:2,hideLabel:3,placeholder:4,value:0,options:5})}}A.__docgen={version:3,name:"Dropdown.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Unique id for the &lt;select&gt; element",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"A label to describe the &lt;select&gt; element (expected for accessibility)",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Visually hide the label",name:"hideLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"An optional placeholder text",name:"placeholder",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Select an option"},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"A prop to bind to for the selected value",name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"An array of options, formatted {id, label}",name:"options",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[],refs:[]};function ie(a){let e,n,l;const r=[a[1]];let f={};for(let i=0;i<r.length;i+=1)f=z(f,r[i]);return n=new A({props:f}),{c(){e=C("div"),y(n.$$.fragment),te(e,"padding","12px")},m(i,s){b(i,e,s),g(n,e,null),l=!0},p(i,s){const d=s&2?F(r,[K(i[1])]):{};n.$set(d)},i(i){l||(v(n.$$.fragment,i),l=!0)},o(i){w(n.$$.fragment,i),l=!1},d(i){i&&h(e),k(n)}}}function re(a){let e,n,l,r,f,i,s,d,m,c;const o=[{title:"Inputs/Dropdown"},{component:A},{argTypes:{}},M(q)];let p={};for(let t=0;t<o.length;t+=1)p=z(p,o[t]);return e=new ne({props:p}),l=new ae({props:{$$slots:{default:[ie,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:a}}}),f=new S({props:{name:"Default",args:{id:"topic",label:"Question topic",options:a[0]}}}),s=new S({props:{name:"Hidden label",args:{id:"topic",label:"Question topic",hideLabel:!0,options:a[0]}}}),m=new S({props:{name:"Custom placeholder text",args:{id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Some custom text",options:a[0]}}}),{c(){y(e.$$.fragment),n=L(),y(l.$$.fragment),r=L(),y(f.$$.fragment),i=L(),y(s.$$.fragment),d=L(),y(m.$$.fragment)},m(t,u){g(e,t,u),b(t,n,u),g(l,t,u),b(t,r,u),g(f,t,u),b(t,i,u),g(s,t,u),b(t,d,u),g(m,t,u),c=!0},p(t,[u]){const R=u&0?F(o,[o[0],u&0&&{component:A},o[2],u&0&&K(M(q))]):{};e.$set(R);const P={};u&6&&(P.$$scope={dirty:u,ctx:t}),l.$set(P)},i(t){c||(v(e.$$.fragment,t),v(l.$$.fragment,t),v(f.$$.fragment,t),v(s.$$.fragment,t),v(m.$$.fragment,t),c=!0)},o(t){w(e.$$.fragment,t),w(l.$$.fragment,t),w(f.$$.fragment,t),w(s.$$.fragment,t),w(m.$$.fragment,t),c=!1},d(t){k(e,t),t&&h(n),k(l,t),t&&h(r),k(f,t),t&&h(i),k(s,t),t&&h(d),k(m,t)}}}function de(a){return[[{id:"1",label:"General"},{id:"people-who-live-here",label:"People who live here"},{id:"visitors",label:"Visitors"},{id:"household-accommodation",label:"Household and accommodation"},{id:"personal-details",label:"Personal details"},{id:"health",label:"Health"},{id:"qualifications",label:"Qualifications"},{id:"employment",label:"Employment"}]]}class pe extends G{constructor(e){super(),J(this,e,de,re,N,{})}}const H=le(pe,{meta:{title:"Inputs/Dropdown"},stories:{"tpl:default":{storyId:"inputs-dropdown--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Dropdown {...args} />
</div>`,hasArgs:!0},Default:{storyId:"inputs-dropdown--default",name:"Default",template:!1,hasArgs:!1},HiddenLabel:{storyId:"inputs-dropdown--hidden-label",name:"Hidden label",template:!1,hasArgs:!1},CustomPlaceholderText:{storyId:"inputs-dropdown--custom-placeholder-text",name:"Custom placeholder text",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Dropdown","withComponentDocs"]}),ue=H.meta,me=["Default","HiddenLabel","CustomPlaceholderText"],_e=H.stories.Default,be=H.stories.HiddenLabel,he=H.stories.CustomPlaceholderText;export{he as CustomPlaceholderText,_e as Default,be as HiddenLabel,me as __namedExportsOrder,ue as default};
//# sourceMappingURL=Dropdown.stories-a9f65b3e.js.map
