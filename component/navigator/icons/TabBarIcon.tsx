import React, { Component, Fragment } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from "../../../constants/Colors";


export default class TabBarIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <MaterialIcons
                    // @ts-ignore
                    name={this.props.name}
                    size={26}
                    style={{ marginBottom: -3 }}
                    // @ts-ignore
                    color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}/>
            </Fragment>
        )
    }
}
