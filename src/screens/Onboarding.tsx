import {Image, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingScreenProps {
  navigation: any; // Replace 'any' with the actual navigation prop type
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  navigation,
}) => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('hasShownOnboarding').then(value => {
      if (value === 'true') {
        navigation.navigate('Login');
      } else {
        setShowOnboarding(true);
      }
    });
  });

  const handleOnboardingCompleted = async () => {
    try {
      await AsyncStorage.setItem('hasShownOnboarding', 'true');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving onboarding flag:', error);
    }
  };

  if (showOnboarding) {
    return (
      <Onboarding
        showSkip={false}
        bottomBarHighlight={false}
        onDone={handleOnboardingCompleted}
        containerStyles={styles.container}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/circle.png')} />,
            title: (
              <Text fontSize={24} fontWeight="600" mb={2}>
                ONBOARDING
              </Text>
            ),
            subtitle: <Text>Done with React Native Onboarding Swiper</Text>,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/circle.png')} />,
            title: (
              <Text fontSize={24} fontWeight="600">
                ONBOARDING
              </Text>
            ),
            subtitle: <Text>Done with React Native Onboarding Swiper</Text>,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/circle.png')} />,
            title: (
              <Text fontSize={24} fontWeight="600">
                ONBOARDING
              </Text>
            ),
            subtitle: <Text>Done with React Native Onboarding Swiper</Text>,
          },
        ]}
      />
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
