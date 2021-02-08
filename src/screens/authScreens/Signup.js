import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Button} from 'react-native-paper';
import IntlPhoneInput from 'react-native-intl-phone-input';

const SignupScreen = ({navigation}) => {
  const [mobileNumber, setmobileNumber] = useState('');
  const [userId, setUserId] = useState('')
  const onChangeText = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    setmobileNumber(`${dialCode}${phoneNumber}`);
    setUserId(unmaskedPhoneNumber)
  };

  const next = () => {
    if (mobileNumber.length >= 13) {
      navigation.replace('OTPScreen', {mobileNumber, userId});
    } else {
      alert('Please Enter a 11 Digit Number');
    }
  };
  return (
    <View style={styles.appContainer}>
      <Animatable.View animation="fadeInUpBig" style={styles.loginCard}>
        <Animatable.Image animation='zoomIn' style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.loginCardTitle}>Sign Up To Blood Bank</Text>
        <Text style={{...styles.loginCardDis, fontSize: 18,}}>Create your Account ...</Text>

        <View style={styles.InputFieldCont}>
          <Text style={styles.InputFieldLable}>Mobile Number :</Text>
          <IntlPhoneInput
            onChangeText={(text) => onChangeText(text)}
            defaultCountry="PK"
          />

              {
                  mobileNumber ==='' ? 
                  <View></View> 
                  : mobileNumber.length < 13 ? 
                  <Animatable.Text animation='fadeInLeft' style={{...styles.indicatorText, color: 'red'}}> wrong</Animatable.Text>
                  :
                  <Animatable.Text animation='fadeInLeft' style={{...styles.indicatorText, color: 'green'}}> Your Mobile Number is correct</Animatable.Text>
              }
        </View>

        <Button
          style={styles.loginButton}
          color="#c9302c"
          mode="contained"
          onPress={() => next()}>
          Next
        </Button>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginTop: 10}}
          onPress={() => navigation.replace('LoginScreen')}>
          <Text style={{...styles.loginCardDis, fontSize: 15,}}>
            Already have an Account ? Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 10,
            color: '#161b22',
            marginTop: 10,
            textAlign: 'center',
          }}>
          By Creating Account you agreed to our Terms & conditions and Privacy
          Policy
        </Text>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#c9302c',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginCard: {
    backgroundColor: '#ffffff',
    // height: 350,
    borderRadius: 15,
    padding: 10,
    paddingTop: 45,
    width: '100%',
    position: 'relative',
    marginBottom: -10,
    paddingBottom: 15,
  },
  logo: {
    width: 90,
    height: 90,
    borderWidth: 7,
    borderColor: '#c9302c',
    borderRadius: 50,
    position: 'absolute',
    top: -45,
    alignSelf: 'center',
  },
  loginCardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'center',
  },
  InputFieldCont: {
    marginTop: 5,
    padding: 2,
  },
  InputFieldLable: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 15,
    backgroundColor: '#ededed',
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginCardDis: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  loginButton: {
    marginTop: 20,
  },

  indicatorText: {
    fontSize: 10,
    fontStyle: 'italic',
    alignSelf: 'flex-end',
  },
});
export default SignupScreen;
