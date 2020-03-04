import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  TextSubTitle,
  TextTitle,
  Header,
  ButtonArrowLeft,
} from './styles';

// import Header from '../../components/Header';

export default function Contact() {
  const navigation = useNavigation();

  function handleOpenDrawer() {
    navigation.openDrawer();
  }

  return (
    <Container>
      {/* <Header navigation={navigation} title="Contacts" /> */}
      <Header>
        <ButtonArrowLeft onPress={handleOpenDrawer}>
          <Icon name="menu" size={32} color="#fff" />
        </ButtonArrowLeft>
      </Header>
      <TextTitle>Entre em Contato</TextTitle>
      <TextSubTitle>
        Para entrar em contato conosco poderá enviar um para este endereço ou
        entre em nossas redes socias
      </TextSubTitle>
    </Container>
  );
}
