import React, {useState} from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  useToast,
  VStack,
} from 'native-base';
import {StatusBar} from 'react-native';

interface WelcomeScreenProps {
  navigation: any; // Replace with the correct navigation prop type
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const toast = useToast();
  const [name, setName] = useState('');
  const [club, setClub] = useState('');

  const onSubmit = () => {
    if (name.length > 0 && club.length > 0) {
      console.log('submitting with ', {name, club});
      navigation.replace('Tabs');
    } else {
      if (!toast.isActive('error-toast')) {
        toast.show({
          id: 'error-toast',
          title: 'All fields are required',
          placement: 'top',
          bgColor: 'danger.600',
        });
      }
    }
  };

  return (
    <Center safeArea w="100%">
      <StatusBar barStyle="dark-content" />
      <Box maxW="90%" w="100%" marginY={5}>
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              size="lg"
              autoFocus
              placeholder="John Doe"
              onChangeText={text => setName(text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Club</FormControl.Label>
            <Input
              size="lg"
              placeholder="Gujarat Titans"
              onChangeText={text => setClub(text)}
            />
          </FormControl>
          <Button onPress={onSubmit} mt="2" size="lg" colorScheme="primary">
            Proceed
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};
