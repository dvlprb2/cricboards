import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabHeaderOptions} from '../../theme';
import {HomeScreen} from './Home';
import {Home, User} from 'react-native-feather';
import {ProfileScreen} from './Profile';

const Tab = createBottomTabNavigator();

const options = {
  tabBarAllowFontScaling: true,
  tabBarActiveTintColor: '#2255a4',
};

export const TabScreen: React.FC = () => {
  const homeTabBarIcon = ({color}: {color: string}) => <Home color={color} />;
  const profileTabBarIcon = ({color}: {color: string}) => (
    <User color={color} />
  );

  return (
    <Tab.Navigator screenOptions={tabHeaderOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...options,
          tabBarIcon: homeTabBarIcon,
        }}
      />
      {/*<Tab.Screen*/}
      {/*  name="Search"*/}
      {/*  component={SearchScreen}*/}
      {/*  options={{*/}
      {/*    ...options,*/}
      {/*    tabBarIcon: ({color}) => <Search color={color} />,*/}
      {/*    tabBarLabel: 'Players',*/}
      {/*  }}*/}
      {/*/>*/}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          ...options,
          tabBarIcon: profileTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};
