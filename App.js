import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Index from './src';

export default function App() {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}
