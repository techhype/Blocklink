import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableHighlight } from 'react-native';
import moveToBottom from '../../library/utils/moveToBottom';
import { set } from 'react-native-reanimated';

const signUp = () => {
	return (
		<TouchableHighlight>
			<View style={styles.button}>
					<Text style={{ color: 'white', fontSize: 14 }}>Sign Up</Text>
			</View>
		</TouchableHighlight>
	);
};

const SignUp = ({ navigation }) => {
	const [username,setUsername] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [mnumber,setMnumber] = useState('');

	// sends Credentials to Backend (Node.js) 
	sendCredentials = ()=>{
		// Need to start Ngrok to access Backend from React Native
		//use to access Backend from the LOCALHOST for Development
		fetch('http://44b225591e06.ngrok.io/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        mnumber: mnumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
	}
	return (
		<View style={styles.container}>
			<Text>Demo form</Text>
			<View >
				<TextInput 
					placeholder="User Name" 
					style={styles.inputStyle}
					value={username}
					onChangeText={ (text)=>setUsername(text) }
					autoCapitalize= 'none' />
				<TextInput 
					placeholder="Email" 
					keyboardType= 'email-address'
					style={styles.inputStyle}
					value= {email}
					onChangeText={ (text)=>setEmail(text) }
					autoCapitalize= 'none' />
				<TextInput 
					placeholder="Password" 
					style={styles.inputStyle} 
					secureTextEntry={true}
					value= {password}
					onChangeText={ (text)=>setPassword(text) } />
				<TextInput 
					placeholder="Mobile Number" 
					keyboardType= "number-pad"
					style={styles.inputStyle}
					value= {mnumber}
					onChangeText={ (text)=>setMnumber(text) } />
				{/*  Component Inheritance Not working */}
				{/* <signUp /> */}
				{
					moveToBottom(
							<Fragment>
									<TouchableHighlight onPress={() => sendCredentials()}>
										<View style={styles.button}>
											<Text style={{ color: 'white', fontSize: 22, fontFamily: 'Inter Medium' }}>
												Sign Up
											</Text>
										</View>
									</TouchableHighlight>
									<TouchableHighlight onPress={() => navigation.navigate('Login')}>
										<View style={[styles.button, { backgroundColor: "#293448", borderColor: "#293448" }]}>
											<Text style={{ color: 'white', fontSize: 22, fontFamily: 'Inter Medium' }}>
												Have Account?
											</Text>
										</View>
									</TouchableHighlight>
							</Fragment>
					)
				}
			</View>
		</View>
	);
}

const check = {
	isAndroid: () => {
			return Platform.OS == 'android'
	}
}

const styles = StyleSheet.create({
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
			height:52,
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

});


export default SignUp;