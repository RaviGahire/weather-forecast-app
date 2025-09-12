
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