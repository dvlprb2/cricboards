import {Image} from "react-native";
import {Button, Text, VStack} from "native-base";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

export const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            showDone={false}
            showSkip={false}
            showNext={false}
            bottomBarHighlight={false}
            containerStyles={{alignItems: 'center', justifyContent: 'center'}}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/circle.png')}/>,
                    title: <Text fontSize="24" fontWeight="600" mb={2}>ONBOARDING</Text>,
                    subtitle: <Text>Done with React Native Onboarding Swiper</Text>,
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/circle.png')}/>,
                    title: <Text fontSize="24" fontWeight="600">ONBOARDING</Text>,
                    subtitle: <Text>Done with React Native Onboarding Swiper</Text>,
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/circle.png')}/>,
                    title: <Text fontSize="24" fontWeight="600">ONBOARDING</Text>,
                    subtitle: (
                        <VStack flex={1 / 4} justifyContent={"space-between"}>
                            <Text>Done with React Native Onboarding Swiper</Text>
                            <Button size="lg" colorScheme="primary" onPress={() => navigation.replace('Welcome')}>GET
                                STARTED</Button>
                        </VStack>
                    ),
                },
            ]}
        />
    );
}