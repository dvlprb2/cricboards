import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {extendTheme, NativeBaseProvider} from "native-base";
import {WelcomeScreen} from "./screens/Welcome";
import {TeamScreen} from "./screens/Teams";


// Define the config
const config = {
    seSystemColorMode: false, initialColorMode: "light",
};

// extend the theme
export const customTheme = extendTheme({config});
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider theme={customTheme}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                    />
                    <Stack.Screen
                        name="Teams"
                        component={TeamScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}