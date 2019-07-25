import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {AllWeatherInfo, WeatherCenter} from "../../web/WeatherCenter";
import Colors from "../../constants/Colors";

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
            state.iconDescription = this.props.weatherInfo.weather[0].icon;

            return state
        });
    }

    render() {
        const hours = this.state.hours;
        const date = this.state.date;
        const tempMax = this.state.tempMax;
        const tempMin = this.state.tempMin;


        return (
            <View style={style.mainContainer}>
                <View style={style.title}>
                    <Text style={{marginLeft: 3}}>le { date } à { hours }</Text>
                </View>
                <View style={style.subContainer}>
                    <Image style={style.image} source={{uri: `http://openweathermap.org/img/wn/${this.state.iconDescription}@2x.png`}}/>
                    <View style={style.tempContainer}>
                        <Text>Maximum: {tempMax}°C</Text>
                        <Text>Minimum: {tempMin}°C</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: {
        height: 70,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.row,
        borderWidth: 1,
        borderColor: "transparent",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        borderColor: 'transparent',
        backgroundColor: '#eddba7',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignContent: "center"
    },
    tempContainer: {
        flex: 1,
        flexDirection: "column",
        marginTop: 3,
        marginLeft: "50%"
    },
    image: {
        marginBottom: 1,
        height: 50,
        width: 50,
        backgroundColor: 'transparent'
    },
    title: {
        backgroundColor: '#65adff',
        width: "100%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
});
