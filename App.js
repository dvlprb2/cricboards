import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from "native-base";
import {WelcomeScreen} from "./screens/Welcome";
import {TeamScreen} from "./screens/match/Teams";
import {TossScreen} from "./screens/match/Toss";
import {OpenerScreen} from "./screens/match/Openers";
import {LinearGradient} from "expo-linear-gradient";
import {BowlerScreen} from "./screens/match/Bowler";
import {InningScreen} from "./screens/match/Inning";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {TabScreen} from "./screens/Tabs";
import {customTheme, headerOptions} from "./theme";
import {
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
    useFonts
} from "@expo-google-fonts/montserrat";
import {OnboardingScreen} from "./screens/Onboarding";

// Define the config
const config = {
    strictMode: 'warn',
    dependencies: {
        'linear-gradient': LinearGradient
    }
}

const Stack = createNativeStackNavigator();


export default function App() {
    let [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light,
        Montserrat_300Light_Italic,
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black,
        Montserrat_900Black_Italic,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <NativeBaseProvider theme={customTheme} config={config}>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Onboarding"
                                component={OnboardingScreen}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="Welcome"
                                component={WelcomeScreen}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="Tabs"
                                component={TabScreen}
                                options={{headerShown: false}}
                            />
                            <Stack.Group navigationKey="new_match" screenOptions={headerOptions}>
                                <Stack.Screen
                                    name="Teams"
                                    component={TeamScreen}
                                />
                                <Stack.Screen
                                    name="Toss"
                                    component={TossScreen}
                                />
                                <Stack.Screen
                                    name="Openers"
                                    component={OpenerScreen}
                                />
                                <Stack.Screen
                                    name="Bowler"
                                    component={BowlerScreen}
                                />
                                <Stack.Screen
                                    name="Innings"
                                    component={InningScreen}
                                />
                            </Stack.Group>
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaProvider>
            </NativeBaseProvider>
        </>
    );
}