import React from 'react';
import { Text, View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Login Screen</Text>
        <Button
          title="Create Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    );
}

export default LoginScreen;