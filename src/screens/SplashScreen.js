import React, { Fragment } from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet, Platform } from 'react-native';


const SplashScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <Image
        style={{ width: 80, height: 80, marginBottom: 30 }}
        source={require('../../assets/img/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 250,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 50,
    textAlign: "center",
  }
})

export default SplashScreen;