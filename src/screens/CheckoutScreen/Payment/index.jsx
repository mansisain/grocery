import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Card, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';
import {color} from '../../../constant/color';
import CustomButton from '../../../components/Button';
import {getPayment} from '../../../redux/actions/userAction';

const Payment = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const placeOrderBtnHandler = () => {
    dispatch(getPayment(value));
    navigation.navigate('Thank you');
  };

  return (
    <ScrollView>
      <Text style={[globalStyle.header, globalStyle.headerText]}>
        Payment Options
      </Text>

      <Card.Title
        title="Credit/Debit Card"
        style={styles.card}
        left={props => (
          <RadioButton.Group
            {...props}
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            <RadioButton value="Card" color={color.primary} />
          </RadioButton.Group>
        )}
      />
      <Card.Title
        title="Cash On Delivery"
        style={styles.card}
        left={props => (
          <RadioButton.Group
            {...props}
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            <RadioButton value="COD" color={color.primary} />
          </RadioButton.Group>
        )}
      />
      <View style={styles.btnContainer}>
        <CustomButton
          btnTitle="Place Order"
          onPress={placeOrderBtnHandler}
          disabled={!value ? true : false}
        />
      </View>
    </ScrollView>
  );
};
export default Payment;
