import React, {Component} from 'react';
import {StyleSheet, View, Button, TextInput} from "react-native";
import Colors from "../constants/Colors";


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

export default class HomeScreen extends Component {

    static navigationOptions = (params) => {
        return {
            title: 'Rechercher une ville'
        }
    };

    state = {
        city: 'Strasbourg'
    };

    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this);
    }

    submit() {
        // @ts-ignore
        this.props.navigation.navigate('Result', {
            city: this.state.city
        });
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
                <Button title={'search'} onPress={this.submit} color={Colors.tintColor}/>
            </View>
        );
    }
}
