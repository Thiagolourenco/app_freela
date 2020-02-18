import React, {useEffect, useState} from 'react';
import {Text, AsyncStorage, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-community/google-signin';

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

  useEffect(() => {
    _configureGoogleSignIn();
  });

  function _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: 'AIzaSyAqGGoxUpiSOzqYWEiVOpHBJvP85QP5o8Q',
      offlineAccess: false,
    });
  }

  async function _getCurrentUser() {
    try {
      const user = await GoogleSignin.signInSilently();
      setUserInfo(user);
    } catch (err) {
      console.log(err);
    }
  }
  // useEffect(() => {
  //   bootstrap();
  // }, []);

  // function handleNavigateDashboard() {
  //   // navigation.navigate('Dashboard');
  // }

  // async function googleLogin() {
  //   try {
  //     // add any configuration settings here:
  //     await GoogleSignin.configure();

  //     const data = await GoogleSignin.signIn();

  //     // create a new firebase credential with the token
  //     const credential = firebase.auth.GoogleAuthProvider.credential(
  //       data.idToken,
  //       data.accessToken,
  //     );
  //     // login with credential
  //     const firebaseUserCredential = await firebase
  //       .auth()
  //       .signInWithCredential(credential);

  //     console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  function handleNavigate() {
    navigation('Dashboard');
  }

  return (
    <Container>
      <TextInit>Welcome Message</TextInit>
      <ImageView />
      <ButtonSignIn onPress={_getCurrentUser}>
        <ButtonImage source={logoGoogle} />
        <ButtonSignInText>BEGIN SESSION</ButtonSignInText>
      </ButtonSignIn>
    </Container>
  );
}
