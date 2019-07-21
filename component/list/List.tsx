import React, { Component, Fragment } from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Dimensions, Animated, ListView, FlatList} from 'react-native';
import {WeatherCenter, AllWeatherInfo} from "../../web/WeatherCenter";
import Colors from "../../constants/Colors";
import InfoRow from "../infoRow/InfoRow";

const style = StyleSheet.create({
   activity: {
        height: Dimensions.get("window").height / 2,
   }
});

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
    };

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
                <View >
                    <FlatList data={weathersInfos} keyExtractor={((item, index) => index.toString())} renderItem={({item}) => <InfoRow weatherInfo={item}/>}/>
                </View>
            );
        }
    }
}
