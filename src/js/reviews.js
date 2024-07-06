import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';

const refs = {
  reviewsList: document.querySelector('.reviews-list'),
  previousBtn: document.querySelector('.previous-btn'),
  nextBtn: document.querySelector('.next-btn'),
};

const reviewsList = document.querySelector('.reviews-list');

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    const data = response.data;

    data.forEach(review => {
      const reviewItem = document.createElement('div');
      reviewItem.classList.add('review-item');
      reviewItem.innerHTML = `<li class="reviews-item">
         <img
           src="${review.avatar_url}"
           alt="author's photo"
           class="review-photo"
           width="48px"
           height="48px"
         />
         <p class="review-author">${review.author}</p>
         <p class="review-text">
           ${review.review}
         </p>
       </li>`;
      refs.reviewsList.appendChild(reviewItem);
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
});
