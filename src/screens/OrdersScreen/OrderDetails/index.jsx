import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, View, Image, Text, ScrollView} from 'react-native';
import {Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';

import BillDetails from '../../../components/BillDetails';
import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';

const OrderDetails = () => {
  const id = useRoute().params.id;
  const orderDetail = useSelector(state => state.ordersReducer.orders);
  const orders = orderDetail.filter(item => id === item.orderId);
  const getCartProducts = orders[0].priceDetail.products;

  const renderListItem = ({item}) => (
    <View style={styles.renderItemContainer}>
      <Image source={{uri: item.imageUrl}} style={styles.imgStyle} />
      <Text style={globalStyle.itemFontSize}>{item.title}</Text>
      <Text style={[globalStyle.priceTxt, globalStyle.itemFontSize]}>
        {item.price}
      </Text>
      <Text style={[globalStyle.itemFontSize, styles.qty]}>
        QTY: {item.qty}
      </Text>
    </View>
  );

  return (
    <ScrollView style={globalStyle.container}>
      <View style={styles.topDetailContainer}>
        <Text style={styles.topDetail}>Order ID: {id}</Text>
        <Text style={styles.topDetail}>${orders[0].priceDetail.subTotal}</Text>
      </View>

      <FlatList
        data={getCartProducts}
        horizontal
        renderItem={renderListItem}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={[globalStyle.headerText, globalStyle.header]}>
        Shipping Detail
      </Text>

      <View style={styles.addressContainer}>
        <Text style={globalStyle.nameStyle}>
          {orders[0].selectedAddress.firstName}
          {orders[0].selectedAddress.lastName}
        </Text>
        <Text style={globalStyle.itemFontSize}>
          {orders[0].selectedAddress.addressType}
          {orders[0].selectedAddress.street}
          {orders[0].selectedAddress.area}
          {orders[0].selectedAddress.house}
          {orders[0].selectedAddress.block}
        </Text>
      </View>
      <Divider />
      <Text style={[globalStyle.header, styles.heading]}>Price Detail</Text>
      <BillDetails detail="Total" price={orders[0].priceDetail.total} />
      <BillDetails
        detail="Delivery Charge"
        price={orders[0].priceDetail.deliveryCharge}
      />
      <BillDetails detail="Coupon" price="Not Available" />
      <BillDetails detail="Tax" price={orders[0].priceDetail.tax} />
      <BillDetails detail="Sub Total" price={orders[0].priceDetail.subTotal} />

      <Text style={[globalStyle.header, styles.heading]}>Payment Mode</Text>
      <Text style={styles.paymentMethod}>{orders[0].payment}</Text>
    </ScrollView>
  );
};
export default OrderDetails;
