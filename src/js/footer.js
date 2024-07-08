import iziToast from 'izitoast';
import imageUrlError from '../img/footer/icon-error.svg';
import refs from '../main.js';

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

const contactForm = document.querySelector('.footer-form');

contactForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('user-email').value;
  const comments = document.getElementById('user-comment').value;
  if (!email || !comments) {
    alert('Please fill in both fields');
    return;
  }

  localStorage.setItem('email', email);
  localStorage.setItem('comment', comments);
  const dataLoad = {
    email: email,
    comment: comments,
  };

  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api-docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataLoad),
    });
    const data = await response.json();

    if (data.error) {
      console.log('Error: ' + data.error);
    } else {
      contactForm.reset();
    }
    modalTitleEl.textContent = data.title;
    modalMessageEl.textContent = data.message;
    openModalWindow();
  } catch (error) {
    alert('Error: ' + error.message);
  }
});

// <!-- Modal -->

const backdropEl = document.querySelector('.footer-backdrop');
const modalEl = document.querySelector('.modal');
const closeModalBtnEl = document.querySelector('.close-btn');
const modalTitleEl = document.querySelector('.modal-title');
const modalMessageEl = document.querySelector('.modal-message');

function openModalWindow() {
  backdropEl.classList.add('is-open');
}
function closeModalWindow() {
  backdropEl.classList.remove('is-open');
}

closeModalBtnEl.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && backdropEl.classList.contains('is-open')) {
    closeModalWindow();
  }
});
document.addEventListener('click', e => {
  const click = e.composedPath().includes(modalEl);
  if (!click) {
    closeModalWindow();
  }
});
