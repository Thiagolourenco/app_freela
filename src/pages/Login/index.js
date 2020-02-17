import React, {useEffect} from 'react';
import {Text, AsyncStorage, Alert} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import {firebase} from '@react-native-firebase/auth';

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

export default function Login({navigation}) {
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

  return (
    <Container>
      <TextInit>Welcome Message</TextInit>
      <ImageView />
      <ButtonSignIn onPress={() => {}}>
        <ButtonImage source={logoGoogle} />
        <ButtonSignInText>BEGIN SESSION</ButtonSignInText>
      </ButtonSignIn>
    </Container>
  );
}
