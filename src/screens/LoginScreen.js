import React from 'react';
import { Text,TextInput, View, TouchableHighlight,StyleSheet } from 'react-native';
import moveToBottom from '../../library/utils/moveToBottom';

const LoginScreen = ({ navigation }) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Login Screen</Text>
        <TextInput placeholder="Email" style={styles.inputStyle} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputStyle} />
        {
          moveToBottom(
            <TouchableHighlight onPress={() => navigation.navigate('Login')}>
              <View style={[styles.button, { backgroundColor: "#293448", borderColor: "#293448" }]}>
                <Text style={{ color: 'white', fontSize: 22, fontFamily: 'Inter Medium' }}>Sign In</Text>
              </View>
            </TouchableHighlight>
          )
        }
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