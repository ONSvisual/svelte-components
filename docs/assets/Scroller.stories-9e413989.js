import{S as le,i as oe,s as se,I as $e,q as Z,w as S,z,e as qe,a7 as V,E as me,a as g,B as v,H as ze,u as ee,r as te,v as ne,b as y,t as k,d as _,G as Ge,o as we,a8 as Me,x as $,f as F,j as B,m as I,n as D,D as P,A as T,C as Ae,p as Se,k as ve,l as Ce}from"./index-ec07ce5f.js";import{p as We,w as ge,M as Oe,T as Re,S as Le}from"./collect-stories-e5908286.js";import{C as He}from"./Container-084263ee.js";import{G as je}from"./Grid-cfca564f.js";import{E as ie}from"./Em-62b4830c.js";import"./Theme-d829395d.js";import"./themes-9c401ccc.js";import"./index-459f7026.js";import"./_commonjsHelpers-725317a4.js";const _e=`Components for adding scrollytelling sections to a feature article.

Note: These examples will not preview correctly in the iframes on this page. You can select the examples from the menu instead.

\`\`\`html
<script>
  import { Scroller, ScrollerSection, Grid } from "@onsvisual/svelte-components";

  function updateScroller(e) {
    // Function to update scroller background components, using the following props:
    // 1. e.detail.id - the ID of the Scroller
    // 2. e.detail.index - the index of the current ScrollerSection
    // 3. e.detail.sectionId - the (optional) ID of the current ScrollerSection
  }
<\/script>

<Scroller on:change="{updateScroller}" id="{any_unique_id}">
  <div slot="background">
    <!-- 
      The <Grid> component is optional here.
      It is a useful way to set the height and width of the background.
    -->
    <Grid width="full" height="full">
      <div>{background_components}</div>
    </Grid>
  </div>
  <div slot="foreground">
    <ScrollerSection id="{any_unique_id}">
      <p>First section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Second section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Third section caption.</p>
      </p>
    </ScrollerSection>
  </div>
</Scroller>
\`\`\`
`;const{window:Be}=Me,xe=l=>({}),he=l=>({}),Fe=l=>({}),be=l=>({});function ye(l){let e;return{c(){e=S("div"),$(e,"class","ons-spacer")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function Ne(l){let e,t,n,o,i,s,c,a,r,p,C;$e(l[21]);const f=l[20].background,w=Z(f,l,l[19],be),q=l[20].foreground,b=Z(q,l,l[19],he);let m=l[2]&&ye();return{c(){e=S("svelte-scroller-outer"),t=S("svelte-scroller-background-container"),n=S("svelte-scroller-background"),w&&w.c(),i=z(),s=S("svelte-scroller-foreground"),b&&b.c(),c=z(),m&&m.c(),a=qe(),V(n,"class","svelte-koluze"),V(t,"class","background-container svelte-koluze"),V(t,"style",o=""+(l[8]+l[7])),V(s,"class","svelte-koluze"),V(e,"id",l[0]),V(e,"class","svelte-koluze"),me(e,"splitscreen",l[1])},m(d,h){g(d,e,h),v(e,t),v(t,n),w&&w.m(n,null),l[22](n),v(e,i),v(e,s),b&&b.m(s,null),l[23](s),l[24](e),g(d,c,h),m&&m.m(d,h),g(d,a,h),r=!0,p||(C=ze(Be,"resize",l[21]),p=!0)},p(d,h){w&&w.p&&(!r||h[0]&524288)&&ee(w,f,d,d[19],r?ne(f,d[19],h,Fe):te(d[19]),be),(!r||h[0]&384&&o!==(o=""+(d[8]+d[7])))&&V(t,"style",o),b&&b.p&&(!r||h[0]&524288)&&ee(b,q,d,d[19],r?ne(q,d[19],h,xe):te(d[19]),he),(!r||h[0]&1)&&V(e,"id",d[0]),(!r||h[0]&2)&&me(e,"splitscreen",d[1]),d[2]?m||(m=ye(),m.c(),m.m(a.parentNode,a)):m&&(m.d(1),m=null)},i(d){r||(y(w,d),y(b,d),r=!0)},o(d){k(w,d),k(b,d),r=!1},d(d){d&&_(e),w&&w.d(d),l[22](null),b&&b.d(d),l[23](null),l[24](null),d&&_(c),m&&m.d(d),d&&_(a),p=!1,C()}}}const E=[];let Y;if(typeof window<"u"){const l=()=>E.forEach(e=>e());window.addEventListener("scroll",l),window.addEventListener("resize",l)}if(typeof IntersectionObserver<"u"){const l=new Map,e=new IntersectionObserver((t,n)=>{t.forEach(o=>{const i=l.get(o.target),s=E.indexOf(i);o.isIntersecting?s===-1&&E.push(i):(i(),s!==-1&&E.splice(s,1))})},{rootMargin:"400px 0px"});Y={add:({outer:t,update:n})=>{const{top:o,bottom:i}=t.getBoundingClientRect();o<window.innerHeight&&i>0&&E.push(n),l.set(t,n),e.observe(t)},remove:({outer:t,update:n})=>{const o=E.indexOf(n);o!==-1&&E.splice(o,1),l.delete(t),e.unobserve(t)}}}else Y={add:({update:l})=>{E.push(l)},remove:({update:l})=>{const e=E.indexOf(l);e!==-1&&E.splice(e,1)}};let Pe=0,Ye=1,Je="section";function Ke(l,e,t){let n,o,i,s,c,{$$slots:a={},$$scope:r}=e;const p=Ge();let{id:C=null}=e,{splitscreen:f=!1}=e,{marginBottom:w=!0}=e,{threshold:q=.7}=e,{count:b=0}=e,{index:m=0}=e,{sectionId:d=null}=e,{offset:h=0}=e,{progress:R=0}=e,{visible:K=!1}=e,L,G,x,re,H,M=0,A,j=0,Q=1;we(()=>{H=G.querySelectorAll(Je),t(9,b=H.length),U();const u={outer:L,update:U};return Y.add(u),()=>Y.remove(u)});function U(){if(!G)return;const u=L.getBoundingClientRect();re=u.left,t(18,Q=u.right-re);const W=G.getBoundingClientRect(),ce=x.getBoundingClientRect();t(14,K=W.top<M&&W.bottom>0);const ae=W.bottom-W.top;ce.bottom-ce.top;const ue=o-n;t(13,R=(n-W.top)/(ae-ue)),R<=0?(t(17,j=0),t(16,A=!1)):R>=1?(t(17,j=ae-ue),t(16,A=!1)):(t(17,j=n),t(16,A=!0));for(let O=0;O<H.length;O++){const X=H[O],{top:de}=X.getBoundingClientRect(),fe=H[O+1],pe=fe?fe.getBoundingClientRect().top:W.bottom;if(t(12,h=(i-de)/(pe-de)),pe>=i){m!==O&&(t(10,m=O),t(11,d=X.dataset.id?X.dataset.id:null),p("change",{id:C,index:m,sectionId:d}));break}}}function De(){t(3,M=Be.innerHeight)}function Ee(u){F[u?"unshift":"push"](()=>{x=u,t(6,x)})}function Te(u){F[u?"unshift":"push"](()=>{G=u,t(5,G)})}function Ve(u){F[u?"unshift":"push"](()=>{L=u,t(4,L)})}return l.$$set=u=>{"id"in u&&t(0,C=u.id),"splitscreen"in u&&t(1,f=u.splitscreen),"marginBottom"in u&&t(2,w=u.marginBottom),"threshold"in u&&t(15,q=u.threshold),"count"in u&&t(9,b=u.count),"index"in u&&t(10,m=u.index),"sectionId"in u&&t(11,d=u.sectionId),"offset"in u&&t(12,h=u.offset),"progress"in u&&t(13,R=u.progress),"visible"in u&&t(14,K=u.visible),"$$scope"in u&&t(19,r=u.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&8&&(n=Math.round(Pe*M)),l.$$.dirty[0]&8&&(o=Math.round(Ye*M)),l.$$.dirty[0]&32776&&(i=Math.round(q*M)),l.$$.dirty[0]&32768&&U(),l.$$.dirty[0]&196608&&t(8,s=`
		position: ${A?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${j}px);
		z-index: 1;
	`),l.$$.dirty[0]&327680&&t(7,c=A?`width:${Q}px;`:"")},[C,f,w,M,L,G,x,c,s,b,m,d,h,R,K,q,A,j,Q,r,a,De,Ee,Te,Ve]}class J extends le{constructor(e){super(),oe(this,e,Ke,Ne,se,{id:0,splitscreen:1,marginBottom:2,threshold:15,count:9,index:10,sectionId:11,offset:12,progress:13,visible:14},null,[-1,-1])}}J.__docgen={version:3,name:"Scroller.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the unique ID of the scroller",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Enables splitscreen view (captions appear on left on larger screens)",name:"splitscreen",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Adds a margin under the scroller section",name:"marginBottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Set the threshold for the transition between scroller sections (0-1)",name:"threshold",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:.7},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Binding: Total number of sections within scroller",name:"count",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Binding: Current section index (number)",name:"index",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Binding: Current section id, if it has one set",name:"sectionId",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Binding: The progress between the start of current scroller section and next (0-1)",name:"offset",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[{name:"type",description:"{number}"}],visibility:"public",description:"Binding: The progress through the whole scroller (0-1)",name:"progress",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:0},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Binding: Whether the scroller is visible on screen or not",name:"visible",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[{keywords:[],visibility:"public",description:"",name:"background"},{keywords:[],visibility:"public",description:"",name:"foreground"}],refs:[]};function ke(l){let e,t;return{c(){e=S("h2"),t=T(l[2]),$(e,"class","section-title")},m(n,o){g(n,e,o),v(e,t)},p(n,o){o&4&&Ae(t,n[2])},d(n){n&&_(e)}}}function Qe(l){let e,t,n,o=l[2]&&!l[3]&&ke(l);const i=l[6].default,s=Z(i,l,l[8],null);return{c(){e=S("div"),o&&o.c(),t=z(),s&&s.c(),$(e,"class","ons-scroller-section svelte-oszuw0"),P(e,"--background",l[5])},m(c,a){g(c,e,a),o&&o.m(e,null),v(e,t),s&&s.m(e,null),n=!0},p(c,a){c[2]&&!c[3]?o?o.p(c,a):(o=ke(c),o.c(),o.m(e,t)):o&&(o.d(1),o=null),s&&s.p&&(!n||a&256)&&ee(s,i,c,c[8],n?ne(i,c[8],a,null):te(c[8]),null),a&32&&P(e,"--background",c[5])},i(c){n||(y(s,c),n=!0)},o(c){k(s,c),n=!1},d(c){c&&_(e),o&&o.d(),s&&s.d(c)}}}function Ue(l){let e,t,n;return t=new He({props:{theme:l[1],width:"narrow",background:"none",$$slots:{default:[Qe]},$$scope:{ctx:l}}}),{c(){e=S("section"),B(t.$$.fragment),$(e,"data-id",l[0])},m(o,i){g(o,e,i),I(t,e,null),l[7](e),n=!0},p(o,[i]){const s={};i&2&&(s.theme=o[1]),i&300&&(s.$$scope={dirty:i,ctx:o}),t.$set(s),(!n||i&1)&&$(e,"data-id",o[0])},i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){k(t.$$.fragment,o),n=!1},d(o){o&&_(e),D(t),l[7](null)}}}function Xe(l,e,t){let{$$slots:n={},$$scope:o}=e,{id:i=null}=e,{theme:s=null}=e,{title:c=""}=e,{hideTitle:a=!1}=e,r,p;we(()=>{t(5,p=getComputedStyle(r).getPropertyValue("--background").replaceAll('"',"")),console.log(r,getComputedStyle(r),p)});function C(f){F[f?"unshift":"push"](()=>{r=f,t(4,r)})}return l.$$set=f=>{"id"in f&&t(0,i=f.id),"theme"in f&&t(1,s=f.theme),"title"in f&&t(2,c=f.title),"hideTitle"in f&&t(3,a=f.hideTitle),"$$scope"in f&&t(8,o=f.$$scope)},[i,s,c,a,r,p,n,C,o]}class N extends le{constructor(e){super(),oe(this,e,Xe,Ue,se,{id:0,theme:1,title:2,hideTitle:3})}}N.__docgen={version:3,name:"ScrollerSection.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the unique ID of the section",name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:null},{keywords:[{name:"type",description:'{"light"|"dark"|"lightblue"}'}],visibility:"public",description:"Sets a predefined theme",name:"theme",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:'"light"|"dark"|"lightblue"',type:[{kind:"type",text:'"light"',type:'"light"'},{kind:"type",text:'"dark"',type:'"dark"'},{kind:"type",text:'"lightblue"',type:'"lightblue"'}]},defaultValue:null},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Sets the title of the section",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean}"}],visibility:"public",description:"Allows the h2 title tag for the section to be visually hidden",name:"hideTitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function Ze(l){let e;return{c(){e=S("div"),$(e,"class","placeholder-block"),P(e,"background-color",l[0])},m(t,n){g(t,e,n)},p(t,n){n&1&&P(e,"background-color",t[0])},d(t){t&&_(e)}}}function et(l){let e,t,n;return t=new je({props:{width:"full",height:"full",$$slots:{default:[Ze]},$$scope:{ctx:l}}}),{c(){e=S("div"),B(t.$$.fragment),$(e,"slot","background")},m(o,i){g(o,e,i),I(t,e,null),n=!0},p(o,i){const s={};i&17&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){n||(y(t.$$.fragment,o),n=!0)},o(o){k(t.$$.fragment,o),n=!1},d(o){o&&_(e),D(t)}}}function tt(l){let e;return{c(){e=T("light grey")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function nt(l){let e,t,n,o,i;return n=new ie({props:{color:l[1][0],$$slots:{default:[tt]},$$scope:{ctx:l}}}),{c(){e=S("p"),t=T("When this first caption is visible, the background will appear "),B(n.$$.fragment),o=T(".")},m(s,c){g(s,e,c),v(e,t),I(n,e,null),v(e,o),i=!0},p(s,c){const a={};c&16&&(a.$$scope={dirty:c,ctx:s}),n.$set(a)},i(s){i||(y(n.$$.fragment,s),i=!0)},o(s){k(n.$$.fragment,s),i=!1},d(s){s&&_(e),D(n)}}}function lt(l){let e;return{c(){e=T("dark grey")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function ot(l){let e,t,n,o,i;return n=new ie({props:{color:l[1][1],$$slots:{default:[lt]},$$scope:{ctx:l}}}),{c(){e=S("p"),t=T("When this first caption is visible, the background will appear "),B(n.$$.fragment),o=T(".")},m(s,c){g(s,e,c),v(e,t),I(n,e,null),v(e,o),i=!0},p(s,c){const a={};c&16&&(a.$$scope={dirty:c,ctx:s}),n.$set(a)},i(s){i||(y(n.$$.fragment,s),i=!0)},o(s){k(n.$$.fragment,s),i=!1},d(s){s&&_(e),D(n)}}}function st(l){let e;return{c(){e=T("black")},m(t,n){g(t,e,n)},d(t){t&&_(e)}}}function it(l){let e,t,n,o,i;return n=new ie({props:{color:l[1][2],$$slots:{default:[st]},$$scope:{ctx:l}}}),{c(){e=S("p"),t=T("When this first caption is visible, the background will appear "),B(n.$$.fragment),o=T(".")},m(s,c){g(s,e,c),v(e,t),I(n,e,null),v(e,o),i=!0},p(s,c){const a={};c&16&&(a.$$scope={dirty:c,ctx:s}),n.$set(a)},i(s){i||(y(n.$$.fragment,s),i=!0)},o(s){k(n.$$.fragment,s),i=!1},d(s){s&&_(e),D(n)}}}function rt(l){let e,t,n,o,i,s,c;return t=new N({props:{$$slots:{default:[nt]},$$scope:{ctx:l}}}),o=new N({props:{$$slots:{default:[ot]},$$scope:{ctx:l}}}),s=new N({props:{$$slots:{default:[it]},$$scope:{ctx:l}}}),{c(){e=S("div"),B(t.$$.fragment),n=z(),B(o.$$.fragment),i=z(),B(s.$$.fragment),$(e,"slot","foreground")},m(a,r){g(a,e,r),I(t,e,null),v(e,n),I(o,e,null),v(e,i),I(s,e,null),c=!0},p(a,r){const p={};r&16&&(p.$$scope={dirty:r,ctx:a}),t.$set(p);const C={};r&16&&(C.$$scope={dirty:r,ctx:a}),o.$set(C);const f={};r&16&&(f.$$scope={dirty:r,ctx:a}),s.$set(f)},i(a){c||(y(t.$$.fragment,a),y(o.$$.fragment,a),y(s.$$.fragment,a),c=!0)},o(a){k(t.$$.fragment,a),k(o.$$.fragment,a),k(s.$$.fragment,a),c=!1},d(a){a&&_(e),D(t),D(o),D(s)}}}function ct(l){let e,t;const n=[l[3]];let o={$$slots:{foreground:[rt],background:[et]},$$scope:{ctx:l}};for(let i=0;i<n.length;i+=1)o=Se(o,n[i]);return e=new J({props:o}),e.$on("change",l[2]),{c(){B(e.$$.fragment)},m(i,s){I(e,i,s),t=!0},p(i,s){const c=s&8?ve(n,[Ce(i[3])]):{};s&17&&(c.$$scope={dirty:s,ctx:i}),e.$set(c)},i(i){t||(y(e.$$.fragment,i),t=!0)},o(i){k(e.$$.fragment,i),t=!1},d(i){D(e,i)}}}function at(l){let e,t,n,o,i,s;const c=[{title:"Layout/Scroller"},{component:J},{argTypes:{}},ge(_e)];let a={};for(let r=0;r<c.length;r+=1)a=Se(a,c[r]);return e=new Oe({props:a}),n=new Re({props:{$$slots:{default:[ct,({args:r})=>({3:r}),({args:r})=>r?8:0]},$$scope:{ctx:l}}}),i=new Le({props:{name:"Default",args:{}}}),{c(){B(e.$$.fragment),t=z(),B(n.$$.fragment),o=z(),B(i.$$.fragment)},m(r,p){I(e,r,p),g(r,t,p),I(n,r,p),g(r,o,p),I(i,r,p),s=!0},p(r,[p]){const C=p&0?ve(c,[c[0],p&0&&{component:J},c[2],p&0&&Ce(ge(_e))]):{};e.$set(C);const f={};p&25&&(f.$$scope={dirty:p,ctx:r}),n.$set(f)},i(r){s||(y(e.$$.fragment,r),y(n.$$.fragment,r),y(i.$$.fragment,r),s=!0)},o(r){k(e.$$.fragment,r),k(n.$$.fragment,r),k(i.$$.fragment,r),s=!1},d(r){D(e,r),r&&_(t),D(n,r),r&&_(o),D(i,r)}}}function ut(l,e,t){const n=["#ddd","#777","#222"];let o=n[0];return[o,n,s=>t(0,o=n[s.detail.index])]}class dt extends le{constructor(e){super(),oe(this,e,ut,at,se,{})}}const Ie=We(dt,{meta:{title:"Layout/Scroller"},stories:{"tpl:default":{storyId:"layout-scroller--default",name:"default",template:!0,source:`<Scroller {...args} on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}">
  <div slot="background">
    <Grid width="full" height="full">
      <div class="placeholder-block" style:background-color="{scrollerColor}"></div>
    </Grid>
  </div>
  <div slot="foreground">
    <ScrollerSection>
      <p>
        When this first caption is visible, the background will appear <Em
          color="{scrollerColors[0]}">light grey</Em
        >.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this first caption is visible, the background will appear <Em
          color="{scrollerColors[1]}">dark grey</Em
        >.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this first caption is visible, the background will appear <Em
          color="{scrollerColors[2]}">black</Em
        >.
      </p>
    </ScrollerSection>
  </div>
</Scroller>`,hasArgs:!0},Default:{storyId:"layout-scroller--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Scroller","ScrollerSection","Grid","Em","withComponentDocs"]}),wt=Ie.meta,St=["Default"],vt=Ie.stories.Default;export{vt as Default,St as __namedExportsOrder,wt as default};
//# sourceMappingURL=Scroller.stories-9e413989.js.map
