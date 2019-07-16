import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, Button, TextInput, NativeSyntheticEvent, NativeTouchEvent} from "react-native";
import Search from "../component/search/Search";
import Axios from 'axios';
import {WeatherCenter} from "../web/WeatherCenter";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: "center"
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1
    },
});

interface Props {

}

interface State {
    city: string
}

export default class HomeScreen extends Component<Props, State> {

    static navigationOptions = (params) => {
        return {
            title: 'Rechercher une ville'
        }
    };

    state: State = {
        city: 'Strasbourg'
    };

    queryCity(event: NativeSyntheticEvent<NativeTouchEvent>) {
        this.props.navigation.navigate('Result', {city: this.state.city});
    }

    constructor(props) {
        super(props)

        this.queryCity = this.queryCity.bind(this);
    }

    handleState(city: string) {
        return this.setState((state: State) => {
            state.city = city;

            console.log('set: ' + state.city);
            return state;
        });
    }

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.city}
                    onChangeText={city => this.handleState(city)}
                    style={styles.input}
                    underlineColorAndroid={'transparent'}
                />
                <Button title={'search'} onPress={this.queryCity}/>
            </View>
        );
    }
}
