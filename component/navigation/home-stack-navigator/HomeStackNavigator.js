import React, {Component, Fragment} from 'react';
import { createStackNavigator } from 'react-navigation'
import Home from 'component/screens/home-screen/HomeScreen';
import TabBarIcon from "../../../assets/TabBarIcon";
import HomeScreen from "../../screens/home-screen/HomeScreen";

export class HomeStackNavigator {

    HomeStack;

    config = Platform.select({
        web: { headerMode: 'screen'},
        default : {},
    });

    homeStackNavOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle'
                }
            />
        ),
    };

    constructor() {
        this.getHomeStackNavigator();
    }

     getHomeStackNavigator() {
        this.HomeStack = createStackNavigator(
            {
                Home: HomeScreen
            },
            this.config
        );
        this.HomeStack.navigationOptions = this.homeStackNavOptions;
        this.HomeStack.path = '';

        return this.HomeStack;
    }


}
