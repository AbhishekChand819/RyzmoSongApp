import React, { Component } from 'react';
import { View,Image,StyleSheet,Text,TextInput,TouchableHighlight } from 'react-native';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import {Link} from "react-router-native";
import {styles} from './styles';

function Login () {
    return (
      <View style={styles.background}>
        <Image style ={styles.tinyLogo} source={logo}/>
        <Text style ={styles.welcomeText}>Welcome back,</Text>
        <Text style ={styles.labelText}>Sign in to continue</Text>
        <Image style ={styles.contactIcon} source={contact} />
        <Image style ={styles.contactIcon2} source={contact} />
        <TextInput style={styles.emailBox}
          placeholder="Username or email"
          placeholderTextColor="#C4C4C4"
        />
        <TextInput style={styles.passwordBox}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#C4C4C4"
          >
        </TextInput>
        <TouchableHighlight style={styles.SignInButton}>
          <Text style={styles.SignInButtonText}>Sign In</Text>
        </TouchableHighlight> 
        <View style={styles.labelText2}>
          <Link to="/signup">
            <Text style={{color: "#FFFFFF"}}> Don’t have an account?        
                <Text style={{color: "#EE008F"}}> Sign Up</Text>
            </Text>
          </Link>   
        </View>
        <View style={styles.labelText3}>
          <Text style={{color: "#D3D3D3", textAlign: 'center'}}>
            By clicking Sign In, you agree to our <Text style={{color: "#EE008F",textDecorationLine:"underline"}}>Terms</Text> and that you have read our <Text style={{color: "#EE008F",textDecorationLine:"underline"}}>Data Use policy</Text>
          </Text>   
        </View>
        </View>
    );
}

export default Login;