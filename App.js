import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Home from './components/Home';
import Playlist from './components/Playlist';
import Login from './components/Login';



export default function App() {
  changeNavigationBarColor('#1B0536');
  return (
    <NativeRouter>
      <Route path="/" component={Login} />
      {/* <Route path="/" component={Screen2} /> */}
    </NativeRouter>
  );
}
