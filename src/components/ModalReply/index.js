import React from 'react';
import {View, Text, Modal} from 'react-native';

import {Container} from './styles';

export default function ModalReply({visible, children}) {
  return (
    <Modal visible={visible} animationType="none" transparent={true}>
      <Container>{children}</Container>
    </Modal>
  );
}
