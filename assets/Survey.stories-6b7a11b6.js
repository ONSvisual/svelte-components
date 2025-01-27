import{S as C,i as I,s as N,x as J,L as W,a as A,z as D,d as x,o as X,p as O,j as k,w as E,m as S,k as P,l as R,b as w,t as q,n as $}from"./index-98bb0bde.js";import{p as G,w as M,M as K,T as Q,S as V}from"./collect-stories-cbdfda5c.js";const H=`Add a survey to the bottom of a page (experimental).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Survey } from "@onsvisual/svelte-components";
<\/script>

<!-- page contents -->
<Survey />
<!-- page footer -->
\`\`\`
`;function ee(){(function(){var f=document.querySelector("#feedback-form-page-container");if(f){var r=document.referrer,s="/feedback/thanks",n=document.querySelector("#feedback-form-url");n&&(n.value=r),f.addEventListener("submit",function(c){c.preventDefault(),document.querySelectorAll("#feedback-form-page-container .feedback-form-control__error").forEach(i=>{i.classList.remove("feedback-form-control__error")}),document.querySelectorAll("#feedback-form-page-container .feedback-form-error").forEach(i=>{i.remove()});var t=document.querySelector("#email-field"),o=document.querySelector("#description-field"),l=!1;if(o&&o.value===""){var d=document.createElement("span");d.className="feedback-form-error",d.textContent="Write some feedback",d.setAttribute("role","alert"),!document.querySelector("#description-field-label .feedback-form-error")&&document.querySelector("#feedback-description-field").insertBefore(d,o),o.classList.add("feedback-form-control__error"),o.focus(),l=!0}if(t&&t.value!==""){var e=document.createElement("span");e.className="feedback-form-error",e.setAttribute("role","alert"),e.textContent="This is not a valid email address, correct it or delete it.",/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/g.test(t.value)||(document.querySelector("#email-field-label .feedback-form-error")||document.querySelector("#reply-request").insertBefore(e,t),t.classList.add("feedback-form-control__error"),l=!0)}if(!l){var a,u,m,g=document.querySelector("#page-url-field").value,b=g?s+"?returnTo="+g:s,p={method:"POST",body:(a=f,u=new FormData(a),m=new URLSearchParams(u).toString(),m),headers:new Headers({"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"})};return fetch(b,p).then(i=>{if(!i.ok)throw i;return window.location.href=b,i.text()}).then(i=>i).catch(i=>Promise.reject(i))}document.querySelector(".feedback-btn").blur()})}})()}function te(){function f(s,n,c,t,o,l){var d=function(a){var u=new FormData(a);return new URLSearchParams(u).toString()}(s),e=new XMLHttpRequest;return e.open("POST",n,!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),e.onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE){var a=e.status;if(l)return;c.innerHTML=a===0||a>=200&&a<400?t:o}},{request:e,serializedData:d}}function r(s,n,c,t,o,l){var d={method:"POST",body:t,headers:new Headers({"Content-Type":"application/json; charset=UTF-8"})};fetch(n,d).then(e=>{if(!e.ok)throw e}).then(e=>{c.innerHTML=l}).catch(e=>{c.innerHTML=o})}(function(){var s=window.location.href,n="/feedback",c="".concat(n,"/thanks"),t=document.querySelector("#feedback-form-header"),o='<span id="feedback-form-confirmation">Thank you. Your feedback will help us as we continue to improve the service.</span>',l='<span id="feedback-form-error role="alert"">Something went wrong, try using our <a href="/feedback">feedback form</a>.</span>',d=!1,e=document.querySelector("#feedback-api-enabled"),a=document.querySelector("#feedback-api-url"),u=document.querySelector("#feedback-form-url");u&&(u.value=s);var m=document.querySelectorAll("a.js-toggle");m&&m.forEach(p=>{p.addEventListener("click",function(i){i.preventDefault();var v=document.querySelector("#feedback-form");if(v&&v.classList.toggle("js-hidden"),t&&t.classList.toggle("js-hidden"),p.id!=="feedback-form-close"){var y=document.querySelector("#description-field");y&&y.focus()}})});var g=document.querySelector("#feedback-form-yes");g&&t&&g.addEventListener("click",function(p){d=!0,p.preventDefault();var i=document.querySelector("#feedback-form-container");if(e&&e.value==="true"&&a){var v={is_page_useful:!0,is_general_feedback:!1,ons_url:s},y=JSON.stringify(v);r(i,a.value,t,y,l,o)}else{var{request:h,serializedData:_}=f(i,c,t,o,l,d);t.innerHTML=o,h.send(_)}});var b=document.querySelector("#feedback-form-container");b&&b.addEventListener("submit",function(p){p.preventDefault(),document.querySelectorAll("#feedback-form-container .form-control__error").forEach(T=>{T.classList.remove("form-control__error")}),document.querySelectorAll("#feedback-form-container .form-error").forEach(T=>{T.remove()});var i=document.querySelector("#email-field"),v=document.querySelector("#description-field"),y=document.querySelector("#name-field"),h=!1;if(v&&v.value===""&&(document.querySelector("#description-field-label .form-error")||document.querySelector("#description-field-label").insertAdjacentHTML("beforeend",'<span class="form-error" role="alert">Write some feedback</span>'),v.classList.add("form-control__error"),h=!0),i&&i.value!==""){var _="";_=h?'<span class="form-error" role="alert" aria-live="polite">This is not a valid email address, correct it or delete it</span>':'<span class="form-error" role="alert">This is not a valid email address, correct it or delete it</span>',/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/g.test(i.value)||(document.querySelector("#email-field-label .form-error")||document.querySelector("#email-field-label").insertAdjacentHTML("beforeend",_),h=!0)}if(!h)if(e&&e.value==="true"&&a){var F={is_page_useful:!1,is_general_feedback:!1,ons_url:s,name:y.value,email_address:i.value},U=JSON.stringify(F);r(b,a.value,t,U,l,o)}else{var{request:B,serializedData:Y}=f(b,n,t,o,l,d),j=document.querySelector("#feedback-form");j&&j.classList.add("js-hidden"),B.send(Y);var z=document.getElementById("feedback-form-header");z&&z.classList.remove("js-hidden")}})})()}function re(){ee(),te()}function ae(f){let r;return{c(){r=J("div"),r.innerHTML=`<div class="improve-this-page" data-module="improve-this-page"><div class="improve-this-page__prompt clearfix" id="feedback-form-header" role="status" aria-live="assertive" tabindex="-1"><div class="improve-this-page__prompt_left"><h3 class="improve-this-page__is-useful-question margin-right--1">Is this page useful?</h3> 
        <a id="feedback-form-yes" class="improve-this-page__page-is-useful-button" href="/feedback/thanks" aria-label="Yes I found this page useful">Yes</a> 
        <span>|</span> 
        <a id="feedback-form-no" class="js-toggle" href="/feedback" aria-label="No I didn&#39;t find this page useful">No</a></div> 
      <div class="improve-this-page__prompt_right"><a id="feedback-form-anything-wrong" class="js-toggle improve-this-page__anything-wrong" href="/feedback">Can&#39;t find what you&#39;re looking for?</a></div></div> 
    <div id="feedback-form" class="improve-this-page__form js-hidden font-size--18"><form id="feedback-form-container"><input type="hidden" name="url" id="feedback-api-enabled" value="false"/> 
        <input type="hidden" name="url" id="feedback-api-url" value=""/> 
        <input type="hidden" name="feedback-form-type" value="footer"/> 
        <input type="hidden" name="url" id="feedback-form-url" value="https://www.ons.gov.uk/datasets/RM169/editions/2021/versions/4"/> 
        <div class="form-group"><label class="form-label-bold" id="description-field-label" for="description-field">How should we improve this page?</label> 
          <textarea id="description-field" class="form-control" name="description" rows="5" style="overflow: hidden; overflow-wrap: break-word; resize: horizontal;"></textarea></div> 
        <div class="form-group"><p class="font-size--24 font-weight-700 margin-bottom--0">Do you want a reply?</p> 
          <p class="font-size--18 margin-top--0">If you&#39;d like us to get back to you, please add your name and email address below.</p> 
          <label class="form-label-bold" for="name-field">Name (optional)</label> 
          <input id="name-field" class="form-control" type="text" name="name"/></div> 
        <div class="form-group"><label class="form-label-bold" id="email-field-label" for="email-field">Email (optional)</label> 
          <input id="email-field" class="form-control" type="text" name="email"/></div> 
        <div><input id="feedback-form-submit" class="btn btn--primary font-weight-700 margin-bottom--2" type="submit" value="Send feedback"/></div> 
        <div><a href="javascript:void(0)" id="feedback-form-close" class="improve-this-page__close js-toggle btn btn--secondary font-weight-700">I don&#39;t want to provide feedback</a></div></form></div></div>`,W(r,"class","wrapper link-adjust")},m(s,n){A(s,r,n)},p:D,i:D,o:D,d(s){s&&x(r)}}}function oe(f){return X(re),[]}class L extends C{constructor(r){super(),I(this,r,oe,ae,N,{})}}L.__docgen={version:3,name:"Survey.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function ne(f){let r,s;const n=[f[0]];let c={};for(let t=0;t<n.length;t+=1)c=O(c,n[t]);return r=new L({props:c}),{c(){k(r.$$.fragment)},m(t,o){S(r,t,o),s=!0},p(t,o){const l=o&1?P(n,[R(t[0])]):{};r.$set(l)},i(t){s||(w(r.$$.fragment,t),s=!0)},o(t){q(r.$$.fragment,t),s=!1},d(t){$(r,t)}}}function se(f){let r,s,n,c,t,o;const l=[{title:"Layout/Survey"},{component:L},{argTypes:{}},M(H)];let d={};for(let e=0;e<l.length;e+=1)d=O(d,l[e]);return r=new K({props:d}),n=new Q({props:{$$slots:{default:[ne,({args:e})=>({0:e}),({args:e})=>e?1:0]},$$scope:{ctx:f}}}),t=new V({props:{name:"Default",args:{}}}),{c(){k(r.$$.fragment),s=E(),k(n.$$.fragment),c=E(),k(t.$$.fragment)},m(e,a){S(r,e,a),A(e,s,a),S(n,e,a),A(e,c,a),S(t,e,a),o=!0},p(e,[a]){const u=a&0?P(l,[l[0],a&0&&{component:L},l[2],a&0&&R(M(H))]):{};r.$set(u);const m={};a&3&&(m.$$scope={dirty:a,ctx:e}),n.$set(m)},i(e){o||(w(r.$$.fragment,e),w(n.$$.fragment,e),w(t.$$.fragment,e),o=!0)},o(e){q(r.$$.fragment,e),q(n.$$.fragment,e),q(t.$$.fragment,e),o=!1},d(e){$(r,e),e&&x(s),$(n,e),e&&x(c),$(t,e)}}}class ie extends C{constructor(r){super(),I(this,r,null,se,N,{})}}const Z=G(ie,{meta:{title:"Layout/Survey"},stories:{"tpl:default":{storyId:"layout-survey--default",name:"default",template:!0,source:"<Survey {...args} />",hasArgs:!0},Default:{storyId:"layout-survey--default",name:"Default",template:!1,hasArgs:!1}},allocatedIds:["default","Meta","Template","Story","componentDocs","Survey","withComponentDocs"]}),de=Z.meta,fe=["Default"],ue=Z.stories.Default;export{ue as Default,fe as __namedExportsOrder,de as default};
//# sourceMappingURL=Survey.stories-6b7a11b6.js.map
