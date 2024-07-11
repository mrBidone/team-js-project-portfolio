import iziToast from "izitoast";
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


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    const savedEmail = localStorage.getItem('email');
    const savedComment = localStorage.getItem('comment');

    console.log('Saved email:', savedEmail);
    console.log('Saved comment:', savedComment);

    if (savedEmail) {
        refs.email.value = savedEmail;
    }
    if (savedComment) {
        refs.comments.value = savedComment;
    }
});


refs.email.addEventListener('input', () => {
    console.log('Email input event:', refs.email.value);
    localStorage.setItem('email', refs.email.value);
});

refs.comments.addEventListener('input', () => {
    console.log('Comments input event:', refs.comments.value);
    localStorage.setItem('comment', refs.comments.value);
});

refs.contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = refs.email.value;
    const comments = refs.comments.value;

    console.log('Form submitted with email:', email);
    console.log('Form submitted with comments:', comments);

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

    const dataLoad = {
        email: email,
        comment: comments,
    };

    try {
        const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataLoad)
        });

        const data = await response.json();

        console.log('Response data:', data);

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
            localStorage.removeItem('email');
            localStorage.removeItem('comment');
        }

        refs.modalTitleEl.textContent = data.title;
        refs.modalMessageEl.textContent = data.message;
        openModalWindow();
    } catch (error) {
        console.error('Error:', error);
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
function openModalWindow() {
    refs.backdropEl.classList.add('is-open');
}

function closeModalWindow() {
    refs.backdropEl.classList.remove('is-open');
}

refs.closeModalBtnEl.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && refs.backdropEl.classList.contains('is-open')) {
        closeModalWindow();
    }
});

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(refs.modalEl);
    if (!click) {
        closeModalWindow();
    }
});
