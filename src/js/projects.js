import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import '../css/styles.css';


  const swiperProject = new Swiper('#swiperProject', {
    modules: [Navigation, Keyboard, Mousewheel],
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
    spaceBetween: 0,
    slideToClickedSlide: false,
     allowTouchMove: true,

    width: 343,
    autoplay: false,
    slidesPerView: 1 ,
    slidesPerGroup:1,
    breakpoints: {
      768: {
        slidesPerView: 1,

        width: 704,
      },
      1440: {
        slidesPerView: 1,

        width: 1376,
      },
    },
    on: {
      slideChange: function() {
        const nextBtn = document.querySelector('.swiper-proj-next');
        const prevBtn = document.querySelector('.swiper-proj-prev');

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


     }
    },
  });








