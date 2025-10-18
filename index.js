import{a as d,i as y,S as f}from"./assets/vendor-xwsNXkQR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="52797482-aafa905b189c4ff0c9ee358ec";function h(s){return d("https://pixabay.com/api/",{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>{if(t.hits.length>0)return t;y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>{console.log(t)})}const p=document.querySelector(".gallery"),c=document.querySelector("span"),m=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function v(s){p.innerHTML=s.map(({webformatURL:t,largeImageURL:i,tags:a,likes:e,views:r,comments:l,downloads:u})=>`<li class="galerry-list">
        
    <a class="gallery-link" href=${i}><img class="gallery-img" src=${t} alt=${a}></a>
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
      <p class="gallery-subtext">${u}</p>
      </div>
    </div>
    </li>`).join(""),m.refresh()}function b(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const n=document.querySelector(".form"),o=n.elements["search-text"];n.addEventListener("submit",x);function x(s){if(s.preventDefault(),b(),!o.value.trim())return o.value="";h(o.value).then(t=>v(t.hits)).catch(t=>console.log(t.message)).finally(()=>L(),s.target.reset())}
//# sourceMappingURL=index.js.map
