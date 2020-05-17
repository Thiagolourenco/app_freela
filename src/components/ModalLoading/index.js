import React from 'react';
import {Modal, View, Text, ActivityIndicator, StyleSheet} from 'react-native';

export default function ModalLoading({visible, onRequestClose}) {
  return (
    <Modal
      visible={visible}
      onRequestClose={() => onRequestClose()}
      transparent={true}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
