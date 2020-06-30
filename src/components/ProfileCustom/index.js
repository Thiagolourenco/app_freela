import React, {useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Container, Content, TextTitleName, TextEmail} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux';

import ContextNavigator from '../ContextNavigator';

export default function ProfileCustom() {
  const user = useSelector(state => state.user.userInfo);

  return (
    <Container>
      <Content source={{uri: user.photoUrl}} />
      {/* <Text style={{ fontSize: 20, color: "#fff" }}>J</Text>
    </View> */}
      <TextTitleName>{user.name}</TextTitleName>
      <TextEmail>{user.email}</TextEmail>
    </Container>
  );
}
