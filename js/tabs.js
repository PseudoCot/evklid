const tabsBtns = document.querySelectorAll('.tabs__btn');
const tabsItems = document.querySelectorAll('.tabs__item');
tabsBtns.forEach((btn) => {
  btn.addEventListener('click', (element) => {
    tabsBtns.forEach((btnX) => {
      btnX.classList.remove('tabs__btn--active');
    });
    element.currentTarget.classList.add('tabs__btn--active');
    tabsItems.forEach((item) => {
      item.classList.remove('tabs__item--active');
    });
    document.querySelector(`[data-target="${element.currentTarget.dataset.path}"]`).classList.add('tabs__item--active');
  });
});
