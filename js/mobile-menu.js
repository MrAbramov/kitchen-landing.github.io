const mobileMenu = document.querySelector('#mobile-menu');
const btnMenu = mobileMenu.querySelector('.btn-mobile-menu');
const mobileMenuBody = mobileMenu.querySelector('.mobile-menu-body');

function menuToggler() {
    mobileMenu.classList.toggle('active');
}

mobileMenuBody.addEventListener('click', menuToggler);
btnMenu.addEventListener('click', menuToggler)
