export class MeteoImageSelector {

    static getPathImage(name) {
        switch (name) {
            case 'clear sky':
                return 'clear';

            case 'light rain':
                return 'light_rain';

            case 'overcast clouds':
                return 'cloud';

            case 'broken clouds':
                return 'cloud';

            case 'few clouds':
                return 'cloudy';

            case 'scattered clouds':
                return 'cloudy';

            default:
                return null;
        }
    }
}

