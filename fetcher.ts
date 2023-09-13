import axios from 'axios';
import { Weather } from './weather';

export class WeatherFetcher {
    private readonly apiKey: string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async fetchWeather(cityName: string): Promise<Weather> {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`, { validateStatus: () => true });
        if (response.data.cod !== 200) {
            throw new Error(response.data.message);
        }

        return {
            general: response.data.weather[0].main,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity
        }
    }
}