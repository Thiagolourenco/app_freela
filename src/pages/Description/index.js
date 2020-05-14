import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

Icon.loadFont();

export default function Description() {
  const routes = useRoute();
  const navigation = useNavigation();

  const description = routes.params.description;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-back" size={30} color="#222" />
        </TouchableOpacity>
        <Text style={styles.textDescription}>Description</Text>
      </View>
      <Text style={styles.textDescriotion}> {description} </Text>
    </View>
  );
}
