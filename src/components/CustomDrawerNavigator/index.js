import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View
          style={styles.content}
          // source={{ uri: imageUrl }}
        />
        {/* <Text style={{ fontSize: 20, color: "#fff" }}>J</Text>
    </View> */}
        <Text style={styles.textTitleName}>Thiago Lourenco</Text>
        <Text style={styles.textEmail}>thiago.lourenco@deway.com.bt</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: '#1a9ae2',
  },
  content: {
    height: 50,
    width: 50,
    backgroundColor: '#3EA8E3',
    borderRadius: 25,
    marginTop: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitleName: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    marginLeft: 10,
  },
  textEmail: {
    fontSize: 14,
    color: '#fff',
    marginTop: 3,
    marginLeft: 10,
    marginBottom: 10,
  },
});
