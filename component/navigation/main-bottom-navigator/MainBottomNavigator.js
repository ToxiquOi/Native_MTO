import React, {Component, Fragment} from 'react';
import { createBottomTabNavigator } from 'react-navigation'
import {HomeStackNavigator} from "../home-stack-navigator/HomeStackNavigator";


export  class MainBottomNavigator {

    constructor() {
        this.getMainBottomNavigator();
    }

    getMainBottomNavigator() {
        const HomeStack = new HomeStackNavigator();

        const mainBottomNav = createBottomTabNavigator({
            HomeStack
        })
    }
}
