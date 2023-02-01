import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import CartItems from './CartItems';
import ListItem from '../../components/ListItem';
import image from '../../config/image';
import BillDetails from '../../components/BillDetails';
import CustomButton from '../../components/Button';
import {globalStyle} from '../../constant/globalStyle';
import {cartBillDetails} from '../../redux/actions/userAction';

export default function CartScreen({navigation}) {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cartProductReducer.cartProducts);

  const getTotalPrice = () => {
    return cartData.reduce((total, item) => total + item.price * item.qty, 0);
  };
  const getDeliveryCharge = () => {
    const price = getTotalPrice();
    if (price > 2) {
      return 0.5;
    } else {
      return 0;
    }
  };
  const getItemTax = () => {
    return (getTotalPrice() * 6) / 100;
  };

  const getSubTotal = () => {
    return getTotalPrice() + getDeliveryCharge() + getItemTax();
  };

  return (
    <>
      {cartData == '' ? (
        <View style={styles.cartImgContainer}>
          <Image source={image.cart} style={styles.cartImgStyle} />
          <Text style={styles.emptyCartTxt}>Hey, it feels so light!</Text>
          <Text style={styles.emptyBag}>
            There is nothing in your bag. Let's add some items.
          </Text>
          <CustomButton
            icon="cart"
            btnTitle="Go Shopping"
            onPress={() => navigation.navigate('Popular Products')}
          />
        </View>
      ) : (
        <ScrollView style={globalStyle.container}>
          <ListItem
            data={cartData}
            renderItem={({item}) => (
              <CartItems
                item={item}
                onAddToCart={() => {
                  dispatch(addCartProduct(item));
                }}
              />
            )}
            ItemSeparatorComponent={() => {
              return <View style={styles.itemDivider}></View>;
            }}
          />
          <View style={styles.itemDivider}></View>
          <View style={styles.billingDetailContainer}>
            <Text style={styles.coupon}>Coupon Code</Text>
            <Text style={styles.apply}>Apply</Text>
          </View>
          <View style={styles.itemDivider}></View>
          <Text style={styles.billDetail}>Bill Details</Text>

          <BillDetails detail="Total" price={getTotalPrice()} />
          <BillDetails detail="Delivery Charge" price={getDeliveryCharge()} />
          <BillDetails detail="Coupon" price={0} />
          <BillDetails detail="Tax" price={getItemTax()} />
          <BillDetails detail="Sub Total" price={getSubTotal()} />
        </ScrollView>
      )}
      <View style={styles.bottomContainer}>
        <View style={{margin: 10}}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.totalPrice}>$ {getSubTotal()}</Text>
        </View>

        <View style={styles.checkoutBtn}>
          <CustomButton
            btnTitle="Checkout"
            onPress={() => {
              dispatch(
                cartBillDetails({
                  total: getTotalPrice(),
                  deliveryCharge: getDeliveryCharge(),
                  tax: getItemTax(),
                  subTotal: getSubTotal(),
                  products: cartData,
                }),
              );
              navigation.navigate('Checkout');
            }}
          />
        </View>
      </View>
    </>
  );
}
