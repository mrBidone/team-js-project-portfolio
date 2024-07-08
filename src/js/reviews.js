import axios from 'axios';

import Swiper from 'swiper';
import 'swiper/css/bundle';

import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const refs = {
  reviewsList: document.querySelector('.reviews-list'),
  previousBtn: document.querySelector('.previous-btn'),
  nextBtn: document.querySelector('.next-btn'),
};

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews?_id=7'
    );
    const data = response.data;
    if (data.length === 0) {
      alert('No reviews found!');
      const notFoundText = document.createElement('p');
      notFoundText.innerText = 'Not found';
      refs.reviewsList.appendChild(notFoundText);
    } else {
      data.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('swiper-slide');
        reviewItem.classList.add('review-item');

        reviewItem.innerHTML = `<li class="reviews-item"> 
           <img  
             src="${review.avatar_url}"  
             alt="author's photo"  
              class="review-photo"  
           width="48px"  
           height="48px"  />  
           <p class="review-author">${review.author}</p>  
           <p class="review-text">${review.review}</p> 
        </li>`;
        refs.reviewsList.appendChild(reviewItem);
      });
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    alert('Error fetching reviews. Please try again later.');
  }
});

const swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',

  breakpoints: {
    1440: {
      slidesPerView: 4,
      // width: '1376px',
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

  on: {
    reachEnd: function () {
      const nextReviewBtn = document.querySelector('.custom-next');
      nextReviewBtn.disabled = true;
      nextReviewBtn.style.opacity = '0.5';
      nextReviewBtn.removeEventListener('click', clickHandler);
    },
  },
});

function clickHandler() {}
document.querySelector('.custom-next').addEventListener('click', clickHandler);
