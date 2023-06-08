import React from "react";
import {Center, Fab, Icon, Image} from "native-base";
import {StyleSheet} from 'react-native';
import logo from "../assets/logo.png";
import {ResizeMode, Video} from 'expo-av';
import {Feather} from "@expo/vector-icons";

export const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    logo: {
        width: 120,
        height: 29,
        position: 'absolute',
        right: 16,
        top: 16,
    }
});
export const WelcomeScreen = ({navigation}) => {
    const video = React.useRef(null);

    return (
        <Center
            _dark={{bg: "blueGray.900"}}
            _light={{bg: "blueGray.50"}}
            px={4}
            flex={1}
            w={"100%"}
            h="100%"
        >
            <Video
                ref={video}
                style={styles.backgroundVideo}
                source={{
                    uri: "https://developerb2.com/assets/projects/cricboards/bg_video.mp4",
                }}
                resizeMode={ResizeMode.COVER}
                isLooping
                shouldPlay={true}
                isMuted={true}
            />

            <Image resizeMode={"contain"} source={logo} alt="Alternate Text" style={styles.logo}/>


            <Fab renderInPortal={false} shadow={2} placement="bottom-right" size="lg" colorScheme="success"
                 icon={<Icon color="white" as={Feather} name="chevrons-right" size="2xl"/>}
                 onPress={() => navigation.navigate('Teams')}/>
        </Center>
);
};

