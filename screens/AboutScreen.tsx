import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import TabBarIcon from "../component/navigator/icons/TabBarIcon";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class AboutScreen extends Component {

    static navigationOptions = {
        title: 'About',
        tabBarIcon: ({ focused }) => {
            // @ts-ignore
            return <TabBarIcon
                    focused={focused}
                    name={'info'}
                   />
        }
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    About !
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi aspernatur commodi cum enim fugit illo modi, nobis nostrum quo ratione, sint, sunt!
                    Accusantium eius ipsum modi omnis repellendus velit voluptatibus.
                </Text>
            </View>
        );
    }
}
