import{a as y,S as L,i as l}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const v="https://pixabay.com/api/",b="46841046-91a9933b60f500c097f960e29";let m=1;const w=15;async function S(t){const o={key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w,page:m};try{const i=await y.get(v,{params:o});if(i.status!==200)throw new Error("Error:${response.status}");return i.data}catch(i){console.error("Помилка отримання зображень",i)}}function $(){m=1}function I(){m+=1}const P=document.querySelector(".list-img"),q=new L(".img-link",{captions:!0,captionsData:"alt",captionDelay:250});function x(t){const o=t.map(({largeImageURL:i,webformatURL:a,tags:e,likes:s,views:n,comments:g,downloads:h})=>`<li class="list-img-item">
      <a href="${i}" class="img-link">
      <img src="${a}" alt="${e}" width="100%"/>
       <div class="image-info">
        <div class="text-info-item">
          <h2 class="title">Likes</h2>
          <p class="data-title">${s}</p>
        </div>
        <div class="text-info-item"
          <h2 class="title">Views</h2>
          <p class="data-title">${n}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Comments</h2>
          <p class="data-title">${g}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Downloads</h2>
          <p class="data-title">${h}</p>
        </div>
      </div>
        </a>
    </li> `).join("");P.insertAdjacentHTML("beforeend",o),q.refresh()}const u=document.querySelector(".form-img"),E=document.querySelector(".input-img"),C=document.querySelector(".list-img"),c=document.querySelector(".loader"),r=document.querySelector(".btn-load-more");u.addEventListener("submit",O);r.addEventListener("click",p);let d="";function O(t){if(t.preventDefault(),d=E.value.trim(),c.classList.remove("hidden"),r.classList.add("hidden"),C.innerHTML="",$(),d==="")return c.classList.add("hidden"),l.warning({position:"topCenter",title:"Поле не може бути пустим!",message:"Будь ласка,введіть свій запит!",backgroundColor:"#ef3040"});f(),u.reset(),r.classList.remove("hidden")}async function f(){try{const t=await S(d);console.log(t),c.classList.add("hidden"),t.hits.length===0&&(l.warning({position:"topCenter",title:"Результатів не знайдено!",message:"На жаль,за вашим запитом не знайдено зображень.Спробуйте ще раз!",backgroundColor:"#ef3040"}),r.classList.add("hidden")),x(t.hits),t.totalHits.length>page*perPage?(r.classList.remove("hidden"),p()):(r.classList.add("hidden"),l.info({position:"topCenter",title:"УПС!",message:"Нам дуже шкода,але за вашим запитом більше зображень не знайдено!"}))}catch(t){console.error("Помилка отримання і відображення зображень",t)}}function p(){I(),c.classList.remove("hidden"),f()}
//# sourceMappingURL=index.js.map
