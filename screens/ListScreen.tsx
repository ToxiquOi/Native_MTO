import React, { Component } from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions, Animated, ListView, FlatList} from 'react-native';
import {WeatherCenter, AllWeatherInfo} from "../web/WeatherCenter";
import Colors from "../constants/Colors";
import InfoRow from "../component/infoRow/InfoRow";

interface Props {
    navigation
}

interface State {
    isLoading: boolean,
    city: string,
    report
}

export default class ListScreen extends Component<Props, State> {

    state: State = {
        city: 'strasbourg',
        report: null,
        isLoading: true
    };

    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo ${navigation.state.params.city}      `,
        }
    };

    constructor(props) {
        super(props);
        this.queryCityWeather = this.queryCityWeather.bind(this);
    }

    queryCityWeather() {
        WeatherCenter.getCityWeekWeather(this.state.city).then(report => {
            this.setState((state: State) => {
                state.isLoading = false;
                state.report = report;
                return state;
            });
        });
    }

    componentWillMount(): void {
        this.setState( (state: State) => {
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
        if(this.state.isLoading) {
            return <ActivityIndicator style={style.activity} size={"large"} color={Colors.tintColor} />
        }
        else {
            return (
                <View style={{backgroundColor: 'gray'}}>
                    <FlatList data={weathersInfos} keyExtractor={((item, index) => index.toString())} renderItem={({item}) => <InfoRow weatherInfo={item}/>}/>
                </View>
            );
        }
    }
}

const style = StyleSheet.create({
    activity: {
        height: Dimensions.get("window").height / 2,
    }
});
