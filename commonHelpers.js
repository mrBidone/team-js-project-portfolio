import{S as m,N as p,K as f,M as w,A as E,a as S,i as d}from"./assets/vendor-7ce9439f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i={openMenuBtn:document.querySelector("[data-menu-open]"),mobMenu:document.querySelector("[data-menu]"),dropdownMenuBtn:document.querySelector("button.dropbtn"),menu:document.getElementById("dropdown"),mobMenuLinks:document.querySelector(".mobile-menu-nav-links-container")};i.openMenuBtn.addEventListener("click",L);i.mobMenu.addEventListener("click",C);i.dropdownMenuBtn.addEventListener("click",k);function L(){i.mobMenu.classList.remove("is-hidden")}function C(o){o.target.hasAttribute("data-menu-close")&&i.mobMenu.classList.add("is-hidden")}function k(){i.menu.classList.toggle("show")}window.onclick=function(o){!o.target.matches(".dropbtn")&&i.menu.classList.contains("show")&&i.menu.classList.remove("show")};new m("#swiperAbout",{modules:[p,f,w],navigation:{nextEl:".about-me-btn-swipe"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touch:!0,centeredSlides:!1,loop:!0,speed:500,spaceBetween:0,slideToClickedSlide:!0,allowTouchMove:!0,slideActiveClass:"current-skill",slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});const q=document.querySelectorAll(".ac-item-information");q.forEach(o=>{o.addEventListener("click",()=>{o.classList.toggle("active")})});new E(".faq-list",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",showMultiple:!0});new m("#swiperProject",{modules:[p,f,w],navigation:{nextEl:".swiper-proj-next",prevEl:".swiper-proj-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touch:!0,centeredSlides:!1,loop:!0,speed:500,spaceBetween:0,slideToClickedSlide:!0,allowTouchMove:!0,slidesPerView:1,width:343,breakpoints:{768:{slidesPerView:1,width:704},1440:{slidesPerView:1,width:1376}},on:{slideChange:function(){const o=document.querySelector(".swiper-proj-next"),s=document.querySelector(".swiper-proj-prev");this.isEnd?(o.disabled=!0,o.classList.add("disabled")):(o.disabled=!1,o.classList.remove("disabled")),this.isBeginning?(s.disabled=!0,s.classList.add("disabled")):(s.disabled=!1,s.classList.remove("disabled"))}}});const l={reviewsList:document.querySelector(".reviews-list"),previousBtn:document.querySelector(".custom-prev"),nextBtn:document.querySelector(".custom-next")};window.addEventListener("DOMContentLoaded",async()=>{try{const s=(await S.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(s.length===0){alert("No reviews found!");const e=document.createElement("p");e.innerText="Not found",l.reviewsList.appendChild(e)}else s.forEach(e=>{const t=document.createElement("li");t.classList.add("swiper-slide"),t.classList.add("reviews-item"),t.innerHTML=` 
            <img 
              src="${e.avatar_url}" 
              alt="author's photo" 
              class="review-photo" 
              width="48px" 
              height="48px" 
            /> 
            <p class="review-author">${e.author}</p> 
            <p class="review-text">${e.review}</p>`,l.reviewsList.appendChild(t)});const r=new m(".mySwiper",{modules:[p,f,w],direction:"horizontal",slidesPerView:1,width:343,spaceBetween:5,breakpoints:{768:{width:704,slidesPerView:2,spaceBetween:16},1440:{width:1376,slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".custom-next",prevEl:".custom-prev"},mousewheel:!0,keyboard:{enabled:!0}}),n=()=>{r.isBeginning?l.previousBtn.classList.add("disabled"):l.previousBtn.classList.remove("disabled"),r.isEnd?l.nextBtn.classList.add("disabled"):l.nextBtn.classList.remove("disabled")};r.on("slideChange",n),n()}catch{const s=document.getElementById("error-reviews-block");s.style.display="block"}});const u="/team-js-project-portfolio/assets/icon-error-40fa32d5.svg";a.contactForm.addEventListener("submit",async function(o){o.preventDefault();const s=a.email.value,r=a.comments.value;if(!s||!r){d.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:"Please fill in both fields",messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"center",closeOnEscape:!0,closeOnClick:!0,iconUrl:u});return}localStorage.setItem("email",s),localStorage.setItem("comment",r);const n={email:s,comment:r};try{const t=await(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();t.error?d.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:`${t.error}`,messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:u}):a.contactForm.reset(),a.modalTitleEl.textContent=t.title,a.modalMessageEl.textContent=t.message,y()}catch(e){d.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:`${e.message}`,messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:u})}});const v=document.querySelector(".footer-form");v.addEventListener("submit",async function(o){o.preventDefault();const s=document.getElementById("user-email").value,r=document.getElementById("user-comment").value;if(!s||!r){alert("Please fill in both fields");return}localStorage.setItem("email",s),localStorage.setItem("comment",r);const n={email:s,comment:r};try{const t=await(await fetch("https://portfolio-js.b.goit.study/api-docs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();t.error?console.log("Error: "+t.error):v.reset(),M.textContent=t.title,O.textContent=t.message,y()}catch(e){alert("Error: "+e.message)}});const h=document.querySelector(".footer-backdrop"),B=document.querySelector(".modal"),x=document.querySelector(".close-btn"),M=document.querySelector(".modal-title"),O=document.querySelector(".modal-message");function y(){h.classList.add("is-open")}function g(){h.classList.remove("is-open")}x.addEventListener("click",g);document.addEventListener("keydown",o=>{o.key==="Escape"&&h.classList.contains("is-open")&&g()});document.addEventListener("click",o=>{o.composedPath().includes(B)||g()});const b={itemCards:document.querySelectorAll(".marque-item"),coverSection:document.querySelector(".covers-section")},P={root:null,rootMargin:"0px",threshold:0},I=new IntersectionObserver(T,P);I.observe(b.coverSection);function T(o){o.forEach(s=>{b.itemCards.forEach(r=>{r.classList.toggle("animation",s.isIntersecting)})})}const a={contactForm:document.querySelector(".footer-form"),email:document.getElementById("user-email"),comments:document.getElementById("user-comment"),backdropEl:document.querySelector(".footer-backdrop"),modalEl:document.querySelector(".modal"),closeModalBtnEl:document.querySelector(".close-btn"),modalTitleEl:document.querySelector(".modal-title"),modalMessageEl:document.querySelector(".modal-message")};
//# sourceMappingURL=commonHelpers.js.map
