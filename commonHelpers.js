import{S as c,a}from"./assets/vendor-20d3e12a.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();new c(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next-skills"},mousewheel:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slideActiveClass:"current-skill",breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});const l=document.querySelectorAll(".ac-item-information");l.forEach(r=>{r.addEventListener("click",()=>{r.classList.toggle("active")})});const d={reviewsList:document.querySelector(".reviews-list"),previousBtn:document.querySelector(".previous-btn"),nextBtn:document.querySelector(".next-btn")};document.querySelector(".reviews-list");window.addEventListener("DOMContentLoaded",async()=>{try{(await a.get("https://portfolio-js.b.goit.study/api/reviews")).data.forEach(o=>{const s=document.createElement("div");s.classList.add("review-item"),s.innerHTML=`<li class="reviews-item">
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
       </li>`,d.reviewsList.appendChild(s)})}catch(r){console.error("Error fetching reviews:",r)}});
//# sourceMappingURL=commonHelpers.js.map
