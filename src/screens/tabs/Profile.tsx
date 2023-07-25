import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Avatar, Button, Heading, Text, VStack} from 'native-base';
import {getCurrentUserInfo, signOut} from '../../services/auth';
import {User} from '@react-native-google-signin/google-signin';
import {Loading} from '../../components/Loading';

interface ProfileScreenProps {
  navigation: any; // Replace 'any' with the appropriate type for the navigation prop
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCurrentUserInfo()
      .then(res => {
        console.log(res);
        if (res) {
          setUserInfo(res);
        }
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = () => {
    signOut().then(() => navigation.navigate('Login'));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <VStack margin={5} justifyContent="center" alignItems="center">
          <Avatar
            alignSelf="center"
            size="2xl"
            marginBottom={4}
            source={{
              uri: userInfo?.user.photo!!,
            }}>
            AJ
          </Avatar>
          <Heading color="coolGray.700">{userInfo?.user.name}</Heading>
          <Text color="coolGray.500">{userInfo?.user.email}</Text>
          <Button
            variant="link"
            color="primary.600"
            size="sm"
            _text={{fontSize: 16}}
            onPress={handleLogout}>
            Logout
          </Button>
        </VStack>
        <VStack margin={3} space={3}>
          <Heading fontWeight={600} size="md">
            My Stats
          </Heading>
          {/*<FlatList*/}
          {/*  horizontal*/}
          {/*  data={recipes}*/}
          {/*  renderItem={({item}) => (*/}
          {/*    <RecipeCard item={item} navigation={navigation} />*/}
          {/*  )}*/}
          {/*  showsHorizontalScrollIndicator={false}*/}
          {/*  keyExtractor={item => item.id.toString()} // Replace 'id' with the unique identifier property of the Recipe type*/}
          {/*/>*/}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
