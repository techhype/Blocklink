import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options= {{headerShown:false}} />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options= {
            { title: 'Dashboard',
              headerStyle: {
                backgroundColor: '#121d33',
              },
              headerTitleStyle: {
                fontFamily: 'Inter'
              },
              headerTintColor: '#fff'
            }
          } />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



