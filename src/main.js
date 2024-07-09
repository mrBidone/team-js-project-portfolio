import './js/header';
import './js/about-me';
import './js/faq';
import './js/projects';
import './js/reviews';
import './js/footer';
import './js/covers';

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
