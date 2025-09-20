import { citydata } from "./indianCities.js";
import { userLocation } from "./userLocation.js";
import { codes } from "./weatherCodes.js";
import { weatherAssets as assets } from "./app.js";
import { today as hr } from "./app.js";

const mycity = document.querySelector(".city-name");
const myState = document.querySelector(".state-name");

userLocation(); // Call to the location function

// Coordinates match with the userlocation lat,lon to get city name. #Improved Function
export async function getCityName(lat, lon) {
  const a = Math.floor(lat);
  const b = Math.floor(lon);

  const foundCity = citydata.find(
    (city) => Math.floor(city.lat) === a && Math.floor(city.lon) === b
  );

  if (foundCity) {
    mycity.innerText = foundCity.city;
    myState.innerText = foundCity.state;
    // console.log(foundCity.city);
  } else {
    mycity.innerText = "City Not Found in Data";
  }
}
// Weathe Widget section
const currTemp = document.querySelector(".current-temp");
const weather_type = document.querySelector(".weather-type");
const dwu_container = document.querySelector(".dwu-container");
const weatherImageContainer = document.querySelector(".weather-image");
const GMT_time = document.querySelector(".current-time");
const realFeel = document.querySelector(".real-feel");
const windSpeed = document.querySelector(".wind");
const cor = document.querySelector(".chance-of-rain");
const UVIndex = document.querySelector(".UV-index");

// 24hr forecast
const forecastTemp = document.querySelectorAll(".forecast-temp");

// Weather API Data
export async function getWeatherData(lat, lon) {

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto`)
  .then(res => res.json())
  .then(data => {
    const next6Days = data.daily.time.map((date, i) => ({
      date,
      max: data.daily.temperature_2m_max[i],
      min: data.daily.temperature_2m_min[i],
      rain: data.daily.precipitation_sum[i],
      code: data.daily.weathercode[i] // weather condition
    })).slice(1, 7); // skip today, take next 6 days

    console.log('from next 6 day',next6Days);
  });





  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,precipitation_probability,apparent_temperature,uv_index&forecast_days=1&daily=weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`
    );
   
    const data = await response.json();
    currTemp.innerText = data.current_weather.temperature;
    GMT_time.innerText = data.current_weather.time || "00:00";
    windSpeed.innerHTML = `<span>${data.current_weather.windspeed}km/hr</span>`;

    // Weather Code
    const apiCode = data.current_weather.weathercode;
    const entries = Object.entries(codes);
    entries.forEach(([keys, value]) => {
      if (Number(keys) === apiCode) {
        weather_type.innerText = value;
      }
    });

    // Widget bg-img and icon
    const widgetAssets = Object.entries(assets);
    widgetAssets.forEach(([keys, val]) => {
      if (Number(keys) === apiCode) {
        dwu_container.style.backgroundImage = `url(${val.bgImg})`;
        weatherImageContainer.innerHTML = val.icon;
      }
    });

    // precipitation_probability = chance of rain %
    const chanceOfRain = data.hourly.precipitation_probability;
    const crData = Object.entries(chanceOfRain);
    crData.forEach(([keys, val]) => {
      if (+keys === hr.getHours()) {
        cor.innerHTML = `<span> ${val}%</span>`;
      }
    });

    // apparent_temperature feel likes
    const apprentTemp = data.hourly.apparent_temperature;
    const feelLike = Object.entries(apprentTemp);
    feelLike.forEach(([keys, val]) => {
      if (+keys === hr.getHours()) {
        realFeel.innerHTML = `<span>${val}&deg;</span>`;
      }
    });

    //UVindex
    let UV = data.hourly.uv_index;
    const UV_index = Object.entries(UV);
    UV_index.forEach(([keys, val]) => {
      if (+keys === hr.getHours()) {
        UVIndex.innerHTML = `<span>${val}</span>`;
      }
    });

    // 24hr forecast
    let nowTemp = document.querySelector(".forecast-temp-now");
    let threeAM = document.querySelector(".threeAM");
    let sixAm = document.querySelector(".sixAm");
    let nineAM = document.querySelector(".nineAm");
    let twelvePM = document.querySelector(".twelvePM");
    let threePM = document.querySelector(".threePM");
    let sixPM = document.querySelector(".sixPM");
    let ninePM = document.querySelector(".ninePM");
    Object.entries(data.hourly.temperature_2m).forEach(([keys, val]) => {
      // console.log(keys, val);
      if (+keys === hr.getHours()) {
        nowTemp.innerHTML = `<span> ${val}&deg</span>`;
      }
      if (keys === "3") {
        threeAM.innerHTML = `<span> ${val}&deg</span>`;
      }
      if (keys === "6") {
        sixAm.innerHTML = `<span> ${val}&deg</span>`;
      }
      if (keys === "9") {
        nineAM.innerHTML = `<span> ${val}&deg</span>`;
      }
      if (keys === "12") {
        twelvePM.innerHTML = `<span> ${val}&deg</span>`;
      }
      if (keys === "15") {
        threePM.innerHTML = `<span> ${val}&deg</span>`;
      }
      if (keys === "18") {
        sixPM.innerHTML = `<span> ${val}&deg</span>`;
      }
      if (keys === "21") {
        ninePM.innerHTML = `<span> ${val}&deg</span>`;
      }
    });

    // For lat long
    console.log("Geolocation Function", lat);
    console.log("Geolocation Function", lon);
    console.log(data);
    // console.log('API DATA', data)
  } catch (err) {
    console.log(err);
  }
}
