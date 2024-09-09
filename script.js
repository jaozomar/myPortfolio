const myNav = document.querySelector('.myNav');
const mobileMenu = document.querySelector('#mobile');
const menu = document.querySelector('.navMenu');

mobileMenu.addEventListener('click', function() { 
    myNav.classList.toggle('goDark');
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});