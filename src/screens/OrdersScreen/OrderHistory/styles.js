import {StyleSheet} from 'react-native';
import {color} from '../../../constant/color';

export const styles = StyleSheet.create({
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    flexBasis: '70%',
  },
  date: {
    color: 'rgb(163,163,163)',
  },
  btnContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
    flexDirection: 'row',
  },
  renderItemContainer: {
    margin: 16,
  },
  rating: {
    color: color.primary,
    alignSelf: 'center',
    marginTop: '4%',
    marginLeft: '6%',
  },
  orderStatus: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: '3%',
  },
  listTopItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
