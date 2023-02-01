import React from 'react';
import {Text, View} from 'react-native';

import {globalStyle} from '../../constant/globalStyle';
import {styles} from './styles';

const OrderDetails = ({orderDetail, details}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.orderDetail}>{orderDetail}</Text>
        <Text style={[styles.orderDetail]}>{details}</Text>
      </View>
      <View style={globalStyle.itemDivider} />
    </>
  );
};
export default OrderDetails;
