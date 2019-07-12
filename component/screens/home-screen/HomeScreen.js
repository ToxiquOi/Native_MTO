import React, {Component, Fragment} from 'react';
import Text from "react-native";

const style = StyleSheet.create({
    container: {
        textAlign: 'center',
        justifyContent: 'center',
    },

});

export default class HomeScreen extends Component {

    render() {
        return (
            <Fragment style={style.container}>
                <Text>
                    Home
                </Text>
            </Fragment>
        );
    }
}
