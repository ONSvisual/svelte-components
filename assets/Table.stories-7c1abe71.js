import{S as U,i as $,s as x,x as w,w as D,L as f,Z as v,y as M,a as H,P as k,z as E,d as T,X as O,Q as j,R as B,e as le,O as W,Y as ne,p as ee,j as C,m as A,k as te,l as ae,b as I,t as z,n as F}from"./index-98bb0bde.js";import{p as se,w as P,M as oe,T as ie,S as L}from"./collect-stories-cbdfda5c.js";import{f as re,a as ce,d as ue,i as R}from"./utils-bbbf505c.js";import"./_commonjsHelpers-725317a4.js";const q=`An table component with various customisation options.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Table } from "@onsvisual/svelte-components";

  const data = [
    { col1: "Item one", col2: 10 },
    { col1: "Item two", col2: 20 },
    { col1: "Item three", col2: 30 },
  ];
  const columns = [
    { key: "col1", label: "Text column" },
    { key: "col2", label: "Numeric column", numeric: true, sortable: true },
  ];
<\/script>

<Table {data} {columns} />
\`\`\`
`;function Q(a,e,t){const o=a.slice();return o[13]=e[t],o}function X(a,e,t){const o=a.slice();return o[16]=e[t],o[18]=t,o}function Y(a,e,t){const o=a.slice();return o[16]=e[t],o[18]=t,o}function Z(a){let e,t;return{c(){e=w("caption"),t=j(a[0]),f(e,"class","ons-table__caption")},m(o,n){H(o,e,n),k(e,t)},p(o,n){n&1&&B(t,o[0])},d(o){o&&T(e)}}}function fe(a){let e,t,o=a[16].label+"",n,s;return{c(){e=w("th"),t=w("span"),n=j(o),s=D(),f(t,"class","ons-table__header-text"),f(e,"scope","col"),f(e,"class","ons-table__header svelte-81wno"),v(e,"ons-table__header--numeric",a[16].numeric)},m(c,r){H(c,e,r),k(e,t),k(t,n),k(e,s)},p(c,r){r&64&&o!==(o=c[16].label+"")&&B(n,o),r&64&&v(e,"ons-table__header--numeric",c[16].numeric)},d(c){c&&T(e)}}}function me(a){let e,t,o=a[16].label+"",n,s,c,r,_,y,g,d,h;function i(){return a[12](a[18],a[16])}return{c(){e=w("th"),t=w("button"),n=j(o),s=W("svg"),c=W("path"),r=W("path"),y=D(),f(c,"class","ons-topTriangle"),f(c,"d","M6 0l6 7.2H0L6 0zm0 18.6l6-7.2H0l6 7.2zm0 3.6l6 7.2H0l6-7.2z"),f(r,"class","ons-bottomTriangle"),f(r,"d","M6 18.6l6-7.2H0l6 7.2zm0 3.6l6 7.2H0l6-7.2z"),f(s,"class","ons-svg-icon"),f(s,"viewBox","0 0 12 19"),f(s,"xmlns","http://www.w3.org/2000/svg"),f(s,"focusable","false"),f(s,"fill","currentColor"),f(t,"aria-label",_="Sort by "+a[16].label),f(t,"type","button"),f(t,"data-index",a[18]),f(t,"class","ons-table__sort-button svelte-81wno"),f(e,"scope","col"),f(e,"class","ons-table__header svelte-81wno"),f(e,"aria-sort",g=a[8][a[18]]),v(e,"ons-table__header--numeric",a[16].numeric)},m(m,p){H(m,e,p),k(e,t),k(t,n),k(t,s),k(s,c),k(s,r),k(e,y),d||(h=ne(t,"click",i),d=!0)},p(m,p){a=m,p&64&&o!==(o=a[16].label+"")&&B(n,o),p&64&&_!==(_="Sort by "+a[16].label)&&f(t,"aria-label",_),p&256&&g!==(g=a[8][a[18]])&&f(e,"aria-sort",g),p&64&&v(e,"ons-table__header--numeric",a[16].numeric)},d(m){m&&T(e),d=!1,h()}}}function G(a){let e;function t(s,c){return s[16].sortable?me:fe}let o=t(a),n=o(a);return{c(){n.c(),e=le()},m(s,c){n.m(s,c),H(s,e,c)},p(s,c){o===(o=t(s))&&n?n.p(s,c):(n.d(1),n=o(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){n.d(s),s&&T(e)}}}function J(a){let e,t=(a[16].numeric&&R(a[13][a[16].key])?a[9][a[18]](a[13][a[16].key]):a[13][a[16].key]||"&ndash;")+"",o;return{c(){e=w("td"),f(e,"class","ons-table__cell"),f(e,"data-th",o=a[16].label),v(e,"ons-table__cell--numeric",a[16].numeric)},m(n,s){H(n,e,s),e.innerHTML=t},p(n,s){s&704&&t!==(t=(n[16].numeric&&R(n[13][n[16].key])?n[9][n[18]](n[13][n[16].key]):n[13][n[16].key]||"&ndash;")+"")&&(e.innerHTML=t),s&64&&o!==(o=n[16].label)&&f(e,"data-th",o),s&64&&v(e,"ons-table__cell--numeric",n[16].numeric)},d(n){n&&T(e)}}}function K(a){let e,t,o=a[6],n=[];for(let s=0;s<o.length;s+=1)n[s]=J(X(a,o,s));return{c(){e=w("tr");for(let s=0;s<n.length;s+=1)n[s].c();t=D(),f(e,"class","ons-table__row")},m(s,c){H(s,e,c);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null);k(e,t)},p(s,c){if(c&704){o=s[6];let r;for(r=0;r<o.length;r+=1){const _=X(s,o,r);n[r]?n[r].p(_,c):(n[r]=J(_),n[r].c(),n[r].m(e,t))}for(;r<n.length;r+=1)n[r].d(1);n.length=o.length}},d(s){s&&T(e),O(n,s)}}}function de(a){let e,t,o,n,s,c,r,_,y,g,d=a[0]&&Z(a),h=a[6],i=[];for(let l=0;l<h.length;l+=1)i[l]=G(Y(a,h,l));let m=a[7],p=[];for(let l=0;l<m.length;l+=1)p[l]=K(Q(a,m,l));return{c(){e=w("div"),t=w("table"),d&&d.c(),o=D(),n=w("thead"),s=w("tr");for(let l=0;l<i.length;l+=1)i[l].c();c=D(),r=w("tbody");for(let l=0;l<p.length;l+=1)p[l].c();f(s,"class","ons-table__row"),f(n,"class","ons-table__head svelte-81wno"),f(r,"class","ons-table__body"),f(t,"class","ons-table svelte-81wno"),f(t,"data-aria-sort",_=a[10]?"Sort by":null),f(t,"data-aria-asc",y=a[10]?"ascending":null),f(t,"data-aria-desc",g=a[10]?"descending":null),v(t,"ons-table--sortable",a[10]),v(t,"ons-table--compact",a[1]),v(t,"ons-table--responsive",a[2]),v(t,"ons-table--row-hover",a[3]),v(t,"sticky-header",a[4]),M(e,"overflow",typeof a[5]=="number"?"auto":null),M(e,"height",typeof a[5]=="number"?`${a[5]}px`:null),M(e,"display",typeof a[5]!="number"?"contents":null)},m(l,b){H(l,e,b),k(e,t),d&&d.m(t,null),k(t,o),k(t,n),k(n,s);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(s,null);k(t,c),k(t,r);for(let u=0;u<p.length;u+=1)p[u]&&p[u].m(r,null)},p(l,[b]){if(l[0]?d?d.p(l,b):(d=Z(l),d.c(),d.m(t,o)):d&&(d.d(1),d=null),b&448){h=l[6];let u;for(u=0;u<h.length;u+=1){const S=Y(l,h,u);i[u]?i[u].p(S,b):(i[u]=G(S),i[u].c(),i[u].m(s,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=h.length}if(b&704){m=l[7];let u;for(u=0;u<m.length;u+=1){const S=Q(l,m,u);p[u]?p[u].p(S,b):(p[u]=K(S),p[u].c(),p[u].m(r,null))}for(;u<p.length;u+=1)p[u].d(1);p.length=m.length}b&1024&&_!==(_=l[10]?"Sort by":null)&&f(t,"data-aria-sort",_),b&1024&&y!==(y=l[10]?"ascending":null)&&f(t,"data-aria-asc",y),b&1024&&g!==(g=l[10]?"descending":null)&&f(t,"data-aria-desc",g),b&1024&&v(t,"ons-table--sortable",l[10]),b&2&&v(t,"ons-table--compact",l[1]),b&4&&v(t,"ons-table--responsive",l[2]),b&8&&v(t,"ons-table--row-hover",l[3]),b&16&&v(t,"sticky-header",l[4]),b&32&&M(e,"overflow",typeof l[5]=="number"?"auto":null),b&32&&M(e,"height",typeof l[5]=="number"?`${l[5]}px`:null),b&32&&M(e,"display",typeof l[5]!="number"?"contents":null)},i:E,o:E,d(l){l&&T(e),d&&d.d(),O(i,l),O(p,l)}}}function pe(a,e,t){let o,n,{title:s=""}=e,{compact:c=!1}=e,{responsive:r=!1}=e,{rowHover:_=!1}=e,{stickyHeader:y=!1}=e,{height:g="auto"}=e,{data:d=[]}=e,{columns:h=Array.isArray(d)&&d[0]?Object.keys(d[0]).map(l=>({key:l,label:l})):[]}=e,i=[...d],m=h.map(l=>"none");const p=(l,b)=>{t(8,m=m.map((u,S)=>S===l&&u==="ascending"?"descending":S===l?"ascending":"none")),t(7,i=i.sort((u,S)=>m[l]==="ascending"?ce(u[b.key],S[b.key]):ue(u[b.key],S[b.key])))};return a.$$set=l=>{"title"in l&&t(0,s=l.title),"compact"in l&&t(1,c=l.compact),"responsive"in l&&t(2,r=l.responsive),"rowHover"in l&&t(3,_=l.rowHover),"stickyHeader"in l&&t(4,y=l.stickyHeader),"height"in l&&t(5,g=l.height),"data"in l&&t(11,d=l.data),"columns"in l&&t(6,h=l.columns)},a.$$.update=()=>{a.$$.dirty&64&&t(10,o=h.map(l=>l.sortable).includes(!0)),a.$$.dirty&64&&t(9,n=h.map(l=>re(l.dp)))},[s,c,r,_,y,g,h,i,m,n,o,d,p]}class V extends U{constructor(e){super(),$(this,e,pe,de,x,{title:0,compact:1,responsive:2,rowHover:3,stickyHeader:4,height:5,data:11,columns:6})}}V.__docgen={version:3,name:"Table.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"An optional title for the table",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Make the chart smaller/more compact",name:"compact",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Make the chart responsive (changes layout on narrow screens)",name:"responsive",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Highlight rows on hover",name:"rowHover",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Sticky header when table is longer than screen height",name:"stickyHeader",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:'{number|"auto"}'}],visibility:"public",description:"Sticky header when table is longer than screen height",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'number|"auto"',type:[{kind:"type",text:"number",type:"number"},{kind:"type",text:'"auto"',type:'"auto"'}]},defaultValue:"auto"},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"Rows of data",name:"data",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{array}"}],visibility:"public",description:"Optional metadata for formatting columns. Array of {key, label, sortable?, numeric?, dp?} objects",name:"columns",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function be(a){let e,t,o;const n=[a[2]];let s={};for(let c=0;c<n.length;c+=1)s=ee(s,n[c]);return t=new V({props:s}),{c(){e=w("div"),C(t.$$.fragment),M(e,"padding","12px")},m(c,r){H(c,e,r),A(t,e,null),o=!0},p(c,r){const _=r&4?te(n,[ae(c[2])]):{};t.$set(_)},i(c){o||(I(t.$$.fragment,c),o=!0)},o(c){z(t.$$.fragment,c),o=!1},d(c){c&&T(e),F(t)}}}function _e(a){let e,t,o,n,s,c,r,_,y,g;const d=[{title:"Data visualisation/Table"},{component:V},{argTypes:{}},P(q)];let h={};for(let i=0;i<d.length;i+=1)h=ee(h,d[i]);return e=new oe({props:h}),o=new ie({props:{$$slots:{default:[be,({args:i})=>({2:i}),({args:i})=>i?4:0]},$$scope:{ctx:a}}}),s=new L({props:{name:"Default",args:{data:a[0],columns:a[1]}}}),r=new L({props:{name:"Fixed height 200px with sticky header",args:{data:a[0],columns:a[1],height:200,stickyHeader:!0}}}),y=new L({props:{name:"Compact mode",args:{data:a[0],columns:a[1],compact:!0}}}),{c(){C(e.$$.fragment),t=D(),C(o.$$.fragment),n=D(),C(s.$$.fragment),c=D(),C(r.$$.fragment),_=D(),C(y.$$.fragment)},m(i,m){A(e,i,m),H(i,t,m),A(o,i,m),H(i,n,m),A(s,i,m),H(i,c,m),A(r,i,m),H(i,_,m),A(y,i,m),g=!0},p(i,[m]){const p=m&0?te(d,[d[0],m&0&&{component:V},d[2],m&0&&ae(P(q))]):{};e.$set(p);const l={};m&12&&(l.$$scope={dirty:m,ctx:i}),o.$set(l)},i(i){g||(I(e.$$.fragment,i),I(o.$$.fragment,i),I(s.$$.fragment,i),I(r.$$.fragment,i),I(y.$$.fragment,i),g=!0)},o(i){z(e.$$.fragment,i),z(o.$$.fragment,i),z(s.$$.fragment,i),z(r.$$.fragment,i),z(y.$$.fragment,i),g=!1},d(i){F(e,i),i&&T(t),F(o,i),i&&T(n),F(s,i),i&&T(c),F(r,i),i&&T(_),F(y,i)}}}function he(a){return[[{country:"Scotland",mountain:"Ben Nevis",height:1345},{country:"Wales",mountain:"Snowdon",height:1085},{country:"England",mountain:"Scarfell Pike",height:978},{country:"Northern Ireland",mountain:"Slieve Donard",height:850}],[{key:"country",label:"Country",sortable:!0},{key:"mountain",label:"Highest mountain"},{key:"height",label:"Height in metres",sortable:!0,numeric:!0}]]}class ye extends U{constructor(e){super(),$(this,e,he,_e,x,{})}}const N=se(ye,{meta:{title:"Data visualisation/Table"},stories:{"tpl:default":{storyId:"data-visualisation-table--default",name:"default",template:!0,source:`<div style:padding="12px">
  <Table {...args} />
</div>`,hasArgs:!0},Default:{storyId:"data-visualisation-table--default",name:"Default",template:!1,hasArgs:!1},FixedHeight200pxWithStickyHeader:{storyId:"data-visualisation-table--fixed-height-200-px-with-sticky-header",name:"Fixed height 200px with sticky header",template:!1,hasArgs:!1},CompactMode:{storyId:"data-visualisation-table--compact-mode",name:"Compact mode",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Table","withComponentDocs"]}),He=N.meta,Te=["Default","FixedHeight200pxWithStickyHeader","CompactMode"],Se=N.stories.Default,De=N.stories.FixedHeight200pxWithStickyHeader,Me=N.stories.CompactMode;export{Me as CompactMode,Se as Default,De as FixedHeight200pxWithStickyHeader,Te as __namedExportsOrder,He as default};
//# sourceMappingURL=Table.stories-7c1abe71.js.map
