import {SearchBar} from '../../components/SearchBar';
import {Badge, Box, Heading, HStack, Spacer, Text, VStack} from 'native-base';
import {FlatList} from 'react-native';
import React from 'react';
import {EmptyList} from '../../components/EmptyList';

interface MemberData {
  id: string;
  name: string;
  joinDate: string;
  matches: string;
}

const data: MemberData[] = [
  {
    id: '1',
    name: 'Bittu Patel',
    joinDate: 'June 16, 2023',
    matches: '11 MATCHES',
  },
  {
    id: '2',
    name: 'Smit',
    joinDate: 'May 25, 2023',
    matches: '25 MATCHES',
  },
  {
    id: '3',
    name: 'Rahul Shah',
    joinDate: 'May 02, 2023',
    matches: '2 MATCHES',
  },
  {
    id: '4',
    name: 'Dhruv Jani',
    joinDate: 'February 02, 2023',
    matches: '9 MATCHES',
  },
  {
    id: '5',
    name: 'Sachin Patel',
    joinDate: 'March 31, 2023',
    matches: '18 MATCHES',
  },
  {
    id: '6',
    name: 'Jigar Patel',
    joinDate: 'January 15, 2023',
    matches: '45 MATCHES',
  },
  {
    id: '7',
    name: 'Soury Patel',
    joinDate: 'March 12, 2023',
    matches: '26 MATCHES',
  },
  {
    id: '8',
    name: 'Montu Patel',
    joinDate: 'May 09, 2023',
    matches: '5 MATCHES',
  },
  {
    id: '9',
    name: 'Ronak Soni',
    joinDate: 'June 02, 2023',
    matches: '7 MATCHES',
  },
];

export const MembersTab: React.FC = () => {
  const renderItem = ({item}: {item: MemberData}) => {
    return (
      <Box borderBottomWidth="1" borderColor="coolGray.300" px={4} py={2}>
        <HStack>
          <VStack space={1}>
            <Heading size="sm" fontWeight="500">
              {item.name}
            </Heading>
            <Text fontSize="xs" color="coolGray.600">
              {item.joinDate}
            </Text>
          </VStack>
          <Spacer />
          <Badge
            variant="subtle"
            colorScheme="secondary"
            _text={{fontSize: 'sm'}}
            alignSelf="center">
            {item.matches}
          </Badge>
        </HStack>
      </Box>
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data}
      ListHeaderComponent={<SearchBar my={3} />}
      ListEmptyComponent={<EmptyList />}
      renderItem={renderItem}
    />
  );
};
