const burger = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');
  const navItems = document.querySelectorAll('.nav__item');
  const body = document.querySelector('body');
  const shadowBurger = document.querySelector('.shadow_burger');
  
  function onClickBurger() {
    nav.classList.toggle('open');
    burger.classList.toggle('active');
    body.classList.toggle('hidden');
    shadowBurger.classList.toggle('enabled');
  }
  
  burger.addEventListener('click', onClickBurger);
  shadowBurger.addEventListener('click', onClickBurger);
  
  for (let navItem of navItems) {
    navItem.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.classList.remove('active');
      shadowBurger.classList.remove('enabled');
      body.classList.remove('hidden');
    });
  }
};

export default burger;