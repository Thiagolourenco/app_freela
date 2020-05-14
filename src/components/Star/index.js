import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Star({filled, size}) {
  return (
    <Icon
      name={filled === true ? 'star' : 'star-o'}
      color="#ffd203"
      size={size}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
  },
});
