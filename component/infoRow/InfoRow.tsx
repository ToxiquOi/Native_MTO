import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {AllWeatherInfo} from "../../web/WeatherCenter";
import Colors from "../../constants/Colors";
import {MeteoImageSelector} from "../../services/meteoImageSelector/MeteoImageSelector";



interface Props {
    weatherInfo: AllWeatherInfo
}

interface State {
    date: string,
    hours: string,
    tempMin: number,
    tempMax: number,
    humidity: number,
    iconDescription: string,
}

export default class InfoRow extends Component<Props, State> {

    state = {
        date: '',
        hours: '',
        tempMin: 0.0,
        tempMax: 0.0,
        humidity: 0,
        iconDescription: '',
    };

    constructor(props) {
        super(props);
    }

    formatDateAndHours() {
        const dateHours: string[] = this.props.weatherInfo.dt_txt.split(' ');
        let date: any = dateHours[0].split('-');
        let hours: any = dateHours[1].split(':');

        date = `${date[2]}/${date[1]}/${date[0]}`;
        hours = `${hours[0]}:${hours[1]}`;

        return {date:date, hours:hours};
    }

    componentWillMount(): void {
        const {date, hours} = this.formatDateAndHours();

        this.setState((state: State) => {
            state.date = date;
            state.hours = hours;
            state.humidity = this.props.weatherInfo.main.humidity;
            state.tempMax = this.props.weatherInfo.main.temp_max;
            state.tempMin = this.props.weatherInfo.main.temp_min;
            state.iconDescription = this.props.weatherInfo.weather[0].description;

            return state
        });
    }

    render() {
        const imageKey = MeteoImageSelector.getPathImage(this.state.iconDescription);
        const path = `../../assets/${imageKey}.png`;
        console.log('path', path);

        return (
            <View style={style.mainContainer}>
                <View style={style.subContainer}>
                    <Text>{this.state.date}</Text>
                    <Text>{this.state.hours}</Text>
                </View>
                <View style={style.subContainer}>
                    <Text>{this.state.tempMax}°C</Text>
                    <Text>{this.state.tempMin}°C</Text>
                </View>
                <Image style={style.image} source={{uri: path}}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.row,
        borderWidth: 1,
        borderColor: 'grey'
    },
    subContainer: {
        flex: 1,
        width: 5
    },
    image: {
        height: 10,
        width: 10
    }
});
