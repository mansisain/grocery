import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import HomeStackNavigator from './GroceryStackNavigator';
import SearchScreen from '../screens/SearchScreen';
import {color} from '../constant/color';
import AccountNavigator from './AccountNavigator';
import CartStackNavigator from './CartTabNavigator';

const Tab = createBottomTabNavigator();

export default function GroceryTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: color.primary}}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={30}
              color={focused ? color.primary : 'black'}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="search1"
              size={30}
              color={focused ? color.primary : 'black'}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="shoppingcart"
              size={30}
              color={focused ? color.primary : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              size={30}
              color={focused ? color.primary : 'black'}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
