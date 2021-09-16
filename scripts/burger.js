(function () {
  const nav = document.querySelector('.nav');
  const main = document.querySelector('main');
  const burgerBtn = document.querySelector('.burger_btn');

  let onBurgerBtn = () => {
    burgerBtn.classList.toggle('close_burger');
    if (burgerBtn.classList.contains('close_burger')) {
      nav.style.top = '0';
      nav.style.left = '0';
      main.addEventListener('click', onBurgerBtn);
      main.addEventListener('touchstart', onBurgerBtn);
    } else {
      nav.style.top = '-250px';
      nav.style.left = '-250px';
      main.removeEventListener('click', onBurgerBtn);
      main.removeEventListener('touchstart', onBurgerBtn);
    }
  };

  burgerBtn.addEventListener('click', onBurgerBtn);
})();