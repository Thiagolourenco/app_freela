import React from 'react';
import {Text} from 'react-native';

import {Container, TextSubTitle, TextTitle} from './styles';

// import Header from '../../components/Header';

export default function Contact({navigation}) {
  return (
    <Container>
      {/* <Header navigation={navigation} title="Contacts" /> */}
      <TextTitle>Entre em Contato</TextTitle>
      <TextSubTitle>
        Para entrar em contato conosco poderá enviar um para este endereço ou
        entre em nossas redes socias
      </TextSubTitle>
    </Container>
  );
}
