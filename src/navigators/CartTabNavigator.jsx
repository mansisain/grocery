import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ThankYou from '../screens/CheckoutScreen/ThankYou';

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Thank you" component={ThankYou} />
    </Stack.Navigator>
  );
};
export default CartStackNavigator;
