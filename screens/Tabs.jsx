import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Heading, Icon} from "native-base";
import {headerOptions} from "../theme";
import {HomeScreen} from "./Home";
import {Feather} from "@expo/vector-icons";
import {SearchScreen} from "./Search";

const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
    return (<Heading>Profile</Heading>)
}

const options = {
    tabBarAllowFontScaling: true,
    tabBarActiveTintColor: "#2255a4",
}

export const TabScreen = () => {
    return (
        <Tab.Navigator screenOptions={headerOptions}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    ...options,
                    tabBarIcon: ({focused, color, size}) => <Icon color={color} as={Feather} name="home" size="lg"/>
                }}/>
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    ...options,
                    tabBarIcon: ({focused, color, size}) => <Icon color={color} as={Feather} name="bar-chart-2"
                                                                  size="lg"/>,
                    tabBarLabel: "Players"
                }}/>
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    ...options,
                    tabBarIcon: ({focused, color, size}) => <Icon color={color} as={Feather} name="user"
                                                                  size="lg"/>
                }}/>
        </Tab.Navigator>
    );
};

