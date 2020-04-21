import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import './src/config/ReactotronConfig';

import Index from './src';

import {store, persistor} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate persistor={persistor}>
          <Index />
          <FlashMessage position="top" floating={true} />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}
