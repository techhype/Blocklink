import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function SendCoin() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Send Coin!</Text>
    </View>
  );
}

function ReceiveCoin() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Receive Coin!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor: '#0c6df2'}}>
      <Tab.Screen
        name="Send"
        component={SendCoin}
        options={{
          tabBarLabel: 'Send',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-arrow-right-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Receive"
        component={ReceiveCoin}
        options={{
          tabBarLabel: 'Receive',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-arrow-left-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}