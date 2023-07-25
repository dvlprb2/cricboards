import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  SectionList,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

interface MatchData {
  teamA: string;
  teamB: string;
  msg: string;
}

interface Section {
  title: string;
  data: MatchData[];
}

export const MatchesTab: React.FC = () => {
  const sections: Section[] = [
    {
      title: '28 July 2023',
      data: [
        {
          teamA: '100-9 (20)',
          teamB: '100-9 (20)',
          msg: 'Team A won by 2 wkts',
        },
        {
          teamA: '100-9 (20)',
          teamB: '100-9 (20)',
          msg: 'Team A won by 2 wkts',
        },
        {
          teamA: '100-9 (20)',
          teamB: '100-9 (20)',
          msg: 'Team A won by 2 wkts',
        },
      ],
    },
    {
      title: '28 July 2023',
      data: [
        {
          teamA: '100-9 (20)',
          teamB: '100-9 (20)',
          msg: 'Team A won by 2 wkts',
        },
        {
          teamA: '100-9 (20)',
          teamB: '100-9 (20)',
          msg: 'Team A won by 2 wkts',
        },
        {
          teamA: '100-9 (20)',
          teamB: '100-9 (20)',
          msg: 'Team A won by 2 wkts',
        },
        {
          teamA: '100-9 (20)',
          teamB: '100-9 (20)',
          msg: 'Team A won by 2 wkts',
        },
        {
          teamA: '100-9 (20)',
          teamB: '100-9 (20)',
          msg: 'Team A won by 2 wkts',
        },
      ],
    },
  ];

  const renderSectionHeader = (info: {section: Section}) => {
    return (
      <Center py={4} bg="coolGray.100">
        <Container>
          <Heading size="md" color="primary.600">
            {info.section.title}
          </Heading>
        </Container>
      </Center>
    );
  };

  const renderItem = ({item}: {item: MatchData}) => {
    return (
      <Center px={4} py={1}>
        <Box
          width="100%"
          rounded="sm"
          overflow="hidden"
          borderColor="coolGray.300"
          shadow={2}
          borderWidth="1"
          backgroundColor="coolGray.50">
          <Stack p={4} space={2} justifyContent="space-between">
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
            <Text color="primary.600">{item.msg}</Text>
          </Stack>
        </Box>
      </Center>
    );
  };

  return (
    <SectionList
      w="100%"
      mb="4"
      sections={sections}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};
