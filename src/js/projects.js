import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import '../css/styles.css';


  const swiperProject = new Swiper('#swiperProject', {
    modules: [Navigation, Keyboard, Mousewheel],
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev'
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
    slidesPerView: 1,
    width: 260,
    breakpoints: {
      768: {
        slidesPerView: 1,
        width: 600,
      },
      1440: {
        slidesPerView: 1,
        width: 1200,
      },
    },
    on: {
      slideChange: function() {
        const nextBtn = document.querySelector('.swiper-btn-next');
        const prevBtn = document.querySelector('.swiper-btn-prev');

        if (this.isEnd) {
          nextBtn.disabled = true;
          nextBtn.classList.add('disabled');
        } else {
          nextBtn.disabled = false;
          nextBtn.classList.remove('disabled');
        }
        if (this.isBeginning) {
          prevBtn.disabled = true;
          prevBtn.classList.add('disabled');
        } else {
          prevBtn.disabled = false;
          prevBtn.classList.remove('disabled');
        }
      },
    },
  });








