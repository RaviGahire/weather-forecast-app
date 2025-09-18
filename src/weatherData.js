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
const UVIndex = document.querySelector('.UV-index');

// Weather API Data
export async function getWeatherData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,precipitation_probability,apparent_temperature,uv_index&forecast_days=1&timezone=auto`
    );
    //`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,precipitation_probability&forecast_days=1&timezone=auto`;
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
        weatherImageContainer.innerHTML = `<img src="${val.icon}" alt="weathertype-icon">`;
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
    let UV = data.hourly.UV_index;
  


    // For lat long
    console.log("Geolocation Function", lat);
    console.log("Geolocation Function", lon);
    console.log(data);
    // console.log('API DATA', data)
  } catch (err) {
    console.log(err);
  }
}
