import React, {useEffect, useState} from 'react';
import {Text, Alert, StyleSheet, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import {userRequest} from '../../store/modules/user/actions';

import {
  Container,
  ButtonSignIn,
  ButtonImage,
  ButtonSignInText,
  TextInit,
  ImageView,
  SubTitle,
} from './styles';
import ContextNavigator from '../../components/ContextNavigator';
// images
import logoGoogle from '../../assets/google-icon.png';
import logotipo from '../../assets/logo.png';

export default function Login() {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const webClientId =
    '901131651483-n0ih4imsormp63pdpsuu1bfls3bt5c53.apps.googleusercontent.com';

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: webClientId, // client ID of type WEB for your server(needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
    });
  }, []);

  useEffect(() => {
    async function navigationLoadHome() {
      if (loggedIn === true) {
        dispatch(userRequest(userInfo, navigation));

        // await api
        //   .post('users', userData)
        //   .then(res => console.log('RESPONSE', res))
        //   .catch(err => console.log('ERRO', err));
      } else {
        console.log('EXAMPLE');
      }
    }

    navigationLoadHome();
  }, [loggedIn]);

  async function _signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userData = await GoogleSignin.signIn();
      console.log('USER', userData);
      setUserInfo(userData.user);
      setLoggedIn(true);
    } catch (error) {
      console.log('error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  async function getCurrentUserInfo() {
    try {
      const userData = await GoogleSignin.signInSilently();

      setUserInfo(userData.user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
        setLoggedIn(false);
      }
    }
  }

  function loginNavigate() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <TextInit>Tipsters Prime</TextInit>
      <SubTitle>Discover the best tipsters</SubTitle>
      <ImageView source={logotipo} />
      <ButtonSignIn onPress={loginNavigate}>
        <ButtonSignInText>BEGIN SESSION</ButtonSignInText>
      </ButtonSignIn>
      {/* <GoogleSigninButton
        style={{width: 200, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
      /> */}
    </Container>
  );
}
