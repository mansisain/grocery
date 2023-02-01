import * as React from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from '../../../components/Button';
import moment from 'moment/moment';

import HorizontalCalendar from '../../../components/HorizontalCalender.';
import {globalStyle} from '../../../constant/globalStyle';
import {DELIVERYSLOT} from '../../../data/deliverySlot';
import {selectedDeliverySlot} from '../../../redux/actions/userAction';
import {styles} from './styles';

const renderDeliverySlots = ({item}) => {
  return (
    <View style={styles.deliverySlotsContainer}>
      <Text style={globalStyle.itemFontSize}>{item.time} </Text>
      <Text style={globalStyle.itemFontSize}>$ {item.price}</Text>
      <View style={styles.customBtnContainer}>
        <CustomButton btnTitle="Choose" />
      </View>
    </View>
  );
};

export default function DeliverySlot({onScreenChange}) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const dispatch = useDispatch();

  const saveBtnHandler = () => {
    dispatch(
      selectedDeliverySlot(
        moment(selectedDate).format('DD MMMM YYYY hh:mm a').toString(),
      ),
    );
    onScreenChange(2);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[globalStyle.header, globalStyle.headerText]}>
          Reserve your delivery slot
        </Text>
        <HorizontalCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <FlatList data={DELIVERYSLOT} renderItem={renderDeliverySlots} />
      </View>

      <View style={styles.btnStyle}>
        <CustomButton
          btnTitle="save & Next"
          onPress={saveBtnHandler}
          disabled={!selectedDate ? true : false}
        />
      </View>
    </ScrollView>
  );
}
