import React from 'react';
import {Alert} from 'react-native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import HomeTab from './HomeTab';
import LoginScreen from './LoginScreen';
import AsyncStorage from '@react-native-community/async-storage';
const Drawer = createDrawerNavigator();


export default function HomeDrawer({navigation}) {
 

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" 
            onPress={async() => {
              await AsyncStorage.removeItem('token');
              Alert.alert('You have been logged out.');
            } } />
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Home" component={HomeTab} />
      {/* <Drawer.Screen name="New Project" component={NewProject} /> */}
    </Drawer.Navigator>
  );
}
