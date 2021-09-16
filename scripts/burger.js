(function () {
  const nav = document.querySelector('.nav');
<<<<<<< HEAD
<<<<<<< HEAD
  const main = document.querySelector('main');
=======
>>>>>>> 06a5d2a (feat: finish burger menu)
=======
  const main = document.querySelector('main');
>>>>>>> c1703a6 (fix: burger problem)
  const burgerBtn = document.querySelector('.burger_btn');

  let onBurgerBtn = () => {
    burgerBtn.classList.toggle('close_burger');
    if (burgerBtn.classList.contains('close_burger')) {
      nav.style.top = '0';
      nav.style.left = '0';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c1703a6 (fix: burger problem)
      main.addEventListener('click', onBurgerBtn);
      main.addEventListener('touchstart', onBurgerBtn);
    } else {
      nav.style.top = '-250px';
      nav.style.left = '-250px';
      main.removeEventListener('click', onBurgerBtn);
      main.removeEventListener('touchstart', onBurgerBtn);
<<<<<<< HEAD
=======
    } else {
      nav.style.top = '-250px';
      nav.style.left = '-250px';
>>>>>>> 06a5d2a (feat: finish burger menu)
=======
>>>>>>> c1703a6 (fix: burger problem)
    }
  };

  burgerBtn.addEventListener('click', onBurgerBtn);
})();