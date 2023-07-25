import React, {useEffect, useRef, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {
  Button,
  Fab,
  FormControl,
  Heading,
  HStack,
  Input,
  Modal,
  Text,
  VStack,
} from 'native-base';
import {ClubCard} from '../../components/ClubCard';
import {MatchCard} from '../../components/MatchCard';
import {Plus} from 'react-native-feather';
import {
  ClubDocumentData,
  createClub,
  getClubsByUser,
} from '../../services/clubs';
import {getCurrentUser} from '../../services/auth';

interface HomeScreenProps {
  navigation: any; // Replace 'any' with the actual navigation prop type
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const initialRef = useRef<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [clubName, setClubName] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [clubs, setClubs] = useState<ClubDocumentData[]>([]);

  useEffect(() => {
    getClubsByUser().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
      });
      const data: ClubDocumentData[] = [];
      querySnapshot.forEach(doc => data.push(doc.data() as ClubDocumentData));
      setClubs(data);
    });
  }, []);

  const renderClubCard = ({item}: {item: ClubDocumentData}) => (
    <ClubCard item={item} navigation={navigation} />
  );

  const renderMatchCard = ({item}: {item: ClubDocumentData}) => (
    <MatchCard item={item} navigation={navigation} />
  );

  const onModalClose = () => {
    setShowModal(false);
    setIsInvalid(false);
    setClubName('');
  };

  const handleAddClub = async () => {
    if (clubName.length < 3) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);

      const currentUser = await getCurrentUser();

      createClub({
        name: clubName,
        members: [],
        owner: currentUser?.id!!,
      }).then(r => {
        console.log(r.id);
        onModalClose();
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <VStack margin={3} space={3}>
        <Heading fontWeight={600} size="md">
          Clubs
        </Heading>
        <FlatList
          horizontal
          data={clubs}
          renderItem={renderClubCard}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </VStack>

      <VStack margin={3} space={3}>
        <Heading fontWeight={600} size="md">
          Recent Matches
        </Heading>
        <FlatList
          horizontal
          data={[]}
          renderItem={renderMatchCard}
          showsHorizontalScrollIndicator={false}
        />
      </VStack>

      <Fab
        renderInPortal={false}
        shadow={2}
        placement="bottom-right"
        size="lg"
        colorScheme="primary"
        icon={<Plus color="#fff" />}
        label={
          <Text fontWeight={600} fontSize="xl" color="white">
            New Club
          </Text>
        }
        onPress={() => setShowModal(true)}
      />

      {/* Uncomment this section when needed */}
      {/* <Fab */}
      {/*   renderInPortal={false} */}
      {/*   shadow={2} */}
      {/*   placement="bottom-right" */}
      {/*   size="lg" */}
      {/*   colorScheme="primary" */}
      {/*   icon={<Icon color="white" as={Feather} name="plus" size="2xl" />} */}
      {/*   label={ */}
      {/*     <Text fontWeight={600} fontSize="xl" color="white"> */}
      {/*       New Match */}
      {/*     </Text> */}
      {/*   } */}
      {/*   onPress={() => navigation.replace('Teams')} */}
      {/* /> */}

      <Modal
        isOpen={showModal}
        onClose={onModalClose}
        initialFocusRef={initialRef}
        avoidKeyboard
        safeAreaTop>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Create New Club</Modal.Header>
          <Modal.Body>
            <HStack space={2}>
              <FormControl isInvalid={isInvalid}>
                <Input
                  onChangeText={text => setClubName(text)}
                  size="lg"
                  flex={1}
                  placeholder="Enter name"
                  ref={initialRef}
                  value={clubName}
                />
                <FormControl.ErrorMessage>
                  Name is too short
                </FormControl.ErrorMessage>
              </FormControl>
            </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              size="full"
              p={2}
              _text={{fontSize: 18}}
              onPress={handleAddClub}>
              Save
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
