import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    marginTop: '5%',
    color: 'black',
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    paddingBottom: '5%',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: '4%',
  },
  btnContainer: {
    alignItems: 'center',
  },
  userInfoContainer: {
    margin: '3%',
  },
  profileName: {
    fontSize: 25,
    color: 'black',
    marginVertical: '5%',
    fontWeight: 'bold',
  },
});
