import Axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
const appid = '&appid=143e4c3e59299e4a8c8bb745ea0ddec4'

export class WeatherCenter {

    static getWeatherFromCityName(city: string = 'strasbourg') {
        city = city.toLowerCase();
        Axios.get(url + city + appid, {
        }).then( response => {
            console.log(response);
        }).catch(reason => console.warn(reason));
    }
}
