import {Box, Heading, HStack, Stack, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {ClubDocumentData} from '../services/clubs';
import React from 'react';

interface ClubCardProps {
  navigation: any; // Update the type based on your navigation prop type
  item: ClubDocumentData; // Update the type based on the expected item type
}

export const ClubCard: React.FC<ClubCardProps> = ({navigation, item}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('Club', {item});
      }}>
      <Box
        maxW="80"
        marginRight={2}
        rounded="sm"
        overflow="hidden"
        borderColor="coolGray.300"
        shadow={2}
        borderWidth="1"
        backgroundColor="coolGray.50">
        <HStack p="4" alignItems="center">
          <Stack>
            <Heading fontWeight={500} size="sm">
              {item.name}
            </Heading>
            <Text color="coolGray.600" fontWeight="400">
              {item.members.length} members
            </Text>
          </Stack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};
