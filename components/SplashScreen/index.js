import React from 'react';
import {View, StatusBar, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function SplashScreen() {
  const navigation = useNavigation();
  useEffect(async () => {
    setTimeout(()=>{
        navigation.push('Home')
    },2000)
}, []);
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
        <View style={{paddingTop: 10}}>
          <Image source={require('../../assets/logo.png')}/>
        </View>
    </React.Fragment>
  );
}

export default SplashScreen;
