const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

//Highlight tab when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const aboutMenu = document.querySelector('#about-page')
    const experienceMenu = document.querySelector('#experience-page')
    const projectMenu = document.querySelector('#projects-page')
    let scrollPos = window.scrollY //returns Y coordinate of Y cordinate of top edge of current viewport

    if (window.innerWidth > 960 && scrollPos < 600) {
        aboutMenu.classList.add('highlight')
        experienceMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2400) {
        aboutMenu.classList.remove('highlight')
        experienceMenu.classList.add('highlight')
        projectMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 3400) {
        experienceMenu.classList.remove('highlight')
        projectMenu.classList.add('highlight')
        return
    } else if ((elem && window.innerWidth > 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//Close Mobile Menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);