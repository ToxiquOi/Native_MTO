import React, {Component, Fragment} from 'react'
import {TextInput, StyleSheet, Button, View} from "react-native";
import Colors from "../../constants/Colors";
import {NavigationScreenProp} from "react-navigation";

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
    navigation?: NavigationScreenProp<any, any>
}

interface State {
    city: string
}

export default class Search extends Component<Props, State> {
    state = {
        city: 'Erstein'
    };

    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this);
    }

    submit() {
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
