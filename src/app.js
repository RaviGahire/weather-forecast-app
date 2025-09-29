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
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header-small");
    navGroup.classList.remove("active");
  } else {
    header.classList.remove("header-small");
  }
});

const currDay = document.querySelector(".day");
const currDate = document.querySelector(".date");
const currTime = document.querySelector(".time");
// Current day date and time
export const today = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayName = days[today.getDay()];
currDay.innerText = dayName;

const date = `${today.getDate()}-${today.getMonth() + 1
  }-${today.getFullYear()}`;
currDate.innerText = date;

const time = `${today.getHours()}:${today.getMinutes()}`;
currTime.innerText = time;


// scroll cauresole
const forecastChart = document.querySelector('.forecast-chart');
const scrollAmount = 120;
 document.querySelector('.left-arrow').addEventListener('click', () => {
  forecastChart.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'

  })



})
document.querySelector('.right-arrow').addEventListener('click', () => {
  forecastChart.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });


})





