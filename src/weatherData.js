import { cityData } from "./indianCities.js";
import { userLocation } from "./userLocation.js";


userLocation() // Call to the location function 

// Coordinates match with the userlocation lat,lon to get city name 
export async function getCityName(lat, lon) {
    try {
        cityData.forEach((cityName) => {
            // console.log(cityName.city)
            if (lat === cityName.lat & lon === cityName.lon) {
                console.log(cityName.city)
            }
        })
    }
    catch (err) {
        console.log(err)
    }


}

console.log(getCityName())


// Weather API Data
export async function getWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`);
        const data = await response.json();

        console.log('Geolocation Function', lat)
        console.log('Geolocation Function', lon)
        // console.log('API DATA', data)
    } catch (err) {
        console.log(err)
    }
}






