import {Box, Heading, HStack, Stack, Text, VStack} from 'native-base';
import React from 'react';

interface MatchCardProps {
  navigation: any; // Update the type based on your navigation prop type
  item: any; // Update the type based on the expected item type
}

export const MatchCard: React.FC<MatchCardProps> = ({navigation, item}) => {
  return (
    <Box
      width={300}
      marginRight={2}
      rounded="sm"
      overflow="hidden"
      borderColor="coolGray.300"
      shadow={2}
      borderWidth="1"
      backgroundColor="coolGray.50">
      <Stack p={4} space={2} justifyContent="space-between">
        <Text color="coolGray.600" fontWeight={400} fontSize={12}>
          The Garden City
        </Text>
        <VStack space={2}>
          <HStack justifyContent="space-between">
            <Heading fontWeight={500} size="sm">
              Team A
            </Heading>
            <Heading fontWeight={500} size="sm">
              100-9 (20)
            </Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Heading fontWeight={500} size="sm">
              Team B
            </Heading>
            <Heading fontWeight={500} size="sm">
              100-9 (20)
            </Heading>
          </HStack>
        </VStack>
        <Text color="primary.600">Team A won by 2 wkts</Text>
      </Stack>
    </Box>
  );
};
