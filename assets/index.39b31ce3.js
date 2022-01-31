import{o as c,c as l,F as p,r as h,t as d,a as e,u as f,b as _,w as $,n as b,d as m,e as y,f as g,g as x,h as k,i as L}from"./vendor.1c4220aa.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}};S();var j=[{icon:"github",url:"https://github.com/webceyhan"},{icon:"reddit",url:"https://www.reddit.com/user/webceyhan"},{icon:"linkedin",url:"https://www.linkedin.com/in/webceyhan"},{icon:"twitter",url:"https://twitter.com/webceyhan"},{icon:"instagram",url:"https://www.instagram.com/webceyhan"}];const V="https://api.github.com",v=`${V}/users/webceyhan`,w=async t=>(await fetch(t)).json(),A=()=>({getProfile(){return w(v)},getRepositories(t={}){const o=new URL(`${v}/repos`);return o.search=new URLSearchParams(t),w(o)},getSocialLinks(){return j}}),I=t=>new Date(t).toLocaleDateString(),O={props:{topics:Array},setup(t){return(o,r)=>(c(),l("div",null,[(c(!0),l(p,null,h(t.topics,(a,s)=>(c(),l("small",{class:"badge rounded-pill bg-dark text-muted me-2",key:s},d(a),1))),128))]))}},P={class:"list-group-item bg-dark bg-opacity-10 border-dark py-4"},R={class:"d-flex w-100 justify-content-between align-items-center"},N=e("i",{class:"d-none d-md-block bi bi-git display-1 me-5 text-white text-opacity-50"},null,-1),F={class:"flex-fill"},B={class:"d-flex w-100 justify-content-between"},U={class:"mb-1"},C=["href"],D={class:"d-none d-md-block"},E={class:"text-light mb-1"},M={props:{repo:Object},setup(t){return(o,r)=>(c(),l("li",P,[e("div",R,[N,e("div",F,[e("div",B,[e("h5",U,[e("a",{class:"text-decoration-none",href:t.repo.homepage,target:"__blank"},d(t.repo.name),9,C)]),e("small",D,d(f(I)(t.repo.created_at)),1)]),e("p",E,d(t.repo.description),1),_(O,{topics:t.repo.topics},null,8,["topics"])])])]))}},K={class:"nav"},T=["onClick"],q={props:{modelValue:String,topics:Array},emits:["update:modelValue"],setup(t,{emit:o}){const r=t,a=s=>{const n=r.modelValue===s;o("update:modelValue",n?null:s)};return(s,n)=>(c(),l("nav",K,[(c(!0),l(p,null,h(t.topics,(i,u)=>(c(),l("a",{key:u,href:"#",onClick:$($e=>a(i),["prevent"]),class:b(["nav-link link-primary badge rounded-pill bg-dark me-1 mb-1",{"text-light":i===t.modelValue}])},d(i),11,T))),128))]))}},z=e("h1",{class:"display-4 text-center text-md-start"},[e("i",{class:"bi bi-github"}),g(" Projects ")],-1),G=e("hr",{class:"bg-secondary mb-3"},null,-1),H={class:"row"},J={class:"col-12 col-lg-3 mb-3"},W={class:"col-12 col-lg-8 offset-lg-1"},Q={class:"list-group list-group-flush"},X={props:{repos:Array},setup(t){const o=t,r=m(null),a=y(()=>Array.from(o.repos.reduce((n,{topics:i})=>new Set([...n,...i]),[]))),s=y(()=>r.value?o.repos.filter(({topics:n})=>n.some(i=>i===r.value)):o.repos);return(n,i)=>(c(),l(p,null,[z,G,e("div",H,[e("div",J,[_(q,{class:"justify-content-center justify-content-md-start",topics:f(a),modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=u=>r.value=u)},null,8,["topics","modelValue"])]),e("div",W,[e("ul",Q,[(c(!0),l(p,null,h(f(s),u=>(c(),x(M,{key:u.id,repo:u},null,8,["repo"]))),128))])])])],64))}},Y={class:"nav justify-content-center h1"},Z=["href"],ee={props:{links:Array},setup(t){return(o,r)=>(c(),l("div",Y,[(c(!0),l(p,null,h(t.links,(a,s)=>(c(),l("a",{key:s,href:a.url,class:"nav-link",target:"__blank"},[e("i",{class:b(`bi bi-${a.icon}`)},null,2)],8,Z))),128))]))}};var te="/assets/logo.1dd69089.png";const se={class:"bg-light bg-opacity-25 rounded-circle p-2 mb-3 w-75"},oe=["src"],ne={props:{url:String},setup(t){return(o,r)=>(c(),l("div",se,[e("img",{class:"img-fluid rounded-circle",src:t.url,alt:"avatar"},null,8,oe)]))}},re={class:"row align-items-center"},ce={class:"col-md-4 d-flex justify-content-center"},ie={class:"col-md-8"},le=e("h1",{class:"display-5 text-light text-opacity-50"},"Hi, I am",-1),ae={class:"display-1 mb-3"},de={class:"text-light text-opacity-50"},ue=e("span",{class:"text-nowrap text-warning"},"Full Stack Web Developer",-1),pe=g(" at "),_e=e("img",{src:te,class:"img-fluid w-25"},null,-1),he={props:{profile:Object},setup(t){return(o,r)=>(c(),l("div",re,[e("div",ce,[_(ne,{url:t.profile.avatar_url},null,8,["url"])]),e("div",ie,[le,e("h1",ae,d(t.profile.name),1),e("h4",de,[g(" I'm a "+d(t.profile.location)+" based ",1),ue,pe,_e])])]))}},me={class:"py-5 px-md-5"},fe={class:"container text-center text-sm-start text-light p-md-5"},ge={class:"py-3 px-md-5"},be={class:"container text-muted px-md-5"},ye={class:"py-5 px-md-5"},ve={class:"container"},we={setup(t){const o=A(),r=m({}),a=m([]),s=m([]);return k(async()=>{r.value=await o.getProfile(),a.value=await o.getRepositories({sort:"updated"}),s.value=await o.getSocialLinks()}),(n,i)=>(c(),l(p,null,[e("header",me,[e("div",fe,[_(he,{profile:r.value},null,8,["profile"])])]),e("main",ge,[e("div",be,[_(X,{repos:a.value},null,8,["repos"])])]),e("footer",ye,[e("div",ve,[_(ee,{links:s.value},null,8,["links"])])])],64))}};L(we).mount("#app");
