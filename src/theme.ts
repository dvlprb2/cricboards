import {extendTheme} from 'native-base';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

// extend the theme
export const customTheme = extendTheme({
  seSystemColorMode: false,
  initialColorMode: 'light',
  colors: {
    primary: {
      50: '#a7bbdb',
      100: '#91aad2',
      200: '#7a99c8',
      300: '#6488bf',
      400: '#4e77b6',
      500: '#3866ad',
      600: '#2255a4',
      700: '#1f4d94',
      800: '#1b4483',
      900: '#183b73',
    },
    secondary: {
      50: '#efe0c3',
      100: '#ebd9b4',
      200: '#e6d1a4',
      300: '#e2c995',
      400: '#dec186',
      500: '#daba77',
      600: '#d6b268',
      700: '#c1a05e',
      800: '#ab8e53',
      900: '#967d49',
    },
    info: {
      50: '#e1f4f8',
      100: '#daf1f6',
      200: '#d2eef4',
      300: '#cbebf2',
      400: '#c3e9f1',
      500: '#bce6ef',
      600: '#b4e3ed',
      700: '#a2ccd5',
      800: '#90b6be',
      900: '#7e9fa6',
    },
  },
  fontConfig: {
    Montserrat: {
      100: {
        normal: 'Montserrat-Thin',
        italic: 'Montserrat-ThinItalic',
      },
      200: {
        normal: 'Montserrat-ExtraLight',
        italic: 'Montserrat-ExtraLightItalic',
      },
      300: {
        normal: 'Montserrat-Light',
        italic: 'Montserrat-LightItalic',
      },
      400: {
        normal: 'Montserrat-Regular',
        italic: 'Montserrat-RegularItalic',
      },
      500: {
        normal: 'Montserrat-Medium',
        italic: 'Montserrat-MediumItalic',
      },
      600: {
        normal: 'Montserrat-SemiBold',
        italic: 'Montserrat-SemiBoldItalic',
      },
      700: {
        normal: 'Montserrat-Bold',
        italic: 'Montserrat-BoldItalic',
      },
      800: {
        normal: 'Montserrat-ExtraBold',
        italic: 'Montserrat-ExtraBoldItalic',
      },
      900: {
        normal: 'Montserrat-Black',
        italic: 'Montserrat-BlackItalic',
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
});

export const headerOptions: NativeStackNavigationOptions = {
  headerStyle: {backgroundColor: '#2255A4'},
  headerTintColor: '#fff',
  headerTitleStyle: {fontWeight: 'bold'},
};

export const tabHeaderOptions: BottomTabNavigationOptions = {
  headerStyle: {backgroundColor: '#2255A4'},
  headerTintColor: '#fff',
  headerTitleStyle: {fontWeight: 'bold'},
};
