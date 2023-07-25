import React, {useState} from 'react';
import {Animated, Pressable, StatusBar} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {
  Box,
  Fab,
  HStack,
  Icon,
  IconButton,
  Input,
  ScrollView,
  Text,
  useToast,
  VStack,
} from 'native-base';
import {Entypo, Feather} from '@expo/vector-icons';

interface ListItem {
  title: string;
  isCompleted: boolean;
}

export const AddPlayer: React.FC = () => {
  const instState: ListItem[] = [];
  const [list, setList] = useState<ListItem[]>(instState);
  const [inputValue, setInputValue] = useState('');
  const toast = useToast();

  const addItem = (title: string) => {
    if (title === '') {
      toast.show({
        title: 'Please Enter Text',
      });
      return;
    }

    setList(prevList => [
      ...prevList,
      {
        title: title,
        isCompleted: false,
      },
    ]);
  };

  const handleDelete = (index: number) => {
    setList(prevList => prevList.filter((_, itemI) => itemI !== index));
  };

  return (
    <>
      <Box maxW="85%" px="3">
        <VStack mt="2" space={4}>
          <HStack space={2}>
            <Input
              size="lg"
              flex={1}
              onChangeText={v => setInputValue(v)}
              value={inputValue}
              placeholder="Add Player"
            />
            <IconButton
              size="lg"
              borderRadius="sm"
              variant="solid"
              colorScheme={'primary'}
              icon={
                <Icon as={Feather} name="plus" size="lg" color="warmGray.50" />
              }
              onPress={() => {
                addItem(inputValue);
                setInputValue('');
              }}
            />
          </HStack>
          <ScrollView>
            <VStack space={2} borderRadius="sm" mb={1}>
              {list.map((item, itemI) => (
                <HStack
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  key={item.title + itemI.toString()}>
                  <Text
                    fontSize="xl"
                    width="100%"
                    flexShrink={1}
                    fontWeight="semibold"
                    textAlign="left"
                    m="0"
                    mr="2"
                    _light={{color: 'primary.600'}}
                    px="12px"
                    py="8px"
                    borderRadius="sm"
                    borderColor={'primary.600'}
                    borderWidth="1"
                    borderStyle="solid">
                    {item.title}
                  </Text>
                  <IconButton
                    size="lg"
                    colorScheme="danger"
                    variant="solid"
                    icon={<Icon as={Entypo} name="cross" size="xl" />}
                    onPress={() => handleDelete(itemI)}
                  />
                </HStack>
              ))}
            </VStack>
          </ScrollView>
        </VStack>
      </Box>
    </>
  );
};

const renderScene = SceneMap({
  first: AddPlayer,
  second: AddPlayer,
});

export const TeamScreen: React.FC<any> = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Team A',
    },
    {
      key: 'second',
      title: 'Team B',
    },
  ]);

  const renderTabBar = (props: any) => {
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: number) => {
          const color = index === i ? '#000' : '#1f2937';
          const borderColor = index === i ? 'primary.600' : 'coolGray.200';
          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text
                  style={{
                    color,
                    fontSize: 24,
                    fontWeight: 'bold',
                  }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <>
      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: 100}}
        style={{
          marginTop: StatusBar.currentHeight,
        }}
      />
      <Fab
        renderInPortal={false}
        shadow={2}
        placement="bottom-right"
        size="lg"
        colorScheme="primary"
        icon={
          <Icon color="white" as={Feather} name="chevrons-right" size="2xl" />
        }
        onPress={() => navigation.navigate('Toss')}
      />
    </>
  );
};
