import React, { Component, Fragment } from 'react';
import {Text, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import {WeatherCenter} from "../../web/WeatherCenter";
import Colors from "../../constants/Colors";

const style = StyleSheet.create({
   activity: {
        height: Dimensions.get("screen").height
   }
});

interface Props {

}

interface State {
    isLoading: boolean,
    city: string,
    report
}

interface AllWeatherInfo {
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

interface Weather {
    description: string,
    icon: string,
    id: number,
    main: string,
}

export default class List extends Component<Props, State> {

    state: State = {
        city: '',
        report: null,
        isLoading: true
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo de ${navigation.state.params.city}`,
        }
    };

    constructor(props) {
        super(props);
        this.queryCityWeather = this.queryCityWeather.bind(this);
    }

    queryCityWeather() {
        WeatherCenter.getWeatherFromCityName(this.state.city).then(report => {
            this.setState((state: State) => {
                state.isLoading = false;
                state.report = report;
                return state;
            });
        });
    }

    componentWillMount(): void {
        this.setState( (state: State) => {
            // @ts-ignore
            const params = this.props.navigation.state.params;
            state.city = params.city;
            state.isLoading = true;
            return state
        });

    }

    componentDidMount(): void {
        this.queryCityWeather();
    }

    render() {
        const weathersInfos: AllWeatherInfo[] = this.state.report;
        console.log('weather', weathersInfos);
        if(this.state.isLoading) {
            return <ActivityIndicator style={style.activity} size={"large"} color={Colors.tintColor} />
        }
        else {
            return (
                <Fragment>
                    {weathersInfos.map((weatherInfo: AllWeatherInfo, index) => {
                        return (
                            <Fragment key={index}>
                                <Text>{weatherInfo.main.temp_max}</Text>
                            </Fragment>
                        );
                    })}
                </Fragment>
            );
        }
    }
}
