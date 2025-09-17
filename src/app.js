
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


const currDay = document.querySelector('.day')
const currDate = document.querySelector('.date')
const currTime = document.querySelector('.time')
// Current day date and time 
const today = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayName = days[today.getDay()];
currDay.innerText = dayName

const date = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`
currDate.innerText = date


const time = `${today.getHours()}:${today.getMinutes()}`
currTime.innerText = time


// Widget icon and background images object

const weatherAssets = {
    0: { // Clear sky
        label: "Clear Sky",
        icon: "/assets/icons/sun-icon.svg",
        bgImg: "https://imgs.search.brave.com/ASEfzht0xmly47hykU06hqSFNJhaX3UFXF2l--fGW9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NzgyNzEyOC9waG90/by9sYXduLWJ5LXNl/YS1hdC1zdW5zZXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW5lZjllVGVoNVo2/RXRfa2dDblhuc19s/WER5ZnYtenZ2MXB6/Zkx6QlhBbUU9"
    },
    1: { // Mainly clear
        label: "Mainly Clear",
        icon: "/assets/icons/sun-icon.svg",
        bgImg: "https://imgs.search.brave.com/ASEfzht0xmly47hykU06hqSFNJhaX3UFXF2l--fGW9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NzgyNzEyOC9waG90/by9sYXduLWJ5LXNl/YS1hdC1zdW5zZXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW5lZjllVGVoNVo2/RXRfa2dDblhuc19s/WER5ZnYtenZ2MXB6/Zkx6QlhBbUU9"
    },
    2: { // Partly cloudy
        label: "Partly Cloudy",
        icon: "/assets/icons/117.svg",
        bgImg: "https://imgs.search.brave.com/ZjnPZFGjKW9jfKtIULPOzML5hqUP0zIBw40achpGJJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzM0LzQzLzY5/LzM2MF9GXzE1MzQ0/MzY5NTRfUm5tZE1W/Q2RoZWdMRnVGVVoy/RVhMWDdhQ1VrTHB1/MG0uanBn"

    },
    3: { // Overcast
        label: "Overcast",
        icon: "/assets/icons/308.svg",
        bgImg: "https://imgs.search.brave.com/EJT1nP_ur82Y7rDCAITGNZyByM5kb4zAOZiDFIMY4ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzYz/N2NmNzI3M2JiYjdm/N2QzMjQ4NGU0My8x/NzIwNzE0MTk5MDk2/LTQyUTQ4UkNTTE9H/TFlKSUdHM0g5L3By/ZXZpZXctZnJlZS1z/a3ktYmFja2dyb3Vu/ZC1vdmVyY2FzdC1z/dG9jay1waG90by1n/bGVubi1tZWxpbmct/MDAwMi5qcGc"
    },
    45: { // Fog
        label: "Fog",
        icon: "/assets/icons/weather-2.svg",
        bgImg: "https://imgs.search.brave.com/Pa-Jr6qKA8oM0AbaF95hlzKe7UP2qwk7pMMvqJto744/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/NDk3OTQ3Mi9waG90/by9mb2dneS1tb3Vu/dGFpbi1yb2FkLXRo/cm91Z2gtZGVuc2Ut/Zm9yZXN0LXRlbmVy/aWZlLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1Lbi0yUzRfUGRi/aVd2WFBuaW5Rdkdl/Vnh6R2I3dVlXS3VM/ampoOG9Sejc4PQ"
    },
    48: { // Depositing rime fog
        label: "Rime Fog",
        icon: "/assets/icons/weather-2.svg",
        bgImg: "https://imgs.search.brave.com/J4vBMh38L4U6TBXm5R5qQkJcg3X2uVs5Opv1pcHypX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTM0/MjkyMDMvcGhvdG8v/d2ludGVyLWluLWhv/bGxhbmQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVRiN25t/blBrOGNxWGgtU1RT/SXVaZk5VNTREeXJ1/azdxMHVlWkVDdFdF/eU09"
    },
    51: { // Light drizzle
        label: "Light Drizzle",
        icon: "/assets/icons/176 179 293 299 353.svg",
        bgImg: "https://imgs.search.brave.com/AiormdJ544MNxj6Y_XogLrVmXN5WkZFzNtoXdK4YUEs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9saWdo/dC1yYWluLWNsb3Vk/eS13ZWF0aGVyLTIy/OTczMDAxNC5qcGc"
    },
    61: { // Rain
        label: "Rain",
        icon: "/assets/icons/308.svg",
        bgImg: "https://imgs.search.brave.com/pxWjIJQ5jp2aaiMvcYJpphao8MypjFyb_P7BHPRgiyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/ZWF0aGVyLWVmZmVj/dHMtY29tcG9zaXRp/b25fMjMtMjE0OTg1/MzI5NS5qcGc_c2Vt/dD1haXNfaHlicmlk"
    },
    71: { // Snow fall
        label: "Snowfall",
        icon: "/assets/icons/weather-4.svg",
        bgImg: "https://imgs.search.brave.com/_TtVY-YItzBcT8MTqt87mYFJab5lZT7X3kr1_-vplJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIz/MDE1MzI1L3ZlY3Rv/ci9jaHJpc3RtYXMt/dmlsbGFnZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NWxv/LUZrR2dRTWhlR01v/T3psSVJNQmM4R0Qx/UVlZZksyNEUtQ210/TGEtbz0"
    },
    80: { // Rain showers
        label: "Rain Showers",
        icon: "/assets/icons/cloud-rain-icon.svg",
        bgImg: "https://imgs.search.brave.com/FDCevWpgC9pxzUDcUgNdy7N9y2Q5jUhZci0l4MQoGJw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjkx/NzYxNjQ2L3Bob3Rv/L3dvbWFuLWhhbmQt/d2l0aC11bWJyZWxs/YS1pbi10aGUtcmFp/bi53ZWJwP2E9MSZi/PTEmcz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/T2lnZHdYNmhwQ0dN/aUVfMTdValJSRXpf/bnpXbERRQ3prcFk1/TDBicV9NMD0"
    },
    95: { // Thunderstorm
        label: "Thunderstorm",
        icon: "/assets/icons/weather-4.svg",
        bgImg: "/assets/images/thunderstorm-bg.jpg"
    },
    99: { // Thunderstorm with hail
        label: "Thunderstorm with Hail",
        icon: "/assets/icons/weather-4.svg",
        bgImg: "https://imgs.search.brave.com/lgmX3nH79v9DoBJI-F-rBkiy7HGGnRn2lk7OAsjq8KI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb3V0/aGVybnBsYWluc3Bo/b3RvZ3JhcGh5LmNv/bS9jZG4vc2hvcC9m/aWxlcy9kYXJrbmVz/cy1mYWxscy1saWdo/dG5pbmctc3Rvcm0t/dGh1bmRlcnN0b3Jt/LXdlYXRoZXItbmln/aHQta2Fuc2FzLW1v/b2R5LWxhbmRzY2Fw/ZS1waG90b2dyYXBo/eS1wcmludC5qcGc_/dj0xNzU2MTk4NTQw/JndpZHRoPTUzMw"
    }
};
