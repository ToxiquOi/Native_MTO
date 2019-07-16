import React, {Component, Fragment} from 'react'
import {TextInput, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default class Search extends Component {
    state = {
        text: ''
    };

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            text: 'strasbourg',
        })
    }

    handleState(text: string) {
        this.setState({text});
    }

    render() {
        return (
            <Fragment>
                <TextInput
                    value={this.state.text}
                    onChangeText={text => this.handleState(text)}
                    style={styles.input}
                    underlineColorAndroid={'transparent'}
                />
            </Fragment>
        );
    }
}
