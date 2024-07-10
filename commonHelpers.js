import{S as m,N as h,K as p,M as w,A as v,a as b,i as d}from"./assets/vendor-7ab59554.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i={openMenuBtn:document.querySelector("[data-menu-open]"),mobMenu:document.querySelector("[data-menu]"),dropdownMenuBtn:document.querySelector("button.dropbtn"),menu:document.getElementById("dropdown"),mobMenuLinks:document.querySelector(".mobile-menu-nav-links-container")};i.openMenuBtn.addEventListener("click",y);i.mobMenu.addEventListener("click",E);i.dropdownMenuBtn.addEventListener("click",L);function y(){i.mobMenu.classList.remove("is-hidden")}function E(s){s.target.hasAttribute("data-menu-close")&&i.mobMenu.classList.add("is-hidden")}function L(){i.menu.classList.toggle("show")}window.onclick=function(s){!s.target.matches(".dropbtn")&&i.menu.classList.contains("show")&&i.menu.classList.remove("show")};new m("#swiperAbout",{modules:[h,p,w],navigation:{nextEl:".about-me-btn-swipe"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touch:!0,centeredSlides:!1,loop:!0,speed:500,spaceBetween:0,slideToClickedSlide:!0,allowTouchMove:!0,slideActiveClass:"current-skill",slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});new v(".accordion-container",{elementClass:"ac-item-information",triggerClass:"show-btn-icon",panelClass:"ac-panel",showMultiple:!0,duration:800});new v(".faq-list",{elementClass:"faq-item",triggerClass:"circle",panelClass:"faq-answer",showMultiple:!0,duration:800});new m("#swiperProject",{modules:[h,p,w],navigation:{nextEl:".swiper-proj-next",prevEl:".swiper-proj-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touch:!0,centeredSlides:!1,loop:!1,speed:500,spaceBetween:5,slideToClickedSlide:!1,allowTouchMove:!0,width:343,autoplay:!1,slidesPerView:1,slidesPerGroup:1,breakpoints:{768:{slidesPerView:1,spaceBetween:10,width:704},1440:{slidesPerView:1,spaceBetween:10,width:1376}},on:{slideChange:function(){const s=document.querySelector(".swiper-proj-next"),o=document.querySelector(".swiper-proj-prev");this.isEnd?(s.disabled=!0,s.classList.add("disabled")):(s.disabled=!1,s.classList.remove("disabled")),this.isBeginning?(o.disabled=!0,o.classList.add("disabled")):(o.disabled=!1,o.classList.remove("disabled"))}}});const a={reviewsList:document.querySelector(".reviews-list"),previousBtn:document.querySelector(".custom-prev"),nextBtn:document.querySelector(".custom-next")};window.addEventListener("DOMContentLoaded",async()=>{try{const o=(await b.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(o.length===0){alert("No reviews found!");const e=document.createElement("p");e.innerText="Not found",a.reviewsList.appendChild(e)}else o.forEach(e=>{const t=document.createElement("li");t.classList.add("swiper-slide"),t.classList.add("reviews-item"),t.innerHTML=` 
            <img 
              src="${e.avatar_url}" 
              alt="author's photo" 
              class="review-photo" 
              width="48px" 
              height="48px" 
            /> 
            <p class="review-author">${e.author}</p> 
            <p class="review-text">${e.review}</p>`,a.reviewsList.appendChild(t)});const r=new m(".mySwiper",{modules:[p,w],direction:"horizontal",slidesPerView:1,width:292,spaceBetween:5,breakpoints:{375:{width:343,spaceBetween:5,slidesPerView:1},768:{width:704,slidesPerView:2,spaceBetween:16},1440:{width:1376,slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".custom-next",prevEl:".custom-prev"},mousewheel:!0,keyboard:{enabled:!0}}),l=()=>{r.isBeginning?a.previousBtn.classList.add("disabled"):a.previousBtn.classList.remove("disabled"),r.isEnd?a.nextBtn.classList.add("disabled"):a.nextBtn.classList.remove("disabled")};r.on("slideChange",l),l()}catch{const o=document.getElementById("error-reviews-block");o.style.display="block"}});const u="/team-js-project-portfolio/assets/icon-error-40fa32d5.svg",n={contactForm:document.querySelector(".footer-form"),email:document.getElementById("user-email"),comments:document.getElementById("user-comment"),backdropEl:document.querySelector(".footer-backdrop"),modalEl:document.querySelector(".modal"),closeModalBtnEl:document.querySelector(".close-btn"),modalTitleEl:document.querySelector(".modal-title"),modalMessageEl:document.querySelector(".modal-message")};n.contactForm.addEventListener("submit",async function(s){s.preventDefault();const o=n.email.value,r=n.comments.value;if(!o||!r){d.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:"Please fill in both fields",messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"center",closeOnEscape:!0,closeOnClick:!0,iconUrl:u});return}localStorage.setItem("email",o),localStorage.setItem("comment",r);const l={email:o,comment:r};try{const t=await(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json();t.error?d.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:`${t.error}`,messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:u}):n.contactForm.reset(),n.modalTitleEl.textContent=t.title,n.modalMessageEl.textContent=t.message,C()}catch(e){d.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:`${e.message}`,messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:u})}});function C(){n.backdropEl.classList.add("is-open")}function f(){n.backdropEl.classList.remove("is-open")}n.closeModalBtnEl.addEventListener("click",f);document.addEventListener("keydown",s=>{s.key==="Escape"&&n.backdropEl.classList.contains("is-open")&&f()});document.addEventListener("click",s=>{s.composedPath().includes(n.modalEl)||f()});const g={itemCards:document.querySelectorAll(".marque-item"),coverSection:document.querySelector(".covers-section")},S={root:null,rootMargin:"0px",threshold:0},k=new IntersectionObserver(B,S);k.observe(g.coverSection);function B(s){s.forEach(o=>{g.itemCards.forEach(r=>{r.classList.toggle("animation-marquee",o.isIntersecting)})})}
//# sourceMappingURL=commonHelpers.js.map
