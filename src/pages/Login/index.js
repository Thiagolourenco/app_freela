import React, {useEffect, useState} from 'react';
import {
  Text,
  AsyncStorage,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {useDispatch, useSelector} from 'react-redux';

import api from '../../services/api';
import {userRequest} from '../../store/modules/user/actions';

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

export default function Login({navigation}) {
  // const navigation = useNavigation();

  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [user, setUser] = useState('');
  // const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhoto] = useState('');
  const [idToken, setIdToken] = useState('');

  const [userLoading, setUserLoading] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);

  useEffect(() => {
    async function loadGoogle() {
      GoogleSignin.hasPlayServices();
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId:
          '94821132195-p2m1606s1j0un9uk614d9mhkk0p6praj.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        //   hostedDomain: '', // specifies a hosted domain restriction
        //   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
        forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
        //   accountName: '', // [Android] specifies an account name on the device that should be used
        //   iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      });

      if (userLoading) {
        navigation.navigate('DashboardDrawer');
      }
    }
    loadGoogle();
  });

  async function signIns() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const credential = api.auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken,
      );

      setUserInfo(userInfo);
      navigation.navigate('DashboardDrawer');

      return userInfo.accessToken;
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

  async function handleNavigate() {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    setIdToken(userInfo.idToken);
    setName(userInfo.user.name);
    setEmail(userInfo.user.email);
    setPhoto(userInfo.user.photo);

    if (loading === false) {
      navigation.navigate('DashboardDrawer');
    }

    try {
      await AsyncStorage.setItem('@login:name', userInfo.user.name);
      await AsyncStorage.setItem('@login:email', userInfo.user.email);
      await AsyncStorage.setItem('@login:photo', userInfo.user.photo);
    } catch (err) {
      console.log(err);
    }

    dispatch(
      userRequest(
        userInfo.idToken,
        userInfo.user.email,
        userInfo.user.name,
        userInfo.user.phot,
      ),
    );
  }

  async function signIn() {
    try {
      GoogleSignin.signIn()
        .then(res => {
          setName(res.user.name);
          setEmail(res.user.email);
          setPhoto(res.user.photo);
          setUserLoading(true);
          setIdToken(res.idToken);

          navigation.navigate('DashboardDrawer');
        })
        .catch(err => console.log(err));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error);
      }
    }
  }

  function loginNavigate() {
    navigation.navigate('DashboardDrawer');
  }

  return (
    <Container>
      <TextInit>Welcome Message</TextInit>
      <ImageView source={logotipo} />
      <ButtonSignIn onPress={loginNavigate}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <ButtonSignInText>BEGIN SESSION</ButtonSignInText>
        )}
      </ButtonSignIn>
    </Container>
  );
}
