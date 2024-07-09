import iziToast from "izitoast";
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
        const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataLoad)
        });
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
            refs.contactForm.reset()
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

// <!-- Modal Window-->
function openModalWindow() {
    refs.backdropEl.classList.add('is-open')
}
function closeModalWindow() {
    refs.backdropEl.classList.remove('is-open')
}
refs.closeModalBtnEl.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && refs.backdropEl.classList.contains('is-open')) {
        closeModalWindow();
    }
})
document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(refs.modalEl);
    if (!click) {
        closeModalWindow();
    }
});