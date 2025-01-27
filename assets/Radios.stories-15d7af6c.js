import{S as E,i as N,s as U,a9 as ie,x as C,w as S,Q as q,L as b,Z as A,a as k,P as I,Y as P,R as B,z as W,d as w,B as ne,W as ae,q as se,u as le,r as oe,v as re,b as v,g as de,c as ue,t as h,X as fe,f as pe,a1 as ce,j as R,m as D,a2 as me,n as $,a0 as _e,p as M,k as O,l as T,y as te}from"./index-98bb0bde.js";import{p as be,w as Q,M as ge,T as ye,S as H,a as X}from"./collect-stories-cbdfda5c.js";const Y=`A component for defining a group of radio inputs, where the selected item id can be bound to a Svelte variable.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/radios).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Radios } from "@onsvisual/svelte-components";

  let items = [
    {
      id: "house",
      label: "House or bungalow",
      description: "Includes terraced, semi-detached and detached homes.",
    },
    { id: "flat", label: "Flat, maisonette or apartment" },
    { id: "mobile", label: "Caravan or other mobile or temporary structure" },
  ];

  let selected; // A binding for the selected item ID
<\/script>

<Radios {items} bind:value={selected} label="Select one">
\`\`\`
`,Z=`In this example, the radios are defined explicitly rather than via an array.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Radio, Radios } from "@onsvisual/svelte-components";

  let selected; // A binding for the selected item ID
<\/script>

<Radios label="Select items">
  <Radio
    groupId="radios"
    id="house"
    label="House or bungalow"
    description="Includes terraced, semi-detached and detached homes."
  />
  <Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />
  <Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />
</Radios>
\`\`\`
`;function G(a){let e,t,i;return{c(){e=C("span"),t=C("span"),i=q(a[4]),b(t,"class","ons-label__description ons-radio__label--with-description"),b(e,"class","ons-label__aria-hidden-description"),b(e,"aria-hidden","true")},m(r,o){k(r,e,o),I(e,t),I(t,i)},p(r,o){o&16&&B(i,r[4])},d(r){r&&w(e)}}}function J(a){let e,t,i;return{c(){e=C("span"),t=q(a[4]),b(e,"class","ons-label__visually-hidden-description ons-u-vh"),b(e,"id",i=a[1]+"-label-description-hint")},m(r,o){k(r,e,o),I(e,t)},p(r,o){o&16&&B(t,r[4]),o&2&&i!==(i=r[1]+"-label-description-hint")&&b(e,"id",i)},d(r){r&&w(e)}}}function ve(a){let e,t,i,r=!1,o,n,s,c,p,y,d,u,f,j,l=a[4]&&G(a),m=a[4]&&J(a);return u=ie(a[8][0]),{c(){e=C("span"),t=C("span"),i=C("input"),o=S(),n=C("label"),s=q(a[3]),c=S(),l&&l.c(),d=S(),m&&m.c(),b(i,"type","radio"),b(i,"id",a[1]),i.__value=a[1],i.value=i.__value,b(i,"name",a[2]),b(i,"class","ons-radio__input ons-js-radio svelte-1jkvolf"),b(n,"class","ons-radio__label svelte-1jkvolf"),b(n,"for",a[1]),b(n,"id",p=a[1]+"-label"),b(n,"aria-describedby",y=a[4]?`${a[1]}-label-description-hint`:null),A(n,"ons-label--with-description",a[4]),b(t,"class","ons-radio svelte-1jkvolf"),A(t,"ons-radio--no-border",a[5]),b(e,"class","ons-radios__item svelte-1jkvolf"),A(e,"ons-radios__item--no-border",a[5]),u.p(i)},m(_,g){k(_,e,g),I(e,t),I(t,i),i.checked=i.__value===a[0],I(t,o),I(t,n),I(n,s),I(n,c),l&&l.m(n,null),I(t,d),m&&m.m(t,null),f||(j=[P(i,"change",a[7]),P(i,"change",a[9])],f=!0)},p(_,[g]){g&2&&b(i,"id",_[1]),g&2&&(i.__value=_[1],i.value=i.__value,r=!0),g&4&&b(i,"name",_[2]),(r||g&1)&&(i.checked=i.__value===_[0]),g&8&&B(s,_[3]),_[4]?l?l.p(_,g):(l=G(_),l.c(),l.m(n,null)):l&&(l.d(1),l=null),g&2&&b(n,"for",_[1]),g&2&&p!==(p=_[1]+"-label")&&b(n,"id",p),g&18&&y!==(y=_[4]?`${_[1]}-label-description-hint`:null)&&b(n,"aria-describedby",y),g&16&&A(n,"ons-label--with-description",_[4]),_[4]?m?m.p(_,g):(m=J(_),m.c(),m.m(t,null)):m&&(m.d(1),m=null),g&32&&A(t,"ons-radio--no-border",_[5]),g&32&&A(e,"ons-radios__item--no-border",_[5])},i:W,o:W,d(_){_&&w(e),l&&l.d(),m&&m.d(),u.r(),f=!1,ne(j)}}}function he(a,e,t){const i=ae();let{id:r}=e,{groupId:o}=e,{label:n}=e,{value:s=null}=e,{description:c=null}=e,{compact:p=!1}=e;const y=[[]];function d(){s=this.__value,t(0,s)}const u=f=>i("change",f);return a.$$set=f=>{"id"in f&&t(1,r=f.id),"groupId"in f&&t(2,o=f.groupId),"label"in f&&t(3,n=f.label),"value"in f&&t(0,s=f.value),"description"in f&&t(4,c=f.description),"compact"in f&&t(5,p=f.compact)},[s,r,o,n,c,p,i,d,y,u]}class L extends E{constructor(e){super(),N(this,e,he,ve,U,{id:1,groupId:2,label:3,value:0,description:4,compact:5})}}L.__docgen={version:3,name:"Radio.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Unique ID input",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"ID for radio group (required)",name:"groupId",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Label for input",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Binding for ID of selected option",name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"(Optional) Extended description for element",name:"description",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Compact mode (no border)",name:"compact",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[],refs:[]};function K(a,e,t){const i=a.slice();return i[9]=e[t],i[11]=t,i}function x(a){let e,t;return{c(){e=C("p"),t=q(a[2]),b(e,"class","ons-radios__label")},m(i,r){k(i,e,r),I(e,t)},p(i,r){r&4&&B(t,i[2])},d(i){i&&w(e)}}}function ee(a){let e,t,i;function r(n){a[7](n)}let o={id:a[9].id,label:a[9].label,description:a[9].description,groupId:a[1],compact:a[4]};return a[0]!==void 0&&(o.value=a[0]),e=new L({props:o}),pe.push(()=>ce(e,"value",r)),e.$on("change",a[8]),{c(){R(e.$$.fragment)},m(n,s){D(e,n,s),i=!0},p(n,s){const c={};s&8&&(c.id=n[9].id),s&8&&(c.label=n[9].label),s&8&&(c.description=n[9].description),s&2&&(c.groupId=n[1]),s&16&&(c.compact=n[4]),!t&&s&1&&(t=!0,c.value=n[0],me(()=>t=!1)),e.$set(c)},i(n){i||(v(e.$$.fragment,n),i=!0)},o(n){h(e.$$.fragment,n),i=!1},d(n){$(e,n)}}}function ke(a){let e,t,i,r,o=a[2]&&x(a);const n=a[6].default,s=se(n,a,a[5],null);let c=a[3],p=[];for(let d=0;d<c.length;d+=1)p[d]=ee(K(a,c,d));const y=d=>h(p[d],1,1,()=>{p[d]=null});return{c(){o&&o.c(),e=S(),t=C("div"),s&&s.c(),i=S();for(let d=0;d<p.length;d+=1)p[d].c();b(t,"class","ons-radios__items")},m(d,u){o&&o.m(d,u),k(d,e,u),k(d,t,u),s&&s.m(t,null),I(t,i);for(let f=0;f<p.length;f+=1)p[f]&&p[f].m(t,null);r=!0},p(d,[u]){if(d[2]?o?o.p(d,u):(o=x(d),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),s&&s.p&&(!r||u&32)&&le(s,n,d,d[5],r?re(n,d[5],u,null):oe(d[5]),null),u&27){c=d[3];let f;for(f=0;f<c.length;f+=1){const j=K(d,c,f);p[f]?(p[f].p(j,u),v(p[f],1)):(p[f]=ee(j),p[f].c(),v(p[f],1),p[f].m(t,null))}for(de(),f=c.length;f<p.length;f+=1)y(f);ue()}},i(d){if(!r){v(s,d);for(let u=0;u<c.length;u+=1)v(p[u]);r=!0}},o(d){h(s,d),p=p.filter(Boolean);for(let u=0;u<p.length;u+=1)h(p[u]);r=!1},d(d){o&&o.d(d),d&&w(e),d&&w(t),s&&s.d(d),fe(p,d)}}}function we(a,e,t){let{$$slots:i={},$$scope:r}=e,{id:o="name"}=e,{label:n=""}=e,{value:s=null}=e,{items:c=[]}=e,{compact:p=!1}=e;function y(u){s=u,t(0,s)}function d(u){_e.call(this,a,u)}return a.$$set=u=>{"id"in u&&t(1,o=u.id),"label"in u&&t(2,n=u.label),"value"in u&&t(0,s=u.value),"items"in u&&t(3,c=u.items),"compact"in u&&t(4,p=u.compact),"$$scope"in u&&t(5,r=u.$$scope)},[s,o,n,c,p,r,i,y,d]}class V extends E{constructor(e){super(),N(this,e,we,ke,U,{id:1,label:2,value:0,items:3,compact:4})}}V.__docgen={version:3,name:"Radios.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Unique ID for radio group (required)",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"name"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Label for grouped inputs",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Binding for ID of selected option",name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"(Optional) Define the radios as an array of {id, label, description?}",name:"items",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Compact mode (no border)",name:"compact",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"change",parent:"Radio",modificators:[],locations:null}],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function Ie(a){let e,t,i;const r=[a[1]];let o={};for(let n=0;n<r.length;n+=1)o=M(o,r[n]);return t=new V({props:o}),{c(){e=C("div"),R(t.$$.fragment),te(e,"padding","12px")},m(n,s){k(n,e,s),D(t,e,null),i=!0},p(n,s){const c=s&2?O(r,[T(n[1])]):{};t.$set(c)},i(n){i||(v(t.$$.fragment,n),i=!0)},o(n){h(t.$$.fragment,n),i=!1},d(n){n&&w(e),$(t)}}}function Re(a){let e,t,i,r,o,n;return e=new L({props:{groupId:"radios",id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."}}),i=new L({props:{groupId:"radios",id:"flat",label:"Flat, maisonette or apartment"}}),o=new L({props:{groupId:"radios",id:"mobile",label:"Caravan or other mobile or temporary structure"}}),{c(){R(e.$$.fragment),t=S(),R(i.$$.fragment),r=S(),R(o.$$.fragment)},m(s,c){D(e,s,c),k(s,t,c),D(i,s,c),k(s,r,c),D(o,s,c),n=!0},p:W,i(s){n||(v(e.$$.fragment,s),v(i.$$.fragment,s),v(o.$$.fragment,s),n=!0)},o(s){h(e.$$.fragment,s),h(i.$$.fragment,s),h(o.$$.fragment,s),n=!1},d(s){$(e,s),s&&w(t),$(i,s),s&&w(r),$(o,s)}}}function De(a){let e,t,i;return t=new V({props:{label:"Select one",$$slots:{default:[Re]},$$scope:{ctx:a}}}),{c(){e=C("div"),R(t.$$.fragment),te(e,"padding","12px")},m(r,o){k(r,e,o),D(t,e,null),i=!0},p(r,o){const n={};o&4&&(n.$$scope={dirty:o,ctx:r}),t.$set(n)},i(r){i||(v(t.$$.fragment,r),i=!0)},o(r){h(t.$$.fragment,r),i=!1},d(r){r&&w(e),$(t)}}}function $e(a){let e,t,i,r,o,n,s,c,p,y;const d=[{title:"Inputs/Radios"},{component:V},{argTypes:{}},Q(Y)];let u={};for(let l=0;l<d.length;l+=1)u=M(u,d[l]);e=new ge({props:u}),i=new ye({props:{$$slots:{default:[Ie,({args:l})=>({1:l}),({args:l})=>l?2:0]},$$scope:{ctx:a}}}),o=new H({props:{name:"Default",args:{label:"Select one",id:"radios",items:a[0]}}}),s=new H({props:{name:"Compact without label",args:{id:"radios",items:a[0],compact:!0}}});const f=[{name:"Individually defined radios"},X(Z)];let j={$$slots:{default:[De]},$$scope:{ctx:a}};for(let l=0;l<f.length;l+=1)j=M(j,f[l]);return p=new H({props:j}),{c(){R(e.$$.fragment),t=S(),R(i.$$.fragment),r=S(),R(o.$$.fragment),n=S(),R(s.$$.fragment),c=S(),R(p.$$.fragment)},m(l,m){D(e,l,m),k(l,t,m),D(i,l,m),k(l,r,m),D(o,l,m),k(l,n,m),D(s,l,m),k(l,c,m),D(p,l,m),y=!0},p(l,[m]){const _=m&0?O(d,[d[0],m&0&&{component:V},d[2],m&0&&T(Q(Y))]):{};e.$set(_);const g={};m&6&&(g.$$scope={dirty:m,ctx:l}),i.$set(g);const z=m&0?O(f,[f[0],T(X(Z))]):{};m&4&&(z.$$scope={dirty:m,ctx:l}),p.$set(z)},i(l){y||(v(e.$$.fragment,l),v(i.$$.fragment,l),v(o.$$.fragment,l),v(s.$$.fragment,l),v(p.$$.fragment,l),y=!0)},o(l){h(e.$$.fragment,l),h(i.$$.fragment,l),h(o.$$.fragment,l),h(s.$$.fragment,l),h(p.$$.fragment,l),y=!1},d(l){$(e,l),l&&w(t),$(i,l),l&&w(r),$(o,l),l&&w(n),$(s,l),l&&w(c),$(p,l)}}}function Ce(a){return[[{id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."},{id:"flat",label:"Flat, maisonette or apartment"},{id:"mobile",label:"Caravan or other mobile or temporary structure"}]]}class Se extends E{constructor(e){super(),N(this,e,Ce,$e,U,{})}}const F=be(Se,{meta:{title:"Inputs/Radios"},stories:{"tpl:default":{storyId:"inputs-radios--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Radios {...args} />
</div>`,hasArgs:!0},Default:{storyId:"inputs-radios--default",name:"Default",template:!1,hasArgs:!1},CompactWithoutLabel:{storyId:"inputs-radios--compact-without-label",name:"Compact without label",template:!1,hasArgs:!1},IndividuallyDefinedRadios:{storyId:"inputs-radios--individually-defined-radios",name:"Individually defined radios",template:!1,source:`<div style:padding="12px">
  <Radios label="Select one">
    <Radio
      groupId="radios"
      id="house"
      label="House or bungalow"
      description="Includes terraced, semi-detached and detached homes."
    />
    <Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />
    <Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />
  </Radios>
</div>`,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","exampleDocs","Radio","Radios","withComponentDocs","withStoryDocs"]}),Le=F.meta,Ve=["Default","CompactWithoutLabel","IndividuallyDefinedRadios"],qe=F.stories.Default,Be=F.stories.CompactWithoutLabel,Fe=F.stories.IndividuallyDefinedRadios;export{Be as CompactWithoutLabel,qe as Default,Fe as IndividuallyDefinedRadios,Ve as __namedExportsOrder,Le as default};
//# sourceMappingURL=Radios.stories-15d7af6c.js.map
