import{a as y,i as g,S as c}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="52797482-aafa905b189c4ff0c9ee358ec";function f(l){return y("https://pixabay.com/api/",{params:{key:d,q:l}}).then(({data:r})=>{if(r.hits.length>0)return r;g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(r=>{console.log(r)})}function p(l){return l.map(({webformatUR:r,largeImageURL:o,tags:a,likes:e,views:t,comments:s,downloads:u})=>`<li class="galerry-list">
    <img class=gallery-img href=${r} src=${o} alt=${a}>
    <div class="gallery-subcontainer">
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Likes</h3>
      <p class="gallery-subtext">${e}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Views</h3>
      <p class="gallery-subtext">${t}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Comments</h3>
      <p class="gallery-subtext">${s}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Download</h3>
      <p class="gallery-subtext">${u}</p>
      </div>
    </div>
    </li>`).join("")}new c(".gallery-img",{captionsData:"alt",captionDelay:250});const n=document.querySelector(".form"),i=n.elements["search-text"],m=document.querySelector(".gallery");document.querySelector(".loader ");n.addEventListener("submit",h);function h(l){if(l.preventDefault(),console.log(i.value),!i.value.trim())return i.value="";f(i.value).then(r=>{m.innerHTML=p(r.hits)})}new c(".gallery-img",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
