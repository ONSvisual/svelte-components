import{S as F,i as J,s as K,w as C,z as L,e as W,x as _,I as X,a as b,B as D,J as P,H as $,F as j,d as h,K as Y,L as Z,G as x,A as I,E as M,C as T,M as ee,p as O,j as y,m as g,k as U,l as N,b as v,t as w,n as k,D as te}from"./index-9c03537d.js";import{p as le,w as E,M as ne,T as ae,S}from"./collect-stories-d3cc164c.js";const Q=`A standard \`<select>\` component with Svelte bindings and events.

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
`;function q(a,e,n){const l=a.slice();return l[9]=e[n],l}function B(a){let e,n;return{c(){e=C("label"),n=I(a[2]),_(e,"class","ons-label"),_(e,"for",a[1]),M(e,"ons-u-vh",a[3])},m(l,o){b(l,e,o),D(e,n)},p(l,o){o&4&&T(n,l[2]),o&2&&_(e,"for",l[1]),o&8&&M(e,"ons-u-vh",l[3])},d(l){l&&h(e)}}}function G(a){let e,n;return{c(){e=C("option"),n=I(a[4]),e.__value=null,e.value=e.__value,e.selected=!0,e.disabled=!0},m(l,o){b(l,e,o),D(e,n)},p(l,o){o&16&&T(n,l[4])},d(l){l&&h(e)}}}function z(a){let e,n=a[9].label+"",l,o;return{c(){e=C("option"),l=I(n),e.__value=o=a[9],e.value=e.__value},m(c,i){b(c,e,i),D(e,l)},p(c,i){i&32&&n!==(n=c[9].label+"")&&T(l,n),i&32&&o!==(o=c[9])&&(e.__value=o,e.value=e.__value)},d(c){c&&h(e)}}}function se(a){let e,n,l,o,c,i,r=a[2]&&B(a),p=a[4]&&G(a),m=a[5],f=[];for(let s=0;s<m.length;s+=1)f[s]=z(q(a,m,s));return{c(){e=C("div"),r&&r.c(),n=L(),l=C("select"),p&&p.c(),o=W();for(let s=0;s<f.length;s+=1)f[s].c();_(l,"id",a[1]),_(l,"name",a[1]),_(l,"class","ons-input ons-input--select svelte-4cr5ai"),a[0]===void 0&&X(()=>a[7].call(l)),_(e,"class","ons-field")},m(s,d){b(s,e,d),r&&r.m(e,null),D(e,n),D(e,l),p&&p.m(l,null),D(l,o);for(let t=0;t<f.length;t+=1)f[t]&&f[t].m(l,null);P(l,a[0],!0),c||(i=[$(l,"change",a[7]),$(l,"change",a[8])],c=!0)},p(s,[d]){if(s[2]?r?r.p(s,d):(r=B(s),r.c(),r.m(e,n)):r&&(r.d(1),r=null),s[4]?p?p.p(s,d):(p=G(s),p.c(),p.m(l,o)):p&&(p.d(1),p=null),d&32){m=s[5];let t;for(t=0;t<m.length;t+=1){const u=q(s,m,t);f[t]?f[t].p(u,d):(f[t]=z(u),f[t].c(),f[t].m(l,null))}for(;t<f.length;t+=1)f[t].d(1);f.length=m.length}d&2&&_(l,"id",s[1]),d&2&&_(l,"name",s[1]),d&33&&P(l,s[0])},i:j,o:j,d(s){s&&h(e),r&&r.d(),p&&p.d(),Y(f,s),c=!1,Z(i)}}}function oe(a,e,n){const l=x();let{id:o=""}=e,{label:c=""}=e,{hideLabel:i=!1}=e,{placeholder:r="Select an option"}=e,{value:p=null}=e,{options:m=[]}=e;function f(){p=ee(this),n(0,p),n(5,m)}const s=d=>l("change",d);return a.$$set=d=>{"id"in d&&n(1,o=d.id),"label"in d&&n(2,c=d.label),"hideLabel"in d&&n(3,i=d.hideLabel),"placeholder"in d&&n(4,r=d.placeholder),"value"in d&&n(0,p=d.value),"options"in d&&n(5,m=d.options)},[p,o,c,i,r,m,l,f,s]}class A extends F{constructor(e){super(),J(this,e,oe,se,K,{id:1,label:2,hideLabel:3,placeholder:4,value:0,options:5})}}A.__docgen={version:3,name:"Dropdown.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Unique id for the &lt;select&gt; element",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"A label to describe the &lt;select&gt; element (expected for accessibility)",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Visually hide the label",name:"hideLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"An optional placeholder text",name:"placeholder",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Select an option"},{keywords:[{name:"type",description:"{object}"}],visibility:"public",description:"A prop to bind to for the selected value",name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"An array of options, formatted {id, label}",name:"options",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[],refs:[]};function ie(a){let e,n,l;const o=[a[1]];let c={};for(let i=0;i<o.length;i+=1)c=O(c,o[i]);return n=new A({props:c}),{c(){e=C("div"),y(n.$$.fragment),te(e,"padding","12px")},m(i,r){b(i,e,r),g(n,e,null),l=!0},p(i,r){const p=r&2?U(o,[N(i[1])]):{};n.$set(p)},i(i){l||(v(n.$$.fragment,i),l=!0)},o(i){w(n.$$.fragment,i),l=!1},d(i){i&&h(e),k(n)}}}function re(a){let e,n,l,o,c,i,r,p,m,f;const s=[{title:"Inputs/Dropdown"},{component:A},{argTypes:{}},E(Q)];let d={};for(let t=0;t<s.length;t+=1)d=O(d,s[t]);return e=new ne({props:d}),l=new ae({props:{$$slots:{default:[ie,({args:t})=>({1:t}),({args:t})=>t?2:0]},$$scope:{ctx:a}}}),c=new S({props:{name:"Default",args:{id:"topic",label:"Question topic",options:a[0]}}}),r=new S({props:{name:"Hidden label",args:{id:"topic",label:"Question topic",hideLabel:!0,options:a[0]}}}),m=new S({props:{name:"Custom placeholder text",args:{id:"topic",label:"Question topic",hideLabel:!0,placeholder:"Some custom text",options:a[0]}}}),{c(){y(e.$$.fragment),n=L(),y(l.$$.fragment),o=L(),y(c.$$.fragment),i=L(),y(r.$$.fragment),p=L(),y(m.$$.fragment)},m(t,u){g(e,t,u),b(t,n,u),g(l,t,u),b(t,o,u),g(c,t,u),b(t,i,u),g(r,t,u),b(t,p,u),g(m,t,u),f=!0},p(t,[u]){const R=u&0?U(s,[s[0],u&0&&{component:A},s[2],u&0&&N(E(Q))]):{};e.$set(R);const V={};u&6&&(V.$$scope={dirty:u,ctx:t}),l.$set(V)},i(t){f||(v(e.$$.fragment,t),v(l.$$.fragment,t),v(c.$$.fragment,t),v(r.$$.fragment,t),v(m.$$.fragment,t),f=!0)},o(t){w(e.$$.fragment,t),w(l.$$.fragment,t),w(c.$$.fragment,t),w(r.$$.fragment,t),w(m.$$.fragment,t),f=!1},d(t){k(e,t),t&&h(n),k(l,t),t&&h(o),k(c,t),t&&h(i),k(r,t),t&&h(p),k(m,t)}}}function de(a){return[[{id:"1",label:"General"},{id:"people-who-live-here",label:"People who live here"},{id:"visitors",label:"Visitors"},{id:"household-accommodation",label:"Household and accommodation"},{id:"personal-details",label:"Personal details"},{id:"health",label:"Health"},{id:"qualifications",label:"Qualifications"},{id:"employment",label:"Employment"}]]}class pe extends F{constructor(e){super(),J(this,e,de,re,K,{})}}const H=le(pe,{meta:{title:"Inputs/Dropdown"},stories:{"tpl:default":{storyId:"inputs-dropdown--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Dropdown {...args} />
</div>`,hasArgs:!0},Default:{storyId:"inputs-dropdown--default",name:"Default",template:!1,hasArgs:!1},HiddenLabel:{storyId:"inputs-dropdown--hidden-label",name:"Hidden label",template:!1,hasArgs:!1},CustomPlaceholderText:{storyId:"inputs-dropdown--custom-placeholder-text",name:"Custom placeholder text",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Dropdown","withComponentDocs"]}),ue=H.meta,me=["Default","HiddenLabel","CustomPlaceholderText"],_e=H.stories.Default,be=H.stories.HiddenLabel,he=H.stories.CustomPlaceholderText;export{he as CustomPlaceholderText,_e as Default,be as HiddenLabel,me as __namedExportsOrder,ue as default};
//# sourceMappingURL=Dropdown.stories-0e701b32.js.map
