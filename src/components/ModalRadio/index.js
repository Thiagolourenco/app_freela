import React from 'react';
import {View, Text, Modal} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Container} from './styles';

export default function ModalRadio({children}) {
  //   const [checked, setChecked] = useState('first');

  return (
    <Modal visible={true} transparent={true}>
      <Container>{children}</Container>
    </Modal>
  );
}
