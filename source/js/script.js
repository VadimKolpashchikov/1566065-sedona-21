let nav = document.querySelector('.main-nav');
let navToggle = document.querySelector('.page-header__button-toggle');
let navClose = document.querySelector('.page-header__button-close');

nav.classList.add('main-nav_hidden');
navClose.classList.add('main-nav_hidden');

navToggle.addEventListener('click', function () {
  nav.classList.remove('main-nav_hidden');
  navClose.classList.remove('main-nav_hidden');
  navToggle.classList.add('main-nav_hidden');
});

navClose.addEventListener('click', function () {
  nav.classList.add('main-nav_hidden');
  navClose.classList.add('main-nav_hidden');
  navToggle.classList.remove('main-nav_hidden');
});
