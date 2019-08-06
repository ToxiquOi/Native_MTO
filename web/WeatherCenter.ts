import axios from 'axios';
import CurrentWeatherInfo from "../component/currentWeatherInfo/CurrentWeatherInfo";
import {number} from "prop-types";

const urlWeek = 'https://api.openweathermap.org/data/2.5/forecast?q=';
const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?q=';
const appid = '&appid=143e4c3e59299e4a8c8bb745ea0ddec4';
const unit = '&units=metric';

export interface AllWeatherInfo {
    cloud: {
        all: number
    },
    dt: number,
    dt_txt: string,
    main: {
        grnd_level: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_kf: number,
        temp_max: number,
        temp_min: number,
    },
    sys: {
        pod: "d"
    },
    weather: Weather[],
    wind: {
        deg: number,
        speed: number,
    }

}

export interface CurrentWeather {
    coord: {
        lon: number,
        lat: number,
    },
    weather: Weather[],
    base: string,
    main: {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number,
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
    },
    clouds: {
        all: number,
    },
    dt: number,
    sys:{
        type: number,
        id: number,
        message: number,
        country: string,
        sunrise: number,
        sunset: number,
    },
    id: number,
    name: string,
    cod: number,
}

export interface Weather {
    description: string,
    icon: string,
    id: number,
    main: string,
}

export class WeatherCenter {

    static getCityWeekWeather(city: string = 'strasbourg') {
        city = city.toLowerCase();
        return axios.get(urlWeek + city + unit + appid).then( response => {
            return response.data.list;
        }).catch(error => console.warn('get week weather: ', error));
    }

    static getCurrentCityWeather(city: string) {
        city = city.toLowerCase();
        return axios.get(urlCurrent + city + unit + appid).then( response => {
            return response.data;
        }).catch(error => console.warn('get current weather: ', error));
    }
}
