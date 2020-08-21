import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen:HomeScreen,
      header: null,
    },
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Welcome: {
      screen:WelcomeScreen,
      navigationOptions:{
        headerShown:false,
      }
    }
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default createAppContainer(AppNavigator);