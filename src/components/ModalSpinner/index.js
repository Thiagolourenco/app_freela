import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';

import {Container, TitleExemplo} from './styles';

export default function ModalSpinner(visible) {
  return (
    <Modal visivile={visible}>
      <Container>
        <ActivityIndicator size={50} color="#ddd" />
        <TitleExemplo>Logout ...</TitleExemplo>
      </Container>
    </Modal>
  );
}
