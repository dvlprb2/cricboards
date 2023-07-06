import {Icon, Input, VStack} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";

export const SearchBar = () => {
    return <VStack w="98%" space={5} alignSelf="center">
        <Input placeholder="Search Player" size="2xl"
               InputLeftElement={<Icon m="2" ml="3" size="6" as={<MaterialIcons name="search"/>}/>}/>
    </VStack>;
}