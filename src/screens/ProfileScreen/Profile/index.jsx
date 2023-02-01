import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

import {styles} from './styles';
import {globalStyle} from '../../../constant/globalStyle';
import CustomButton from '../../../components/Button';
import {useSelector} from 'react-redux';
import {useState} from 'react';

const Profile = ({navigation}) => {
  const {goBack} = useNavigation();
  const {userDetails} = useSelector(state => state.userDataReducer);
  const [userInfo, setUserInfo] = useState();

  const getUserInfo = () => {
    firestore()
      .collection('Users')
      .doc(userDetails.uid)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data().userInfo);
          setUserInfo(documentSnapshot.data());
        }
      });
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={styles.header}>
        <AntDesign
          name="left"
          size={25}
          color="black"
          onPress={() => goBack()}
        />
        <Text style={styles.headerText}>Profile</Text>
        <AntDesign
          name="form"
          size={25}
          color="black"
          onPress={() =>
            navigation.navigate('Edit Profile', {
              userInfo: userInfo,
            })
          }
        />
      </View>

      <View style={styles.avatarContainer}>
        <Avatar.Text size={100} label="MS" />
        <Text style={styles.profileName}>{userInfo?.name}</Text>
      </View>
      <View style={globalStyle.itemDivider} />

      <View style={styles.userInfoContainer}>
        <Text>Email</Text>
        <Text style={globalStyle.itemFontSize}>{userInfo?.email}</Text>
      </View>
      <View style={globalStyle.itemDivider} />

      <View style={styles.userInfoContainer}>
        <Text>Mobile</Text>
        <Text style={globalStyle.itemFontSize}>{userInfo?.mobile}</Text>
      </View>
      <View style={globalStyle.itemDivider} />

      <View style={styles.btnContainer}>
        <CustomButton btnTitle="Change Password" />
      </View>
    </SafeAreaView>
  );
};
export default Profile;
