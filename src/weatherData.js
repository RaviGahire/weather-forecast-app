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



const currTemp = document.querySelector('.current-temp');
const weather_type = document.querySelector('.weather-type')


// Weather API Data
export async function getWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await response.json();
        currTemp.innerText = data.current_weather.temperature









      // For lat long
        console.log('Geolocation Function', lat)
        console.log('Geolocation Function', lon)
        console.log(data)
        // console.log('API DATA', data)
    } catch (err) {
        console.log(err)
    }
}






