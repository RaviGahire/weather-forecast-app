import { getWeatherData } from "./weatherData.js";
import { getCityName } from "./weatherData.js";

// User Location 
const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 500000
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
        alert('Geolocation is not supported by this browser.')
    }
}
function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    //passed to get cityname using coordinates
    getCityName(latitude, longitude)
    // Passed args to the get correct coordinates of user
    getWeatherData(latitude, longitude)


}


// Error Handling 
function error(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('"User denied the request for Geolocation"')
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            alert("The request to get user location timed out.")
            break;
    }
}

//Exported 
export { getLocation as userLocation }

