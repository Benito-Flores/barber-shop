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

// adding and removing hover/tab over color to links

const notCurrentPages = document.querySelectorAll('.nav-link');
const currentPage = document.querySelector('.current-link');

notCurrentPages.forEach(link => {
  link.addEventListener('mouseover', ()=> {
    currentPage.classList.remove('current-link');
  });

  link.addEventListener('mouseout', ()=> {
    currentPage.classList.add('current-link');
  });

  link.addEventListener('focus', ()=> {
    currentPage.classList.remove('current-link');
  });

  link.addEventListener('blur', ()=> {
    currentPage.classList.remove('current-link');
  });
});