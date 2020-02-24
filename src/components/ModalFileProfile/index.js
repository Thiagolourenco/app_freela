import React from 'react';
import {Modal} from 'react-native';

import {Container} from './styles';

export default function ModalFilterProfile({visible, children}) {
  return (
    <Modal visible={visible} animationType="none" transparent={true}>
      <Container>{children}</Container>
    </Modal>
  );
}
