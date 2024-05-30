const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector('.nav_links')

//Handle Hmaburger Click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav_links_hidden')
    hamburger.classList.toggle('fa-times')
    hamburger.classList.toggle('fa-bars')
})