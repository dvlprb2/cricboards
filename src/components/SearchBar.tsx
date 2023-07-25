import {Icon, Input, VStack} from 'native-base';
import React from 'react';
import {Search} from 'react-native-feather';

interface SearchBarProps {
  my: number; // Define prop types here (if any)
}

export const SearchBar: React.FC<SearchBarProps> = props => {
  return (
    <VStack w="98%" space={5} alignSelf="center" {...props}>
      <Input
        placeholder="Search"
        size="2xl"
        InputLeftElement={<Icon m="2" ml="3" size="6" as={<Search />} />}
      />
    </VStack>
  );
};
