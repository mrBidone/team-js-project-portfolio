import axios from 'axios';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const refs = {
  reviewsList: document.querySelector('.reviews - list'),
  previousBtn: document.querySelector('.previous-btn'),
  nextBtn: document.querySelector('.next-btn'),
};

// async function getReviews() {
//   const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

//   return await axios.get(`${BASE_URL}`);
// }

// try {
//     const {{ avatar_url, author, review } = await getReviews();
//     }
// }

async function getReviews() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

refs.previousBtn.addEventListener('click', e => e.preventDefault());
refs.nextBtn.addEventListener('click', e => e.preventDefault());

// `<li class="reviews-item">
//         <img
//           src=""
//           alt="author's photo"
//           class="review-photo"
//           width="48px"
//           height="48px"
//         />
//         <p class="review-author">Poly</p>
//         <p class="review-text">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
//           molestiae atque maxime accusamus inventore, quasi placeat dolorum,
//           voluptates, natus maiores dolorem tempore consequatur accusantium
//           harum. Odit, dolorum quod. Ab, consequatur!
//         </p>
//       </li>`;
