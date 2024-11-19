import{a as y,S as v,i as d}from"./assets/vendor-D73Uttp0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const L="https://pixabay.com/api/",b="46841046-91a9933b60f500c097f960e29";let l=1;const u=15;async function w(e){const i={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:l};try{const s=await y.get(L,{params:i});if(s.status!==200)throw new Error("Error:${response.status}");return s.data}catch(s){console.error("Помилка отримання зображень",s)}}function S(){l=1}function I(){l+=1}const q=document.querySelector(".list-img"),C=new v(".img-link",{captions:!0,captionsData:"alt",captionDelay:250});function P(e){const i=e.map(({largeImageURL:s,webformatURL:r,tags:t,likes:o,views:n,comments:p,downloads:h})=>`<li class="list-img-item">
      <a class="img-link" href="${s}" >
      <img class="image" src="${r}" alt="${t}" width="360"/>
       </a>
       <div class="image-info">
        <div class="text-info-item">
          <h2 class="title">Likes</h2>
          <p class="data-title">${o}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Views</h2>
          <p class="data-title">${n}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Comments</h2>
          <p class="data-title">${p}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Downloads</h2>
          <p class="data-title">${h}</p>
        </div>
      </div>
    </li> `).join("");q.insertAdjacentHTML("beforeend",i),C.refresh()}const f=document.querySelector(".form-img"),$=document.querySelector(".input-img"),x=document.querySelector(".list-img"),c=document.querySelector(".loader"),a=document.querySelector(".btn-load-more");f.addEventListener("submit",E);a.addEventListener("click",O);let m="";function E(e){if(e.preventDefault(),m=$.value.trim(),c.classList.remove("hidden"),x.innerHTML="",S(),m==="")return c.classList.add("hidden"),d.warning({position:"topCenter",title:"Поле не може бути пустим!",message:"Будь ласка,введіть свій запит!",backgroundColor:"#ef3040"});g(),f.reset()}function O(){I(),c.classList.remove("hidden"),g()}async function g(){try{const e=await w(m);if(console.log(e),c.classList.add("hidden"),e.hits.length===0){a.classList.add("hidden"),d.warning({position:"topCenter",title:"Результатів не знайдено!",message:"Спробуйте інший запит!",backgroundColor:"#ef3040"});return}e.totalHits>l*u?a.classList.remove("hidden"):(a.classList.add("hidden"),d.info({position:"bottomCenter",title:"УПС!",message:"Це всі зображення за вашим запитом!",backgroundColor:"#ff3d00",color:"#fff"})),P(e.hits),A()}catch(e){console.log("Помилка отримання і відображення зображень",e)}}function A(){const e=document.querySelector(".list-img-item");if(console.log(e.getBoundingClientRect()),e){const{height:i}=e.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
