import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import CreatePlaylist from './components/CreatePlaylist';
import Playlist from './components/Playlist';
import MusicPlayer from './components/MusicPlayer';



export default function App() {
  changeNavigationBarColor('#1B0536');
  return (
    <NativeRouter>
      <Route path="/" component={CreatePlaylist} />
      {/* <Route path="/" component={Screen2} /> */}
    </NativeRouter>
  );
}
