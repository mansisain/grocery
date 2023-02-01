import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  renderItemContainer: {
    borderWidth: 1,
    height: 180,
    margin: 6,
    width: '70%',
    padding: 20,
    flex: 1,
    borderColor: 'rgb(230,230,230)',
  },
  imgStyle: {
    height: '50%',
    width: 100,
  },
  topDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topDetail: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: '2%',
    marginVertical: '4%',
    flexBasis: '75%',
  },
  addressContainer: {
    marginVertical: '6%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    marginBottom: '5%',
  },
  qty: {
    marginTop: 7,
  },
  paymentMethod: {
    marginLeft: '4%',
    fontSize: 16,
    color: 'black',
    marginBottom: '4%',
  },
});
