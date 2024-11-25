window.addEventListener('scroll', function() {
  const header = document.querySelector('.pr-header');
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

