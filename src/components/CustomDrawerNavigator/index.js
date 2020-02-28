import React, {useEffect} from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {Container, Content, TextTitleName, TextEmail} from './styles';

export default function CustomDrawerContent(props) {
  // useEffect(() => {
  //   loadDataUser();
  // }, []);

  async function loadDataUser() {
    const a = await AsyncStorage.getItem('@login:name');
    console.log(a);
  }

  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Content
        // source={{ uri: imageUrl }}
        />
        {/* <Text style={{ fontSize: 20, color: "#fff" }}>J</Text>
    </View> */}
        <TextTitleName>Thiago Lourenco</TextTitleName>
        <TextEmail>thiago.lourenco@deway.com.bt</TextEmail>
      </Container>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
