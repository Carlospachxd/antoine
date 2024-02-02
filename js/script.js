
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.nav__menu');
    const navbarList = document.querySelector('.navbar ul');
    const navClose = document.querySelector('.nav__close');

    menuIcon.addEventListener('click', function () {
        navbarList.classList.toggle('open');
        menuIcon.style.display = 'none';
        navClose.style.display = 'block';
    });

    navClose.addEventListener('click', function () {
        navbarList.classList.remove('open');
        menuIcon.style.display = 'block';
        navClose.style.display = 'none';
    });
});
