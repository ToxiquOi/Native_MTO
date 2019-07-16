import React, { Component } from 'react';
import { Text, } from 'react-native'

export default class List extends Component {

    static navigationOptions = (params) => {
        return {
            title: `Météo de la ville de ${params.city}`,
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Text>Bonjours</Text>
        );
    }
}
