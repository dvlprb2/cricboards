import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {INativebaseConfig, NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {customTheme, headerOptions} from './theme';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// screens
import {OnboardingScreen} from './screens/Onboarding';
import {LoginScreen} from './screens/Login';
import {WelcomeScreen} from './screens/Welcome';
import {TabScreen} from './screens/tabs';
import {ClubScreen} from './screens/club';
import {TeamScreen} from './screens/match/Teams';
import {TossScreen} from './screens/match/Toss';
import {OpenerScreen} from './screens/match/Openers';
import {BowlerScreen} from './screens/match/Bowler';
import {InningScreen} from './screens/match/Inning';

// Define the config
const config: INativebaseConfig = {
  strictMode: 'warn',
};

const Stack = createNativeStackNavigator();

export default function App(): Element {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

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
                name="Login"
                component={LoginScreen}
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
              <Stack.Screen
                name="Club"
                component={ClubScreen}
                options={{
                  headerShown: true,
                  ...headerOptions,
                }}
              />
              <Stack.Group
                navigationKey="new_match"
                screenOptions={headerOptions}>
                <Stack.Screen name="Teams" component={TeamScreen} />
                <Stack.Screen name="Toss" component={TossScreen} />
                <Stack.Screen name="Openers" component={OpenerScreen} />
                <Stack.Screen name="Bowler" component={BowlerScreen} />
                <Stack.Screen name="Innings" component={InningScreen} />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </>
  );
}
