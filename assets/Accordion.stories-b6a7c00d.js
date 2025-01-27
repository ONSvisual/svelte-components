import{S as M,i as W,s as L,q as P,x as b,w as S,L as g,a as h,P as w,u as Q,r as R,v as Y,b as $,t as A,d as y,I as C,F as q,Q as Z,Y as O,R as G,B as ee,E,o as te,f as ne,K as oe,p as J,j as k,m as I,k as N,l as U,n as T,y as se,z as X}from"./index-98bb0bde.js";import{b as H,p as le,w as V,M as ie,T as ae,S as B}from"./collect-stories-cbdfda5c.js";import{b as re}from"./utils-bbbf505c.js";import"./_commonjsHelpers-725317a4.js";const z=`An accordion component.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Accordion } from "@onsvisual/svelte-components";
  import { AccordionItem } from "@onsvisual/svelte-components";
<\/script>

<Accordion width="{narrow|medium|wide|full}">
  <AccordionItem title="First item">
    <p>Contents of first item.</p>
  </AccordionItem>
  <AccordionItem title="Second item">
    <p>Contents of second item.</p>
  </AccordionItem>
</Accordion>
\`\`\`
`;function K(r){let e,n,o,i=r[1]?"Hide all":"Show all",a,t,s;return{c(){e=b("button"),n=b("span"),o=b("span"),a=Z(i),g(o,"class","ons-btn__text"),g(n,"class","ons-btn__inner ons-js-accordion-all-inner"),g(e,"type","button"),g(e,"class","ons-btn ons-js-accordion-all ons-u-mb-s ons-btn--secondary ons-btn--small")},m(c,p){h(c,e,p),w(e,n),w(n,o),w(o,a),t||(s=O(e,"click",r[7]),t=!0)},p(c,p){p&2&&i!==(i=c[1]?"Hide all":"Show all")&&G(a,i)},d(c){c&&y(e),t=!1,s()}}}function ce(r){let e,n,o,i=r[0]&&K(r);const a=r[6].default,t=P(a,r,r[5],null);return{c(){e=b("div"),i&&i.c(),n=S(),t&&t.c(),g(e,"id","accordion"),g(e,"class","ons-accordion")},m(s,c){h(s,e,c),i&&i.m(e,null),w(e,n),t&&t.m(e,null),o=!0},p(s,[c]){s[0]?i?i.p(s,c):(i=K(s),i.c(),i.m(e,n)):i&&(i.d(1),i=null),t&&t.p&&(!o||c&32)&&Q(t,a,s,s[5],o?Y(a,s[5],c,null):R(s[5]),null)},i(s){o||($(t,s),o=!0)},o(s){A(t,s),o=!1},d(s){s&&y(e),i&&i.d(),t&&t.d(s)}}}function de(r,e,n){let o,i,{$$slots:a={},$$scope:t}=e;const s=H(new Set);C(r,s,d=>n(8,i=d)),q("elements",s);const c=H(!1);C(r,c,d=>n(1,o=d)),q("allOpen",c);function p(){i.forEach(d=>{d.open=!o})}let{showToggle:u=!1}=e;const l=()=>p();return r.$$set=d=>{"showToggle"in d&&n(0,u=d.showToggle),"$$scope"in d&&n(5,t=d.$$scope)},[u,o,s,c,p,t,a,l]}class D extends M{constructor(e){super(),W(this,e,de,ce,L,{showToggle:0})}}D.__docgen={version:3,name:"Accordion.svelte",data:[{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:'Option to include a "show all" toggle above the accordion',name:"showToggle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function fe(r){let e,n,o,i,a,t,s,c,p,u,l,d;const v=r[8].default,_=P(v,r,r[7],null);return{c(){e=b("details"),n=b("summary"),o=b("h2"),i=Z(r[1]),a=S(),t=b("span"),t.innerHTML='<svg class="ons-icon" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor"><path d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z" transform="translate(-5.02 -1.59)"></path></svg>',s=S(),c=b("div"),_&&_.c(),g(o,"class","ons-collapsible__title"),g(t,"class","ons-collapsible__icon svelte-15d485u"),g(n,"class","ons-collapsible__heading ons-js-collapsible-heading ons-details__heading svelte-15d485u"),g(c,"id",p=r[2]+"-content"),g(c,"class","ons-details__content ons-js-details-content"),g(e,"id","accordion-1"),g(e,"class","ons-collapsible ons-js-collapsible ons-details--accordion svelte-15d485u"),g(e,"data-group","accordion")},m(m,f){h(m,e,f),w(e,n),w(n,o),w(o,i),w(n,a),w(n,t),w(e,s),w(e,c),_&&_.m(c,null),r[9](e),e.open=r[0],u=!0,l||(d=[O(e,"toggle",r[10]),O(e,"toggle",r[6])],l=!0)},p(m,[f]){(!u||f&2)&&G(i,m[1]),_&&_.p&&(!u||f&128)&&Q(_,v,m,m[7],u?Y(v,m[7],f,null):R(m[7]),null),(!u||f&4&&p!==(p=m[2]+"-content"))&&g(c,"id",p),f&1&&(e.open=m[0])},i(m){u||($(_,m),u=!0)},o(m){A(_,m),u=!1},d(m){m&&y(e),_&&_.d(m),r[9](null),l=!1,ee(d)}}}function pe(r,e,n){let o,i,{$$slots:a={},$$scope:t}=e,{title:s="Title"}=e,{id:c=re(s)}=e,{open:p=!1}=e,u;const l=E("elements");C(r,l,f=>n(11,o=f));const d=E("allOpen");C(r,d,f=>n(12,i=f));function v(f){u&&o&&oe(d,i=f.newState==="open"?[...o].every(x=>x.open):!1,i)}te(()=>(o.add(u),()=>o.delete(u)));function _(f){ne[f?"unshift":"push"](()=>{u=f,n(3,u)})}function m(){p=this.open,n(0,p)}return r.$$set=f=>{"title"in f&&n(1,s=f.title),"id"in f&&n(2,c=f.id),"open"in f&&n(0,p=f.open),"$$scope"in f&&n(7,t=f.$$scope)},[p,s,c,u,l,d,v,t,a,_,m]}class j extends M{constructor(e){super(),W(this,e,pe,fe,L,{title:1,id:2,open:0})}}j.__docgen={version:3,name:"AccordionItem.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"A title for the element",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Title"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"A unique for the element (optional)",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"}},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Option for element to be open/expanded by default",name:"open",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ue(r){let e;return{c(){e=b("p"),e.textContent="Contents of first item."},m(n,o){h(n,e,o)},p:X,d(n){n&&y(e)}}}function me(r){let e;return{c(){e=b("p"),e.textContent="Contents of second item."},m(n,o){h(n,e,o)},p:X,d(n){n&&y(e)}}}function _e(r){let e,n,o,i;return e=new j({props:{title:"First item",$$slots:{default:[ue]},$$scope:{ctx:r}}}),o=new j({props:{title:"Second item",$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){k(e.$$.fragment),n=S(),k(o.$$.fragment)},m(a,t){I(e,a,t),h(a,n,t),I(o,a,t),i=!0},p(a,t){const s={};t&2&&(s.$$scope={dirty:t,ctx:a}),e.$set(s);const c={};t&2&&(c.$$scope={dirty:t,ctx:a}),o.$set(c)},i(a){i||($(e.$$.fragment,a),$(o.$$.fragment,a),i=!0)},o(a){A(e.$$.fragment,a),A(o.$$.fragment,a),i=!1},d(a){T(e,a),a&&y(n),T(o,a)}}}function ge(r){let e,n,o;const i=[r[0]];let a={$$slots:{default:[_e]},$$scope:{ctx:r}};for(let t=0;t<i.length;t+=1)a=J(a,i[t]);return n=new D({props:a}),{c(){e=b("div"),k(n.$$.fragment),se(e,"padding","12px")},m(t,s){h(t,e,s),I(n,e,null),o=!0},p(t,s){const c=s&1?N(i,[U(t[0])]):{};s&2&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){o||($(n.$$.fragment,t),o=!0)},o(t){A(n.$$.fragment,t),o=!1},d(t){t&&y(e),T(n)}}}function be(r){let e,n,o,i,a,t,s,c;const p=[{title:"Layout/Accordion"},{component:D},{argTypes:{}},V(z)];let u={};for(let l=0;l<p.length;l+=1)u=J(u,p[l]);return e=new ie({props:u}),o=new ae({props:{$$slots:{default:[ge,({args:l})=>({0:l}),({args:l})=>l?1:0]},$$scope:{ctx:r}}}),a=new B({props:{name:"Default",args:{}}}),s=new B({props:{name:"With 'show all' toggle",args:{showToggle:!0}}}),{c(){k(e.$$.fragment),n=S(),k(o.$$.fragment),i=S(),k(a.$$.fragment),t=S(),k(s.$$.fragment)},m(l,d){I(e,l,d),h(l,n,d),I(o,l,d),h(l,i,d),I(a,l,d),h(l,t,d),I(s,l,d),c=!0},p(l,[d]){const v=d&0?N(p,[p[0],d&0&&{component:D},p[2],d&0&&U(V(z))]):{};e.$set(v);const _={};d&3&&(_.$$scope={dirty:d,ctx:l}),o.$set(_)},i(l){c||($(e.$$.fragment,l),$(o.$$.fragment,l),$(a.$$.fragment,l),$(s.$$.fragment,l),c=!0)},o(l){A(e.$$.fragment,l),A(o.$$.fragment,l),A(a.$$.fragment,l),A(s.$$.fragment,l),c=!1},d(l){T(e,l),l&&y(n),T(o,l),l&&y(i),T(a,l),l&&y(t),T(s,l)}}}class we extends M{constructor(e){super(),W(this,e,null,be,L,{})}}const F=le(we,{meta:{title:"Layout/Accordion"},stories:{"tpl:default":{storyId:"layout-accordion--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Accordion {...args}>
    <AccordionItem title="First item">
      <p>Contents of first item.</p>
    </AccordionItem>
    <AccordionItem title="Second item">
      <p>Contents of second item.</p>
    </AccordionItem>
  </Accordion>
</div>`,hasArgs:!0},Default:{storyId:"layout-accordion--default",name:"Default",template:!1,hasArgs:!1},WithShowAllToggle:{storyId:"layout-accordion--with-show-all-toggle",name:"With 'show all' toggle",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Accordion","AccordionItem","withComponentDocs"]}),ve=F.meta,ke=["Default","WithShowAllToggle"],Ie=F.stories.Default,Te=F.stories.WithShowAllToggle;export{Ie as Default,Te as WithShowAllToggle,ke as __namedExportsOrder,ve as default};
//# sourceMappingURL=Accordion.stories-b6a7c00d.js.map