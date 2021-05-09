import React, { useState } from 'react';
import { View,Image,StyleSheet,Text,TextInput,TouchableHighlight, Touchable, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import {styles} from './styles';
import { url } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUp () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    setError('');
    let response = await fetch(`${url}/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, password
      })
    });
    response = await response.json() 
    if(response.message) {
      setError(response.message);
      return;
    }

    await AsyncStorage.setItem('user_id', response.userId)

    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }
  
  return (
    <View style={styles.background}>
      <Image style ={styles.tinyLogo} source={logo}/>
      <Text style ={styles.welcomeText}>Welcome!</Text>
      <Text style ={styles.labelText}>Sign up to continue</Text>
      <View style={styles.inputWrapper}>
        <TextInput 
          style={styles.inputBox}
          placeholder="Full Name"
          placeholderTextColor="#C4C4C4"
          onChangeText={text => setName(text)}
        />
        <Image style={styles.contactIcon} source={contact} />  
      </View>
      <View style={styles.inputWrapper}>
        <TextInput 
          style={styles.inputBox}
          placeholder="Email Address"
          placeholderTextColor="#C4C4C4"
          onChangeText={text => setEmail(text)}
        />
        <Image style={styles.contactIcon} source={contact} />  
      </View>
      <View style={styles.inputWrapper}>
        <TextInput 
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#C4C4C4"
          onChangeText={text => setPassword(text)}
        />
        <Image style={styles.contactIcon} source={contact} />  
      </View>

      {error.length > 0 && <View style={{ marginBottom: 10 }}>
        <Text style={{ textAlign: 'center', color: "#ff0000" }}>{error}</Text>
      </View>}
      
      <TouchableHighlight style={styles.SignInButton} onPress={handleSignup}>
        <Text style={styles.SignInButtonText}>Sign Up</Text>
      </TouchableHighlight> 
      <View style={styles.labelText2}>
        <TouchableOpacity onPress={()=> navigation.push('Login')}>
          <Text style={{color: "#FFFFFF"}}>Already have an account?        
                <Text style={{color: "#EE008F"}}> Sign In</Text>
          </Text>  
        </TouchableOpacity>
      </View>
      <View style={styles.labelText3}>
        <Text style={{color: "#D3D3D3", textAlign: 'center'}}>
          By clicking Sign In, you agree to our <Text style={{color: "#EE008F",textDecorationLine:"underline"}}>Terms</Text> and that you have read our <Text style={{color: "#EE008F",textDecorationLine:"underline"}}>Data Use policy</Text>
        </Text>   
      </View>
    </View>
  );
}

export default SignUp;