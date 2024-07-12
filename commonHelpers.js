import{S as p,N as C,K as v,M as f,A as b,a as k,i as u}from"./assets/vendor-7ce9439f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const i={openMenuBtn:document.querySelector("[data-menu-open]"),mobMenu:document.querySelector("[data-menu]"),dropdownMenuBtn:document.querySelector("button.dropbtn"),menu:document.getElementById("dropdown"),mobMenuLinks:document.querySelector(".mobile-menu-nav-links-container")};i.openMenuBtn.addEventListener("click",B);i.mobMenu.addEventListener("click",q);i.dropdownMenuBtn.addEventListener("click",M);function B(){i.mobMenu.classList.remove("is-hidden")}function q(e){e.target.hasAttribute("data-menu-close")&&i.mobMenu.classList.add("is-hidden")}function M(){i.menu.classList.toggle("show")}window.onclick=function(e){!e.target.matches(".dropbtn")&&i.menu.classList.contains("show")&&i.menu.classList.remove("show")};new p("#swiperAbout",{modules:[C,v,f],navigation:{nextEl:".about-me-btn-swipe"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touch:!0,centeredSlides:!1,loop:!0,speed:500,spaceBetween:0,slideToClickedSlide:!0,allowTouchMove:!0,slideActiveClass:"current-skill",slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});new b(".accordion-container",{elementClass:"ac-item-information",triggerClass:"show-btn-icon",panelClass:"ac-panel",showMultiple:!0,duration:800,openOnInit:[0],beforeOpen:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!0),beforeClose:e=>e.querySelector("button.ac-trigger").setAttribute("aria-expanded",!1)});new b(".faq-list",{elementClass:"faq-item",triggerClass:"icon-Icon",panelClass:"faq-answer",showMultiple:!0,duration:800,beforeOpen:e=>e.querySelector("button.faq-question").setAttribute("aria-expanded",!0),beforeClose:e=>e.querySelector("button.faq-question").setAttribute("aria-expanded",!1)});const w=new p("#swiperProject",{modules:[v,f],navigation:{nextEl:".swiper-proj-next",prevEl:".swiper-proj-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touch:!0,centeredSlides:!1,loop:!1,speed:500,spaceBetween:5,slideToClickedSlide:!1,allowTouchMove:!0,autoplay:!1,breakpoints:{768:{slidesPerView:1,spaceBetween:5,width:704},1440:{slidesPerView:1,spaceBetween:5,width:1376}},on:{slideChange:function(){h()}}});function h(){const e=document.querySelector(".swiper-proj-next"),t=document.querySelector(".swiper-proj-prev");w.isBeginning?t.classList.add("disabled"):t.classList.remove("disabled"),w.isEnd?e.classList.add("disabled"):e.classList.remove("disabled")}h();const a={reviewsList:document.querySelector(".reviews-list"),previousBtn:document.querySelector(".custom-prev"),nextBtn:document.querySelector(".custom-next")};window.addEventListener("DOMContentLoaded",async()=>{try{const t=(await k.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(t.length===0){alert("No reviews found!");const o=document.createElement("p");o.innerText="Not found",a.reviewsList.appendChild(o)}else t.forEach((o,n,c)=>{const d=document.createElement("li");d.classList.add("swiper-slide"),d.classList.add("reviews-item"),d.setAttribute("aria-label",`${n+1} / ${c.length}`),d.innerHTML=`
            <img
              src="${o.avatar_url}"
              alt="author's photo"
              class="review-photo"
              width="48px"
              height="48px"
              loading="lazy"
            />
            <p class="review-author">${o.author}</p>
            <p class="review-text">${o.review}</p>`,a.reviewsList.appendChild(d)});const r=new p(".mySwiper",{modules:[v,f],direction:"horizontal",slidesPerView:1,spaceBetween:16,breakpoints:{375:{width:343,spaceBetween:16,slidesPerView:1},768:{width:704,slidesPerView:2,spaceBetween:16},1440:{width:1376,slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".custom-next",prevEl:".custom-prev"},mousewheel:!0,keyboard:{enabled:!0}}),l=()=>{r.isBeginning?a.previousBtn.classList.add("disabled"):a.previousBtn.classList.remove("disabled"),r.isEnd?a.nextBtn.classList.add("disabled"):a.nextBtn.classList.remove("disabled")};r.on("slideChange",l),l()}catch{const t=document.getElementById("error-reviews-block");t.style.display="block"}});window.onscroll=function(){x()};function x(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}function I(){document.body.scrollTop=0,document.documentElement.scrollTop=0}document.addEventListener("DOMContentLoaded",function(){document.getElementById("myBtn").addEventListener("click",I)});const m="/team-js-project-portfolio/assets/icon-error-40fa32d5.svg",s={contactForm:document.querySelector(".footer-form"),email:document.getElementById("user-email"),comments:document.getElementById("user-comment"),backdropEl:document.querySelector(".footer-backdrop"),modalEl:document.querySelector(".modal"),closeModalBtnEl:document.querySelector(".close-btn"),modalTitleEl:document.querySelector(".modal-title"),modalMessageEl:document.querySelector(".modal-message")};document.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded event fired");const e=localStorage.getItem("email"),t=localStorage.getItem("comment");console.log("Saved email:",e),console.log("Saved comment:",t),e&&(s.email.value=e),t&&(s.comments.value=t)});s.email.addEventListener("input",()=>{console.log("Email input event:",s.email.value),localStorage.setItem("email",s.email.value)});s.comments.addEventListener("input",()=>{console.log("Comments input event:",s.comments.value),localStorage.setItem("comment",s.comments.value)});s.contactForm.addEventListener("submit",async function(e){e.preventDefault();const t=s.email.value,r=s.comments.value;if(console.log("Form submitted with email:",t),console.log("Form submitted with comments:",r),!t||!r){u.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:"Please fill in both fields",messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"center",closeOnEscape:!0,closeOnClick:!0,iconUrl:m});return}const l={email:t,comment:r};try{const n=await(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json();console.log("Response data:",n),n.error?u.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:`${n.error}`,messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:m}):(s.contactForm.reset(),localStorage.removeItem("email"),localStorage.removeItem("comment")),s.modalTitleEl.textContent=n.title,s.modalMessageEl.textContent=n.message,O()}catch(o){console.error("Error:",o),u.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:`${o.message}`,messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:m})}});function O(){s.backdropEl.classList.add("is-open"),P()}function g(){s.backdropEl.classList.remove("is-open"),T()}function P(){document.addEventListener("keydown",y),document.addEventListener("click",E)}function T(){document.removeEventListener("keydown",y),document.removeEventListener("click",E)}function y(e){e.key==="Escape"&&s.backdropEl.classList.contains("is-open")&&g()}function E(e){e.composedPath().includes(s.modalEl)||g()}s.closeModalBtnEl.addEventListener("click",g);const L={itemCards:document.querySelectorAll(".marque-item"),coverSection:document.querySelector(".covers-section")},A={root:null,rootMargin:"0px",threshold:0},j=new IntersectionObserver(z,A);j.observe(L.coverSection);function z(e){e.forEach(t=>{L.itemCards.forEach(r=>{r.classList.toggle("animation-marquee",t.isIntersecting)})})}function V(e){e.map(t=>{t.isIntersecting&&(t.target.src=t.target.dataset.src,t.target.classList.remove("lazy-bg"),S.unobserve(t.target))})}const $=document.querySelectorAll(".lazy-bg"),S=new IntersectionObserver(V);$.forEach(e=>S.observe(e));
//# sourceMappingURL=commonHelpers.js.map
