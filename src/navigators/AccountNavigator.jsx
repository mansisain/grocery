import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccountScreen from '../screens/AccountScreen';
import WishlistScreen from '../screens/WishlistScreen';
import ManageAddress from '../screens/AddressScreen/ManageAddress';
import OrderHistory from '../screens/OrdersScreen/OrderHistory';
import OrderDetails from '../screens/OrdersScreen/OrderDetails';
import AddAddress from '../screens/AddressScreen/AddAddress';
import EditAddress from '../screens/AddressScreen/EditAddress';
import Profile from '../screens/ProfileScreen/Profile';
import EditProfile from '../screens/ProfileScreen/EditProfile';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountStack"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Manage Address" component={ManageAddress} />
      <Stack.Screen name="Add Address" component={AddAddress} />
      <Stack.Screen name="Edit Address" component={EditAddress} />
      <Stack.Screen name="Order History" component={OrderHistory} />
      <Stack.Screen name="Order Detail" component={OrderDetails} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
    </Stack.Navigator>
  );
};
export default AccountNavigator;
