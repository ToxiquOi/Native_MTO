import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import Search from "../component/search/Search";
import {NavigationScreenProp, NavigationStackScreenOptions} from "react-navigation";
import CurrentWeatherInfo from "../component/currentWeatherInfo/CurrentWeatherInfo";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
});

interface Props {
    navigation?: NavigationScreenProp<any, any>,
}

interface State {
    city: string
}

export default class HomeScreen extends Component<Props, State> {

    static navigationOptions = (params): NavigationStackScreenOptions => {
        return {
            title: 'Rechercher une ville',
        }
    };

    state = {
        city: 'Erstein'
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Search navigation={this.props.navigation}/>
                <FlatList data={[this.state.city]}
                          keyExtractor={((item, index) => index.toString())}
                          renderItem={({item}) => <CurrentWeatherInfo city={item}/>}
                />
            </View>
        );
    }
}
