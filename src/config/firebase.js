import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB25gAI9GIvo99e80dqVrd9Uis0iD01lk8',
  authDomain: 'blood-donors-community.firebaseapp.com',
  projectId: 'blood-donors-community',
  storageBucket: 'blood-donors-community.appspot.com',
  messagingSenderId: '902610402595',
  appId: '1:902610402595:web:f1d73e138501c672f42096',
  measurementId: 'G-JWHDW0049Z',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default () => {
  return {firebase, auth};
};
