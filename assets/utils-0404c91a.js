const n=()=>Math.random().toString(16).slice(2,8),s=(e,t=!1)=>typeof e=="string"?e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").concat(t?`-${n()}`:""):n(),o=e=>isFinite(e)&&e!==null,r=e=>{if(!e)return!1;const t=new Date(e);return!isNaN(t)},c=(e,t="en-GB",a={year:"numeric",month:"long",day:"2-digit"})=>new Date(e).toLocaleDateString(t,a),l=(e,t=null)=>Number.isInteger(t)?e.toLocaleString("en-GB",{minimumFractionDigits:t,maximumFractionDigits:t}):e.toLocaleString("en-GB"),u=(e,t)=>e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN,g=(e,t)=>e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN,m=(e=1e3)=>new Promise(t=>setTimeout(t,e));export{u as a,s as b,c,g as d,l as f,o as i,m as s,r as v};
//# sourceMappingURL=utils-0404c91a.js.map
