import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const refs = {
  reviewsList: document.querySelector('.reviews-list'),
  previousBtn: document.querySelector('.custom-prev'),
  nextBtn: document.querySelector('.custom-next'),
};

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    const data = response.data;
    if (data.length === 0) {
      alert('No reviews found!');
      const notFoundText = document.createElement('p');
      notFoundText.innerText = 'Not found';
      refs.reviewsList.appendChild(notFoundText);
    } else {
      data.forEach(review => {
        const reviewItem = document.createElement('li');
        reviewItem.classList.add('swiper-slide');
        reviewItem.classList.add('reviews-item');
        reviewItem.innerHTML = `<div width="100%"> 
            <img 
              src="${review.avatar_url}" 
              alt="author's photo" 
              class="review-photo" 
              width="48px" 
              height="48px" 
            /> 
            <p class="review-author">${review.author}</p> 
            <p class="review-text">${review.review}</p> 
          </div>`;
        refs.reviewsList.appendChild(reviewItem);
      });
    }

    const swiper = new Swiper('.mySwiper', {
      modules: [Navigation, Keyboard, Mousewheel],
      direction: 'horizontal',
      breakpoints: {
        1440: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      },
      mousewheel: true,
      keyboard: {
        enabled: true,
      },
    });
    const updateNavigationButtons = () => {
      if (swiper.isBeginning) {
        refs.previousBtn.classList.add('disabled');
      } else {
        refs.previousBtn.classList.remove('disabled');
      }

      if (swiper.isEnd) {
        refs.nextBtn.classList.add('disabled');
      } else {
        refs.nextBtn.classList.remove('disabled');
      }
    };

    swiper.on('slideChange', updateNavigationButtons);

    updateNavigationButtons();
  } catch (error) {
    const errorBlock = document.getElementById('error-reviews-block');
    errorBlock.style.display = 'block';
  }
});
