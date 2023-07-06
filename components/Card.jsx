import {Avatar, Box, Heading, HStack, Stack, Text} from "native-base";

export const Card = () => {
    return <Box alignItems="center" marginRight={2}>
        <Box maxW="80" rounded="sm" overflow="hidden" borderColor="primary" borderWidth="1" backgroundColor="coolGray.50">
            <HStack p="4" space={3} alignItems="center">
                <Avatar bg="info.500" size="sm" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                    AJ
                </Avatar>
                <Stack>
                    <Heading size="sm">The Garden City</Heading>
                    <Text color="coolGray.600" fontWeight="400">6 mins ago</Text>
                </Stack>
            </HStack>
        </Box>
    </Box>;
};