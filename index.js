import{a as v,S as L,i as d}from"./assets/vendor-D73Uttp0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const b="https://pixabay.com/api/",w="46841046-91a9933b60f500c097f960e29";let l=1;const u=15;async function S(e){const s={key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:l};try{const i=await v.get(b,{params:s});if(i.status!==200)throw new Error("Error:${response.status}");return i.data}catch(i){console.error("Помилка отримання зображень",i)}}function I(){l=1}function q(){l+=1}const P=document.querySelector(".list-img"),$=new L(".img-link",{captions:!0,captionsData:"alt",captionDelay:250});function x(e){const s=e.map(({largeImageURL:i,webformatURL:n,tags:t,likes:o,views:r,comments:h,downloads:y})=>`<li class="list-img-item">
      <a class="img-link" href="${i}" >
      <img class="image" src="${n}" alt="${t}" width="100%"/>
       <div class="image-info">
        <div class="text-info-item">
          <h2 class="title">Likes</h2>
          <p class="data-title">${o}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Views</h2>
          <p class="data-title">${r}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Comments</h2>
          <p class="data-title">${h}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Downloads</h2>
          <p class="data-title">${y}</p>
        </div>
      </div>
        </a>
    </li> `).join("");P.insertAdjacentHTML("beforeend",s),$.refresh()}const f=document.querySelector(".form-img"),C=document.querySelector(".input-img"),E=document.querySelector(".list-img"),c=document.querySelector(".loader"),a=document.querySelector(".btn-load-more");f.addEventListener("submit",O);a.addEventListener("click",A);let m="";function O(e){if(e.preventDefault(),m=C.value.trim(),c.classList.remove("hidden"),E.innerHTML="",I(),m==="")return c.classList.add("hidden"),d.warning({position:"topCenter",title:"Поле не може бути пустим!",message:"Будь ласка,введіть свій запит!",backgroundColor:"#ef3040"});g(),p(),f.reset()}function A(){q(),c.classList.remove("hidden"),g(),p()}async function g(){try{const e=await S(m);if(console.log(e),c.classList.add("hidden"),e.hits.length===0){a.classList.add("hidden"),d.warning({position:"topCenter",title:"Результатів не знайдено!",message:"Спробуйте інший запит!",backgroundColor:"#ef3040"});return}e.totalHits>l*u?a.classList.remove("hidden"):(a.classList.add("hidden"),d.info({position:"bottomCenter",title:"УПС!",message:"Це всі зображення за вашим запитом!",backgroundColor:"#ff3d00",color:"#fff"})),x(e.hits)}catch(e){console.log("Помилка отримання і відображення зображень",e)}}function p(){const e=document.querySelector(".list-image-item");if(console.log(e),e){const{height:s}=e.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
