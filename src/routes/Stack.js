import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import Contact from '../pages/Contact';
import Logout from '../pages/Logout';

import RequestProfile from '../pages/RequestProfile';
import ReviewsStar from '../pages/ReviewsStar';
import Description from '../pages/Description';

const Stack = createStackNavigator();

export default function StackDrawer(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RequestProfile"
        component={RequestProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReviewsStar"
        component={ReviewsStar}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Description" component={Description} />
    </Stack.Navigator>
  );
}
