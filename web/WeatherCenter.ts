import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
const appid = '&appid=143e4c3e59299e4a8c8bb745ea0ddec4'

export class WeatherCenter {

    static getWeatherFromCityName(city: string = 'strasbourg') {
        city = city.toLowerCase();
        return axios.get(url + city + appid)
            .then( response => {
                console.log('query api', response);
                return response.data;
            }).catch(error => console.warn(error));
    }
}
