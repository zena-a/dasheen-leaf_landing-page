const menu_icon = document.querySelector('.hamburger');
const menu_bar = document.querySelector('.menu');

menu_icon.addEventListener('click', () => {
  menu_bar.classList.toggle('hide');
})