import{a as g,S as h,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="52797482-aafa905b189c4ff0c9ee358ec";function m(s){return g("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>{if(t.hits.length>0)return t}).catch(t=>{})}const u=document.querySelector(".gallery"),d=document.querySelector("span"),b=new h(".gallery-link",{captionsData:"alt",captionDelay:250});function v(s){u.insertAdjacentHTML("beforeEnd",s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:l,downloads:f})=>`<li class="galerry-list">
        
    <a class="gallery-link" href=${o}><img class="gallery-img" src=${t} alt=${a}></a>
    <div class="gallery-subcontainer">
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Likes</h3>
      <p class="gallery-subtext">${e}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Views</h3>
      <p class="gallery-subtext">${r}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Comments</h3>
      <p class="gallery-subtext">${l}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Download</h3>
      <p class="gallery-subtext">${f}</p>
      </div>
    </div>
    </li>`).join("")),b.refresh()}function x(){u.textContent=""}function L(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const y=document.querySelector(".form"),i=y.elements["search-text"];y.addEventListener("submit",S);function S(s){if(s.preventDefault(),x(),L(),!i.value.trim())return c(),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),i.value="";m(i.value).then(t=>{if(t&&t.hits)v(t.hits);else throw new Error(response.status)}).catch(t=>n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})).finally(()=>c()),s.target.reset()}
//# sourceMappingURL=index.js.map
