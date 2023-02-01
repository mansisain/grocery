import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    marginTop: '5%',
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    paddingBottom: '5%',
  },
  accountContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '4%',
  },
  iconStyle: {
    margin: 10,
  },
});
