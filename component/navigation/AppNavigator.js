import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {MainBottomNavigator} from "./main-bottom-navigator/MainBottomNavigator";


const MainBottomNav = new MainBottomNavigator();

export default createAppContainer(
    createSwitchNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: MainBottomNav,
    })
);

