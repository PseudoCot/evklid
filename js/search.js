const searchBtn = document.querySelector('.header__search-opener');
const searchBox = document.querySelector('.header__search-box');
searchBtn.addEventListener('click', () => {
  searchBox.classList.add('header__search-box--active');
});

const searchCloser = document.querySelector('.header__search-closer');
searchCloser.addEventListener('click', () => {
  searchBox.classList.remove('header__search-box--active');
})