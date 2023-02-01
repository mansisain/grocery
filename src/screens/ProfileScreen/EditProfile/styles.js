import {StyleSheet} from 'react-native';
import {color} from '../../../constant/color';

export const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#fff',
    marginHorizontal: '5%',
    padding: '4%',
    width: '90%',
  },
  btnContainer: {
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: '4%',
  },
  avatarBottomTxt: {
    fontSize: 16,
    color: color.primary,
    marginVertical: '5%',
  },
});
