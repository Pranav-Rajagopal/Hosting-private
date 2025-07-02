// script.js

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.faq-item button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('active');
    });
  });
});
