import React, {useState} from 'react';
import {FlatList, SafeAreaView, SectionList, StyleSheet, View,} from 'react-native';
import {Fab, Heading, HStack, Icon, IconButton, Input, Modal, Text, VStack} from "native-base";
import {Card} from "../components/Card";
import {Feather} from "@expo/vector-icons";

const ListItem = () => {
    return <Card/>;
};

export const HomeScreen = ({navigation}) => {
    const initialRef = React.useRef(null);
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1}}>
                <SectionList
                    stickySectionHeadersEnabled={false}
                    sections={SECTIONS}
                    renderSectionHeader={({section}) => (
                        <VStack margin={3}>
                            <Heading size="md" marginBottom={1}>{section.title}</Heading>
                            {section.horizontal ? (
                                <FlatList
                                    horizontal
                                    data={section.data}
                                    renderItem={({item}) => <ListItem item={item}/>}
                                    showsHorizontalScrollIndicator={false}
                                />
                            ) : null}
                        </VStack>
                    )}
                    renderItem={({item, section}) => {
                        if (section.horizontal) {
                            return null;
                        }
                        return <ListItem item={item}/>;
                    }}
                />
                <Fab renderInPortal={false} shadow={2} placement="bottom-right" size="lg" colorScheme="primary"
                     icon={<Icon color="white" as={Feather} name="plus" size="2xl"/>}
                     label={<Text fontWeight={600} fontSize="xl" color="white">New Club</Text>}
                     onPress={() => setShowModal(true)}/>

                <Fab renderInPortal={false} shadow={2} placement="bottom-right" size="lg" colorScheme="primary"
                     icon={<Icon color="white" as={Feather} name="plus" size="2xl"/>}
                     label={<Text fontWeight={600} fontSize="xl" color="white">New Match</Text>}
                     onPress={() => navigation.replace('Teams')}/>
            </SafeAreaView>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}
                   initialFocusRef={initialRef} avoidKeyboard safeAreaTop>
                <Modal.Content>
                    <Modal.CloseButton/>
                    <Modal.Header>Create New Club</Modal.Header>
                    <Modal.Body>
                        <HStack space={2}>
                            <Input size="lg" flex={1} placeholder="Enter name" ref={initialRef}/>
                            <IconButton size="lg" borderRadius="sm" variant="solid" colorScheme={"primary"}
                                        icon={<Icon as={Feather} name="plus" size="lg" color="warmGray.50"/>}/>
                        </HStack>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </View>
    );
};

const SECTIONS = [
    {
        title: 'Clubs',
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/10/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1002/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1006/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1008/200',
            },
            {
                key: '6',
                text: 'Item text 6',
                uri: 'https://picsum.photos/id/1008/200',
            },
            {
                key: '7',
                text: 'Item text 7',
                uri: 'https://picsum.photos/id/1008/200',
            },
            {
                key: '8',
                text: 'Item text 8',
                uri: 'https://picsum.photos/id/1008/200',
            },
            {
                key: '9',
                text: 'Item text 9',
                uri: 'https://picsum.photos/id/1008/200',
            },
        ],
    },
    {
        title: 'Recent Matches',
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1011/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1012/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1013/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1015/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1016/200',
            },
            {
                key: '6',
                text: 'Item text 6',
                uri: 'https://picsum.photos/id/1016/200',
            },
            {
                key: '7',
                text: 'Item text 7',
                uri: 'https://picsum.photos/id/1016/200',
            },
            {
                key: '8',
                text: 'Item text 8',
                uri: 'https://picsum.photos/id/1016/200',
            },
            {
                key: '9',
                text: 'Item text 9',
                uri: 'https://picsum.photos/id/1016/200',
            },
        ],
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#f4f4f4',
        marginTop: 20,
        marginBottom: 5,
    },
});