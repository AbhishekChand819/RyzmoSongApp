import "react-native-gesture-handler";  
import React,{useState} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import Search from './components/Search';
import Playlist from './components/Playlist'
import MusicPlayer from './components/MusicPlayer';

import TrackPlayer from 'react-native-track-player';
import { useEffect } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [currentRoute,setcurrentRoute] = useState('/');
  changeNavigationBarColor('#1B0536');
  const [songs, setSongs] = useState([]);
      useEffect(async () => {
         TrackPlayer.setupPlayer({}).then(async () => {}) 
    }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Playlist" component={Playlist} />
        <Stack.Screen name="Music Player" component={MusicPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
