import { citydata } from "./indianCities.js";
import { userLocation } from "./userLocation.js";
import { codes } from "./weatherCodes.js";
import { weatherAssets as assets } from "./app.js";

const mycity = document.querySelector('.city-name')
const myState = document.querySelector('.state-name')


userLocation() // Call to the location function 



// Coordinates match with the userlocation lat,lon to get city name. #Improved Function 
export async function getCityName(lat, lon) {
    const a = Math.floor(lat);
    const b = Math.floor(lon);

    const foundCity = citydata.find(city => Math.floor(city.lat) === a && Math.floor(city.lon) === b);

    if (foundCity) {
        mycity.innerText = foundCity.city;
        myState.innerText = foundCity.state
        // console.log(foundCity.city);
    } else {
        mycity.innerText = 'City Not Found in Data'
    }
}
// Weathe Widget section
const currTemp = document.querySelector('.current-temp');
const weather_type = document.querySelector('.weather-type')
const dwu_container = document.querySelector('.dwu-container')
const weatherImageContainer = document.querySelector('.weather-image')

// Weather API Data
export async function getWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await response.json();
        currTemp.innerText = data.current_weather.temperature

        // Weather Code 
        const apiCode = data.current_weather.weathercode;
        const entries = Object.entries(codes);
        entries.forEach(([keys, value]) => {
            if (Number(keys) === apiCode) {
                weather_type.innerText = value
            }
        })

        // Widget bg-img and icon
        const widgetAssets = Object.entries(assets);
        widgetAssets.forEach(([keys, val]) => {
            if (Number(keys) === apiCode) {
                dwu_container.style.backgroundImage = `url(${val.bgImg})`;
                weatherImageContainer.innerHTML = `<img src="${val.icon}" alt="weathertype-icon">`
            }
        })

        // For lat long
        console.log('Geolocation Function', lat)
        console.log('Geolocation Function', lon)
        console.log(data)
        // console.log('API DATA', data)

    } catch (err) {
        console.log(err)
    }
}






