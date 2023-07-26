import{d as _,g as i,c as r,k as b,a1 as v,r as p,e as d,O as g,o as l,U as B,R as z,V as f,a2 as P,a3 as $,a4 as w,a5 as C,a6 as L,a7 as R,a8 as O,a9 as j,aa as k,ab as E,ac as T,u as V,j as D,A as I,ad as N,ae as F,af as M,ag as U}from"./chunks/framework.09ac0308.js";import{t as G}from"./chunks/theme.f4063671.js";const h=e=>(e.install=t=>{t.component(e.name,e)},e),c=e=>t=>e.includes(t);const H={key:0,class:"lux-button-icon"},q={key:1,class:"lux-button__spinner-icon"},J=B('<div class="dot-spinner"><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div><div class="dot-spinner__dot"></div></div>',1),K=[J],Q={key:2,class:"lux-button__inner"},W=_({name:"LuxButton",__name:"button",props:{state:{type:String,defaule:"default",validator:c(["primary","success","info","warning","error","text"])},size:{type:String,default:"medium",validator:c(["tiny","small","medium","large","huge"])},nativeType:{type:String,default:"button",validator:c(["submit","button","reset"])},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},round:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1}},setup(e){const t=e,n=i(()=>!!t.loading),a=i(()=>!!t.disabled),m=i(()=>!!t.round),S=i(()=>{const s=Object.entries({state:t.state??"default",size:t.size??"medium"}).filter(([,u])=>!!u).map(([u,x])=>`lux-button_${u}_${x}`);return s.push({"lux-button_disabled":a.value&&!n.value,"lux-button_loading":n.value,"lux-button_round":m.value}),s});return(s,u)=>(l(),r("div",null,[b("button",g({class:["lux-button",S.value]},s.$attrs),[v().icon?(l(),r("span",H,[p(s.$slots,"icon")])):d("",!0),n.value?(l(),r("span",q,K)):d("",!0),v().default?(l(),r("span",Q,[p(s.$slots,"default")])):d("",!0)],16)]))}}),X=h(W),Y=["color","size"],Z=_({name:"LuxIcon",__name:"icon",props:{color:{type:String,deault:""},size:{type:[String,Number],default:24}},setup(e){const t=e,n=i(()=>{const a=typeof t.size=="string"?t.size:t.size+"px";return{display:"inline-block",width:a,height:a,color:t.color}});return(a,m)=>(l(),r("i",g({color:e.color,size:e.size},a.$attrs),[b("span",{style:z(n.value)},[p(a.$slots,"default")],4)],16,Y))}}),ee=h(Z),y=Object.freeze(Object.defineProperty({__proto__:null,LuxButton:X,LuxIcon:ee},Symbol.toStringTag,{value:"Module"})),te={install:e=>{for(const t in y)e.use(y[t])}},ne={...G,enhanceApp:async({app:e})=>{e.use(te)}};function A(e){if(e.extends){const t=A(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const o=A(ne),ae=_({name:"VitePressApp",setup(){const{site:e}=V();return D(()=>{I(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),N(),F(),M(),o.setup&&o.setup(),()=>U(o.Layout)}});async function se(){const e=ie(),t=oe();t.provide($,e);const n=w(e.route);return t.provide(C,n),t.component("Content",L),t.component("ClientOnly",R),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:O}),{app:t,router:e,data:n}}function oe(){return j(ae)}function ie(){let e=f,t;return k(n=>{let a=E(n);return a?(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),f&&(e=!1),T(()=>import(a),[])):null},o.NotFound)}f&&se().then(({app:e,router:t,data:n})=>{t.go().then(()=>{P(t.route,n.site),e.mount("#app")})});export{se as createApp};
