import{a as g,S as h,i as l}from"./assets/vendor-D73Uttp0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",L="46841046-91a9933b60f500c097f960e29";let d=1;const v=15;async function b(s){const i={key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:v,page:d};try{const o=await g.get(y,{params:i});if(o.status!==200)throw new Error("Error:${response.status}");return o.data}catch(o){console.error("Помилка отримання зображень",o)}}function w(){d=1}function S(){d+=1}const $=document.querySelector(".list-img"),I=new h(".img-link",{captions:!0,captionsData:"alt",captionDelay:250});function P(s){const i=s.map(({largeImageURL:o,webformatURL:n,tags:e,likes:t,views:r,comments:f,downloads:p})=>`<li class="list-img-item">
      <a href="${o}" class="img-link">
      <img src="${n}" alt="${e}" width="100%"/>
       <div class="image-info">
        <div class="text-info-item">
          <h2 class="title">Likes</h2>
          <p class="data-title">${t}</p>
        </div>
        <div class="text-info-item"
          <h2 class="title">Views</h2>
          <p class="data-title">${r}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Comments</h2>
          <p class="data-title">${f}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Downloads</h2>
          <p class="data-title">${p}</p>
        </div>
      </div>
        </a>
    </li> `).join("");$.insertAdjacentHTML("beforeend",i),I.refresh()}const u=document.querySelector(".form-img"),q=document.querySelector(".input-img"),x=document.querySelector(".list-img"),a=document.querySelector(".loader"),c=document.querySelector(".btn-load-more");c.classList.add("hidden");u.addEventListener("submit",E);c.addEventListener("click",C);function E(s){s.preventDefault(),u.reset();const i=q.value.trim();if(a.classList.remove("hidden"),c.classList.add("hidden"),x.innerHTML="",w(),i==="")return a.classList.add("hidden"),l.warning({position:"topCenter",title:"Поле не може бути пустим!",message:"Будь ласка,введіть свій запит!",backgroundColor:"#ef3040"});m()}async function m(){try{const s=await b(inputValue);a.classList.add("hidden"),s.hits.length===0&&l.warning({position:"topCenter",title:"Результатів не знайдено!",message:"На жаль,за вашим запитом не знайдено зображень.Спробуйте ще раз!",backgroundColor:"#ef3040"}),P(s.hits),s.totalHits>page*perPage?c.classList.remove("hidden"):l.info({position:"topCenter",title:"УПС!",message:"Нам дуже шкода,але за вашим запитом більше зображень не знайдено!"})}catch(s){console.error("Помилка отримання і відображення зображень",s)}}function C(){S(),a.classList.remove("hidden"),m()}
//# sourceMappingURL=index.js.map
