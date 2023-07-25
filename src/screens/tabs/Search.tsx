import {SearchBar} from '../../components/SearchBar';
import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import {FlatList} from 'react-native';
import React from 'react';

interface DataItem {
  id: string;
  fullName: string;
  timeStamp: string;
  recentText: string;
  avatarUrl: string;
}

export const SearchScreen: React.FC = () => {
  const data: DataItem[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    // Add the rest of the data items
  ];

  return (
    <ScrollView w="100%" h={80}>
      <VStack mt={2}>
        <SearchBar my={0} />
        <Divider my={2} />
        <Box w="95%" alignSelf="center">
          <Heading alignSelf="center" fontSize="xl" p={4} pb={3} pl={0}>
            Search Results
          </Heading>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Box
                borderBottomWidth={1}
                borderColor="muted.800"
                pl={[0, 4]}
                pr={[0, 5]}
                py={2}>
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="48px" source={{uri: item.avatarUrl}} />
                  <VStack>
                    <Text color="coolGray.800" bold>
                      {item.fullName}
                    </Text>
                    <Text color="coolGray.600">{item.recentText}</Text>
                  </VStack>
                  <Spacer />
                  <Text
                    fontSize="xs"
                    _dark={{color: 'warmGray.50'}}
                    color="coolGray.800"
                    alignSelf="flex-start">
                    {item.timeStamp}
                  </Text>
                </HStack>
              </Box>
            )}
            keyExtractor={item => item.id}
          />
        </Box>
      </VStack>
    </ScrollView>
  );
};
