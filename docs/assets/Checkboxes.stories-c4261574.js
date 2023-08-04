import{S as P,i as z,s as F,q as Y,w as $,x as S,C as G,a as b,H as K,u as Z,r as ee,v as te,b as m,g as Q,t as u,c as R,d as h,I as se,J as le,e as ne,P as oe,p as w,j as k,m as _,k as D,l as I,n as g,W as ae,y as U,N as ie}from"./index-01cfd182.js";import{p as ce,w as T,M as re,T as de,S as W,b as B}from"./collect-stories-037cf284.js";import{C}from"./Checkbox-b15c9c89.js";const O=`A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Checkboxes } from "@onsvisual/svelte-components";

  let items = [
    { id: "ice-cream", label: "Ice cream", checked: false },
    { id: "sprinkles", label: "Sprinkles", description: "Highly recommended!", checked: false },
    { id: "disabled", label: "Disabled option", checked: false, disabled: true },
  ];

  let selected = []; // An array of the selected items
<\/script>

<Checkboxes {items} bind:value={selected} label="Select items">
\`\`\`
`,V=`In this example, the child textboxes are defined explicitly.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Checkbox, Checkboxes } from "@onsvisual/svelte-components";

  let selected = []; // An array of the selected items
<\/script>

<Checkboxes label="Select items">
  <Checkbox id="ice-cream" label="Ice cream" bind:group={selected} />
  <Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" bind:group={selected} />
  <Checkbox id="disabled" label="Disabled option" bind:group={selected} />
</Checkboxes>
\`\`\``;function j(d,e,o){const i=d.slice();return i[7]=e[o],i[9]=o,i}function q(d){let e,o;return{c(){e=S("p"),o=se(d[0]),G(e,"class","ons-checkboxes__label")},m(i,t){b(i,e,t),K(e,o)},p(i,t){t&1&&le(o,i[0])},d(i){i&&h(e)}}}function E(d){let e,o,i=d[1],t=[];for(let s=0;s<i.length;s+=1)t[s]=J(j(d,i,s));const n=s=>u(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=ne()},m(s,l){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(s,l);b(s,e,l),o=!0},p(s,l){if(l&14){i=s[1];let a;for(a=0;a<i.length;a+=1){const r=j(s,i,a);t[a]?(t[a].p(r,l),m(t[a],1)):(t[a]=J(r),t[a].c(),m(t[a],1),t[a].m(e.parentNode,e))}for(Q(),a=i.length;a<t.length;a+=1)n(a);R()}},i(s){if(!o){for(let l=0;l<i.length;l+=1)m(t[l]);o=!0}},o(s){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)u(t[l]);o=!1},d(s){oe(t,s),s&&h(e)}}}function J(d){let e,o;const i=[d[7],{group:d[3]},{compact:d[2]}];let t={};for(let n=0;n<i.length;n+=1)t=w(t,i[n]);return e=new C({props:t}),e.$on("change",d[6]),{c(){k(e.$$.fragment)},m(n,s){_(e,n,s),o=!0},p(n,s){const l=s&14?D(i,[s&2&&I(n[7]),s&8&&{group:n[3]},s&4&&{compact:n[2]}]):{};e.$set(l)},i(n){o||(m(e.$$.fragment,n),o=!0)},o(n){u(e.$$.fragment,n),o=!1},d(n){g(e,n)}}}function fe(d){let e,o,i,t,n=d[0]&&q(d);const s=d[5].default,l=Y(s,d,d[4],null);let a=d[1]&&E(d);return{c(){n&&n.c(),e=$(),o=S("div"),l&&l.c(),i=$(),a&&a.c(),G(o,"class","ons-checkboxes__items")},m(r,f){n&&n.m(r,f),b(r,e,f),b(r,o,f),l&&l.m(o,null),K(o,i),a&&a.m(o,null),t=!0},p(r,[f]){r[0]?n?n.p(r,f):(n=q(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),l&&l.p&&(!t||f&16)&&Z(l,s,r,r[4],t?te(s,r[4],f,null):ee(r[4]),null),r[1]?a?(a.p(r,f),f&2&&m(a,1)):(a=E(r),a.c(),m(a,1),a.m(o,null)):a&&(Q(),u(a,1,1,()=>{a=null}),R())},i(r){t||(m(l,r),m(a),t=!0)},o(r){u(l,r),u(a),t=!1},d(r){n&&n.d(r),r&&h(e),r&&h(o),l&&l.d(r),a&&a.d()}}}function pe(d,e,o){let{$$slots:i={},$$scope:t}=e,{label:n=""}=e,{items:s=null}=e,{compact:l=!1}=e,{value:a=[]}=e;function r(f){ae.call(this,d,f)}return d.$$set=f=>{"label"in f&&o(0,n=f.label),"items"in f&&o(1,s=f.items),"compact"in f&&o(2,l=f.compact),"value"in f&&o(3,a=f.value),"$$scope"in f&&o(4,t=f.$$scope)},[n,s,l,a,t,i,r]}class x extends P{constructor(e){super(),z(this,e,pe,fe,F,{label:0,items:1,compact:2,value:3})}}x.__docgen={version:3,name:"Checkboxes.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Label for grouped inputs",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"(Optional) Define the checkboxes as an array of {id, label, checked, description?}",name:"items",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Compact mode (no borders)",name:"compact",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:'Binding for selected checkboxes (if checkboxes are defined as "items")',name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"change",parent:"Checkbox",modificators:[],locations:null}],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function me(d){let e,o,i;const t=[d[1]];let n={};for(let s=0;s<t.length;s+=1)n=w(n,t[s]);return o=new x({props:n}),{c(){e=S("div"),k(o.$$.fragment),U(e,"padding","12px")},m(s,l){b(s,e,l),_(o,e,null),i=!0},p(s,l){const a=l&2?D(t,[I(s[1])]):{};o.$set(a)},i(s){i||(m(o.$$.fragment,s),i=!0)},o(s){u(o.$$.fragment,s),i=!1},d(s){s&&h(e),g(o)}}}function ue(d){let e,o,i,t,n,s;return e=new C({props:{id:"ice-cream",label:"Ice cream"}}),i=new C({props:{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!"}}),n=new C({props:{id:"disabled",label:"Disabled option",disabled:!0}}),{c(){k(e.$$.fragment),o=$(),k(i.$$.fragment),t=$(),k(n.$$.fragment)},m(l,a){_(e,l,a),b(l,o,a),_(i,l,a),b(l,t,a),_(n,l,a),s=!0},p:ie,i(l){s||(m(e.$$.fragment,l),m(i.$$.fragment,l),m(n.$$.fragment,l),s=!0)},o(l){u(e.$$.fragment,l),u(i.$$.fragment,l),u(n.$$.fragment,l),s=!1},d(l){g(e,l),l&&h(o),g(i,l),l&&h(t),g(n,l)}}}function be(d){let e,o,i;return o=new x({props:{label:"Select items",$$slots:{default:[ue]},$$scope:{ctx:d}}}),{c(){e=S("div"),k(o.$$.fragment),U(e,"padding","12px")},m(t,n){b(t,e,n),_(o,e,null),i=!0},p(t,n){const s={};n&4&&(s.$$scope={dirty:n,ctx:t}),o.$set(s)},i(t){i||(m(o.$$.fragment,t),i=!0)},o(t){u(o.$$.fragment,t),i=!1},d(t){t&&h(e),g(o)}}}function he(d){let e,o,i,t,n,s,l,a,r,f;const y=[{title:"Inputs/Checkboxes"},{component:x},{argTypes:{}},T(O)];let H={};for(let c=0;c<y.length;c+=1)H=w(H,y[c]);e=new re({props:H}),i=new de({props:{$$slots:{default:[me,({args:c})=>({1:c}),({args:c})=>c?2:0]},$$scope:{ctx:d}}}),n=new W({props:{name:"Default",args:{label:"Select items",items:d[0]}}}),l=new W({props:{name:"Compact without label",args:{items:d[0],compact:!0}}});const v=[{name:"Individually defined checkboxes"},B(V)];let L={$$slots:{default:[be]},$$scope:{ctx:d}};for(let c=0;c<v.length;c+=1)L=w(L,v[c]);return r=new W({props:L}),{c(){k(e.$$.fragment),o=$(),k(i.$$.fragment),t=$(),k(n.$$.fragment),s=$(),k(l.$$.fragment),a=$(),k(r.$$.fragment)},m(c,p){_(e,c,p),b(c,o,p),_(i,c,p),b(c,t,p),_(n,c,p),b(c,s,p),_(l,c,p),b(c,a,p),_(r,c,p),f=!0},p(c,[p]){const X=p&0?D(y,[y[0],p&0&&{component:x},y[2],p&0&&I(T(O))]):{};e.$set(X);const M={};p&6&&(M.$$scope={dirty:p,ctx:c}),i.$set(M);const N=p&0?D(v,[v[0],I(B(V))]):{};p&4&&(N.$$scope={dirty:p,ctx:c}),r.$set(N)},i(c){f||(m(e.$$.fragment,c),m(i.$$.fragment,c),m(n.$$.fragment,c),m(l.$$.fragment,c),m(r.$$.fragment,c),f=!0)},o(c){u(e.$$.fragment,c),u(i.$$.fragment,c),u(n.$$.fragment,c),u(l.$$.fragment,c),u(r.$$.fragment,c),f=!1},d(c){g(e,c),c&&h(o),g(i,c),c&&h(t),g(n,c),c&&h(s),g(l,c),c&&h(a),g(r,c)}}}function ke(d){return[[{id:"ice-cream",label:"Ice cream",checked:!1},{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!",checked:!1},{id:"disabled",label:"Disabled option",checked:!1,disabled:!0}]]}class _e extends P{constructor(e){super(),z(this,e,ke,he,F,{})}}const A=ce(_e,{meta:{title:"Inputs/Checkboxes"},stories:{"tpl:default":{storyId:"inputs-checkboxes--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Checkboxes {...args} />
</div>`,hasArgs:!0},Default:{storyId:"inputs-checkboxes--default",name:"Default",template:!1,hasArgs:!1},CompactWithoutLabel:{storyId:"inputs-checkboxes--compact-without-label",name:"Compact without label",template:!1,hasArgs:!1},IndividuallyDefinedCheckboxes:{storyId:"inputs-checkboxes--individually-defined-checkboxes",name:"Individually defined checkboxes",template:!1,source:`<div style:padding="12px">
  <Checkboxes label="Select items">
    <Checkbox id="ice-cream" label="Ice cream" />
    <Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />
    <Checkbox id="disabled" label="Disabled option" disabled />
  </Checkboxes>
</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","exampleDocs","Checkbox","Checkboxes","withComponentDocs","withStoryDocs"]}),xe=A.meta,ve=["Default","CompactWithoutLabel","IndividuallyDefinedCheckboxes"],Ce=A.stories.Default,we=A.stories.CompactWithoutLabel,De=A.stories.IndividuallyDefinedCheckboxes;export{we as CompactWithoutLabel,Ce as Default,De as IndividuallyDefinedCheckboxes,ve as __namedExportsOrder,xe as default};
//# sourceMappingURL=Checkboxes.stories-c4261574.js.map
