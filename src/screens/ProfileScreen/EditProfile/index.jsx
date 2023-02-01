import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../../components/Button';
import {Avatar, TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';

import {globalStyle} from '../../../constant/globalStyle';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const EditProfile = ({navigation}) => {
  const {userDetails} = useSelector(state => state.userDataReducer);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const userInfo = useRoute().params.userInfo;

  const editUserInfo = () => {
    firestore()
      .collection('Users')
      .doc(userDetails.uid)
      .update({
        name: fullName,
        email: email,
        mobile: phoneNum,
      })
      .then(() => {
        console.log('User updated!');
      });
    navigation.navigate('Profile');
  };

  return (
    <View style={globalStyle.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Icon
          size={100}
          icon={() => <AntDesign name="user" size={50} />}
        />
        <Text style={styles.avatarBottomTxt}>Upload Photo</Text>
      </View>

      <View style={styles.nameContainer}>
        <TextInput
          label="Full Name"
          defaultValue={userInfo?.name}
          style={styles.input}
          onChangeText={val => setFullName(val)}
        />
      </View>
      <TextInput
        label="Email"
        defaultValue={userInfo?.email}
        style={styles.input}
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        label="Phone Number"
        style={styles.input}
        defaultValue={userInfo?.mobile}
        onChangeText={val => setPhoneNum(val)}
      />

      <View style={styles.btnContainer}>
        <CustomButton btnTitle="Save" onPress={editUserInfo} />
      </View>
    </View>
  );
};
export default EditProfile;
