const menuMobile = document.querySelector('.header-menuOpener');

function openMenu() {
  const menuNav = document.querySelector('.header-menu');
  menuNav.classList.toggle('openMobile');
}

menuMobile.addEventListener('click', openMenu);
