function toggleMenu() {
    const menu = document.querySelector('.menu-overlay');
    menu.style.left = menu.style.left === '0px' ? '-100%' : '0px';
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const menuLinks = document.querySelectorAll('.menu-overlay ul li a');
    menuLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        menuLinks.forEach((otherLink) => otherLink.classList.remove('active'));
        e.currentTarget.classList.add('active');
      });
    });
  });
  
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

