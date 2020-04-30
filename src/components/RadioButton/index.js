import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

export default function RadioButton({onPress, checked}) {
  return (
    <TouchableOpacity style={styles.circle} onPress={onPress}>
      {checked ? <View style={styles.checkedCircle} /> : <View />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4834d4',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4834d4',
  },
});
