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
import ContextNavigator from '../../components/ContextNavigator';
// images
import logoGoogle from '../../assets/google-icon.png';
import logotipo from '../../assets/icon.png';

export default function Login() {
  const navigation = useNavigation();

  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '94821132195-p2m1606s1j0un9uk614d9mhkk0p6praj.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //   hostedDomain: '', // specifies a hosted domain restriction
      //   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      //   accountName: '', // [Android] specifies an account name on the device that should be used
      //   iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  // useEffect(() => {
  //   _getCurrentUserInfo();
  // });

  // async function isSignedIn() {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   console.log('IsSignedIn => ', isSignedIn);
  //   if (isSignedIn) {
  //     console.log('User is already signed in');
  //     _getCurrentUserInfo();
  //   } else {
  //     console.log('eror');
  //   }
  // }

  // async function _getCurrentUserInfo() {
  //   try {
  //     const userInfo = await GoogleSignin.signInSilently();
  //     console.log('User Info => ', userInfo);
  //     setUserInfo(userInfo);
  //   } catch (err) {
  //     if (err.code === statusCodes.SIGN_IN_REQUIRED) {
  //       console.log('User has not signed in yet');
  //     } else {
  //       console.log("Something went wrong. Unable to get user's  info");
  //     }
  //     console.log(err);
  //   }
  // }

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const credential = api.auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken,
      );
      //   this.setState({userInfo});
      // console.log(userInfo);
      console.log(credential);
      // const firebaseAuth = api.auth().signInWithCredential(credential);
      setUserInfo(userInfo);
      navigation.navigate('DashboardDrawer');
      alert('DASg');
      try {
        await AsyncStorage.setItem('@login:name', userInfo.user.name);
        await AsyncStorage.setItem('@login:email', userInfo.user.email);
        await AsyncStorage.setItem('@login:photo', userInfo.user.photo);
      } catch (err) {
        console.log(err);
      }
      console.log('CHEGA AQUI -> ');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.log(error);
    }
  }

  function handleNavigate() {
    navigation.navigate('DashboardDrawer');
  }

  return (
    <Container>
      <TextInit>Welcome Message</TextInit>
      <ImageView source={logotipo} />
      <ButtonSignIn onPress={signIn}>
        <ButtonImage source={logoGoogle} />
        <ButtonSignInText>BEGIN SESSION</ButtonSignInText>
      </ButtonSignIn>
    </Container>
  );
}
