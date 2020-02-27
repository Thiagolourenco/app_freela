import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';

import Login from '../pages/Login';
// import Dashboard from './pages/Dashboard';
import RequestProfile from '../pages/RequestProfile';
import ReviewsStar from '../pages/ReviewsStar';
import SignIn from '../pages/SignIn';

import DashboardDrawer from './dashboard.routes';

// Variaveis de Navegação
const Stack = createStackNavigator();

enableScreens();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DashboardDrawer" component={DashboardDrawer} />
      <Stack.Screen name="RequestProfile" component={RequestProfile} />
      <Stack.Screen name="ReviewsStar" component={ReviewsStar} />
    </Stack.Navigator>
  );
}
