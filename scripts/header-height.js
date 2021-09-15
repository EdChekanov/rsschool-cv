(function () {
  const nav = document.querySelector('.nav');
  if (window.innerWidth > 700)
  window.addEventListener('scroll', () => {
    if (window.pageYOffset) {
      nav.style.minHeight = '2vw'
    } else {
      nav.style.minHeight = '5vw'
    }
  })
})();