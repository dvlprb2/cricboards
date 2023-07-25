import React, {useState} from 'react';
import {Center, Fab, Heading, Icon, Stack, VStack} from 'native-base';
import {Feather} from '@expo/vector-icons';
import {Pressable} from 'react-native';

interface TossScreenProps {
  navigation: any; // Update the type based on your navigation prop type
}

export const TossScreen: React.FC<TossScreenProps> = ({navigation}) => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedBRB, setSelectedBRB] = useState<string | null>(null);

  return (
    <>
      <VStack space={5} p={4}>
        <Stack
          key={'contentTeamA'}
          direction="row"
          mb="5"
          mt="1.5"
          justifyContent="center"
          space={5}>
          <Pressable key={1} onPress={() => setSelectedTeam('A')}>
            <Center
              size="32"
              bg={selectedTeam === 'A' ? 'primary.600' : 'white'}
              rounded="sm"
              _text={{
                color: selectedTeam === 'A' ? 'warmGray.50' : 'primary.600',
                fontWeight: 'bold',
                fontSize: '2xl',
              }}
              borderColor={'primary.600'}
              borderWidth={2}
              shadow={'3'}>
              Team A
            </Center>
          </Pressable>
          <Pressable key={2} onPress={() => setSelectedTeam('B')}>
            <Center
              bg={selectedTeam === 'B' ? 'primary.600' : 'white'}
              size="32"
              rounded="sm"
              _text={{
                color: selectedTeam === 'B' ? 'warmGray.50' : 'primary.600',
                fontWeight: 'bold',
                fontSize: '2xl',
              }}
              shadow={'3'}
              color="primary.600"
              borderColor={'primary.600'}
              borderWidth={2}>
              Team B
            </Center>
          </Pressable>
        </Stack>
        {selectedTeam !== null ? (
          <>
            <Heading key={'headingTeamB'} textAlign="center" size="md">
              CHOOSE BAT OR BOWL
            </Heading>
            <Stack
              key={'contentTeamB'}
              direction="row"
              mb="5"
              mt="1.5"
              justifyContent="center"
              space={3}>
              <Pressable key={1} onPress={() => setSelectedBRB('BAT')}>
                <Center
                  size="32"
                  bg={selectedBRB === 'BAT' ? 'primary.600' : 'white'}
                  rounded="sm"
                  _text={{
                    color:
                      selectedBRB === 'BAT' ? 'warmGray.50' : 'primary.600',
                    fontWeight: 'bold',
                    fontSize: '2xl',
                  }}
                  borderColor={'primary.600'}
                  borderWidth={2}
                  shadow={'3'}>
                  Bat
                </Center>
              </Pressable>
              <Pressable key={2} onPress={() => setSelectedBRB('BOWL')}>
                <Center
                  bg={selectedBRB === 'BOWL' ? 'primary.600' : 'white'}
                  size="32"
                  rounded="sm"
                  _text={{
                    color:
                      selectedBRB === 'BOWL' ? 'warmGray.50' : 'primary.600',
                    fontWeight: 'bold',
                    fontSize: '2xl',
                  }}
                  shadow={'3'}
                  color="primary.600"
                  borderColor={'primary.600'}
                  borderWidth={2}>
                  Bowl
                </Center>
              </Pressable>
            </Stack>
          </>
        ) : (
          <></>
        )}
      </VStack>

      <Fab
        renderInPortal={false}
        shadow={2}
        placement="bottom-right"
        size="lg"
        colorScheme="primary"
        icon={
          <Icon color="white" as={Feather} name="chevrons-right" size="2xl" />
        }
        onPress={() => navigation.navigate('Openers')}
      />
    </>
  );
};
