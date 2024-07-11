 import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import '../css/styles.css';

const swiperProject = new Swiper('#swiperProject', {
  modules: [Keyboard, Mousewheel],
  navigation: {
    nextEl: '.swiper-proj-next',
    prevEl: '.swiper-proj-prev'
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
  loop: false,
  speed: 500,

  spaceBetween: 5,
  slideToClickedSlide: false,
  allowTouchMove: true,

  autoplay: false,
  breakpoints: {

    768: {
      slidesPerView: 1,
      spaceBetween: 5,
      width: 704,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 5,
      width: 1376,
    },
  },
  on: {
    slideChange: function() {
      updateNavigation();
    }
  },
});

function updateNavigation() {
  const nextBtn = document.querySelector('.swiper-proj-next');
  const prevBtn = document.querySelector('.swiper-proj-prev');

  if (swiperProject.isBeginning) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  if (swiperProject.isEnd) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
}


updateNavigation();











