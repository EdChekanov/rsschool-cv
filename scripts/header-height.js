(function () {
  const nav = document.querySelector('.nav');
  if (window.innerWidth > 700)
  window.addEventListener('scroll', () => {
    if (window.pageYOffset) {
      nav.style.minHeight = '2vw'
    } else {
<<<<<<< HEAD
      nav.style.minHeight = '3vw'
=======
      nav.style.minHeight = '5vw'
>>>>>>> 06a5d2a (feat: finish burger menu)
    }
  })
})();