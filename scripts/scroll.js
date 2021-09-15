(function () {
  const scrollLinks = document.querySelectorAll('.scroll');
  scrollLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const id = link.getAttribute('href').substring(1);
          const el = document.getElementById(id);
          const offset = 100;
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