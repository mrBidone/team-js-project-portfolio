const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  mobMenu: document.querySelector('[data-menu]'),
  dropdownMenuBtn: document.querySelector('button.dropbtn'),
  menu: document.getElementById('dropdown'),
  mobMenuLinks: document.querySelector('.mobile-menu-nav-links-container'),
};

refs.openMenuBtn.addEventListener('click', handleHamburgerClick);
refs.mobMenu.addEventListener('click', handleMobMenuClick);
refs.dropdownMenuBtn.addEventListener('click', handleMenuBtnClick);

function handleHamburgerClick() {
  refs.mobMenu.classList.remove('is-hidden');
}

function handleMobMenuClick(event) {
  if (event.target.hasAttribute('data-menu-close')) {
    refs.mobMenu.classList.add('is-hidden');
  }
}

function handleMenuBtnClick() {
  refs.menu.classList.toggle('show');
}

window.onclick = function (event) {
  if (
    !event.target.matches('.dropbtn') &&
    refs.menu.classList.contains('show')
  ) {
    refs.menu.classList.remove('show');
  }
};
