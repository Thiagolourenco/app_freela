import React, {useContext, useState, useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {Container, Content, TextTitleName, TextEmail} from './styles';

import ContextNavigator from '../ContextNavigator';

export default function ProfileCustom() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    async function loadDataUser() {
      const name = await AsyncStorage.getItem('@login:name');
      const email = await AsyncStorage.getItem('@login:email');
      const photo = await AsyncStorage.getItem('@login:photo');

      //   console.log('NAME => ', name, 'EMAIL => ', email, 'PHOTO => ', photo);
      setName(name);
      setEmail(email);
      setPhoto(photo);
    }

    loadDataUser();
  });

  return (
    <Container>
      <Content source={{uri: photo}} />
      {/* <Text style={{ fontSize: 20, color: "#fff" }}>J</Text>
    </View> */}
      <TextTitleName>{name}</TextTitleName>
      <TextEmail>{email}</TextEmail>
    </Container>
  );
}
