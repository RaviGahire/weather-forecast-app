import { citydata } from "./indianCities.js";
import { userLocation } from "./userLocation.js";


const mycity = document.querySelector('.city-name')
const myState = document.querySelector('.state-name')


userLocation() // Call to the location function 

// Coordinates match with the userlocation lat,lon to get city name. #Improved Function With
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






// Weather API Data
export async function getWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=3`);
        const data = await response.json();
        console.log(data  )
        console.log('Geolocation Function', lat)
        console.log('Geolocation Function', lon)
        // console.log('API DATA', data)
    } catch (err) {
        console.log(err)
    }
}






