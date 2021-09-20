(function () {
  const nav = document.querySelector('.nav');
  if (window.innerWidth > 700)
  window.addEventListener('scroll', () => {
    if (window.pageYOffset) {
      nav.style.minHeight = '2vw'
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
      nav.style.minHeight = '3vw'
=======
      nav.style.minHeight = '5vw'
>>>>>>> 06a5d2a (feat: finish burger menu)
=======
      nav.style.minHeight = '3vw'
>>>>>>> 7b1f144 (fix: nav height)
    }
  })
})();