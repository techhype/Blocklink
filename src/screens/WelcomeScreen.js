import React, { Fragment } from 'react';
import { Text, View, TouchableHighlight, Image,StyleSheet,Platform } from 'react-native';
import moveToBottom from '../../library/utils/moveToBottom';

const WelcomeScreen = ({ navigation }) => {
    return (
        
        <View style={styles.container}>
            <Image
                style = {{width:80,height:80,marginBottom:30}}
                source = {require('../../assets/img/logo.png')}
            />
            <Text style={{fontSize:30,fontFamily:'Inter SemiBold',}}>Welcome To BlockLink</Text>
            <Text style={{textAlign:'center',marginTop:10,fontSize:20,fontFamily:'Inter Medium',}}>
                Decentralized Secured,Insured Custody 
                {'\n'}
                for Digital Assets
            </Text>
            {
                moveToBottom(
                    <Fragment>
                    <TouchableHighlight onPress={()=> navigation.navigate('SignUp')}>
                        <View style={styles.button}>
                            <Text style={{ color: 'white', fontSize: 22,fontFamily: "Inter Medium" }}>Create an Account</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                        <View style={[styles.button, { backgroundColor: "#293448", borderColor:"#293448"}]}>
                            <Text style={{ color: 'white', fontSize: 22, fontFamily:"Inter Medium", }}>Log In</Text>
                        </View>
                    </TouchableHighlight> 

                    </Fragment>
                    
                )
            }
        </View>
    );
}

const check = {
    isAndroid: ()=>{
        return Platform.OS == 'android'
    }
}


const styles = StyleSheet.create({
    container:{
        marginTop:210,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: 50,
        paddingBottom: check.isAndroid ? 14 :0,
        textAlign: "center",
    },
    bottom:{
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 36,
    },
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#e18312",
        alignItems: "center",
        backgroundColor: "#e18312",
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
    }
})
export default WelcomeScreen;