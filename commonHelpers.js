import{i as f,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="45291031-b2314e04d4a4ac01a9efb8f44",p="https://pixabay.com/api/";async function y(s){const o=`${p}?key=${m}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await fetch(o);if(!r.ok)throw new Error("Failed to fetch images");return(await r.json()).hits}catch(r){return console.error(r),[]}}function g(){const s=document.querySelector(".gallery");s.innerHTML=""}function h(s){const o=document.querySelector(".gallery"),r=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:c,comments:l,downloads:u})=>`
            <a href="${e}" class="photo-card">
                <img src="${n}" alt="${t}" loading="lazy" />
                <div class="info">
                    <p class="info-item">
                        <b>Likes:</b> ${i}
                    </p>
                    <p class="info-item">
                        <b>Views:</b> ${c}
                    </p>
                    <p class="info-item">
                        <b>Comments:</b> ${l}
                    </p>
                    <p class="info-item">
                        <b>Downloads:</b> ${u}
                    </p>
                </div>
            </a>
        `).join("");o.insertAdjacentHTML("beforeend",r)}function b(){f.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}let w=new d(".gallery a",{captionsData:"alt",captionDelay:250});const L=document.querySelector(".search-form"),a=document.querySelector(".loader");L.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();if(o==="")return iziToast.error({title:"Error",message:"Please enter a search query!",position:"topRight"});g(),$();try{const r=await y(o);r.length===0?b():(h(r),w.refresh())}catch{iziToast.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});function $(){a.style.display="block"}function S(){a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
