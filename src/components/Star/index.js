import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Star({filled}) {
  return (
    <Icon
      name={filled === true ? 'star' : 'star-o'}
      color="#ffd203"
      size={35}
      style={{marginHorizontal: 6}}
    />
  );
}
