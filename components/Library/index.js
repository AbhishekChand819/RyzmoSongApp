import React from 'react';
import {View, Text,StatusBar,ScrollView,TextInput,Image} from 'react-native';
import {styles} from './styles';
import AppNavigator from '../Navbar';
import search from '../../assets/search1.png';
import TrackLabel from '../shared/TrackLabel';
import { useNavigation } from '@react-navigation/native';

function Library() {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.heading}>Library</Text>
        <View style={styles.pillsContainer}>
            <View style={styles.pillBoxActive}>
                <Text style={styles.pillText}>Playlist</Text>
            </View>
            <View style={styles.pillBoxInActive}>
                <Text style={styles.pillText}>Artists</Text>
            </View>
            <View style={styles.pillBoxInActive}>
                <Text style={styles.pillText}>Languages</Text>
            </View>
        </View>
        <View style={styles.LibraryContainer}>
            <TrackLabel
                text="Liked Songs"
                image={require('../../assets/likedPlaylist.png')}
                gradient={['rgba(238, 0, 143, 0)', '#EE008F']}
                type='library'></TrackLabel>
            <TrackLabel
                text="Dua Lipa"
                image={require('../../assets/dualipa.png')}
                gradient={['rgba(238, 0, 143, 0)', '#D708F9']}
                type='library'></TrackLabel>
            <TrackLabel
                text="Year 2019"
                image={require('../../assets/arijit.png')}
                gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}
                type='library'></TrackLabel>
            <TrackLabel
                text="Year 2018"
                image={require('../../assets/edsheeran.png')}
                gradient={['rgba(238, 255, 255, 0)', '#0137C7']}
                type='library'></TrackLabel>
            <TrackLabel
                text="JuiceWRLD"
                image={require('../../assets/juicewrld.png')}
                gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}
                type='library'></TrackLabel>
            <TrackLabel
                text="Eminem"
                image={require('../../assets/eminem.png')}
                gradient={['rgba(238, 255, 255, 0)', '#0137C7']}
                type='library'></TrackLabel>
        </View>
      </ScrollView>
      <AppNavigator navigation={navigation}></AppNavigator>
    </React.Fragment>
  );
}

export default Library;
