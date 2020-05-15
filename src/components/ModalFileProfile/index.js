import React from 'react';
import {Modal, TouchableOpacity} from 'react-native';

import {Container} from './styles';

export default function ModalFilterProfile({
  visible,
  children,
  onRequestClose,
}) {
  return (
    <TouchableOpacity onPress={() => onRequestClose()}>
      <Modal
        visible={visible}
        animationType="none"
        transparent={true}
        onRequestClose={() => onRequestClose()}>
        <Container>{children}</Container>
      </Modal>
    </TouchableOpacity>
  );
}
