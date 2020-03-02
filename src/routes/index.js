import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';

import Login from '../pages/Login';
// import Dashboard from './pages/Dashboard';
import RequestProfile from '../pages/RequestProfile';
import ReviewsStar from '../pages/ReviewsStar';
import SignIn from '../pages/SignIn';
import ReplyRespoder from '../pages/ReplyRespoder';

import DashboardDrawer from './dashboard.routes';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Logout from '../pages/Logout';
// Custom Drawer
import CustomDrawerNavigator from '../components/CustomDrawerNavigator';

const Drawer = createDrawerNavigator();

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
      <Stack.Screen name="DashboardDrawer">
        {() => (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={CustomDrawerNavigator}>
            <Drawer.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                drawerIcon: () => <Icon name="home" size={30} color="#000" />,
              }}
            />
            <Drawer.Screen
              name="Contact"
              component={Contact}
              options={{drawerIcon: () => <Icon name="send" size={30} />}}
              color="#000"
            />
            <Drawer.Screen
              name="Admin"
              component={Admin}
              options={{
                drawerIcon: () => (
                  <Icon name="assignment-ind" size={30} color="#000" />
                ),
              }}
            />
            <Drawer.Screen
              name="Logout"
              component={Logout}
              options={{
                drawerIcon: () => <Icon name="input" size={30} color="#000" />,
              }}
            />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
          </Drawer.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name="RequestProfile" component={RequestProfile} />
      <Stack.Screen name="ReviewsStar" component={ReviewsStar} />
      <Stack.Screen name="ReplyRespoder" component={ReplyRespoder} />
    </Stack.Navigator>
  );
}
