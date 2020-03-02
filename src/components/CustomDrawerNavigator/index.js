import React, {useState} from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import ContextNavigator from '../ContextNavigator';
import {Container, Content, TextTitleName, TextEmail} from './styles';
import ProfileCustom from '../ProfileCustom';
function CustomDrawerContent(props) {
  // useEffect(() => {
  //   loadDataUser();
  // }, []);

  // async function loadDataUser() {
  //   const a = await AsyncStorage.getItem('@login:name');
  //   console.log(a);
  // }

  // const contextNav = useContext(ContextNavigator);
  // console.log(contextNav);

  return (
    <DrawerContentScrollView {...props}>
      <ProfileCustom />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
