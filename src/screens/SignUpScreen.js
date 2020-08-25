import React, { useState, Fragment, Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableHighlight } from 'react-native';
// import moveToBottom from '../../library/utils/moveToBottom';
// import { set } from 'react-native-reanimated';
import FloatingLabelInput from '../../library/utils/FloatingLabelInput';


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
				<FloatingLabelInput 
					label='Username'
					value={username}
					onChangeText={ (text)=>setUsername(text) }
					autoCapitalize= 'none' />
				<FloatingLabelInput 
					label='Email'
					keyboardType= 'email-address'
					value= {email}
					onChangeText={ (text)=>setEmail(text) }
					autoCapitalize= 'none' />
				<FloatingLabelInput 
					label='Password'
					secureTextEntry={true}
					value= {password}
					onChangeText={ (text)=>setPassword(text) } />
				<FloatingLabelInput 
					label='Mobile Number'
					keyboardType= "number-pad"
					value= {mnumber}
					onChangeText={ (text)=>setMnumber(text) } />
				{/*  Component Inheritance Not working */}
				{/* <signUp /> */}
				{/* {
					moveToBottom( */}
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
					{/* )
				} */}
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
			flex: 1,
			padding:30,
			backgroundColor: '#fff',
			// alignItems: 'center',
			// justifyContent: 'center',
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