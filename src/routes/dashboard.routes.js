import * as React from 'react';
import {Button, View} from 'react-native';
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

export default function DashboardDrawer() {
  return (
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
  );
}
