import React from 'react';
import {Heading, HStack, Spinner} from 'native-base';

export const Loading = () => {
  return (
    <HStack space={2} justifyContent="center" alignItems="center" h="100%">
      <Spinner accessibilityLabel="Loading" color="primary.500" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};
