const mobileMenu = document.querySelector('#mobile');
const menu = document.querySelector('.navMenu');

mobileMenu.addEventListener('click', function() { 
    menu.classList.toggle('active');
});