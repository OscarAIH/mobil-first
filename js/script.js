
/* Burger Menu der slider ind fra venstre side  */
function toggleMenu() {
  const menu = document.querySelector('.menu-overlay');
  const accountMenu = document.querySelector('.account-menu-overlay');

  /* Gør at menuerne ikke er åbne på samme tid */
  if (menu.style.left === '0px') {
      menu.style.left = '-100%';
  } else {
      if (accountMenu.style.right === '0px') {
          accountMenu.style.right = '-60%'; 
      }
      menu.style.left = '0px';
  }
}

  /* Slideshow funktion */
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

/* Profil Menu der slider ind fra højre side */
function toggleAccountMenu() { 
  const accountMenu = document.querySelector('.account-menu-overlay');
  const menu = document.querySelector('.menu-overlay');

  /* Gør at menuerne ikke er åbne på samme tid */
  if (accountMenu.style.right === '0px') {
      accountMenu.style.right = '-60%'; 
  } else {
      if (menu.style.left === '0px') {
          menu.style.left = '-100%'; 
      }
      accountMenu.style.right = '0px'; 
  }
}
