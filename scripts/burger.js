(function () {
  const nav = document.querySelector('.nav');
  const burgerBtn = document.querySelector('.burger_btn');

  let onBurgerBtn = () => {
    burgerBtn.classList.toggle('close_burger');
    if (burgerBtn.classList.contains('close_burger')) {
      nav.style.top = '0';
      nav.style.left = '0';
    } else {
      nav.style.top = '-250px';
      nav.style.left = '-250px';
    }
  };

  burgerBtn.addEventListener('click', onBurgerBtn);
})();