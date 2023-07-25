import {Center, Heading} from 'native-base';
import React from 'react';

export const EmptyList: React.FC = () => {
  return (
    <Center m={4}>
      <Heading size="sm" fontWeight="500" color="coolGray.600">
        No Members Found
      </Heading>
    </Center>
  );
};
