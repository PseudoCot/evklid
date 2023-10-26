const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
})

const menuLinks = document.querySelectorAll('.nav__link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})