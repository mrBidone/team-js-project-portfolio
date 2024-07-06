import{a as c}from"./assets/vendor-8635c165.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a={reviewsList:document.querySelector(".reviews-list"),previousBtn:document.querySelector(".previous-btn"),nextBtn:document.querySelector(".next-btn")};document.querySelector(".reviews-list");window.addEventListener("DOMContentLoaded",async()=>{try{(await c.get("https://portfolio-js.b.goit.study/api/reviews")).data.forEach(o=>{const r=document.createElement("div");r.classList.add("review-item"),r.innerHTML=`<li class="reviews-item">
         <img
           src="${o.avatar_url}"
           alt="author's photo"
           class="review-photo"
           width="48px"
           height="48px"
         />
         <p class="review-author">${o.author}</p>
         <p class="review-text">
           ${o.review}
         </p>
       </li>`,a.reviewsList.appendChild(r)})}catch(i){console.error("Error fetching reviews:",i)}});
//# sourceMappingURL=commonHelpers.js.map
