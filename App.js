/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import firebaseSetup from './src/config/firebase'

const App = () => {
  const { auth } = firebaseSetup()

  const [confirm, setConfirm] = useState('');
  const [code, setCode] = useState('');

  const signWithPhoneNumber = async(phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
    setConfirm(confirmation),
    console.log('confirmation --->>>app 44>', confirmation)
  }
 // confirming otp from firebase
 const confirmCode = async () => {
  try {
     await confirmation.confirm(code);
    
  } catch (error) {
    alert(JSON.stringify(error));
    // alert('Please Enter The Correct OTP');
  }
};

  if(!confirm) {
    return(
    <>
      <Text> React native Sign In</Text>
      <Button onPress={() =>  signWithPhoneNumber('+923047955183')} title="sign in" />
    </>
    )
  }
  return (
    <>
      <Text> React native Sign Up</Text>
      <TextInput
      value={code}
      onChangeText= {(t)=> setCode(t)}
       />
      <Button onPress={() =>  confirmCode()} title="sign up" />
    </>
  );
};

export default App;
