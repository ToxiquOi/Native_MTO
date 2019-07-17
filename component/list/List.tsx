import React, { Component } from 'react';
import {Text, ProgressBarAndroid, NativeSyntheticEvent, NativeTouchEvent} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import {WeatherCenter} from "../../web/WeatherCenter";
import AppLoading from "expo/build/launch/AppLoading";

interface Props {

}

interface State {
    isLoading: boolean,
    city: string,
    report
}

export default class List extends Component<Props, State> {

    state: State = {
        city: '',
        report: null,
        isLoading: true
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo de la ville de ${navigation.state.params.city}`,
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
        const report = JSON.stringify(this.state.report);
        console.log('stringify', report);
        if(this.state.isLoading) {
            return // TODO: loading bar for wait API response
        }
        else {
            return <Text>{report}</Text>
        }
    }
}
