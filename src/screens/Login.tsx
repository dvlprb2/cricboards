import {Box, Center, Heading, Image, Text} from 'native-base';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {googleSignIn, isSignedIn} from '../services/auth';
import {Loading} from '../components/Loading';

const login_bg = require('../assets/login_bg.jpg');

interface LoginScreenProps {
  navigation: any; // Replace 'any' with the actual navigation prop type
}
export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isSignedIn().then(res => {
      if (res) {
        navigation.replace('Tabs');
      } else {
        setLoading(false);
      }
    });
  }, [navigation]);

  const handleSignIn = async () => {
    const {userInfo, hasClub} = await googleSignIn();
    if (userInfo && hasClub) {
      navigation.replace('Tabs');
    } else {
      navigation.replace('Welcome');
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Center w="100%">
        <StatusBar barStyle="dark-content" />
        <Box w="100%">
          <Image
            width={400}
            height={400}
            source={login_bg}
            alt="Alternate Text"
          />
        </Box>
        <Box w="100%" paddingX={5}>
          <Heading fontWeight="700" color="coolGray.600" fontSize={34}>
            Welcome to
          </Heading>
          <Heading fontWeight="700" fontSize={38} color="primary.800">
            CricBoards
          </Heading>
          <Text marginTop={5} fontSize={18} color="muted.800" fontWeight="500">
            Score Like a Pro,
          </Text>
          <Text
            marginBottom={5}
            fontSize={18}
            color="muted.800"
            fontWeight="500">
            Play Like a Legend
          </Text>
          <GoogleSigninButton
            style={styles.googleSigninBtn}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={handleSignIn}
          />
        </Box>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  googleSigninBtn: {
    width: '100%',
  },
});
