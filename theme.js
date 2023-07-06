import {extendTheme} from "native-base";;

// extend the theme
export const customTheme = extendTheme({
    seSystemColorMode: false,
    initialColorMode: "light",
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
            900: '#183b73'
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
            900: '#967d49'
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
            900: '#7e9fa6'
        },
    },
    fontConfig: {
        Montserrat: {
            100: {
                normal: 'Montserrat_100Thin',
                italic: 'Montserrat_100Thin_Italic',
            },
            200: {
                normal: 'Montserrat_200ExtraLight',
                italic: 'Montserrat_200ExtraLight_Italic',
            },
            300: {
                normal: 'Montserrat_300Light',
                italic: 'Montserrat_300Light_Italic',
            },
            400: {
                normal: 'Montserrat_400Regular',
                italic: 'Montserrat_400Regular_Italic',
            },
            500: {
                normal: 'Montserrat_500Medium',
                italic: 'Montserrat_500Medium_Italic'
            },
            600: {
                normal: 'Montserrat_600SemiBold',
                italic: 'Montserrat_600SemiBold_Italic',
            },
            700: {
                normal: 'Montserrat_700Bold',
                italic: 'Montserrat_700Bold_Italic'
            },
            800: {
                normal: 'Montserrat_800ExtraBold',
                italic: 'Montserrat_800ExtraBold_Italic',
            },
            900: {
                normal: 'Montserrat_900Black',
                italic: 'Montserrat_900Black_Italic',
            },
        },
    },
    fonts: {
        heading: "Montserrat",
        body: "Montserrat",
        mono: "Montserrat",
    },

});

export const headerOptions = {
    headerStyle: {backgroundColor: '#2255A4'},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold',},
}