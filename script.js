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

// adding text over the image banner with hover

const imgBanner1 = document.querySelector('.img-banner-container-one');
const imgBanner2 = document.querySelector('.img-banner-container-two');
const imgBanner3 = document.querySelector('.img-banner-container-three');

const imgTxt1 = document.querySelector('.img-banner-txt-one');
const imgTxt2 = document.querySelector('.img-banner-txt-two');
const imgTxt3 = document.querySelector('.img-banner-txt-three');

imgBanner1.addEventListener('mouseover', ()=> {
  imgTxt1.classList.add('img-banner-txt-appear');
});
imgBanner2.addEventListener('mouseover', ()=> {
  imgTxt2.classList.add('img-banner-txt-appear');
});
imgBanner3.addEventListener('mouseover', ()=> {
  imgTxt3.classList.add('img-banner-txt-appear');
});

imgBanner1.addEventListener('mouseout', ()=> {
  imgTxt1.classList.remove('img-banner-txt-appear');
});
imgBanner2.addEventListener('mouseout', ()=> {
  imgTxt2.classList.remove('img-banner-txt-appear');
});
imgBanner3.addEventListener('mouseout', ()=> {
  imgTxt3.classList.remove('img-banner-txt-appear');
});