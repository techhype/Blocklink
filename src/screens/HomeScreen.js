import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={ {flex:1,alignItems: 'center',justifyContent: 'center'} }>
            <Text>Login Screen</Text>
            <Button title='Log out' onPress={() => navigation.navigate('Login')} />
        </View>
    );
}

export default HomeScreen;