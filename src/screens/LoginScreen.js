import React, {useState, useEffect} from 'react';
import { Text,TextInput, View, TouchableHighlight,StyleSheet } from 'react-native';
import moveToBottom from '../../library/utils/moveToBottom';
import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = ({route, navigation }) => {
  const {routedEmail} = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  // sends Credentials to Backend (Node.js) 
  sendCredentials = ()=>{
  // Need to start Ngrok to access Backend from React Native
  //use to access Backend from the LOCALHOST for Development
    fetch('http://6f41d05cf2ed.ngrok.io/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem('token',data.token)
          console.log(data);
          navigation.replace("Home")
        } catch (e) {
          console.log("error:",e)
          // Alert(e)
        }
      });
  } 
  
  useEffect(()=> {
    if(routedEmail){
      setEmail(routedEmail);
    }
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.inputStyle}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.inputStyle}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {/* {
          moveToBottom( */}
      <TouchableHighlight onPress={() => sendCredentials()}>
        <View
          style={[
            styles.button,
            {backgroundColor: '#293448', borderColor: '#293448'},
          ]}>
          <Text
            style={{color: 'white', fontSize: 22, fontFamily: 'Inter Medium'}}>
            Sign In
          </Text>
        </View>
      </TouchableHighlight>
      {/* )
        } */}
    </View>
  );
}

const check = {
  isAndroid: () => {
    return Platform.OS == 'android'
  }
}

const styles = StyleSheet.create(
  {
    container: {
      marginTop: 25,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      paddingBottom: check.isAndroid ? 16 : 0,
    },
    inputStyle: {
      margin: 20,
      width: 300,
      height: 40,
      paddingLeft: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'gray',
    },
    button: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#176CDC',
      color: '#fff',
      alignItems: "center",
      backgroundColor: "#176CDC",
      width: 355,
      height: 52,
      marginTop: 10,
      padding: 10,
      // Shadow  
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
  }
);

export default LoginScreen;