import React, {Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Dimensions, Image} from "react-native";
import {CurrentWeather, WeatherCenter} from "../../web/WeatherCenter";
import Colors from "../../constants/Colors";
import moment from 'moment';

interface Props {
    city: string,
}

interface State {
    weather,
    isLoading: boolean,
    iconDescription: string

}

export default class CurrentWeatherInfo extends Component<Props, State> {

    state: State = {
        weather: null,
        isLoading: true,
        iconDescription: null
    };

    constructor(props) {
        super(props);

        this.queryCurrentWeather = this.queryCurrentWeather.bind(this)
    }

    queryCurrentWeather() {
        WeatherCenter.getCurrentCityWeather(this.props.city).then((result: CurrentWeather) => {
            console.log('result', result);
            this.setState((state: State) => {
                state.weather = result;
                state.isLoading = false;
                state.iconDescription = result.weather[0].icon;

                return state;
            })
        });
    }

    componentWillMount(): void {
        this.setState((state: State) => {
            state.isLoading = true;
            state.weather = null;
            state.iconDescription = null;

            return state;
        })
    }

    componentDidMount(): void {
        this.queryCurrentWeather();
    }

    render() {
        const weather: CurrentWeather = this.state.weather;
        const date = moment().format("DD-MM-YYYY");
        const hours = moment().format("HH:mm");

        console.log('hours', hours);
        console.log('date', date);
        if(this.state.isLoading == true) {
            return <ActivityIndicator style={style.activity} size={"small"} color={Colors.tintColor} />
        }
        else {
            return (
                <View style={style.container}>
                    <View style={style.title}>
                        <Text style={style.titleText}>Nous somme le { date } et il ai { hours }</Text>
                    </View>
                    <View style={style.body}>
                        <View style={style.imageContainer}>
                            <View style={style.temp}>
                                <Text>Temp max:</Text>
                                <Text>{weather.main.temp_max}°C</Text>
                            </View>
                            <Image style={style.image} source={{uri: `http://openweathermap.org/img/wn/${this.state.iconDescription}@2x.png`}}/>
                            <View style={style.temp}>
                                <Text>Temp min:</Text>
                                <Text>{weather.main.temp_min}°C</Text>
                            </View>
                        </View>
                        <View style={style.infoContainer}>
                            <View style={style.info}>
                                <View style={style.infoTitle}>
                                    <Text>INFO</Text>
                                </View>
                                <View style={style.infoContent}>
                                    <Text style={style.infoContentTitle}>Temp max:</Text>
                                    <Text>{weather.main.temp_max}°C</Text>
                                </View>
                                <View style={style.infoContent}>
                                    <Text style={style.infoContentTitle}>Temp min:</Text>
                                    <Text>{weather.main.temp_min}°C</Text>
                                </View>
                            </View>
                            <View style={style.separator}/>
                            <View style={style.info}>
                                <View style={style.infoTitle}>
                                    <Text>Petit Conseil</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
    }
}

const style = StyleSheet.create({
    activity: {
        height: Dimensions.get("window").height / 2,
    },
    container: {
        height: 600,
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 5
    },
    title: {
        width: '100%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: Colors.cardTitleBackground,
        alignContent: "center",
        justifyContent: "center",
    },
    titleText: {
        textAlignVertical: "center",
        textAlign: "center",
    },
    body: {
        height: "100%",
        width: "100%",
        backgroundColor: Colors.cardBackground
    },
    temp: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: "33%",
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: Colors.cardBackground
    },
    image: {
        marginBottom: 1,
        height: 100,
        width: "33%",
        backgroundColor: 'transparent'
    },
    infoContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.cardBackground,
        borderTopWidth: 1,
    },
    info: {
        width: '50%',
        alignItems: 'center',
    },
    infoTitle: {
        width: '100%',
        borderBottomWidth: 1,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: Colors.cardTitleBackground
    },
    infoContentTitle: {
        borderBottomWidth: 1
    },
    infoContent: {
        width: "100%",
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginTop: 2,
    },
    separator: {
        borderLeftWidth: 1,
        height: '100%'
    }
});
