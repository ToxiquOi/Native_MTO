import React, { Component } from 'react';
import { Text, } from 'react-native'

interface Props {

}

interface State {
    city: string,
    report: object | null
}

export default class List extends Component<Props, State> {

    state: State = {
        city: '',
        report: null
    }

    static navigationOptions = (params) => {
        return {
            title: `Météo de la ville de ${this.state.city}`,
        }
    };

    constructor(props) {
        super(props);
        console.log('state', this.props.navigation)
        this.setState( (state: State) => {
            state.city = this.props.navigation.state.params.city;

            return state
        })
    }

    render() {
        return (
          <Text>Bonjours</Text>
        );
    }
}
