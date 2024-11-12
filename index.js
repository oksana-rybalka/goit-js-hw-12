import{i as c}from"./assets/vendor-17o45ynk.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",f="46841046-91a9933b60f500c097f960e29";function p(r){const i=new URLSearchParams({key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${m}?${i}`;return fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>console.log(s))}function h(r){const i=r.map(({largeImageURL:o,webformatURL:s,tags:e,likes:t,views:n,comments:d,downloads:u})=>`<li class="list-img-item">
      <a href="${o}" class="img-link">
      <img src="${s}" alt="${e}" width="100%"/>
       <div class="image-info">
        <div class="text-info-item">
          <h2 class="title">Likes</h2>
          <p class="data-title">${t}</p>
        </div>
        <div class="text-info-item"
          <h2 class="title">Views</h2>
          <p class="data-title">${n}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Comments</h2>
          <p class="data-title">${d}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Downloads</h2>
          <p class="data-title">${u}</p>
        </div>
      </div>
        </a>
    </li> `).join("");listImages.insertAdjacentHTML("beforeend",i),lightbox.refresh()}const l=document.querySelector(".form-img"),g=document.querySelector(".input-img"),y=document.querySelector(".list-img"),a=document.querySelector(".loader"),v=document.querySelector(".btn-load-more");v.classList.add("hidden");l.addEventListener("submit",L);function L(r){r.preventDefault();const i=g.value.trim();if(a.classList.remove("hidden"),l.reset(),y.innerHTML="",i==="")return a.classList.add("hidden"),c.warning({position:"topCenter",title:"Увага!",message:"Будь ласка,введіть свій запит!",backgroundColor:"#ef3040"});p(i).then(({hits:o})=>{a.classList.add("hidden"),o.length===0?c.warning({position:"topCenter",title:"Результатів не знайдено!",message:"На жаль,за вашим запитом не знайдено зображень.Спробуйте ще раз!",backgroundColor:"#ef3040"}):h(o)})}
//# sourceMappingURL=index.js.map
