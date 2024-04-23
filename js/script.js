/* Menu positioner når åben og lukket */
const MENU_CLOSED_LEFT = '-100%';
const MENU_OPEN_LEFT = '0px';
const MENU_CLOSED_RIGHT = '-60%';
const MENU_OPEN_RIGHT = '0px';


/* Togglefunktion af knapperne */
function toggleElement(element, isOpen, closeValue, openValue, property) {
  if (isOpen) {
    element.style[property] = closeValue;
  } else {
    element.style[property] = openValue;
  }
}

/* Udvidet menufunktioner */
function toggleMenu() {
  const menu = document.querySelector('.menu-overlay');
  const accountMenu = document.querySelector('.account-menu-overlay');
  toggleElement(menu, menu.style.left === MENU_OPEN_LEFT, MENU_CLOSED_LEFT, MENU_OPEN_LEFT, 'left');
  if (menu.style.left === MENU_OPEN_LEFT && accountMenu.style.right === MENU_OPEN_RIGHT) {
      accountMenu.style.right = MENU_CLOSED_RIGHT;
  }
}

function toggleAccountMenu() {
  const accountMenu = document.querySelector('.account-menu-overlay');
  const menu = document.querySelector('.menu-overlay');
  toggleElement(accountMenu, accountMenu.style.right === MENU_OPEN_RIGHT, MENU_CLOSED_RIGHT, MENU_OPEN_RIGHT, 'right');
  if (accountMenu.style.right === MENU_OPEN_RIGHT && menu.style.left === MENU_OPEN_LEFT) {
      menu.style.left = MENU_CLOSED_LEFT;
  }
}
