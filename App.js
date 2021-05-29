import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import TrackPlayer from 'react-native-track-player';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import Search from './components/Search';
import Playlist from './components/Playlist';
import MusicPlayer from './components/MusicPlayer';
import Signup from './components/Signup';
import Login from './components/Login';
import Library from './components/Library';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {
  changeNavigationBarColor('#1B0536');
  useEffect(async () => {
    TrackPlayer.setupPlayer({}).then(async () => {});
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Register" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Playlist" component={Playlist} />
        <Stack.Screen name="Music Player" component={MusicPlayer} />
        <Stack.Screen name="Library" component={Library} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
