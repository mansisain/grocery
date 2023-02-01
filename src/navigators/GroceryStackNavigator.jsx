import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SuperFreshScreen from '../screens/SuperFreshScreen';
import PopularProductsScreen from '../screens/SuperFreshScreen/PopularProductsScreen';
import ProductDetails from '../screens/ProductDetails';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Super Fresh"
        component={SuperFreshScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Popular Products"
        component={PopularProductsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Product Details" component={ProductDetails} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
