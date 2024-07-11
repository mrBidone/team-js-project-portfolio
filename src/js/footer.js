import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageUrlError from '../img/footer/icon-error.svg';

const refs = {
  contactForm: document.querySelector('.footer-form'),
  email: document.getElementById('user-email'),
  comments: document.getElementById('user-comment'),
  backdropEl: document.querySelector('.footer-backdrop'),
  modalEl: document.querySelector('.modal'),
  closeModalBtnEl: document.querySelector('.close-btn'),
  modalTitleEl: document.querySelector('.modal-title'),
  modalMessageEl: document.querySelector('.modal-message'),
};

refs.contactForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = refs.email.value;
  const comments = refs.comments.value;
  if (!email || !comments) {
    iziToast.error({
      title: 'Error!',
      titleSize: '16',
      titleColor: 'var(--main-text-color)',
      message: 'Please fill in both fields',
      messageSize: '16',
      messageColor: 'var(--main-text-color)',
      backgroundColor: 'var(--accent-color)',
      theme: 'dark',
      position: 'center',
      closeOnEscape: true,
      closeOnClick: true,
      iconUrl: imageUrlError,
    });
    return;
  }

  localStorage.setItem('email', email);
  localStorage.setItem('comment', comments);
  const dataLoad = {
    email: email,
    comment: comments,
  };

  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataLoad),
      }
    );
    const data = await response.json();

    if (data.error) {
      iziToast.error({
        title: 'Error!',
        titleSize: '16',
        titleColor: 'var(--main-text-color)',
        message: `${data.error}`,
        messageSize: '16',
        messageColor: 'var(--main-text-color)',
        backgroundColor: 'var(--accent-color)',
        theme: 'dark',
        position: 'bottomCenter',
        closeOnEscape: true,
        closeOnClick: true,
        iconUrl: imageUrlError,
      });
    } else {
      refs.contactForm.reset();
    }

    refs.modalTitleEl.textContent = data.title;
    refs.modalMessageEl.textContent = data.message;
    openModalWindow();
  } catch (error) {
    iziToast.error({
      title: 'Error!',
      titleSize: '16',
      titleColor: 'var(--main-text-color)',
      message: `${error.message}`,
      messageSize: '16',
      messageColor: 'var(--main-text-color)',
      backgroundColor: 'var(--accent-color)',
      theme: 'dark',
      position: 'bottomCenter',
      closeOnEscape: true,
      closeOnClick: true,
      iconUrl: imageUrlError,
    });
  }
});

// <!-- Modal -->
// function openModalWindow() {
//   refs.backdropEl.classList.add('is-open');
// }
// function closeModalWindow() {
//   refs.backdropEl.classList.remove('is-open');
// }
// refs.closeModalBtnEl.addEventListener('click', closeModalWindow);
// document.addEventListener('keydown', e => {
//   if (e.key === 'Escape' && refs.backdropEl.classList.contains('is-open')) {
//     closeModalWindow();
//   }
// });
// document.addEventListener('click', e => {
//   const click = e.composedPath().includes(refs.modalEl);
//   if (!click) {
//     closeModalWindow();
//   }
// });

function openModalWindow() {
  refs.backdropEl.classList.add('is-open');
  addEventListeners();
}
function closeModalWindow() {
  refs.backdropEl.classList.remove('is-open');
  removeEventListeners();
}
function addEventListeners() {
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', handleBackdropClick);
}

function removeEventListeners() {
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('click', handleBackdropClick);
}

function handleKeyDown(e) {
  if (e.key === 'Escape' && refs.backdropEl.classList.contains('is-open')) {
    closeModalWindow();
  }
}

function handleBackdropClick(e) {
  const click = e.composedPath().includes(refs.modalEl);
  if (!click) {
    closeModalWindow();
  }
}

refs.closeModalBtnEl.addEventListener('click', closeModalWindow);
