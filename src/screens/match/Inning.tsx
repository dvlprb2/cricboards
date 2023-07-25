import React, {useEffect, useState} from 'react';
import {
  AlertDialog,
  Badge,
  Button,
  Center,
  Divider,
  Fab,
  Flex,
  Heading,
  Icon,
  Modal,
  Stack,
  VStack,
} from 'native-base';
import {Feather} from '@expo/vector-icons';

export const InningScreen: React.FC<any> = ({navigation}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowModal(false);
      setTimeLeft(null);
    }

    if (!timeLeft) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => (prevTime ? prevTime - 1 : null));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isOpen, timeLeft]);

  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  const handleClick = () => {
    setShowModal(true);
    setTimeLeft(5);
  };

  return (
    <>
      <VStack space="16" p={4}>
        <Stack direction="row" mt="1.5" justifyContent="center" space={5}>
          <Center
            size="32"
            bg="primary.600"
            rounded="sm"
            _text={{fontWeight: 'bold', fontSize: '2xl'}}
            borderColor="primary.600"
            borderWidth={2}
            shadow="3">
            <Stack space={2}>
              <Heading size="sm" textAlign="center" color="white">
                RUNS
              </Heading>
              <Heading size="3xl" textAlign="center" color="white">
                20
              </Heading>
            </Stack>
          </Center>
          <Center
            size="32"
            bg="primary.600"
            rounded="sm"
            _text={{fontWeight: 'bold', fontSize: '2xl'}}
            borderColor="primary.600"
            borderWidth={2}
            shadow="3">
            <Stack space={2}>
              <Heading size="sm" textAlign="center" color="white">
                WICKETS
              </Heading>
              <Heading size="3xl" textAlign="center" color="white">
                1
              </Heading>
            </Stack>
          </Center>
        </Stack>
        <Stack direction="column" space={5}>
          <Center>
            <Flex direction="row">
              <Heading>1</Heading>
              <Divider thickness="1.5" mx="1" orientation="vertical" />
              <Heading>WD</Heading>
              <Divider thickness="1.5" mx="1" orientation="vertical" />
              <Heading>NB</Heading>
              <Divider thickness="1.5" mx="1" orientation="vertical" />
              <Heading>2</Heading>
              <Divider thickness="1.5" mx="1" orientation="vertical" />
              <Heading>6</Heading>
              <Divider thickness="1.5" mx="1" orientation="vertical" />
              <Heading>0</Heading>
              <Divider thickness="1.5" mx="1" orientation="vertical" />
              <Heading>W</Heading>
            </Flex>
          </Center>
          <Center>
            <Stack direction="row" space="5">
              <Badge
                colorScheme="secondary"
                alignSelf="center"
                variant="subtle"
                _text={{fontSize: 'xl', fontWeight: 'bold'}}>
                OVERS - 2.5
              </Badge>
              <Badge
                colorScheme="secondary"
                alignSelf="center"
                variant="subtle"
                _text={{fontSize: 'xl', fontWeight: 'bold'}}>
                TARGET - 20
              </Badge>
            </Stack>
          </Center>
        </Stack>
        <Center>
          <Button.Group
            mb={5}
            colorScheme="primary"
            size="12"
            variant="outline">
            <Button _text={{fontSize: '3xl'}} onPress={handleClick}>
              0
            </Button>
            <Button _text={{fontSize: '3xl'}} onPress={handleClick}>
              1
            </Button>
            <Button _text={{fontSize: '3xl'}} onPress={handleClick}>
              2
            </Button>
            <Button _text={{fontSize: '3xl'}} onPress={handleClick}>
              3
            </Button>
            <Button
              _text={{fontSize: '3xl'}}
              variant="solid"
              onPress={handleClick}>
              4
            </Button>
            <Button
              _text={{fontSize: '3xl'}}
              variant="solid"
              onPress={handleClick}>
              6
            </Button>
          </Button.Group>
          <Button.Group colorScheme="primary" size="16" variant="outline">
            <Button _text={{fontSize: '3xl'}}>WD</Button>
            <Button
              _text={{fontSize: '3xl'}}
              colorScheme="danger"
              variant="solid">
              W
            </Button>
            <Button _text={{fontSize: '3xl'}}>NB</Button>
          </Button.Group>
        </Center>
      </VStack>

      <Fab
        renderInPortal={false}
        shadow={2}
        placement="bottom-left"
        size="lg"
        colorScheme="primary"
        icon={<Icon color="white" as={Feather} name="rotate-ccw" size="2xl" />}
      />

      <Fab
        renderInPortal={false}
        shadow={2}
        placement="bottom-right"
        size="lg"
        colorScheme="primary"
        icon={<Icon color="white" as={Feather} name="check" size="2xl" />}
        onPress={() => setIsOpen(!isOpen)}
      />

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>End Innings</AlertDialog.Header>
          <AlertDialog.Body>
            This will end the first innings. This action cannot be reversed.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}>
                Cancel
              </Button>
              <Button
                colorScheme="primary"
                onPress={() => navigation.navigate('Home')}>
                Finish
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>

      <Modal
        size="xs"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        closeOnOverlayClick={false}>
        <Modal.Content maxWidth="400px">
          <Modal.Body>
            <Center px={5}>
              <Heading size="3xl">{timeLeft}</Heading>
            </Center>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
