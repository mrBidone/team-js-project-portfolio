import './js/header';
import './js/about-me';
import './js/faq';
import './js/projects';
import './js/reviews';
import './js/footer';
import './js/covers';

function handleIntersection(entries) {
  entries.map(entry => {
    if (entry.isIntersecting) {
      // Item has crossed our observation
      // threshold - load src from data-src
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.remove('lazy-bg');
      // Job done for this item - no need to watch it!
      observer.unobserve(entry.target);
    }
  });
}

const elementsWithBackground = document.querySelectorAll('.lazy-bg');
const observer = new IntersectionObserver(handleIntersection);
elementsWithBackground.forEach(el => observer.observe(el));
