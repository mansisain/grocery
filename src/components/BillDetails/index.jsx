import React from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from '../../constant/globalStyle';

import {styles} from './style';

const BillDetails = ({detail, price}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={globalStyle.itemFontSize}>{detail}</Text>
        <Text style={globalStyle.itemFontSize}>${price}</Text>
      </View>
      <View style={styles.itemDivider}></View>
    </>
  );
};
export default BillDetails;
