import {
    createStackNavigator,
    NavigationRouteConfigMap,
    StackNavigatorConfig
} from 'react-navigation'
import HomeScreen from "../../screens/HomeScreen";
import TabBarIcon from "../../component/icons/TabBarIcon";
import * as React from "react";
import ListScreen from "../../screens/ListScreen";
import Colors from "../../constants/Colors";

const navigationOptions = {
    headerStyle: {
        backgroundColor: Colors.tintColor
    },
    headerTitleStyle: {
        color: Colors.noticeText
    }
}

const navRouteConf: NavigationRouteConfigMap = {
    Home: {
        screen: HomeScreen,
        navigationOptions
    },
    Result: {
        screen: ListScreen,
        navigationOptions
    }
};

const stackNavConf: StackNavigatorConfig = {

};

const HomeStack = createStackNavigator(navRouteConf, stackNavConf)

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={'home'}
        />
    ),
};

export default HomeStack;
