import React from 'react';
import {View, StatusBar, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AnimatedSplash from "react-native-animated-splash-screen";
import Home from '../Home';


function SplashScreen() {
  const navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(async () => {
    setTimeout(()=>{
      setIsLoaded(true);
    }, 2000)
  }, []);

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <AnimatedSplash
        isLoaded={isLoaded}
        logoImage={require("../../assets/logo.png")}
        backgroundColor={"#1B0536"}
        logoHeight={120}
        logoWidth={120}
      >
        <Home/> 
      </AnimatedSplash>
    </React.Fragment>
  );
}

export default SplashScreen;
