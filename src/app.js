
// Navigation menu btn
const hamburgerBtn = document.querySelector(".hamburger-menu-icon");
const closeBtn = document.querySelector(".close-menu-btn");
const navGroup = document.querySelector(".nav-group");


// Open menu
hamburgerBtn.addEventListener("click", () => {
    navGroup.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
    navGroup.classList.remove("active");
});

// Sticky Navbar
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('header-small');
        navGroup.classList.remove("active");
    } else {
        header.classList.remove('header-small');
    }
});


