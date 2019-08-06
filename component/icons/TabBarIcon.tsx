import React, { Component, Fragment } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from "../../constants/Colors";

interface Props {
    name: string,
    focused?: boolean
}

interface State {

}

export default class TabBarIcon extends Component<Props, State> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <MaterialIcons
                    name={this.props.name}
                    size={26}
                    style={{ marginBottom: -3 }}
                    color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                />
            </Fragment>
        )
    }
}
