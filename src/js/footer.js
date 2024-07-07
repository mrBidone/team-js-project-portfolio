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
