(function () {
  const scrollLinks = document.querySelectorAll('.scroll');
  scrollLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const id = link.getAttribute('href').substring(1);
          const el = document.getElementById(id);
<<<<<<< HEAD
          const offset = 150;
=======
          const offset = 100;
>>>>>>> 06a5d2a (feat: finish burger menu)
          const bodyRect = document.body.getBoundingClientRect().top;
          const elRect = el.getBoundingClientRect().top;
          const elPosition = elRect - bodyRect;
          const offsetPosition = elPosition - offset;
          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
  
      })
  });
})();