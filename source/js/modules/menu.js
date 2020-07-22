export default () => {
  const header = document.querySelector(`.js-header`);
  const menuToggler = document.querySelector(`.js-menu-toggler`);
  const menuLinks = document.querySelectorAll(`.js-menu-link`);

  const hideMenu = () => {
    header.classList.remove(`page-header--menu-opened`);
    document.body.classList.remove(`menu-opened`);
  };
  const openMenu = () => {
    header.classList.add(`page-header--menu-opened`);
    document.body.classList.add(`menu-opened`);
  };

  if (menuToggler) {
    menuToggler.addEventListener(`click`, () => {
      if (header.classList.contains(`page-header--menu-opened`)) {
        hideMenu();
      } else {
        openMenu();
      }
    });
  }

  menuLinks.forEach((menuLink) => menuLink.addEventListener(`click`, () => {
    if (window.innerWidth < 1025) {
      hideMenu();
    }
  }));
};
