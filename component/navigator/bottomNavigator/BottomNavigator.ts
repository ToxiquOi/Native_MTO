import {BottomTabNavigatorConfig, createBottomTabNavigator, NavigationRouteConfigMap} from "react-navigation";
import HomeStackNav from "../homeStackNavigator/HomeStackNav";
import AboutScreen from "../../../screens/AboutScreen";

import Colors from '../../../constants/Colors';

const navRouteConf: NavigationRouteConfigMap = {
    HomeStackNav,
    AboutScreen
};

const navOptions: BottomTabNavigatorConfig = {
    tabBarOptions: {
        activeBackgroundColor: Colors.inactivebackground,
        inactiveBackgroundColor: Colors.tintColor,
        tabStyle: {

        },
        activeTintColor: Colors.tabIconSelected,
        inactiveTintColor: Colors.tabIconDefault,
        keyboardHidesTabBar: true
    },
};

const BottomNav = createBottomTabNavigator(navRouteConf, navOptions);


export default BottomNav;
