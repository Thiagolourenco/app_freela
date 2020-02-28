import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import {Container} from './styles';

export default function Logout() {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    function loadingLogout() {
      setTimeout(() => {
        setLoading(true);
        navigation.navigate('Login');
      }, 3000);

      setLoading(false);
    }

    loadingLogout();
  }, [navigation]);
  return (
    <Container>
      {loading ? null : <ActivityIndicator size={40} color="#000" />}
    </Container>
  );
}
