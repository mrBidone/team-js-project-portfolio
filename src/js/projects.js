import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

const swiperProject = new Swiper('#swiperProject', {
  modules: [Keyboard, Mousewheel, Navigation],
  navigation: {
    nextEl: '.swiper-proj-next',
    prevEl: '.swiper-proj-prev'
  },
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  centeredSlides: false,
  loop: false,
  speed: 500,
  spaceBetween: 20,
  allowTouchMove: true,
  autoplay: false,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
      width: 704,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 20,
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










