////// start swiper

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import '../css/styles.css';

const skillsSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-skills',
  },
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  slideActiveClass: 'current-skill',
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

//////// start accordion

const infoItems = document.querySelectorAll('.ac-item-information');

infoItems.forEach(infoItem => {
  infoItem.addEventListener('click', () => {
    infoItem.classList.toggle('active');
  });
});
