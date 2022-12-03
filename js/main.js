// Swiper : Gallery

var Swiper = new Swiper(".galleryswiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
}); 



// Responsive navigation menu toggle : Navbar

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open')

});