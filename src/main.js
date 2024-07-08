import './js/header';
import './js/about-me';
import './js/faq';
import './js/projects';
import './js/reviews';
import './js/footer';

export default {
  contactForm: document.querySelector('.footer-form'),
  email: document.getElementById('user-email'),
  comments: document.getElementById('user-comment'),
  backdropEl: document.querySelector('.footer-backdrop'),
  modalEl: document.querySelector('.modal'),
  closeModalBtnEl: document.querySelector('.close-btn'),
  modalTitleEl: document.querySelector('.modal-title'),
  modalMessageEl: document.querySelector('.modal-message'),
};


const refs = {
  itemCards: document.querySelectorAll('.marque-item'),
  coverSection: document.querySelector('.covers-section'),
};

const observerConfig = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const animationObserver = new IntersectionObserver(
  handleIntersection,
  observerConfig
);
animationObserver.observe(refs.coverSection);

function handleIntersection(entries) {
  entries.forEach(entry => {
    refs.itemCards.forEach(itemCard => {
      itemCard.classList.toggle('animation', entry.isIntersecting);
    });
  });
}

