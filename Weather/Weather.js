const axios = require('axios');


//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e8338235a6acf0214640c0907d538580&units=metric


// my api key of weather
//faf35a81fc9e719d649a63607407450a
const getClima = async(lat, lon) => {
    let uri = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e8338235a6acf0214640c0907d538580&units=metric`
        // console.log(uri);
    let WeatherReponse = await axios.get(uri);

    let response = {
        temp: WeatherReponse.data.main.temp,
        Min: WeatherReponse.data.main.temp_min,
        Max: WeatherReponse.data.main.temp_max
    };

    return response;

}


module.exports = { getClima }