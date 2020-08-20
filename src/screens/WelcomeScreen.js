import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Welcome To BlockLink</Text>
            <View style={styles.bottom}>
                <TouchableHighlight onPress={()=> navigation.navigate('SignUp')}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 22 }}>Create Account</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                    <View style={[styles.button, { backgroundColor: "#293448", borderColor:"#293448"}]}>
                        <Text style={{ color: 'white', fontSize: 22 }}>Log In</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: 50,
    },
    bottom:{
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        // fontFamily: "Inter SemiBold",
    },
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#0c6df2",
        alignItems: "center",
        backgroundColor: "#0c6df2",
        width: 350,
        height: 55,
        marginLeft: 20,
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
    }
})
export default HomeScreen;