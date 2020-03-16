import React, {useState, useEffect} from 'react';
import {ActivityIndicator, AsyncStorage} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import {Container} from './styles';
import ModalSpinner from '../../components/ModalSpinner';

export default function Logout() {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadingLogout() {
      setTimeout(() => {
        setLoading(true);
        navigation.navigate('Login');
      }, 3000);

      await AsyncStorage.removeItem('@login:name');
      await AsyncStorage.removeItem('@login:email');
      await AsyncStorage.removeItem('@login:photo');

      setLoading(false);
    }

    loadingLogout();
  }, [navigation]);
  return <ModalSpinner visible={loading} />;
}
