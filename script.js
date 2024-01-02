// mobile navigation
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const nav = document.querySelector('.nav-container');

openNav.addEventListener('click', ()=> {
  nav.classList.add('open-navigation');
});

closeNav.addEventListener('click', ()=> {
  nav.classList.remove('open-navigation');
});