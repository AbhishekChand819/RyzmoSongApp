import React, { Component } from 'react';
import { View,Image,StyleSheet,Text,TextInput,TouchableHighlight } from 'react-native';
import logo from './Logo.png';
import contact from './contact.png';
import {Link } from "react-router-native";

const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
    width: 81,
    height: 81,
    left: 38,
    top: 117
  },
  background: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#1B0536",
    flexDirection: "row"
  }
});

export default class Login extends Component {
  render() {
    return (
      <View
        style={styles.background}
      >
        <Image
          style={styles.tinyLogo}
          source={logo}
        />
        <Text
          style={{
            position: "absolute",
            width: 193,
            height: 25,
            left: 38,
            top: 225,
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 28,
            lineHeight: 25,
            textAlign: "center",
            color: "#FFFFFF"
          }}
        >
          Welcome back,
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 193,
            height: 25,
            left: 28,
            top: 252,
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 20,
            lineHeight: 25,
            textAlign: "center",
            color: "#EE008F"
          }}
        >
        Sign in to continue
        </Text>
        <Image
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            left: 64,
            top: 360
          }}
          source={contact}
        />
        <Image
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            left: 64,
            top: 435
          }}
          source={contact}
        />
        <TextInput
          style={{
            width: "83%",
            height: 59,
            left: 38,
            top: 340,
            position: "absolute",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            borderWidth:2.5,
            borderColor:"#FFFFFF",
            borderRadius:20,
            fontSize: 15,
            lineHeight: 18,
            paddingLeft:60,
            color:"#FFFFFF"
          }}
          placeholder="Username or email"
          placeholderTextColor="#C4C4C4"
          >
        </TextInput>
        <TextInput
          secureTextEntry={true}
          style={{
            width: "83%",
            height: 59,
            left: 38,
            top: 415,
            position: "absolute",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            borderWidth:2.5,
            borderColor:"#FFFFFF",
            borderRadius:20,
            fontSize: 15,
            lineHeight: 18,
            paddingLeft:60,
            color:"#FFFFFF"
          }}
          placeholder="Password"
          placeholderTextColor="#C4C4C4"
          >
        </TextInput>
        <TouchableHighlight 
                style ={{
                    position: "absolute",
                    width: "83%",
                    height: 59,
                    left: 38,
                    top: 490,
                    backgroundColor: "#EE008F",
                    borderRadius: 50
                }}>
                <Text style={{
                  position: "absolute",
                  width: 74.99,
                  height: 24,
                  left: 150,
                  top: 16,           
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: 20,
                  lineHeight: 24,
                  color: "#FFFFFF"
                }}>
                  Sign In
                </Text>
          </TouchableHighlight> 
        <View
            style={{
              position: "absolute",
              height: 18,
              left: 115,
              top: 565,
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 15,
              lineHeight: 18,
              flexDirection:"row"
        }}>
          <Link to="/signup">
          <Text style={{color: "#FFFFFF"}}>
            Don’t have an account?        
              <Text style={{color: "#EE008F"}}> Sign Up</Text>
          </Text>
          </Link>   
        </View>
        <View style={{
          position: "absolute",
          width: "70%",
          height: 42,
          left: 65,
          top: 768,
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: 13,
          lineHeight: 25
        }}>
        <Text style={{color: "#D3D3D3", textAlign: 'center'}}>
          By clicking Sign In, you agree to our <Text style={{color: "#EE008F",textDecorationLine:"underline"}}>Terms</Text> and that you have read our <Text style={{color: "#EE008F",textDecorationLine:"underline"}}>Data Use policy</Text>
        </Text>   
        </View>
        </View>
    );
  }
}
