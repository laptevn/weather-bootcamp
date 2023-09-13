import { WeatherFetcher } from "./fetcher";

var readlineSync = require('readline-sync');

var cityName = readlineSync.question('City name? ');
const weatherFetcher = new WeatherFetcher(process.env.WEATHER_API_KEY as string);
weatherFetcher.fetchWeather(cityName)
    .then((forecast => {
        console.log(`The weather in ${cityName} is ${forecast.general}, with a temperature of ${forecast.temperature} degrees, wind speed of ${forecast.wind} km/h and humidity of ${forecast.humidity}%.`);
    }))
    .catch((error) => {
        console.error(error.message);
    });