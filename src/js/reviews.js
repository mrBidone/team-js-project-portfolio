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
        reviewItem.innerHTML = ` 
            <img 
              src="${review.avatar_url}" 
              alt="author's photo" 
              class="review-photo" 
              width="48px" 
              height="48px" 
            /> 
            <p class="review-author">${review.author}</p> 
            <p class="review-text">${review.review}</p>`;
        refs.reviewsList.appendChild(reviewItem);
      });
    }

    const swiper = new Swiper('.mySwiper', {
      modules: [Keyboard, Mousewheel],
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        375: {
          width: 343,
          spaceBetween: 16,
          slidesPerView: 1,
        },

        768: {
          width: 704,
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          width: 1376,
          slidesPerView: 4,
          spaceBetween: 16,
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

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myBtn').addEventListener('click', topFunction);
});
