import React, {useEffect, useState} from 'react';
import {Text, AsyncStorage, Alert, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import api from '../../services/api';

import {
  Container,
  ButtonSignIn,
  ButtonImage,
  ButtonSignInText,
  TextInit,
  ImageView,
} from './styles';

// images
import logoGoogle from '../../assets/google-icon.png';

export default function Login() {
  const navigation = useNavigation();

  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    _configureGoogleSignIn();
  });

  function _configureGoogleSignIn() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '155089571805-mhp3r3n57kvbdqdt3lb41bgra5s5rpdd.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }

  useEffect(() => {
    _getCurrentUserInfo();
  });

  async function isSignedIn() {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log('IsSignedIn => ', isSignedIn);
    if (isSignedIn) {
      console.log('User is already signed in');
      _getCurrentUserInfo();
    } else {
      console.log('eror');
    }
  }

  async function _getCurrentUserInfo() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('User Info => ', userInfo);
      setUserInfo(userInfo);
    } catch (err) {
      if (err.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('User has not signed in yet');
      } else {
        console.log("Something went wrong. Unable to get user's  info");
      }
      console.log(err);
    }
  }

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      console.log('USER INFO => ', userInfo);
      const credential = api.auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken,
      );

      const firebaseAuth = await api.auth().signInWithCredential(credential);

      navigation.navigate('Dashboard');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Cancelled the login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services Not Available or Outdated');
      } else {
        console.log('Some other Error Happened', error.code, error.message);
      }
    }
  }

  return (
    <Container>
      <TextInit>Welcome Message</TextInit>
      <ImageView />
      <ButtonSignIn onPress={signIn}>
        <ButtonImage source={logoGoogle} />
        <ButtonSignInText>BEGIN SESSION</ButtonSignInText>
      </ButtonSignIn>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   buttonGoogleSignIn: {

//   }
// })
