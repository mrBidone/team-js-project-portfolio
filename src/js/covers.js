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
