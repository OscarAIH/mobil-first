function toggleMenu() {
  const menu = document.querySelector('.menu-overlay');
  const accountMenu = document.querySelector('.account-menu-overlay');

  if (menu.style.left === '0px') {
      menu.style.left = '-100%';
  } else {
      if (accountMenu.style.right === '0px') {
          accountMenu.style.right = '-60%'; 
      }
      menu.style.left = '0px';
  }
}

  
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

/* Gør at menuerne ikke er åbne på samme tid */
function toggleAccountMenu() { 
  const accountMenu = document.querySelector('.account-menu-overlay');
  const menu = document.querySelector('.menu-overlay');

  if (accountMenu.style.right === '0px') {
      accountMenu.style.right = '-60%'; 
  } else {
      if (menu.style.left === '0px') {
          menu.style.left = '-100%'; 
      }
      accountMenu.style.right = '0px'; 
  }
}
