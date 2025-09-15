// User Location 

const options = {
    enableHighAccuracy: true, 
    timeout: 5000,           
    maximumAge: 0            
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

    // Passed the args to get correct coordinates 
    getWeatherData(latitude, longitude)

    getCityName(latitude,longitude)

}

async function getCityName(lat,lon) {

    try{
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`);
           const data = await response.json();
           console.log(data)
    }catch(err){
        console.log(err)
    }
    
}

// Error Handling 
function error(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


const getUserlocation = document.querySelector(".location-and-city");
const cityName = document.querySelector('city-name');

getUserlocation.addEventListener('click', () => {
    getLocation()
    console.log('hello')
})

// Weather API Data
async function getWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`);
        const data = await response.json();
        
        console.log(lat)
        console.log(lon)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}





