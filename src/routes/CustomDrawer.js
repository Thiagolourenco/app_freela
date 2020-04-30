import React from 'react';
import {View, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileCustom from '../components/ProfileCustom';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props} showsHorizontalScrollIndicator={false}>
      <ProfileCustom />
      <DrawerItem
        label="Dashboard"
        onPress={() => props.navigation.navigate('Dashboard')}
        icon={() => <Icon name="home" size={30} color="#000" />}
      />
      <DrawerItem
        label="Admin"
        onPress={() => props.navigation.navigate('Admin')}
        icon={() => <Icon name="send" size={30} color="#000" />}
      />
      <DrawerItem
        label="Contact"
        onPress={() => props.navigation.navigate('Contact')}
        icon={() => <Icon name="assignment-ind" size={30} color="#000" />}
      />
      <DrawerItem
        label="Logout"
        onPress={() => props.navigation.navigate('Logout')}
        icon={() => <Icon name="input" size={30} color="#000" />}
      />
    </DrawerContentScrollView>
  );
}
