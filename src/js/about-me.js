//// about me

////// start swiper

import Swiper from 'swiper';
import 'swiper/css/bundle';

import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

const swiperAboutMe = new Swiper('#swiperAbout', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.about-me-btn-swipe',
  },
  mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true,
  touch: true,
  centeredSlides: false,
  loop: true,
  speed: 500,
  spaceBetween: 0,
  slideToClickedSlide: true,
  allowTouchMove: true,
  slideActiveClass: 'current-skill',
  slidesPerView: 2,
  width: 260,
  breakpoints: {
    768: {
      slidesPerView: 3,
      width: 600,
    },
    1440: {
      slidesPerView: 6,
      width: 1200,
    },
  },
});

//////// start accordion

// const infoItems = document.querySelectorAll('.ac-item-information');
// const buttonElem = document.querySelector('.show-btn-icon');

// infoItems.forEach(infoItem => {
//   infoItem.addEventListener('click', () => {
//     infoItem.classList.toggle('active');
//   });
// });

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  elementClass: 'ac-item-information',
  triggerClass: 'show-btn-icon',
  panelClass: 'ac-panel',
  showMultiple: true,
  duration: 800,
  openOnInit: [0],
});
