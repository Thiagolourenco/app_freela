import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import Contact from '../pages/Contact';
import Logout from '../pages/Logout';

import RequestProfile from '../pages/RequestProfile';
import ReviewsStar from '../pages/ReviewsStar';

const Stack = createStackNavigator();

export default function StackDrawer(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Logout" component={Logout} />

      <Stack.Screen name="RequestProfile" component={RequestProfile} />
      <Stack.Screen name="ReviewsStar" component={ReviewsStar} />
    </Stack.Navigator>
  );
}
