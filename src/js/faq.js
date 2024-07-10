import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-list', {
  elementClass: 'faq-item',
  triggerClass: 'icon-Icon',
  panelClass: 'faq-answer',
  showMultiple: true,
  duration: 800,
});

// document.addEventListener('DOMContentLoaded', function() {
//     const faqItems = document.querySelectorAll('.faq-item');

//     faqItems.forEach(item => {
//         item.querySelector('.faq-question').addEventListener('click', () => {
//             item.classList.toggle('open');
//         });
//     });
// });
