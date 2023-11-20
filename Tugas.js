Selection.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttibute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
        });
    }
});

let header = document.querySelector('header');

header.classList.tonggle('sticky', window.scrollY > 100);

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.tonggle('bx-x');
    navbar.classList.tonggle('active');
};

ScrollRevel({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollRevel1().reveal('.home-content, .heading', {origin:'top'});
ScrollRevel1().reveal('.home-img, .servises-container, .portopolio-box, .contact from', {origin: 'bottom'});
ScrollRevel1().reveal('.home-content h1, about-img', {origin: 'left'});
ScrollRevel1().reveal('home-content p, .about-content', {origin: 'right'});
